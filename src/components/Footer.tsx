import React from 'react';
import { PHONE_NUMBER, PHONE_HREF, BRAND_NAME, BUSINESS_ADDRESS, FACEBOOK_URL } from '../data/siteData';
import { getTopDiagnosticGuides, getBlogPostUrlPath, getBlogPostNavSlug } from '../data/blogData';
import { Phone, ShieldCheck, MapPin, Clock, BookOpen, ArrowRight } from 'lucide-react';

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
              <img
                src="/assets/aistudio/Las_Vegas_Leak_Detection_Badge_eed65358.png"
                alt="Las Vegas Leak Detection Services Logo"
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-contain shrink-0"
              />
              <span className="text-lg font-bold text-white tracking-tight font-display">
                {BRAND_NAME}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              24/7 non-invasive water, gas, slab, and swimming pool leak detection in Las Vegas, Nevada—serving Northwest Las Vegas &amp; Lone Mountain (89129), Centennial Hills, Summerlin, The Lakes, Spring Valley, Spanish Trail, Rhodes Ranch, Paradise, and Downtown Las Vegas.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Dispatch HQ:</strong> {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.addressRegion} {BUSINESS_ADDRESS.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Service Hours: 24 Hours / 7 Days / 365 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={PHONE_HREF} className="text-white hover:text-amber-400 font-mono font-semibold text-sm">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1877F2]/15 hover:bg-[#1877F2]/25 border border-[#1877F2]/30 text-white text-xs font-semibold transition-colors"
                title="Follow us on Facebook"
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
              </a>
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
                  Gas Leak Detection &amp; Repair
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
                  Underground &amp; Well Leaks
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

          {/* Column 3: Las Vegas Areas Served */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4 font-display">
              Las Vegas Areas
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/las-vegas/"
                  onClick={(e) => { e.preventDefault(); onNavigate('las-vegas'); }}
                  className="hover:text-white transition-colors"
                >
                  Northwest &amp; Lone Mtn (89129)
                </a>
              </li>
              <li>
                <a
                  href="/centennial-hills/"
                  onClick={(e) => { e.preventDefault(); onNavigate('centennial-hills'); }}
                  className="hover:text-white transition-colors"
                >
                  Centennial Hills (89131 / 89149)
                </a>
              </li>
              <li>
                <a
                  href="/summerlin-south/"
                  onClick={(e) => { e.preventDefault(); onNavigate('summerlin-south'); }}
                  className="hover:text-white transition-colors"
                >
                  Summerlin South &amp; The Lakes
                </a>
              </li>
              <li>
                <a
                  href="/spring-valley-center/"
                  onClick={(e) => { e.preventDefault(); onNavigate('spring-valley-center'); }}
                  className="hover:text-white transition-colors"
                >
                  Spring Valley &amp; Spanish Trail
                </a>
              </li>
              <li>
                <a
                  href="/downtown-las-vegas/"
                  onClick={(e) => { e.preventDefault(); onNavigate('downtown-las-vegas'); }}
                  className="hover:text-white transition-colors"
                >
                  Downtown &amp; Paradise (89101)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Knowledge Base */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4 font-display">
              Company &amp; Guides
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/how-it-works/"
                  onClick={(e) => { e.preventDefault(); onNavigate('how-it-works'); }}
                  className="hover:text-white transition-colors"
                >
                  How It Works (5 Steps)
                </a>
              </li>
              <li>
                <a
                  href="/blog/"
                  onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}
                  className="hover:text-amber-400 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Blog &amp; Leak Guides</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded">New</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact/"
                  onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; NAP (Map)
                </a>
              </li>
              <li>
                <a
                  href="/about/"
                  onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
                  className="hover:text-white transition-colors"
                >
                  About Our Team
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy/"
                  onClick={(e) => { e.preventDefault(); onNavigate('privacy-policy'); }}
                  className="hover:text-white transition-colors text-slate-400 font-medium"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/disclaimer/"
                  onClick={(e) => { e.preventDefault(); onNavigate('disclaimer'); }}
                  className="hover:text-white transition-colors text-slate-400 font-medium"
                >
                  Disclaimer &amp; Licensing
                </a>
              </li>
              <li>
                <a
                  href="/sitemap/"
                  onClick={(e) => { e.preventDefault(); onNavigate('sitemap'); }}
                  className="hover:text-white transition-colors text-slate-400 font-medium"
                >
                  HTML Sitemap
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
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-900 flex items-start gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Licensed Nevada Contractors complying with Nevada State Contractors Board (NSCB) C-1 standards.</span>
            </div>
          </div>

        </div>

        {/* Top 4 Diagnostic Guides */}
        <div className="py-8 border-b border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Top Diagnostic Guides</span>
            </div>
            <a
              href="/blog/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('blog');
              }}
              className="text-xs font-bold text-[#38BDF8] hover:text-white flex items-center gap-1 shrink-0 transition-colors"
            >
              <span>View All Diagnostic Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {getTopDiagnosticGuides().map((post) => (
              <a
                key={post.id}
                href={getBlogPostUrlPath(post)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(getBlogPostNavSlug(post));
                }}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-[#1E70B8] hover:bg-slate-800/80 transition-all group flex flex-col justify-between block no-underline text-inherit"
              >
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    {post.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white line-clamp-2 leading-snug block">
                    {post.title}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mt-2.5 flex items-center justify-between pt-2 border-t border-slate-800/60">
                  <span>{post.readTime}</span>
                  <span className="text-[#38BDF8] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    Read <ArrowRight className="w-3 h-3 inline" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quality Standards & Las Vegas Service Notice */}
        <div className="pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400">
            <span className="font-semibold text-slate-200">Las Vegas, Nevada Service Notice: </span>
            {BRAND_NAME} coordinates 24/7 non-invasive leak detection and repair across Las Vegas, Nevada—including Northwest Las Vegas &amp; Lone Mountain (89129), Centennial Hills (89131 / 89149), Summerlin (89135 / 89144), The Lakes (89117), Spring Valley (89103 / 89147), Spanish Trail (89113), Rhodes Ranch (89148), Paradise, and Downtown Las Vegas (89101). Main office located at {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.addressRegion} {BUSINESS_ADDRESS.postalCode}, USA. Work is performed by independent licensed contractors adhering to Nevada State Contractors Board (NSCB) standards.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 pt-2">
            <div>
              © 2026 {BRAND_NAME}. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Las Vegas, Nevada (Metro ZIPs 89101–89149)</span>
              <span>•</span>
              <span>24/7 Emergency Line: {PHONE_NUMBER}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
