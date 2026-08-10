import React, { useState } from 'react';
import { Share2, Copy, Check, X, ExternalLink } from 'lucide-react';

interface SocialShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  url?: string;
}

export const SocialShareModal: React.FC<SocialShareModalProps> = ({
  isOpen,
  onClose,
  title,
  text,
  url = typeof window !== 'undefined' ? window.location.href : 'https://rotaracttravelhacks.com',
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const shareUrl = encodeURIComponent(url);
  const shareText = encodeURIComponent(`${title} - ${text}`);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        onClose();
      } catch (err) {
        // User cancelled share
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative text-slate-900 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-blue-50 text-[#00246C] rounded-2xl">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">Share Content</h3>
              <p className="text-xs text-slate-500">Spread the word with fellow Rotaractors</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Summary Card */}
        <div className="my-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80">
          <span className="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-100 text-[#00246C]">
            ROTARACT TRAVEL HACKS 2026
          </span>
          <h4 className="font-bold text-sm text-slate-800 mt-1.5 line-clamp-1">{title}</h4>
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{text}</p>
        </div>

        {/* Share Options Grid */}
        <div className="space-y-3">
          {/* Native Web Share API if supported */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center justify-between p-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm transition-all shadow-sm"
            >
              <div className="flex items-center gap-3">
                <Share2 className="w-4 h-4 text-amber-400" />
                <span>Share via Device Apps</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </button>
          )}

          <div className="grid grid-cols-2 gap-3">
            {/* Twitter / X */}
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-black hover:bg-slate-800 text-white rounded-2xl font-bold text-xs transition-all shadow-2xs group"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Twitter / X</span>
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-[#0A66C2] hover:bg-[#084e96] text-white rounded-2xl font-bold text-xs transition-all shadow-2xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Copy Link Input */}
          <div className="pt-2">
            <label className="block text-xs font-semibold text-slate-500 mb-1.5">Direct Page Link</label>
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              <input
                type="text"
                readOnly
                value={url}
                className="w-full bg-transparent border-0 text-xs text-slate-600 px-2 focus:ring-0 select-all"
              />
              <button
                onClick={handleCopyLink}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#00246C] hover:bg-[#D41B2C] text-white shadow-xs'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
