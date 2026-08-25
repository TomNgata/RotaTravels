import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  currentHost: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentHost }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    club: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', club: '', subject: 'General Inquiry', message: '' });
    }, 2500);
  };

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#00246C] font-extrabold text-xs uppercase tracking-wider border border-blue-200 inline-block">
            GET IN TOUCH WITH THE TEAM
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#00246C] tracking-tight">
            Contact & Inquiries
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Have questions about hosting, co-hosting, panel contributions, or media coverage for Rotaract Travel Hacks 2026? Reach out to the Initiative Champion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card */}
          <div className="lg:col-span-5 bg-[#00246C] text-white rounded-3xl p-8 shadow-xl space-y-6">
            <h3 className="text-2xl font-black text-white">
              Initiative Contact Hub
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              Maintained by Past President Tom Ngata (Initiative Champion) and Rtr Sam Gathaga (Global Campaign Lead).
            </p>

            <div className="space-y-4 text-xs pt-2">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-900 text-amber-300 flex items-center justify-center font-bold shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">EMAIL INQUIRIES</span>
                  <a href="mailto:info@rotatravel.org" className="font-semibold text-white hover:underline">
                    info@rotatravel.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-900 text-amber-300 flex items-center justify-center font-bold shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">HOST LOCATION</span>
                  <span className="font-semibold text-white block">Nairobi, Kenya & Global Online</span>
                  <span className="text-[10px] text-amber-300 font-medium">Host Club: {currentHost}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-900 text-amber-300 flex items-center justify-center font-bold shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 font-bold block text-[10px] uppercase">CONFIRMED FELLOWSHIP DATE</span>
                  <span className="font-semibold text-white block">Thursday, 3 September 2026</span>
                  <span className="text-[10px] text-blue-200">6:30 PM – 8:30 PM EAT • Clarion Hotel, CBD</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-900/60">
              <span className="text-[11px] text-slate-300 block">
                GitHub Source Code Repository:
              </span>
              <a
                href="https://github.com/TomNgata/RotaTravels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-300 hover:underline block mt-0.5"
              >
                https://github.com/TomNgata/RotaTravels
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-black text-[#00246C]">Message Sent!</h3>
                <p className="text-xs text-slate-600">Thank you for reaching out. The team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="text-xl font-black text-[#00246C] mb-2">Send Us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rtr John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@rotaract.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Rotaract / Rotary Club</label>
                    <input
                      type="text"
                      placeholder="e.g. Rotaract Club of Langata"
                      value={formData.club}
                      onChange={(e) => setFormData({ ...formData, club: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#00246C]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Host Club Proposal">Host Club Proposal / Partnership</option>
                      <option value="Panel / Speaker Question">Panel / Speaker Question</option>
                      <option value="Sponsorship & PR">Sponsorship & PR</option>
                      <option value="Technical Support">Portal / Knowledge Hub Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Send Contact Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
