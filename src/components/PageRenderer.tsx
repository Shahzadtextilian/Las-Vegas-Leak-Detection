import React, { useState, useEffect } from 'react';
import { PageContent, PHONE_NUMBER, PHONE_HREF, BRAND_NAME, BUSINESS_ADDRESS, FACEBOOK_URL } from '../data/siteData';
import { BLOG_POSTS, getComplementaryGuides, getBlogPostUrlPath, getBlogPostNavSlug } from '../data/blogData';
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

const NEVADA_CITY_REGIONS = [
  {
    name: 'Las Vegas & Paradise Metro',
    slug: 'las-vegas',
    zip: '89101–89149',
    crossStreets: 'Downtown, Paradise, Enterprise, Summerlin & Centennial Hills',
    etaMinutes: '30–45 Min',
    activeVans: 'Clark County Metro',
    soilType: 'Dense Caliche Limestone (Grade 4/5)',
    pipeRisk: 'Copper Sub-Slab Pinholes & 80+ PSI Mains',
    utilityOffice: 'LVVWD Tier-3 Leak Credit Filing'
  },
  {
    name: 'Henderson & Green Valley',
    slug: 'henderson',
    zip: '89002–89074',
    crossStreets: 'Green Valley, Anthem, Seven Hills, Inspirada & Lake Las Vegas',
    etaMinutes: '30–50 Min',
    activeVans: 'Southeast Valley',
    soilType: 'Foothill Bedrock & Caliche Strata',
    pipeRisk: 'Hillside PRV Failures & Pool Suction Lines',
    utilityOffice: 'City of Henderson Utilities Credit'
  },
  {
    name: 'North Las Vegas',
    slug: 'north-las-vegas',
    zip: '89030–89086',
    crossStreets: 'Aliante, Eldorado, Craig Ranch, Tule Springs & Apex',
    etaMinutes: '30–50 Min',
    activeVans: 'North Valley',
    soilType: 'Expansive Alluvial Clay & Hardpan',
    pipeRisk: 'Yard Main Breaks & Post-Tension Slab Lines',
    utilityOffice: 'North Las Vegas Utilities Review'
  },
  {
    name: 'Spring Valley & SW Vegas',
    slug: 'spring-valley-center',
    zip: '89103 / 89117 / 89147',
    crossStreets: 'Rainbow Blvd, Flamingo Rd, The Lakes, Spanish Trail & Rhodes Ranch',
    etaMinutes: '20–35 Min',
    activeVans: 'HQ Dispatch Zone',
    soilType: 'Caliche Cementation & High-Mineral Soil',
    pipeRisk: '1980s–2000s Type M Copper & Pool Skimmers',
    utilityOffice: 'LVVWD South/West Valley Direct Filing'
  },
  {
    name: 'Reno & Lake Tahoe',
    slug: 'reno',
    zip: '89501–89523 / 89451',
    crossStreets: 'Midtown, Old Southwest, Damonte Ranch, Somersett, Verdi & Incline Village',
    etaMinutes: '35–60 Min',
    activeVans: 'Truckee Meadows',
    soilType: 'Sierra Granite Alluvium & Valley Clay',
    pipeRisk: 'Winter Freeze-Thaw Bursts & Crawlspace Splits',
    utilityOffice: 'TMWA (Truckee Meadows Water) Support'
  },
  {
    name: 'Sparks & Spanish Springs',
    slug: 'sparks',
    zip: '89431–89441',
    crossStreets: 'Victorian Square, Sparks Marina, Spanish Springs, Wingfield & Sun Valley',
    etaMinutes: '35–60 Min',
    activeVans: 'East Washoe',
    soilType: 'High-Desert Gravel & Frost-Line Clay',
    pipeRisk: 'Long Acreage Yard Mains & Frost-Line PVC',
    utilityOffice: 'TMWA / Washoe County Documentation'
  },
  {
    name: 'Carson City, Minden & Dayton',
    slug: 'carson-city',
    zip: '89701–89706 / 89423',
    crossStreets: 'Carson City, Minden, Gardnerville, Genoa & Dayton',
    etaMinutes: 'Same-Day / 60 Min',
    activeVans: 'Carson Valley',
    soilType: 'Sierra Fault Silt & High Water Table',
    pipeRisk: 'Historic Crawlspace Lines & Ranch Well Mains',
    utilityOffice: 'Carson City Public Works & Well Reports'
  },
  {
    name: 'Pahrump, Mesquite & Elko NV',
    slug: 'elko-rural-nevada',
    zip: '89048 / 89027 / 89801',
    crossStreets: 'Pahrump, Mesquite, Boulder City, Fernley, Fallon, Winnemucca & Elko',
    etaMinutes: 'Priority Regional',
    activeVans: 'Statewide Rural',
    soilType: 'Mojave Caliche to Sub-Zero I-80 Frost',
    pipeRisk: 'Well Pump Short-Cycling & Deep Freeze Mains',
    utilityOffice: 'VVWD / Great Basin / Rural Municipal Filing'
  }
];

const SYMPTOM_DATA = {
  slab: {
    tabLabel: 'Warm Floor / Slab Sound',
    title: 'Warm Tile Floor, Sound of Running Water, or Damp Baseboards',
    diagnosis: 'Active Sub-Slab Foundation Pipe Rupture',
    urgency: 'HIGH PRIORITY • 24/7 Dispatch',
    equipment: 'Acoustic Ground Geophones & FLIR Infrared Thermal Imager',
    action: 'Turn off the main shutoff valve near your garage, curb box, or wellhead. Avoid exploratory jackhammering until ultrasonic sensors isolate the exact leak spot.',
    costRange: '$195 – $345 Non-Invasive Diagnostic',
    rebate: 'Documentation formatted for LVVWD, Henderson & TMWA Leak Credits'
  },
  pool: {
    tabLabel: 'Pool Water Loss',
    title: 'Pool Losing More Than 1/2 Inch of Water in 24 Hours',
    diagnosis: 'Swimming Pool Underground Suction, Return, or Skimmer Leak',
    urgency: 'MODERATE URGENCY • Same-Day Service',
    equipment: 'Submersible Hydrophone Acoustic Sensor & Heavy-Dye Syringes',
    action: 'Run the bucket test (mark water level inside and outside a bucket on pool steps). Do not drain your pool in Nevada heat, as empty plaster shells can crack or pop.',
    costRange: '$275 – $395 Complete Hydrophone Diagnostic',
    rebate: 'Certified inspection report provided for water district reviews'
  },
  gas: {
    tabLabel: 'Rotten Egg / Gas Odor',
    title: 'Rotten-Egg Sulfur Odor or Hissing Gas Line',
    diagnosis: 'Combustible Natural Gas or Propane Hazard',
    urgency: 'CRITICAL EMERGENCY • Immediate Action Required',
    equipment: 'Digital PPM Combustible Gas Sniffing Wand & Manometer Drop Test',
    action: 'Evacuate all family members and pets outside immediately. Do not flip switches or use phones indoors. Call 911 / Southwest Gas / NV Energy, then call (725) 313-0108 from outside.',
    costRange: 'Emergency Diagnostic & Immediate Safety Shutoff',
    rebate: 'Certified pressure testing for Southwest Gas & NV Energy unlocks'
  },
  meter: {
    tabLabel: 'High Bill / Meter Spin',
    title: 'Water Meter Dial Spinning Continuously or Utility Bill Spike',
    diagnosis: 'Underground Potable Main Line, Well Run, or Irrigation Breach',
    urgency: 'HIGH PRIORITY • 24/7 Statewide Response',
    equipment: 'Nitrogen Tracer Gas Pressurization & Line Pressure Decay Gauges',
    action: 'Check if the low-flow triangle on your water meter spins (or well pump cycles) with all indoor taps off. If yes, water is escaping underground before your foundation.',
    costRange: '$195 – $325 Yard Line Diagnostic',
    rebate: 'Official repair report for Nevada water utility bill credits'
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

  // Helper to render text with contextual in-paragraph links
  const renderParagraphWithLinks = (text: string) => {
    const linkReplacements: { phrase: string; slug: string }[] = [
      { phrase: 'Leak Detection NV', slug: '' },
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
      { phrase: 'North Las Vegas', slug: 'north-las-vegas' },
      { phrase: 'Las Vegas', slug: 'las-vegas' },
      { phrase: 'Henderson', slug: 'henderson' },
      { phrase: 'Carson City', slug: 'carson-city' },
      { phrase: 'Boulder City', slug: 'boulder-city' },
      { phrase: 'Reno', slug: 'reno' },
      { phrase: 'Sparks', slug: 'sparks' },
      { phrase: 'Pahrump', slug: 'pahrump' },
      { phrase: 'Mesquite', slug: 'mesquite' },
      { phrase: 'Elko', slug: 'elko-rural-nevada' },
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
      
      {/* Breadcrumb Navigation (Nevada Statewide Hierarchy) */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
            {page.slug === '' ? (
              <>
                <span className="font-semibold text-slate-700">Nevada</span>
                <span className="text-slate-300">&gt;</span>
                <span className="text-slate-900 font-semibold" aria-current="page">
                  All Cities Statewide
                </span>
              </>
            ) : (
              <>
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); onNavigate(''); }}
                  className="hover:text-[#1E70B8] transition-colors"
                >
                  Nevada Statewide
                </a>
                <span className="text-slate-300">&gt;</span>
                {['spring-valley-center', 'the-lakes', 'spanish-trail', 'summerlin-south', 'rhodes-ranch'].includes(page.slug) ? (
                  <>
                    <a
                      href="/las-vegas/"
                      onClick={(e) => { e.preventDefault(); onNavigate('las-vegas'); }}
                      className="hover:text-[#1E70B8] transition-colors"
                    >
                      Clark County
                    </a>
                    <span className="text-slate-300">&gt;</span>
                  </>
                ) : (
                  <>
                    <span className="text-slate-400">
                      {page.type === 'service'
                        ? 'Leak Services'
                        : page.type === 'location'
                        ? 'Nevada Cities'
                        : 'Information'}
                    </span>
                    <span className="text-slate-300">&gt;</span>
                  </>
                )}
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
                  6875 Groveview Ln, Las Vegas, NV 89103
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
                    Active water leaks, freeze-burst pipes, and combustible gas odors require instantaneous human triage. Call our 24/7 dispatch desk at <a href={PHONE_HREF} className="text-[#1E70B8] font-bold underline font-mono">{PHONE_NUMBER}</a> for rapid regional contractor matching anywhere in Nevada.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0F2942] text-amber-400 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">24/7 Emergency Line</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Staffed 24/7/365 statewide</p>
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
                      <h4 className="text-sm font-bold text-slate-900 font-display">Dispatch Headquarters</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Central Las Vegas hub</p>
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
                      <h4 className="text-sm font-bold text-slate-900 font-display">Statewide Coverage</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Southern, Northern &amp; Rural NV</p>
                    </div>
                    <div className="text-xs font-semibold text-emerald-700">
                      Las Vegas • Henderson • Reno • Sparks • Carson City
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
                      <span>Headquarters Address &amp; Statewide Dispatch</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      Nevada Headquarters Location &amp; Map
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
                    <span className="text-slate-400 block font-medium uppercase tracking-wider text-[10px]">Telephone &amp; Hours</span>
                    <strong className="text-slate-900 block mt-0.5 font-mono">{PHONE_NUMBER} • Open 24/7</strong>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Headquartered at 6875 Groveview Ln in Las Vegas, NV 89103, our 24/7 dispatch network matches homeowners and businesses with licensed leak specialists across Las Vegas, Henderson, North Las Vegas, Spring Valley, Reno, Sparks, Carson City, Pahrump, Mesquite, Boulder City, and Elko.
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
                    title="Leak Detection NV Headquarters - 6875 Groveview Ln, Las Vegas, NV 89103"
                    className="w-full h-full"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Statewide Dispatch: Las Vegas Valley, Reno/Tahoe, Carson City, Mesquite, Pahrump &amp; Elko</span>
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
                        Follow Leak Detection NV for statewide emergency prevention tips and seasonal freeze/heat alerts.
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
            {/* HOMEPAGE RANKING AUTHORITY: NEVADA STATEWIDE CITIES & REGIONAL DISPATCH ESTIMATOR */}
            {page.slug === '' && (
              <section id="nevada-cities" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1E70B8] uppercase tracking-wider font-display mb-1">
                    <Navigation className="w-4 h-4 text-amber-500" />
                    <span>Nevada Statewide Coverage • Southern, Northern &amp; Rural NV</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    All Nevada Cities Leak Detection &amp; Regional Dispatch Explorer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Select any Nevada metro or region to inspect local soil &amp; freeze-thaw conditions, pipe failure risks, response availability, and municipal utility credit support:
                  </p>
                </div>

                {/* Regional City Selector Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {NEVADA_CITY_REGIONS.map((nh, idx) => (
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

                {/* Selected Region Data Card */}
                {(() => {
                  const area = NEVADA_CITY_REGIONS[selectedAreaIdx] || NEVADA_CITY_REGIONS[0];
                  return (
                    <div className="bg-linear-to-br from-slate-900 to-[#0F2942] rounded-xl p-5 text-white space-y-4 shadow-sm border border-slate-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-700/80">
                        <div>
                          <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase tracking-wider">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{area.name} ({area.zip})</span>
                          </div>
                          <div className="text-xs text-slate-300 mt-0.5">
                            Areas: {area.crossStreets}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            {area.activeVans}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                            ETA: {area.etaMinutes}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                          <span className="text-slate-400 block mb-1 font-medium">Regional Geology &amp; Climate:</span>
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
                          <span>View {area.name} Local Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={PHONE_HREF}
                          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
                        >
                          <Phone className="w-3.5 h-3.5 text-slate-950" />
                          <span>Dispatch Tech to {area.name.split(' ')[0]}</span>
                        </a>
                      </div>
                    </div>
                  );
                })()}

                {/* Complete Nevada City Hub Directory Strip (Zero Orphan Pages) */}
                <div className="pt-2 border-t border-slate-200 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                      Dedicated Nevada City &amp; Community Pages
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Plus Paradise, Enterprise, Summerlin, Spanish Springs, Fernley, Fallon, Winnemucca, Ely &amp; Laughlin
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Las Vegas', slug: 'las-vegas' },
                      { label: 'Henderson', slug: 'henderson' },
                      { label: 'North Las Vegas', slug: 'north-las-vegas' },
                      { label: 'Reno & Lake Tahoe', slug: 'reno' },
                      { label: 'Sparks', slug: 'sparks' },
                      { label: 'Carson City & Minden', slug: 'carson-city' },
                      { label: 'Pahrump', slug: 'pahrump' },
                      { label: 'Mesquite', slug: 'mesquite' },
                      { label: 'Boulder City & Laughlin', slug: 'boulder-city' },
                      { label: 'Elko, Fernley & Fallon', slug: 'elko-rural-nevada' },
                      { label: 'Spring Valley Core', slug: 'spring-valley-center' },
                      { label: 'The Lakes', slug: 'the-lakes' },
                      { label: 'Spanish Trail', slug: 'spanish-trail' },
                      { label: 'Summerlin South', slug: 'summerlin-south' },
                      { label: 'Rhodes Ranch', slug: 'rhodes-ranch' },
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
                    What Type of Leak Are You Experiencing in Nevada?
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
                    Leak Detection NV Specialists vs. Conventional General Plumbers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Why working with a dedicated electronic leak detection specialist protects Nevada homeowners from destructive exploratory demolition:
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-[#0F2942] text-white">
                      <tr>
                        <th className="py-3 px-4 font-bold">Diagnostic Capability</th>
                        <th className="py-3 px-4 font-bold text-amber-300">Leak Detection NV Network</th>
                        <th className="py-3 px-4 font-bold text-slate-300">Conventional General Plumbers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Concrete Slab Leak Pinpointing</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Ultrasonic sensors locate leak within inches (minimal access)</td>
                        <td className="py-3 px-4 text-slate-600">Guesswork jackhammering of multiple floor tiles</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Swimming Pool Diagnostics</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Submersible hydrophones + dye test without draining pool</td>
                        <td className="py-3 px-4 text-slate-600">Require full draining (risking plaster damage in heat)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Statewide Nevada Dispatch</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">30–60 min metro dispatch across Clark &amp; Washoe + rural NV</td>
                        <td className="py-3 px-4 text-slate-600">Single-neighborhood hours or next-day windows</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Utility Leak Credit Documentation</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Detailed reports formatted for LVVWD, Henderson &amp; TMWA</td>
                        <td className="py-3 px-4 text-slate-600">Basic receipt often missing required repair details</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-900">Caliche &amp; Frost-Line Tracing</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">Acoustic correlation &amp; tracer gas minimize trenching</td>
                        <td className="py-3 px-4 text-slate-600">Wide backhoe trenching across yard or driveway</td>
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
                      Nevada Statewide Diagnostic Benchmarks &amp; NSCB Compliance
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
                      Dispatch referrals strictly adhere to active Nevada State Contractors Board C-1 plumbing and contractor licensing standards, liability coverage, and county building codes statewide.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0F2942] uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>24/7 Statewide Dispatch Desk</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Headquartered at 6875 Groveview Ln, Las Vegas, NV 89103, routing urgent water, slab, pool, and gas calls across Las Vegas, Henderson, Reno, Sparks, Carson City, and rural Nevada.
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
                      <span>Gas PPM &amp; Nevada Utility Reports</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Calibrated PPM combustible gas sniffers and itemized diagnostic logs formatted for Southwest Gas / NV Energy clearances, insurance claims, and LVVWD / TMWA credits.
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
                Licensed Leak Detection &amp; Repair {page.type === 'location' ? `in ${page.navTitle}, NV` : 'Across Nevada'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {BRAND_NAME} connects property owners across all Nevada cities with independent, licensed professionals adhering to Nevada State Contractors Board (NSCB) standards and municipal plumbing codes.
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
                        <span className="text-slate-600">30–60 minute rapid on-site technician response across Clark County.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2: Nevada Cities & Communities */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F2942]">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      <span>Nevada Cities &amp; Communities (15 Pages)</span>
                    </div>
                    <ul className="space-y-2 text-xs">
                      {[
                        { slug: 'las-vegas', title: 'Las Vegas Metro (Downtown, Paradise, Enterprise, Summerlin)', desc: 'All Las Vegas ZIP codes 89101–89149 • LVVWD & slab repair.' },
                        { slug: 'henderson', title: 'Henderson & Green Valley (89002–89074)', desc: 'Anthem, Seven Hills, Inspirada, Lake Las Vegas & Whitney Ranch.' },
                        { slug: 'north-las-vegas', title: 'North Las Vegas (89030–89086)', desc: 'Aliante, Eldorado, Craig Ranch, Tule Springs & Apex.' },
                        { slug: 'reno', title: 'Reno & Lake Tahoe (89501–89523 / 89451)', desc: 'Midtown, South Reno, Damonte Ranch, Somersett, Verdi & Incline Village.' },
                        { slug: 'sparks', title: 'Sparks & Spanish Springs (89431–89441)', desc: 'Wingfield Springs, Sun Valley & Sparks Marina.' },
                        { slug: 'carson-city', title: 'Carson City, Minden & Dayton (89701 / 89423)', desc: 'State Capital corridor, Carson Valley & Gardnerville.' },
                        { slug: 'pahrump', title: 'Pahrump & Nye County (89048 / 89060 / 89061)', desc: 'Well water mains, desert slabs & propane lines.' },
                        { slug: 'mesquite', title: 'Mesquite & Virgin Valley (89027)', desc: 'Sun City Mesquite, Bunkerville & resort golf pools.' },
                        { slug: 'boulder-city', title: 'Boulder City & Laughlin (89005 / 89029)', desc: 'Historic Downtown mains & Colorado River corridor.' },
                        { slug: 'elko-rural-nevada', title: 'Elko, Fernley, Fallon & Rural NV (89801 / 89408)', desc: 'Spring Creek, Winnemucca, Lovelock, Battle Mountain & Ely.' },
                        { slug: 'spring-valley-center', title: 'Spring Valley Core & Rainbow Corridor (89103)', desc: 'Headquarters hub at 6875 Groveview Ln.' },
                        { slug: 'the-lakes', title: 'The Lakes & Peccole Ranch (89117)', desc: 'Sahara Ave & Fort Apache Rd.' },
                        { slug: 'spanish-trail', title: 'Spanish Trail Estates (89113)', desc: 'Guard-gated estate slab & pool diagnostics.' },
                        { slug: 'summerlin-south', title: 'Summerlin South & 215 Beltway (89135 / 89148)', desc: 'Town Center Dr & Desert Foothills.' },
                        { slug: 'rhodes-ranch', title: 'Rhodes Ranch & Sunset Corridor (89148)', desc: 'Durango Dr & Sunset Rd.' },
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
                        <span className="text-slate-600">Main hub for 24/7 non-invasive leak detection in Spring Valley.</span>
                      </li>
                      <li>
                        <a href="/how-it-works/" onClick={(e) => { e.preventDefault(); onNavigate('how-it-works'); }} className="font-bold text-[#1E70B8] hover:underline block text-sm">
                          How It Works
                        </a>
                        <span className="text-slate-600">Our 4-step acoustic and infrared non-invasive inspection process.</span>
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
                        <span className="text-slate-600">6875 Groveview Ln, Las Vegas, NV 89103 • Phone: (725) 313-0108.</span>
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
                      <span>Nevada Diagnostic Knowledge Base</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-display">
                      Additional Nevada Prevention &amp; Utility Guides
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
                    <span>View All 8 Guides</span>
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
                        href={getBlogPostUrlPath(matchedPost)}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(getBlogPostNavSlug(matchedPost));
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

            {/* FINAL URGENT CONVERSION CTA BANNER */}
            <section className="p-8 rounded-2xl bg-linear-to-br from-[#0F2942] to-slate-900 text-white space-y-6 shadow-xl">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                  24/7 Nevada Statewide Dispatch
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
                  Need Immediate Help With {page.name}?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Protect your Nevada property from costly water, gas, slab, or pool damage. Connect 24/7 with NSCB-licensed specialists equipped with non-invasive diagnostic tools.
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
              currentLocationName={page.type === 'location' ? page.navTitle : 'All Nevada Cities'}
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
                    <span>Browse All 8 Homeowner Guides</span>
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

              {/* Related Nevada Cities Box */}
              {page.relatedLocations && page.relatedLocations.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                    Nevada Cities &amp; Service Areas
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
                  <span>Explore all cities and services on our </span>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('');
                    }}
                    className="text-[#1E70B8] font-bold hover:underline"
                  >
                    Nevada leak detection
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
