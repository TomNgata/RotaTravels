import React, { useState } from 'react';
import { ProgrammeSegment, ProgrammePillar } from '../../types';
import { Clock, Users, CheckCircle2, ChevronRight, Filter, Download, MessageSquare } from 'lucide-react';

interface ProgrammeTimelineProps {
  timeline: ProgrammeSegment[];
  pillars: ProgrammePillar[];
  onOpenQuestionModal: () => void;
}

export const ProgrammeTimeline: React.FC<ProgrammeTimelineProps> = ({
  timeline,
  pillars,
  onOpenQuestionModal
}) => {
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<number | 'all'>('all');

  const filteredTimeline = timeline.filter(segment => {
    if (selectedPillarFilter === 'all') return true;
    return segment.pillarId === selectedPillarFilter;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#00246C] font-extrabold text-xs uppercase tracking-wider border border-blue-200 inline-block">
              OFFICIAL RUN OF SHOW • HYBRID FELLOWSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#00246C] tracking-tight">
              Run of Show & Fellowship Schedule
            </h2>
            <p className="text-slate-600 max-w-2xl text-base">
              Thursday, 3 September 2026 • 6:30 PM – 8:30 PM EAT (15:30 UTC) • Clarion Hotel, CBD, Nairobi
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={onOpenQuestionModal}
              className="px-5 py-2.5 rounded-xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-sm shadow-md flex items-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-amber-300" />
              <span>Submit Q&A Question</span>
            </button>
          </div>
        </div>

        {/* Pillar Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Filter Segment:
          </span>

          <button
            onClick={() => setSelectedPillarFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
              selectedPillarFilter === 'all'
                ? 'bg-[#00246C] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Segments (6:00 PM – 8:30 PM)
          </button>

          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setSelectedPillarFilter(pillar.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedPillarFilter === pillar.id
                  ? 'bg-[#00246C] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Pillar {pillar.numberStr}: {pillar.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Schedule Timeline Grid */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-8 sm:before:left-32 before:w-0.5 before:bg-slate-200">
          {filteredTimeline.map((seg, index) => (
            <div key={seg.id} className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group">
              
              {/* Time Column */}
              <div className="sm:w-28 shrink-0 flex items-center gap-2 font-bold text-sm text-[#00246C] bg-white sm:bg-transparent z-10 py-1">
                <Clock className="w-4 h-4 text-[#D41B2C] shrink-0" />
                <span>{seg.timeSlot.split(' ')[0]}</span>
              </div>

              {/* Node Marker */}
              <div className="w-4 h-4 rounded-full bg-[#00246C] border-4 border-white shadow-md z-10 hidden sm:block mt-1 shrink-0" />

              {/* Card Details */}
              <div className="flex-1 bg-slate-50 hover:bg-blue-50/40 rounded-2xl p-6 border border-slate-200/90 shadow-2xs transition-all w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-[#00246C] text-xs font-bold">
                    {seg.format}
                  </span>

                  <span className="text-xs text-slate-500 font-semibold">
                    Duration: {seg.durationMins} Minutes
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {seg.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {seg.description}
                </p>

                {/* Key Takeaways */}
                <div className="pt-3 border-t border-slate-200/60 space-y-1.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                    Expected Outcomes & Takeaways:
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
                    {seg.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
