import { PageContent, DOMAIN_URL, BRAND_NAME, BUSINESS_ADDRESS, FACEBOOK_URL } from '../data/siteData';
import { BlogPost, getBlogPostUrlPath } from '../data/blogData';

export function generateSchemaForPage(page: PageContent, blogPost?: BlogPost | null) {
  const pageUrl = blogPost
    ? `${DOMAIN_URL}${getBlogPostUrlPath(blogPost)}`
    : `${DOMAIN_URL}${page.urlPath === '/' ? '' : page.urlPath}`;

  const schemas: any[] = [];

  // 1. Breadcrumbs Schema (Nevada > Carson City > Page)
  const legacySpringValleySlugs = new Set([
    "spring-valley-center",
    "the-lakes",
    "spanish-trail",
    "summerlin-south",
    "rhodes-ranch",
  ]);

  const breadcrumbItems: Array<{ "@type": string; position: number; name: string; item: string }> = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Nevada",
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
  } else if (page.slug === "") {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Carson City, NV",
      "item": `${DOMAIN_URL}/#carson-city-areas`
    });
  } else if (legacySpringValleySlugs.has(page.slug)) {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Clark County",
      "item": `${DOMAIN_URL}/spring-valley-center/`
    });
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 3,
      "name": page.navTitle,
      "item": pageUrl
    });
  } else if (page.type === "location") {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Carson City",
      "item": `${DOMAIN_URL}/carson-city/`
    });
    if (page.slug !== "carson-city") {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 3,
        "name": page.navTitle,
        "item": pageUrl
      });
    }
  } else {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Carson City",
      "item": `${DOMAIN_URL}/`
    });
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 3,
      "name": page.name,
      "item": pageUrl
    });
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  });

  // 2. Base Plumber / LocalBusiness Schema targeting Carson City, Nevada
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness"],
    "@id": `${DOMAIN_URL}/#organization`,
    "name": BRAND_NAME,
    "alternateName": [
      "Carson City Leak Detection & Repair",
      "Carson City Water, Slab & Gas Leak Specialists"
    ],
    "url": `${DOMAIN_URL}/`,
    "logo": `${DOMAIN_URL}/logo.svg`,
    "image": `${DOMAIN_URL}/images/hero_emergency_plumbing_1791566119640.webp`,
    "telephone": BUSINESS_ADDRESS.telephone,
    "priceRange": "$$",
    "sameAs": [
      FACEBOOK_URL,
      "https://en.wikipedia.org/wiki/Carson_City,_Nevada",
      "https://www.google.com/maps/place/210+Rawhide+Way,+Carson+City,+NV+89701"
    ],
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
      "latitude": 39.165275,
      "longitude": -119.756193
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.165275,
        "longitude": -119.756193
      },
      "geoRadius": "25000"
    },
    "description": "24/7 non-invasive water, gas, slab, well-main, and swimming pool leak detection in Carson City, Nevada—serving Downtown Capitol District, Westside, Kings Canyon, Lakeview, Silver Oak, Clearview, and Empire Ranch (89701–89706).",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#hero-headline", "#direct-answer-summary", ".speakable-answer"]
    },
    "areaServed": [
      { "@type": "City", "name": "Carson City", "sameAs": "https://en.wikipedia.org/wiki/Carson_City,_Nevada" },
      { "@type": "Place", "name": "Downtown Carson City & Capitol District" },
      { "@type": "Place", "name": "Westside Historic District" },
      { "@type": "Place", "name": "Kings Canyon & Lakeview" },
      { "@type": "Place", "name": "North Carson, Lompa Lane & Silver Oak" },
      { "@type": "Place", "name": "South Carson, Clearview & Stewart" },
      { "@type": "Place", "name": "East Carson, Empire Ranch & Pinion Hills" },
      { "@type": "GeoShape", "postalCode": "89701" },
      { "@type": "GeoShape", "postalCode": "89702" },
      { "@type": "GeoShape", "postalCode": "89703" },
      { "@type": "GeoShape", "postalCode": "89705" },
      { "@type": "GeoShape", "postalCode": "89706" }
    ],
    "knowsAbout": [
      "Non-Invasive Electronic Water Leak Detection",
      "Carson City Freeze-Thaw Crawlspace & Slab Diagnostics",
      "Combustible Natural Gas and Propane Leak Sniffing",
      "Swimming Pool Hydrophone & Dye Leak Testing",
      "Private Well & Underground Yard Main Pressure Testing",
      "Carson City Public Works Water Utility Leak Reports",
      "Nevada State Contractors Board (NSCB) Compliance"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Carson City Leak Detection & Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Leak Detection & Repair in Carson City, NV",
            "url": `${DOMAIN_URL}/water-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Slab Leak Detection & Foundation Repair in Carson City, NV",
            "url": `${DOMAIN_URL}/slab-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Swimming Pool Leak Detection in Carson City, NV",
            "url": `${DOMAIN_URL}/pool-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Combustible Gas Leak Detection & Shutoff in Carson City, NV",
            "url": `${DOMAIN_URL}/gas-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Underground Main & Well Line Leak Detection in Carson City, NV",
            "url": `${DOMAIN_URL}/underground-leak-detection/`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "24/7 Emergency Leak Repair Dispatch in Carson City, NV",
            "url": `${DOMAIN_URL}/emergency-leak-repair/`
          }
        }
      ]
    },
    "paymentAccepted": "Cash, Credit Card, Debit Card, Visa, Mastercard, American Express, Discover, Insurance Claims, Check",
    "currenciesAccepted": "USD",
    "hasMap": "https://www.google.com/maps/place/210+Rawhide+Way,+Carson+City,+NV+89701",
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
      "headline": blogPost.h1 || blogPost.title,
      "name": blogPost.metaTitle || blogPost.title,
      "description": blogPost.metaDescription || blogPost.excerpt,
      "image": blogPost.featuredImage ? `${DOMAIN_URL}${blogPost.featuredImage}` : `${DOMAIN_URL}/images/hero_emergency_plumbing_1791566119640.webp`,
      "datePublished": blogPost.slug === 'pool-irrigation-leak-detection-spring-valley'
        ? "2026-11-18T08:00:00-08:00"
        : blogPost.slug === 'spring-valley-leak-detection-guide'
        ? "2026-11-05T07:00:00-08:00"
        : "2026-10-08T08:00:00-07:00",
      "dateModified": "2026-11-22T08:25:00-08:00",
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
        "@type": "Plumber",
        "name": BRAND_NAME,
        "telephone": BUSINESS_ADDRESS.telephone,
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
        "@type": "City",
        "name": "Carson City",
        "sameAs": "https://en.wikipedia.org/wiki/Carson_City,_Nevada"
      },
      "description": page.metaDescription,
      "url": pageUrl
    });
  } else if (page.type === 'location') {
    const areaName = legacySpringValleySlugs.has(page.slug)
      ? `${page.navTitle}, Las Vegas, Nevada`
      : page.slug === 'carson-city'
      ? `Carson City, Nevada`
      : `${page.navTitle}, Carson City, Nevada`;

    schemas.push({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": `${BRAND_NAME} - ${page.navTitle}`,
      "telephone": BUSINESS_ADDRESS.telephone,
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
        "name": areaName
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
  const faqsToUse = (blogPost && blogPost.content.faqs && blogPost.content.faqs.length > 0)
    ? blogPost.content.faqs
    : (page.faqs && page.faqs.length > 0 ? page.faqs : null);

  if (faqsToUse && faqsToUse.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqsToUse.map(faq => ({
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
