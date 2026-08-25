import React, { useState, useEffect } from 'react';
import { EventConfig, EventPhase, Speaker, ProgrammePillar, ProgrammeSegment, CountryGuide, ResourceItem, TravelHackSubmission, Partner, FAQItem } from './types';
import { INITIAL_EVENT_CONFIG, CONFIRMED_PANELISTS, PROGRAMME_PILLARS, PROGRAMME_TIMELINE, PARTNERS_SHOWCASE, FAQS_LIST } from './data/eventData';
import { COUNTRIES_DATA } from './data/countriesData';
import { RESOURCES_DATA } from './data/resourcesData';

import { EventModeBanner } from './components/home/EventModeBanner';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { WhyThisMatters } from './components/home/WhyThisMatters';
import { FourPillars } from './components/home/FourPillars';
import { SpeakerGrid } from './components/speakers/SpeakerGrid';
import { ProgrammeTimeline } from './components/programme/ProgrammeTimeline';
import { TravelHubView } from './components/travel/TravelHubView';
import { ResourceHubView } from './components/resources/ResourceHubView';
import { CommunityHacksList } from './components/hacks/CommunityHacksList';
import { PartnerShowcase } from './components/partners/PartnerShowcase';
import { FAQAccordion } from './components/faq/FAQAccordion';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

import { RegistrationModal } from './components/registration/RegistrationModal';
import { SubmitHackModal } from './components/hacks/SubmitHackModal';
import { QuestionSubmissionForm } from './components/questions/QuestionSubmissionForm';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [eventConfig, setEventConfig] = useState<EventConfig>(INITIAL_EVENT_CONFIG);
  const [panelists, setPanelists] = useState<Speaker[]>(CONFIRMED_PANELISTS);
  const [pillars] = useState<ProgrammePillar[]>(PROGRAMME_PILLARS);
  const [timeline] = useState<ProgrammeSegment[]>(PROGRAMME_TIMELINE);
  const [countries] = useState<CountryGuide[]>(COUNTRIES_DATA);
  const [resources] = useState<ResourceItem[]>(RESOURCES_DATA);
  const [partners] = useState<Partner[]>(PARTNERS_SHOWCASE);
  const [faqs] = useState<FAQItem[]>(FAQS_LIST);
  const [hacks, setHacks] = useState<TravelHackSubmission[]>([]);

  // Modals
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isHackModalOpen, setIsHackModalOpen] = useState(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [prefilledSpeaker, setPrefilledSpeaker] = useState<string | undefined>(undefined);

  // Fetch initial state from server
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const res = await fetch('/api/event-config');
        if (res.ok) {
          const data = await res.json();
          if (data.config) setEventConfig(data.config);
          if (data.panelists) setPanelists(data.panelists);
        }
      } catch (e) {
        console.log('Using default client event data');
      }
    };

    const fetchHacks = async () => {
      try {
        const res = await fetch('/api/hacks');
        if (res.ok) {
          const data = await res.json();
          if (data.hacks) setHacks(data.hacks);
        }
      } catch (e) {
        console.log('Using default client hacks');
      }
    };

    fetchEventData();
    fetchHacks();

    // Check URL path or hash for tab routing
    const path = window.location.pathname.replace('/', '');
    if (['programme', 'speakers', 'travel', 'resources', 'partners', 'faq', 'contact'].includes(path)) {
      setCurrentTab(path);
    } else if (path === 'register') {
      setIsRegisterOpen(true);
    }
  }, []);

  const handlePhaseChange = (phase: EventPhase) => {
    setEventConfig({ ...eventConfig, phase });
  };

  const handleOpenQuestionModal = (speakerName?: string) => {
    setPrefilledSpeaker(speakerName);
    setIsQuestionModalOpen(true);
  };

  const refreshHacks = async () => {
    try {
      const res = await fetch('/api/hacks');
      if (res.ok) {
        const data = await res.json();
        if (data.hacks) setHacks(data.hacks);
      }
    } catch (e) {
      // Ignored
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-[#D41B2C] selection:text-white">
      
      {/* Top Event Mode & Host Notice Banner */}
      <EventModeBanner
        currentPhase={eventConfig.phase}
        onPhaseChange={handlePhaseChange}
        currentHost={eventConfig.currentHost}
      />

      {/* Main Navigation Header */}
      <Header
        currentTab={currentTab}
        onNavigate={(tab) => setCurrentTab(tab)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        currentHost={eventConfig.currentHost}
      />

      {/* Main Page Route Switcher */}
      <main className="flex-grow">
        
        {currentTab === 'home' && (
          <div>
            <Hero
              config={eventConfig}
              currentPhase={eventConfig.phase}
              onNavigate={(tab) => setCurrentTab(tab)}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            <WhyThisMatters
              onNavigate={(tab) => setCurrentTab(tab)}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            <FourPillars
              pillars={pillars}
              onNavigate={(tab) => setCurrentTab(tab)}
              onOpenQuestionModal={() => handleOpenQuestionModal()}
            />

            <SpeakerGrid
              speakers={panelists}
              onOpenQuestionModal={handleOpenQuestionModal}
            />

            <CommunityHacksList
              hacks={hacks}
              onOpenSubmitModal={() => setIsHackModalOpen(true)}
            />

            <PartnerShowcase
              partners={partners}
              currentHost={eventConfig.currentHost}
            />
          </div>
        )}

        {currentTab === 'programme' && (
          <div>
            <ProgrammeTimeline
              timeline={timeline}
              pillars={pillars}
              onOpenQuestionModal={() => handleOpenQuestionModal()}
            />
          </div>
        )}

        {currentTab === 'speakers' && (
          <div>
            <SpeakerGrid
              speakers={panelists}
              onOpenQuestionModal={handleOpenQuestionModal}
            />
          </div>
        )}

        {currentTab === 'travel' && (
          <div>
            <TravelHubView countries={countries} />
          </div>
        )}

        {currentTab === 'resources' && (
          <div>
            <ResourceHubView resources={resources} />
          </div>
        )}

        {currentTab === 'partners' && (
          <div>
            <PartnerShowcase
              partners={partners}
              currentHost={eventConfig.currentHost}
            />
          </div>
        )}

        {currentTab === 'faq' && (
          <div>
            <FAQAccordion faqs={faqs} />
          </div>
        )}

        {currentTab === 'contact' && (
          <div>
            <ContactSection currentHost={eventConfig.currentHost} />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => setCurrentTab(tab)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        currentHost={eventConfig.currentHost}
      />

      {/* Modals */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        currentHost={eventConfig.currentHost}
      />

      <SubmitHackModal
        isOpen={isHackModalOpen}
        onClose={() => setIsHackModalOpen(false)}
        onHackSubmitted={refreshHacks}
      />

      <QuestionSubmissionForm
        isOpen={isQuestionModalOpen}
        onClose={() => setIsQuestionModalOpen(false)}
        prefilledSpeakerName={prefilledSpeaker}
      />

    </div>
  );
}
