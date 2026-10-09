import React, { useState, useEffect } from 'react';
import { sitePages, PageContent, DOMAIN_URL } from './data/siteData';
import { generateSchemaForPage } from './utils/schemaGenerator';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageRenderer } from './components/PageRenderer';
import { StickyMobileCallBar } from './components/StickyMobileCallBar';
import { DispatchModal } from './components/DispatchModal';
import { SeoAuditModal } from './components/SeoAuditModal';

export default function App() {
  // Determine initial slug from window.location.pathname
  const getSlugFromPath = (): string => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    if (!path) return '';
    if (sitePages[path]) return path;
    return '';
  };

  const [currentSlug, setCurrentSlug] = useState<string>(getSlugFromPath);
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Get active page data (default to home)
  const currentPage: PageContent = sitePages[currentSlug] || sitePages['home'];

  // Handle in-app navigation and browser history
  const handleNavigate = (slug: string) => {
    setCurrentSlug(slug);
    const targetPath = slug === '' ? '/' : `/${slug}/`;
    window.history.pushState({}, '', targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    document.title = currentPage.metaTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentPage.metaDescription);

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const fullCanonicalUrl = `${DOMAIN_URL}${currentPage.urlPath === '/' ? '' : currentPage.urlPath}`;
    canonical.setAttribute('href', fullCanonicalUrl);

    // Inject JSON-LD Schema
    const oldScript = document.getElementById('dynamic-schema-ld');
    if (oldScript) {
      oldScript.remove();
    }
    const schemaScript = document.createElement('script');
    schemaScript.id = 'dynamic-schema-ld';
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify(generateSchemaForPage(currentPage));
    document.head.appendChild(schemaScript);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      
      {/* 3-Zone Contract Header */}
      <Header
        currentSlug={currentSlug}
        onNavigate={handleNavigate}
        onOpenAudit={() => setIsAuditModalOpen(true)}
        onOpenDispatch={() => setIsDispatchModalOpen(true)}
      />

      {/* Main Page Content */}
      <div className="flex-1">
        <PageRenderer
          page={currentPage}
          onNavigate={handleNavigate}
          onOpenDispatch={() => setIsDispatchModalOpen(true)}
          onOpenAudit={() => setIsAuditModalOpen(true)}
        />
      </div>

      {/* Quiet Footer with Full Disclosures & Internal Links */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Call Bar (Under 15% viewport height) */}
      <StickyMobileCallBar onOpenDispatch={() => setIsDispatchModalOpen(true)} />

      {/* Online Dispatch Modal */}
      <DispatchModal
        isOpen={isDispatchModalOpen}
        onClose={() => setIsDispatchModalOpen(false)}
        defaultNeighborhood={currentPage.type === 'location' ? currentPage.navTitle : 'Downtown / Uptown'}
      />

      {/* Interactive SEO & Architecture Audit Modal */}
      <SeoAuditModal
        page={currentPage}
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
