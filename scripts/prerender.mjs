// Build-time prerender (SSG). Runs after `vite build`:
//   1. `vite build --ssr` bundles scripts/ssr-entry.tsx into .ssr-build/
//   2. this script renders every route with React + StaticRouter
//   3. the rendered body + the page's own <head> tags are written into the built dist/index.html
//      template → dist/index.html, dist/<route>/index.html and dist/404.html
import { access, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = resolve('dist');
const SSR_DIR = resolve('.ssr-build');

// Tags every page owns itself — stripped from the shared template, then re-added per route.
const PER_PAGE_TAGS = [
  /<title>[\s\S]*?<\/title>\s*/g,
  /<meta\s+(?:name|property)="(?:description|robots|og:[^"]*|twitter:[^"]*)"[^>]*>\s*/g,
  /<link\s+rel="canonical"[^>]*>\s*/g,
];
const EMPTY_ROOT = '<div id="root"></div>';

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function buildPage(template, { html, headHtml }, rootAttrs = '') {
  let out = template;
  for (const pattern of PER_PAGE_TAGS) out = out.replace(pattern, '');
  const viewport = /<meta\s+name="viewport"[^>]*>/;
  if (!viewport.test(out)) throw new Error('viewport <meta> not found in dist/index.html');
  out = out.replace(viewport, (m) => `${m}\n  ${headHtml}`);
  return out.replace(EMPTY_ROOT, () => `<div id="root"${rootAttrs}>${html}</div>`);
}

async function write(file, contents) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, contents, 'utf8');
}

try {
  const templatePath = join(DIST, 'index.html');
  if (!(await exists(templatePath))) throw new Error('dist/index.html missing — run `vite build` first');
  const template = await readFile(templatePath, 'utf8');
  if (!template.includes(EMPTY_ROOT)) {
    throw new Error('dist/index.html is already prerendered — run `npm run build` for a fresh build');
  }

  const bundle = (await readdir(SSR_DIR)).find((f) => /^ssr-entry\.m?js$/.test(f));
  if (!bundle) throw new Error('SSR bundle not found in .ssr-build/');
  const { ROUTES, NOT_FOUND_ROUTE, renderRoute } = await import(pathToFileURL(join(SSR_DIR, bundle)).href);

  for (const route of ROUTES) {
    const page = renderRoute(route);
    if (!page.meta.indexable) throw new Error(`${route} rendered as non-indexable (NotFound?)`);
    const file = route === '/' ? join(DIST, 'index.html') : join(DIST, ...route.split('/').filter(Boolean), 'index.html');
    await write(file, buildPage(template, page));
    console.log(`prerendered ${route.padEnd(34)} → ${file.slice(DIST.length - 4)}`);
  }

  const notFound = renderRoute(NOT_FOUND_ROUTE);
  if (notFound.meta.indexable) throw new Error('404 page must be non-indexable');
  // data-prerender="not-found" tells src/main.tsx to render fresh instead of hydrating (URL is unknown).
  await write(join(DIST, '404.html'), buildPage(template, notFound, ' data-prerender="not-found"'));
  console.log(`prerendered ${'404 (noindex)'.padEnd(34)} → dist/404.html`);
  console.log(`Prerender complete: ${ROUTES.length} routes + 404.html`);
} catch (err) {
  console.error('PRERENDER FAILED:', err);
  process.exitCode = 1;
} finally {
  await rm(SSR_DIR, { recursive: true, force: true });
}
