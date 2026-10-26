// Verifies the REAL build output in dist/ (run `npm run build` first):
//   node scripts/ssr-check.mjs      (or: npm run ssr-check)
// Reads the generated HTML files from disk — nothing is rendered in memory.
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const ORIGIN = 'https://fu-developers.netlify.app';
const OG_IMAGE = `${ORIGIN}/og-image.jpg`;
const DIST = resolve('dist');
const SUFFIX = ' | FU DEVELOPERS';

// Representative routes with their exact expected values (taken from the page sources).
const EXPECTED = {
  '/': {
    h1: 'We Build Digital Experiences That Move Business Forward.',
    title: 'FU DEVELOPERS | Web Development & AI Solutions in Karachi',
    description:
      'FU DEVELOPERS builds professional websites, web apps, mobile apps and AI solutions for businesses in Karachi and across Pakistan. Get your digital solution today.',
  },
  '/about': {
    h1: 'ABOUT FU DEVELOPERS',
    title: 'About FU DEVELOPERS | Digital Development Agency in Karachi',
    description:
      'Learn about FU DEVELOPERS, a digital development agency creating professional websites, web apps, mobile apps and AI solutions for businesses in Karachi and across Pakistan.',
  },
  '/services': {
    h1: 'WHAT WE BUILD',
    title: 'Web Development Services | Websites, Apps & AI | FU DEVELOPERS',
    description:
      'Explore FU DEVELOPERS services including websites, web apps, mobile apps, software solutions and AI development for businesses in Karachi and across Pakistan.',
  },
  '/services/games': {
    h1: 'INTERACTIVE GAME EXPERIENCES BUILT AROUND CREATIVE CONCEPTS.',
    title: `Games${SUFFIX}`,
    description:
      'Professional browser game development by FU DEVELOPERS for interactive, educational and arcade experiences in Karachi and across Pakistan. Discuss your concept for a clear estimate.',
  },
  '/projects': {
    h1: 'OUR WORK',
    title: 'Our Projects | Websites, Web Apps & AI Solutions | FU DEVELOPERS',
    description:
      'Explore FU DEVELOPERS projects and see examples of professional websites, web applications and digital solutions built for modern business needs.',
  },
  '/projects/todo-list': {
    h1: 'TODO LIST',
    title: `Todo List${SUFFIX}`,
    description:
      'Explore the Todo List project by FU DEVELOPERS: a daily task planner with priorities, filters and browser-saved tasks for everyday organization.',
  },
  '/process': {
    h1: 'HOW WE WORK',
    title: 'Our Development Process | FU DEVELOPERS',
    description:
      'See how FU DEVELOPERS turns ideas into professional websites, web apps, mobile apps and AI solutions through a clear and structured development process.',
  },
  '/contact': {
    h1: "LET'S BUILD SOMETHING GREAT.",
    title: 'Contact FU DEVELOPERS | Start Your Digital Project',
    description:
      'Contact FU DEVELOPERS for websites, web apps, mobile apps, software and AI solutions. Share your idea and get a clear project estimate.',
  },
};
const NOT_FOUND = {
  h1: "THIS PAGE DOESN'T EXIST.",
  title: 'Page not found | FU DEVELOPERS',
  description: 'This page could not be found. Return to FU DEVELOPERS — digital development agency.',
};

let failures = 0;
const fail = (where, msg) => {
  failures++;
  console.log(`  FAIL ${where}: ${msg}`);
};

const decode = (s) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
const squash = (s) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

/** All <meta> tags with the given attribute value → array of content strings. */
function metas(html, attr, key) {
  const out = [];
  const re = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="([^"]*)"\\s*/?>`, 'g');
  for (const m of html.matchAll(re)) out.push(decode(m[1]));
  return out;
}
const titles = (html) => [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)].map((m) => decode(m[1]));
const canonicals = (html) => [...html.matchAll(/<link\s+rel="canonical"\s+href="([^"]*)"/g)].map((m) => m[1]);
const h1s = (html) => [...html.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => squash(m[0]));
const head = (html) => html.slice(0, html.indexOf('</head>'));

function one(where, label, values, expected) {
  if (values.length !== 1) return fail(where, `${label}: expected exactly 1, found ${values.length}`);
  if (expected !== undefined && values[0] !== expected)
    fail(where, `${label}: expected "${expected}" but got "${values[0]}"`);
}

function checkJsonLd(where, html, route) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const types = [];
  for (const [, raw] of blocks) {
    try {
      const data = JSON.parse(raw);
      const nodes = Array.isArray(data) ? data : data['@graph'] ?? [data];
      for (const n of nodes) types.push(n['@type']);
      if (/\/(services|projects)\/[^/]+$/.test(route)) {
        for (const n of nodes) {
          if ((n['@type'] === 'Service' || n['@type'] === 'CreativeWork') && n.url !== `${ORIGIN}${route}`)
            fail(where, `JSON-LD ${n['@type']} url "${n.url}" does not match route`);
        }
      }
    } catch (e) {
      fail(where, `invalid JSON-LD block (${e.message})`);
    }
  }
  const need = ['Organization', 'WebSite'];
  if (/^\/services\/[^/]+$/.test(route)) need.push('Service', 'BreadcrumbList');
  if (/^\/projects\/[^/]+$/.test(route)) need.push('CreativeWork', 'BreadcrumbList');
  if (route === '/contact') need.push('ContactPage');
  for (const t of need) if (!types.includes(t)) fail(where, `JSON-LD @type ${t} missing (found: ${types.join(', ')})`);
  return types;
}

function checkCommon(where, html, exp, { indexable, route }) {
  const h = head(html);
  one(where, '<title>', titles(h), exp.title);
  one(where, 'meta description', metas(h, 'name', 'description'), exp.description);
  one(where, 'og:title', metas(h, 'property', 'og:title'), exp.title);
  one(where, 'og:description', metas(h, 'property', 'og:description'), exp.description);
  one(where, 'og:type', metas(h, 'property', 'og:type'), 'website');
  one(where, 'og:site_name', metas(h, 'property', 'og:site_name'), 'FU DEVELOPERS');
  one(where, 'og:image', metas(h, 'property', 'og:image'), OG_IMAGE);
  one(where, 'og:image:width', metas(h, 'property', 'og:image:width'), '1200');
  one(where, 'og:image:height', metas(h, 'property', 'og:image:height'), '630');
  one(where, 'og:image:type', metas(h, 'property', 'og:image:type'), 'image/jpeg');
  one(where, 'og:image:alt', metas(h, 'property', 'og:image:alt'));
  one(where, 'twitter:card', metas(h, 'name', 'twitter:card'), 'summary_large_image');
  one(where, 'twitter:title', metas(h, 'name', 'twitter:title'), exp.title);
  one(where, 'twitter:description', metas(h, 'name', 'twitter:description'), exp.description);
  one(where, 'twitter:image', metas(h, 'name', 'twitter:image'), OG_IMAGE);
  one(where, 'twitter:image:alt', metas(h, 'name', 'twitter:image:alt'));
  if (/twitter:(site|creator)/.test(h)) fail(where, 'invented twitter:site / twitter:creator present');

  const url = `${ORIGIN}${route === '/' ? '/' : route}`;
  if (indexable) {
    one(where, 'canonical', canonicals(h), url);
    one(where, 'og:url', metas(h, 'property', 'og:url'), url);
    if (metas(h, 'name', 'robots').length) fail(where, 'indexable page must not carry a robots meta');
  } else {
    if (canonicals(h).length) fail(where, 'non-indexable page must not have a canonical');
    if (metas(h, 'property', 'og:url').length) fail(where, 'non-indexable page must not have og:url');
    one(where, 'robots', metas(h, 'name', 'robots'), 'noindex');
  }

  const found = h1s(html);
  if (found.length !== 1) fail(where, `expected exactly 1 <h1>, found ${found.length}`);
  else if (exp.h1 !== undefined && found[0] !== exp.h1) fail(where, `<h1> expected "${exp.h1}" but got "${found[0]}"`);
  if (!/<div id="root"[^>]*><[a-z]/.test(html)) fail(where, '#root is empty (not prerendered)');
  if (!/<script type="module"[^>]*src="\/assets\/[^"]+\.js"/.test(html)) fail(where, 'client bundle <script> missing');
  if (!/<link rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"/.test(html)) fail(where, 'stylesheet <link> missing');
  return checkJsonLd(where, html, route);
}

// ---- routes: the sitemap is the independent list of every real route ----
const sitemap = await readFile(resolve('public/sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
if (!routes.length) fail('sitemap', 'no routes found in public/sitemap.xml');

const seenTitles = new Map();
const seenDescriptions = new Map();
const routeFile = (r) => (r === '/' ? join(DIST, 'index.html') : join(DIST, ...r.split('/').filter(Boolean), 'index.html'));

console.log(`Checking ${routes.length} sitemap routes + 404.html in ${DIST}\n`);
for (const route of routes) {
  const before = failures;
  let html;
  try {
    html = await readFile(routeFile(route), 'utf8');
  } catch {
    fail(route, `${routeFile(route).replace(DIST, 'dist')} does not exist`);
    console.log(`FAIL ${route}`);
    continue;
  }
  const exp = EXPECTED[route] ?? {};
  // Routes without hard-coded expectations still get the full structural check.
  const h = head(html);
  const t = titles(h)[0];
  const d = metas(h, 'name', 'description')[0];
  const merged = { title: exp.title ?? t, description: exp.description ?? d, h1: exp.h1 };
  const types = checkCommon(route, html, merged, { indexable: true, route });
  if (t) seenTitles.set(t, [...(seenTitles.get(t) ?? []), route]);
  if (d) seenDescriptions.set(d, [...(seenDescriptions.get(d) ?? []), route]);
  const tag = EXPECTED[route] ? 'exact ' : 'struct';
  console.log(`${failures === before ? 'OK  ' : 'FAIL'} ${route.padEnd(32)} [${tag}] ${String(h1s(html)[0]).slice(0, 36).padEnd(36)} ld+json: ${types.join(',')}`);
}
for (const [value, rs] of [...seenTitles, ...seenDescriptions]) {
  if (rs.length > 1) fail('uniqueness', `"${value.slice(0, 50)}…" shared by ${rs.join(', ')}`);
}

// ---- 404 ----
{
  const before = failures;
  try {
    const html = await readFile(join(DIST, '404.html'), 'utf8');
    checkCommon('404.html', html, NOT_FOUND, { indexable: false, route: '/404' });
    if (!html.includes('<div id="root" data-prerender="not-found">')) fail('404.html', 'missing data-prerender="not-found" marker');
  } catch {
    fail('404.html', 'dist/404.html does not exist');
  }
  console.log(`${failures === before ? 'OK  ' : 'FAIL'} 404.html${' '.repeat(24)} [exact ] noindex, no canonical, no og:url`);
}

// ---- Netlify routing: no catch-all 200 rewrite ----
try {
  const redirects = await readFile(join(DIST, '_redirects'), 'utf8');
  const rules = redirects.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
  const catchAll = rules.filter((l) => /^\/\*\s+\S+\s+200!?$/.test(l));
  if (catchAll.length) fail('_redirects', `catch-all 200 rewrite found (soft-404): ${catchAll.join(' | ')}`);
  console.log(`${catchAll.length ? 'FAIL' : 'OK  '} _redirects                  ${rules.length} active rule(s), no catch-all 200`);
} catch {
  fail('_redirects', 'dist/_redirects missing');
}

console.log(failures ? `\nSSR CHECK FAILED — ${failures} problem(s)` : '\nSSR CHECK PASSED — all generated HTML verified');
process.exitCode = failures ? 1 : 0;
