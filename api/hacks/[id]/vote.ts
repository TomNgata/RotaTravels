import type { VercelRequest, VercelResponse } from '@vercel/node';
import { voteHack } from '../../_lib/store.js';
import { clientIp, rateLimit } from '../../_lib/http.js';

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!rateLimit(`vote:${clientIp(req)}`, 20, 60_000)) {
    res.status(429).json({ error: 'Too many votes. Please slow down.' });
    return;
  }

  const raw = req.query.id;
  const id = Array.isArray(raw) ? raw[0] : raw;

  if (!id) {
    res.status(400).json({ error: 'Missing hack id' });
    return;
  }

  try {
    const votesCount = await voteHack(id);
    if (votesCount === null) {
      res.status(404).json({ error: 'Hack not found' });
      return;
    }
    res.status(200).json({ success: true, votesCount });
  } catch (err) {
    console.error('vote error', err);
    res.status(500).json({ error: 'Failed to record vote.' });
  }
}
