import React from 'react';
import { MessageSquare, Lightbulb, Ticket } from 'lucide-react';

interface QuickActionsCTAProps {
  onOpenQuestionModal: () => void;
  onOpenHackModal: () => void;
  onOpenRegister: () => void;
}

export const QuickActionsCTA: React.FC<QuickActionsCTAProps> = ({
  onOpenQuestionModal,
  onOpenHackModal,
  onOpenRegister
}) => {
  return (
    <section className="bg-white py-10 border-b border-slate-200 shadow-sm relative z-20 -mt-6 mx-4 sm:mx-6 lg:mx-8 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-[#00246C]">Quick Actions</h2>
          <p className="text-sm text-slate-500">Engage with the panelists and community right now.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={onOpenQuestionModal}
            className="flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl transition-all group"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6 text-[#00246C]" />
            </div>
            <span className="font-bold text-slate-900 group-hover:text-[#00246C]">Ask a Question</span>
            <span className="text-xs text-slate-500 mt-1 text-center">Submit a question for the Q&A panel</span>
          </button>

          <button
            onClick={onOpenRegister}
            className="flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-300 rounded-xl transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#D41B2C] opacity-0 group-hover:opacity-5 transition-opacity" />
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <Ticket className="w-6 h-6 text-[#D41B2C]" />
            </div>
            <span className="font-bold text-slate-900 group-hover:text-[#D41B2C]">Register Free Now</span>
            <span className="text-xs text-slate-500 mt-1 text-center">Claim your boarding pass ticket</span>
          </button>

          <button
            onClick={onOpenHackModal}
            className="flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 rounded-xl transition-all group"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <Lightbulb className="w-6 h-6 text-amber-500" />
            </div>
            <span className="font-bold text-slate-900 group-hover:text-amber-700">Submit a Travel Hack</span>
            <span className="text-xs text-slate-500 mt-1 text-center">Share your best tips with the community</span>
          </button>
        </div>
      </div>
    </section>
  );
};
