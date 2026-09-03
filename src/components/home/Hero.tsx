import React from 'react';
import { Compass, Calendar, ArrowRight, ShieldCheck, MapPin, Sparkles, Plane, FileCheck } from 'lucide-react';
import { EventConfig, EventPhase } from '../../types';
import { CountdownTimer } from './CountdownTimer';

interface HeroProps {
  config: EventConfig;
  currentPhase: EventPhase;
  onNavigate: (tab: string) => void;
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  config,
  currentPhase,
  onNavigate,
  onOpenRegister
}) => {
  return (
    <section className="relative bg-gradient-to-b from-[#00194A] via-[#00246C] to-slate-900 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Decorative Flight Route Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Badges & Host Notice */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold text-xs flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Confirmed Date: {config.confirmedDate}
          </span>

          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 font-medium text-xs flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-300" />
            Host: <strong className="text-white font-semibold">{config.currentHost}</strong>
          </span>

          <span className="px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-300 border border-red-400/30 font-medium text-xs hidden sm:flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
            In-Person Fellowship • Nairobi
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-medium text-xs hidden sm:flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Buy Goods Till: 555555 (Rotaract Nairobi Parklands)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="space-y-2">
              <span className="text-amber-400 font-extrabold text-sm uppercase tracking-widest block">
                ROTARACT TRAVEL HACKS 2026
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Travel Smarter. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-red-400">
                  Go Further.
                </span> <br />
                Serve Globally.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The definitive fellowship & evergreen travel intelligence hub for African Rotaractors and global travellers. Master visa applications, bank statement requirements, budgeting, and the path to <strong className="text-amber-300 font-semibold">RAS 2026 (Côte d’Ivoire)</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-black text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
              >
                <span>Register Free Now</span>
                <ArrowRight className="w-5 h-5 text-amber-300" />
              </button>

              <button
                onClick={() => onNavigate('travel')}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5 text-amber-400" />
                <span>Explore Travel Hub</span>
              </button>

              <button
                onClick={() => onNavigate('programme')}
                className="w-full sm:w-auto px-5 py-4 rounded-xl text-slate-300 hover:text-white font-semibold text-sm transition-colors text-center"
              >
                View Programme
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-blue-900/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <span className="block text-2xl font-black text-white">5</span>
                <span className="text-xs text-slate-400 font-medium">Confirmed Panelists</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-amber-400">100+</span>
                <span className="text-xs text-slate-400 font-medium">Expected Delegates</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-red-400">4</span>
                <span className="text-xs text-slate-400 font-medium">Core Pillars</span>
              </div>
            </div>

          </div>

          {/* Right Visual Boarding Pass & Route Interactive Graphic */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Boarding Pass Card Concept */}
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/90 relative overflow-hidden transform hover:scale-[1.01] transition-transform">
              
              {/* Top Boarding Pass Header */}
              <div className="flex items-center justify-between pb-4 border-b border-dashed border-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00246C] text-white flex items-center justify-center font-bold">
                    <Plane className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs font-black tracking-wider text-[#00246C] uppercase block">
                      BOARDING PASS • FELLOWSHIP
                    </span>
                    <span className="text-[11px] text-slate-500">ROTA TRAVEL HACKS 2026</span>
                  </div>
                </div>

                <div className="passport-stamp text-[10px] py-0.5 px-2">
                  CONFIRMED
                </div>
              </div>

              {/* Route Display */}
              <div className="py-6 flex items-center justify-between">
                <div className="text-left">
                  <span className="text-3xl font-black text-[#00246C] block">NBO</span>
                  <span className="text-xs text-slate-500 font-medium">Nairobi, KE</span>
                </div>

                <div className="flex-1 px-4 text-center relative">
                  <div className="w-full border-b-2 border-dashed border-slate-300 relative my-2">
                    <Plane className="w-5 h-5 text-[#D41B2C] absolute left-1/2 -top-2.5 -translate-x-1/2 rotate-90" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full uppercase">
                    3 SEP 2026
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-3xl font-black text-[#D41B2C] block">ABJ</span>
                  <span className="text-xs text-slate-500 font-medium">Abidjan, CI (RAS)</span>
                </div>
              </div>

              {/* Passenger & Event Details */}
              <div className="grid grid-cols-2 gap-4 py-4 bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block uppercase text-[10px]">DELEGATE CLASS</span>
                  <strong className="text-slate-900 font-bold">Rotaract & Rotary Global</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block uppercase text-[10px]">FORMAT</span>
                  <strong className="text-slate-900 font-bold">In-Person Only</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block uppercase text-[10px]">TIME</span>
                  <strong className="text-slate-900 font-bold">6:30 PM – 8:30 PM EAT</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block uppercase text-[10px]">ACCESS</span>
                  <strong className="text-[#D41B2C] font-bold">Free Reg • Kshs 100 Entry</strong>
                </div>
              </div>

              {/* Bottom CTA on Boarding Card */}
              <div className="pt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Includes Sponsorship Templates</span>
                </div>

                <button
                  onClick={onOpenRegister}
                  className="px-4 py-2 rounded-xl bg-[#00246C] hover:bg-[#D41B2C] text-white font-bold text-xs transition-colors"
                >
                  Claim Pass
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Live Countdown Component Integration */}
        <div className="mt-14">
          <CountdownTimer
            targetDateIso={config.dateIso}
            phase={currentPhase}
            onNavigate={onNavigate}
            onOpenRegister={onOpenRegister}
          />
        </div>

      </div>
    </section>
  );
};
