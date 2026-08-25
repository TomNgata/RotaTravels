import { EventConfig, Speaker, ProgrammePillar, ProgrammeSegment, Partner, FAQItem } from '../types';

export const INITIAL_EVENT_CONFIG: EventConfig = {
  id: 'rotaract-travel-hacks-2026',
  title: 'Rotaract Travel Hacks 2026',
  subtitle: 'Fellowship & Global Digital Campaign',
  dateIso: '2026-09-03T18:30:00+03:00',
  dateFormatted: 'Thursday, 3 September 2026',
  timeFormatted: '6:30 PM – 8:30 PM EAT (15:30 UTC)',
  durationMinutes: 90,
  format: 'Hybrid (In-Person + Global Live Stream)',
  expectedAttendance: '100+ Live Attendees | 150+ Portal Registrations',
  confirmedDate: '3 September 2026',
  currentHost: 'Rotaract Club of Nairobi Parklands',
  isHostConfirmed: true,
  venueName: 'Clarion Hotel, CBD, Nairobi',
  venueAddress: 'Clarion Hotel, Central Business District, Nairobi, Kenya & Online Live Stream',
  isVenueConfirmed: true,
  phase: 'pre-event',
  budgetKes: 61500,
  liveStreamUrl: 'https://youtube.com/live/rotaract-travel-hacks-2026',
  hashtags: ['#RotaractTravelHacks', '#RAS2026', '#RACNairobiParklands']
};

export const CONFIRMED_PANELISTS: Speaker[] = [
  {
    id: 'speaker-ruthie-mwathi',
    name: 'Rtr Ruthie Mwathi',
    title: 'Confirmed Panelist',
    club: 'Rotaract Club of Langata',
    district: 'District 9212',
    role: 'Panelist — Rotaract Travel Hacks 2026',
    bio: 'Confirmed member of the five-person Rotaract Travel Hacks 2026 panel, selected through a structured voting process weighted toward demonstrated international travel experience. Full biography and travel highlights will be published once panelist media assets are collected.',
    travelMilestones: ['International travel highlights to be confirmed'],
    expertise: ['International Travel Experience'],
    imageUrl: '/panelists/photo_2026-08-21_19-59-57.jpg',
    featured: true
  },
  {
    id: 'speaker-alvin-muchai',
    name: 'PP Alvin Muchai',
    title: 'Past President & Confirmed Panelist',
    club: 'Rotaract Club of Nairobi Thika Road',
    district: 'District 9212',
    role: 'Panelist — Rotaract Travel Hacks 2026',
    bio: 'Past President of the Rotaract Club of Nairobi Thika Road and confirmed member of the five-person Rotaract Travel Hacks 2026 panel, selected through a structured voting process weighted toward demonstrated international travel experience. Full biography and travel highlights will be published once panelist media assets are collected.',
    travelMilestones: ['International travel highlights to be confirmed'],
    expertise: ['International Travel Experience'],
    imageUrl: '/panelists/photo_2026-08-21_19-59-51.jpg',
    featured: true
  },
  {
    id: 'speaker-wanjiku-ngure',
    name: 'Rtr Wanjiku Ngure',
    title: 'Confirmed Panelist',
    club: 'Rotaract Club of Langata',
    district: 'District 9212',
    role: 'Panelist — Rotaract Travel Hacks 2026',
    bio: 'Confirmed member of the five-person Rotaract Travel Hacks 2026 panel, selected through a structured voting process weighted toward demonstrated international travel experience. Full biography and travel highlights will be published once panelist media assets are collected.',
    travelMilestones: ['International travel highlights to be confirmed'],
    expertise: ['International Travel Experience'],
    imageUrl: '/panelists/photo_2026-08-21_20-00-00.jpg',
    featured: true
  },
  {
    id: 'speaker-bedan',
    name: 'Rtr Bedan',
    title: 'Confirmed Panelist',
    club: 'Rotaract Club of Nairobi Parklands',
    district: 'District 9212',
    role: 'Panelist — Rotaract Travel Hacks 2026',
    bio: 'Confirmed member of the five-person Rotaract Travel Hacks 2026 panel, representing host club Rotaract Club of Nairobi Parklands. Selected through a structured voting process weighted toward demonstrated international travel experience. Full biography and travel highlights will be published once panelist media assets are collected.',
    travelMilestones: ['International travel highlights to be confirmed'],
    expertise: ['International Travel Experience'],
    imageUrl: '/panelists/photo_2026-08-21_20-00-03.jpg',
    featured: true
  },
  {
    id: 'speaker-vicky-kinyua',
    name: 'Rtr Vicky Kinyua',
    title: 'Confirmed Panelist',
    club: 'Rotaract Club of Nairobi Parklands',
    district: 'District 9212',
    role: 'Panelist — Rotaract Travel Hacks 2026',
    bio: 'Confirmed member of the five-person Rotaract Travel Hacks 2026 panel, representing host club Rotaract Club of Nairobi Parklands. Selected through a structured voting process weighted toward demonstrated international travel experience. Full biography and travel highlights will be published once panelist media assets are collected.',
    travelMilestones: ['International travel highlights to be confirmed'],
    expertise: ['International Travel Experience'],
    imageUrl: '/panelists/photo_2026-08-21_20-00-07.jpg',
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
    assignedPanelists: ['Confirmed Panel — individual assignments TBC']
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
    assignedPanelists: ['Confirmed Panel — individual assignments TBC']
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
    assignedPanelists: ['Confirmed Panel — individual assignments TBC']
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
    timeSlot: '18:00 – 18:30 EAT',
    durationMins: 30,
    title: 'Registration, Networking & Arrival',
    format: 'Networking & Fellowship',
    speakerIds: [],
    description: 'Delegate check-in at the Clarion Hotel registration desk, early networking, and seat allocation. A Kshs 100 room charge applies at entry.',
    keyTakeaways: [
      'Early arrival ensures a prompt 18:30 start',
      'Registration desk managed by the host club volunteer team'
    ]
  },
  {
    id: 'seg-2',
    timeSlot: '18:30 – 18:40 EAT',
    durationMins: 10,
    title: 'Welcome & Opening Remarks',
    format: 'Welcome & Protocol',
    speakerIds: [],
    description: 'Official welcome by Host Club President Rtr Sydney (Rotaract Club of Nairobi Parklands), Rotary protocol observances, and recognition of co-host clubs, partners, and dignitaries.',
    keyTakeaways: [
      'Understanding the mission behind the initiative',
      'Recognition of partner clubs and districts'
    ]
  },
  {
    id: 'seg-3',
    timeSlot: '18:40 – 18:50 EAT',
    durationMins: 10,
    title: 'Initiative Vision & Context Setting',
    format: 'Welcome & Protocol',
    speakerIds: [],
    description: 'Initiative Champion IPP Tom Ngata (Rotaract Club of Westlands, 2024/25) shares why Rotaract Travel Hacks 2026 was created and walks through the four-pillar session ahead.',
    keyTakeaways: [
      'Why the initiative exists: ending avoidable visa refusals',
      'What the four pillars will deliver'
    ]
  },
  {
    id: 'seg-4',
    timeSlot: '18:50 – 19:10 EAT',
    durationMins: 20,
    title: 'Pillar 01: Demystifying Visa Applications & Bureaucracy',
    pillarId: 1,
    speakerIds: ['speaker-ruthie-mwathi', 'speaker-alvin-muchai', 'speaker-wanjiku-ngure', 'speaker-bedan', 'speaker-vicky-kinyua'],
    format: 'Panel Discussion',
    description: 'Deep dive into visa requirements, bank statement rules, invitation letter verification, and proving ties to home country without over-promising.',
    keyTakeaways: [
      'How to present clean bank statements without suspicious sudden deposits',
      'Sample structure of an airtight Rotaract invitation letter',
      'Documenting ties to employment, business, or studies'
    ]
  },
  {
    id: 'seg-5',
    timeSlot: '19:10 – 19:25 EAT',
    durationMins: 15,
    title: 'Pillar 02: Smart Budgeting, Flight Hacking & Readiness',
    pillarId: 2,
    speakerIds: ['speaker-ruthie-mwathi', 'speaker-alvin-muchai', 'speaker-wanjiku-ngure', 'speaker-bedan', 'speaker-vicky-kinyua'],
    format: 'Panel Discussion',
    description: 'Actionable techniques for finding cheaper flights in Africa, selecting multi-currency cards, obtaining affordable travel insurance, and group stays.',
    keyTakeaways: [
      'Best fare aggregators and timing for African regional flights',
      'Avoiding high currency exchange markup fees',
      'Group booking discounts and Rotarian hosting networks'
    ]
  },
  {
    id: 'seg-6',
    timeSlot: '19:25 – 19:40 EAT',
    durationMins: 15,
    title: 'Pillar 03: Path to RAS 2026 (Côte d’Ivoire) & Global Mobility',
    pillarId: 3,
    speakerIds: ['speaker-ruthie-mwathi', 'speaker-alvin-muchai', 'speaker-wanjiku-ngure', 'speaker-bedan', 'speaker-vicky-kinyua'],
    format: 'Panel Discussion',
    description: 'Dedicated roadmap for members traveling to RAS 2026 in Abidjan. Transit protocols, e-Visas, ECOWAS/EAC rules, and converting event experience into long-term travel credibility.',
    keyTakeaways: [
      'Official entry requirements for Côte d\'Ivoire e-Visa',
      'Yellow Fever vaccination card validation at immigration',
      'Building a strong international travel track record'
    ]
  },
  {
    id: 'seg-7',
    timeSlot: '19:40 – 20:00 EAT',
    durationMins: 20,
    title: 'Pillar 04: Interactive Q&A (Pre-Submitted + Live Floor)',
    pillarId: 4,
    speakerIds: ['speaker-ruthie-mwathi', 'speaker-alvin-muchai', 'speaker-wanjiku-ngure', 'speaker-bedan', 'speaker-vicky-kinyua'],
    format: 'Interactive Q&A',
    description: 'Panelists answer live audience questions and top voted questions submitted via the online registration portal.',
    keyTakeaways: [
      'Direct responses to specific visa scenarios',
      'How to recover from a past visa refusal',
      'Community crowdsourced advice'
    ]
  },
  {
    id: 'seg-8',
    timeSlot: '20:00 – 20:10 EAT',
    durationMins: 10,
    title: 'Closing Remarks & Knowledge Hub Launch',
    speakerIds: [],
    format: 'Action Wrap-Up',
    description: 'Unveiling of the evergreen RotaTravel Knowledge Hub, survey feedback collection, and closing call to action.',
    keyTakeaways: [
      'Accessing downloadable templates and country guides',
      'Submitting personal travel hacks to the community board'
    ]
  },
  {
    id: 'seg-9',
    timeSlot: '20:10 – 20:30 EAT',
    durationMins: 20,
    title: 'Networking, Photography & Fellowship',
    speakerIds: [],
    format: 'Networking & Fellowship',
    description: 'Informal networking with panelists and fellow delegates, group photography, and social media activation to close the evening.',
    keyTakeaways: [
      'Build cross-club and cross-district connections',
      'Group fellowship photo and social media moments'
    ]
  }
];

export const PARTNERS_SHOWCASE: Partner[] = [
  {
    id: 'p-host',
    name: 'Rotaract Club of Nairobi Parklands',
    category: 'HOST',
    logoPlaceholderText: 'RAC PARKLANDS',
    description: 'Official Host Club for Rotaract Travel Hacks 2026 — confirmed August 2026, with the venue locked at Clarion Hotel, CBD, Nairobi.',
    isConfirmed: true
  },
  {
    id: 'p-cohost-1',
    name: 'Rotaract Club of Langata',
    category: 'CO-HOST',
    logoPlaceholderText: 'RAC LANGATA',
    description: 'Panel-affiliated club in District 9212. Co-host partnership invitation issued 21 August 2026 — response pending.',
    isConfirmed: false
  },
  {
    id: 'p-cohost-2',
    name: 'Rotaract Club of Nairobi Thika Road',
    category: 'CO-HOST',
    logoPlaceholderText: 'RAC THIKA ROAD',
    description: 'Panel-affiliated club in District 9212. Co-host partnership invitation issued 21 August 2026 — response pending.',
    isConfirmed: false
  },
  {
    id: 'p-cohost-3',
    name: 'Rotaract Club of Nairobi Muthaiga North',
    category: 'CO-HOST',
    logoPlaceholderText: 'RAC MUTHAIGA NORTH',
    description: 'Home club of the Global Campaign Lead. Co-host partnership invitation issued 21 August 2026 — response pending.',
    isConfirmed: false
  },
  {
    id: 'p-partner-d9212',
    name: 'Rotary District 9212',
    category: 'STRATEGIC PARTNER',
    logoPlaceholderText: 'DISTRICT 9212',
    description: 'Covering Kenya, Ethiopia, South Sudan, and Eritrea — home district of the host club and panel.',
    isConfirmed: false
  },
  {
    id: 'p-partner-d9215',
    name: 'Rotary District 9215',
    category: 'STRATEGIC PARTNER',
    logoPlaceholderText: 'DISTRICT 9215',
    description: 'District partnership + Instagram campaign invitation issued 21 August 2026 — response pending.',
    isConfirmed: false
  },
  {
    id: 'p-partner-d9216',
    name: 'Rotary District 9216',
    category: 'STRATEGIC PARTNER',
    logoPlaceholderText: 'DISTRICT 9216',
    description: 'District partnership + Instagram campaign invitation issued 21 August 2026 — response pending.',
    isConfirmed: false
  },
  {
    id: 'p-partner-d9214',
    name: 'Rotary District 9214',
    category: 'STRATEGIC PARTNER',
    logoPlaceholderText: 'DISTRICT 9214',
    description: 'Covering Uganda and Tanzania — regional mobility collaboration for East African Rotaractors. Courtesy outreach pending.',
    isConfirmed: false
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
    answer: 'The fellowship takes place on Thursday, 3 September 2026 from 6:30 PM to 8:30 PM EAT at the Clarion Hotel, CBD, Nairobi, Kenya (Kshs 100 room charge at entry). It is a hybrid event — you can attend in-person or join virtually via our global live stream.',
    category: 'EVENT'
  },
  {
    id: 'faq-2',
    question: 'Is registration free for Rotaractors and Rotarians?',
    answer: 'Registration is 100% free for both in-person and virtual participants. In-person attendees pay a Kshs 100 room charge at the venue entrance. Advance registration is required to receive streaming links, event reminders, downloadable travel templates, and personalized boarding pass tickets.',
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
    question: 'Why did the host club change during planning?',
    answer: 'After a scheduling conflict arose with the initial host club (RAC Westlands) in early August 2026, the initiative was decoupled into a turnkey package to protect the confirmed date and panel. The Rotaract Club of Nairobi Parklands has since confirmed as the Official Host Club, with the venue locked at the Clarion Hotel, CBD — the date (3 September 2026) and five-member panel are fully unchanged.',
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
