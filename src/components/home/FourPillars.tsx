import React, { useState } from 'react';
import { ProgrammePillar } from '../../types';
import { FileText, Wallet, Compass, MessageSquare, ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';

interface FourPillarsProps {
  pillars: ProgrammePillar[];
  onNavigate: (tab: string) => void;
  onOpenQuestionModal?: () => void;
}

export const FourPillars: React.FC<FourPillarsProps> = ({
  pillars,
  onNavigate,
  onOpenQuestionModal
}) => {
  const [expandedPillarId, setExpandedPillarId] = useState<number | null>(1);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return FileText;
      case 'Wallet': return Wallet;
      case 'Compass': return Compass;
      case 'MessageSquare': return MessageSquare;
      default: return Compass;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#00246C] font-extrabold text-xs uppercase tracking-wider border border-blue-200 inline-block">
              STRUCTURED PROGRAMME ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#00246C] tracking-tight">
              The Four Core Pillars
            </h2>
            <p className="text-slate-600 max-w-2xl text-base">
              The 90-minute hybrid session is built around four practical modules led by our confirmed 5-panelist lineup.
            </p>
          </div>

          <button
            onClick={() => onNavigate('programme')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#00246C] font-bold text-sm flex items-center gap-2 transition-colors shrink-0"
          >
            <span>Full Run of Show</span>
            <ArrowRight className="w-4 h-4 text-[#D41B2C]" />
          </button>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = getPillarIcon(pillar.iconName);
            const isExpanded = expandedPillarId === pillar.id;

            return (
              <div
                key={pillar.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-[#00246C] bg-slate-50 shadow-md ring-1 ring-[#00246C]'
                    : 'border-slate-200 bg-white hover:border-slate-300 shadow-2xs'
                }`}
              >
                {/* Header */}
                <div
                  onClick={() => setExpandedPillarId(isExpanded ? null : pillar.id)}
                  className="p-6 cursor-pointer flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shrink-0 ${
                      isExpanded
                        ? 'bg-[#00246C] text-white'
                        : 'bg-blue-50 text-[#00246C]'
                    }`}>
                      <Icon className={`w-6 h-6 ${isExpanded ? 'text-amber-400' : 'text-[#D41B2C]'}`} />
                    </div>

                    <div>
                      <span className="text-xs font-black text-[#D41B2C] uppercase tracking-wider block mb-1">
                        PILLAR {pillar.numberStr}
                      </span>
                      <h3 className="text-xl font-black text-slate-900 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        Assigned Panelists: {pillar.assignedPanelists.join(' • ')}
                      </p>
                    </div>
                  </div>

                  <button className="p-2 text-slate-400 hover:text-slate-700 transition-colors">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Body Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-200/80 space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.fullDescription}
                    </p>

                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                        Key Coverage & Action Items:
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {pillar.keyTopics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {pillar.id === 4 && onOpenQuestionModal && (
                      <div className="pt-2">
                        <button
                          onClick={onOpenQuestionModal}
                          className="px-4 py-2 rounded-xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-xs shadow-xs transition-colors inline-flex items-center gap-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
                          <span>Submit a Question for Pillar 04 Q&A</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
