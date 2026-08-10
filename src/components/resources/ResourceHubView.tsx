import React, { useState } from 'react';
import { ResourceItem } from '../../types';
import { ResourceCard } from './ResourceCard';
import { ResourceDetailModal } from './ResourceDetailModal';
import { Search, BookOpen, Filter, Download, FileText, Sparkles } from 'lucide-react';

interface ResourceHubViewProps {
  resources: ResourceItem[];
}

export const ResourceHubView: React.FC<ResourceHubViewProps> = ({ resources }) => {
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'Checklists & Templates', label: 'Sponsorship Templates' },
    { id: 'Visa & Docs', label: 'Visa & Financial Guides' },
    { id: 'RAS 2026', label: 'RAS 2026 Abidjan' },
    { id: 'Budgeting', label: 'Budgeting & Flight Hacks' }
  ];

  const filteredResources = resources.filter(r => {
    const matchesSearch = 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = categoryFilter === 'all' || r.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#00246C] font-extrabold text-xs uppercase tracking-wider border border-blue-200 inline-block">
            EVERGREEN DIGITAL KNOWLEDGE HUB
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00246C] tracking-tight">
            Templates, Guides & Checklists
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Download embassy-vetted Rotaract sponsorship templates, bank statement guides, RAS 2026 Côte d’Ivoire handbooks, and flight budget planners.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search templates, bank guides, sponsorship letters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00246C] shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <span className="text-xs font-bold text-slate-400 uppercase shrink-0 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                categoryFilter === cat.id
                  ? 'bg-[#00246C] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Resource Spotlight */}
        {categoryFilter === 'all' && !searchQuery && (
          <div className="mb-10 bg-gradient-to-r from-[#00246C] to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-3 max-w-2xl relative z-10">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider inline-flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Featured Template • Embassy Vetted
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Official Rotaract Travel & Visa Sponsorship Letter Template
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pre-formatted Word/Text guarantee letter for Rotaract Club Presidents issuing official travel documentation for international delegates.
              </p>
            </div>

            <button
              onClick={() => {
                const sp = resources.find(r => r.slug === 'rotaract-official-sponsorship-letter-template');
                if (sp) setSelectedResource(sp);
              }}
              className="px-6 py-3.5 rounded-2xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-extrabold text-sm shadow-lg transition-all shrink-0 relative z-10 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Copy Template Text</span>
            </button>
          </div>
        )}

        {/* Resource Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onSelect={(r) => setSelectedResource(r)}
            />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-md mx-auto space-y-3">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No resources match your query</h3>
            <p className="text-xs text-slate-500">Try adjusting your search terms or clearing category filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#00246C] text-white text-xs font-bold hover:bg-[#D41B2C] transition-colors"
            >
              Clear Search & Filters
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <ResourceDetailModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />
    </section>
  );
};
