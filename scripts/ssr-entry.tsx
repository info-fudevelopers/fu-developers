import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';
import { PROJECTS } from '../src/data/projects';
import { SERVICES } from '../src/data/services';
import {
  HeadCollectorContext,
  buildHeadTags,
  type HeadTag,
  type ResolvedPageMeta,
} from '../src/lib/seo';

/** Every real, indexable route. Slugs come from the same data files the router uses. */
export const ROUTES: string[] = [
  '/',
  '/about',
  '/services',
  ...SERVICES.map((s) => `/services/${s.slug}`),
  '/projects',
  ...PROJECTS.filter((p) => p.slug && p.overview).map((p) => `/projects/${p.slug}`),
  '/process',
  '/contact',
];

/** Any path no route matches renders the existing NotFound page (→ dist/404.html). */
export const NOT_FOUND_ROUTE = '/404';

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function serializeHeadTag(tag: HeadTag): string {
  switch (tag.kind) {
    case 'title':
      return `<title>${escapeText(tag.text)}</title>`;
    case 'meta':
      return `<meta ${tag.attr}="${escapeAttr(tag.key)}" content="${escapeAttr(tag.content)}" />`;
    case 'canonical':
      return `<link rel="canonical" href="${escapeAttr(tag.href)}" />`;
  }
}

export type RenderedRoute = { html: string; meta: ResolvedPageMeta; headHtml: string };

export function renderRoute(route: string): RenderedRoute {
  const collector: { current: ResolvedPageMeta | null } = { current: null };
  const html = renderToString(
    <HeadCollectorContext.Provider value={collector}>
      <StaticRouter location={route}>
        <App />
      </StaticRouter>
    </HeadCollectorContext.Provider>,
  );
  const meta = collector.current;
  if (!meta) throw new Error(`No usePageMeta() call rendered for route ${route}`);
  const headHtml = buildHeadTags(meta).map(serializeHeadTag).join('\n  ');
  return { html, meta, headHtml };
}
