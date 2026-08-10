import { EventConfig, Speaker, ProgrammePillar, ProgrammeSegment, Partner, FAQItem } from '../types';

export const INITIAL_EVENT_CONFIG: EventConfig = {
  id: 'rotaract-travel-hacks-2026',
  title: 'Rotaract Travel Hacks 2026',
  subtitle: 'Fellowship & Global Digital Campaign',
  dateIso: '2026-09-03T18:00:00+03:00',
  dateFormatted: 'Thursday, 3 September 2026',
  timeFormatted: '6:00 PM – 7:30 PM EAT (15:00 UTC)',
  durationMinutes: 90,
  format: 'Hybrid (In-Person + Global Live Stream)',
  expectedAttendance: '100+ Live Attendees | 150+ Portal Registrations',
  confirmedDate: '3 September 2026',
  currentHost: '[HOST CLUB — TO BE CONFIRMED]',
  isHostConfirmed: false,
  venueName: 'Host Venue [Pending Confirmation]',
  venueAddress: 'Nairobi, Kenya & Online via Zoom/YouTube Live',
  isVenueConfirmed: false,
  phase: 'pre-event',
  budgetKes: 61500,
  liveStreamUrl: 'https://youtube.com/live/rotaract-travel-hacks-2026',
  hashtags: ['#RotaTravelHacks2026', '#GlobalRotaract', '#PathToRAS2026', '#RotaractD9212']
};

export const CONFIRMED_PANELISTS: Speaker[] = [
  {
    id: 'speaker-tom-ngata',
    name: 'IPP Tom Ngata',
    title: 'Initiative Champion & Past President',
    club: 'Rotaract Club of Westlands',
    district: 'District 9212',
    role: 'Travel Hacks Visionary & Lead Moderator',
    bio: 'Past President Tom Ngata conceptualized Rotaract Travel Hacks 2026 to systematically tackle visa and mobility barriers facing African youth in Rotary. Having navigated cross-border travel across multiple continents for professional and Rotaract leadership engagements, he leads the initiative’s strategic direction.',
    travelMilestones: ['Visits across 12+ African & European Countries', 'Rotary International Convention Delegate', 'Lead Architect of RotaTravel Knowledge Hub'],
    expertise: ['Visa Strategy & Bureaucracy Navigation', 'Official Invitation & Sponsorship Protocols', 'Cross-District Fellowship Building'],
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500',
    highlightDestination: 'Schengen Area & East Africa',
    featured: true,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com'
    }
  },
  {
    id: 'speaker-sam-gathaga',
    name: 'Rtr Sam Gathaga',
    title: 'Global Campaign Lead',
    club: 'Rotaract Club of Nairobi Muthaiga North',
    district: 'District 9212',
    role: 'Digital Strategy & PR Director',
    bio: 'Rtr Sam Gathaga drives the global digital strategy and public relations campaign for Rotaract Travel Hacks. An experienced traveller with expertise in digital story-telling, remote work mobility, and flight hacks, he specializes in turning complex documentation into bite-sized actionable guides.',
    travelMilestones: ['Global Digital Nomad Experience', 'Multi-country Youth Mobility Advocate', 'Campaign Lead reaching 5,000+ Rotaractors'],
    expertise: ['Flight Hacking & Mileage Optimization', 'Digital Travel Documentation', 'Remote Travel Budgeting'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500',
    highlightDestination: 'West Africa & Digital Hubs',
    featured: true,
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com'
    }
  },
  {
    id: 'speaker-panelist-3',
    name: 'Rtr Panelist 3 [RAC Langata]',
    title: 'International Service Specialist',
    club: 'Rotaract Club of Langata',
    district: 'District 9212',
    role: 'Panel Specialist — Visa & Financial Proof',
    bio: 'Confirmed member of the 5-person panel, selected via structured voting for extensive international travel track record. Specializes in personal financial documentation alignment, embassy interview readiness, and group delegation logistics.',
    travelMilestones: ['Attended 3+ International Rotaract Conferences', 'Successfully Processed Multiple Complex Visas', 'RAS Mobility Working Group'],
    expertise: ['Bank Statement Optimization', 'Sponsorship Verification', 'Embassy Interview Readiness'],
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500',
    highlightDestination: 'Côte d\'Ivoire (RAS 2026)',
    featured: true
  },
  {
    id: 'speaker-panelist-4',
    name: 'Rtr Panelist 4 [RAC Nairobi Thika Road]',
    title: 'Global Mobility & Budget Strategist',
    club: 'Rotaract Club of Nairobi Thika Road',
    district: 'District 9212',
    role: 'Panel Specialist — Travel Readiness & Forex',
    bio: 'Confirmed panelist with hands-on experience planning affordable international group travel for Rotaract delegations. Expert on currency conversion hacks, group accommodation bookings, travel insurance, and border clearance protocols.',
    travelMilestones: ['Navigated 8+ Border Crossings in Africa', 'Group Travel Organizer for 20+ Delegates', 'Budget Travel Masterclass Instructor'],
    expertise: ['Group Accommodation Hacks', 'Travel Insurance & Health Compliance', 'Foreign Exchange & Card Security'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500',
    highlightDestination: 'Southern & West Africa',
    featured: true
  },
  {
    id: 'speaker-panelist-5',
    name: 'Rtr Panelist 5 [RAC Nairobi Parklands]',
    title: 'RAS 2026 Ambassador & Protocol Officer',
    club: 'Rotaract Club of Nairobi Parklands',
    district: 'District 9212',
    role: 'Panel Specialist — Path to RAS 2026',
    bio: 'Confirmed panelist focusing on logistics, entry authorizations, and travel preparations for the upcoming Rotaract Africa Summit (RAS 2026) in Côte d\'Ivoire. Connects African Rotaractors with diplomatic and institutional travel protocols.',
    travelMilestones: ['Active Participant in Cross-District Rotaract Exchanges', 'Lead Coordinator for RAS 2026 Delegation Prep', 'Expert on ECOWAS & EAC Visa Rules'],
    expertise: ['RAS 2026 Entry & Transit Protocols', 'ECOWAS & EAC Visa Exemptions', 'Official Club Authorization Letters'],
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500',
    highlightDestination: 'Côte d\'Ivoire & Francophone Africa',
    featured: true
  }
];

export const PROGRAMME_PILLARS: ProgrammePillar[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'Visa Application Hacks & Bureaucracy',
    shortDescription: 'Demystifying embassy requirements, bank statement rules, proof of return, and sponsorship letter formats to eliminate avoidable visa refusals.',
    fullDescription: 'Navigating visa applications can feel overwhelming for young African travellers. Pillar 01 breaks down the mechanics of visa documentation: how to present ties to your home country, how to structure bank statements cleanly, how to secure genuine invitation letters from host Rotary clubs, and common pitfalls that trigger refusals.',
    iconName: 'FileText',
    keyTopics: [
      'Bank statement presentation (3–6 months balance stability vs sudden lump sums)',
      'Structuring official Rotary/Rotaract invitation & guarantee letters',
      'Establishing ties to country of residence (employment, assets, family, studies)',
      'Common embassy interview traps and how to respond calmly'
    ],
    assignedPanelists: ['IPP Tom Ngata', 'Rtr Panelist 3 [RAC Langata]']
  },
  {
    id: 2,
    numberStr: '02',
    title: 'Travel Readiness & Budgeting',
    shortDescription: 'Practical financial planning, cheap flight hacking, travel insurance essentials, multi-currency cards, and group accommodation strategies.',
    fullDescription: 'International fellowship should be accessible, not financially draining. Pillar 02 covers practical travel budgeting: finding affordable flights using fare aggregators and alerts, choosing reliable travel insurance, managing foreign exchange without hefty bank fees, and organizing safe, low-cost group stays.',
    iconName: 'Wallet',
    keyTopics: [
      'Flight search strategies (incognito modes, layover hacks, regional low-cost carriers)',
      'Multi-currency travel cards & avoiding international transaction fees',
      'Travel health insurance policies tailored for short-term fellowship trips',
      'Group accommodation tactics (Airbnb vs hostel vs Rotarian hosting)'
    ],
    assignedPanelists: ['Rtr Sam Gathaga', 'Rtr Panelist 4 [RAC Nairobi Thika Road]']
  },
  {
    id: 3,
    numberStr: '03',
    title: 'Path to RAS 2026 & Global Mobility',
    shortDescription: 'Direct roadmap for attending the Rotaract Africa Summit (RAS 2026) in Côte d’Ivoire, visa waivers, transit protocols, and international Rotary conventions.',
    fullDescription: 'Preparing African Rotaractors specifically for upcoming milestone events, starting with RAS 2026 in Abidjan, Côte d’Ivoire. Covers transit visas, health requirements (Yellow Fever, vaccinations), regional migration agreements, and leverage for future international Rotary conventions.',
    iconName: 'Compass',
    keyTopics: [
      'Step-by-step travel checklist for RAS 2026 (Côte d\'Ivoire entry & transit)',
      'Navigating ECOWAS & EAC free movement agreements',
      'Yellow Fever vaccine certificate rules & airport health clearance',
      'Leveraging Rotaract travel credentials for future Schengen / US / UK visa applications'
    ],
    assignedPanelists: ['Rtr Panelist 5 [RAC Nairobi Parklands]', 'IPP Tom Ngata']
  },
  {
    id: 4,
    numberStr: '04',
    title: 'Interactive Q&A & Floor Discussion',
    shortDescription: 'Direct live engagement pairing floor questions from attendees with pre-submitted travel challenges gathered from the Registration Portal.',
    fullDescription: 'A 25-minute fast-paced segment where panelists answer real, raw travel queries submitted by registered attendees. Topics range from handling previous visa rejections to emergency travel assistance and cross-border driving protocols.',
    iconName: 'MessageSquare',
    keyTopics: [
      'Answering top pre-submitted questions from registration portal',
      'Live floor questions from in-person and virtual Zoom audience',
      'Rapid-fire solutions for complex individual travel scenarios',
      'Announcement of RotaTravel Knowledge Hub community access'
    ],
    assignedPanelists: ['All 5 Panelists']
  }
];

export const PROGRAMME_TIMELINE: ProgrammeSegment[] = [
  {
    id: 'seg-1',
    timeSlot: '18:00 – 18:10 EAT',
    durationMins: 10,
    title: 'Welcome, Rotary Protocol & Initiative Vision',
    speakerIds: ['speaker-tom-ngata'],
    format: 'Welcome & Protocol',
    description: 'Call to order, Rotary grace/national anthem, introduction of the confirmed host club leadership, and overview of why Rotaract Travel Hacks 2026 was created.',
    keyTakeaways: [
      'Understanding the mission behind the initiative',
      'Recognition of partner clubs and districts'
    ]
  },
  {
    id: 'seg-2',
    timeSlot: '18:10 – 18:30 EAT',
    durationMins: 20,
    title: 'Pillar 01: Demystifying Visa Applications & Bureaucracy',
    pillarId: 1,
    speakerIds: ['speaker-tom-ngata', 'speaker-panelist-3'],
    format: 'Panel Discussion',
    description: 'Deep dive into visa requirements, bank statement rules, invitation letter verification, and proving ties to home country without over-promising.',
    keyTakeaways: [
      'How to present clean bank statements without suspicious sudden deposits',
      'Sample structure of an airtight Rotaract invitation letter',
      'Documenting ties to employment, business, or studies'
    ]
  },
  {
    id: 'seg-3',
    timeSlot: '18:30 – 18:50 EAT',
    durationMins: 20,
    title: 'Pillar 02: Smart Budgeting, Flight Hacking & Readiness',
    pillarId: 2,
    speakerIds: ['speaker-sam-gathaga', 'speaker-panelist-4'],
    format: 'Panel Discussion',
    description: 'Actionable techniques for finding cheaper flights in Africa, selecting multi-currency cards, obtaining affordable travel insurance, and group stays.',
    keyTakeaways: [
      'Best fare aggregators and timing for African regional flights',
      'Avoiding high currency exchange markup fees',
      'Group booking discounts and Rotarian hosting networks'
    ]
  },
  {
    id: 'seg-4',
    timeSlot: '18:50 – 19:05 EAT',
    durationMins: 15,
    title: 'Pillar 03: Path to RAS 2026 (Côte d’Ivoire) & Global Mobility',
    pillarId: 3,
    speakerIds: ['speaker-panelist-5', 'speaker-tom-ngata'],
    format: 'Keynote',
    description: 'Dedicated roadmap for members traveling to RAS 2026 in Abidjan. Transit protocols, e-Visas, ECOWAS/EAC rules, and converting event experience into long-term travel credibility.',
    keyTakeaways: [
      'Official entry requirements for Côte d\'Ivoire e-Visa',
      'Yellow Fever vaccination card validation at immigration',
      'Building a strong international travel track record'
    ]
  },
  {
    id: 'seg-5',
    timeSlot: '19:05 – 19:25 EAT',
    durationMins: 20,
    title: 'Pillar 04: Interactive Q&A (Pre-Submitted + Live Floor)',
    pillarId: 4,
    speakerIds: ['speaker-tom-ngata', 'speaker-sam-gathaga', 'speaker-panelist-3', 'speaker-panelist-4', 'speaker-panelist-5'],
    format: 'Interactive Q&A',
    description: 'Panelists answer live audience questions and top voted questions submitted via the online registration portal.',
    keyTakeaways: [
      'Direct responses to specific visa scenarios',
      'How to recover from a past visa refusal',
      'Community crowdsourced advice'
    ]
  },
  {
    id: 'seg-6',
    timeSlot: '19:25 – 19:30 EAT',
    durationMins: 5,
    title: 'Closing Remarks & Knowledge Hub Launch',
    speakerIds: ['speaker-tom-ngata'],
    format: 'Action Wrap-Up',
    description: 'Unveiling of the evergreen RotaTravel Knowledge Hub, survey feedback collection, and group fellowship photo.',
    keyTakeaways: [
      'Accessing downloadable templates and country guides',
      'Submitting personal travel hacks to the community board'
    ]
  }
];

export const PARTNERS_SHOWCASE: Partner[] = [
  {
    id: 'p-host',
    name: '[HOST CLUB — TO BE CONFIRMED]',
    category: 'HOST',
    logoPlaceholderText: 'HOST CLUB LOGO',
    description: 'Primary host club carrying leadership and venue mobilization for the 3 September 2026 fellowship.',
    isConfirmed: false
  },
  {
    id: 'p-cohost-1',
    name: 'Rotaract Club of Langata',
    category: 'CO-HOST',
    logoPlaceholderText: 'RAC LANGATA',
    description: 'Panel-affiliated club partner in District 9212 supporting member mobilization and cross-club outreach.',
    isConfirmed: true
  },
  {
    id: 'p-cohost-2',
    name: 'Rotaract Club of Nairobi Thika Road',
    category: 'CO-HOST',
    logoPlaceholderText: 'RAC THIKA ROAD',
    description: 'Panel-affiliated club partner actively driving travel readiness and youth mobility awareness.',
    isConfirmed: true
  },
  {
    id: 'p-cohost-3',
    name: 'Rotaract Club of Nairobi Parklands',
    category: 'CO-HOST',
    logoPlaceholderText: 'RAC PARKLANDS',
    description: 'Panel-affiliated partner focused on RAS 2026 logistics and international service relations.',
    isConfirmed: true
  },
  {
    id: 'p-cohost-4',
    name: 'Rotaract Club of Nairobi Muthaiga North',
    category: 'CO-HOST',
    logoPlaceholderText: 'RAC MUTHAIGA NORTH',
    description: 'Digital campaign & PR lead partner driving social media reach across African districts.',
    isConfirmed: true
  },
  {
    id: 'p-partner-d9212',
    name: 'Rotary District 9212',
    category: 'STRATEGIC PARTNER',
    logoPlaceholderText: 'DISTRICT 9212',
    description: 'Covering Kenya, Ethiopia, South Sudan, and Eritrea — supporting young leader global development.',
    isConfirmed: true
  },
  {
    id: 'p-partner-d9214',
    name: 'Rotary District 9214 Outreach',
    category: 'STRATEGIC PARTNER',
    logoPlaceholderText: 'DISTRICT 9214',
    description: 'Covering Uganda and Tanzania — regional mobility collaboration for East African Rotaractors.',
    isConfirmed: true
  },
  {
    id: 'p-sponsor-1',
    name: 'Travel & Mobility Sponsor [Open Tier]',
    category: 'SPONSOR',
    logoPlaceholderText: 'SPONSOR LOGO',
    description: 'Tiered sponsorship opportunities open for flight aggregators, forex services, and travel agencies.',
    websiteUrl: '/partners',
    isConfirmed: false
  }
];

export const FAQS_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'When and where is the Rotaract Travel Hacks 2026 fellowship taking place?',
    answer: 'The fellowship takes place on Thursday, 3 September 2026 from 6:00 PM to 7:30 PM EAT. It is a 90-minute hybrid event — you can attend in-person in Nairobi (venue details confirmed upon host finalization) or join virtually via our global live stream.',
    category: 'EVENT'
  },
  {
    id: 'faq-2',
    question: 'Is registration free for Rotaractors and Rotarians?',
    answer: 'Yes! Attendance is 100% free for both in-person and virtual participants. However, advance registration is required to receive streaming links, event reminders, downloadable travel templates, and personalized boarding pass tickets.',
    category: 'REGISTRATION'
  },
  {
    id: 'faq-3',
    question: 'How do I submit a question for the panelists to answer live?',
    answer: 'You can submit your travel questions directly through our Registration Portal form when registering, or via the "Submit Question" tool on the website. Top voted and representative questions will be addressed during Pillar 04 (Interactive Q&A).',
    category: 'EVENT'
  },
  {
    id: 'faq-4',
    question: 'Why did the host club status change to [TO BE CONFIRMED]?',
    answer: 'To protect the confirmed event date (3 September 2026) and the confirmed 5-member panel after a scheduling conflict arose with the initial host, the initiative was decoupled to a turnkey model. A new primary host club is currently being finalized among panel-affiliated clubs, preserving full project momentum.',
    category: 'EVENT'
  },
  {
    id: 'faq-5',
    question: 'What is the Path to RAS 2026 (Côte d\'Ivoire)?',
    answer: 'The Rotaract Africa Summit (RAS 2026) takes place in Abidjan, Côte d\'Ivoire. Our initiative provides dedicated travel guidance, e-Visa protocols, Yellow Fever requirements, and budgeting strategies specifically designed to help African Rotaractors attend RAS 2026 smoothly.',
    category: 'TRAVEL'
  },
  {
    id: 'faq-6',
    question: 'How do I access the downloadable sponsorship letter and bank statement templates?',
    answer: 'All templates, sample invitation letters, and country guides are available in our evergreen "Resource Hub" on this website. Registered users can view and copy text formats or download formatted document checklists free of charge.',
    category: 'KNOWLEDGE HUB'
  },
  {
    id: 'faq-7',
    question: 'Can my club or organization become a co-host or sponsor?',
    answer: 'Absolutely! We welcome co-hosting Rotaract/Rotary clubs from Districts 9212, 9214, 9215, 9216, and corporate travel sponsors. Visit our Partners page or contact us via the Contact form to request the Sponsorship Pitch Deck.',
    category: 'PARTNERSHIPS'
  },
  {
    id: 'faq-8',
    question: 'Will recordings be available if I cannot attend live on 3 September 2026?',
    answer: 'Yes. Following the event, session recordings, key takeaways, and panel slide decks will be uploaded directly to the Knowledge Hub, ensuring the content remains an evergreen resource.',
    category: 'VIRTUAL ATTENDANCE'
  }
];
