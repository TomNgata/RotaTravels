import React from 'react';
import { ShieldAlert, CheckCircle2, ArrowRight, Lightbulb, FileText, Globe, Coins } from 'lucide-react';

interface WhyThisMattersProps {
  onNavigate: (tab: string) => void;
  onOpenRegister: () => void;
}

export const WhyThisMatters: React.FC<WhyThisMattersProps> = ({
  onNavigate,
  onOpenRegister
}) => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-[#D41B2C] font-extrabold text-xs uppercase tracking-wider border border-red-200 inline-block">
            WHY THIS INITIATIVE MATTERS
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00246C] tracking-tight">
            The World is Open. <br className="hidden sm:inline" />
            <span className="text-[#D41B2C]">The Paperwork Isn’t.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every year, passionate African Rotaractors and Rotarians miss life-changing international leadership conventions, service projects, and fellowships due to avoidable visa refusals, bank-statement formatting gaps, and unclear sponsorship letters.
          </p>
        </div>

        {/* Comparison Grid: Problem vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Problem Card */}
          <div className="bg-white rounded-2xl p-8 border border-red-200/80 shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 text-red-600">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center font-bold">
                <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                The Recurring Mobility Barriers
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <span><strong>Avoidable Visa Refusals:</strong> Applications rejected under "Unsatisfactory Financial Circumstances" because personal and business funds were presented without explanation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <span><strong>Unclear Sponsorship Letters:</strong> Informal sponsorship notes that fail to meet embassy verification and guarantee standards.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <span><strong>Short Booking Lead Times:</strong> Members booking flights 2 weeks before events at exorbitant prices instead of using regional fare hacking strategies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <span><strong>Unstructured Knowledge:</strong> Valuable travel experience lost in group chats instead of being documented in reusable guides.</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-gradient-to-br from-[#00246C] to-slate-900 text-white rounded-2xl p-8 border border-blue-900 shadow-md space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3 text-amber-400">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center font-bold border border-amber-400/30">
                <Lightbulb className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-xl font-black text-white">
                The Rotaract Travel Hacks Solution
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Structured Embassy Proof:</strong> Vetted bank statement checklists and templates that prove ties to home country convincingly.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Official Sponsorship Templates:</strong> Downloadable, pre-formatted club guarantee letters accepted across diplomatic missions.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Path to RAS 2026 (Côte d’Ivoire):</strong> Dedicated regional flight, Yellow Fever, e-Visa, and budget roadmap for Abidjan.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Evergreen Knowledge Hub:</strong> A permanent digital library outlasting the live event so future generations of Rotaractors benefit.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Core Value Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00246C] flex items-center justify-center font-bold mb-4">
              <FileText className="w-6 h-6 text-[#D41B2C]" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Vetted Documentation</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Step-by-step guidance on structuring personal, business, and club financial records to meet strict visa officer expectations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-4">
              <Coins className="w-6 h-6 text-amber-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Smart Budgeting & Forex</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Flight hacking tricks, multi-currency debit card strategies, and group stay options that dramatically lower international travel costs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold mb-4">
              <Globe className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Global Rotaract Mobility</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Building lasting fellowship across Districts 9212, 9214, 9102, and beyond — preparing members for global Rotary conventions.
            </p>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('resources')}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#00246C] hover:text-[#D41B2C] transition-colors"
          >
            <span>Explore Downloadable Templates in Knowledge Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
