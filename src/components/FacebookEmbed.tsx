import React, { useState } from 'react';
import { FACEBOOK_URL, BRAND_NAME, PHONE_NUMBER, PHONE_HREF } from '../data/siteData';
import { ExternalLink, MessageCircle, Phone, CheckCircle2, Shield, Share2 } from 'lucide-react';

interface FacebookEmbedProps {
  compact?: boolean;
}

export const FacebookEmbed: React.FC<FacebookEmbedProps> = ({ compact = false }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const fbEncodedUrl = encodeURIComponent(FACEBOOK_URL);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Facebook Card Header */}
      <div className="bg-linear-to-r from-[#1877F2] to-[#0D65D9] text-white p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white text-[#1877F2] flex items-center justify-center font-bold shadow-md shrink-0">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-base sm:text-lg tracking-tight font-display text-white">
                  {BRAND_NAME}
                </h3>
                <CheckCircle2 className="w-4 h-4 text-sky-200 fill-sky-500 shrink-0" />
              </div>
              <p className="text-xs text-sky-100 flex items-center gap-2 mt-0.5">
                <span>Official Facebook Page</span>
                <span>•</span>
                <span>@leakdetectionnv</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-[#1877F2] hover:bg-slate-50 font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>Follow on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Body with Live Facebook Iframe & Social Highlights */}
      <div className="p-5 sm:p-6 space-y-6">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Stay connected with our 24/7 diagnostic team in Clark County. Follow our official Facebook page for emergency plumbing tips, customer reviews, recent slab & pool leak case studies, and live dispatch updates in Spring Valley, NV.
        </p>

        {/* Action Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-[#1877F2] transition-colors flex items-center gap-2.5 text-slate-800 text-xs font-semibold"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-900 font-bold">Latest Posts</div>
              <div className="text-[11px] text-slate-500">Read news & tips</div>
            </div>
          </a>

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-[#1877F2] transition-colors flex items-center gap-2.5 text-slate-800 text-xs font-semibold"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-900 font-bold">Message Us</div>
              <div className="text-[11px] text-slate-500">Facebook Messenger</div>
            </div>
          </a>

          <a
            href={PHONE_HREF}
            className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-500 transition-colors flex items-center gap-2.5 text-slate-800 text-xs font-semibold"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-900 font-bold">Call Dispatch</div>
              <div className="text-[11px] text-slate-500">{PHONE_NUMBER}</div>
            </div>
          </a>
        </div>

        {/* Embedded Facebook Page Iframe Plugin */}
        {!compact && (
          <div className="pt-2">
            <div className="relative w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50 min-h-[400px] flex flex-col items-center justify-center">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-6 text-center space-y-3 z-10">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-300 border-t-[#1877F2] animate-spin"></div>
                  <div className="text-xs font-medium text-slate-500">Loading Official Facebook Page Plugin...</div>
                </div>
              )}

              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=${fbEncodedUrl}&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                width="100%"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={`${BRAND_NAME} Official Facebook Page`}
                onLoad={() => setIframeLoaded(true)}
                className="w-full relative z-20 min-h-[500px]"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>Verified Nevada Local Contractor Facebook Business Page</span>
              </span>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] font-semibold hover:underline flex items-center gap-0.5"
              >
                <span>Open in Facebook App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
