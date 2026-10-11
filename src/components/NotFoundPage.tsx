import React, { useEffect } from 'react';
import { Phone, ArrowLeft, AlertTriangle, ShieldCheck, Wrench, Flame, Waves, Droplet, MapPin } from 'lucide-react';
import { PHONE_NUMBER, PHONE_HREF, BUSINESS_ADDRESS } from '../data/siteData';

interface NotFoundPageProps {
  onNavigate: (slug: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Page Not Found (404) | Spring Valley Leak Detection & Repair';

    // Set noindex for 404 page to prevent soft-404 and indexing issues
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, follow');

    return () => {
      // Restore on unmount
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  const serviceLinks = [
    { name: 'Water Leak Detection', slug: 'water-leak-detection', icon: Droplet, desc: 'Acoustic & thermal hidden pipe detection' },
    { name: 'Gas Leak Detection & Repair', slug: 'gas-leak-detection', icon: Flame, desc: 'Combustible gas sniffers & safety shutoff' },
    { name: 'Concrete Slab Leak Detection', slug: 'slab-leak-detection', icon: Wrench, desc: 'Sub-slab acoustic sensor pinpointing' },
    { name: 'Swimming Pool Leak Detection', slug: 'pool-leak-detection', icon: Waves, desc: 'Hydrophone & dye testing for pool shells' },
    { name: 'Underground & Yard Leaks', slug: 'underground-leak-detection', icon: ShieldCheck, desc: 'Main line & irrigation line diagnostics' },
    { name: '24/7 Emergency Leak Diagnostics', slug: 'emergency-leak-repair', icon: AlertTriangle, desc: 'Rapid 30–60 min Clark County dispatch' },
  ];

  const locationLinks = [
    { name: 'Spring Valley Core', slug: 'spring-valley-center' },
    { name: 'The Lakes', slug: 'the-lakes' },
    { name: 'Spanish Trail Estates', slug: 'spanish-trail' },
    { name: 'Summerlin South', slug: 'summerlin-south' },
    { name: 'Rhodes Ranch', slug: 'rhodes-ranch' },
  ];

  return (
    <main className="min-h-[70vh] bg-slate-50 py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Error Badge & Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300 mb-4 font-mono">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span>HTTP 404 — Page Not Found</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4 font-display">
            The Requested Page Could Not Be Located
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            The URL you entered does not exist or has been updated to our canonical SEO structure. If you are experiencing an active water leak, natural gas odor, slab leak, or swimming pool loss in Spring Valley, contact our emergency desk immediately.
          </p>

          {/* Emergency Call Box */}
          <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 mb-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                24/7 Dispatch Desk Active in Spring Valley
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-4">
              Direct line to licensed Clark County leak detection diagnostic technicians:
            </p>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#1E70B8] hover:bg-[#155a96] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all font-mono"
            >
              <Phone className="w-5 h-5 text-amber-300" />
              <span>Call {PHONE_NUMBER}</span>
            </a>

            <div className="mt-4 text-xs text-slate-500 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Dispatch Headquarters: {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality}, NV {BUSINESS_ADDRESS.postalCode}</span>
            </div>
          </div>
        </div>

        {/* Directory of Valid Target Pages */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-8">
          <h2 className="text-lg font-bold text-slate-950 mb-2 font-display">
            Looking for a Specific Leak Detection Service?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Select one of our specialized non-invasive diagnostic capabilities below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceLinks.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.slug}
                  href={`/${service.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(service.slug);
                  }}
                  className="group p-4 rounded-xl border border-slate-200 hover:border-[#1E70B8] hover:bg-slate-50 transition-all block text-left"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#1E70B8] flex items-center justify-center shrink-0 group-hover:bg-[#1E70B8] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-slate-900 group-hover:text-[#1E70B8] transition-colors">
                      {service.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-snug">
                    {service.desc}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Local Service Areas & Home Return */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 text-sm">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="font-bold text-slate-900">Service Areas:</span>
            {locationLinks.map((loc, idx) => (
              <React.Fragment key={loc.slug}>
                <a
                  href={`/${loc.slug}/`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(loc.slug);
                  }}
                  className="hover:text-[#1E70B8] underline"
                >
                  {loc.name}
                </a>
                {idx < locationLinks.length - 1 && <span className="text-slate-300">•</span>}
              </React.Fragment>
            ))}
          </div>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('');
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E70B8] hover:underline shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Spring Valley Home</span>
          </a>
        </div>
      </div>
    </main>
  );
};
