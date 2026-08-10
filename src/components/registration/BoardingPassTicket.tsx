import React from 'react';
import { EventRegistration } from '../../types';
import { Plane, Calendar, MapPin, CheckCircle2, Download, Share2, Copy, Check, Clock } from 'lucide-react';

interface BoardingPassTicketProps {
  registration: EventRegistration;
  currentHost: string;
  onClose?: () => void;
}

export const BoardingPassTicket: React.FC<BoardingPassTicketProps> = ({
  registration,
  currentHost,
  onClose
}) => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  const handleCopyLink = () => {
    const text = `I'm attending Rotaract Travel Hacks 2026 on Thursday, 3 September 2026! Ticket No: ${registration.ticketNumber}. Register free: ${window.location.origin}`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Rotaract Travel Hacks 2026 (Fellowship & Global Digital Campaign)");
    const details = encodeURIComponent(`Ticket No: ${registration.ticketNumber}\nAttendance Mode: ${registration.attendanceMode.toUpperCase()}\nHost: ${currentHost}\nLocation: Nairobi, Kenya & Virtual Live Stream`);
    const location = encodeURIComponent(registration.attendanceMode === 'in-person' ? 'Host Venue, Nairobi, Kenya' : 'Virtual Zoom / YouTube Live');
    const dates = "20260903T150000Z/20260903T163000Z";

    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(googleCalUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-300 shadow-2xl overflow-hidden max-w-xl mx-auto my-4 text-slate-900">
      
      {/* Boarding Pass Header Banner */}
      <div className="bg-[#00246C] text-white p-6 relative overflow-hidden">
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D41B2C] flex items-center justify-center font-bold shadow-md">
              <Plane className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="text-[11px] font-black tracking-widest text-amber-400 uppercase block">
                OFFICIAL DELEGATE PASS
              </span>
              <h3 className="text-xl font-black text-white">
                Rotaract Travel Hacks 2026
              </h3>
            </div>
          </div>

          <div className="passport-stamp text-[10px] py-0.5 px-2 bg-white/10">
            CONFIRMED
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-blue-900/60 flex items-center justify-between text-xs text-blue-200">
          <span>Ticket #: <strong className="text-white font-mono">{registration.ticketNumber}</strong></span>
          <span>Host: <strong className="text-amber-300">{currentHost}</strong></span>
        </div>
      </div>

      {/* Boarding Pass Ticket Body */}
      <div className="p-6 space-y-6">
        
        {/* Route Line */}
        <div className="flex items-center justify-between py-2 border-b border-dashed border-slate-300">
          <div>
            <span className="text-2xl font-black text-[#00246C]">NBO</span>
            <span className="text-xs text-slate-500 font-medium block">Nairobi, Kenya</span>
          </div>

          <div className="flex-1 px-4 text-center">
            <div className="w-full border-b-2 border-dashed border-slate-300 relative my-1">
              <Plane className="w-4 h-4 text-[#D41B2C] absolute left-1/2 -top-2 -translate-x-1/2 rotate-90" />
            </div>
            <span className="text-[10px] font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full uppercase">
              3 SEPT 2026 • 6:00 PM EAT
            </span>
          </div>

          <div className="text-right">
            <span className="text-2xl font-black text-[#D41B2C]">ABJ</span>
            <span className="text-xs text-slate-500 font-medium block">Abidjan (RAS)</span>
          </div>
        </div>

        {/* Delegate Information Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
          <div>
            <span className="text-slate-400 font-bold block uppercase text-[10px]">DELEGATE NAME</span>
            <strong className="text-slate-900 font-extrabold block truncate">{registration.fullName}</strong>
          </div>

          <div>
            <span className="text-slate-400 font-bold block uppercase text-[10px]">CLUB / DISTRICT</span>
            <strong className="text-slate-900 font-extrabold block truncate">{registration.club}</strong>
          </div>

          <div>
            <span className="text-slate-400 font-bold block uppercase text-[10px]">MODE</span>
            <strong className="text-[#D41B2C] font-extrabold block uppercase">{registration.attendanceMode}</strong>
          </div>

          <div>
            <span className="text-slate-400 font-bold block uppercase text-[10px]">ROLE</span>
            <strong className="text-slate-900 font-bold block truncate">{registration.role}</strong>
          </div>

          <div>
            <span className="text-slate-400 font-bold block uppercase text-[10px]">RESIDENCE</span>
            <strong className="text-slate-900 font-bold block truncate">{registration.countryOfResidence}</strong>
          </div>

          <div>
            <span className="text-slate-400 font-bold block uppercase text-[10px]">STATUS</span>
            <span className="text-emerald-700 font-extrabold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Registered
            </span>
          </div>
        </div>

        {/* QR Code Concept Simulation */}
        <div className="flex items-center justify-between p-4 bg-slate-900 text-white rounded-2xl">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
              SCAN AT ENTRY / CHECK-IN
            </span>
            <p className="text-xs text-slate-300">
              Present this digital pass or screenshot at the fellowship desk or virtual Zoom check-in.
            </p>
          </div>

          {/* Abstract SVG QR Code Graphic */}
          <div className="w-14 h-14 bg-white p-1 rounded-xl shrink-0 flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-sm grid grid-cols-3 gap-0.5 p-1">
              <div className="bg-white rounded-2xs" />
              <div className="bg-white rounded-2xs" />
              <div className="bg-slate-900" />
              <div className="bg-white rounded-2xs" />
              <div className="bg-slate-900" />
              <div className="bg-white rounded-2xs" />
              <div className="bg-white rounded-2xs" />
              <div className="bg-white rounded-2xs" />
              <div className="bg-white rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Boarding Ticket Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={handleAddToCalendar}
            className="py-3 px-4 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <Calendar className="w-4 h-4 text-amber-300" />
            <span>Add to Google Calendar</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-[#D41B2C]" />}
            <span>{copiedLink ? 'Share Link Copied!' : 'Share Pass on WhatsApp'}</span>
          </button>
        </div>

      </div>

      {onClose && (
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-600 hover:text-slate-900 underline"
          >
            Done • Return to Platform
          </button>
        </div>
      )}

    </div>
  );
};
