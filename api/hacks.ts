import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { TravelHackSubmission } from '../src/types';
import { listHacks, insertHack, newId } from './_lib/store.js';
import { asString, clientIp, rateLimit } from './_lib/http.js';

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  try {
    if (req.method === 'GET') {
      const hacks = await listHacks();
      res.status(200).json({ hacks });
      return;
    }

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    if (!rateLimit(`hacks:${clientIp(req)}`, 5, 60_000)) {
      res.status(429).json({ error: 'Too many submissions. Please try again in a minute.' });
      return;
    }

    const body = (req.body || {}) as Record<string, unknown>;

    if (typeof body.website === 'string' && body.website.length > 0) {
      res.status(400).json({ error: 'Submission rejected.' });
      return;
    }

    const authorName = asString(body.authorName, 120);
    const hackTitle = asString(body.hackTitle, 160);
    const hackDetails = asString(body.hackDetails, 2000);

    if (!authorName || !hackTitle || !hackDetails) {
      res.status(400).json({ error: 'Missing required hack fields: authorName, hackTitle, hackDetails' });
      return;
    }

    const newHack: TravelHackSubmission = {
      id: newId('hack'),
      authorName,
      authorClub: asString(body.authorClub, 160) || 'Rotaract Club',
      authorRole: asString(body.authorRole, 80) || 'Member',
      destinationCountry: asString(body.destinationCountry, 80) || 'Global',
      category: (asString(body.category, 60) || 'Visa Application') as TravelHackSubmission['category'],
      hackTitle,
      hackDetails,
      status: 'approved',
      submittedAt: new Date().toISOString(),
      votesCount: 1
    };

    await insertHack(newHack);
    res.status(200).json({ success: true, hack: newHack });
  } catch (err) {
    console.error('hacks error', err);
    res.status(500).json({ error: 'Failed to submit travel hack.' });
  }
}
