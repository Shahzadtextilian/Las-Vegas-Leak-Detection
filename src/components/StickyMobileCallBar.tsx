import React from 'react';
import { PHONE_NUMBER, PHONE_HREF } from '../data/siteData';
import { Phone, Calendar } from 'lucide-react';

interface StickyMobileCallBarProps {
  onOpenDispatch: () => void;
}

export const StickyMobileCallBar: React.FC<StickyMobileCallBarProps> = ({ onOpenDispatch }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 sm:hidden shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={PHONE_HREF}
          className="flex-1 bg-[#0F2942] active:bg-[#1E70B8] text-white py-2.5 px-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Call Dispatch Now</span>
        </a>
        <button
          onClick={onOpenDispatch}
          className="border border-slate-300 active:bg-slate-100 text-slate-800 py-2.5 px-3 rounded-xl font-medium text-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span>Online Intake</span>
        </button>
      </div>
    </div>
  );
};
