import React, { useState } from 'react';
import { AttendanceMode, EventRegistration } from '../../types';
import { BoardingPassTicket } from './BoardingPassTicket';
import { X, CheckCircle2, User, Mail, Building2, ArrowRight, Loader2 } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentHost: string;
  initialQuestion?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  currentHost,
  initialQuestion = ''
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    club: '',
    district: 'District 9212',
    role: 'Member',
    attendanceMode: 'in-person' as AttendanceMode,
    countryOfResidence: 'Kenya',
    mpesaMessage: '',
    questionForPanel: initialQuestion
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdTicket, setCreatedTicket] = useState<EventRegistration | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.club || !formData.mpesaMessage) {
        setErrorMsg('Please complete all required fields including the M-Pesa Confirmation Message.');
        return;
      }
      setStep(2);
      setErrorMsg('');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.club) {
      setErrorMsg('Please complete all required fields (Name, Email, Club).');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success && data.ticket) {
        setCreatedTicket(data.ticket);
      } else {
        setErrorMsg(data.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      // Fallback local ticket generator if offline or network glitch
      const fallbackTicket: EventRegistration = {
        id: `reg-${Date.now()}`,
        ticketNumber: `RTH26-${Math.floor(1000 + Math.random() * 9000)}`,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        club: formData.club,
        district: formData.district,
        role: formData.role,
        attendanceMode: formData.attendanceMode,
        countryOfResidence: formData.countryOfResidence,
        mpesaMessage: formData.mpesaMessage,
        questionForPanel: formData.questionForPanel,
        registeredAt: new Date().toISOString()
      };
      setCreatedTicket(fallbackTicket);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8 max-h-[90vh] overflow-y-auto text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {createdTicket ? (
          <div>
            <div className="text-center space-y-2 mb-6">
              <span className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </span>
              <h3 className="text-2xl font-black text-[#00246C]">
                You’re Registered!
              </h3>
              <p className="text-xs text-slate-600">
                Your official delegate pass for <strong className="text-slate-900">Thursday, 3 September 2026</strong> has been generated below. 
                <br className="mt-1" />
                <span className="text-[#00246C] font-semibold">Take a moment to explore the Travel Hub and Resources on the site!</span>
              </p>
            </div>

            <BoardingPassTicket
              registration={createdTicket}
              currentHost={currentHost}
              onClose={onClose}
            />
          </div>
        ) : (
          <div>
            
            {/* Form Header */}
            <div className="space-y-2 mb-6 pr-8">
              <span className="px-3 py-1 rounded-full bg-red-100 text-[#D41B2C] text-xs font-black uppercase tracking-wider">
                DELEGATE REGISTRATION & PAYMENT
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#00246C]">
                Rotaract Travel Hacks 2026
              </h3>

              <p className="text-xs text-slate-600">
                Confirmed Date: <strong className="text-slate-900">Thursday, 3 September 2026</strong> • 6:00 PM EAT | Host: <strong className="text-[#00246C]">{currentHost}</strong>
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs font-bold mb-4 border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {step === 1 ? (
                <>
                  {/* In-Person Only Notice */}
                  <div className="flex items-center gap-2.5 p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <Building2 className="w-4 h-4 text-[#00246C] shrink-0" />
                    <span className="text-xs font-bold text-[#00246C]">In-Person Attendance — Nairobi, Kenya</span>
                    <span className="ml-auto text-[10px] font-black text-white bg-[#00246C] px-2 py-0.5 rounded-full uppercase">3 Sept 2026</span>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rtr Jane Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="e.g. jane@rotaract.org"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Club & District */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Rotaract / Rotary Club *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rotaract Club of Langata"
                        value={formData.club}
                        onChange={(e) => setFormData({ ...formData, club: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Rotary District
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#00246C] focus:outline-hidden bg-white"
                      >
                        <option value="District 9212">District 9212 (Kenya, Ethiopia, SS, ER)</option>
                        <option value="District 9214">District 9214 (Uganda, Tanzania)</option>
                        <option value="District 9215">District 9215</option>
                        <option value="District 9216">District 9216</option>
                        <option value="District 9102">District 9102 (West Africa / RAS Host)</option>
                        <option value="District 9104">District 9104 (Ghana)</option>
                        <option value="Other International District">Other Global District</option>
                      </select>
                    </div>
                  </div>

                  {/* Role & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Rotaract / Rotary Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#00246C] focus:outline-hidden bg-white"
                      >
                        <option value="Member">Club Member</option>
                        <option value="Club Officer">Club Officer / President / Director</option>
                        <option value="District Team">District Team Officer</option>
                        <option value="Rotarian">Rotarian / Sponsor</option>
                        <option value="Guest">Guest / Non-Rotarian</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Country of Residence
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kenya, Uganda, Côte d'Ivoire"
                        value={formData.countryOfResidence}
                        onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {/* M-Pesa Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                      <span>M-Pesa Confirmation Message *</span>
                      <span className="text-[10px] text-emerald-600">Pay KES 290 to Buy Goods Till: 555555</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="e.g. UI2HW5I5KJ Confirmed. Ksh290.00 paid to AWESOME CROSS BUTCHERY LIMITED..."
                      value={formData.mpesaMessage}
                      onChange={(e) => setFormData({ ...formData, mpesaMessage: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#00246C] focus:outline-hidden resize-none"
                    />
                  </div>

                  {/* Continue Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl bg-[#00246C] hover:bg-[#001B52] text-white font-black text-sm shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Pre-Submitted Question for Panel */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                      <span>Question for Panel Q&A (Optional)</span>
                      <span className="text-[10px] text-[#D41B2C]">Addressed during Pillar 04</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Do you have any questions for our panelists for today's session? (e.g. How can I explain sudden bonus transfers in bank statements for my visa application?)"
                      value={formData.questionForPanel}
                      onChange={(e) => setFormData({ ...formData, questionForPanel: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#00246C] focus:outline-hidden resize-none"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 rounded-2xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-black text-sm shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Generating Delegate Ticket...</span>
                        </>
                      ) : (
                        <>
                          <span>Complete Registration</span>
                          <CheckCircle2 className="w-4 h-4 text-amber-300" />
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
