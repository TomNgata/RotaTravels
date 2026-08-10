import React, { useState } from 'react';
import { CountryGuide } from '../../types';
import { CountryCard } from './CountryCard';
import { CountryDetailModal } from './CountryDetailModal';
import { Search, MapPin, Filter, Globe, Sparkles, Share2 } from 'lucide-react';
import { SocialShareModal } from '../common/SocialShareModal';

interface TravelHubViewProps {
  countries: CountryGuide[];
}

export const TravelHubView: React.FC<TravelHubViewProps> = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryGuide | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState<string>('all');
  const [visaTypeFilter, setVisaTypeFilter] = useState<string>('all');
  const [shareModalData, setShareModalData] = useState<{
    isOpen: boolean;
    title: string;
    text: string;
  }>({
    isOpen: false,
    title: '',
    text: '',
  });

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'West Africa', label: 'West Africa (RAS 2026)' },
    { id: 'East Africa', label: 'East Africa (EAC)' },
    { id: 'Southern Africa', label: 'Southern Africa' },
    { id: 'Europe', label: 'Europe (Schengen & UK)' },
    { id: 'North America', label: 'North America (US)' },
    { id: 'Middle East', label: 'Middle East (UAE)' }
  ];

  const visaTypes = [
    { id: 'all', label: 'All Visa Types' },
    { id: 'eVisa', label: 'eVisa' },
    { id: 'Visa-Free', label: 'Visa-Free' },
    { id: 'Visa on Arrival', label: 'Visa on Arrival' },
    { id: 'Embassy Visa Required', label: 'Embassy Visa' }
  ];

  const filteredCountries = countries.filter(c => {
    const matchesSearch = 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.rotaryRelevance.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion = regionFilter === 'all' || c.region === regionFilter;
    const matchesVisa = visaTypeFilter === 'all' || c.visaRequirement.type === visaTypeFilter;

    return matchesSearch && matchesRegion && matchesVisa;
  });

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#00246C] font-extrabold text-xs uppercase tracking-wider border border-blue-200">
              EVERGREEN TRAVEL INTELLIGENCE HUB
            </span>
            <button
              onClick={() => setShareModalData({
                isOpen: true,
                title: 'Rotaract Travel Intelligence Hub',
                text: 'Explore country visa rules, entry checklists, and peer travel hacks across Africa for Rotaract Travel Hacks 2026!'
              })}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-100 text-[#00246C] font-bold text-xs border border-slate-200 shadow-2xs flex items-center gap-1.5 transition-all cursor-pointer"
              title="Share Travel Hub"
            >
              <Share2 className="w-3.5 h-3.5 text-[#D41B2C]" />
              <span>Share Directory</span>
            </button>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00246C] tracking-tight">
            Country Travel Directory
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Search travel rules, visa categories, financial documentation norms, and peer hacks for key destinations across Africa and globally.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination, country name (e.g. Côte d'Ivoire, Kenya, South Africa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00246C] shadow-sm"
            />
          </div>
        </div>

        {/* Region & Visa Filters Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs mb-8 space-y-3">
          
          {/* Regions Row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-xs font-bold text-slate-400 uppercase shrink-0 mr-2 flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              Region:
            </span>
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setRegionFilter(reg.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  regionFilter === reg.id
                    ? 'bg-[#00246C] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* Visa Category Row */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase shrink-0 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Visa Category:
            </span>
            {visaTypes.map((vt) => (
              <button
                key={vt.id}
                onClick={() => setVisaTypeFilter(vt.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  visaTypeFilter === vt.id
                    ? 'bg-[#D41B2C] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {vt.label}
              </button>
            ))}
          </div>

        </div>

        {/* Featured Destination Spotlight Banner */}
        {regionFilter === 'all' && !searchQuery && (
          <div className="mb-10 bg-gradient-to-r from-[#00246C] via-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-3 max-w-2xl relative z-10">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider inline-flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                RAS 2026 Spotlight • Abidjan, Côte d’Ivoire 🇨🇮
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Preparing for Rotaract Africa Summit 2026?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Check SNEDAI e-Visa pre-enrollment steps, Yellow Fever vaccination card rules, and bank statement proof standards for Côte d’Ivoire.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 relative z-10 flex-wrap">
              <button
                onClick={() => setShareModalData({
                  isOpen: true,
                  title: 'RAS 2026 Spotlight: Abidjan, Côte d’Ivoire',
                  text: 'Check SNEDAI e-Visa pre-enrollment steps and Yellow Fever card rules for Rotaract Africa Summit 2026 in Abidjan!'
                })}
                className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                title="Share Côte d’Ivoire Spotlight"
              >
                <Share2 className="w-4 h-4 text-amber-300" />
                <span>Share Guide</span>
              </button>

              <button
                onClick={() => {
                  const ci = countries.find(c => c.code === 'CI');
                  if (ci) setSelectedCountry(ci);
                }}
                className="px-6 py-3.5 rounded-2xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-extrabold text-sm shadow-lg transition-all shrink-0 cursor-pointer"
              >
                Open Côte d’Ivoire Guide
              </button>
            </div>
          </div>
        )}

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.code}
              country={country}
              onSelect={(c) => setSelectedCountry(c)}
            />
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-md mx-auto space-y-3">
            <MapPin className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No destinations match your filters</h3>
            <p className="text-xs text-slate-500">Try adjusting your search query or selecting "All Regions".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setRegionFilter('all');
                setVisaTypeFilter('all');
              }}
              className="px-4 py-2 rounded-xl bg-[#00246C] text-white text-xs font-bold hover:bg-[#D41B2C] transition-colors"
            >
              Reset All Directory Filters
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <CountryDetailModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
        onShare={(country) => setShareModalData({
          isOpen: true,
          title: `${country.name} Travel & Visa Guide`,
          text: `Check visa requirements (${country.visaRequirement.type}), processing times, and peer travel hacks for ${country.name} on Rotaract Travel Hacks 2026!`
        })}
      />

      {/* Social Share Modal */}
      <SocialShareModal
        isOpen={shareModalData.isOpen}
        onClose={() => setShareModalData(prev => ({ ...prev, isOpen: false }))}
        title={shareModalData.title}
        text={shareModalData.text}
      />
    </section>
  );
};
