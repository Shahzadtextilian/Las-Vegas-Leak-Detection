import React, { useState } from 'react';
import { PHONE_NUMBER, PHONE_HREF } from '../data/siteData';
import { Phone, CheckCircle2, AlertTriangle, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface SidebarDispatchFormProps {
  currentLocationName?: string;
  currentServiceType?: string;
}

export const SidebarDispatchForm: React.FC<SidebarDispatchFormProps> = ({
  currentLocationName = 'Spring Valley Core',
  currentServiceType = 'Water Leak (Indoor / Wall)',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    neighborhood: currentLocationName,
    emergencyType: currentServiceType,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Name required';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Valid 10-digit phone required';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      neighborhood: currentLocationName,
      emergencyType: currentServiceType,
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-md space-y-5 sticky top-24">
      
      {/* Header status */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1.5 font-display border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Dispatch Active
          </span>
          <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#1E70B8]" />
            30–45 Min Response
          </span>
        </div>
        <h4 className="text-lg font-bold text-slate-950 font-display pt-1">
          Spring Valley Leak Response
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          Immediate phone response or instant online dispatch for water, gas, slab, and swimming pool leaks.
        </p>
      </div>

      {/* Primary Click to Call Action */}
      <a
        href={PHONE_HREF}
        className="w-full py-3.5 px-4 bg-[#0F2942] hover:bg-[#1E70B8] text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-colors shadow-sm group"
      >
        <Phone className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
        <div className="text-left leading-tight">
          <span className="block text-[10px] text-slate-300 font-normal uppercase tracking-wider">Fastest • 24/7 Emergency Line</span>
          <span className="font-mono text-base font-bold text-white">{PHONE_NUMBER}</span>
        </div>
      </a>

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="border-t border-slate-200 w-full"></div>
        <span className="bg-white px-2.5 text-[11px] font-semibold uppercase text-slate-500 tracking-wider absolute">
          Or Request Dispatch
        </span>
      </div>

      {/* Form or Confirmation */}
      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center space-y-3">
          <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-slate-900 font-display">
              Dispatch Request Received!
            </h5>
            <p className="text-xs text-slate-600 mt-1">
              A technician is reviewing your request for <strong className="text-slate-900">{formData.neighborhood}</strong>. We will call <strong className="font-mono text-slate-900">{formData.phone}</strong> immediately.
            </p>
          </div>

          <div className="text-left p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-[11px] text-amber-950 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>If you smell gas or have high-pressure water flooding, shut off your main meter valve immediately.</span>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Michael Smith"
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E70B8] focus:border-transparent outline-hidden bg-slate-50 focus:bg-white"
            />
            {errors.fullName && <p className="text-[10px] text-rose-600 mt-0.5">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(725) 313-0108"
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E70B8] focus:border-transparent outline-hidden font-mono bg-slate-50 focus:bg-white"
            />
            {errors.phone && <p className="text-[10px] text-rose-600 mt-0.5">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Leak Type
            </label>
            <select
              value={formData.emergencyType}
              onChange={(e) => setFormData({ ...formData, emergencyType: e.target.value })}
              className="w-full px-2.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E70B8] focus:border-transparent outline-hidden bg-slate-50 focus:bg-white text-slate-800"
            >
              <option value="Water Leak (Indoor / Wall)">Water Leak (Indoor / Wall)</option>
              <option value="Gas Leak (Natural Gas / Propane)">Gas Leak (Natural Gas / Propane)</option>
              <option value="Slab Leak (Under Foundation)">Slab Leak (Under Foundation)</option>
              <option value="Pool Leak (Losing Water / Spa)">Pool Leak (Losing Water / Spa)</option>
              <option value="Yard / Main Line Leak">Yard / Main Line Leak</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Neighborhood / Area
            </label>
            <select
              value={formData.neighborhood}
              onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
              className="w-full px-2.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E70B8] focus:border-transparent outline-hidden bg-slate-50 focus:bg-white text-slate-800"
            >
              <option value="Spring Valley Core (89103)">Spring Valley Core (89103)</option>
              <option value="The Lakes & Peccole Ranch">The Lakes & Peccole Ranch</option>
              <option value="Spanish Trail Estates">Spanish Trail Estates</option>
              <option value="Summerlin South (89135)">Summerlin South (89135)</option>
              <option value="Rhodes Ranch (89148)">Rhodes Ranch (89148)</option>
              <option value="Other Las Vegas / Clark Co.">Other Las Vegas / Clark Co.</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm mt-1"
          >
            <span>Request Fast Dispatch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>NSCB-Licensed Nevada Contractors • No Obligation</span>
          </div>
        </form>
      )}

    </div>
  );
};
