import React, { useState, useEffect } from 'react';
import { sitePages, PageContent, DOMAIN_URL } from './data/siteData';
import { BLOG_POSTS } from './data/blogData';
import { generateSchemaForPage } from './utils/schemaGenerator';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageRenderer } from './components/PageRenderer';
import { StickyMobileCallBar } from './components/StickyMobileCallBar';

// Lazy-load non-critical routes to eliminate unused JavaScript on initial mobile loads
const SeoAuditModal = React.lazy(() =>
  import('./components/SeoAuditModal').then((m) => ({ default: m.SeoAuditModal }))
);
const BlogPage = React.lazy(() =>
  import('./components/BlogPage').then((m) => ({ default: m.BlogPage }))
);
const NotFoundPage = React.lazy(() =>
  import('./components/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

export default function App() {
  // Determine initial slug from window.location.pathname
  const getSlugFromPath = (): string => {
    const rawPath = window.location.pathname.replace(/^\/|\/$/g, '');
    if (!rawPath) return '';
    // Normalize aliases
    if (rawPath === 'blog' || rawPath.startsWith('blog/')) return rawPath;
    if (rawPath === 'how-it-works') return 'how-it-works';
    if (rawPath === 'contact-nap' || rawPath === 'contact-us') return 'contact';
    if (rawPath === 'about-us') return 'about';
    if (rawPath === 'emergency' || rawPath === 'emergency-leak-detection') return 'emergency-leak-repair';
    if (rawPath === 'water-leak') return 'water-leak-detection';
    if (rawPath === 'gas-leak') return 'gas-leak-detection';
    if (rawPath === 'slab-leak') return 'slab-leak-detection';
    if (rawPath === 'pool-leak') return 'pool-leak-detection';
    if (rawPath === 'services' || rawPath === 'locations' || rawPath === 'service-areas') return '';
    if (sitePages[rawPath]) return rawPath;
    return '404';
  };

  const [currentSlug, setCurrentSlug] = useState<string>(getSlugFromPath);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Check if we are on a blog route
  const isBlogRoute = currentSlug === 'blog' || currentSlug.startsWith('blog/');
  const activeBlogPostSlug = currentSlug.startsWith('blog/')
    ? currentSlug.replace(/^blog\//, '').replace(/\/$/, '')
    : undefined;

  const currentBlogPost = activeBlogPostSlug
    ? BLOG_POSTS.find((p) => p.slug === activeBlogPostSlug) || null
    : null;

  // Resolve page content
  const getActivePage = (): PageContent => {
    if (isBlogRoute) {
      return sitePages['blog'] || sitePages['home'];
    }
    if (currentSlug === 'how-it-works') {
      return sitePages['how-it-works'] || sitePages['about'] || sitePages['home'];
    }
    if (currentSlug === 'contact-nap') {
      return sitePages['contact'] || sitePages['home'];
    }
    return sitePages[currentSlug] || sitePages['home'];
  };

  const currentPage = getActivePage();

  // Handle in-app navigation and browser history
  const handleNavigate = (slug: string) => {
    setCurrentSlug(slug);
    const targetPath = slug === '' ? '/' : `/${slug}/`;
    window.history.pushState({}, '', targetPath);
    window.scrollTo(0, 0);
  };

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentSlug(getSlugFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document head metadata and JSON-LD schema dynamically
  useEffect(() => {
    if (currentSlug === '404') return;

    // Determine dynamic title and description
    const metaTitle = currentBlogPost
      ? `${currentBlogPost.title} | Spring Valley Leak Detection`
      : currentPage.metaTitle;
    const metaDescription = currentBlogPost
      ? currentBlogPost.excerpt
      : currentPage.metaDescription;

    document.title = metaTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', metaDescription);

    // Update OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', metaTitle);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaDescription);

    // Update Twitter Title & Description
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', metaTitle);
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', metaDescription);

    // Update Canonical Link & OpenGraph URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const fullCanonicalUrl = currentBlogPost
      ? `${DOMAIN_URL}/blog/${currentBlogPost.slug}/`
      : `${DOMAIN_URL}${currentPage.urlPath === '/' ? '' : currentPage.urlPath}`;
    canonical.setAttribute('href', fullCanonicalUrl);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullCanonicalUrl);

    // Inject JSON-LD Schema (remove both prerendered or previous dynamic scripts)
    const prerenderedScript = document.getElementById('prerendered-schema');
    if (prerenderedScript) prerenderedScript.remove();
    const siteScript = document.getElementById('site-schema');
    if (siteScript) siteScript.remove();
    const oldScript = document.getElementById('dynamic-schema-ld');
    if (oldScript) oldScript.remove();
    const schemaScript = document.createElement('script');
    schemaScript.id = 'dynamic-schema-ld';
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify(generateSchemaForPage(currentPage, currentBlogPost));
    document.head.appendChild(schemaScript);
  }, [currentPage, currentBlogPost, currentSlug]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      
      {/* 3-Zone Contract Header */}
      <Header
        currentSlug={currentSlug}
        onNavigate={handleNavigate}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Main Page Content */}
      <div className="flex-1">
        <React.Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center py-20"><div className="w-8 h-8 border-3 border-[#1E70B8] border-t-transparent rounded-full animate-spin"></div></div>}>
          {currentSlug === '404' ? (
            <NotFoundPage onNavigate={handleNavigate} />
          ) : isBlogRoute ? (
            <BlogPage
              onNavigate={handleNavigate}
              activePostSlug={activeBlogPostSlug}
            />
          ) : (
            <PageRenderer
              page={currentPage}
              onNavigate={handleNavigate}
              onOpenAudit={() => setIsAuditModalOpen(true)}
            />
          )}
        </React.Suspense>
      </div>

      {/* Footer with Full Navigation & NAP Information */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Call Bar */}
      <StickyMobileCallBar onNavigate={handleNavigate} />

      {/* Interactive SEO & Architecture Audit Modal (Loaded only when opened) */}
      {isAuditModalOpen && (
        <React.Suspense fallback={null}>
          <SeoAuditModal
            page={currentPage}
            isOpen={isAuditModalOpen}
            onClose={() => setIsAuditModalOpen(false)}
            onNavigate={handleNavigate}
          />
        </React.Suspense>
      )}

    </div>
  );
}
