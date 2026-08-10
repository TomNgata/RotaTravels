import React from 'react';
import { Speaker } from '../../types';
import { X, MapPin, Award, CheckCircle2, MessageSquare, Linkedin, Twitter, Share2 } from 'lucide-react';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
  onOpenQuestionModal: (speakerName?: string) => void;
  onShare?: (speaker: Speaker) => void;
}

export const SpeakerModal: React.FC<SpeakerModalProps> = ({
  speaker,
  onClose,
  onOpenQuestionModal,
  onShare
}) => {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Profile Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 shrink-0 shadow-md">
            <img
              src={speaker.imageUrl}
              alt={speaker.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Confirmed Panelist • 3 Sept 2026
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-[#00246C]">
              {speaker.name}
            </h3>

            <p className="text-sm font-bold text-[#D41B2C]">
              {speaker.title}
            </p>

            <p className="text-xs text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{speaker.club} • {speaker.district}</span>
            </p>
          </div>
        </div>

        {/* Bio Content */}
        <div className="py-6 space-y-6">
          
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
              Biography & Background
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {speaker.bio}
            </p>
          </div>

          {/* Travel Milestones */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
              Key Travel Milestones
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {speaker.travelMilestones.map((ms, idx) => (
                <li key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="font-medium text-slate-800">{ms}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Areas of Expertise */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
              Core Panel Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {speaker.expertise.map((exp, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-blue-50 text-[#00246C] text-xs font-bold border border-blue-100">
                  {exp}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenQuestionModal(speaker.name);
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-amber-300" />
              <span>Ask {speaker.name} a Question</span>
            </button>

            {onShare && (
              <button
                onClick={() => onShare(speaker)}
                className="px-3.5 py-3 rounded-xl bg-slate-100 hover:bg-[#00246C] hover:text-white text-[#00246C] font-bold text-xs transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                title="Share Speaker Profile"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            Close Profile
          </button>
        </div>

      </div>
    </div>
  );
};
