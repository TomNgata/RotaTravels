import React, { useState } from 'react';
import { TravelHackSubmission } from '../../types';
import { Lightbulb, ThumbsUp, Plus, MapPin, UserCheck, Sparkles } from 'lucide-react';

interface CommunityHacksListProps {
  hacks: TravelHackSubmission[];
  onOpenSubmitModal: () => void;
}

export const CommunityHacksList: React.FC<CommunityHacksListProps> = ({
  hacks,
  onOpenSubmitModal
}) => {
  const [localHacks, setLocalHacks] = useState<TravelHackSubmission[]>(hacks);
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());

  const handleVote = async (id: string) => {
    if (votedIds.has(id)) return;

    setVotedIds(new Set(votedIds).add(id));
    setLocalHacks(prev => prev.map(h => {
      if (h.id === id) return { ...h, votesCount: h.votesCount + 1 };
      return h;
    }));

    try {
      await fetch(`/api/hacks/${id}/vote`, { method: 'POST' });
    } catch (err) {
      // Ignored - local state handles smooth UI feedback
    }
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 font-extrabold text-xs uppercase tracking-wider border border-amber-200 inline-block">
              CROWDSOURCED PEER WISDOM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#00246C] tracking-tight">
              Community Travel Hacks
            </h2>
            <p className="text-slate-600 max-w-2xl text-base">
              Real-world tips, border clearance tricks, and visa application hacks shared by fellow Rotaractors.
            </p>
          </div>

          <button
            onClick={onOpenSubmitModal}
            className="self-start md:self-auto px-5 py-3 rounded-2xl bg-[#00246C] hover:bg-[#D41B2C] text-white font-extrabold text-xs shadow-md flex items-center gap-2 transition-colors shrink-0"
          >
            <Plus className="w-4 h-4 text-amber-300" />
            <span>Share Your Travel Hack</span>
          </button>
        </div>

        {/* Hacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {localHacks.map((hack) => (
            <div
              key={hack.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-[10px] font-bold uppercase">
                    {hack.category}
                  </span>

                  <span className="text-xs font-bold text-[#00246C] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D41B2C]" />
                    {hack.destinationCountry}
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 mb-2 leading-snug">
                  {hack.hackTitle}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {hack.hackDetails}
                </p>
              </div>

              {/* Author & Vote Footer */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{hack.authorName}</span>
                  <span className="text-[10px] text-slate-500 font-medium">{hack.authorClub}</span>
                </div>

                <button
                  onClick={() => handleVote(hack.id)}
                  disabled={votedIds.has(hack.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    votedIds.has(hack.id)
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${votedIds.has(hack.id) ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{hack.votesCount}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
