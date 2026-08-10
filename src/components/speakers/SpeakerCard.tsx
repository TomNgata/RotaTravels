import React from 'react';
import { Speaker } from '../../types';
import { MapPin, Award, CheckCircle2, Linkedin, Twitter } from 'lucide-react';

interface SpeakerCardProps {
  speaker: Speaker;
  onSelect: (speaker: Speaker) => void;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(speaker)}
      className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-xl hover:border-blue-300 transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div>
        
        {/* Avatar & Badge */}
        <div className="relative mb-5">
          <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 relative">
            <img
              src={speaker.imageUrl}
              alt={speaker.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md border border-amber-400/30">
                {speaker.role}
              </span>
            </div>
          </div>

          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs p-1.5 rounded-xl shadow-xs text-xs font-bold text-[#00246C] flex items-center gap-1 border border-slate-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Confirmed</span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h3 className="text-xl font-black text-slate-900 group-hover:text-[#00246C] transition-colors">
            {speaker.name}
          </h3>
          
          <p className="text-xs font-semibold text-[#D41B2C]">
            {speaker.title}
          </p>

          <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{speaker.club} • {speaker.district}</span>
          </p>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed pt-2">
            {speaker.bio}
          </p>
        </div>

      </div>

      {/* Footer Tags */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {speaker.expertise.slice(0, 2).map((exp, idx) => (
            <span key={idx} className="text-[10px] font-semibold bg-blue-50 text-[#00246C] px-2 py-0.5 rounded-md">
              {exp}
            </span>
          ))}
        </div>

        <span className="text-xs font-bold text-[#00246C] group-hover:translate-x-1 transition-transform">
          Bio →
        </span>
      </div>

    </div>
  );
};
