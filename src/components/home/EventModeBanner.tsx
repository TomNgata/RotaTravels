import React from 'react';
import { EventPhase } from '../../types';
import { Calendar, PlayCircle, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

interface EventModeBannerProps {
  currentPhase: EventPhase;
  onPhaseChange: (phase: EventPhase) => void;
  currentHost: string;
}

export const EventModeBanner: React.FC<EventModeBannerProps> = ({
  currentPhase,
  onPhaseChange,
  currentHost
}) => {
  return (
    <div className="bg-[#00194A] text-white border-b border-blue-900/50 py-2.5 px-4 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Host Notice & Current Status */}
        <div className="flex items-center flex-wrap gap-2 text-slate-300">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            Host: {currentHost}
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="text-slate-200">
            Confirmed Date: <strong className="text-white font-semibold">Thursday, 3 September 2026</strong>
          </span>
        </div>

        {/* Right: Event Phase Simulator Toggle */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-lg border border-slate-700/60">
          <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium px-2 hidden lg:inline">
            Event Phase View:
          </span>
          
          <button
            onClick={() => onPhaseChange('pre-event')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              currentPhase === 'pre-event'
                ? 'bg-[#D41B2C] text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Before 3 September: Focus on Registration & Countdown"
          >
            <Calendar className="w-3.5 h-3.5" />
            Pre-Event (Register)
          </button>

          <button
            onClick={() => onPhaseChange('during-event')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              currentPhase === 'during-event'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="3 September Live Fellowship: Live Q&A"
          >
            <PlayCircle className="w-3.5 h-3.5 animate-pulse text-emerald-300" />
            Live Event
          </button>

          <button
            onClick={() => onPhaseChange('post-event')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              currentPhase === 'post-event'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Post 3 September: Evergreen Knowledge Hub & Session Archive"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Post-Event Archive
          </button>
        </div>

      </div>
    </div>
  );
};
