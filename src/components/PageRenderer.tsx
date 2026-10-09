import React, { useState } from 'react';
import { PageContent, PHONE_NUMBER, PHONE_HREF, BRAND_NAME } from '../data/siteData';
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
  Sparkles
} from 'lucide-react';

interface PageRendererProps {
  page: PageContent;
  onNavigate: (slug: string) => void;
  onOpenDispatch: () => void;
  onOpenAudit: () => void;
}

export const PageRenderer: React.FC<PageRendererProps> = ({
  page,
  onNavigate,
  onOpenDispatch,
  onOpenAudit,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Helper to render text with contextual in-paragraph links
  const renderParagraphWithLinks = (text: string) => {
    // We replace specific phrases with contextual links to provide genuine semantic internal linking
    const linkReplacements: { phrase: string; slug: string; customText?: string }[] = [
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

    // Find the first matching phrase in this paragraph that is not the current page itself
    for (const item of linkReplacements) {
      if (item.slug === page.slug) continue; // Don't self-link

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
                  {page.type === 'service' ? 'Emergency Services' : page.type === 'location' ? 'Dallas Service Areas' : 'Information'}
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
              
              {/* Quiet Kicker (Zero-Pill Discipline) */}
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

              {/* Direct Answer Box (AI Overview & Featured Snippet Optimization) */}
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
                    <span className="block text-xs text-slate-300 font-normal">Call Now For Immediate Dispatch</span>
                    <span className="font-mono text-lg font-bold">{PHONE_NUMBER}</span>
                  </div>
                </a>

                <button
                  onClick={onOpenDispatch}
                  className="px-6 py-4 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>Request Online Dispatch</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Trust Metadata Strip */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Nevada NSCB Licensed Independent Contractors
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#1E70B8]" />
                  24/7/365 Rapid On-Call Dispatch
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  6875 Groveview Ln, Las Vegas, NV 89103
                </span>
              </div>

            </div>

            {/* Right Column: High-Impact Featured Asset */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group">
                {page.featuredImage ? (
                  <img
                    src={page.featuredImage}
                    alt={page.imageAlt || page.name}
                    className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-80 bg-linear-to-br from-[#0F2942] to-slate-800 flex items-center justify-center p-8 text-center text-white">
                    <div>
                      <Wrench className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                      <h3 className="font-bold text-lg font-display">{page.name}</h3>
                      <p className="text-xs text-slate-300 mt-1">24/7 Dallas Emergency Plumbing Dispatch</p>
                    </div>
                  </div>
                )}

                {/* Subtle Image Scrim with Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 text-white text-xs">
                  <div className="font-medium text-slate-200">
                    {page.imageCaption || "Dispatched independent mobile units carry diagnostic tools for same-day repair."}
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
            
            {page.sections.map((section, sIdx) => (
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

            {/* TRANSPARENT REFERRAL MODEL & VERIFIED CREDENTIALS SECTION */}
            <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider font-display">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Consumer Protection & Provider Standards</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                How Our Referral Network Connects You With Licensed Professionals
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {BRAND_NAME} operates transparently as an emergency dispatch coordinator for property owners across Spring Valley and Clark County, NV. When you call our desk, you are connected directly with pre-screened independent leak detection and plumbing contractors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                  <h4 className="text-sm font-bold text-white font-display">
                    Nevada Licensing Verification
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Under Nevada law, independent contractors in our referral system maintain active C-1 Plumbing & Heating or leak detection licenses issued by the Nevada State Contractors Board (NSCB).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                  <h4 className="text-sm font-bold text-white font-display">
                    Commercial Liability & Upfront Pricing
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Participating independent companies maintain commercial general liability insurance and provide clear, itemized estimates on-site before initiating any repair or replacement.
                  </p>
                </div>
              </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS (FAQ Accordion with Schema Support) */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                  <HelpCircle className="w-4 h-4" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  Questions About {page.name} in Dallas
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Specific answers to common technical, dispatch, and cost inquiries before calling.
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

            {/* GOOGLE MAPS EMBED & LOCAL NAP SECTION */}
            {page.showMap && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      <span>Verified Dispatch Location & Service Area</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Spring Valley Coordination Desk
                    </h3>
                  </div>
                  <div className="text-xs text-slate-600 sm:text-right">
                    <span className="font-semibold text-slate-900 block font-mono">6875 Groveview Ln</span>
                    <span>Las Vegas, NV 89103 (Spring Valley)</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Centrally located in Spring Valley, our mobile dispatch desk coordinates rapid on-call routing for water, gas, slab, and swimming pool leak emergencies across Clark County, NV.
                </p>

                {/* Embedded Responsive Google Map */}
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
                    <span>Dispatched Mobile Coverage: Spring Valley, The Lakes, Spanish Trail, Summerlin South & Rhodes Ranch</span>
                  </div>
                  <a
                    href={PHONE_HREF}
                    className="text-[#1E70B8] hover:underline font-bold"
                  >
                    Call (725) 313-0108 for Dispatch →
                  </a>
                </div>
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
                  Avoid catastrophic water, gas, slab, or pool damage to your Spring Valley property. Our dispatch team connects you with an on-call licensed leak detection contractor in minutes.
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
                  onClick={onOpenDispatch}
                  className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-colors cursor-pointer"
                >
                  Submit Online Dispatch Intake
                </button>
              </div>
            </section>

          </main>

          {/* SIDEBAR: CONTEXTUAL NAVIGATION & CONVERSION (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Quick Dispatch Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 sticky top-24">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5 font-display">
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                  Active Dispatch Open
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  Connect With a Dallas Plumber
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Call our 24-hour line for immediate phone routing to on-call independent contractors.
                </p>
              </div>

              <a
                href={PHONE_HREF}
                className="w-full py-3.5 px-4 bg-[#0F2942] hover:bg-[#1E70B8] text-white font-bold rounded-xl flex items-center justify-center gap-2.5 transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-base">{PHONE_NUMBER}</span>
              </a>

              <button
                onClick={onOpenDispatch}
                className="w-full py-2.5 px-4 border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Intake Form Dispatch
              </button>

              {/* Related Sub-Services Contextual Box */}
              {page.relatedServices && page.relatedServices.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                    Related Emergency Services
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

              {/* Related Dallas Neighborhoods Box */}
              {page.relatedLocations && page.relatedLocations.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                    Target Dallas Service Areas
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
                  <span>Explore whole-home emergency solutions on our </span>
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
                  <span> main authority hub.</span>
                </div>
              )}

              {/* Audit Trigger */}
              <div className="pt-2">
                <button
                  onClick={onOpenAudit}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Inspect SEO & Schema for this Page</span>
                </button>
              </div>

            </div>

          </aside>

        </div>
      </div>

    </article>
  );
};
