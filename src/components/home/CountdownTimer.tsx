import React, { useState, useEffect } from 'react';
import { Calendar, Clock, PlayCircle, BookOpen } from 'lucide-react';
import { EventPhase } from '../../types';

interface CountdownTimerProps {
  targetDateIso: string;
  phase: EventPhase;
  onNavigate: (tab: string) => void;
  onOpenRegister: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDateIso,
  phase,
  onNavigate,
  onOpenRegister
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDateIso).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDateIso]);

  if (phase === 'during-event') {
    return (
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-2xl p-6 shadow-xl border border-emerald-500/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
            </span>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-300">
                Live Broadcast In Progress
              </span>
              <h3 className="text-xl font-bold text-white">
                Rotaract Travel Hacks 2026 is LIVE
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md flex items-center gap-2 transition-all"
            >
              <PlayCircle className="w-5 h-5" />
              Join Live Stream
            </a>
            <button
              onClick={() => onNavigate('programme')}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
            >
              Run of Show
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'post-event' || timeLeft.isPassed) {
    return (
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-blue-900/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold border border-amber-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                Event Concluded • Evergreen Knowledge Hub
              </span>
              <h3 className="text-xl font-bold text-white">
                The Fellowship Continues in Our Knowledge Hub
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('resources')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md flex items-center gap-2 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Access Session Archive & Guides
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/90 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-slate-700">
          <Calendar className="w-5 h-5 text-[#D41B2C]" />
          <span className="font-bold text-sm sm:text-base text-[#00246C]">
            Countdown to Fellowship: <span className="text-[#D41B2C]">Thursday, 3 September 2026</span>
          </span>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#00246C] border border-blue-200">
          6:30 PM EAT (15:30 UTC)
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        
        <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="block text-2xl sm:text-4xl font-black text-[#00246C] tracking-tight">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
            Days
          </span>
        </div>

        <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="block text-2xl sm:text-4xl font-black text-[#00246C] tracking-tight">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
            Hours
          </span>
        </div>

        <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="block text-2xl sm:text-4xl font-black text-[#00246C] tracking-tight">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
            Minutes
          </span>
        </div>

        <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs">
          <span className="block text-2xl sm:text-4xl font-black text-[#D41B2C] tracking-tight">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
            Seconds
          </span>
        </div>

      </div>
    </div>
  );
};
