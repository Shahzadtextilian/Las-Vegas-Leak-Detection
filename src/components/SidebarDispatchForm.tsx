import React from 'react';
import { PHONE_NUMBER, PHONE_HREF } from '../data/siteData';
import { Phone, ShieldCheck, Clock, MapPin, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface SidebarDispatchFormProps {
  currentLocationName?: string;
  currentServiceType?: string;
}

export const SidebarDispatchForm: React.FC<SidebarDispatchFormProps> = ({
  currentLocationName = 'Spring Valley Core',
  currentServiceType = 'Water Leak (Indoor / Wall)',
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-5 sticky top-24">
      {/* 24/7 Direct Call Card */}
      <div className="p-5 rounded-xl bg-gradient-to-br from-[#0F2942] to-slate-900 text-white space-y-3">
        <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            24/7 Emergency Dispatch
          </span>
          <span className="text-slate-300 font-normal">Spring Valley, NV</span>
        </div>
        
        <div>
          <h4 className="text-lg font-bold font-display text-white">
            Need Immediate Assistance?
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Call our local emergency team directly for immediate response in {currentLocationName}:
          </p>
        </div>

        <a
          href={PHONE_HREF}
          className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base rounded-xl flex items-center justify-center gap-2.5 transition-colors shadow-sm font-mono cursor-pointer"
        >
          <Phone className="w-4 h-4 text-slate-950" />
          <span>Call {PHONE_NUMBER}</span>
        </a>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300 pt-1">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>Average arrival: 30–60 minutes</span>
        </div>
      </div>

      {/* Service Highlights / Dispatch Specifications */}
      <div className="space-y-3 pt-1">
        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
          Active Dispatch Capabilities
        </h5>
        <div className="space-y-2 text-xs text-slate-600">
          <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Service Focus</strong>
              <span>Equipped for {currentServiceType} diagnostics & repair</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
            <Clock className="w-4 h-4 text-[#1E70B8] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Round-The-Clock Standby</strong>
              <span>Available 24 hours a day, weekends and holidays included</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Emergency Protocol</strong>
              <span>If you suspect a gas leak or active flood, call immediately from a safe location</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Verification Badges */}
      <div className="pt-3 border-t border-slate-100 space-y-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Nevada State Contractors Board (NSCB) Licensed</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Office: 6875 Groveview Ln, Las Vegas, NV 89103</span>
        </div>
      </div>
    </div>
  );
};
