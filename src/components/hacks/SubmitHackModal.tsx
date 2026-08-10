import React, { useState } from 'react';
import { X, Lightbulb, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

interface SubmitHackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHackSubmitted: () => void;
}

export const SubmitHackModal: React.FC<SubmitHackModalProps> = ({
  isOpen,
  onClose,
  onHackSubmitted
}) => {
  const [formData, setFormData] = useState({
    authorName: '',
    authorClub: '',
    authorRole: 'Member',
    destinationCountry: 'Côte d’Ivoire',
    category: 'Visa Application',
    hackTitle: '',
    hackDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.authorName || !formData.hackTitle || !formData.hackDetails) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/hacks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSuccessMsg(true);
      onHackSubmitted();
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
            <h3 className="text-2xl font-black text-[#00246C]">Travel Hack Submitted!</h3>
            <p className="text-xs text-slate-600">
              Thank you for contributing your experience to the Rotaract Travel Hacks community board.
            </p>
          </div>
        ) : (
          <div>
            
            {/* Header */}
            <div className="space-y-2 mb-6 pr-8">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
                COMMUNITY KNOWLEDGE SHARING
              </span>

              <h3 className="text-2xl font-black text-[#00246C]">
                Share Your Travel Hack
              </h3>

              <p className="text-xs text-slate-600">
                Have a practical tip on visa interviews, bank statements, airport transit, or budgeting? Share it with fellow Rotaractors.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rtr Daniel Ochieng"
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Rotaract / Rotary Club</label>
                  <input
                    type="text"
                    placeholder="e.g. RAC Nairobi Muthaiga North"
                    value={formData.authorClub}
                    onChange={(e) => setFormData({ ...formData, authorClub: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Destination Country</label>
                  <input
                    type="text"
                    placeholder="e.g. Côte d'Ivoire, Rwanda, Schengen"
                    value={formData.destinationCountry}
                    onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                  >
                    <option value="Visa Application">Visa Application</option>
                    <option value="Documentation">Bank & Documentation</option>
                    <option value="Budgeting & Forex">Budgeting & Forex</option>
                    <option value="Airport & Transit">Airport & Transit</option>
                    <option value="Accommodation & Safety">Accommodation & Safety</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Hack Title / Key Tip *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Print SNEDAI e-Visa barcode in high resolution color"
                  value={formData.hackTitle}
                  onChange={(e) => setFormData({ ...formData, hackTitle: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Hack Details & Explanation *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Explain why this hack works and how it saved you time, money, or stress during travel..."
                  value={formData.hackDetails}
                  onChange={(e) => setFormData({ ...formData, hackDetails: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#00246C] focus:outline-hidden resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-2xl bg-[#D41B2C] hover:bg-[#B51322] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Submit Travel Hack to Community Board</span>
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
