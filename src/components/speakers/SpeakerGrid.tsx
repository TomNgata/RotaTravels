import React, { useState } from 'react';
import { Speaker } from '../../types';
import { SpeakerCard } from './SpeakerCard';
import { SpeakerModal } from './SpeakerModal';
import { Users, Search, MessageSquare, Share2 } from 'lucide-react';
import { SocialShareModal } from '../common/SocialShareModal';

interface SpeakerGridProps {
  speakers: Speaker[];
  onOpenQuestionModal: (speakerName?: string) => void;
}

export const SpeakerGrid: React.FC<SpeakerGridProps> = ({ speakers, onOpenQuestionModal }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [shareModalData, setShareModalData] = useState<{
    isOpen: boolean;
    title: string;
    text: string;
  }>({
    isOpen: false,
    title: '',
    text: '',
  });

  const filteredSpeakers = speakers.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#00246C] font-extrabold text-xs uppercase tracking-wider border border-blue-200">
              CONFIRMED 5-MEMBER PANEL
            </span>
            <button
              onClick={() => setShareModalData({
                isOpen: true,
                title: 'Rotaract Travel Hacks 2026 - Speaker Panel',
                text: 'Meet our 5 expert Rotaractor panelists sharing travel hacks across Africa, Europe, and global conventions!'
              })}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-100 text-[#00246C] font-bold text-xs border border-slate-200 shadow-2xs flex items-center gap-1.5 transition-all cursor-pointer"
              title="Share Panel"
            >
              <Share2 className="w-3.5 h-3.5 text-[#D41B2C]" />
              <span>Share Panel</span>
            </button>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00246C] tracking-tight">
            Meet the Panelists
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Selected through a structured voting process based on demonstrated international travel experience across Africa, Europe, and global Rotary conventions.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, club, or travel expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00246C] shadow-2xs"
            />
          </div>
        </div>

        {/* Speaker Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpeakers.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              onSelect={(s) => setSelectedSpeaker(s)}
            />
          ))}
        </div>

        {filteredSpeakers.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 max-w-md mx-auto">
            <Users className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-700">No panelists match your search criteria.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-bold text-[#D41B2C] hover:underline"
            >
              Clear Search Filter
            </button>
          </div>
        )}

        {/* Global Q&A Submission Banner */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-extrabold text-[#00246C]">
              Have a Specific Travel Question for the Panel?
            </h3>
            <p className="text-sm text-slate-600">
              Submit your question now — top voted queries will be addressed live during Pillar 04 Q&A.
            </p>
          </div>

          <button
            onClick={() => onOpenQuestionModal()}
            className="px-6 py-3 rounded-xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-sm shadow-md flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-amber-300" />
            <span>Submit Your Question</span>
          </button>
        </div>

      </div>

      {/* Detail Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
        onOpenQuestionModal={onOpenQuestionModal}
        onShare={(speaker) => setShareModalData({
          isOpen: true,
          title: `Panelist: ${speaker.name} (${speaker.title})`,
          text: `Check out ${speaker.name} from ${speaker.club} sharing international travel experience on Rotaract Travel Hacks 2026!`
        })}
      />

      {/* Social Share Modal */}
      <SocialShareModal
        isOpen={shareModalData.isOpen}
        onClose={() => setShareModalData(prev => ({ ...prev, isOpen: false }))}
        title={shareModalData.title}
        text={shareModalData.text}
      />
    </section>
  );
};
