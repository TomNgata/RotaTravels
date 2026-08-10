import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { INITIAL_EVENT_CONFIG, CONFIRMED_PANELISTS, PROGRAMME_PILLARS, PROGRAMME_TIMELINE, PARTNERS_SHOWCASE, FAQS_LIST } from './src/data/eventData.js';
import { COUNTRIES_DATA } from './src/data/countriesData.js';
import { RESOURCES_DATA } from './src/data/resourcesData.js';
import { EventConfig, EventRegistration, PreEventQuestion, TravelHackSubmission } from './src/types.js';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory data store for live registrations, questions, and community hacks
  let currentEventConfig: EventConfig = { ...INITIAL_EVENT_CONFIG };

  const registrations: EventRegistration[] = [
    {
      id: 'reg-demo-1',
      ticketNumber: 'RTH26-8924',
      fullName: 'Rtr Alex Mutua',
      email: 'alex.mutua@rotaract.org',
      phone: '+254 712 345 678',
      club: 'Rotaract Club of Langata',
      district: 'District 9212',
      role: 'Member',
      attendanceMode: 'in-person',
      countryOfResidence: 'Kenya',
      questionForPanel: 'How can young entrepreneurs present personal bank statements when business and personal income are combined?',
      registeredAt: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
      id: 'reg-demo-2',
      ticketNumber: 'RTH26-9012',
      fullName: 'Rtr Grace Koby',
      email: 'grace.koby@rotaract.org',
      phone: '+225 07 89 0123',
      club: 'Rotaract Club of Abidjan Doyen',
      district: 'District 9102',
      role: 'Club Officer',
      attendanceMode: 'virtual',
      countryOfResidence: 'Côte d’Ivoire',
      questionForPanel: 'What are the key transit visa requirements when traveling through Accra or Lomé to Abidjan?',
      registeredAt: new Date(Date.now() - 86400000 * 1).toISOString()
    }
  ];

  const preEventQuestions: PreEventQuestion[] = [
    {
      id: 'q-1',
      senderName: 'Rtr Alex Mutua',
      senderClub: 'RAC Langata',
      categoryPillarId: 1,
      questionText: 'How can young entrepreneurs present clean bank statements when personal and small business cash flow are mixed in one account?',
      isAnonymous: false,
      status: 'approved',
      submittedAt: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
      id: 'q-2',
      senderName: 'Rtr Grace Koby',
      senderClub: 'RAC Abidjan Doyen',
      categoryPillarId: 3,
      questionText: 'What are the step-by-step e-Visa requirements for non-ECOWAS delegates traveling to Abidjan for RAS 2026?',
      isAnonymous: false,
      status: 'approved',
      submittedAt: new Date(Date.now() - 86400000 * 1).toISOString()
    },
    {
      id: 'q-3',
      senderName: 'Anonymous Delegate',
      senderClub: 'District 9214',
      categoryPillarId: 1,
      questionText: 'I had a Schengen visa refusal 2 years ago due to insufficient funds. How should I address that refusal in my next visa application?',
      isAnonymous: true,
      status: 'approved',
      submittedAt: new Date(Date.now() - 43200000).toISOString()
    }
  ];

  const communityHacks: TravelHackSubmission[] = [
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

  // API ROUTES
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Event Config Endpoint
  app.get('/api/event-config', (req, res) => {
    res.json({
      config: currentEventConfig,
      panelists: CONFIRMED_PANELISTS,
      pillars: PROGRAMME_PILLARS,
      timeline: PROGRAMME_TIMELINE,
      partners: PARTNERS_SHOWCASE,
      faqs: FAQS_LIST,
      stats: {
        totalRegistrations: registrations.length + 142, // Includes baseline offset
        preSubmittedQuestions: preEventQuestions.length,
        approvedHacks: communityHacks.filter(h => h.status === 'approved').length
      }
    });
  });

  // Update Event Config (e.g., Host Club update or Phase change)
  app.put('/api/event-config', (req, res) => {
    const { currentHost, isHostConfirmed, venueName, isVenueConfirmed, phase, liveStreamUrl } = req.body;
    if (currentHost !== undefined) currentEventConfig.currentHost = currentHost;
    if (isHostConfirmed !== undefined) currentEventConfig.isHostConfirmed = isHostConfirmed;
    if (venueName !== undefined) currentEventConfig.venueName = venueName;
    if (isVenueConfirmed !== undefined) currentEventConfig.isVenueConfirmed = isVenueConfirmed;
    if (phase !== undefined) currentEventConfig.phase = phase;
    if (liveStreamUrl !== undefined) currentEventConfig.liveStreamUrl = liveStreamUrl;

    res.json({ success: true, config: currentEventConfig });
  });

  // Registration Endpoint
  app.post('/api/register', (req, res) => {
    const { fullName, email, phone, club, district, role, attendanceMode, countryOfResidence, questionForPanel } = req.body;

    if (!fullName || !email || !club || !attendanceMode) {
      res.status(400).json({ error: 'Missing required fields: fullName, email, club, attendanceMode' });
      return;
    }

    const ticketNumber = `RTH26-${Math.floor(1000 + Math.random() * 9000)}`;
    const newReg: EventRegistration = {
      id: `reg-${Date.now()}`,
      ticketNumber,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: (phone || '').trim(),
      club: club.trim(),
      district: (district || 'District 9212').trim(),
      role: (role || 'Member').trim(),
      attendanceMode,
      countryOfResidence: (countryOfResidence || 'Kenya').trim(),
      questionForPanel: questionForPanel ? questionForPanel.trim() : undefined,
      registeredAt: new Date().toISOString()
    };

    registrations.push(newReg);

    // If a question was included in registration, record it as a pre-event question
    if (questionForPanel && questionForPanel.trim().length > 5) {
      const newQuestion: PreEventQuestion = {
        id: `q-${Date.now()}`,
        senderName: fullName,
        senderClub: club,
        categoryPillarId: 1,
        questionText: questionForPanel.trim(),
        isAnonymous: false,
        status: 'approved',
        submittedAt: new Date().toISOString()
      };
      preEventQuestions.push(newQuestion);
    }

    res.json({
      success: true,
      ticket: newReg,
      totalCount: registrations.length + 142
    });
  });

  // Get Registrations List (Count & List)
  app.get('/api/registrations', (req, res) => {
    res.json({
      totalCount: registrations.length + 142,
      registrations: registrations.map(r => ({
        id: r.id,
        ticketNumber: r.ticketNumber,
        fullName: r.fullName,
        club: r.club,
        district: r.district,
        attendanceMode: r.attendanceMode,
        countryOfResidence: r.countryOfResidence,
        registeredAt: r.registeredAt
      }))
    });
  });

  // Pre-Submitted Questions Endpoints
  app.get('/api/questions', (req, res) => {
    res.json({ questions: preEventQuestions });
  });

  app.post('/api/questions', (req, res) => {
    const { senderName, senderClub, categoryPillarId, questionText, isAnonymous } = req.body;

    if (!questionText || questionText.trim().length < 5) {
      res.status(400).json({ error: 'Question text must be at least 5 characters long.' });
      return;
    }

    const newQ: PreEventQuestion = {
      id: `q-${Date.now()}`,
      senderName: isAnonymous ? 'Anonymous Delegate' : (senderName || 'Rotaract Delegate'),
      senderClub: isAnonymous ? 'Rotaract Community' : (senderClub || 'Rotaract Club'),
      categoryPillarId: Number(categoryPillarId) || 1,
      questionText: questionText.trim(),
      isAnonymous: Boolean(isAnonymous),
      status: 'approved',
      submittedAt: new Date().toISOString()
    };

    preEventQuestions.push(newQ);
    res.json({ success: true, question: newQ });
  });

  // Community Travel Hacks Endpoints
  app.get('/api/hacks', (req, res) => {
    res.json({ hacks: communityHacks });
  });

  app.post('/api/hacks', (req, res) => {
    const { authorName, authorClub, authorRole, destinationCountry, category, hackTitle, hackDetails } = req.body;

    if (!authorName || !hackTitle || !hackDetails) {
      res.status(400).json({ error: 'Missing required hack fields: authorName, hackTitle, hackDetails' });
      return;
    }

    const newHack: TravelHackSubmission = {
      id: `hack-${Date.now()}`,
      authorName: authorName.trim(),
      authorClub: (authorClub || 'Rotaract Club').trim(),
      authorRole: (authorRole || 'Member').trim(),
      destinationCountry: (destinationCountry || 'Global').trim(),
      category: (category || 'Visa Application'),
      hackTitle: hackTitle.trim(),
      hackDetails: hackDetails.trim(),
      status: 'approved',
      submittedAt: new Date().toISOString(),
      votesCount: 1
    };

    communityHacks.unshift(newHack);
    res.json({ success: true, hack: newHack });
  });

  // Vote on a Hack
  app.post('/api/hacks/:id/vote', (req, res) => {
    const { id } = req.params;
    const hack = communityHacks.find(h => h.id === id);
    if (hack) {
      hack.votesCount += 1;
      res.json({ success: true, votesCount: hack.votesCount });
    } else {
      res.status(404).json({ error: 'Hack not found' });
    }
  });

  // Country Guides Endpoint
  app.get('/api/countries', (req, res) => {
    res.json({ countries: COUNTRIES_DATA });
  });

  app.get('/api/countries/:code', (req, res) => {
    const country = COUNTRIES_DATA.find(c => c.code.toUpperCase() === req.params.code.toUpperCase());
    if (country) {
      res.json({ country });
    } else {
      res.status(404).json({ error: 'Country guide not found' });
    }
  });

  // Resources Endpoint
  app.get('/api/resources', (req, res) => {
    res.json({ resources: RESOURCES_DATA });
  });

  app.get('/api/resources/:slug', (req, res) => {
    const resource = RESOURCES_DATA.find(r => r.slug === req.params.slug);
    if (resource) {
      res.json({ resource });
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  });

  // VITE MIDDLEWARE OR STATIC SERVING
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
