import type { VercelRequest, VercelResponse } from '@vercel/node';
import { INITIAL_EVENT_CONFIG, CONFIRMED_PANELISTS, PROGRAMME_PILLARS, PROGRAMME_TIMELINE, PARTNERS_SHOWCASE, FAQS_LIST } from '../src/data/eventData';
import { countRegistrations, countQuestions, listHacks, usingDatabase } from './_lib/store';

export default async function handler(_req: VercelRequest, res: VercelResponse): Promise<void> {
  try {
    const [totalRegistrations, preSubmittedQuestions, hacks] = await Promise.all([
      countRegistrations(),
      countQuestions(),
      listHacks()
    ]);

    res.status(200).json({
      config: INITIAL_EVENT_CONFIG,
      panelists: CONFIRMED_PANELISTS,
      pillars: PROGRAMME_PILLARS,
      timeline: PROGRAMME_TIMELINE,
      partners: PARTNERS_SHOWCASE,
      faqs: FAQS_LIST,
      storage: usingDatabase ? 'database' : 'memory',
      stats: {
        totalRegistrations,
        preSubmittedQuestions,
        approvedHacks: hacks.filter((h) => h.status === 'approved').length
      }
    });
  } catch (err) {
    console.error('event-config error', err);
    res.status(500).json({ error: 'Failed to load event data.' });
  }
}
