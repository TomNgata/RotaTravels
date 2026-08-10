import React, { useState } from 'react';
import { CountryGuide } from '../../types';
import { X, ExternalLink, CheckCircle2, ShieldCheck, DollarSign, Calendar, FileText, Lightbulb, AlertTriangle, Printer, Copy, Check, Share2 } from 'lucide-react';

interface CountryDetailModalProps {
  country: CountryGuide | null;
  onClose: () => void;
  onShare?: (country: CountryGuide) => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({ country, onClose, onShare }) => {
  const [copiedChecklist, setCopiedChecklist] = useState(false);

  if (!country) return null;

  const handleCopyChecklist = () => {
    const text = `TRAVEL READINESS CHECKLIST — ${country.name.toUpperCase()} (${country.flagEmoji})\n` +
      `Visa Type: ${country.visaRequirement.type}\n` +
      `Official Portal: ${country.officialPortalUrl}\n\n` +
      `ENTRY CHECKLIST:\n` + country.entryChecklist.map(c => `- [ ] ${c}`).join('\n') + `\n\n` +
      `FINANCIAL DOCUMENTATION:\n` + country.financialDocNorms.map(f => `- ${f}`).join('\n') + `\n\n` +
      `PEER TRAVEL HACKS:\n` + country.peerHacks.map(p => `- ${p}`).join('\n') + `\n\n` +
      `Rotaract Travel Hacks 2026 • Evergreen Knowledge Hub`;

    navigator.clipboard.writeText(text);
    setCopiedChecklist(true);
    setTimeout(() => setCopiedChecklist(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8 max-h-[90vh] overflow-y-auto"
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

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-100 pr-12">
          <div className="flex items-start gap-4">
            <span className="text-4xl leading-none">{country.flagEmoji}</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-2xl sm:text-3xl font-black text-[#00246C]">
                  {country.name}
                </h3>
                <span className="px-3 py-0.5 rounded-full bg-blue-100 text-[#00246C] text-xs font-bold">
                  {country.region}
                </span>
              </div>
              <p className="text-xs text-[#D41B2C] font-bold mt-1">
                {country.rotaryRelevance}
              </p>
            </div>
          </div>

          {onShare && (
            <button
              onClick={() => onShare(country)}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-[#00246C] hover:text-white text-[#00246C] font-bold text-xs transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
              title="Share Country Guide"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share Guide</span>
            </button>
          )}
        </div>

        {/* Quick Specs Grid */}
        <div className="py-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs">
            <span className="text-slate-400 font-bold block uppercase text-[10px]">VISA CATEGORY</span>
            <strong className="text-[#00246C] font-extrabold text-sm block mt-0.5">{country.visaRequirement.type}</strong>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs">
            <span className="text-slate-400 font-bold block uppercase text-[10px]">PROCESSING FEE</span>
            <strong className="text-slate-900 font-extrabold text-sm block mt-0.5">{country.visaRequirement.feeUsd}</strong>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs">
            <span className="text-slate-400 font-bold block uppercase text-[10px]">EST. DAILY BUDGET</span>
            <strong className="text-emerald-700 font-extrabold text-sm block mt-0.5">~${country.estimatedMinDailyBudgetUsd} / Day</strong>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs">
            <span className="text-slate-400 font-bold block uppercase text-[10px]">YELLOW FEVER</span>
            <strong className={`font-extrabold text-sm block mt-0.5 ${country.yellowFeverRequired ? 'text-amber-700' : 'text-slate-600'}`}>
              {country.yellowFeverRequired ? 'Mandatory Card' : 'Not Required'}
            </strong>
          </div>
        </div>

        {/* Modal Sections */}
        <div className="space-y-6">
          
          {/* Entry Requirements Checklist */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Mandatory Entry Requirements</span>
              <button
                onClick={handleCopyChecklist}
                className="text-[11px] font-bold text-[#00246C] hover:text-[#D41B2C] flex items-center gap-1"
              >
                {copiedChecklist ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedChecklist ? 'Checklist Copied!' : 'Copy Checklist Text'}</span>
              </button>
            </h4>

            <ul className="space-y-2 text-xs">
              {country.entryChecklist.map((item, idx) => (
                <li key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Financial Documentation Norms */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
              Financial Documentation Standards
            </h4>
            <ul className="space-y-2 text-xs">
              {country.financialDocNorms.map((doc, idx) => (
                <li key={idx} className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-[#00246C] shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rotaract Sponsorship Tips */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
              Rotaract Sponsorship & Protocol Advice
            </h4>
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950 space-y-1.5">
              {country.sponsorshipTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Peer Travel Hacks */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
              Peer Travel Hacks & Local Insights
            </h4>
            <ul className="space-y-2 text-xs">
              {country.peerHacks.map((hack, idx) => (
                <li key={idx} className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-emerald-950 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hack}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Portal Notice */}
          <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-600 flex items-center justify-between gap-3">
            <span className="text-[11px]">
              Always verify rules on official government portals before submitting visa applications.
            </span>
            <a
              href={country.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#00246C] text-white font-bold text-[11px] hover:bg-[#D41B2C] transition-colors flex items-center gap-1 shrink-0"
            >
              <span>Official Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">Last Verified: {country.lastUpdated}</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
