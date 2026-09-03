import React from 'react';
import { Speaker } from '../../types';
import { Users, ChevronRight } from 'lucide-react';

interface SpeakerPreviewStripProps {
  speakers: Speaker[];
  onNavigateToSpeakers: () => void;
}

export const SpeakerPreviewStrip: React.FC<SpeakerPreviewStripProps> = ({ speakers, onNavigateToSpeakers }) => {
  return (
    <section className="bg-slate-50 py-12 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-black text-[#00246C] flex items-center gap-2 justify-center sm:justify-start">
              <Users className="w-6 h-6 text-[#D41B2C]" />
              <span>Meet the Panelists</span>
            </h3>
            <p className="text-sm text-slate-500 mt-1">Sneak peek at our travel experts & their clubs</p>
          </div>
          <button 
            onClick={onNavigateToSpeakers}
            className="text-sm font-bold text-[#D41B2C] hover:text-[#00246C] flex items-center gap-1 transition-colors"
          >
            View Full Bios <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Scrolling Strip */}
        <div className="flex overflow-x-auto pb-6 gap-6 snap-x hide-scrollbar">
          {speakers.slice(0, 5).map((speaker) => (
            <div 
              key={speaker.id} 
              className="flex-shrink-0 w-72 bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs snap-start hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
              onClick={onNavigateToSpeakers}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-white shadow-sm">
                  <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-[#00246C] leading-tight">{speaker.name}</h4>
                  <span className="text-[10px] font-black uppercase text-amber-600 tracking-wider block mt-1">
                    {speaker.role.replace('Panel Specialist — ', '')}
                  </span>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D41B2C]"></span>
                  {speaker.club}
                </p>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};
