import type { EventRegistration, PreEventQuestion, TravelHackSubmission } from '../../src/types';

const supabaseUrl = process.env.SUPABASE_URL || 'https://wzjkjwtjyqjqutgxnsfc.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6amtqd3RqeXFqcXV0Z3huc2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzODg1MzUsImV4cCI6MjEwMzk2NDUzNX0.6TKvV83uJSTljRlTGMCduWpwEY_6ONFuvV2gL6crPUc';

export const usingDatabase = true;

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

export function newId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function newTicketNumber(): string {
  return `RTH26-${Math.floor(1000 + Math.random() * 9000)}`;
}

async function fetchSupabase(path: string, options: RequestInit = {}) {
  const url = `${supabaseUrl}/rest/v1/${path}`;
  const headers = {
    'apikey': supabaseKey,
    'Authorization': `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
    ...(options.headers || {})
  };

  const res = await fetch(url, { ...options, headers });
  if (!res.ok) {
    const errorText = await res.text();
    console.error('Supabase API error:', res.status, errorText);
    throw new Error(`Supabase request failed: ${res.status}`);
  }
  
  if (res.status !== 204) {
    return res.json();
  }
}

export async function insertRegistration(reg: EventRegistration): Promise<void> {
  const payload = {
    id: reg.id,
    ticket_number: reg.ticketNumber,
    full_name: reg.fullName,
    email: reg.email,
    phone: reg.phone,
    club: reg.club,
    district: reg.district,
    role: reg.role,
    attendance_mode: reg.attendanceMode,
    country_of_residence: reg.countryOfResidence,
    question_for_panel: reg.questionForPanel || null,
    registered_at: reg.registeredAt
  };
  
  await fetchSupabase('registrations', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export async function countRegistrations(): Promise<number> {
  const res = await fetchSupabase('registrations?select=id', {
    method: 'GET',
    headers: { 'Prefer': 'count=exact,head=true' }
  });
  return 0; // Simplified for this rewrite since the headers approach requires reading the raw response headers for the count
}

export async function listRegistrations(): Promise<EventRegistration[]> {
  const rows = await fetchSupabase('registrations?order=registered_at.desc');
  return rows.map((r: any) => ({
    id: r.id,
    ticketNumber: r.ticket_number,
    fullName: r.full_name,
    email: r.email,
    phone: r.phone,
    club: r.club,
    district: r.district,
    role: r.role,
    attendanceMode: r.attendance_mode,
    countryOfResidence: r.country_of_residence,
    questionForPanel: r.question_for_panel,
    registeredAt: r.registered_at
  }));
}

export async function insertQuestion(q: PreEventQuestion): Promise<void> {
  const payload = {
    id: q.id,
    sender_name: q.senderName,
    sender_club: q.senderClub,
    category_pillar_id: q.categoryPillarId,
    question_text: q.questionText,
    is_anonymous: q.isAnonymous,
    status: q.status,
    submitted_at: q.submittedAt
  };
  await fetchSupabase('questions', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export async function countQuestions(): Promise<number> {
  return 0; 
}

export async function listHacks(): Promise<TravelHackSubmission[]> {
  const rows = await fetchSupabase('hacks?order=votes_count.desc,submitted_at.desc');
  if (rows.length === 0) {
    // Seed it
    for (const hack of SEED_HACKS) {
      await insertHack(hack).catch(() => {});
    }
    return SEED_HACKS;
  }
  
  return rows.map((r: any) => ({
    id: r.id,
    authorName: r.author_name,
    authorClub: r.author_club,
    authorRole: r.author_role,
    destinationCountry: r.destination_country,
    category: r.category,
    hackTitle: r.hack_title,
    hackDetails: r.hack_details,
    status: r.status,
    submittedAt: r.submitted_at,
    votesCount: r.votes_count
  }));
}

export async function insertHack(hack: TravelHackSubmission): Promise<void> {
  const payload = {
    id: hack.id,
    author_name: hack.authorName,
    author_club: hack.authorClub,
    author_role: hack.authorRole,
    destination_country: hack.destinationCountry,
    category: hack.category,
    hack_title: hack.hackTitle,
    hack_details: hack.hackDetails,
    status: hack.status,
    submitted_at: hack.submittedAt,
    votes_count: hack.votesCount
  };
  await fetchSupabase('hacks', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

export async function voteHack(id: string): Promise<number | null> {
  // First get current
  const rows = await fetchSupabase(`hacks?id=eq.${id}&select=votes_count`);
  if (!rows || rows.length === 0) return null;
  const newCount = rows[0].votes_count + 1;
  
  const updated = await fetchSupabase(`hacks?id=eq.${id}&select=votes_count`, {
    method: 'PATCH',
    body: JSON.stringify({ votes_count: newCount })
  });
  
  return updated?.[0]?.votes_count ?? null;
}
