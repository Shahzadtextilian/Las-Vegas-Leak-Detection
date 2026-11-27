import React, { useState, useEffect } from 'react';
import { PageContent, PHONE_NUMBER, PHONE_HREF, BRAND_NAME, BUSINESS_ADDRESS, FACEBOOK_URL } from '../data/siteData';
import { BLOG_POSTS, getComplementaryGuides, getBlogPostUrlPath, getBlogPostNavSlug } from '../data/blogData';
import { linkifyText } from '../utils/linkifyContent';
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
  BookOpen,
  ExternalLink,
  Flame,
  Waves,
  Radio,
  FileText,
  Zap,
  Navigation,
  Award,
  Check
} from 'lucide-react';
import { SidebarDispatchForm } from './SidebarDispatchForm';

const LAS_VEGAS_DISTRICTS = [
  {
    name: 'Northwest & Lone Mountain',
    slug: 'las-vegas',
    zip: '89129 / 89108',
    crossStreets: '3320 N Pioneer Way, W Cheyenne Ave, Durango Dr & Lone Mountain',
    etaMinutes: 'Priority Local',
    activeVans: 'NW Dispatch HQ',
    soilType: 'Compacted Caliche Hardpan & Alluvial Fan',
    pipeRisk: 'Post-Tension Slab Pinholes & 80+ PSI PRV Mains',
    utilityOffice: 'LVVWD High-Bill Leak Credit Logs'
  },
  {
    name: 'Centennial Hills & Skye Canyon',
    slug: 'centennial-hills',
    zip: '89131 / 89149',
    crossStreets: 'N Durango Dr, Centennial Pkwy, US-95 & Skye Canyon Park Dr',
    etaMinutes: 'Priority Local',
    activeVans: 'North Corridor',
    soilType: 'Upper Valley Gravel & Cemented Caliche',
    pipeRisk: 'Foothill Booster Pressure & Yard Irrigation Lines',
    utilityOffice: 'LVVWD Tier-3 Excess Usage Reports'
  },
  {
    name: 'Summerlin & The Lakes',
    slug: 'summerlin-south',
    zip: '89117 / 89135 / 89144',
    crossStreets: 'Sahara Ave, Charleston Blvd, Town Center Dr & Lake Sahara',
    etaMinutes: 'Priority Local',
    activeVans: 'West Valley',
    soilType: 'Caliche Rock Strata & Foothill Limestone',
    pipeRisk: 'Pool Plumbing, Copper Abrasion & Drip Mains',
    utilityOffice: 'LVVWD & HOA Leak Certificates'
  },
  {
    name: 'Spring Valley & Spanish Trail',
    slug: 'spring-valley-center',
    zip: '89103 / 89113 / 89147',
    crossStreets: 'Rainbow Blvd, Flamingo Rd, Tropicana Ave & Spanish Trail',
    etaMinutes: 'Priority Local',
    activeVans: 'West Central',
    soilType: 'Dense Desert Caliche & Clay Silt',
    pipeRisk: '1980s–2000s Slab Copper & Autofill Pool Loops',
    utilityOffice: 'LVVWD 50% Leak Credit Reports'
  },
  {
    name: 'Downtown, Paradise & Enterprise',
    slug: 'downtown-las-vegas',
    zip: '89101 / 89119 / 89139',
    crossStreets: 'Charleston Blvd, Las Vegas Blvd, Flamingo Rd & Blue Diamond',
    etaMinutes: 'Priority Local',
    activeVans: 'Central / South',
    soilType: 'Gypsum Silt & Compacted Valley Alluvium',
    pipeRisk: 'Aging Galvanized Mains, Commercial & Slab Feeds',
    utilityOffice: 'LVVWD & Southwest Gas Testing'
  }
];

const SYMPTOM_DATA = {
  slab: {
    tabLabel: 'Warm Floor / Slab Moisture',
    title: 'Warm Tile Floor, Sound of Running Water, or Damp Baseboard Underfoot',
    diagnosis: 'Active Sub-Slab Pipe Rupture',
    urgency: 'HIGH PRIORITY • 24/7 Dispatch',
    equipment: 'Acoustic Ground Geophones & FLIR Infrared Thermal Imager',
    action: 'Turn off your main shutoff valve near the garage or front yard hose bib. Avoid breaking flooring until ultrasonic sensors isolate the exact leak spot.',
    costRange: '$195 – $345 Non-Invasive Diagnostic',
    rebate: 'Documentation formatted for LVVWD leak credits & insurance claims'
  },
  pool: {
    tabLabel: 'Pool / Spa Water Loss',
    title: 'Pool or Spa Losing More Than 1/2 Inch of Water in 24 Hours',
    diagnosis: 'Swimming Pool Underground Suction, Return, or Skimmer Leak',
    urgency: 'MODERATE URGENCY • Same-Day Service',
    equipment: 'Submersible Hydrophone Acoustic Sensor & Heavy-Dye Syringes',
    action: 'Run the bucket test (mark water level inside and outside a bucket on pool steps). Do not drain your pool prematurely in Las Vegas desert heat, as empty plaster shells can crack.',
    costRange: '$275 – $395 Complete Hydrophone Diagnostic',
    rebate: 'Certified inspection report provided for water utility reviews'
  },
  gas: {
    tabLabel: 'Rotten Egg / Gas Odor',
    title: 'Rotten-Egg Sulfur Odor or Hissing Natural Gas Line',
    diagnosis: 'Combustible Natural Gas Hazard',
    urgency: 'CRITICAL EMERGENCY • Immediate Action Required',
    equipment: 'Digital PPM Combustible Gas Sniffing Wand & Manometer Drop Test',
    action: 'Evacuate all family members and pets outside immediately. Do not flip switches or use phones indoors. Call 911 / Southwest Gas at (877) 860-6020, then call (725) 313-0108 from outside.',
    costRange: 'Emergency Diagnostic & Immediate Safety Shutoff',
    rebate: 'Certified pressure testing for Southwest Gas meter unlocks'
  },
  meter: {
    tabLabel: 'High LVVWD Bill / Meter Spin',
    title: 'LVVWD Water Meter Dial Spinning or Sudden Utility Bill Spike',
    diagnosis: 'Underground Potable Main Line or Irrigation Breach',
    urgency: 'HIGH PRIORITY • 24/7 Las Vegas Response',
    equipment: 'Nitrogen Tracer Gas Pressurization & Line Pressure Decay Gauges',
    action: 'Check if the low-flow indicator on your Las Vegas Valley Water District (LVVWD) meter spins with all indoor taps off. If yes, water is escaping underground before the house.',
    costRange: '$195 – $325 Yard & Main Line Diagnostic',
    rebate: 'Official repair report eligible for LVVWD 50% leak credit review'
  }
};

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
  const [selectedAreaIdx, setSelectedAreaIdx] = useState<number>(0);
  const [activeSymptomTab, setActiveSymptomTab] = useState<'slab' | 'pool' | 'gas' | 'meter'>('slab');

  useEffect(() => {
    setImgHasError(false);
  }, [page.slug, page.featuredImage]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Helper to render text with contextual multi-target hub-and-spoke internal links
  const renderParagraphWithLinks = (text: string) => {
    return linkifyText(text, page.slug, onNavigate, 3);
  };

  return (
    <article className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* Breadcrumb Navigation (Nevada > Clark County > Las Vegas, NV) */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
            {page.slug === '' ? (
              <>
                <span className="font-semibold text-slate-700">Nevada</span>
                <span className="text-slate-300">&gt;</span>
                <span className="text-slate-500">Clark County</span>
                <span className="text-slate-300">&gt;</span>
                <span className="text-slate-900 font-semibold" aria-current="page">
                  Las Vegas, NV
                </span>
              </>
            ) : (
              <>
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); onNavigate(''); }}
                  className="hover:text-[#1E70B8] transition-colors"
                >
                  Las Vegas, NV
                </a>
                <span className="text-slate-300">&gt;</span>
                <span className="text-slate-400">
                  {page.type === 'service'
                    ? 'Leak Services'
                    : page.type === 'location'
                    ? 'Las Vegas Neighborhoods'
                    : 'Information'}
                </span>
                <span className="text-slate-300">&gt;</span>
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
              <h1 id="hero-headline" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-4 font-display">
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
                    <p id="direct-answer-summary" className="text-xs sm:text-sm text-slate-800 leading-relaxed speakable-answer">
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
                  3320 N Pioneer Way, Las Vegas, NV 89129, USA
                </span>
              </div>

            </div>

            {/* Right Column: Featured Image Asset */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group h-72 sm:h-96">
                {page.featuredImage && !imgHasError ? (
                  <picture>
                    {page.slug === '' && (
                      <source
                        media="(max-width: 640px)"
                        srcSet="/images/hero_emergency_plumbing_mobile.webp"
                        type="image/webp"
                      />
                    )}
                    <img
                      src={page.featuredImage}
                      srcSet={
                        page.slug === ''
                          ? '/images/hero_emergency_plumbing_mobile.webp 480w, /images/hero_emergency_plumbing_1791566119640.webp 720w'
                          : undefined
                      }
                      sizes="(max-width: 640px) calc(100vw - 32px), 520px"
                      alt={page.imageAlt || page.name}
                      width={720}
                      height={402}
                      className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      // @ts-ignore
                      fetchPriority="high"
                      decoding="async"
                      onError={() => setImgHasError(true)}
                    />
                  </picture>
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
                    Active water leaks, sub-slab ruptures, and combustible gas odors require instantaneous human triage. Call our 24/7 dispatch desk at <a href={PHONE_HREF} className="text-[#1E70B8] font-bold underline font-mono">{PHONE_NUMBER}</a> for rapid contractor matching in Las Vegas, NV.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0F2942] text-amber-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">24/7 Emergency Line</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Staffed 24/7/365 for Las Vegas</p>
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
                      <h4 className="text-sm font-bold text-slate-900 font-display">Business Office</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Operations &amp; dispatch desk</p>
                    </div>
                    <div className="text-xs font-semibold text-slate-800 leading-snug">
                      3320 N Pioneer Way<br />Las Vegas, NV 89129, USA
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">Target Service Area</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Las Vegas, Nevada</p>
                    </div>
                    <div className="text-xs font-semibold text-emerald-700">
                      89129 • 89131 • 89117 • 89103 • 89101
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
                      <span>Las Vegas Coverage &amp; Office Location</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Las Vegas Office &amp; Service Location Map
                    </h3>
                  </div>
                  <div className="text-xs text-slate-600 sm:text-right">
                    <span className="font-semibold text-slate-900 block font-mono">3320 N Pioneer Way</span>
                    <span>Las Vegas, NV 89129, USA</span>
                  </div>
                </div>

                {/* NAP Summary Card */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium uppercase tracking-wider text-[10px]">Business Name</span>
                    <strong className="text-slate-900 block mt-0.5">{BRAND_NAME}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium uppercase tracking-wider text-[10px]">Business Address</span>
                    <strong className="text-slate-900 block mt-0.5">3320 N Pioneer Way, Las Vegas, NV 89129, USA</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium uppercase tracking-wider text-[10px]">Telephone &amp; Hours</span>
                    <strong className="text-slate-900 block mt-0.5 font-mono">{PHONE_NUMBER} • Open 24/7</strong>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our 24/7 dispatch network coordinates NSCB-licensed leak detection specialists across every Las Vegas, Nevada neighborhood—including Northwest Las Vegas &amp; Lone Mountain (89129), Centennial Hills (89131 / 89149), Summerlin (89135 / 89144), The Lakes (89117), Spring Valley (89103 / 89147), Spanish Trail (89113), Rhodes Ranch (89148), Paradise, and Downtown Las Vegas (89101).
                </p>

                {/* Embedded Responsive Google Map */}
                <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.55253740328982!2d-115.25570745871762!3d36.22080137257216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8ea96bd901a2f%3A0x48f8a82a7d050fb0!2s3320%20N%20Pioneer%20Way%2C%20Las%20Vegas%2C%20NV%2089129%2C%20USA!5e1!3m2!1sen!2s!4v1795719229002!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Las Vegas Leak Detection Services - 3320 N Pioneer Way, Las Vegas, NV 89129, USA"
                    className="w-full h-full"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Las Vegas Coverage: 89129, 89131, 89117, 89103, 89135, 89148 &amp; Metro ZIPs</span>
                  </div>
                  <a
                    href={PHONE_HREF}
                    className="text-[#1E70B8] hover:underline font-bold"
                  >
                    Call (725) 313-0108 for Las Vegas Dispatch →
                  </a>
                </div>
              </section>
            )}

            {/* OFFICIAL FACEBOOK LINK (On Contact & NAP page) */}
            {page.type === 'contact' && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 font-display">
                        Official Facebook Page
                      </h4>
                      <p className="text-xs text-slate-500">
                        Follow {BRAND_NAME} for Las Vegas emergency prevention tips and desert slab/pool leak alerts.
                      </p>
                    </div>
                  </div>

                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs shadow-xs transition-colors shrink-0"
                  >
                    <span>Visit Facebook Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </section>
            )}
            {/* HOMEPAGE RANKING AUTHORITY: LAS VEGAS NEIGHBORHOODS & LOCAL DISPATCH EXPLORER */}
            {page.slug === '' && (
              <section id="las-vegas-areas" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                    <Navigation className="w-4 h-4 text-amber-500" />
                    <span>Las Vegas, Nevada Coverage • 89129 HQ &amp; Metro Valley</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    Las Vegas Neighborhood Leak Detection &amp; Dispatch Explorer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Select any Las Vegas area below to inspect local desert caliche soil conditions, post-tension slab pipe risks, and LVVWD excess-leak credit documentation support:
                  </p>
                </div>

                {/* Las Vegas District Selector Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {LAS_VEGAS_DISTRICTS.map((nh, idx) => (
                    <button
                      key={nh.slug}
                      onClick={() => setSelectedAreaIdx(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedAreaIdx === idx
                          ? 'border-[#1E70B8] bg-blue-50/70 ring-2 ring-blue-500/20 text-slate-900'
                          : 'border-slate-200 bg-slate-50/70 hover:bg-white text-slate-700'
                      }`}
                    >
                      <span className="block text-xs font-bold font-display leading-snug">{nh.name}</span>
                      <span className="text-[11px] font-semibold text-[#1E70B8]">{nh.zip}</span>
                    </button>
                  ))}
                </div>

                {/* Selected District Data Card */}
                {(() => {
                  const area = LAS_VEGAS_DISTRICTS[selectedAreaIdx] || LAS_VEGAS_DISTRICTS[0];
                  return (
                    <div className="bg-linear-to-br from-slate-900 to-[#0F2942] rounded-xl p-5 text-white space-y-4 shadow-sm border border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-700/80">
                        <div>
                          <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase tracking-wider">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{area.name} ({area.zip})</span>
                          </div>
                          <div className="text-xs text-slate-300 mt-0.5">
                            Corridors: {area.crossStreets}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            {area.activeVans}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                            {area.etaMinutes}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                          <span className="text-slate-400 block mb-1 font-medium">Local Soil &amp; Geology:</span>
                          <span className="text-slate-200 font-bold">{area.soilType}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                          <span className="text-slate-400 block mb-1 font-medium">Primary Pipe Risk:</span>
                          <span className="text-slate-200 font-bold">{area.pipeRisk}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                          <span className="text-slate-400 block mb-1 font-medium">Utility Documentation:</span>
                          <span className="text-slate-200 font-bold">{area.utilityOffice}</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <a
                          href={`/${area.slug}/`}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(area.slug);
                          }}
                          className="text-xs font-bold text-[#38BDF8] hover:text-white flex items-center gap-1"
                        >
                          <span>View {area.name} Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={PHONE_HREF}
                          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
                        >
                          <Phone className="w-3.5 h-3.5 text-slate-950" />
                          <span>Dispatch Tech to Las Vegas</span>
                        </a>
                      </div>
                    </div>
                  );
                })()}

                {/* Complete Las Vegas Neighborhood Links (Zero Orphan Pages) */}
                <div className="pt-2 border-t border-slate-200 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                      Dedicated Las Vegas, NV Service Area Pages
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Serving 89129, 89131, 89117, 89103, 89135, 89148 &amp; Metro Las Vegas
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Northwest & Lone Mountain (89129)', slug: 'las-vegas' },
                      { label: 'Centennial Hills (89131 / 89149)', slug: 'centennial-hills' },
                      { label: 'Downtown Las Vegas (89101)', slug: 'downtown-las-vegas' },
                      { label: 'Paradise & Enterprise (89123)', slug: 'paradise-enterprise' },
                      { label: 'Spring Valley Core (89103)', slug: 'spring-valley-center' },
                      { label: 'Summerlin South (89135)', slug: 'summerlin-south' },
                      { label: 'The Lakes & Peccole (89117)', slug: 'the-lakes' },
                      { label: 'Spanish Trail (89113)', slug: 'spanish-trail' },
                      { label: 'Rhodes Ranch (89148)', slug: 'rhodes-ranch' },
                    ].map((city) => (
                      <a
                        key={city.slug}
                        href={`/${city.slug}/`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(city.slug);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#0F2942] text-slate-800 hover:text-white text-xs font-semibold border border-slate-200 transition-colors"
                      >
                        {city.label}
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* HOMEPAGE RANKING AUTHORITY: EMERGENCY SYMPTOM TRIAGE MATRIX */}
            {page.slug === '' && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                    <Radio className="w-4 h-4 text-amber-500" />
                    <span>Emergency Diagnostic Triage</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    What Type of Leak Are You Experiencing in Las Vegas?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Select your symptoms below for immediate diagnostic protocols, safety steps, and pricing guidance:
                  </p>
                </div>

                {/* Symptom Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                  {(['slab', 'pool', 'gas', 'meter'] as const).map((tabKey) => {
                    const tab = SYMPTOM_DATA[tabKey];
                    const isActive = activeSymptomTab === tabKey;
                    return (
                      <button
                        key={tabKey}
                        onClick={() => setActiveSymptomTab(tabKey)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-[#0F2942] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {tabKey === 'slab' && <Wrench className="w-3.5 h-3.5 text-amber-400" />}
                        {tabKey === 'pool' && <Waves className="w-3.5 h-3.5 text-sky-400" />}
                        {tabKey === 'gas' && <Flame className="w-3.5 h-3.5 text-rose-400" />}
                        {tabKey === 'meter' && <Droplets className="w-3.5 h-3.5 text-emerald-400" />}
                        <span>{tab.tabLabel}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Symptom Card */}
                {(() => {
                  const sym = SYMPTOM_DATA[activeSymptomTab];
                  return (
                    <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                        <div>
                          <span className="text-xs font-semibold text-slate-500 block">Identified Condition:</span>
                          <h4 className="text-base font-bold text-slate-900 font-display">{sym.diagnosis}</h4>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
                          {sym.urgency}
                        </span>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p className="font-semibold text-slate-900">
                          {sym.title}
                        </p>
                        <div className="p-3.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900">
                          <strong className="block text-xs uppercase tracking-wider text-amber-800 mb-1">Recommended Immediate Action:</strong>
                          <span>{sym.action}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                        <div className="p-3 rounded-lg bg-white border border-slate-200">
                          <span className="text-slate-500 block mb-0.5">Diagnostic Equipment:</span>
                          <span className="font-bold text-slate-800">{sym.equipment}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-white border border-slate-200">
                          <span className="text-slate-500 block mb-0.5">Diagnostic Cost Guidance:</span>
                          <span className="font-bold text-emerald-700">{sym.costRange}</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <span className="text-xs text-slate-600 flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{sym.rebate}</span>
                        </span>
                        <a
                          href={PHONE_HREF}
                          className="px-5 py-2.5 bg-[#1E70B8] hover:bg-blue-600 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Call Dispatch: {PHONE_NUMBER}</span>
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </section>
            )}

            {/* HOMEPAGE RANKING AUTHORITY: WHY NON-INVASIVE BEATS CONVENTIONAL PLUMBERS */}
            {page.slug === '' && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>The Non-Invasive Advantage</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    {BRAND_NAME} Specialists vs. Conventional General Plumbers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Why working with a dedicated electronic leak detection specialist protects Las Vegas homeowners from destructive exploratory demolition:
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-[#0F2942] text-white">
                      <tr>
                        <th className="py-3 px-4 font-bold">Diagnostic Capability</th>
                        <th className="py-3 px-4 font-bold text-amber-300">{BRAND_NAME}</th>
                        <th className="py-3 px-4 font-bold text-slate-300">Conventional General Plumbers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Post-Tension Concrete Slab Pinpointing</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Ultrasonic sensors locate leak within inches (minimal access)</td>
                        <td className="py-3 px-4 text-slate-600">Guesswork jackhammering or tearing up tile flooring</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Swimming Pool &amp; Spa Diagnostics</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Submersible hydrophones + dye test without draining pool</td>
                        <td className="py-3 px-4 text-slate-600">Require full draining (risking plaster cracks in desert heat)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">24/7 Las Vegas Dispatch</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">24/7 dispatch across 89129 &amp; all Las Vegas Valley ZIPs</td>
                        <td className="py-3 px-4 text-slate-600">Limited weekday hours or multi-day wait times</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">LVVWD Leak Credit Documentation</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Detailed reports formatted for LVVWD 50% leak credits</td>
                        <td className="py-3 px-4 text-slate-600">Basic receipt often missing required repair details</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Caliche Yard &amp; Main Line Tracing</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Acoustic correlation &amp; tracer gas minimize trenching</td>
                        <td className="py-3 px-4 text-slate-600">Wide backhoe trenching across desert yard or driveway</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* HOMEPAGE TOPICAL AUTHORITY MATRIX: LAS VEGAS PIPE METALLURGY, SOIL & DIAGNOSTIC BENCHMARKS */}
            {page.slug === '' && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                    <Radio className="w-4 h-4 text-amber-500" />
                    <span>Las Vegas Plumbing Engineering Reference</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    Pipe Material, Desert Soil &amp; Non-Invasive Diagnostic Protocol Matrix
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Different pipe materials across Las Vegas neighborhoods fail for distinct chemical and mechanical reasons. Dispatched technicians match instrumentation directly to each line type:
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="py-3 px-4 font-bold">System &amp; Pipe Material</th>
                        <th className="py-3 px-4 font-bold">Primary Las Vegas Failure Driver</th>
                        <th className="py-3 px-4 font-bold">Electronic Diagnostic Method</th>
                        <th className="py-3 px-4 font-bold text-amber-300">Permanent Fix Option</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Sub-Slab Type-L / Type-M Copper</td>
                        <td className="py-3 px-4 text-slate-600">Hard-water pitting (16–22 GPG), caliche rock abrasion &amp; 80+ PSI surge</td>
                        <td className="py-3 px-4 text-slate-800 font-medium">FLIR thermal scan + ultrasonic ground geophone</td>
                        <td className="py-3 px-4 text-[#1E70B8] font-semibold">
                          <a href="/blog/post-tension-slab-leak-repair-las-vegas-pex-reroute/" onClick={(e) => { e.preventDefault(); onNavigate('blog/post-tension-slab-leak-repair-las-vegas-pex-reroute'); }} className="hover:underline">
                            Overhead PEX-A Re-Route or Spot Patch
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Schedule-40 PVC Pool &amp; Spa Lines</td>
                        <td className="py-3 px-4 text-slate-600">Caliche deck shifting, skimmer throat cracks &amp; brittle glue joints</td>
                        <td className="py-3 px-4 text-slate-800 font-medium">Submersible hydrophone + pneumatic line plugs + dye</td>
                        <td className="py-3 px-4 text-[#1E70B8] font-semibold">
                          <a href="/pool-leak-detection/" onClick={(e) => { e.preventDefault(); onNavigate('pool-leak-detection'); }} className="hover:underline">
                            Surgical Deck/Skimmer Seal (Pool Full)
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Black Iron &amp; CSST Natural Gas</td>
                        <td className="py-3 px-4 text-slate-600">Unbonded CSST stress, corroded yard risers &amp; dry union thread seals</td>
                        <td className="py-3 px-4 text-slate-800 font-medium">PPM combustible gas sniffer + digital manometer test</td>
                        <td className="py-3 px-4 text-[#1E70B8] font-semibold">
                          <a href="/blog/southwest-gas-meter-red-tag-pressure-test-las-vegas/" onClick={(e) => { e.preventDefault(); onNavigate('blog/southwest-gas-meter-red-tag-pressure-test-las-vegas'); }} className="hover:underline">
                            NSCB C-1 Repair &amp; Green-Tag Unlock
                          </a>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Curb-to-Home Water &amp; Drip Mains</td>
                        <td className="py-3 px-4 text-slate-600">Gypsum silt corrosion, tree root squeeze &amp; driveway settlement</td>
                        <td className="py-3 px-4 text-slate-800 font-medium">95/5 Nitrogen-Hydrogen tracer gas + pipe sonde</td>
                        <td className="py-3 px-4 text-[#1E70B8] font-semibold">
                          <a href="/underground-leak-detection/" onClick={(e) => { e.preventDefault(); onNavigate('underground-leak-detection'); }} className="hover:underline">
                            Single-Pit Spot Fix or Trenchless Pull
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* HOMEPAGE VERIFIABLE TRUST SIGNALS: LICENSING, DISPATCH & DIAGNOSTIC SPECS */}
            {page.slug === '' && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Verifiable Licensing, Dispatch &amp; Equipment Standards</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Las Vegas Diagnostic Benchmarks &amp; NSCB Compliance
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0F2942] uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Nevada State Contractors Board (NSCB)</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Dispatch referrals strictly adhere to active Nevada State Contractors Board C-1 plumbing and contractor licensing standards, liability coverage, and City of Las Vegas / Clark County plumbing codes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0F2942] uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>24/7 Las Vegas Dispatch Desk</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Routing urgent water, slab, pool, irrigation, and gas calls across Northwest Las Vegas (89129), Centennial Hills, Summerlin, The Lakes, Spring Valley, Spanish Trail, Rhodes Ranch, Paradise, and Downtown.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0F2942] uppercase tracking-wider">
                      <Radio className="w-4 h-4 text-[#1E70B8]" />
                      <span>Ultrasonic Acoustic &amp; Thermal Specs</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Equipped with amplified ground geophones, FLIR infrared cameras, safe hydrogen-nitrogen tracer gas, and submersible pool hydrophones to isolate leaks non-invasively.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0F2942] uppercase tracking-wider">
                      <FileText className="w-4 h-4 text-sky-600" />
                      <span>Gas PPM &amp; LVVWD Utility Reports</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Calibrated PPM combustible gas sniffers and itemized diagnostic logs formatted for Southwest Gas clearances, insurance claims, and Las Vegas Valley Water District (LVVWD) 50% leak credit reviews.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* QUALITY STANDARDS & NEVADA STATE LICENSURE SECTION */}
            <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider font-display">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Professional Quality Standards</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display">
                Licensed Leak Detection &amp; Repair {page.type === 'location' ? `in ${page.navTitle}` : 'in Las Vegas, Nevada'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {BRAND_NAME} connects Las Vegas property owners with independent, licensed professionals adhering to Nevada State Contractors Board (NSCB) standards and City of Las Vegas municipal plumbing codes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                  <h4 className="text-sm font-bold text-white font-display">
                    Nevada State Licensure
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Dispatched contractors hold active C-1 Plumbing &amp; Heating or specialized leak detection licenses issued and verified by the Nevada State Contractors Board (NSCB).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                  <h4 className="text-sm font-bold text-white font-display">
                    Upfront Itemized Estimates
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Technicians inspect and pinpoint the leak accurately, providing clear itemized quotes before beginning any water, gas, slab, or pool leak repair.
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
                    Questions About {page.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Specific answers to common technical, diagnostic, utility, and pricing inquiries.
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

            {/* CONTEXTUAL INSTITUTIONAL & LEGAL CROSS-LINKS (Guarantees zero orphan legal pages) */}
            {(page.slug === 'disclaimer' || page.slug === 'privacy-policy' || page.slug === 'about' || page.slug === 'how-it-works' || page.slug === 'contact') && (
              <section className="bg-slate-100/90 rounded-2xl p-6 border border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Company & Compliance Directory:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                    <a href="/about/" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className={`text-[#1E70B8] hover:underline ${page.slug === 'about' ? 'font-bold underline' : ''}`}>About Our Network</a>
                    <span className="text-slate-300">•</span>
                    <a href="/how-it-works/" onClick={(e) => { e.preventDefault(); onNavigate('how-it-works'); }} className={`text-[#1E70B8] hover:underline ${page.slug === 'how-it-works' ? 'font-bold underline' : ''}`}>How It Works</a>
                    <span className="text-slate-300">•</span>
                    <a href="/contact/" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className={`text-[#1E70B8] hover:underline ${page.slug === 'contact' ? 'font-bold underline' : ''}`}>Contact & Map</a>
                    <span className="text-slate-300">•</span>
                    <a href="/privacy-policy/" onClick={(e) => { e.preventDefault(); onNavigate('privacy-policy'); }} className={`text-[#1E70B8] hover:underline ${page.slug === 'privacy-policy' ? 'font-bold underline' : ''}`}>Privacy Policy</a>
                    <span className="text-slate-300">•</span>
                    <a href="/disclaimer/" onClick={(e) => { e.preventDefault(); onNavigate('disclaimer'); }} className={`text-[#1E70B8] hover:underline ${page.slug === 'disclaimer' ? 'font-bold underline' : ''}`}>Legal Disclaimer</a>
                    <span className="text-slate-300">•</span>
                    <a href="/sitemap/" onClick={(e) => { e.preventDefault(); onNavigate('sitemap'); }} className="text-[#1E70B8] hover:underline">HTML Sitemap</a>
                  </div>
                </div>
              </section>
            )}

            {/* HTML SITEMAP COMPREHENSIVE DIRECTORY (Guarantees 0 Orphan Pages) */}
            {page.slug === 'sitemap' && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-8">
                <div className="border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E70B8] font-display">
                    <Navigation className="w-4 h-4 text-amber-500" />
                    <span>Complete Website Crawl Index</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                    Full Site Directory & Page Index
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Every published service page, neighborhood dispatch zone, technical diagnostic guide, and company policy is linked below:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category 1: Services */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2942]">
                      <Wrench className="w-4 h-4 text-[#1E70B8]" />
                      <span>Leak Detection Services (6 Pages)</span>
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      <li>
                        <a href="/water-leak-detection/" onClick={(e) => { e.preventDefault(); onNavigate('water-leak-detection'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Water Leak Detection & Repair
                        </a>
                        <span className="text-slate-600">Acoustic listening & thermal infrared imaging for hidden potable pipe leaks.</span>
                      </li>
                      <li>
                        <a href="/slab-leak-detection/" onClick={(e) => { e.preventDefault(); onNavigate('slab-leak-detection'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Slab Leak Detection & Repair
                        </a>
                        <span className="text-slate-600">Locating sub-concrete foundation copper pipe pinholes without jackhammering.</span>
                      </li>
                      <li>
                        <a href="/pool-leak-detection/" onClick={(e) => { e.preventDefault(); onNavigate('pool-leak-detection'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Pool Leak Detection & Repair
                        </a>
                        <span className="text-slate-600">Hydrophone acoustic listening & dye testing for swimming pools & spas.</span>
                      </li>
                      <li>
                        <a href="/gas-leak-detection/" onClick={(e) => { e.preventDefault(); onNavigate('gas-leak-detection'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Gas Leak Detection & Emergency Repair
                        </a>
                        <span className="text-slate-600">24/7 PPM digital sniffing for hazardous natural gas & propane pipe leaks.</span>
                      </li>
                      <li>
                        <a href="/underground-leak-detection/" onClick={(e) => { e.preventDefault(); onNavigate('underground-leak-detection'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Underground & Yard Pipe Leaks
                        </a>
                        <span className="text-slate-600">Main potable lines & pressurized irrigation manifold diagnostics.</span>
                      </li>
                      <li>
                        <a href="/emergency-leak-repair/" onClick={(e) => { e.preventDefault(); onNavigate('emergency-leak-repair'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          24/7 Emergency Leak Diagnostics
                        </a>
                        <span className="text-slate-600">24/7 rapid on-site technician response in Las Vegas, NV.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2: Las Vegas Neighborhoods & Service Areas */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2942]">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      <span>Las Vegas Neighborhoods &amp; Service Areas (9 Pages)</span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      {[
                        { slug: 'las-vegas', title: 'Northwest Las Vegas & Lone Mountain (89129 / 89108)', desc: '3320 N Pioneer Way HQ corridor, Cheyenne, Durango & Lone Mountain.' },
                        { slug: 'centennial-hills', title: 'Centennial Hills & Skye Canyon (89131 / 89149)', desc: 'North Valley booster zones, custom pools & irrigation lines.' },
                        { slug: 'downtown-las-vegas', title: 'Downtown Las Vegas & Charleston Historic (89101 / 89104)', desc: 'Older copper/galvanized mains & commercial plumbing diagnostics.' },
                        { slug: 'paradise-enterprise', title: 'Paradise, Silverado Ranch & Enterprise (89119 / 89123 / 89139)', desc: 'South/Central Las Vegas slabs, pools & multi-unit water lines.' },
                        { slug: 'spring-valley-center', title: 'Spring Valley Core & Rainbow Corridor (89103 / 89147)', desc: 'Rainbow Blvd & Flamingo Rd residential slabs and pool leaks.' },
                        { slug: 'the-lakes', title: 'The Lakes & Peccole Ranch (89117)', desc: 'Lake Sahara waterfront homes & backyard pool diagnostics.' },
                        { slug: 'spanish-trail', title: 'Spanish Trail Estates (89113)', desc: 'Guard-gated estate pool plumbing & expansive post-tension slabs.' },
                        { slug: 'summerlin-south', title: 'Summerlin South (89135 / 89148)', desc: 'Foothill caliche strata pipe protection & modern slab systems.' },
                        { slug: 'rhodes-ranch', title: 'Rhodes Ranch (89148)', desc: 'Southwest Las Vegas golf-course homes, pools & autofill valves.' },
                      ].map((loc) => (
                        <li key={loc.slug}>
                          <a href={`/${loc.slug}/`} onClick={(e) => { e.preventDefault(); onNavigate(loc.slug); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                            {loc.title}
                          </a>
                          <span className="text-slate-600">{loc.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category 3: Technical Guides */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2942]">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>Technical Leak Guides & Blog ({BLOG_POSTS.length + 1} Pages)</span>
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      <li>
                        <a href="/blog/" onClick={(e) => { e.preventDefault(); onNavigate('blog'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Leak Knowledge Base Main Hub
                        </a>
                        <span className="text-slate-600">All DIY diagnostic procedures, cost guides & utility rebate information.</span>
                      </li>
                      {BLOG_POSTS.map((post) => (
                        <li key={post.id}>
                          <a
                            href={getBlogPostUrlPath(post)}
                            onClick={(e) => {
                              e.preventDefault();
                              onNavigate(getBlogPostNavSlug(post));
                            }}
                            className="font-bold text-[#1E70B8] hover:underline block text-sm"
                          >
                            {post.title}
                          </a>
                          <span className="text-slate-600">{post.excerpt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Category 4: Company & Legal */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2942]">
                      <ShieldCheck className="w-4 h-4 text-sky-600" />
                      <span>Company Information & Compliance (7 Pages)</span>
                    </div>
                    <ul className="space-y-2.5 text-xs">
                      <li>
                        <a href="/" onClick={(e) => { e.preventDefault(); onNavigate(''); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Overview (Homepage)
                        </a>
                        <span className="text-slate-600">Main hub for 24/7 non-invasive leak detection in Las Vegas, NV.</span>
                      </li>
                      <li>
                        <a href="/how-it-works/" onClick={(e) => { e.preventDefault(); onNavigate('how-it-works'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          How It Works
                        </a>
                        <span className="text-slate-600">Our 5-step acoustic and infrared non-invasive inspection process.</span>
                      </li>
                      <li>
                        <a href="/about/" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          About Our Team & Network
                        </a>
                        <span className="text-slate-600">Pre-screened, licensed Nevada State Contractors Board plumbing network.</span>
                      </li>
                      <li>
                        <a href="/contact/" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Contact & Location Details
                        </a>
                        <span className="text-slate-600">3320 N Pioneer Way, Las Vegas, NV 89129, USA • Phone: (725) 313-0108.</span>
                      </li>
                      <li>
                        <a href="/privacy-policy/" onClick={(e) => { e.preventDefault(); onNavigate('privacy-policy'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Privacy Policy
                        </a>
                        <span className="text-slate-600">Consumer data privacy, encryption, and TCPA telephone compliance.</span>
                      </li>
                      <li>
                        <a href="/disclaimer/" onClick={(e) => { e.preventDefault(); onNavigate('disclaimer'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          Legal Disclaimer & Licensing
                        </a>
                        <span className="text-slate-600">Independent contractor terms, licensing disclosures, and warranties.</span>
                      </li>
                      <li>
                        <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          XML Sitemap (Feed for Googlebot)
                        </a>
                        <span className="text-slate-600">Standard XML protocol feed listing all verified canonical URLs.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* COMPLEMENTARY TECHNICAL LEAK GUIDES & DIAGNOSTICS (Non-Duplicated Homepage Links) */}
            {page.slug === '' ? (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 font-display">
                      <BookOpen className="w-4 h-4 text-amber-600" />
                      <span>Homeowner Diagnostic Knowledge Base</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                      Additional Leak Prevention &amp; Utility Guides
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
                    <span>View All {BLOG_POSTS.length} Guides</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {getComplementaryGuides().map((post) => (
                    <a
                      key={post.id}
                      href={getBlogPostUrlPath(post)}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(getBlogPostNavSlug(post));
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
              <section className="bg-amber-50/80 rounded-2xl p-6 sm:p-8 border border-amber-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 font-display">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                    <span>Supporting Diagnostic &amp; Cost Guides (Topic Cluster)</span>
                  </div>
                  <a
                    href="/blog/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('blog');
                    }}
                    className="text-xs font-bold text-[#1E70B8] hover:underline flex items-center gap-1"
                  >
                    <span>All {BLOG_POSTS.length} Guides</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
                {(() => {
                  const clusterSlugsMap: Record<string, string[]> = {
                    'pool-leak-detection': [
                      'how-swimming-pool-bucket-test-works',
                      'pool-irrigation-leak-detection-spring-valley',
                      'how-to-get-lvvwd-leak-credit-water-bill',
                    ],
                    'gas-leak-detection': [
                      'what-to-do-when-you-smell-gas',
                      'southwest-gas-meter-red-tag-pressure-test-las-vegas',
                      'spring-valley-leak-detection-guide',
                    ],
                    'slab-leak-detection': [
                      'signs-of-slab-leak-in-las-vegas-homes',
                      'post-tension-slab-leak-repair-las-vegas-pex-reroute',
                      'desert-caliche-soil-pipe-damage',
                    ],
                    'underground-leak-detection': [
                      'desert-caliche-soil-pipe-damage',
                      'how-to-read-water-meter-for-hidden-leaks',
                      'how-to-get-lvvwd-leak-credit-water-bill',
                    ],
                    'emergency-leak-repair': [
                      'what-to-do-when-you-smell-gas',
                      'how-to-read-water-meter-for-hidden-leaks',
                      'post-tension-slab-leak-repair-las-vegas-pex-reroute',
                    ],
                  };
                  const targetSlugs = clusterSlugsMap[page.slug] || [
                    'how-to-read-water-meter-for-hidden-leaks',
                    'how-to-get-lvvwd-leak-credit-water-bill',
                    'spring-valley-leak-detection-guide',
                  ];
                  const matchedPosts = targetSlugs
                    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
                    .filter((p): p is NonNullable<typeof p> => Boolean(p));

                  if (matchedPosts.length === 0) return null;

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {matchedPosts.map((matchedPost) => (
                        <a
                          key={matchedPost.id}
                          href={getBlogPostUrlPath(matchedPost)}
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(getBlogPostNavSlug(matchedPost));
                          }}
                          className="bg-white rounded-xl p-4 border border-amber-200/80 hover:border-[#1E70B8] shadow-xs flex flex-col justify-between gap-3 group no-underline text-inherit transition-all"
                        >
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                              {matchedPost.category} • {matchedPost.readTime}
                            </span>
                            <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#1E70B8] font-display leading-snug line-clamp-2">
                              {matchedPost.title}
                            </h3>
                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                              {matchedPost.excerpt}
                            </p>
                          </div>
                          <span className="text-xs font-bold text-[#1E70B8] flex items-center gap-1 pt-2 border-t border-slate-100">
                            <span>Read Guide</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </a>
                      ))}
                    </div>
                  );
                })()}
              </section>
            ) : null}

            {/* FINAL URGENT CONVERSION CTA BANNER */}
            <section className="p-8 rounded-2xl bg-linear-to-br from-[#0F2942] to-slate-900 text-white space-y-6 shadow-xl">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                  24/7 Las Vegas, NV Dispatch
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
                  Need Immediate Help With {page.name}?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Protect your Las Vegas property from costly water, gas, slab, or pool damage. Connect 24/7 with NSCB-licensed specialists equipped with non-invasive diagnostic tools.
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
              currentLocationName={page.type === 'location' ? page.navTitle : 'Las Vegas, NV'}
              currentServiceType={page.type === 'service' ? page.name : 'Water Leak (Indoor / Wall)'}
            />

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
              
              {/* Educational Blog Callout in Sidebar */}
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
                  Step-by-step DIY diagnostic procedures, Nevada leak cost guides, and utility leak credit steps.
                </p>
                {page.slug === '' ? (
                  <a
                    href="/blog/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('blog');
                    }}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-slate-50 border border-amber-200/70 hover:border-[#1E70B8] text-xs font-bold text-[#0F2942] transition-colors no-underline"
                  >
                    <span>Browse All {BLOG_POSTS.length} Homeowner Guides</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1E70B8]" />
                  </a>
                ) : (
                  <div className="space-y-2 pt-1 border-t border-amber-200/60">
                    {BLOG_POSTS.slice(0, 3).map((post) => (
                      <a
                        key={post.id}
                        href={getBlogPostUrlPath(post)}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(getBlogPostNavSlug(post));
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
                )}
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

              {/* Related Las Vegas Service Areas Box */}
              {page.relatedLocations && page.relatedLocations.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                    Las Vegas Service Areas
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
                  <span>Explore all neighborhoods and services on our </span>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('');
                    }}
                    className="text-[#1E70B8] font-bold hover:underline"
                  >
                    Las Vegas leak detection
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
