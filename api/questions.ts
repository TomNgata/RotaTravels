import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { PreEventQuestion } from '../src/types';
import { insertQuestion, newId } from './_lib/store.js';
import { asString, clientIp, isAuthorized, rateLimit, unauthorized } from './_lib/http.js';

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  try {
    if (req.method === 'GET') {
      if (!isAuthorized(req)) {
        unauthorized(res);
        return;
      }
      res.status(200).json({ questions: [] });
      return;
    }

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    if (!rateLimit(`questions:${clientIp(req)}`, 5, 60_000)) {
      res.status(429).json({ error: 'Too many submissions. Please try again in a minute.' });
      return;
    }

    const body = (req.body || {}) as Record<string, unknown>;

    if (typeof body.website === 'string' && body.website.length > 0) {
      res.status(400).json({ error: 'Submission rejected.' });
      return;
    }

    const questionText = asString(body.questionText, 1000);
    if (questionText.length < 5) {
      res.status(400).json({ error: 'Question text must be at least 5 characters long.' });
      return;
    }

    const isAnonymous = body.isAnonymous === true;
    const pillarId = Number(body.categoryPillarId);
    const newQ: PreEventQuestion = {
      id: newId('q'),
      senderName: isAnonymous ? 'Anonymous Delegate' : asString(body.senderName, 120) || 'Rotaract Delegate',
      senderClub: isAnonymous ? 'Rotaract Community' : asString(body.senderClub, 160) || 'Rotaract Club',
      categoryPillarId: Number.isInteger(pillarId) && pillarId >= 1 && pillarId <= 4 ? pillarId : 1,
      questionText,
      isAnonymous,
      status: 'approved',
      submittedAt: new Date().toISOString()
    };

    await insertQuestion(newQ);
    res.status(200).json({ success: true, question: newQ });
  } catch (err) {
    console.error('questions error', err);
    res.status(500).json({ error: 'Failed to submit question.' });
  }
}
