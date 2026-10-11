import React, { useState, useEffect } from 'react';
import { PageContent, PHONE_NUMBER, PHONE_HREF, BRAND_NAME, BUSINESS_ADDRESS } from '../data/siteData';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import {
  Phone,
  ShieldCheck,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Droplets,
  Wrench,
  BookOpen
} from 'lucide-react';
import { SidebarDispatchForm } from './SidebarDispatchForm';
import { FacebookEmbed } from './FacebookEmbed';

interface PageRendererProps {
  page: PageContent;
  onNavigate: (slug: string) => void;
  onOpenAudit?: () => void;
}

export const PageRenderer: React.FC<PageRendererProps> = ({
  page,
  onNavigate,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [imgHasError, setImgHasError] = useState<boolean>(false);

  useEffect(() => {
    setImgHasError(false);
  }, [page.slug, page.featuredImage]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Helper to render text with contextual in-paragraph links
  const renderParagraphWithLinks = (text: string) => {
    const linkReplacements: { phrase: string; slug: string }[] = [
      { phrase: 'leak detection in Spring Valley', slug: '' },
      { phrase: 'Spring Valley leak detection', slug: '' },
      { phrase: 'local leak specialists in Spring Valley', slug: '' },
      { phrase: 'leak detection specialists across Spring Valley', slug: '' },
      { phrase: 'Spring Valley Leak Detection & Repair', slug: '' },
      { phrase: 'water leak detection', slug: 'water-leak-detection' },
      { phrase: 'Water Leak Detection', slug: 'water-leak-detection' },
      { phrase: 'gas leak detection', slug: 'gas-leak-detection' },
      { phrase: 'Gas Leak Detection', slug: 'gas-leak-detection' },
      { phrase: 'slab leak detection', slug: 'slab-leak-detection' },
      { phrase: 'Slab Leak Detection', slug: 'slab-leak-detection' },
      { phrase: 'pool leak detection', slug: 'pool-leak-detection' },
      { phrase: 'swimming pool leak detection', slug: 'pool-leak-detection' },
      { phrase: 'Swimming Pool Leak Detection', slug: 'pool-leak-detection' },
      { phrase: 'underground leak detection', slug: 'underground-leak-detection' },
      { phrase: 'emergency leak repair', slug: 'emergency-leak-repair' },
      { phrase: 'Spring Valley Center', slug: 'spring-valley-center' },
      { phrase: 'The Lakes', slug: 'the-lakes' },
      { phrase: 'Peccole Ranch', slug: 'the-lakes' },
      { phrase: 'Spanish Trail', slug: 'spanish-trail' },
      { phrase: 'Summerlin South', slug: 'summerlin-south' },
      { phrase: 'Rhodes Ranch', slug: 'rhodes-ranch' },
    ];

    for (const item of linkReplacements) {
      if (item.slug === page.slug) continue;

      const regex = new RegExp(`\\b(${item.phrase})\\b`, 'i');
      const match = text.match(regex);
      if (match && match.index !== undefined) {
        const before = text.substring(0, match.index);
        const matchedText = match[0];
        const after = text.substring(match.index + matchedText.length);

        return (
          <>
            {before}
            <a
              href={item.slug === '' ? '/' : `/${item.slug}/`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.slug);
              }}
              className="text-[#1E70B8] hover:text-[#0F2942] underline underline-offset-2 font-medium transition-colors cursor-pointer"
            >
              {matchedText}
            </a>
            {after}
          </>
        );
      }
    }

    return text;
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-500 font-medium">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate(''); }}
              className="hover:text-[#1E70B8] transition-colors"
            >
              Home
            </a>
            {page.slug !== '' && (
              <>
                <span className="mx-2 text-slate-300">/</span>
                <span className="text-slate-400 capitalize">
                  {page.type === 'service'
                    ? 'Leak Services'
                    : page.type === 'location'
                    ? 'Spring Valley Service Areas'
                    : 'Information'}
                </span>
                <span className="mx-2 text-slate-300">/</span>
                <span className="text-slate-900 font-semibold" aria-current="page">
                  {page.navTitle}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* HERO SECTION: Focal Anchor */}
      <section className="bg-white border-b border-slate-200 py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Quiet Kicker */}
              <div className="text-xs font-bold text-[#1E70B8] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-display">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>{page.heroKicker}</span>
              </div>

              {/* Primary H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-4 font-display">
                {page.h1}
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                {page.heroSubheadline}
              </p>

              {/* Direct Answer Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-900 shrink-0 mt-0.5">
                    <Droplets className="w-4 h-4 text-amber-700" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block font-display">
                      Direct Answer & Emergency Action:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      {page.directAnswer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Conversion Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={PHONE_HREF}
                  className="px-6 py-4 rounded-xl bg-[#0F2942] hover:bg-[#1E70B8] text-white font-bold text-base flex items-center justify-center gap-3 shadow-md hover:shadow-lg transition-all group"
                >
                  <Phone className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <div className="text-left leading-tight">
                    <span className="block text-xs text-slate-300 font-normal">Call 24/7 For Rapid Assistance</span>
                    <span className="font-mono text-lg font-bold">{PHONE_NUMBER}</span>
                  </div>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-4 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Contact & Location</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Trust Metadata Strip */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Nevada NSCB Licensed Plumbing & Leak Specialists
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#1E70B8]" />
                  24/7/365 Emergency Service
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  6875 Groveview Ln, Las Vegas, NV 89103
                </span>
              </div>

            </div>

            {/* Right Column: Featured Image Asset */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group min-h-[300px]">
                {page.featuredImage && !imgHasError ? (
                  <img
                    src={page.featuredImage}
                    alt={page.imageAlt || page.name}
                    width={800}
                    height={600}
                    className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    // @ts-ignore
                    fetchPriority="high"
                    decoding="async"
                    onError={() => setImgHasError(true)}
                  />
                ) : (
                  <div className="w-full h-72 sm:h-96 bg-gradient-to-br from-[#0F2942] via-slate-800 to-[#1E70B8] flex items-center justify-center p-8 text-center text-white">
                    <div className="max-w-sm">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-center mx-auto mb-4 border border-white/20">
                        <Wrench className="w-7 h-7 text-amber-400" />
                      </div>
                      <h3 className="font-bold text-xl font-display text-white mb-1.5">{page.name}</h3>
                      <p className="text-xs text-slate-200 mb-4">Precision Non-Invasive Leak Detection & Repair</p>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                        <span>Nevada NSCB Licensed</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 text-white text-xs">
                  <div className="font-medium text-slate-200">
                    {page.imageCaption || "Mobile diagnostic units carry electronic acoustic & thermal locators for same-day service."}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT & DEEP TOPICAL COVERAGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Body (8 Columns) */}
          <main className="lg:col-span-8 space-y-12">
            
            {/* Standard Page Sections */}
            {page.sections && page.sections.length > 0 && page.sections.map((section, sIdx) => (
              <section key={sIdx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-display">
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <p className="text-xs font-semibold text-[#1E70B8] uppercase tracking-wider mt-1">
                      {section.subheading}
                    </p>
                  )}
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>
                      {renderParagraphWithLinks(para)}
                    </p>
                  ))}
                </div>

                {/* Bullet Points */}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <ul className="space-y-2.5">
                      {section.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Callout Box */}
                {section.callout && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1">
                    <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-900">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <span>{section.callout.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                      {section.callout.body}
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* DEDICATED DIRECT CONTACT & DISPATCH CHANNELS (No Form) */}
            {page.type === 'contact' && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>Direct Telephone Communication & 24/7 Dispatch</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    Immediate Phone Dispatch — No Waiting on Web Forms
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Active water leaks, pipe bursts, and combustible gas odors require instantaneous human triage. Rather than waiting on web forms or delayed emails, call our 24/7 Spring Valley dispatch desk directly at <a href={PHONE_HREF} className="text-[#1E70B8] font-bold underline font-mono">{PHONE_NUMBER}</a> for 30–60 minute on-site technician arrival.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0F2942] text-amber-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">24/7 Emergency Line</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Staffed 24/7/365 by local dispatchers</p>
                    </div>
                    <a
                      href={PHONE_HREF}
                      className="block text-center py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-lg transition-colors font-mono cursor-pointer"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1E70B8] text-white flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">Physical Location</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Spring Valley dispatch office</p>
                    </div>
                    <div className="text-xs font-semibold text-slate-800 leading-snug">
                      6875 Groveview Ln<br />Las Vegas, NV 89103
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">Rapid Dispatch</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Spring Valley & Clark County</p>
                    </div>
                    <div className="text-xs font-semibold text-emerald-700">
                      Mobile Diagnostic Trucks On Standby
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* GOOGLE MAPS EMBED & LOCAL NAP SECTION */}
            {page.showMap && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      <span>Official Business Location & Service Area</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Spring Valley Location & Map
                    </h3>
                  </div>
                  <div className="text-xs text-slate-600 sm:text-right">
                    <span className="font-semibold text-slate-900 block font-mono">6875 Groveview Ln</span>
                    <span>Las Vegas, NV 89103 (Spring Valley)</span>
                  </div>
                </div>

                {/* NAP Summary Card */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium uppercase tracking-wider text-[10px]">Business Name</span>
                    <strong className="text-slate-900 block mt-0.5">{BRAND_NAME}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium uppercase tracking-wider text-[10px]">Physical Address</span>
                    <strong className="text-slate-900 block mt-0.5">6875 Groveview Ln, Las Vegas, NV 89103</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium uppercase tracking-wider text-[10px]">Telephone & Hours</span>
                    <strong className="text-slate-900 block mt-0.5 font-mono">{PHONE_NUMBER} • Open 24/7</strong>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Centrally based at 6875 Groveview Ln in Spring Valley, our mobile diagnostic units provide rapid response for domestic water, hazardous gas, concrete slab, and swimming pool leak emergencies throughout Clark County, NV.
                </p>

                {/* Embedded Responsive Google Map (User's Exact Embed URL) */}
                <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.32573332633928!2d-115.24263393980249!3d36.10665393950978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c718b3b90839%3A0x478991a6983539e5!2s6875%20Groveview%20Ln%2C%20Las%20Vegas%2C%20NV%2089103%2C%20USA!5e0!3m2!1sen!2sve!4v1791569926749!5m2!1sen!2sve"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Spring Valley Leak Detection Location - 6875 Groveview Ln, Las Vegas, NV 89103"
                    className="w-full h-full"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Coverage: Spring Valley, The Lakes, Spanish Trail, Summerlin South & Rhodes Ranch</span>
                  </div>
                  <a
                    href={PHONE_HREF}
                    className="text-[#1E70B8] hover:underline font-bold"
                  >
                    Call (725) 313-0108 for Emergency Service →
                  </a>
                </div>
              </section>
            )}

            {/* OFFICIAL FACEBOOK PAGE EMBED (On Contact & NAP page) */}
            {page.type === 'contact' && (
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1877F2] font-display">
                  <span className="w-2 h-2 rounded-full bg-[#1877F2]"></span>
                  <span>Official Social Dispatch & Facebook Community</span>
                </div>
                <FacebookEmbed />
              </section>
            )}

            {/* QUALITY STANDARDS & NEVADA STATE LICENSURE SECTION */}
            <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider font-display">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Professional Quality Standards</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Certified Leak Detection & Repair in Spring Valley, NV
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {BRAND_NAME} provides 24/7 non-invasive emergency leak diagnostics and durable repair across Spring Valley and Clark County. All services are performed by licensed, insured professionals adhering to strict Nevada State Contractors Board (NSCB) standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                  <h4 className="text-sm font-bold text-white font-display">
                    Nevada State Licensure
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Contractors hold active C-1 Plumbing & Heating or specialized leak detection licenses issued and verified by the Nevada State Contractors Board (NSCB).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                  <h4 className="text-sm font-bold text-white font-display">
                    Upfront Itemized Estimates
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Technicians thoroughly test and inspect your property, providing clear, itemized quotes before beginning any water, gas, slab, or pool leak repair.
                  </p>
                </div>
              </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            {page.faqs && page.faqs.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                    <HelpCircle className="w-4 h-4" />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    Questions About {page.name} in Spring Valley, NV
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Specific answers to common technical, diagnostic, and pricing inquiries.
                  </p>
                </div>

                <div className="divide-y divide-slate-100">
                  {page.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="py-4">
                      <button
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full flex items-center justify-between text-left gap-4 font-bold text-slate-900 hover:text-[#1E70B8] transition-colors cursor-pointer"
                      >
                        <span className="text-sm sm:text-base font-display">{faq.question}</span>
                        {openFaq === fIdx ? (
                          <ChevronUp className="w-4 h-4 text-[#1E70B8] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {openFaq === fIdx && (
                        <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                          {renderParagraphWithLinks(faq.answer)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FEATURED TECHNICAL LEAK GUIDES & DIAGNOSTICS (Incoming Inlinks) */}
            {page.slug === '' ? (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 font-display">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span>Spring Valley Diagnostic Knowledge Base</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                      Expert Leak Detection Guides & DIY Diagnostic Protocols
                    </h2>
                  </div>
                  <a
                    href="/blog/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('blog');
                    }}
                    className="text-xs font-bold text-[#1E70B8] hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>View All Articles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {BLOG_POSTS.map((post) => (
                    <a
                      key={post.id}
                      href={`/blog/${post.slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`blog/${post.slug}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group p-5 rounded-xl border border-slate-200 hover:border-[#1E70B8] hover:bg-slate-50/60 transition-all flex flex-col justify-between block no-underline text-inherit"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase tracking-wider inline-block mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#1E70B8] transition-colors leading-snug line-clamp-2 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>{post.readTime}</span>
                        <span className="text-[#1E70B8] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                          Read Guide <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ) : page.type === 'service' ? (
              <section className="bg-amber-50/80 rounded-2xl p-6 sm:p-8 border border-amber-200 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 font-display">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  <span>Recommended Diagnostic Guide for This Service</span>
                </div>
                {(() => {
                  const matchedPost =
                    page.slug === 'pool-leak-detection'
                      ? BLOG_POSTS.find((p) => p.slug === 'how-swimming-pool-bucket-test-works')
                      : page.slug === 'gas-leak-detection'
                      ? BLOG_POSTS.find((p) => p.slug === 'what-to-do-when-you-smell-gas')
                      : page.slug === 'slab-leak-detection'
                      ? BLOG_POSTS.find((p) => p.slug === 'signs-of-slab-leak-in-las-vegas-homes')
                      : page.slug === 'underground-leak-detection'
                      ? BLOG_POSTS.find((p) => p.slug === 'desert-caliche-soil-pipe-damage')
                      : BLOG_POSTS.find((p) => p.slug === 'how-to-read-water-meter-for-hidden-leaks');

                  if (!matchedPost) return null;

                  return (
                    <div className="bg-white rounded-xl p-5 border border-amber-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1 max-w-xl">
                        <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                          {matchedPost.category} • {matchedPost.readTime}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 font-display">
                          {matchedPost.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2">
                          {matchedPost.excerpt}
                        </p>
                      </div>
                      <a
                        href={`/blog/${matchedPost.slug}/`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(`blog/${matchedPost.slug}`);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-2.5 bg-[#0F2942] hover:bg-[#1E70B8] text-white text-xs font-bold rounded-lg transition-colors shrink-0 flex items-center gap-1.5 no-underline"
                      >
                        <span>Read Technical Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  );
                })()}
              </section>
            ) : null}

            {/* HOMEPAGE OFFICIAL FACEBOOK EMBED & COMMUNITY DESK */}
            {page.slug === '' && (
              <section className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1877F2] font-display">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1877F2]"></span>
                  <span>Connect With Our Dispatch Desk on Facebook</span>
                </div>
                <FacebookEmbed />
              </section>
            )}

            {/* FINAL URGENT CONVERSION CTA BANNER */}
            <section className="p-8 rounded-2xl bg-linear-to-br from-[#0F2942] to-slate-900 text-white space-y-6 shadow-xl">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                  24/7 Rapid Emergency Response
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
                  Need Immediate Help With {page.name}?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Avoid catastrophic water, gas, slab, or pool damage to your Spring Valley property. Our licensed technicians arrive promptly with advanced non-invasive diagnostic tools.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={PHONE_HREF}
                  className="px-6 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-slate-950" />
                  <span>Call {PHONE_NUMBER}</span>
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-colors cursor-pointer"
                >
                  Contact Office & Location Details
                </button>
              </div>
            </section>

          </main>

          {/* SIDEBAR: CONTEXTUAL NAVIGATION & CONVERSION (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Interactive Inline Emergency Call & Callback Card */}
            <SidebarDispatchForm
              currentLocationName={page.type === 'location' ? page.navTitle : 'Spring Valley Core'}
              currentServiceType={page.type === 'service' ? page.name : 'Water Leak (Indoor / Wall)'}
            />

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
              
              {/* Educational Blog Callout in Sidebar (Incoming Inlinks) */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                    <span>Technical Leak Guides</span>
                  </div>
                  <a
                    href="/blog/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('blog');
                    }}
                    className="text-[11px] font-bold text-[#1E70B8] hover:underline flex items-center gap-0.5"
                  >
                    <span>All Guides</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Step-by-step DIY diagnostic procedures and utility leak verification:
                </p>
                <div className="space-y-2 pt-1 border-t border-amber-200/60">
                  {BLOG_POSTS.slice(0, 3).map((post) => (
                    <a
                      key={post.id}
                      href={`/blog/${post.slug}/`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`blog/${post.slug}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="block p-2.5 rounded-lg bg-white/90 hover:bg-white border border-amber-200/70 hover:border-[#1E70B8] transition-colors group no-underline text-inherit"
                    >
                      <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider mb-0.5">
                        {post.category}
                      </div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#1E70B8] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Related Sub-Services Contextual Box */}
              {page.relatedServices && page.relatedServices.length > 0 && (
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                    Related Leak Services
                  </h5>
                  <div className="space-y-2">
                    {page.relatedServices.map((rs) => (
                      <a
                        key={rs.slug}
                        href={`/${rs.slug}/`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(rs.slug);
                        }}
                        className="block p-2.5 rounded-lg border border-slate-100 hover:border-[#1E70B8] hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#1E70B8] flex items-center justify-between">
                          <span>{rs.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1E70B8]" />
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{rs.description}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Spring Valley Neighborhoods Box */}
              {page.relatedLocations && page.relatedLocations.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                    Spring Valley & Nearby Areas
                  </h5>
                  <div className="space-y-1.5">
                    {page.relatedLocations.map((rl) => (
                      <a
                        key={rl.slug}
                        href={`/${rl.slug}/`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(rl.slug);
                        }}
                        className="flex items-center justify-between py-1.5 px-2 rounded-md text-xs font-medium text-slate-700 hover:text-[#1E70B8] hover:bg-slate-50 transition-colors group"
                      >
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-500" />
                          <span>{rl.name}</span>
                        </span>
                        <span className="text-[10px] text-slate-400 group-hover:text-[#1E70B8]">Coverage →</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Link back to Homepage Anchor */}
              {page.slug !== '' && (
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <span>Explore full solutions on our </span>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('');
                    }}
                    className="text-[#1E70B8] font-bold hover:underline"
                  >
                    Spring Valley leak detection
                  </a>
                  <span> main hub.</span>
                </div>
              )}

            </div>

          </aside>

        </div>
      </div>

    </article>
  );
};
