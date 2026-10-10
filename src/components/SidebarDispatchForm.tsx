import React, { useState } from 'react';
import { PHONE_NUMBER, PHONE_HREF } from '../data/siteData';
import { Phone, CheckCircle2, ShieldCheck, Clock, MapPin, Send } from 'lucide-react';

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
    emergencyType: currentServiceType,
    neighborhood: currentLocationName,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
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
      emergencyType: currentServiceType,
      neighborhood: currentLocationName,
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-md space-y-5 sticky top-24">
      {/* 24/7 Direct Call Banner */}
      <div className="p-4 rounded-xl bg-linear-to-br from-[#0F2942] to-slate-900 text-white space-y-2">
        <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            24/7 Emergency Line
          </span>
          <span className="text-slate-300 font-normal">Spring Valley, NV</span>
        </div>
        <div className="text-xs text-slate-300">
          For fastest emergency response, call our team directly:
        </div>
        <a
          href={PHONE_HREF}
          className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm font-mono"
        >
          <Phone className="w-4 h-4 text-slate-950" />
          <span>{PHONE_NUMBER}</span>
        </a>
      </div>

      {/* Quick Callback / Message Form */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-slate-950 font-display">
            Request Rapid Callback
          </h4>
          <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#1E70B8]" />
            Fast Response
          </span>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Need non-emergency scheduling or a callback from our technicians? Leave your details below:
        </p>
      </div>

      {submitted ? (
        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
          <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-bold text-emerald-950">
              Callback Request Received
            </div>
            <p className="text-xs text-emerald-800 mt-1">
              Our technician will call <strong className="font-mono">{formData.phone}</strong> shortly regarding your {formData.emergencyType} inquiry.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="text-xs text-[#1E70B8] hover:underline font-semibold cursor-pointer pt-1 block mx-auto"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Miller"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full px-3 py-2 text-xs rounded-lg border ${
                errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              } focus:outline-none focus:border-[#1E70B8] focus:ring-1 focus:ring-[#1E70B8] transition-colors`}
            />
            {errors.fullName && (
              <span className="text-[11px] text-red-600 mt-0.5 block">{errors.fullName}</span>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="(702) 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3 py-2 text-xs font-mono rounded-lg border ${
                errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300'
              } focus:outline-none focus:border-[#1E70B8] focus:ring-1 focus:ring-[#1E70B8] transition-colors`}
            />
            {errors.phone && (
              <span className="text-[11px] text-red-600 mt-0.5 block">{errors.phone}</span>
            )}
          </div>

          {/* Leak Category */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Service Needed
            </label>
            <select
              value={formData.emergencyType}
              onChange={(e) => setFormData({ ...formData, emergencyType: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#1E70B8] bg-white transition-colors"
            >
              <option value="Water Leak Detection & Repair">Water Leak Detection & Repair</option>
              <option value="Slab Leak Detection & Repair">Slab Leak Detection & Repair</option>
              <option value="Swimming Pool Leak Detection & Repair">Swimming Pool Leak Detection & Repair</option>
              <option value="Gas Leak Detection & Emergency Repair">Gas Leak Detection & Emergency Repair</option>
              <option value="Underground Main Yard Leak">Underground Main Yard Leak</option>
            </select>
          </div>

          {/* Location / Area */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Service Neighborhood
            </label>
            <select
              value={formData.neighborhood}
              onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#1E70B8] bg-white transition-colors"
            >
              <option value="Spring Valley Core (89103)">Spring Valley Core (89103)</option>
              <option value="The Lakes & Peccole Ranch (89117)">The Lakes & Peccole Ranch (89117)</option>
              <option value="Spanish Trail Estates (89113)">Spanish Trail Estates (89113)</option>
              <option value="Summerlin South (89135)">Summerlin South (89135)</option>
              <option value="Rhodes Ranch & SW Vegas (89148)">Rhodes Ranch & SW Vegas (89148)</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-[#0F2942] hover:bg-[#1E70B8] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-amber-400" />
            <span>Request Technician Callback</span>
          </button>
        </form>
      )}

      {/* Trust Micro-Badges */}
      <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Licensed Nevada Contractors (NSCB Standards)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Local Office: 6875 Groveview Ln, Las Vegas 89103</span>
        </div>
      </div>
    </div>
  );
};
