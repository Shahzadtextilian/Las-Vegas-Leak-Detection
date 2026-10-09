import React, { useState } from 'react';
import { PHONE_NUMBER, PHONE_HREF, BRAND_NAME, BUSINESS_ADDRESS } from '../data/siteData';
import { Phone, ChevronDown, Menu, X, Sparkles, MapPin } from 'lucide-react';

interface HeaderProps {
  currentSlug: string;
  onNavigate: (slug: string) => void;
  onOpenAudit: () => void;
  onOpenDispatch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlug,
  onNavigate,
  onOpenAudit,
  onOpenDispatch,
}) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { title: 'Water Leak Detection', slug: 'water-leak-detection' },
    { title: 'Gas Leak Detection & Repair', slug: 'gas-leak-detection' },
    { title: 'Slab Leak Detection', slug: 'slab-leak-detection' },
    { title: 'Swimming Pool Leak Detection', slug: 'pool-leak-detection' },
    { title: 'Underground & Yard Pipe Leaks', slug: 'underground-leak-detection' },
    { title: '24/7 Emergency Leak Repair', slug: 'emergency-leak-repair' },
  ];

  const locations = [
    { name: 'Spring Valley Core', slug: 'spring-valley-center' },
    { name: 'The Lakes & Peccole Ranch', slug: 'the-lakes' },
    { name: 'Spanish Trail Estates', slug: 'spanish-trail' },
    { name: 'Summerlin South', slug: 'summerlin-south' },
    { name: 'Rhodes Ranch', slug: 'rhodes-ranch' },
  ];

  return (
    <>
      {/* Top Notification Bar - Urgent Dispatch Status */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-100">Spring Valley Dispatch Desk:</span>
            <span className="text-slate-300">Independent NSCB-licensed leak specialists on call in Clark County, NV</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden md:inline">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
              6875 Groveview Ln, Las Vegas, NV 89103
            </span>
            <button
              onClick={onOpenAudit}
              className="text-amber-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-1 cursor-pointer"
              title="Inspect SEO, JSON-LD Schema & Internal Links for this page"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>SEO & Schema Auditor</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">Avg Arrival: 30–60 Min</span>
          </div>
        </div>
      </div>

      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4–5 Nav links) — Zone 3 (Primary Action) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* ZONE 1: Brand Wordmark */}
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('');
              }}
              className="flex items-center gap-3 text-slate-900 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0F2942] flex items-center justify-center text-white shadow-xs group-hover:bg-[#1E70B8] transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                  <path d="M24 10C24 10 14 21.5 14 27.5C14 33.02 18.48 37.5 24 37.5C29.52 37.5 34 33.02 34 27.5C34 21.5 24 10 24 10Z" fill="#38BDF8"/>
                  <circle cx="33" cy="15" r="4" fill="#D97706"/>
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-base sm:text-lg font-extrabold tracking-tight text-slate-950 font-display">
                  Spring Valley Leak Detection
                </span>
                <span className="block text-xs font-semibold text-[#1E70B8] tracking-wider uppercase">
                  Water • Gas • Slab • Pool
                </span>
              </div>
            </a>
          </div>

          {/* ZONE 2: 4-5 Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('');
              }}
              className={`hover:text-[#1E70B8] transition-colors whitespace-nowrap shrink-0 ${currentSlug === '' ? 'text-[#1E70B8] font-bold' : ''}`}
            >
              Overview
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 hover:text-[#1E70B8] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-2"
              >
                <span>Leak Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#1E70B8] transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 hidden group-hover:block transition-all">
                <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Target Leak Types
                </div>
                {services.map((item) => (
                  <a
                    key={item.slug}
                    href={`/${item.slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.slug);
                    }}
                    className={`block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E70B8] transition-colors ${currentSlug === item.slug ? 'bg-amber-50/50 font-semibold text-[#1E70B8]' : ''}`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Neighborhoods Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center gap-1 hover:text-[#1E70B8] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-2"
              >
                <span>Service Areas</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#1E70B8] transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 hidden group-hover:block transition-all">
                <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Spring Valley Sectors
                </div>
                {locations.map((item) => (
                  <a
                    key={item.slug}
                    href={`/${item.slug}/`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.slug);
                    }}
                    className={`block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E70B8] transition-colors ${currentSlug === item.slug ? 'bg-amber-50/50 font-semibold text-[#1E70B8]' : ''}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/about/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
              className={`hover:text-[#1E70B8] transition-colors whitespace-nowrap shrink-0 ${currentSlug === 'about' ? 'text-[#1E70B8] font-bold' : ''}`}
            >
              How It Works
            </a>

            <a
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className={`hover:text-[#1E70B8] transition-colors whitespace-nowrap shrink-0 ${currentSlug === 'contact' ? 'text-[#1E70B8] font-bold' : ''}`}
            >
              Contact & NAP
            </a>
          </nav>

          {/* ZONE 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 text-sm font-bold text-white bg-[#0F2942] hover:bg-[#1E70B8] rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0 group"
            >
              <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-300 font-normal leading-none">24/7 Leak Dispatch Line</span>
                <span className="font-mono font-bold tracking-tight text-white">{PHONE_NUMBER}</span>
              </div>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">Navigation</div>
              <button
                onClick={() => { onNavigate(''); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Overview (Home)
              </button>
              <button
                onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                How Dispatch Works & Licensing
              </button>
              <button
                onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Contact & Address (6875 Groveview Ln)
              </button>
            </div>

            <div className="space-y-1 border-t border-slate-100 pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">Target Leak Services</div>
              {services.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => { onNavigate(s.slug); setMobileMenuOpen(false); }}
                  className="w-full text-left px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-[#1E70B8] hover:bg-slate-50 rounded-md"
                >
                  {s.title}
                </button>
              ))}
            </div>

            <div className="space-y-1 border-t border-slate-100 pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">Spring Valley Sectors</div>
              {locations.map((loc) => (
                <button
                  key={loc.slug}
                  onClick={() => { onNavigate(loc.slug); setMobileMenuOpen(false); }}
                  className="w-full text-left px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-[#1E70B8] hover:bg-slate-50 rounded-md"
                >
                  {loc.name}
                </button>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 flex flex-col gap-2">
              <a
                href={PHONE_HREF}
                className="w-full text-center py-3 bg-[#0F2942] text-white font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <button
                onClick={() => { onOpenDispatch(); setMobileMenuOpen(false); }}
                className="w-full text-center py-2.5 border border-slate-300 text-slate-700 font-medium rounded-xl text-sm"
              >
                Submit Dispatch Intake Online
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
