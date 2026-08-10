import React from 'react';
import { Compass, ExternalLink, ShieldCheck, Heart, ArrowUp, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenRegister: () => void;
  currentHost: string;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenRegister,
  currentHost
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00194A] text-slate-300 border-t border-blue-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Col 1 & 2: Mission & Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D41B2C] text-white flex items-center justify-center font-bold shadow-md">
                <Compass className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="font-black text-xl tracking-tight text-white">
                  ROTA<span className="text-[#D41B2C]">TRAVEL</span> HACKS
                </span>
                <span className="ml-2 text-xs font-bold text-amber-400 uppercase">2026</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Turning informal travel wisdom into a structured, evergreen knowledge hub for African Rotaractors and global travellers. Empowering members to travel for service, fellowship, and leadership without documentation gaps.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-blue-950 text-blue-200 border border-blue-800">
                Confirmed Date: 3 September 2026
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
                Host: {currentHost}
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider text-amber-400">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('programme')} className="hover:text-white transition-colors">
                  Run of Show & Programme
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('speakers')} className="hover:text-white transition-colors">
                  Confirmed Panelists
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('travel')} className="hover:text-white transition-colors">
                  Country Travel Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">
                  Templates & Knowledge Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('partners')} className="hover:text-white transition-colors">
                  Co-Hosts & Sponsors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Destination Guides */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider text-amber-400">
              Travel Guides
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('travel')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>🇨🇮</span> Côte d’Ivoire (RAS 2026)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('travel')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>🇰🇪</span> Kenya (eTA Rules)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('travel')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>🇷🇼</span> Rwanda (AU Visa Waiver)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('travel')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>🇿🇦</span> South Africa (Visa Checklist)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('travel')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>🇪🇺</span> Schengen Area Protocols
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Download & Register */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider text-amber-400">
              Join the Fellowship
            </h4>
            <p className="text-xs text-slate-400">
              Register free to receive calendar invites, boarding pass ticket, and downloadable sponsorship templates.
            </p>

            <button
              onClick={onOpenRegister}
              className="w-full py-2.5 px-4 rounded-xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-sm shadow-md transition-all text-center block"
            >
              Register Free Now
            </button>

            <a
              href="https://github.com/TomNgata/RotaTravels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors pt-2"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository: TomNgata/RotaTravels</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex items-start gap-2 max-w-2xl">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> Rotaract Travel Hacks 2026 is an independent Rotaract fellowship & digital resource hub. Information provided is for educational and peer-to-peer sharing purposes only and does not constitute official immigration or legal advice. Always verify requirements on official embassy portals.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span>© 2026 Rotaract Travel Hacks</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-900/80 text-slate-200 hover:bg-blue-800 hover:text-white transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
