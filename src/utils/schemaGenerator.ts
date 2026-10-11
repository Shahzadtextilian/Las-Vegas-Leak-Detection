import { PageContent, PHONE_NUMBER, DOMAIN_URL, BRAND_NAME, BUSINESS_ADDRESS } from '../data/siteData';
import { BlogPost } from '../data/blogData';

export function generateSchemaForPage(page: PageContent, blogPost?: BlogPost | null) {
  const pageUrl = blogPost
    ? `${DOMAIN_URL}/blog/${blogPost.slug}/`
    : `${DOMAIN_URL}${page.urlPath === '/' ? '' : page.urlPath}`;

  const schemas: any[] = [];

  // 1. Breadcrumbs Schema
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `${DOMAIN_URL}/`
    }
  ];

  if (blogPost) {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Blog & Guides",
      "item": `${DOMAIN_URL}/blog/`
    });
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 3,
      "name": blogPost.title,
      "item": pageUrl
    });
  } else if (page.slug !== "") {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": page.name,
      "item": pageUrl
    });
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  });

  // 2. Base LocalBusiness / Plumber Schema with exact NAP & GeoCoordinates
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "@id": `${DOMAIN_URL}/#organization`,
    "name": BRAND_NAME,
    "alternateName": "Spring Valley Leak Specialists",
    "url": `${DOMAIN_URL}/`,
    "logo": `${DOMAIN_URL}/logo.svg`,
    "image": `${DOMAIN_URL}/images/hero_emergency_plumbing_1791566119640.webp`,
    "telephone": PHONE_NUMBER,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_ADDRESS.streetAddress,
      "addressLocality": BUSINESS_ADDRESS.addressLocality,
      "addressRegion": BUSINESS_ADDRESS.addressRegion,
      "postalCode": BUSINESS_ADDRESS.postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1045",
      "longitude": "-115.2412"
    },
    "description": "24/7 professional non-invasive water, gas, slab, and swimming pool leak detection and precision repair across Spring Valley, NV and Clark County.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Spring Valley, NV",
        "sameAs": "https://en.wikipedia.org/wiki/Spring_Valley,_Nevada"
      },
      {
        "@type": "City",
        "name": "Las Vegas, NV",
        "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Clark County, Nevada"
      }
    ],
    "knowsAbout": [
      "Water Leak Detection & Non-Invasive Repair",
      "Combustible Natural Gas & Propane Leak Detection",
      "Acoustic Slab Leak Foundation Detection",
      "Underwater Swimming Pool Dye & Hydrophone Testing",
      "Underground Caliche Soil Pipe Pressure Diagnostics"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Leak Detection & Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Leak Detection & Repair",
            "url": `${DOMAIN_URL}/water-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Slab Leak Detection & Foundation Repair",
            "url": `${DOMAIN_URL}/slab-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Swimming Pool Leak Detection",
            "url": `${DOMAIN_URL}/pool-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Combustible Gas Leak Detection & Shutoff",
            "url": `${DOMAIN_URL}/gas-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Underground Main Line Leak Detection",
            "url": `${DOMAIN_URL}/underground-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Leak Repair Dispatch",
            "url": `${DOMAIN_URL}/emergency-leak-repair/`
          }
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };
  schemas.push(localBusinessSchema);

  // 3. Blog Post / TechArticle Schema
  if (blogPost) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": blogPost.title,
      "description": blogPost.excerpt,
      "image": blogPost.featuredImage ? `${DOMAIN_URL}${blogPost.featuredImage}` : `${DOMAIN_URL}/images/hero_emergency_plumbing_1791566119640.webp`,
      "datePublished": "2026-10-08T08:00:00-07:00",
      "dateModified": "2026-10-11T07:15:00-07:00",
      "author": {
        "@type": "Organization",
        "name": blogPost.author,
        "url": `${DOMAIN_URL}/about/`
      },
      "publisher": {
        "@type": "Organization",
        "name": BRAND_NAME,
        "logo": {
          "@type": "ImageObject",
          "url": `${DOMAIN_URL}/logo.svg`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": pageUrl
      },
      "keywords": blogPost.tags.join(', ')
    });
  }
  // 4. Page-Specific Schema for Standard Pages
  else if (page.type === 'home' || page.type === 'service') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": page.h1,
      "serviceType": page.name,
      "provider": {
        "@type": "PlumbingService",
        "name": BRAND_NAME,
        "telephone": PHONE_NUMBER,
        "url": `${DOMAIN_URL}/`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BUSINESS_ADDRESS.streetAddress,
          "addressLocality": BUSINESS_ADDRESS.addressLocality,
          "addressRegion": BUSINESS_ADDRESS.addressRegion,
          "postalCode": BUSINESS_ADDRESS.postalCode,
          "addressCountry": "US"
        }
      },
      "areaServed": {
        "@type": "Place",
        "name": "Spring Valley, Clark County, NV"
      },
      "description": page.metaDescription,
      "url": pageUrl
    });
  } else if (page.type === 'location') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "PlumbingService",
      "name": `${BRAND_NAME} - ${page.navTitle} Service Area`,
      "telephone": PHONE_NUMBER,
      "url": pageUrl,
      "description": page.metaDescription,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_ADDRESS.streetAddress,
        "addressLocality": BUSINESS_ADDRESS.addressLocality,
        "addressRegion": BUSINESS_ADDRESS.addressRegion,
        "postalCode": BUSINESS_ADDRESS.postalCode,
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Place",
        "name": `${page.navTitle}, Spring Valley, NV`
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    });
  } else if (page.slug === 'privacy-policy') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": page.metaTitle,
      "description": page.metaDescription,
      "url": pageUrl,
      "mainEntity": {
        "@id": `${DOMAIN_URL}/#organization`
      }
    });
  } else if (page.type === 'about') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": page.metaTitle,
      "description": page.metaDescription,
      "url": pageUrl,
      "mainEntity": {
        "@id": `${DOMAIN_URL}/#organization`
      }
    });
  } else if (page.type === 'contact') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": page.metaTitle,
      "description": page.metaDescription,
      "url": pageUrl,
      "mainEntity": {
        "@id": `${DOMAIN_URL}/#organization`
      }
    });
  }

  // 5. FAQPage Schema
  if (!blogPost && page.faqs && page.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": page.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return schemas;
}
