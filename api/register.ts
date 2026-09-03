import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { EventRegistration, AttendanceMode } from '../src/types';
import { insertRegistration, countRegistrations, insertQuestion, newId, newTicketNumber } from './_lib/store.js';
import { asString, clientIp, rateLimit } from './_lib/http.js';

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!rateLimit(`register:${clientIp(req)}`, 8, 60_000)) {
    res.status(429).json({ error: 'Too many attempts. Please try again in a minute.' });
    return;
  }

  const body = (req.body || {}) as Record<string, unknown>;

  if (typeof body.website === 'string' && body.website.length > 0) {
    res.status(400).json({ error: 'Submission rejected.' });
    return;
  }

  const fullName = asString(body.fullName, 120);
  const email = asString(body.email, 200);
  const club = asString(body.club, 160);
  const attendanceMode = asString(body.attendanceMode, 20) as AttendanceMode;

  if (!fullName || !email || !club || (attendanceMode !== 'in-person' && attendanceMode !== 'virtual')) {
    res.status(400).json({ error: 'Missing required fields: fullName, email, club, attendanceMode (in-person | virtual)' });
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: 'Please provide a valid email address.' });
    return;
  }

  try {
    const newReg: EventRegistration = {
      id: newId('reg'),
      ticketNumber: newTicketNumber(),
      fullName,
      email,
      phone: asString(body.phone, 40),
      club,
      district: asString(body.district, 80) || 'District 9212',
      role: asString(body.role, 80) || 'Member',
      attendanceMode,
      countryOfResidence: asString(body.countryOfResidence, 80) || 'Kenya',
      questionForPanel: asString(body.questionForPanel, 1000) || undefined,
      registeredAt: new Date().toISOString()
    };

    await insertRegistration(newReg);

    const questionText = asString(body.questionForPanel, 1000);
    if (questionText.length > 5) {
      await insertQuestion({
        id: newId('q'),
        senderName: fullName,
        senderClub: club,
        categoryPillarId: 1,
        questionText,
        isAnonymous: false,
        status: 'approved',
        submittedAt: new Date().toISOString()
      });
    }

    const totalCount = await countRegistrations();

    res.status(200).json({
      success: true,
      ticket: newReg,
      totalCount
    });
  } catch (err) {
    console.error('register error', err);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
}
