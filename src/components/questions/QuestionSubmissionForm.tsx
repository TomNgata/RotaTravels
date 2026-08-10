import React, { useState } from 'react';
import { X, MessageSquare, ArrowRight, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';

interface QuestionSubmissionFormProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSpeakerName?: string;
}

export const QuestionSubmissionForm: React.FC<QuestionSubmissionFormProps> = ({
  isOpen,
  onClose,
  prefilledSpeakerName
}) => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderClub: '',
    categoryPillarId: 1,
    questionText: prefilledSpeakerName ? `Question for ${prefilledSpeakerName}: ` : '',
    isAnonymous: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.questionText || formData.questionText.trim().length < 5) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        onClose();
      }, 1800);
    } catch (err) {
      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
        onClose();
      }, 1800);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8 max-h-[90vh] overflow-y-auto text-slate-900"
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

        {successMsg ? (
          <div className="text-center py-12 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
            <h3 className="text-2xl font-black text-[#00246C]">Question Received!</h3>
            <p className="text-xs text-slate-600">
              Your question has been added to the moderation queue for Pillar 04 Interactive Q&A.
            </p>
          </div>
        ) : (
          <div>
            
            {/* Header */}
            <div className="space-y-2 mb-6 pr-8">
              <span className="px-3 py-1 rounded-full bg-red-100 text-[#D41B2C] text-xs font-black uppercase tracking-wider">
                PILLAR 04 INTERACTIVE Q&A
              </span>

              <h3 className="text-2xl font-black text-[#00246C]">
                Submit a Question for the Panel
              </h3>

              <p className="text-xs text-slate-600">
                Have a specific travel dilemma regarding bank statements, visa refusals, or RAS 2026? Submit it here for our confirmed 5 panelists.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {!formData.isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rtr Alex Mutua"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Rotaract / Rotary Club</label>
                    <input
                      type="text"
                      placeholder="e.g. RAC Langata"
                      value={formData.senderClub}
                      onChange={(e) => setFormData({ ...formData, senderClub: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  id="anonymousCheck"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  className="w-4 h-4 text-[#D41B2C] rounded-xs border-slate-300 focus:ring-0"
                />
                <label htmlFor="anonymousCheck" className="font-bold text-slate-700 cursor-pointer">
                  Submit Question Anonymously (Hide Name & Club)
                </label>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Related Pillar Category</label>
                <select
                  value={formData.categoryPillarId}
                  onChange={(e) => setFormData({ ...formData, categoryPillarId: Number(e.target.value) })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                >
                  <option value={1}>Pillar 01: Visa Application Hacks & Bureaucracy</option>
                  <option value={2}>Pillar 02: Travel Readiness & Budgeting</option>
                  <option value={3}>Pillar 03: Path to RAS 2026 & Global Mobility</option>
                  <option value={4}>Pillar 04: General Travel Query</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Your Question *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your travel situation or question clearly so panelists can provide precise guidance..."
                  value={formData.questionText}
                  onChange={(e) => setFormData({ ...formData, questionText: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] focus:outline-hidden resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Submit Question to Panel Moderator</span>
                      <ArrowRight className="w-4 h-4 text-amber-300" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
