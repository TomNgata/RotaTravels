import type { VercelRequest, VercelResponse } from '@vercel/node';
import { listRegistrations, countRegistrations } from './_lib/store';
import { isAuthorized, unauthorized } from './_lib/http';

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (!isAuthorized(req)) {
    unauthorized(res);
    return;
  }

  try {
    const [registrations, totalCount] = await Promise.all([listRegistrations(), countRegistrations()]);
    res.status(200).json({ totalCount, registrations });
  } catch (err) {
    console.error('registrations error', err);
    res.status(500).json({ error: 'Failed to load registrations.' });
  }
}
