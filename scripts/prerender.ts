import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sitePages, DOMAIN_URL, PHONE_NUMBER, PHONE_HREF, BUSINESS_ADDRESS, BRAND_NAME, PageContent, FACEBOOK_URL } from '../src/data/siteData.js';
import { BLOG_POSTS, BlogPost } from '../src/data/blogData.js';
import { generateSchemaForPage } from '../src/utils/schemaGenerator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(indexHtmlPath, 'utf8');

/**
 * Builds semantic HTML for the <div id="root"> container.
 * This guarantees that non-JS crawlers (Ahrefs, Semrush, Screaming Frog, Googlebot)
 * receive 100% complete content, rich semantic structure, and crawlable internal links.
 */
function buildPreRenderedBody(page: PageContent, blogPost: BlogPost | null): string {
  const isPost = !!blogPost;
  const title = isPost ? (blogPost.h1 || blogPost.title) : page.h1;
  const description = isPost ? (blogPost.metaDescription || blogPost.excerpt) : page.directAnswer;

  return `
    <header class="bg-[#0F2942] text-white py-4 px-6 border-b border-slate-700">
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div>
          <a href="/" class="text-xl font-bold text-white tracking-tight">${BRAND_NAME}</a>
          <p class="text-xs text-amber-300">24/7 Dispatch Desk: ${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.addressLocality}, NV ${BUSINESS_ADDRESS.postalCode}</p>
        </div>
        <div class="flex items-center gap-4">
          <a href="${FACEBOOK_URL}" target="_blank" rel="noopener noreferrer" class="text-xs text-sky-200 hover:text-white flex items-center gap-1">
            <span>Facebook Page</span>
          </a>
          <a href="${PHONE_HREF}" class="bg-[#1E70B8] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-lg text-sm">
            Call Dispatch: ${PHONE_NUMBER}
          </a>
        </div>
      </div>
      <nav class="max-w-7xl mx-auto mt-3 pt-3 border-t border-slate-700/60 flex flex-wrap gap-4 text-xs text-slate-200">
        <a href="/" class="hover:text-amber-300 font-semibold">Home</a>
        <a href="/water-leak-detection/" class="hover:text-amber-300">Water Leak Detection</a>
        <a href="/gas-leak-detection/" class="hover:text-amber-300">Gas Leak Detection</a>
        <a href="/slab-leak-detection/" class="hover:text-amber-300">Slab Leak Detection</a>
        <a href="/pool-leak-detection/" class="hover:text-amber-300">Pool Leak Detection</a>
        <a href="/underground-leak-detection/" class="hover:text-amber-300">Underground Leaks</a>
        <a href="/emergency-leak-repair/" class="hover:text-amber-300">24/7 Emergency Repair</a>
        <a href="/how-it-works/" class="hover:text-amber-300">How It Works</a>
        <a href="/blog/" class="hover:text-amber-300">Blog & Guides</a>
        <a href="/contact/" class="hover:text-amber-300">Contact & Map</a>
        <a href="/about/" class="hover:text-amber-300">About</a>
        <a href="/disclaimer/" class="hover:text-amber-300">Disclaimer</a>
        <a href="/sitemap/" class="hover:text-amber-300">Sitemap</a>
      </nav>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-12">
      <article>
        <div class="mb-4 text-xs font-bold uppercase tracking-wider text-amber-600">
          ${isPost ? `Leak Knowledge Base • ${blogPost.category}` : (page.heroKicker || 'Spring Valley, NV Diagnostics')}
        </div>
        <h1 id="hero-headline" class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
          ${title}
        </h1>

        <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
          <p id="direct-answer-summary" class="text-base text-slate-800 leading-relaxed font-medium speakable-answer">
            ${description}
          </p>
          <div class="mt-4 pt-3 border-t border-amber-200 text-sm">
            <strong>Need Immediate Assistance in Spring Valley?</strong> Call <a href="${PHONE_HREF}" class="text-[#1E70B8] font-bold underline">${PHONE_NUMBER}</a> for 30–60 minute emergency dispatch.
          </div>
        </div>

        ${isPost ? `
          <div class="space-y-6 text-slate-700 leading-relaxed">
            ${blogPost.featuredImage ? `
              <figure class="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img src="${blogPost.featuredImage}" alt="${blogPost.featuredImageAlt || blogPost.title}" class="w-full h-auto max-h-[440px] object-cover" width="800" height="450" />
                ${blogPost.featuredImageAlt ? `<figcaption class="p-2.5 bg-slate-100 text-slate-600 text-xs italic border-t border-slate-200">${blogPost.featuredImageAlt}</figcaption>` : ''}
              </figure>
            ` : ''}

            <div class="p-6 rounded-xl bg-white border border-slate-200 text-base leading-relaxed">
              <p>${blogPost.content.introduction}</p>
            </div>

            ${blogPost.content.sections.map(sec => `
              <section class="mt-8">
                <h2 class="text-2xl font-bold text-slate-900 mb-3">${sec.heading}</h2>
                ${sec.body.map(p => `<p class="mb-3 text-slate-700">${p}</p>`).join('')}
                ${sec.bulletPoints ? `
                  <ul class="list-disc pl-5 space-y-1.5 my-3 text-slate-700">
                    ${sec.bulletPoints.map(b => `<li>${b}</li>`).join('')}
                  </ul>
                ` : ''}
                ${sec.image ? `
                  <figure class="my-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                    <img src="${sec.image.src}" alt="${sec.image.alt}" class="w-full h-auto max-h-80 object-cover" loading="lazy" />
                    ${sec.image.caption ? `<figcaption class="p-2 text-xs text-slate-500 italic bg-slate-50 border-t border-slate-200">${sec.image.caption}</figcaption>` : ''}
                  </figure>
                ` : ''}
                ${sec.keyTakeaways ? `
                  <div class="bg-slate-100 p-4 rounded-lg my-4">
                    <h3 class="text-xs font-bold uppercase text-slate-600 mb-2">Key Takeaways</h3>
                    <ul class="list-disc pl-5 space-y-1 text-sm text-slate-700">
                      ${sec.keyTakeaways.map(k => `<li>${k}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </section>
            `).join('')}

            ${blogPost.content.faqs && blogPost.content.faqs.length > 0 ? `
              <section class="mt-10 p-6 rounded-2xl bg-white border border-slate-200">
                <h2 class="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <div class="space-y-4">
                  ${blogPost.content.faqs.map(f => `
                    <div class="pt-3 border-t border-slate-100 first:border-0 first:pt-0">
                      <h3 class="font-bold text-slate-900 text-base mb-1">${f.question}</h3>
                      <p class="text-slate-700 text-sm leading-relaxed">${f.answer}</p>
                    </div>
                  `).join('')}
                </div>
              </section>
            ` : ''}

            <div class="mt-8 p-6 bg-slate-900 text-white rounded-xl">
              <h3 class="text-lg font-bold mb-2">Think You Have a Leak? Contact Our Team</h3>
              <p class="text-sm text-slate-300 leading-relaxed">${blogPost.content.conclusion}</p>
              <div class="mt-4 pt-3 border-t border-slate-700">
                <a href="${PHONE_HREF}" class="inline-block bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm">Call 24/7: ${PHONE_NUMBER}</a>
              </div>
            </div>

            <div class="mt-10 pt-6 border-t border-slate-200">
              <h3 class="text-xl font-bold text-slate-900 mb-4">Related Diagnostic & Prevention Guides</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                ${BLOG_POSTS.filter(p => p.id !== blogPost.id).map(other => `
                  <a href="/blog/${other.slug}/" class="p-3 rounded-xl border border-slate-200 hover:border-[#1E70B8] block">
                    <span class="text-xs font-bold text-amber-700 block mb-1">${other.category}</span>
                    <span class="font-bold text-slate-900 block">${other.title}</span>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        ` : `
          <div class="space-y-8 text-slate-700 leading-relaxed">
            ${page.sections.map(sec => `
              <section class="mt-6">
                <h2 class="text-2xl font-bold text-slate-900 mb-3">${sec.heading}</h2>
                ${sec.subheading ? `<h3 class="text-lg font-semibold text-slate-700 mb-2">${sec.subheading}</h3>` : ''}
                ${sec.paragraphs.map(p => `<p class="mb-3 text-slate-700 leading-relaxed">${p}</p>`).join('')}
                ${sec.bulletPoints ? `
                  <ul class="list-disc pl-5 space-y-1.5 my-3 text-slate-700">
                    ${sec.bulletPoints.map(b => `<li>${b}</li>`).join('')}
                  </ul>
                ` : ''}
              </section>
            `).join('')}

            ${page.slug === '' ? `
              <section class="mt-12 pt-8 border-t border-slate-200">
                <h2 class="text-2xl font-bold text-slate-900 mb-4">Spring Valley 30–60 Minute Mobile Response Corridors</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <strong class="text-slate-900 block font-bold">Spring Valley Core (89103)</strong>
                    <p class="text-slate-600 mt-1">Rainbow Blvd & Tropicana Ave • ETA 20–30 min</p>
                  </div>
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <strong class="text-slate-900 block font-bold">The Lakes & Peccole Ranch (89117)</strong>
                    <p class="text-slate-600 mt-1">Sahara Ave & Fort Apache Rd • ETA 25–35 min</p>
                  </div>
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <strong class="text-slate-900 block font-bold">Spanish Trail Estates (89113)</strong>
                    <p class="text-slate-600 mt-1">Tropicana Ave & Buffalo Dr • ETA 20–30 min</p>
                  </div>
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <strong class="text-slate-900 block font-bold">Rhodes Ranch & Sunset (89148)</strong>
                    <p class="text-slate-600 mt-1">Durango Dr & Sunset Rd • ETA 30–40 min</p>
                  </div>
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <strong class="text-slate-900 block font-bold">Desert Breeze & Durango (89147)</strong>
                    <p class="text-slate-600 mt-1">Spring Mountain Rd & Durango Dr • ETA 25–35 min</p>
                  </div>
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <strong class="text-slate-900 block font-bold">Summerlin South (89135 / 89148)</strong>
                    <p class="text-slate-600 mt-1">Town Center Dr & 215 Beltway • ETA 30–40 min</p>
                  </div>
                </div>
              </section>

              <section class="mt-12 pt-8 border-t border-slate-200">
                <h2 class="text-2xl font-bold text-slate-900 mb-4">Featured Diagnostic Guides & Technical Articles</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  ${BLOG_POSTS.map(b => `
                    <a href="/blog/${b.slug}/" class="p-4 rounded-xl border border-slate-200 hover:border-[#1E70B8] block">
                      <span class="text-xs font-bold text-amber-700 block mb-1">${b.category} • ${b.readTime}</span>
                      <span class="text-sm font-bold text-slate-900 block mb-1">${b.title}</span>
                      <span class="text-xs text-slate-600 block">${b.excerpt}</span>
                    </a>
                  `).join('')}
                </div>
              </section>
            ` : ''}

            ${page.slug === 'sitemap' ? `
              <section class="mt-12 pt-8 border-t border-slate-200">
                <h2 class="text-2xl font-bold text-slate-900 mb-6">Complete Website Directory & Internal Link Index</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h3 class="text-base font-bold text-[#0F2942] uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                      Precision Leak Detection Services
                    </h3>
                    <ul class="space-y-3 text-sm">
                      <li><a href="/water-leak-detection/" class="font-bold text-[#1E70B8] hover:underline block">Water Leak Detection & Repair</a><span class="text-xs text-slate-600">Non-invasive acoustic & thermal diagnostics for hidden potable water lines.</span></li>
                      <li><a href="/slab-leak-detection/" class="font-bold text-[#1E70B8] hover:underline block">Slab Leak Detection & Repair</a><span class="text-xs text-slate-600">Pinpointing copper pipe pinholes beneath concrete foundations without jackhammering.</span></li>
                      <li><a href="/pool-leak-detection/" class="font-bold text-[#1E70B8] hover:underline block">Pool Leak Detection & Repair</a><span class="text-xs text-slate-600">Hydrophone acoustic listening and precision dye testing for swimming pools & spas.</span></li>
                      <li><a href="/gas-leak-detection/" class="font-bold text-[#1E70B8] hover:underline block">Gas Leak Detection & Emergency Repair</a><span class="text-xs text-slate-600">24/7 PPM digital sniffing for hazardous natural gas and propane lines.</span></li>
                      <li><a href="/underground-leak-detection/" class="font-bold text-[#1E70B8] hover:underline block">Underground & Yard Pipe Leaks</a><span class="text-xs text-slate-600">Detecting buried potable supply lines and irrigation manifolds in caliche soil.</span></li>
                      <li><a href="/emergency-leak-repair/" class="font-bold text-[#1E70B8] hover:underline block">24/7 Emergency Leak Diagnostics</a><span class="text-xs text-slate-600">30–60 minute rapid on-site technician response across Clark County, NV.</span></li>
                    </ul>
                  </div>

                  <div class="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h3 class="text-base font-bold text-[#0F2942] uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                      Spring Valley Service Areas
                    </h3>
                    <ul class="space-y-3 text-sm">
                      <li><a href="/spring-valley-center/" class="font-bold text-[#1E70B8] hover:underline block">Spring Valley Core (89103)</a><span class="text-xs text-slate-600">Rainbow Blvd & Tropicana Ave • ETA 20–30 min.</span></li>
                      <li><a href="/the-lakes/" class="font-bold text-[#1E70B8] hover:underline block">The Lakes & Peccole Ranch (89117)</a><span class="text-xs text-slate-600">Sahara Ave & Fort Apache Rd • ETA 25–35 min.</span></li>
                      <li><a href="/spanish-trail/" class="font-bold text-[#1E70B8] hover:underline block">Spanish Trail Estates (89113)</a><span class="text-xs text-slate-600">Tropicana Ave & Buffalo Dr • ETA 20–30 min.</span></li>
                      <li><a href="/summerlin-south/" class="font-bold text-[#1E70B8] hover:underline block">Summerlin South & 215 (89135 / 89148)</a><span class="text-xs text-slate-600">Town Center Dr & Maule Ave • ETA 30–40 min.</span></li>
                      <li><a href="/rhodes-ranch/" class="font-bold text-[#1E70B8] hover:underline block">Rhodes Ranch & Sunset (89148)</a><span class="text-xs text-slate-600">Durango Dr & Sunset Rd • ETA 30–40 min.</span></li>
                    </ul>
                  </div>

                  <div class="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h3 class="text-base font-bold text-[#0F2942] uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                      Technical Leak Guides & Knowledge Base
                    </h3>
                    <ul class="space-y-3 text-sm">
                      <li><a href="/blog/spring-valley-leak-detection-guide/" class="font-bold text-[#1E70B8] hover:underline block">Spring Valley Leak Detection: A Desert Homeowner’s Guide</a><span class="text-xs text-slate-600">Where desert homes hide leaks, diagnostic visit stages, and pricing factors.</span></li>
                      <li><a href="/blog/" class="font-bold text-[#1E70B8] hover:underline block">Leak Guides & Knowledge Base Hub</a><span class="text-xs text-slate-600">All DIY diagnostic procedures, cost guides, and emergency protocols.</span></li>
                      <li><a href="/blog/signs-of-slab-leak-in-las-vegas-homes/" class="font-bold text-[#1E70B8] hover:underline block">5 Warning Signs of a Slab Leak in Las Vegas</a><span class="text-xs text-slate-600">Warm floor spots, hissing sounds, and high water bill indicators.</span></li>
                      <li><a href="/blog/how-swimming-pool-bucket-test-works/" class="font-bold text-[#1E70B8] hover:underline block">The 24-Hour Pool Bucket Test Guide</a><span class="text-xs text-slate-600">How to distinguish summer evaporation from plumbing ruptures.</span></li>
                      <li><a href="/blog/what-to-do-when-you-smell-gas/" class="font-bold text-[#1E70B8] hover:underline block">What to Do When You Smell Natural Gas</a><span class="text-xs text-slate-600">Step-by-step emergency evacuation and safety protocol.</span></li>
                      <li><a href="/blog/desert-caliche-soil-pipe-damage/" class="font-bold text-[#1E70B8] hover:underline block">How Desert Caliche Soil Causes Pipe Damage</a><span class="text-xs text-slate-600">Limestone friction and thermal ground expansion hazards.</span></li>
                      <li><a href="/blog/how-to-read-water-meter-for-hidden-leaks/" class="font-bold text-[#1E70B8] hover:underline block">How to Read Your Water Meter for Leaks</a><span class="text-xs text-slate-600">Low-flow indicator dial check before bill spikes happen.</span></li>
                      <li><a href="/blog/how-to-get-lvvwd-leak-credit-water-bill/" class="font-bold text-[#1E70B8] hover:underline block">How to Get an LVVWD Leak Bill Credit</a><span class="text-xs text-slate-600">Southern Nevada excess water consumption rebate filing steps.</span></li>
                    </ul>
                  </div>

                  <div class="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h3 class="text-base font-bold text-[#0F2942] uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                      Company Info, Contact & Compliance
                    </h3>
                    <ul class="space-y-3 text-sm">
                      <li><a href="/" class="font-bold text-[#1E70B8] hover:underline block">Overview (Homepage)</a><span class="text-xs text-slate-600">Central authority hub for Spring Valley leak detection.</span></li>
                      <li><a href="/how-it-works/" class="font-bold text-[#1E70B8] hover:underline block">How It Works</a><span class="text-xs text-slate-600">Our 4-step non-invasive acoustic & thermal diagnostic workflow.</span></li>
                      <li><a href="/about/" class="font-bold text-[#1E70B8] hover:underline block">About Our Team & Network</a><span class="text-xs text-slate-600">Pre-screened, licensed Nevada plumbing contractors.</span></li>
                      <li><a href="/contact/" class="font-bold text-[#1E70B8] hover:underline block">Contact & Location (6875 Groveview Ln)</a><span class="text-xs text-slate-600">24/7 dispatch phone: (725) 313-0108 and interactive map.</span></li>
                      <li><a href="/privacy-policy/" class="font-bold text-[#1E70B8] hover:underline block">Privacy Policy</a><span class="text-xs text-slate-600">Customer personal information safeguards & TCPA compliance.</span></li>
                      <li><a href="/disclaimer/" class="font-bold text-[#1E70B8] hover:underline block">Legal Disclaimer & Licensing</a><span class="text-xs text-slate-600">Referral network disclosures and NSCB contractor terms.</span></li>
                      <li><a href="/sitemap/" class="font-bold text-[#1E70B8] hover:underline block">HTML Sitemap (Current Page)</a><span class="text-xs text-slate-600">Complete website index and internal link structure.</span></li>
                      <li><a href="/sitemap.xml" class="font-bold text-[#1E70B8] hover:underline block">XML Sitemap (Googlebot Index)</a><span class="text-xs text-slate-600">Search engine machine-readable XML feed.</span></li>
                      <li><a href="/llms.txt" class="font-bold text-[#1E70B8] hover:underline block">LLMs.txt Context</a><span class="text-xs text-slate-600">AI and LLM markdown structured documentation.</span></li>
                    </ul>
                  </div>
                </div>
              </section>
            ` : ''}

            ${page.faqs && page.faqs.length > 0 ? `
              <section class="mt-12 pt-8 border-t border-slate-200">
                <h2 class="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div class="space-y-4">
                  ${page.faqs.map(faq => `
                    <div class="border border-slate-200 rounded-xl p-5 bg-white">
                      <h3 class="font-bold text-slate-900 mb-2 text-base">${faq.question}</h3>
                      <p class="text-sm text-slate-600 leading-relaxed">${faq.answer}</p>
                    </div>
                  `).join('')}
                </div>
              </section>
            ` : ''}

            ${page.relatedServices ? `
              <section class="mt-8 pt-6 border-t border-slate-200">
                <h3 class="text-lg font-bold text-slate-900 mb-3">Related Leak Detection Services</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  ${page.relatedServices.map(rs => `
                    <a href="/${rs.slug}/" class="p-3 rounded-lg border border-slate-200 hover:border-[#1E70B8] block">
                      <span class="font-bold text-[#1E70B8] block">${rs.title}</span>
                      <span class="text-xs text-slate-500">${rs.description}</span>
                    </a>
                  `).join('')}
                </div>
              </section>
            ` : ''}
          </div>
        `}
      </article>
    </main>

    <footer class="bg-[#0F2942] text-slate-300 py-10 px-6 mt-16 border-t border-slate-800">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
        <div>
          <h4 class="font-bold text-white mb-3">${BRAND_NAME}</h4>
          <p class="leading-relaxed mb-3">Licensed, insured non-invasive leak detection specialists serving Spring Valley, Las Vegas, and Clark County, NV.</p>
          <p><strong>Dispatch:</strong> <a href="${PHONE_HREF}" class="text-amber-300 underline">${PHONE_NUMBER}</a></p>
          <p><strong>Address:</strong> ${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.addressLocality}, NV ${BUSINESS_ADDRESS.postalCode}</p>
          <p><strong>Facebook:</strong> <a href="${FACEBOOK_URL}" target="_blank" rel="noopener noreferrer" class="text-sky-300 underline">Official Facebook Page</a></p>
        </div>
        <div>
          <h4 class="font-bold text-white mb-3">Target Leak Services</h4>
          <ul class="space-y-2">
            <li><a href="/water-leak-detection/" class="hover:text-white">Water Leak Detection</a></li>
            <li><a href="/gas-leak-detection/" class="hover:text-white">Gas Leak Detection & Repair</a></li>
            <li><a href="/slab-leak-detection/" class="hover:text-white">Slab Leak Detection</a></li>
            <li><a href="/pool-leak-detection/" class="hover:text-white">Swimming Pool Leaks</a></li>
            <li><a href="/underground-leak-detection/" class="hover:text-white">Underground & Yard Leaks</a></li>
            <li><a href="/emergency-leak-repair/" class="hover:text-white">24/7 Emergency Diagnostics</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white mb-3">Spring Valley Sectors</h4>
          <ul class="space-y-2">
            <li><a href="/spring-valley-center/" class="hover:text-white">Spring Valley Core</a></li>
            <li><a href="/the-lakes/" class="hover:text-white">The Lakes & Peccole Ranch</a></li>
            <li><a href="/spanish-trail/" class="hover:text-white">Spanish Trail Estates</a></li>
            <li><a href="/summerlin-south/" class="hover:text-white">Summerlin South</a></li>
            <li><a href="/rhodes-ranch/" class="hover:text-white">Rhodes Ranch</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-white mb-3">Resources & Legal</h4>
          <ul class="space-y-2">
            <li><a href="/how-it-works/" class="hover:text-white">How It Works</a></li>
            <li><a href="/blog/" class="hover:text-white">Leak Guides & Blog</a></li>
            <li><a href="/contact/" class="hover:text-white">Contact & Map</a></li>
            <li><a href="/about/" class="hover:text-white">About Our Team</a></li>
            <li><a href="/privacy-policy/" class="hover:text-white">Privacy Policy</a></li>
            <li><a href="/disclaimer/" class="hover:text-white">Disclaimer & Licensing</a></li>
            <li><a href="/sitemap/" class="hover:text-white">HTML Sitemap</a></li>
            <li><a href="/sitemap.xml" class="hover:text-white">XML Sitemap</a></li>
            <li><a href="/llms.txt" class="hover:text-white">LLMs.txt</a></li>
          </ul>
        </div>
        <div class="md:col-span-4 mt-6 pt-6 border-t border-slate-700/60">
          <h4 class="font-bold text-amber-400 mb-3 uppercase tracking-wider text-[11px]">Technical Leak Diagnostics & Knowledge Base</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${BLOG_POSTS.map(b => `<a href="/blog/${b.slug}/" class="hover:text-amber-300 block">${b.title}</a>`).join('')}
          </div>
        </div>
      </div>
    </footer>
  `;
}

interface RouteConfig {
  slug: string;
  urlPath: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  schemaJson: string;
  pageData: PageContent;
  blogPost: BlogPost | null;
}

const routesToPrerender: RouteConfig[] = [];

// 1. All site pages in siteData
for (const [key, page] of Object.entries(sitePages)) {
  const canonicalUrl = `${DOMAIN_URL}${page.urlPath === '/' ? '/' : (page.urlPath ? (page.urlPath.endsWith('/') ? page.urlPath : `${page.urlPath}/`) : `/${page.slug}/`)}`;
  const matchingBlogPost = BLOG_POSTS.find(b => b.slug === page.slug) || null;
  const schema = generateSchemaForPage(page, matchingBlogPost);
  const schemaJson = JSON.stringify(schema, null, 2);

  routesToPrerender.push({
    slug: page.slug,
    urlPath: page.urlPath,
    metaTitle: matchingBlogPost?.metaTitle || page.metaTitle,
    metaDescription: matchingBlogPost?.metaDescription || page.metaDescription,
    canonicalUrl,
    schemaJson,
    pageData: page,
    blogPost: matchingBlogPost,
  });
}

// 2. Individual Blog Posts
const blogIndexPage = sitePages['blog'] || sitePages['home'];
for (const post of BLOG_POSTS) {
  const postSlug = `blog/${post.slug}`;
  const canonicalUrl = `${DOMAIN_URL}/${postSlug}/`;
  const schema = generateSchemaForPage(blogIndexPage, post);
  const schemaJson = JSON.stringify(schema, null, 2);

  routesToPrerender.push({
    slug: postSlug,
    urlPath: `/${postSlug}/`,
    metaTitle: post.metaTitle || `${post.title} | Spring Valley Leak Detection & Repair`,
    metaDescription: post.metaDescription || post.excerpt,
    canonicalUrl,
    schemaJson,
    pageData: blogIndexPage,
    blogPost: post,
  });
}

console.log(`Prerendering ${routesToPrerender.length} static routes for GitHub Pages...`);

for (const route of routesToPrerender) {
  let html = templateHtml;

  // Replace Title
  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.metaTitle}</title>`
  );

  // Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${route.metaDescription.replace(/"/g, '&quot;')}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/i,
    `<link rel="canonical" href="${route.canonicalUrl}" />`
  );

  // Replace Open Graph Tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/i,
    `<meta property="og:title" content="${route.metaTitle.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/i,
    `<meta property="og:description" content="${route.metaDescription.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/i,
    `<meta property="og:url" content="${route.canonicalUrl}" />`
  );

  // Replace Twitter Tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/i,
    `<meta name="twitter:title" content="${route.metaTitle.replace(/"/g, '&quot;')}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/i,
    `<meta name="twitter:description" content="${route.metaDescription.replace(/"/g, '&quot;')}" />`
  );

  // Inject or Replace Structured Data Schema Script
  const schemaScript = `<!-- Structured Data (JSON-LD) Pre-rendered for Google & SEO Crawlers -->\n    <script type="application/ld+json" id="prerendered-schema">\n${route.schemaJson}\n    </script>`;
  if (html.includes('id="site-schema"')) {
    html = html.replace(/<script type="application\/ld\+json" id="site-schema">[\s\S]*?<\/script>/i, schemaScript);
  } else if (html.includes('id="prerendered-schema"')) {
    html = html.replace(/<script type="application\/ld\+json" id="prerendered-schema">[\s\S]*?<\/script>/i, schemaScript);
  } else {
    html = html.replace(/<\/head>/i, `\n    ${schemaScript}\n  </head>`);
  }

  // Inject Pre-rendered Semantic Body inside <div id="root">
  const renderedBody = buildPreRenderedBody(route.pageData, route.blogPost);
  html = html.replace(
    /<div id="root"><\/div>/i,
    `<div id="root">${renderedBody}</div>`
  );

  if (route.slug === '') {
    // Root index.html
    fs.writeFileSync(indexHtmlPath, html, 'utf8');
    console.log(`✓ Updated dist/index.html with pre-rendered content and schema`);
  } else {
    // 1. Directory with index.html (e.g. /water-leak-detection/index.html)
    const targetDir = path.join(distDir, route.slug);
    fs.mkdirSync(targetDir, { recursive: true });
    const targetIndexFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetIndexFile, html, 'utf8');

    // 2. Direct HTML file (e.g. /water-leak-detection.html) for non-trailing slash compatibility
    const targetHtmlFile = path.join(distDir, `${route.slug}.html`);
    fs.writeFileSync(targetHtmlFile, html, 'utf8');

    console.log(`✓ Generated: ${route.slug}/index.html and ${route.slug}.html (200 OK)`);
  }
}

// 3. Static Redirect Aliases for legacy/alternate paths to prevent 404s
const redirectAliases: { from: string; to: string }[] = [
  { from: 'contact-nap', to: '/contact/' },
  { from: 'contact-us', to: '/contact/' },
  { from: 'about-us', to: '/about/' },
  { from: 'services', to: '/' },
  { from: 'service-areas', to: '/' },
  { from: 'locations', to: '/' },
  { from: 'emergency', to: '/emergency-leak-repair/' },
  { from: 'emergency-leak-detection', to: '/emergency-leak-repair/' },
  { from: 'water-leak', to: '/water-leak-detection/' },
  { from: 'gas-leak', to: '/gas-leak-detection/' },
  { from: 'slab-leak', to: '/slab-leak-detection/' },
  { from: 'pool-leak', to: '/pool-leak-detection/' },
  { from: 'privacy', to: '/privacy-policy/' },
];

for (const alias of redirectAliases) {
  const targetUrl = alias.to;
  const canonicalUrl = `${DOMAIN_URL}${targetUrl}`;
  const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <link rel="canonical" href="${canonicalUrl}">
  <title>Redirecting to ${BRAND_NAME}...</title>
  <script>window.location.replace("${targetUrl}");</script>
</head>
<body style="font-family: system-ui, sans-serif; background: #0F2942; color: #fff; padding: 2rem; text-align: center;">
  <h2>Redirecting...</h2>
  <p>If not redirected automatically, <a href="${targetUrl}" style="color: #F59E0B; font-weight: bold;">click here to continue to ${BRAND_NAME}</a>.</p>
</body>
</html>`;

  // Directory /alias/index.html
  const aliasDir = path.join(distDir, alias.from);
  fs.mkdirSync(aliasDir, { recursive: true });
  fs.writeFileSync(path.join(aliasDir, 'index.html'), redirectHtml, 'utf8');

  // File /alias.html
  fs.writeFileSync(path.join(distDir, `${alias.from}.html`), redirectHtml, 'utf8');
  console.log(`✓ Generated 301/Redirect alias: /${alias.from}/ -> ${targetUrl}`);
}

// 4. Generate custom branded 404.html with emergency info & React SPA script
let notFoundHtml = templateHtml;
notFoundHtml = notFoundHtml.replace(
  /<title>.*?<\/title>/i,
  `<title>Page Not Found (404) | ${BRAND_NAME}</title>`
);
notFoundHtml = notFoundHtml.replace(
  /<\/head>/i,
  `\n    <meta name="robots" content="noindex, follow" />\n  </head>`
);
const notFoundBody = `
  <div style="min-height: 80vh; background: #0F2942; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; text-align: center; font-family: system-ui, sans-serif;">
    <div style="max-width: 520px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 1.25rem; padding: 2.5rem;">
      <div style="font-size: 3rem; font-weight: 900; color: #F59E0B; margin-bottom: 0.5rem;">404</div>
      <h1 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.75rem;">Page Not Found</h1>
      <p style="color: #94A3B8; font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.75rem;">
        The requested resource could not be found. If you have an active water leak, natural gas odor, slab leak, or pool leak in Spring Valley, contact our 24/7 emergency dispatch desk immediately.
      </p>
      <a href="${PHONE_HREF}" style="display: block; background: #1E70B8; color: #fff; font-weight: bold; text-decoration: none; padding: 0.875rem 1.5rem; border-radius: 0.75rem; margin-bottom: 1rem; font-size: 1.1rem;">
        Emergency Call: ${PHONE_NUMBER}
      </a>
      <a href="/" style="display: inline-block; color: #38BDF8; font-size: 0.9rem; text-decoration: underline;">
        Return to Spring Valley Home
      </a>
      <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8rem; color: #CBD5E1;">
        Headquarters: ${BUSINESS_ADDRESS.streetAddress}, ${BUSINESS_ADDRESS.addressLocality}, NV ${BUSINESS_ADDRESS.postalCode}
      </div>
    </div>
  </div>
`;
notFoundHtml = notFoundHtml.replace(
  /<div id="root"><\/div>/i,
  `<div id="root">${notFoundBody}</div>`
);
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
fs.writeFileSync(path.join(distDir, '404/index.html') ? path.join(distDir, '404.html') : '', notFoundHtml, 'utf8');
const notFoundDir = path.join(distDir, '404');
fs.mkdirSync(notFoundDir, { recursive: true });
fs.writeFileSync(path.join(notFoundDir, 'index.html'), notFoundHtml, 'utf8');
console.log('✓ Generated dist/404.html and dist/404/index.html');

console.log('All static routes, pre-rendered semantic bodies, and alias redirects generated successfully!');
