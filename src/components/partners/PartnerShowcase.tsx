import React, { useState } from 'react';
import { Partner } from '../../types';
import { Handshake, Building2, CheckCircle2, ShieldCheck, Mail, ArrowRight, Sparkles, Send } from 'lucide-react';

interface PartnerShowcaseProps {
  partners: Partner[];
  currentHost: string;
}

export const PartnerShowcase: React.FC<PartnerShowcaseProps> = ({
  partners,
  currentHost
}) => {
  const [partnerForm, setPartnerForm] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    partnerType: 'Co-Host Club',
    message: ''
  });

  const [formSent, setFormSent] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setPartnerForm({ orgName: '', contactName: '', email: '', phone: '', partnerType: 'Co-Host Club', message: '' });
    }, 2500);
  };

  const hostPartner = partners.find(p => p.category === 'HOST');
  const coHosts = partners.filter(p => p.category === 'CO-HOST');
  const strategicPartners = partners.filter(p => p.category === 'STRATEGIC PARTNER');

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#00246C] font-extrabold text-xs uppercase tracking-wider border border-blue-200 inline-block">
            CROSS-CLUB & DISTRICT COLLABORATION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00246C] tracking-tight">
            Partners & Co-Hosts
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Rotaract Travel Hacks 2026 is built on cross-district fellowship and strategic partnership.
          </p>
        </div>

        {/* Primary Host Card Spotlight */}
        <div className="mb-12 bg-white rounded-3xl p-8 border-2 border-dashed border-[#00246C] shadow-md relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider border border-amber-300 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                PRIMARY HOST CLUB STATUS
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#00246C]">
                Host Club: <span className="text-[#D41B2C]">{currentHost}</span>
              </h3>

              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                Officially confirmed as host in August 2026 following the transition from RAC Westlands — protecting the fixed date (3 September 2026) and the confirmed 5-member panel. Venue locked at Clarion Hotel, CBD, Nairobi.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center shrink-0 w-full md:w-auto">
              <span className="text-xs font-extrabold text-slate-400 uppercase block mb-1">Central Budget</span>
              <span className="text-2xl font-black text-[#00246C] block">KES 61,500</span>
              <span className="text-[10px] text-slate-500">Turnkey Asset Library Provided</span>
            </div>
          </div>
        </div>

        {/* Co-Host Clubs Grid */}
        <div className="mb-16 space-y-6">
          <h3 className="text-xl font-black text-[#00246C] flex items-center gap-2">
            <Building2 className="w-5 h-5 text-[#D41B2C]" />
            <span>Panel-Affiliated Co-Host Clubs</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coHosts.map((partner) => (
              <div key={partner.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00246C] flex items-center justify-center font-bold text-xs mb-4 border border-blue-100">
                  {partner.logoPlaceholderText}
                </div>
                <h4 className="text-base font-black text-slate-900 mb-2">{partner.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{partner.description}</p>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Confirmed Partner
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic District Partners */}
        <div className="mb-16 space-y-6">
          <h3 className="text-xl font-black text-[#00246C] flex items-center gap-2">
            <Handshake className="w-5 h-5 text-amber-500" />
            <span>Strategic District Partners</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicPartners.map((partner) => (
              <div key={partner.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0 border border-amber-200">
                  {partner.logoPlaceholderText}
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">{partner.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Inquiry Form Card */}
        <div className="bg-gradient-to-br from-[#00246C] to-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-blue-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider inline-block">
                BECOME A PARTNER OR SPONSOR
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Connect Your Brand with 5,000+ Active Youth Travellers
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                We offer tiered partnership packages for travel agencies, flight aggregators, forex services, and Rotary clubs.
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>On-screen broadcast logo placement during 90-min fellowship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Featured brand profile in the evergreen Knowledge Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Direct engagement with African Rotaractors & Rotarians</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg">
              {formSent ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-[#00246C]">Partnership Inquiry Received</h4>
                  <p className="text-xs text-slate-600">Our Initiative Champion will be in touch shortly with the Sponsorship Pitch Deck.</p>
                </div>
              ) : (
                <form onSubmit={handlePartnerSubmit} className="space-y-3 text-xs">
                  <h4 className="text-base font-black text-[#00246C] mb-2">Request Partnership Pitch Deck</h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Organization / Club Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. RAC / Travel Agency"
                        value={partnerForm.orgName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, orgName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Smith"
                        value={partnerForm.contactName}
                        onChange={(e) => setPartnerForm({ ...partnerForm, contactName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. contact@agency.com"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C]"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Partnership Interest</label>
                      <select
                        value={partnerForm.partnerType}
                        onChange={(e) => setPartnerForm({ ...partnerForm, partnerType: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#00246C]"
                      >
                        <option value="Co-Host Club">Co-Host Club Partnership</option>
                        <option value="Primary Host Inquiry">Primary Host Inquiry</option>
                        <option value="Corporate Sponsor">Corporate Travel Sponsor</option>
                        <option value="Media Partner">Media & PR Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Brief Note / Question</label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your organization or club..."
                      value={partnerForm.message}
                      onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Submit Partnership Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
