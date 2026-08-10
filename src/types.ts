export type AttendanceMode = 'in-person' | 'virtual';

export type EventPhase = 'pre-event' | 'during-event' | 'post-event';

export interface EventConfig {
  id: string;
  title: string;
  subtitle: string;
  dateIso: string;
  dateFormatted: string;
  timeFormatted: string;
  durationMinutes: number;
  format: string;
  expectedAttendance: string;
  confirmedDate: string;
  currentHost: string; // e.g. "[HOST CLUB — TO BE CONFIRMED]" or confirmed host name
  isHostConfirmed: boolean;
  venueName: string;
  venueAddress: string;
  isVenueConfirmed: boolean;
  phase: EventPhase;
  budgetKes: number;
  liveStreamUrl?: string;
  hashtags: string[];
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  club: string;
  district: string;
  role: string;
  bio: string;
  travelMilestones: string[];
  expertise: string[];
  imageUrl: string;
  highlightDestination?: string;
  featured: boolean;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface ProgrammePillar {
  id: number;
  numberStr: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  keyTopics: string[];
  assignedPanelists: string[];
}

export interface ProgrammeSegment {
  id: string;
  timeSlot: string;
  durationMins: number;
  title: string;
  pillarId?: number;
  speakerIds: string[];
  format: 'Keynote' | 'Panel Discussion' | 'Interactive Q&A' | 'Welcome & Protocol' | 'Action Wrap-Up';
  description: string;
  keyTakeaways: string[];
}

export interface VisaRequirement {
  type: 'Visa-Free' | 'eVisa' | 'Visa on Arrival' | 'Embassy Visa Required' | 'ETA / Registration';
  processingTimeDays: string;
  feeUsd: string;
  validityDays: string;
  easeScore: number; // 1 to 5 scale
}

export interface CountryGuide {
  code: string; // e.g., 'CI', 'KE', 'RW', 'ZA', 'GH', 'NG', 'TZ', 'UG', 'EG', 'ET', 'AE', 'GB', 'US', 'FR'
  name: string;
  flagEmoji: string;
  region: 'West Africa' | 'East Africa' | 'Southern Africa' | 'North Africa' | 'Europe' | 'North America' | 'Middle East';
  rotaryRelevance: string; // e.g. "Host Country for RAS 2026 (Ivory Coast)"
  isFeaturedDestination?: boolean;
  visaRequirement: VisaRequirement;
  passportValidityMonths: number;
  bankStatementMonthsRequired: number;
  estimatedMinDailyBudgetUsd: number;
  yellowFeverRequired: boolean;
  officialPortalUrl: string;
  entryChecklist: string[];
  financialDocNorms: string[];
  sponsorshipTips: string[];
  peerHacks: string[];
  lastUpdated: string;
}

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Visa & Docs' | 'Budgeting' | 'Travel Prep' | 'Rotary & Rotaract' | 'RAS 2026' | 'Checklists & Templates' | 'Session Recordings';
  summary: string;
  content: string;
  downloadUrl?: string;
  downloadFileName?: string;
  readTimeMins: number;
  author: string;
  publishDate: string;
  isFeatured?: boolean;
  tags: string[];
}

export interface TravelHackSubmission {
  id: string;
  authorName: string;
  authorClub: string;
  authorRole: string;
  destinationCountry: string;
  category: 'Visa Application' | 'Documentation' | 'Budgeting & Forex' | 'Airport & Transit' | 'Accommodation & Safety';
  hackTitle: string;
  hackDetails: string;
  status: 'pending' | 'approved';
  submittedAt: string;
  votesCount: number;
}

export interface PreEventQuestion {
  id: string;
  senderName: string;
  senderClub: string;
  categoryPillarId: number;
  questionText: string;
  isAnonymous: boolean;
  status: 'pending' | 'approved' | 'featured';
  submittedAt: string;
}

export interface EventRegistration {
  id: string;
  ticketNumber: string;
  fullName: string;
  email: string;
  phone: string;
  club: string;
  district: string;
  role: string;
  attendanceMode: AttendanceMode;
  countryOfResidence: string;
  questionForPanel?: string;
  registeredAt: string;
}

export interface Partner {
  id: string;
  name: string;
  category: 'HOST' | 'CO-HOST' | 'STRATEGIC PARTNER' | 'SPONSOR' | 'COMMUNITY PARTNER' | 'MEDIA PARTNER';
  logoPlaceholderText: string;
  description: string;
  websiteUrl?: string;
  isConfirmed: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'EVENT' | 'REGISTRATION' | 'TRAVEL' | 'VISA' | 'VIRTUAL ATTENDANCE' | 'PARTNERSHIPS' | 'KNOWLEDGE HUB';
}
