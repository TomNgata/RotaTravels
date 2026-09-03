import React from 'react';
import { Camera, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { EventPhase } from '../../types';

interface EventGalleryProps {
  currentPhase: EventPhase;
}

export const EventGallery: React.FC<EventGalleryProps> = ({ currentPhase }) => {
  const isPostEvent = currentPhase === 'post-event';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-extrabold text-xs uppercase tracking-wider border border-slate-200 inline-block">
            MOMENTS & MEMORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00246C] tracking-tight">
            Event Gallery
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Relive the best moments, connections, and insights from Rotaract Travel Hacks 2026.
          </p>
        </div>

        {isPostEvent ? (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Placeholder image grid for post-event */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-slate-300" />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-slate-900 shadow-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#00246C] font-bold text-sm transition-colors border border-slate-200">
                <ExternalLink className="w-4 h-4" />
                Access Full High-Res Google Drive Folder
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
              <Camera className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-2">Photos Coming Soon</h3>
            <p className="text-sm text-slate-500 mb-6">
              The official event photo gallery will be published here immediately following the fellowship on 3 September 2026.
            </p>
            <div className="inline-block px-4 py-2 bg-slate-200 rounded-lg text-xs font-bold text-slate-600 uppercase tracking-wider">
              Check back post-event
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
