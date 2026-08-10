import { CountryGuide } from '../types';

export const COUNTRIES_DATA: CountryGuide[] = [
  {
    code: 'CI',
    name: 'Côte d’Ivoire (Ivory Coast)',
    flagEmoji: '🇨🇮',
    region: 'West Africa',
    rotaryRelevance: 'Official Host Country for Rotaract Africa Summit (RAS 2026)',
    isFeaturedDestination: true,
    visaRequirement: {
      type: 'eVisa',
      processingTimeDays: '2 - 5 Days',
      feeUsd: '$78 (73 EUR)',
      validityDays: '90 Days',
      easeScore: 4
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 3,
    estimatedMinDailyBudgetUsd: 45,
    yellowFeverRequired: true,
    officialPortalUrl: 'https://snedai.com/e-visa-cote-divoire/',
    entryChecklist: [
      'Valid Passport with at least 6 months validity from departure date',
      'Approved e-Visa pre-enrollment document (E-Visa biometric printed code)',
      'Yellow Fever Vaccination Card (Mandatory upon airport arrival)',
      'Proof of accommodation (Hotel booking or official host Rotary club invitation)',
      'Return air ticket reservation'
    ],
    financialDocNorms: [
      '3 months stamped bank statement showing sufficient funds (~$500+ minimum balance)',
      'Proof of employment/student status or business registration certificate',
      'Sponsorship letter if travel is funded by a third party or Rotary club'
    ],
    sponsorshipTips: [
      'Obtain an official invitation letter from the RAS 2026 Host Organizing Committee in Abidjan.',
      'Ensure your invitation explicitly lists your full name, passport number, and club position.',
      'If transiting through West African hubs (e.g. Lomé LFW or Accra ACC), check transit visa exemptions.'
    ],
    peerHacks: [
      'Abidjan (Félix-Houphouët-Boigny Airport) has biometric kiosks — keep your printed SNEDAI receipt handy.',
      'French is the official language; download offline French dictionary or translation apps before landing.',
      'Orange and MTN SIM cards are available at the airport arrivals hall for around $2.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'KE',
    name: 'Kenya',
    flagEmoji: '🇰🇪',
    region: 'East Africa',
    rotaryRelevance: 'Primary Hybrid Event Venue & District 9212 Hub',
    isFeaturedDestination: true,
    visaRequirement: {
      type: 'ETA / Registration',
      processingTimeDays: '1 - 3 Days',
      feeUsd: '$34',
      validityDays: '90 Days',
      easeScore: 5
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 3,
    estimatedMinDailyBudgetUsd: 40,
    yellowFeverRequired: false,
    officialPortalUrl: 'https://www.etakenya.go.ke/',
    entryChecklist: [
      'Electronic Travel Authorization (eTA) applied online before departure',
      'Valid passport with at least 1 blank page',
      'Return flight ticket or onward ticket',
      'Confirmed hotel reservation or host contact address in Kenya'
    ],
    financialDocNorms: [
      'Proof of return ticket and hotel/host arrangement',
      'Standard debit/credit card access (M-Pesa digital mobile money is universally accepted)'
    ],
    sponsorshipTips: [
      'EAC citizens (Uganda, Tanzania, Rwanda, Burundi, South Sudan) enter Kenya under visa-free movement protocols.',
      'Rotaract fellowship delegates can request official District 9212 confirmation letters.'
    ],
    peerHacks: [
      'Install M-Pesa on arrival or register for an M-Pesa line at JKA Airport — cash is rarely needed in Nairobi.',
      'Uber and Bolt are widely available and very safe for getting around Nairobi.',
      'Jomo Kenyatta International Airport (NBO) offers fast eTA verification lines.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'RW',
    name: 'Rwanda',
    flagEmoji: '🇷🇼',
    region: 'East Africa',
    rotaryRelevance: 'Model Destination for Visa-on-Arrival across African Nations',
    isFeaturedDestination: true,
    visaRequirement: {
      type: 'Visa on Arrival',
      processingTimeDays: 'Instant at Border',
      feeUsd: 'Free (AU/Commonwealth) / $50',
      validityDays: '30 Days',
      easeScore: 5
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 0,
    estimatedMinDailyBudgetUsd: 50,
    yellowFeverRequired: false,
    officialPortalUrl: 'https://www.migration.gov.rw/',
    entryChecklist: [
      'Valid Passport with 6 months validity',
      'Return air ticket',
      'Proof of yellow fever vaccine if arriving from endemic countries',
      'No pre-application required for citizens of African Union, Commonwealth, & OIF member states!'
    ],
    financialDocNorms: [
      'Demonstrated proof of accommodation or Rotary host contact',
      'International Credit/Debit Card or cash (USD/RWF)'
    ],
    sponsorshipTips: [
      'All African citizens receive a free 30-day visa on arrival in Kigali.',
      'Great benchmark for seamless African cross-border fellowship travel.'
    ],
    peerHacks: [
      'Kigali International Airport (KGL) is efficient; immigration clearance takes under 15 minutes.',
      'Single-use plastic bags are strictly prohibited in Rwanda — avoid packing polythene bags in luggage.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'ZA',
    name: 'South Africa',
    flagEmoji: '🇿🇦',
    region: 'Southern Africa',
    rotaryRelevance: 'Major Hub for District 9350 / 9400 Conferences & Rotary Fellowships',
    isFeaturedDestination: true,
    visaRequirement: {
      type: 'Embassy Visa Required',
      processingTimeDays: '10 - 15 Days',
      feeUsd: '$36 - $60',
      validityDays: '90 Days',
      easeScore: 2
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 3,
    estimatedMinDailyBudgetUsd: 55,
    yellowFeverRequired: true,
    officialPortalUrl: 'https://e-visa.dha.gov.za/',
    entryChecklist: [
      'Valid Passport with at least 2 consecutive blank passport pages',
      'Completed Form DHA-84 signed in black ink',
      'Yellow Fever Vaccination Certificate if travelling from/transiting through yellow fever belts',
      'Flight itinerary and accommodation confirmation'
    ],
    financialDocNorms: [
      '3 months original bank statements certified/stamped by bank with sufficient minimum balance ($600+)',
      'Employment verification letter specifying approved leave dates and salary',
      'If sponsored, sworn affidavit from South African host/sponsor with certified RSA ID copy'
    ],
    sponsorshipTips: [
      'Submit application at least 4 weeks prior to international event date.',
      'SADC passport holders enjoy visa waivers up to 90 days.'
    ],
    peerHacks: [
      'Ensure bank statements bear an original bank stamp on every single page.',
      'Gautrain in Johannesburg connects OR Tambo Airport to Sandton safely in 15 minutes.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'GH',
    name: 'Ghana',
    flagEmoji: '🇬🇭',
    region: 'West Africa',
    rotaryRelevance: 'Vibrant Rotaract Hub in District 9104 & West African Fellowship',
    isFeaturedDestination: false,
    visaRequirement: {
      type: 'eVisa',
      processingTimeDays: '3 - 7 Days',
      feeUsd: '$60 - $100',
      validityDays: '30 Days',
      easeScore: 3
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 3,
    estimatedMinDailyBudgetUsd: 45,
    yellowFeverRequired: true,
    officialPortalUrl: 'https://home.gis.gov.gh/',
    entryChecklist: [
      'Valid passport with 6 months validity',
      'Yellow Fever Certificate (strictly enforced at Kotoka International Airport)',
      'Approved e-Visa clearance or embassy visa stamp',
      'Host invitation letter or hotel confirmation'
    ],
    financialDocNorms: [
      '3 months bank statement showing sufficient funds for stay',
      'Return flight ticket confirmation'
    ],
    sponsorshipTips: [
      'ECOWAS member nationals enter Ghana visa-free under regional protocols.',
      'An invitation letter from a host Rotaract Club in Accra speeds up processing.'
    ],
    peerHacks: [
      'Kotoka Airport (ACC) is modern; Uber and Telecel/MTN mobile money are widely used.',
      'Ghanaian Cedis (GHS) can be converted easily at local Forex Bureaus in Accra.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'NG',
    name: 'Nigeria',
    flagEmoji: '🇳🇬',
    region: 'West Africa',
    rotaryRelevance: 'Home to Districts 9110, 9111, 9112, 9125, 9141, 9142',
    isFeaturedDestination: false,
    visaRequirement: {
      type: 'eVisa',
      processingTimeDays: '2 - 5 Days',
      feeUsd: '$100 - $150',
      validityDays: '30 Days',
      easeScore: 3
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 3,
    estimatedMinDailyBudgetUsd: 50,
    yellowFeverRequired: true,
    officialPortalUrl: 'https://visa.immigration.gov.ng/',
    entryChecklist: [
      'Visa on Arrival Approval Letter (VoA) or processed e-Visa',
      'Passport valid for 6 months with 2 blank pages',
      'Yellow Fever Card',
      'Letter of Invitation from host in Nigeria + Host CAC company/organization registration certificate'
    ],
    financialDocNorms: [
      '3 months bank statement or proof of host financial guarantee',
      'Confirmed flight itinerary'
    ],
    sponsorshipTips: [
      'Ensure your Nigerian host Rotaract/Rotary club attaches their official District registration details to the invitation.',
      'ECOWAS citizens enter visa-free.'
    ],
    peerHacks: [
      'Arrive with approved VoA documentation printed out in color.',
      'Pre-arrange airport pickup via hotel or host club members in Lagos (LOS) / Abuja (ABV).'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'TZ',
    name: 'Tanzania',
    flagEmoji: '🇹🇿',
    region: 'East Africa',
    rotaryRelevance: 'District 9214 Partner Country with Frequent Joint Fellowships',
    isFeaturedDestination: false,
    visaRequirement: {
      type: 'eVisa',
      processingTimeDays: '2 - 4 Days',
      feeUsd: '$50 (US Citizens $100)',
      validityDays: '90 Days',
      easeScore: 4
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 0,
    estimatedMinDailyBudgetUsd: 40,
    yellowFeverRequired: false,
    officialPortalUrl: 'https://visa.immigration.go.tz/',
    entryChecklist: [
      'Approved Tanzania e-Visa or visa on arrival for eligible nationals',
      'Valid passport with 6 months validity',
      'Return ticket'
    ],
    financialDocNorms: [
      'Proof of accommodation reservation',
      'EAC citizens enter visa-free'
    ],
    sponsorshipTips: [
      'EAC and SADC nationals enjoy simplified entry or complete visa waivers.'
    ],
    peerHacks: [
      'Apply online via the official portal at least 1 week prior to travel.',
      'Tanzanian Shilling (TZS) cash is useful for local transit, though card payments work in major hotels in Dar es Salaam & Arusha.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'UG',
    name: 'Uganda',
    flagEmoji: '🇺🇬',
    region: 'East Africa',
    rotaryRelevance: 'District 9214 Partner Country & Pearl of Africa Rotaract Network',
    isFeaturedDestination: false,
    visaRequirement: {
      type: 'eVisa',
      processingTimeDays: '2 - 3 Days',
      feeUsd: '$50',
      validityDays: '90 Days',
      easeScore: 4
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 0,
    estimatedMinDailyBudgetUsd: 35,
    yellowFeverRequired: true,
    officialPortalUrl: 'https://visas.immigration.go.ug/',
    entryChecklist: [
      'Approved Uganda e-Visa letter (Must apply online prior to travel; no airport visa issuing without pre-approval)',
      'Yellow Fever Card (Strictly checked at Entebbe EBB airport)',
      'Passport valid for at least 6 months'
    ],
    financialDocNorms: [
      'EAC passport holders enter visa-free using national ID or passport.'
    ],
    sponsorshipTips: [
      'East Africa Tourist Visa ($100) allows multi-entry travel across Kenya, Rwanda, and Uganda seamlessly!'
    ],
    peerHacks: [
      'Entebbe International Airport (EBB) requires printed e-Visa approval notifications.',
      'SafeBoda and Uber are great for getting around Kampala.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    flagEmoji: '🇪🇹',
    region: 'East Africa',
    rotaryRelevance: 'District 9212 Partner & AU Headquarters Fellowship Hub',
    isFeaturedDestination: false,
    visaRequirement: {
      type: 'eVisa',
      processingTimeDays: '1 - 3 Days',
      feeUsd: '$62 - $82',
      validityDays: '30 / 90 Days',
      easeScore: 4
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 0,
    estimatedMinDailyBudgetUsd: 40,
    yellowFeverRequired: false,
    officialPortalUrl: 'https://www.evisa.gov.et/',
    entryChecklist: [
      'e-Visa printout obtained online before arrival',
      'Valid passport with 6 months validity',
      'Return ticket'
    ],
    financialDocNorms: [
      'Proof of accommodation reservation in Addis Ababa'
    ],
    sponsorshipTips: [
      'Ethiopian Airlines offers seamless stopover packages in Addis Ababa for transiting delegates.'
    ],
    peerHacks: [
      'Bole International Airport (ADD) is a major African transit hub with efficient e-Visa counters.',
      'Local currency is Ethiopian Birr (ETB); carry USD cash for exchange.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'AE',
    name: 'United Arab Emirates (Dubai)',
    flagEmoji: '🇦🇪',
    region: 'Middle East',
    rotaryRelevance: 'Global Rotary Transit Hub & International Youth Leadership Summit Destination',
    isFeaturedDestination: true,
    visaRequirement: {
      type: 'eVisa',
      processingTimeDays: '2 - 4 Days',
      feeUsd: '$90 - $130',
      validityDays: '30 Days',
      easeScore: 4
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 3,
    estimatedMinDailyBudgetUsd: 80,
    yellowFeverRequired: false,
    officialPortalUrl: 'https://smartservices.icp.gov.ae/',
    entryChecklist: [
      'Approved Tourist e-Visa sponsored by airline (Emirates/FlyDubai), hotel, or agency',
      'Passport valid for 6 months',
      'Confirmed return ticket and hotel voucher',
      'Travel health insurance covering UAE'
    ],
    financialDocNorms: [
      'Minimum $1,000 equivalent balance proof or credit card availability',
      'Proof of return ticket'
    ],
    sponsorshipTips: [
      'Applying for UAE visa via FlyDubai or Emirates during ticket booking guarantees streamlined processing.'
    ],
    peerHacks: [
      'Dubai Metro is cheap, clean, and connects DXB Airport directly to major landmarks.',
      'Nol Card covers metro, buses, and water taxis.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flagEmoji: '🇬🇧',
    region: 'Europe',
    rotaryRelevance: 'Rotary International Conventions & Commonwealth Fellowships',
    isFeaturedDestination: false,
    visaRequirement: {
      type: 'Embassy Visa Required',
      processingTimeDays: '15 - 21 Days',
      feeUsd: '$145 (£115)',
      validityDays: '6 Months (Standard Visitor)',
      easeScore: 2
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 6,
    estimatedMinDailyBudgetUsd: 100,
    yellowFeverRequired: false,
    officialPortalUrl: 'https://www.gov.uk/standard-visitor',
    entryChecklist: [
      'UK Standard Visitor Visa stamp in passport via TLScontact/VFS Global',
      'Comprehensive financial and employment evidence',
      'Official Rotary International or Host Club event invitation',
      'Detailed travel itinerary and accommodation booking'
    ],
    financialDocNorms: [
      '6 months bank statements proving source of funds and regular income',
      'Official payslips, employer letter, or business ownership documents',
      'Demonstrated origin of every large deposit into the bank account'
    ],
    sponsorshipTips: [
      'UK Visas and Immigration (UKVI) scrutinizes sudden unexplained deposits ("funds parking"). Keep funds stable for 6 months.',
      'Sponsorship letters from UK Rotarians must include proof of sponsor address and financial capability.'
    ],
    peerHacks: [
      'Apply at least 8 to 12 weeks before event date.',
      'TLScontact priority visa services are available for urgent Rotary leadership travel.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'FR',
    name: 'Schengen Area (France / Germany / Italy)',
    flagEmoji: '🇪🇺',
    region: 'Europe',
    rotaryRelevance: 'Rotary European Conventions & Youth Exchange Programs',
    isFeaturedDestination: true,
    visaRequirement: {
      type: 'Embassy Visa Required',
      processingTimeDays: '15 - 30 Days',
      feeUsd: '$98 (90 EUR)',
      validityDays: '90 Days in 180 Days',
      easeScore: 2
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 3,
    estimatedMinDailyBudgetUsd: 90,
    yellowFeverRequired: false,
    officialPortalUrl: 'https://france-visas.gouv.fr/',
    entryChecklist: [
      'Schengen C-Type Visa sticker issued by main destination embassy (VFS / TLScontact)',
      'Travel Health Insurance with minimum €30,000 coverage valid across all Schengen states',
      'Flight reservation (round trip) and hotel bookings for entire duration',
      'Attestation d\'accueil / Official Rotary Invitation Letter'
    ],
    financialDocNorms: [
      '3 to 6 months stamped bank statements demonstrating ~€65–€120 daily minimum allowance',
      'Employment contract, leave approval letter, and 3 recent payslips'
    ],
    sponsorshipTips: [
      'Apply at the embassy of the country where you spend the highest number of nights.',
      'Ensure travel insurance explicitly mentions "Repatriation & Emergency Medical Coverage €30,000".'
    ],
    peerHacks: [
      'Book visa appointment slots 2 to 3 months in advance as summer slots fill up rapidly in Nairobi/Lagos/Accra.',
      'Use dummy flight reservations from travel agents before final visa approval.'
    ],
    lastUpdated: 'August 2026'
  },
  {
    code: 'US',
    name: 'United States',
    flagEmoji: '🇺🇸',
    region: 'North America',
    rotaryRelevance: 'Rotary International Headquarters (Evanston, IL) & RI World Convention',
    isFeaturedDestination: true,
    visaRequirement: {
      type: 'Embassy Visa Required',
      processingTimeDays: 'Interview Appointment Dependent',
      feeUsd: '$185 (MRV Fee)',
      validityDays: '10 Years (Multiple Entry for most African nationals)',
      easeScore: 2
    },
    passportValidityMonths: 6,
    bankStatementMonthsRequired: 3,
    estimatedMinDailyBudgetUsd: 120,
    yellowFeverRequired: false,
    officialPortalUrl: 'https://ceac.state.gov/genniv/',
    entryChecklist: [
      'DS-160 Confirmation Page printout',
      'Valid Passport and MRV Fee Payment Receipt',
      'In-person interview appointment at US Embassy/Consulate',
      'Supporting documents showing ties to home country and Rotary event registration'
    ],
    financialDocNorms: [
      'Evidence of financial ability to cover travel expenses',
      'Strong proof of economic, social, and family ties to country of residence'
    ],
    sponsorshipTips: [
      'US Consular officers evaluate DS-160 form accuracy and in-person interview concise responses.',
      'Request emergency expedited appointment if attending official Rotary International Convention.'
    ],
    peerHacks: [
      'Keep interview responses concise: focus on purpose of trip, length of stay, and why you MUST return to work/studies.',
      'Do not present fake hotel bookings or altered bank statements — US databases perform thorough verification.'
    ],
    lastUpdated: 'August 2026'
  }
];
