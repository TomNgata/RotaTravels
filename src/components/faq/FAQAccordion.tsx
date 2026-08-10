import React, { useState } from 'react';
import { FAQItem } from '../../types';
import { HelpCircle, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'EVENT', label: 'Event & Venue' },
    { id: 'REGISTRATION', label: 'Registration' },
    { id: 'TRAVEL', label: 'Travel & Visas' },
    { id: 'KNOWLEDGE HUB', label: 'Knowledge Hub' },
    { id: 'PARTNERSHIPS', label: 'Partnerships' }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'all' || faq.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#00246C] font-extrabold text-xs uppercase tracking-wider border border-blue-200 inline-block">
            GOT QUESTIONS? WE’VE GOT ANSWERS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00246C] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Everything you need to know about Rotaract Travel Hacks 2026 fellowship, virtual stream, registration, and knowledge hub resources.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. host club, date, registration, RAS 2026)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00246C]"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                categoryFilter === cat.id
                  ? 'bg-[#00246C] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-[#00246C] bg-blue-50/30 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? 'text-[#D41B2C]' : 'text-slate-400'}`} />
                    <span className="font-extrabold text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <span className="p-1 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#00246C]" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 ml-8">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm font-bold text-slate-700">No FAQs match your search query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className="mt-2 text-xs font-bold text-[#D41B2C] underline"
            >
              Reset Search Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
