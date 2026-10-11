import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sitePages, DOMAIN_URL } from '../src/data/siteData.js';
import { BLOG_POSTS } from '../src/data/blogData.js';
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

interface RouteConfig {
  slug: string;
  urlPath: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  schemaJson: string;
}

const routesToPrerender: RouteConfig[] = [];

// 1. All site pages in siteData
for (const [key, page] of Object.entries(sitePages)) {
  if (key === 'home') continue; // home already generated as dist/index.html

  const canonicalUrl = `${DOMAIN_URL}/${page.slug}/`;
  const schema = generateSchemaForPage(page, null);
  const schemaJson = JSON.stringify(schema, null, 2);

  routesToPrerender.push({
    slug: page.slug,
    urlPath: `/${page.slug}/`,
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    canonicalUrl,
    schemaJson,
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
    metaTitle: `${post.title} | Spring Valley Leak Detection & Repair`,
    metaDescription: post.excerpt,
    canonicalUrl,
    schemaJson,
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

  // Inject Structured Data Schema Script
  const schemaScript = `\n    <!-- Structured Data (JSON-LD) Pre-rendered for Google & SEO Crawlers -->\n    <script type="application/ld+json" id="prerendered-schema">\n${route.schemaJson}\n    </script>\n  </head>`;
  html = html.replace(/<\/head>/i, schemaScript);

  // Target directory inside dist
  const targetDir = path.join(distDir, route.slug);
  fs.mkdirSync(targetDir, { recursive: true });

  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');
  console.log(`✓ Generated: ${route.slug}/index.html -> 200 OK (${route.canonicalUrl})`);
}

// Also ensure homepage index.html has pre-rendered schema
const homePage = sitePages['home'];
if (homePage) {
  const homeSchema = generateSchemaForPage(homePage, null);
  const homeSchemaJson = JSON.stringify(homeSchema, null, 2);
  let homeHtml = templateHtml;
  const schemaScript = `\n    <!-- Structured Data (JSON-LD) Pre-rendered for Google & SEO Crawlers -->\n    <script type="application/ld+json" id="prerendered-schema">\n${homeSchemaJson}\n    </script>\n  </head>`;
  homeHtml = homeHtml.replace(/<\/head>/i, schemaScript);
  fs.writeFileSync(indexHtmlPath, homeHtml, 'utf8');
  console.log('✓ Updated: dist/index.html with pre-rendered homepage JSON-LD schema');
}

// Create 404.html from dist/index.html so unmatched client routes still mount the React app
fs.copyFileSync(indexHtmlPath, path.join(distDir, '404.html'));
console.log('✓ Generated dist/404.html SPA fallback');
console.log('All static routes pre-rendered successfully!');
