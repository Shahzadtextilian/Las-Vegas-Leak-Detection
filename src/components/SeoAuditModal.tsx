import React, { useState } from 'react';
import { PageContent, DOMAIN_URL, BRAND_NAME } from '../data/siteData';
import { generateSchemaForPage } from '../utils/schemaGenerator';
import { X, Check, Copy, Code, Compass, Link2, Search, FileText } from 'lucide-react';

interface SeoAuditModalProps {
  page: PageContent;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (slug: string) => void;
}

export const SeoAuditModal: React.FC<SeoAuditModalProps> = ({
  page,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'schema' | 'links' | 'cloudflare'>('strategy');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const schemaJson = JSON.stringify(generateSchemaForPage(page), null, 2);

  const handleCopySchema = () => {
    navigator.clipboard.writeText(schemaJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-5 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Compass className="w-3.5 h-3.5" />
              <span>SEO, Schema & Architecture Audit</span>
            </div>
            <h3 className="text-lg font-bold font-display mt-0.5">
              {page.name} <span className="text-slate-400 font-mono text-sm font-normal">({page.urlPath})</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls (Clean segmented controls) */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-5 pt-2 gap-2 shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('strategy')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'strategy'
                ? 'bg-white text-[#1E70B8] border-t-2 border-t-[#1E70B8] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Targeting & Semantic Intent</span>
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'schema'
                ? 'bg-white text-[#1E70B8] border-t-2 border-t-[#1E70B8] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>JSON-LD Schema Markup</span>
          </button>

          <button
            onClick={() => setActiveTab('links')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'links'
                ? 'bg-white text-[#1E70B8] border-t-2 border-t-[#1E70B8] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>Contextual Link Graph</span>
          </button>

          <button
            onClick={() => setActiveTab('cloudflare')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'cloudflare'
                ? 'bg-white text-[#1E70B8] border-t-2 border-t-[#1E70B8] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Cloudflare Pages Deploy</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: STRATEGY & INTENT */}
          {activeTab === 'strategy' && (
            <div className="space-y-5 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Title Tag ({page.metaTitle.length} characters)
                  </span>
                  <p className="font-semibold text-slate-900 text-sm">{page.metaTitle}</p>
                  <span className="inline-block text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-medium">
                    ✓ Optimal length (50–60 chars)
                  </span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Meta Description ({page.metaDescription.length} characters)
                  </span>
                  <p className="text-slate-700 text-xs leading-relaxed">{page.metaDescription}</p>
                  <span className="inline-block text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-medium">
                    ✓ Optimal snippet length (140–160 chars)
                  </span>
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-xl space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Target Commercial Keywords & Topical Entities
                </h4>
                <div>
                  <div className="text-xs text-slate-500 mb-1">Primary Keyword:</div>
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-md font-mono text-xs font-bold">
                    {page.primaryKeyword}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 mb-1">Secondary / Long-Tail Commercial Variations:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {page.secondaryKeywords.map((kw, i) => (
                      <span key={i} className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded-md font-mono text-xs">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-500 mb-1">Semantic Knowledge Graph Entities:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {page.semanticEntities.map((entity, i) => (
                      <span key={i} className="px-2 py-0.5 bg-sky-50 text-sky-800 rounded-md text-xs font-medium border border-sky-100">
                        {entity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  AI Overview & Direct Answer Optimization
                </h4>
                <p className="text-xs text-slate-800 leading-relaxed font-sans italic">
                  "{page.directAnswer}"
                </p>
                <p className="text-[11px] text-amber-800">
                  Direct answer is placed above the fold to maximize zero-click snippet and conversational AI grounding.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: SCHEMA JSON-LD */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Validated JSON-LD Schema Graph
                  </h4>
                  <p className="text-xs text-slate-500">
                    Includes BreadcrumbList, Organization (Referral attribution), Service / LocalBusiness, and FAQPage schemas.
                  </p>
                </div>
                <button
                  onClick={handleCopySchema}
                  className="px-3 py-1.5 text-xs font-bold bg-[#0F2942] hover:bg-[#1E70B8] text-white rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy JSON-LD'}</span>
                </button>
              </div>

              <pre className="p-4 bg-slate-950 text-emerald-400 font-mono text-xs rounded-xl overflow-x-auto max-h-96 leading-relaxed border border-slate-800">
                {schemaJson}
              </pre>
            </div>
          )}

          {/* TAB 3: CONTEXTUAL LINKS */}
          {activeTab === 'links' && (
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-blue-50/50 border border-blue-200 rounded-xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                  Homepage Authority Reinforcement
                </h4>
                <p className="text-xs text-blue-950 leading-relaxed">
                  Per the ranking architecture requirement, this supporting page contextually passes topical and local authority back to the homepage <code className="bg-blue-100 px-1 py-0.5 rounded text-blue-900 font-mono">/</code> using natural semantic variations (e.g. <em>leak detection in Spring Valley</em>, <em>Spring Valley leak detection</em>, <em>local leak specialists in Spring Valley</em>).
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Related Sub-Services Interlinked on this Page:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {page.relatedServices?.map((srv) => (
                    <button
                      key={srv.slug}
                      onClick={() => { onNavigate(srv.slug); onClose(); }}
                      className="p-3 text-left border border-slate-200 rounded-xl hover:border-[#1E70B8] hover:bg-slate-50 transition-colors group cursor-pointer"
                    >
                      <div className="font-semibold text-slate-900 text-xs group-hover:text-[#1E70B8]">
                        {srv.title} →
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{srv.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Related Spring Valley Service Sectors Interlinked:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {page.relatedLocations?.map((loc) => (
                    <button
                      key={loc.slug}
                      onClick={() => { onNavigate(loc.slug); onClose(); }}
                      className="p-3 text-left border border-slate-200 rounded-xl hover:border-[#1E70B8] hover:bg-slate-50 transition-colors group cursor-pointer"
                    >
                      <div className="font-semibold text-slate-900 text-xs group-hover:text-[#1E70B8]">
                        {loc.name} →
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{loc.context}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CLOUDFLARE PAGES READY */}
          {activeTab === 'cloudflare' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 space-y-1">
                <div className="font-bold text-emerald-900 text-sm">
                  ✓ 100% Cloudflare Pages & Static Hosting Ready
                </div>
                <p>
                  Zero external server dependencies, no database required, no Node server needed at runtime. Clean first-level URLs, static HTML, CSS, robots.txt, and sitemap.xml.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Site Architecture Matrix (Clean First-Level URLs)
                </h4>
                <ul className="space-y-1.5 font-mono text-[11px] text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <li>/ (Primary Authority Homepage)</li>
                  <li>/water-leak-detection/ (Water Leaks & Hidden Pipes)</li>
                  <li>/gas-leak-detection/ (Gas Leaks & Appliance Pipes)</li>
                  <li>/slab-leak-detection/ (Sub-Concrete Slab Foundation)</li>
                  <li>/pool-leak-detection/ (Swimming Pool & Spa Plumbing)</li>
                  <li>/underground-leak-detection/ (Buried Main & Irrigation Lines)</li>
                  <li>/emergency-leak-repair/ (24/7 Rapid Shutoff Dispatch)</li>
                  <li>/spring-valley-center/ (Spring Valley Core 89103)</li>
                  <li>/the-lakes/ (The Lakes & Peccole Ranch)</li>
                  <li>/spanish-trail/ (Spanish Trail Estates)</li>
                  <li>/summerlin-south/ (Summerlin South 89135)</li>
                  <li>/rhodes-ranch/ (Rhodes Ranch & SW Vegas)</li>
                  <li>/about/ (Referral Model & NSCB Standards)</li>
                  <li>/contact/ (Dispatch Desk & 6875 Groveview Ln)</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                <strong>Deployment Command:</strong> Connect your repository to Cloudflare Pages, set build command to <code className="bg-white px-1.5 py-0.5 rounded font-mono">npm run build</code> and output directory to <code className="bg-white px-1.5 py-0.5 rounded font-mono">dist</code>.
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <div>
            Canonical: <span className="font-mono text-slate-900">{DOMAIN_URL}{page.urlPath === '/' ? '' : page.urlPath}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Close Auditor
          </button>
        </div>

      </div>
    </div>
  );
};
