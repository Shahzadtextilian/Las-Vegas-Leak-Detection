import React, { useState, useEffect, useRef } from 'react';
import { sitePages, PageContent, DOMAIN_URL } from './data/siteData';
import { BLOG_POSTS, getBlogPostUrlPath } from './data/blogData';
import { generateSchemaForPage } from './utils/schemaGenerator';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageRenderer } from './components/PageRenderer';
import { StickyMobileCallBar } from './components/StickyMobileCallBar';
import { BlogPage } from './components/BlogPage';

// Lazy-load interaction/fallback modals not rendered on initial valid page load
const SeoAuditModal = React.lazy(() =>
  import('./components/SeoAuditModal').then((m) => ({ default: m.SeoAuditModal }))
);
const NotFoundPage = React.lazy(() =>
  import('./components/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

interface AppProps {
  initialSlug?: string;
}

export default function App({ initialSlug }: AppProps) {
  // Determine initial slug safely for both SSR and client hydration
  const getSlugFromPath = (): string => {
    if (typeof window === 'undefined') return '';
    const rawPath = window.location.pathname.replace(/\.html$/, '').replace(/^\/|\/$/g, '');
    if (!rawPath) return '';
    // Normalize aliases
    if (rawPath === 'spring-valley-leak-detection-guide' || rawPath === 'blog/spring-valley-leak-detection-guide') {
      return 'blog/spring-valley-leak-detection-guide';
    }
    // Check direct blog posts with customUrlPath
    const matchingCustomPost = BLOG_POSTS.find(
      (p) => p.customUrlPath && p.customUrlPath.replace(/^\/|\/$/g, '') === rawPath
    );
    if (matchingCustomPost) return rawPath;
    if (rawPath === 'blog' || rawPath.startsWith('blog/')) return rawPath;
    if (rawPath === 'how-it-works') return 'how-it-works';
    if (rawPath === 'contact-nap' || rawPath === 'contact-us') return 'contact';
    if (rawPath === 'about-us') return 'about';
    if (rawPath === 'emergency' || rawPath === 'emergency-leak-detection') return 'emergency-leak-repair';
    if (rawPath === 'water-leak') return 'water-leak-detection';
    if (rawPath === 'gas-leak') return 'gas-leak-detection';
    if (rawPath === 'slab-leak') return 'slab-leak-detection';
    if (rawPath === 'pool-leak') return 'pool-leak-detection';
    if (rawPath === 'privacy') return 'privacy-policy';
    if (rawPath === 'disclaimer') return 'disclaimer';
    if (rawPath === 'sitemap') return 'sitemap';
    if (rawPath === 'services' || rawPath === 'locations' || rawPath === 'service-areas') return '';
    if (['las-vegas', 'henderson', 'north-las-vegas', 'reno', 'sparks', 'pahrump', 'mesquite', 'boulder-city', 'elko-rural-nevada'].includes(rawPath)) {
      return 'carson-city';
    }
    if (sitePages[rawPath]) return rawPath;
    return '404';
  };

  const [currentSlug, setCurrentSlug] = useState<string>(() =>
    initialSlug !== undefined ? initialSlug : getSlugFromPath()
  );
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const isFirstHydration = useRef(true);

  const customBlogPostMatch = BLOG_POSTS.find(
    (p) => p.customUrlPath && p.customUrlPath.replace(/^\/|\/$/g, '') === currentSlug
  ) || null;

  // Check if we are on a blog route
  const isBlogRoute = currentSlug === 'blog' || currentSlug.startsWith('blog/') || !!customBlogPostMatch;

  const activeBlogPostSlug = customBlogPostMatch
    ? customBlogPostMatch.slug
    : currentSlug.startsWith('blog/')
    ? currentSlug.replace(/^blog\//, '').replace(/\/$/, '')
    : undefined;

  const currentBlogPost = activeBlogPostSlug
    ? BLOG_POSTS.find((p) => p.slug === activeBlogPostSlug) || null
    : null;

  // Resolve page content
  const getActivePage = (): PageContent => {
    if (isBlogRoute) {
      return sitePages['spring-valley-leak-detection-guide'] || sitePages['blog'] || sitePages['home'];
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

  // Sync document head metadata and JSON-LD schema on client-side navigation (skip first SSR-matched mount)
  useEffect(() => {
    if (currentSlug === '404') return;
    if (isFirstHydration.current) {
      isFirstHydration.current = false;
      if (document.getElementById('prerendered-schema')) {
        return;
      }
    }

    // Determine dynamic title and description
    const metaTitle = currentBlogPost
      ? (currentBlogPost.metaTitle || `${currentBlogPost.title} | Leak Detection NV`)
      : currentPage.metaTitle;
    const metaDescription = currentBlogPost
      ? (currentBlogPost.metaDescription || currentBlogPost.excerpt)
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
      ? `${DOMAIN_URL}${getBlogPostUrlPath(currentBlogPost)}`
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
