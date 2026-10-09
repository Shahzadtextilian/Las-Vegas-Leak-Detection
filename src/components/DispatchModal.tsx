import React, { useState } from 'react';
import { PHONE_NUMBER, PHONE_HREF } from '../data/siteData';
import { X, CheckCircle2, Phone, AlertTriangle, ArrowRight } from 'lucide-react';

interface DispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNeighborhood?: string;
}

export const DispatchModal: React.FC<DispatchModalProps> = ({
  isOpen,
  onClose,
  defaultNeighborhood = 'Spring Valley Core',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    neighborhood: defaultNeighborhood,
    emergencyType: 'Water Leak (Indoor / Wall)',
    shutOffStatus: 'yes',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
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

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0F2942] text-white p-5 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Spring Valley 24/7 Leak Dispatch
            </div>
            <h3 className="text-xl font-bold font-display">
              {submitted ? 'Intake Logged Successfully' : 'Request Leak Detection Dispatch'}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Urgent gas or flood leak? Direct phone routing is fastest: <a href={PHONE_HREF} className="text-amber-400 font-bold underline font-mono">{PHONE_NUMBER}</a>
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  Intake Dispatched for {formData.neighborhood}
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your request has been routed to an on-call independent NSCB-licensed leak detection contractor in Spring Valley. A specialist will call <strong className="text-slate-900 font-mono">{formData.phone}</strong> shortly.
                </p>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-left space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Immediate Safety Protocols:</span>
                </div>
                <ul className="text-xs text-amber-950 space-y-1 list-disc list-inside">
                  <li><strong>For Gas Leaks:</strong> Evacuate outside immediately; do not toggle light switches or electrical appliances.</li>
                  <li><strong>For Water/Slab Leaks:</strong> Shut off your main water meter valve to prevent foundation wash-out.</li>
                  <li><strong>For Pool Leaks:</strong> Keep the pool pump system turned off to avoid burning out the motor.</li>
                </ul>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3 bg-[#0F2942] hover:bg-[#1E70B8] text-white font-bold rounded-xl transition-colors cursor-pointer"
              >
                Done / Return to Page
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. David Miller"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E70B8] focus:border-transparent outline-hidden"
                />
                {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(725) 313-0108"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E70B8] focus:border-transparent outline-hidden font-mono"
                />
                {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Spring Valley Area / Zip
                  </label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E70B8] focus:border-transparent outline-hidden bg-white"
                  >
                    <option value="Spring Valley Core (89103)">Spring Valley Core (89103)</option>
                    <option value="The Lakes & Peccole Ranch (89117)">The Lakes & Peccole Ranch</option>
                    <option value="Spanish Trail (89113)">Spanish Trail Estates</option>
                    <option value="Summerlin South (89135)">Summerlin South</option>
                    <option value="Rhodes Ranch (89148)">Rhodes Ranch & SW Vegas</option>
                    <option value="Other Clark County Location">Other Clark County Location</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Target Leak Category
                  </label>
                  <select
                    value={formData.emergencyType}
                    onChange={(e) => setFormData({ ...formData, emergencyType: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E70B8] focus:border-transparent outline-hidden bg-white"
                  >
                    <option value="Water Leak (Indoor / Wall)">Water Leak (Indoor / Wall)</option>
                    <option value="Gas Leak (Natural Gas / Propane)">Gas Leak (Natural Gas / Propane)</option>
                    <option value="Slab Leak (Concrete Foundation)">Slab Leak (Concrete Foundation)</option>
                    <option value="Pool Leak (Losing Water / Spa)">Pool Leak (Losing Water / Spa)</option>
                    <option value="Underground Main / Yard Line">Underground Main / Yard Line</option>
                    <option value="Emergency Rapid Shutoff">Emergency Rapid Shutoff</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Has Main Supply / Meter Been Shut Off?
                </label>
                <div className="flex items-center gap-4 text-sm text-slate-700">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="shutOffStatus"
                      value="yes"
                      checked={formData.shutOffStatus === 'yes'}
                      onChange={() => setFormData({ ...formData, shutOffStatus: 'yes' })}
                      className="text-[#1E70B8]"
                    />
                    <span>Yes, shut off</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="shutOffStatus"
                      value="no"
                      checked={formData.shutOffStatus === 'no'}
                      onChange={() => setFormData({ ...formData, shutOffStatus: 'no' })}
                      className="text-[#1E70B8]"
                    />
                    <span>No / Need guidance</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Observations (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Pool losing 2 inches per day / Warm floor in hallway..."
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1E70B8] focus:border-transparent outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F2942] hover:bg-[#1E70B8] text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Dispatch Leak Detection Specialist</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Dispatched from 6875 Groveview Ln, Las Vegas, NV 89103. Participating contractors hold active Nevada State Contractors Board (NSCB) licenses.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
