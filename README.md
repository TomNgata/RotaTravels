# RotaTravels — Rotaract Travel Hacks 2026

Public event website, registration portal and evergreen travel knowledge hub for **Rotaract Travel Hacks 2026** — a hybrid fellowship by the **Rotaract Club of Nairobi Parklands** (District 9212).

**Event:** Thursday, 3 September 2026 · 6:30–8:30 PM EAT · Clarion Hotel CBD, Nairobi + global live stream · In-person KES 100 (room charge) · Virtual free.

## Stack

- **Frontend:** Vite + React 19 + TypeScript + Tailwind CSS 4
- **API:** Vercel Serverless Functions (`api/` directory)
- **Database:** Postgres (Neon / Vercel Postgres) with automatic in-memory fallback
- **Hosting:** Vercel

## Project structure

```
index.html            Meta tags, Open Graph, Event JSON-LD schema
vercel.json           Build config, SPA rewrites, cache headers
api/                  Serverless API (replaces the former Express server)
  event-config.ts     GET  /api/event-config      Event content + live stats
  register.ts         POST /api/register          Registration (rate-limited, honeypot)
  questions.ts        GET+POST /api/questions     GET is admin-token protected
  hacks.ts            GET+POST /api/hacks         Community travel hacks
  hacks/[id]/vote.ts  POST /api/hacks/:id/vote    Upvote a hack
  registrations.ts    GET /api/registrations      Admin-token protected check-in export
  health.ts           GET /api/health
  _lib/store.ts       Postgres storage layer (in-memory fallback)
src/
  components/         UI components by section
  data/               Event content: panelists, pillars, timeline, partners, FAQs,
                      13-country travel directory, resource hub content
  types.ts            Shared TypeScript types
public/
  panelists/          Panelist headshots
  og-card.jpg         1200x630 social share card (WhatsApp/X/Facebook previews)
  favicon.png, robots.txt
```

## Local development

```bash
npm install
npm run dev        # Frontend on http://localhost:5173 (API calls need vercel dev or a DB-less fallback)
npm run lint       # TypeScript check
npm run build      # Production build to dist/
```

For full-stack local testing use the Vercel CLI: `npm i -g vercel && vercel dev`.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` (or `POSTGRES_URL`) | **Yes in production** | Postgres connection string. Without it the API falls back to in-memory storage and **all registrations are lost when the serverless instance recycles.** Free option: [Neon](https://neon.tech) or Vercel Marketplace → Neon/Postgres (integration sets `POSTGRES_URL` automatically). Tables are created automatically on first request. |
| `ADMIN_TOKEN` | Recommended | Bearer token for `GET /api/registrations` (check-in export) and `GET /api/questions` (moderator view). Endpoints return 401 if unset. |

Copy `.env.example` to `.env` for local reference. Configure the real values in **Vercel → Project → Settings → Environment Variables**.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com/new), import the repo. Framework preset **Vite** is auto-detected (`vercel.json` pins the build command and output directory).
3. Add environment variables: `DATABASE_URL` (Neon/Postgres) and `ADMIN_TOKEN`.
4. Deploy. Every push to the default branch deploys production; PRs get preview URLs.
5. After the first deploy: set your production domain in Vercel → Settings → Domains, then update `og:url`-style absolute references if you add any (current tags use root-relative paths) and the sitemap URL in `public/robots.txt`.

## Admin / check-in usage

```bash
# Export registrations for the check-in desk (CSV-ready JSON)
curl -H "Authorization: Bearer $ADMIN_TOKEN" https://your-domain/api/registrations

# Moderator view of pre-submitted panel questions
curl -H "Authorization: Bearer $ADMIN_TOKEN" https://your-domain/api/questions
```

## Integrity rules (project standard)

- Never display a partner/sponsor as confirmed unless confirmed in `Partner_Invitation_Response_Tracker.md`.
- Registration counts shown are real database counts — no offsets or projections.
- All travel guidance links to official government portals and carries a last-verified date.

Full launch strategy: see `WEBSITE_STRATEGY_REPORT.md` in the parent workspace.
