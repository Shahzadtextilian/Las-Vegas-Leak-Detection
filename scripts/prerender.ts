import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.js';
import { sitePages, DOMAIN_URL, PHONE_NUMBER, PHONE_HREF, BUSINESS_ADDRESS, BRAND_NAME, PageContent } from '../src/data/siteData.js';
import { BLOG_POSTS, BlogPost, getBlogPostUrlPath } from '../src/data/blogData.js';
import { generateSchemaForPage } from '../src/utils/schemaGenerator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

let templateHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Inline compiled Tailwind CSS directly into <head> to eliminate render-blocking stylesheet request
const cssLinkRegex = /<link\s+rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/i;
const cssMatch = templateHtml.match(cssLinkRegex);
if (cssMatch) {
  const cssRelPath = cssMatch[1].replace(/^\//, '');
  const cssFullPath = path.join(distDir, cssRelPath);
  if (fs.existsSync(cssFullPath)) {
    const cssContent = fs.readFileSync(cssFullPath, 'utf8');
    templateHtml = templateHtml.replace(cssMatch[0], `<style id="inlined-app-css">${cssContent}</style>`);
    console.log(`✓ Inlined ${cssRelPath} (${(cssContent.length / 1024).toFixed(1)} kB raw) into HTML <head>`);
  }
}

/**
 * Renders the exact React component tree via ReactDOMServer renderToString so static crawlers
 * receive 100% complete semantic content and client hydrateRoot causes 0 CLS and 0 forced reflow.
 */
function buildPreRenderedBody(urlPath: string): string {
  const normalized = urlPath.replace(/^\/|\/$/g, '');
  const ssrSlug = normalized === 'spring-valley-leak-detection-guide' ? 'blog/spring-valley-leak-detection-guide' : normalized;
  return renderToString(React.createElement(App, { initialSlug: ssrSlug }));
}
// Unused legacy template helper removed; SSR uses React renderToString directly.

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
  const urlPath = getBlogPostUrlPath(post);
  const postSlug = urlPath.replace(/^\/|\/$/g, '');
  const canonicalUrl = `${DOMAIN_URL}${urlPath}`;
  const schema = generateSchemaForPage(blogIndexPage, post);
  const schemaJson = JSON.stringify(schema, null, 2);

  routesToPrerender.push({
    slug: postSlug,
    urlPath,
    metaTitle: post.metaTitle || `${post.title} | ${BRAND_NAME}`,
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

  // Inject Pre-rendered SSR React DOM inside <div id="root">
  const renderedBody = buildPreRenderedBody(route.urlPath);
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
        The requested resource could not be found. If you have an active water leak, natural gas odor, slab leak, or pool leak anywhere in Nevada, contact our 24/7 emergency dispatch desk immediately.
      </p>
      <a href="${PHONE_HREF}" style="display: block; background: #1E70B8; color: #fff; font-weight: bold; text-decoration: none; padding: 0.875rem 1.5rem; border-radius: 0.75rem; margin-bottom: 1rem; font-size: 1.1rem;">
        Emergency Call: ${PHONE_NUMBER}
      </a>
      <a href="/" style="display: inline-block; color: #38BDF8; font-size: 0.9rem; text-decoration: underline;">
        Return to Nevada Home
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
