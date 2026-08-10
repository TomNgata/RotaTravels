import React from 'react';
import { CountryGuide } from '../../types';
import { Shield, Clock, CheckCircle2, ChevronRight, AlertCircle, FileText } from 'lucide-react';

interface CountryCardProps {
  country: CountryGuide;
  onSelect: (country: CountryGuide) => void;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country, onSelect }) => {
  const getVisaBadgeStyle = (type: string) => {
    switch (type) {
      case 'Visa-Free':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Visa on Arrival':
      case 'ETA / Registration':
        return 'bg-blue-100 text-[#00246C] border-blue-300';
      case 'eVisa':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      default:
        return 'bg-red-100 text-red-800 border-red-300';
    }
  };

  return (
    <div
      onClick={() => onSelect(country)}
      className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-xl hover:border-[#00246C] transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div>
        
        {/* Flag, Name, Region */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl leading-none select-none">{country.flagEmoji}</span>
            <div>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-[#00246C] transition-colors leading-snug">
                {country.name}
              </h3>
              <span className="text-xs font-semibold text-slate-500">{country.region}</span>
            </div>
          </div>

          {country.isFeaturedDestination && (
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md border border-amber-300 shrink-0">
              FEATURED
            </span>
          )}
        </div>

        {/* Rotary Relevance Tag */}
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-xs font-semibold text-slate-700 flex items-start gap-2">
          <Shield className="w-4 h-4 text-[#D41B2C] shrink-0 mt-0.5" />
          <span>{country.rotaryRelevance}</span>
        </div>

        {/* Visa & Fee Quick Specs */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-4">
          <div className="p-2 bg-slate-50 rounded-lg">
            <span className="text-slate-400 font-bold block text-[10px] uppercase">VISA TYPE</span>
            <span className={`inline-block mt-0.5 px-2 py-0.5 rounded-md font-bold text-[11px] border ${getVisaBadgeStyle(country.visaRequirement.type)}`}>
              {country.visaRequirement.type}
            </span>
          </div>

          <div className="p-2 bg-slate-50 rounded-lg">
            <span className="text-slate-400 font-bold block text-[10px] uppercase">PROCESSING TIME</span>
            <strong className="text-slate-800 font-bold block mt-1">{country.visaRequirement.processingTimeDays}</strong>
          </div>
        </div>

        {/* Entry Checklist Snippet */}
        <div className="space-y-1 text-xs text-slate-600">
          <span className="font-extrabold uppercase text-[10px] text-slate-400 block">KEY REQUIREMENTS:</span>
          {country.entryChecklist.slice(0, 2).map((req, idx) => (
            <div key={idx} className="flex items-start gap-1.5 truncate">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="truncate">{req}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Card Footer */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Updated: {country.lastUpdated}</span>
        <span className="font-extrabold text-[#00246C] group-hover:translate-x-1 transition-transform flex items-center gap-1">
          Full Guide <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>

    </div>
  );
};
