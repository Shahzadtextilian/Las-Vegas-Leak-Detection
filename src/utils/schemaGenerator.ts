import { PageContent, DOMAIN_URL, BRAND_NAME, BUSINESS_ADDRESS, FACEBOOK_URL } from '../data/siteData';
import { BlogPost, getBlogPostUrlPath } from '../data/blogData';

export function generateSchemaForPage(page: PageContent, blogPost?: BlogPost | null) {
  const pageUrl = blogPost
    ? `${DOMAIN_URL}${getBlogPostUrlPath(blogPost)}`
    : `${DOMAIN_URL}${page.urlPath === '/' ? '' : page.urlPath}`;

  const schemas: any[] = [];

  // 1. Breadcrumbs Schema (Nevada Statewide / Regional / City)
  const springValleySuburbs = new Set([
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
      "name": "All Nevada Cities",
      "item": `${DOMAIN_URL}/#nevada-cities`
    });
  } else if (springValleySuburbs.has(page.slug)) {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Clark County & Spring Valley",
      "item": `${DOMAIN_URL}/las-vegas/`
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
      "name": "Nevada Cities",
      "item": `${DOMAIN_URL}/sitemap/`
    });
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 3,
      "name": page.navTitle,
      "item": pageUrl
    });
  } else {
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

  // 2. Base Plumber / LocalBusiness Schema with exact HQ NAP, GeoCoordinates & Statewide AreaServed
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Plumber", "LocalBusiness"],
    "@id": `${DOMAIN_URL}/#organization`,
    "name": BRAND_NAME,
    "alternateName": [
      "Leak Detection Nevada Statewide",
      "Spring Valley Leak Detection & Repair",
      "Nevada Water, Slab, Pool & Gas Leak Specialists"
    ],
    "url": `${DOMAIN_URL}/`,
    "logo": `${DOMAIN_URL}/logo.svg`,
    "image": `${DOMAIN_URL}/images/hero_emergency_plumbing_1791566119640.webp`,
    "telephone": BUSINESS_ADDRESS.telephone,
    "priceRange": "$$",
    "sameAs": [
      FACEBOOK_URL,
      "https://en.wikipedia.org/wiki/Nevada",
      "https://www.google.com/maps/place/6875+Groveview+Ln,+Las+Vegas,+NV+89103"
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
      "latitude": 36.1105,
      "longitude": -115.2415
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.8026,
        "longitude": -116.4194
      },
      "geoRadius": "480000"
    },
    "description": "24/7 non-invasive water, gas, slab, and swimming pool leak detection across all Nevada cities including Las Vegas, Henderson, North Las Vegas, Spring Valley, Reno, Sparks, Carson City, Pahrump, Mesquite, Boulder City, and Elko.",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#hero-headline", "#direct-answer-summary", ".speakable-answer"]
    },
    "areaServed": [
      { "@type": "State", "name": "Nevada", "sameAs": "https://en.wikipedia.org/wiki/Nevada" },
      { "@type": "City", "name": "Las Vegas" },
      { "@type": "City", "name": "Henderson" },
      { "@type": "City", "name": "North Las Vegas" },
      { "@type": "City", "name": "Spring Valley" },
      { "@type": "City", "name": "Reno" },
      { "@type": "City", "name": "Sparks" },
      { "@type": "City", "name": "Carson City" },
      { "@type": "City", "name": "Pahrump" },
      { "@type": "City", "name": "Mesquite" },
      { "@type": "City", "name": "Boulder City" },
      { "@type": "City", "name": "Fernley" },
      { "@type": "City", "name": "Fallon" },
      { "@type": "City", "name": "Elko" },
      { "@type": "City", "name": "Winnemucca" },
      { "@type": "City", "name": "Incline Village" },
      { "@type": "City", "name": "Laughlin" },
      { "@type": "Place", "name": "The Lakes" },
      { "@type": "Place", "name": "Spanish Trail" },
      { "@type": "Place", "name": "Rhodes Ranch" },
      { "@type": "Place", "name": "Summerlin South" },
      { "@type": "GeoShape", "postalCode": "89103" },
      { "@type": "GeoShape", "postalCode": "89113" },
      { "@type": "GeoShape", "postalCode": "89117" },
      { "@type": "GeoShape", "postalCode": "89147" },
      { "@type": "GeoShape", "postalCode": "89148" },
      { "@type": "GeoShape", "postalCode": "89052" },
      { "@type": "GeoShape", "postalCode": "89014" },
      { "@type": "GeoShape", "postalCode": "89031" },
      { "@type": "GeoShape", "postalCode": "89501" },
      { "@type": "GeoShape", "postalCode": "89431" },
      { "@type": "GeoShape", "postalCode": "89701" },
      { "@type": "GeoShape", "postalCode": "89048" },
      { "@type": "GeoShape", "postalCode": "89027" },
      { "@type": "GeoShape", "postalCode": "89005" },
      { "@type": "GeoShape", "postalCode": "89801" }
    ],
    "knowsAbout": [
      "Non-Invasive Electronic Water Leak Detection",
      "Acoustic Slab Leak Foundation Isolation",
      "Combustible Natural Gas and Propane Leak Sniffing",
      "Underwater Swimming Pool Dye and Hydrophone Testing",
      "Underground Yard Main & Well Line Pressure Testing",
      "Las Vegas Valley Water District (LVVWD) & TMWA Rebate Documentation",
      "Caliche Soil & Northern Freeze-Thaw Pipe Diagnostics",
      "Nevada State Contractors Board (NSCB) Compliance"
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
    "paymentAccepted": "Cash, Credit Card, Debit Card, Visa, Mastercard, American Express, Discover, Insurance Claims, Check",
    "currenciesAccepted": "USD",
    "hasMap": "https://www.google.com/maps/place/6875+Groveview+Ln,+Las+Vegas,+NV+89103",
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
      "dateModified": "2026-11-22T08:00:00-08:00",
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
        "@type": "State",
        "name": "Nevada"
      },
      "description": page.metaDescription,
      "url": pageUrl
    });
  } else if (page.type === 'location') {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Plumber",
      "name": `${BRAND_NAME} - ${page.navTitle} Service Area`,
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
        "name": `${page.navTitle}, Nevada`
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
