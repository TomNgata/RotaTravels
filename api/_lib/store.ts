import postgres from 'postgres';
import type { EventRegistration, PreEventQuestion, TravelHackSubmission } from '../../src/types';

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

export const usingDatabase = Boolean(connectionString);

const sql = connectionString ? postgres(connectionString, { max: 1, idle_timeout: 20, connect_timeout: 10 }) : null;

let schemaReady: Promise<void> | null = null;

async function createSchema(): Promise<void> {
  if (!sql) return;
  await sql`
    CREATE TABLE IF NOT EXISTS registrations (
      id TEXT PRIMARY KEY,
      ticket_number TEXT NOT NULL,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT DEFAULT '',
      club TEXT NOT NULL,
      district TEXT DEFAULT '',
      role TEXT DEFAULT '',
      attendance_mode TEXT NOT NULL,
      country_of_residence TEXT DEFAULT '',
      question_for_panel TEXT,
      registered_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`;
  await sql`
    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY,
      sender_name TEXT NOT NULL,
      sender_club TEXT NOT NULL,
      category_pillar_id INT NOT NULL DEFAULT 1,
      question_text TEXT NOT NULL,
      is_anonymous BOOLEAN NOT NULL DEFAULT FALSE,
      status TEXT NOT NULL DEFAULT 'approved',
      submitted_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )`;
  await sql`
    CREATE TABLE IF NOT EXISTS hacks (
      id TEXT PRIMARY KEY,
      author_name TEXT NOT NULL,
      author_club TEXT DEFAULT '',
      author_role TEXT DEFAULT '',
      destination_country TEXT DEFAULT '',
      category TEXT DEFAULT '',
      hack_title TEXT NOT NULL,
      hack_details TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'approved',
      submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      votes_count INT NOT NULL DEFAULT 1
    )`;
}

function ensureSchema(): Promise<void> {
  if (!sql) return Promise.resolve();
  if (!schemaReady) schemaReady = createSchema().catch((err) => { schemaReady = null; throw err; });
  return schemaReady;
}

const SEED_HACKS: TravelHackSubmission[] = [
  {
    id: 'hack-1',
    authorName: 'Rtr Daniel Ochieng',
    authorClub: 'Rotaract Club of Nairobi Muthaiga North',
    authorRole: 'International Service Director',
    destinationCountry: 'Côte d’Ivoire',
    category: 'Visa Application',
    hackTitle: 'Print SNEDAI e-Visa Barcode in High Resolution Color',
    hackDetails: 'When arriving at Abidjan airport (ABJ), biometric scanning kiosks read the QR/Barcode on your printed SNEDAI pre-enrollment receipt. Print it on good quality paper in color to avoid scanner delays!',
    status: 'approved',
    submittedAt: '2026-08-05T12:00:00Z',
    votesCount: 24
  },
  {
    id: 'hack-2',
    authorName: 'Rtr Fatima Bello',
    authorClub: 'Rotaract Club of Victoria Island',
    authorRole: 'Club Member',
    destinationCountry: 'Rwanda',
    category: 'Airport & Transit',
    hackTitle: 'Zero Polythene Bags Rule in Kigali',
    hackDetails: 'Luggage is scanned at Kigali Airport for single-use plastic bags. Use fabric packing cubes or reusable ziplocks instead to avoid forfeiting bags at customs.',
    status: 'approved',
    submittedAt: '2026-08-07T09:30:00Z',
    votesCount: 19
  },
  {
    id: 'hack-3',
    authorName: 'IPP Tom Ngata',
    authorClub: 'Rotaract Club of Westlands',
    authorRole: 'Initiative Champion',
    destinationCountry: 'Schengen Area',
    category: 'Documentation',
    hackTitle: 'Attach Rotaract Board Resolution to Invitation Letters',
    hackDetails: 'When submitting a club sponsorship letter to a European embassy, attach the signed Rotaract Club Board Resolution confirming the travel grant. It adds official institutional credibility!',
    status: 'approved',
    submittedAt: '2026-08-08T15:15:00Z',
    votesCount: 38
  }
];

const memory = {
  registrations: [] as EventRegistration[],
  questions: [] as PreEventQuestion[],
  hacks: [...SEED_HACKS] as TravelHackSubmission[],
  hacksSeeded: false
};

export function newId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function newTicketNumber(): string {
  return `RTH26-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function insertRegistration(reg: EventRegistration): Promise<void> {
  if (!sql) { memory.registrations.push(reg); return; }
  await ensureSchema();
  await sql`
    INSERT INTO registrations
      (id, ticket_number, full_name, email, phone, club, district, role, attendance_mode, country_of_residence, question_for_panel, registered_at)
    VALUES
      (${reg.id}, ${reg.ticketNumber}, ${reg.fullName}, ${reg.email}, ${reg.phone}, ${reg.club}, ${reg.district}, ${reg.role}, ${reg.attendanceMode}, ${reg.countryOfResidence}, ${reg.questionForPanel ?? null}, ${reg.registeredAt})`;
}

export async function countRegistrations(): Promise<number> {
  if (!sql) return memory.registrations.length;
  await ensureSchema();
  const rows = await sql`SELECT COUNT(*)::int AS count FROM registrations`;
  return rows[0]?.count ?? 0;
}

export async function listRegistrations(): Promise<EventRegistration[]> {
  if (!sql) return [...memory.registrations];
  await ensureSchema();
  const rows = await sql`
    SELECT id, ticket_number AS "ticketNumber", full_name AS "fullName", email, phone, club,
           district, role, attendance_mode AS "attendanceMode", country_of_residence AS "countryOfResidence",
           question_for_panel AS "questionForPanel", registered_at AS "registeredAt"
    FROM registrations ORDER BY registered_at DESC`;
  return rows as unknown as EventRegistration[];
}

export async function insertQuestion(q: PreEventQuestion): Promise<void> {
  if (!sql) { memory.questions.push(q); return; }
  await ensureSchema();
  await sql`
    INSERT INTO questions
      (id, sender_name, sender_club, category_pillar_id, question_text, is_anonymous, status, submitted_at)
    VALUES
      (${q.id}, ${q.senderName}, ${q.senderClub}, ${q.categoryPillarId}, ${q.questionText}, ${q.isAnonymous}, ${q.status}, ${q.submittedAt})`;
}

export async function countQuestions(): Promise<number> {
  if (!sql) return memory.questions.length;
  await ensureSchema();
  const rows = await sql`SELECT COUNT(*)::int AS count FROM questions`;
  return rows[0]?.count ?? 0;
}

export async function listHacks(): Promise<TravelHackSubmission[]> {
  if (!sql) return [...memory.hacks];
  await ensureSchema();
  if (!memory.hacksSeeded) {
    const rows = await sql`SELECT COUNT(*)::int AS count FROM hacks`;
    if ((rows[0]?.count ?? 0) === 0) {
      for (const hack of SEED_HACKS) {
        await sql`
          INSERT INTO hacks (id, author_name, author_club, author_role, destination_country, category, hack_title, hack_details, status, submitted_at, votes_count)
          VALUES (${hack.id}, ${hack.authorName}, ${hack.authorClub}, ${hack.authorRole}, ${hack.destinationCountry}, ${hack.category}, ${hack.hackTitle}, ${hack.hackDetails}, ${hack.status}, ${hack.submittedAt}, ${hack.votesCount})
          ON CONFLICT (id) DO NOTHING`;
      }
    }
    memory.hacksSeeded = true;
  }
  const rows = await sql`
    SELECT id, author_name AS "authorName", author_club AS "authorClub", author_role AS "authorRole",
           destination_country AS "destinationCountry", category, hack_title AS "hackTitle",
           hack_details AS "hackDetails", status, submitted_at AS "submittedAt", votes_count AS "votesCount"
    FROM hacks ORDER BY votes_count DESC, submitted_at DESC`;
  return rows as unknown as TravelHackSubmission[];
}

export async function insertHack(hack: TravelHackSubmission): Promise<void> {
  if (!sql) { memory.hacks.unshift(hack); return; }
  await ensureSchema();
  await sql`
    INSERT INTO hacks
      (id, author_name, author_club, author_role, destination_country, category, hack_title, hack_details, status, submitted_at, votes_count)
    VALUES
      (${hack.id}, ${hack.authorName}, ${hack.authorClub}, ${hack.authorRole}, ${hack.destinationCountry}, ${hack.category}, ${hack.hackTitle}, ${hack.hackDetails}, ${hack.status}, ${hack.submittedAt}, ${hack.votesCount})`;
}

export async function voteHack(id: string): Promise<number | null> {
  if (!sql) {
    const hack = memory.hacks.find((h) => h.id === id);
    if (!hack) return null;
    hack.votesCount += 1;
    return hack.votesCount;
  }
  await ensureSchema();
  const rows = await sql`
    UPDATE hacks SET votes_count = votes_count + 1
    WHERE id = ${id}
    RETURNING votes_count AS "votesCount"`;
  return rows[0]?.votesCount ?? null;
}
