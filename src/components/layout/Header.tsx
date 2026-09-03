import React, { useState } from 'react';
import { Compass, Calendar, Users, MapPin, BookOpen, Handshake, HelpCircle, Menu, X, ArrowRight, ShieldAlert, MessageSquare } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenRegister: () => void;
  onOpenQuestion: () => void;
  currentHost: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenRegister,
  onOpenQuestion,
  currentHost
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview', icon: Compass },
    { id: 'programme', label: 'Programme', icon: Calendar },
    { id: 'speakers', label: 'Panelists', icon: Users },
    { id: 'travel', label: 'Travel Hub', icon: MapPin },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'partners', label: 'Partners', icon: Handshake },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#00246C] text-white flex items-center justify-center font-bold shadow-md group-hover:bg-[#D41B2C] transition-colors">
              <Compass className="w-6 h-6 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-[#00246C] group-hover:text-[#D41B2C] transition-colors">
                  ROTA<span className="text-[#D41B2C]">TRAVEL</span> HACKS
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-900 rounded-md border border-amber-300 uppercase">
                  2026
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Fellowship & Global Digital Campaign
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-[#00246C] bg-blue-50 border border-blue-200/60 shadow-2xs'
                      : 'text-slate-600 hover:text-[#00246C] hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#D41B2C]' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuestion}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#00246C] font-bold text-sm border border-slate-200 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#D41B2C]" />
              <span>Ask a Question</span>
            </button>
            <button
              onClick={onOpenRegister}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Register Free</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuestion}
              className="p-2 rounded-lg bg-slate-100 text-[#00246C] sm:hidden"
              aria-label="Ask a question"
            >
              <MessageSquare className="w-5 h-5 text-[#D41B2C]" />
            </button>
            <button
              onClick={onOpenRegister}
              className="px-3.5 py-1.5 rounded-lg bg-[#D41B2C] text-white text-xs font-bold sm:hidden"
            >
              Register
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Host: <strong className="font-semibold">{currentHost}</strong> | 3 Sept 2026</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl text-sm font-semibold text-left transition-all ${
                    isActive
                      ? 'text-[#00246C] bg-blue-50 border border-blue-200'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#D41B2C]' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuestion();
              }}
              className="w-full py-3 rounded-xl bg-slate-100 text-[#00246C] font-bold text-center text-sm flex items-center justify-center gap-2 border border-slate-200"
            >
              <MessageSquare className="w-4 h-4 text-[#D41B2C]" />
              <span>Ask the Panelists a Question</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 rounded-xl bg-[#D41B2C] text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
            >
              <span>Register Now for Free</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
