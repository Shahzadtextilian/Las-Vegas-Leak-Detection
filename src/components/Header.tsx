import React, { useState } from 'react';
import { PHONE_NUMBER, PHONE_HREF, BRAND_NAME, BUSINESS_ADDRESS } from '../data/siteData';
import { Phone, ChevronDown, Menu, X, Sparkles, MapPin, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentSlug: string;
  onNavigate: (slug: string) => void;
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlug,
  onNavigate,
  onOpenAudit,
}) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { title: 'Water Leak Detection & Repair', slug: 'water-leak-detection' },
    { title: 'Slab Leak Detection & Repair', slug: 'slab-leak-detection' },
    { title: 'Pool Leak Detection & Repair', slug: 'pool-leak-detection' },
    { title: 'Gas Leak Detection & Repair', slug: 'gas-leak-detection' },
    { title: 'Underground & Yard Pipe Leaks', slug: 'underground-leak-detection' },
    { title: '24/7 Emergency Leak Diagnostics', slug: 'emergency-leak-repair' },
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
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-100">Spring Valley Emergency Line:</span>
            <span className="text-slate-300">Licensed NSCB leak specialists on call in Clark County, NV</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 hidden md:inline">
              <MapPin className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
              {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.addressRegion} {BUSINESS_ADDRESS.postalCode}
            </span>
            <button
              onClick={onOpenAudit}
              className="text-amber-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-1 cursor-pointer"
              title="Inspect SEO, JSON-LD Schema & Internal Links for this page"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>SEO & Schema Auditor</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* ZONE 1: Identity & Brand Anchor */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('');
              }}
              className="flex items-center gap-3 group"
              aria-label="Spring Valley Leak Detection & Repair - Home"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#0F2942] to-[#1E70B8] flex items-center justify-center text-white font-black shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                  <path d="M24 8C24 8 12 21 12 28C12 34.6274 17.3726 40 24 40C30.6274 40 36 34.6274 36 28C36 21 24 8 24 8Z" fill="#38BDF8"/>
                  <path d="M24 14C24 14 16 23.5 16 28.5C16 32.9183 19.5817 36.5 24 36.5C28.4183 36.5 32 32.9183 32 28.5C32 23.5 24 14 24 14Z" fill="#FFFFFF" fillOpacity="0.85"/>
                  <circle cx="21" cy="25" r="2" fill="#0284C7"/>
                </svg>
              </div>

              <div className="leading-tight">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight block font-display">
                  Spring Valley Leak Detection
                </span>
                <span className="block text-xs font-semibold text-[#1E70B8] tracking-wider uppercase">
                  Water • Slab • Pool • Gas
                </span>
              </div>
            </a>
          </div>

          {/* ZONE 2: Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-700">
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
              href="/how-it-works/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('how-it-works');
              }}
              className={`hover:text-[#1E70B8] transition-colors whitespace-nowrap shrink-0 ${currentSlug === 'how-it-works' || currentSlug === 'about' ? 'text-[#1E70B8] font-bold' : ''}`}
            >
              How It Works
            </a>

            <a
              href="/blog/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('blog');
              }}
              className={`hover:text-[#1E70B8] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${currentSlug === 'blog' || currentSlug.startsWith('blog/') ? 'text-[#1E70B8] font-bold' : ''}`}
            >
              <span>Blog</span>
              <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.2 rounded-full">New</span>
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
                <span className="block text-[10px] text-slate-300 font-normal leading-none">24/7 Emergency Line</span>
                <span className="font-mono font-bold tracking-tight text-white">{PHONE_NUMBER}</span>
              </div>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">Main Pages</div>
              <button
                onClick={() => { onNavigate(''); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Overview (Home)
              </button>
              <button
                onClick={() => { onNavigate('how-it-works'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                How It Works (5-Step Diagnostic)
              </button>
              <button
                onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg flex items-center justify-between"
              >
                <span>Blog & Educational Guides</span>
                <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full">New</span>
              </button>
              <button
                onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                className="w-full text-left px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Contact & NAP (6875 Groveview Ln)
              </button>
            </div>

            <div className="space-y-1 border-t border-slate-100 pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">Leak Services</div>
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
                <span>Call 24/7: {PHONE_NUMBER}</span>
              </a>
              <button
                onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                className="w-full text-center py-2.5 border border-slate-300 text-slate-700 font-medium rounded-xl text-sm"
              >
                View Map & Contact Form
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
