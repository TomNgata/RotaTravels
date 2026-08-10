import React from 'react';
import { ResourceItem } from '../../types';
import { FileText, Download, BookOpen, Clock, Tag, ChevronRight } from 'lucide-react';

interface ResourceCardProps {
  resource: ResourceItem;
  onSelect: (resource: ResourceItem) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(resource)}
      className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-xl hover:border-[#00246C] transition-all cursor-pointer group flex flex-col justify-between"
    >
      <div>
        
        {/* Category & Read Time */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#00246C] text-[11px] font-black uppercase tracking-wider border border-blue-100">
            {resource.category}
          </span>

          <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {resource.readTimeMins} Min Read
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="text-lg font-black text-slate-900 group-hover:text-[#00246C] transition-colors leading-snug mb-2">
          {resource.title}
        </h3>

        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
          {resource.summary}
        </p>

      </div>

      {/* Footer Tags */}
      <div>
        <div className="flex flex-wrap gap-1 mb-4">
          {resource.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
              #{tag}
            </span>
          ))}
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">{resource.author}</span>
          <span className="font-bold text-[#D41B2C] group-hover:translate-x-1 transition-transform flex items-center gap-1">
            View Resource <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

    </div>
  );
};
