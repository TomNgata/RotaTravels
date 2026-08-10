import React, { useState } from 'react';
import { ResourceItem } from '../../types';
import { X, Copy, Check, Download, Share2, BookOpen, Clock, Tag } from 'lucide-react';

interface ResourceDetailModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceDetailModal: React.FC<ResourceDetailModalProps> = ({ resource, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!resource) return null;

  const handleCopyContent = () => {
    navigator.clipboard.writeText(resource.content);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleDownloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([resource.content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = resource.downloadFileName || `${resource.slug}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8 max-h-[90vh] overflow-y-auto text-slate-900"
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
        <div className="space-y-3 pb-6 border-b border-slate-100 pr-10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-[#00246C] text-xs font-black uppercase tracking-wider">
              {resource.category}
            </span>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {resource.readTimeMins} Min Read
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#00246C] leading-snug">
            {resource.title}
          </h3>

          <p className="text-xs text-slate-500">
            By <strong className="text-slate-900">{resource.author}</strong> • Published {resource.publishDate}
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="py-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-slate-50 p-4 rounded-2xl my-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyContent}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              {copiedText ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#00246C]" />}
              <span>{copiedText ? 'Text Copied!' : 'Copy Full Document'}</span>
            </button>

            <button
              onClick={handleDownloadFile}
              className="px-4 py-2 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>Download (.txt / .docx)</span>
            </button>
          </div>

          <div className="flex items-center gap-1">
            {resource.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] font-semibold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Resource Body Content */}
        <div className="py-4">
          <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl font-mono text-xs leading-relaxed whitespace-pre-wrap overflow-x-auto shadow-inner border border-slate-800 max-h-96">
            {resource.content}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Rotaract Travel Hacks 2026 Knowledge Hub
          </span>
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
