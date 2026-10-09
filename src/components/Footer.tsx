import React from 'react';
import { PHONE_NUMBER, PHONE_HREF, BRAND_NAME, BUSINESS_ADDRESS } from '../data/siteData';
import { Phone, ShieldCheck, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1E70B8] flex items-center justify-center text-white font-bold">
                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none">
                  <path d="M24 10C24 10 14 21.5 14 27.5C14 33.02 18.48 37.5 24 37.5C29.52 37.5 34 33.02 34 27.5C34 21.5 24 10 24 10Z" fill="#FFFFFF"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight font-display">
                {BRAND_NAME}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              24/7 Pay-Per-Call referral network connecting Spring Valley property owners with independent, NSCB-licensed leak detection contractors. Non-invasive acoustic, thermal, and hydrophone testing for water, gas, slab, and swimming pool leaks.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Dispatch Office:</strong> {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.addressRegion} {BUSINESS_ADDRESS.postalCode} (Spring Valley / Clark County)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dispatch Availability: 24 Hours / 7 Days / 365 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={PHONE_HREF} className="text-white hover:text-amber-400 font-mono font-semibold text-sm">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Leak Detection Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4 font-display">
              Target Leak Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/water-leak-detection/"
                  onClick={(e) => { e.preventDefault(); onNavigate('water-leak-detection'); }}
                  className="hover:text-white transition-colors"
                >
                  Water Leak Detection
                </a>
              </li>
              <li>
                <a
                  href="/gas-leak-detection/"
                  onClick={(e) => { e.preventDefault(); onNavigate('gas-leak-detection'); }}
                  className="hover:text-white transition-colors"
                >
                  Gas Leak Detection & Repair
                </a>
              </li>
              <li>
                <a
                  href="/slab-leak-detection/"
                  onClick={(e) => { e.preventDefault(); onNavigate('slab-leak-detection'); }}
                  className="hover:text-white transition-colors"
                >
                  Slab Leak Detection
                </a>
              </li>
              <li>
                <a
                  href="/pool-leak-detection/"
                  onClick={(e) => { e.preventDefault(); onNavigate('pool-leak-detection'); }}
                  className="hover:text-white transition-colors"
                >
                  Swimming Pool Leaks
                </a>
              </li>
              <li>
                <a
                  href="/underground-leak-detection/"
                  onClick={(e) => { e.preventDefault(); onNavigate('underground-leak-detection'); }}
                  className="hover:text-white transition-colors"
                >
                  Underground & Yard Leaks
                </a>
              </li>
              <li>
                <a
                  href="/emergency-leak-repair/"
                  onClick={(e) => { e.preventDefault(); onNavigate('emergency-leak-repair'); }}
                  className="hover:text-white transition-colors"
                >
                  24/7 Emergency Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4 font-display">
              Spring Valley Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/spring-valley-center/"
                  onClick={(e) => { e.preventDefault(); onNavigate('spring-valley-center'); }}
                  className="hover:text-white transition-colors"
                >
                  Spring Valley Core (89103)
                </a>
              </li>
              <li>
                <a
                  href="/the-lakes/"
                  onClick={(e) => { e.preventDefault(); onNavigate('the-lakes'); }}
                  className="hover:text-white transition-colors"
                >
                  The Lakes & Peccole Ranch
                </a>
              </li>
              <li>
                <a
                  href="/spanish-trail/"
                  onClick={(e) => { e.preventDefault(); onNavigate('spanish-trail'); }}
                  className="hover:text-white transition-colors"
                >
                  Spanish Trail Estates
                </a>
              </li>
              <li>
                <a
                  href="/summerlin-south/"
                  onClick={(e) => { e.preventDefault(); onNavigate('summerlin-south'); }}
                  className="hover:text-white transition-colors"
                >
                  Summerlin South (89135)
                </a>
              </li>
              <li>
                <a
                  href="/rhodes-ranch/"
                  onClick={(e) => { e.preventDefault(); onNavigate('rhodes-ranch'); }}
                  className="hover:text-white transition-colors"
                >
                  Rhodes Ranch & SW Vegas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Standards & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4 font-display">
              Referral Standards
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/about/"
                  onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                  className="hover:text-white transition-colors"
                >
                  How Referral Routing Works
                </a>
              </li>
              <li>
                <a
                  href="/contact/"
                  onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                  className="hover:text-white transition-colors"
                >
                  Contact & Dispatch Desk
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
              <li>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Robots Directives
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-900 flex items-start gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Independent contractors carry active Nevada State Contractors Board (NSCB) C-1 Plumbing & Heating licenses.</span>
            </div>
          </div>

        </div>

        {/* Legal Referral Disclaimer & Transparency Disclosure */}
        <div className="pt-8 space-y-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
            <span className="font-semibold text-slate-200">Legal Disclosure & Referral Model Notice: </span>
            {BRAND_NAME} is an independent marketing referral and emergency dispatch service based at {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.addressRegion} {BUSINESS_ADDRESS.postalCode}. We connect property owners with independent, third-party licensed plumbing and leak detection contractors in Spring Valley and Clark County, NV. We do not directly provide contracting services, nor do we employ service technicians. Any work contracted, estimates provided, or warranties issued are strictly between the customer and the independent contractor performing the service.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 pt-2">
            <div>
              © 2026 {BRAND_NAME}. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Spring Valley, Clark County, NV</span>
              <span>•</span>
              <span>Direct Call Dispatch Line: {PHONE_NUMBER}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
