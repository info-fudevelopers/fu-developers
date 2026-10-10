import { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const PRODUCTION_ORIGIN = 'https://fudevelopers.com';
export const SITE_NAME = 'FU DEVELOPERS';
const SOCIAL_IMAGE = `${PRODUCTION_ORIGIN}/og-image.jpg`;
const SOCIAL_IMAGE_WIDTH = '1200';
const SOCIAL_IMAGE_HEIGHT = '630';
const SOCIAL_IMAGE_TYPE = 'image/jpeg';
const SOCIAL_IMAGE_ALT =
  'FU DEVELOPERS logo with the tagline Websites, Web Apps, Mobile Apps, AI Solutions';

export type PageMeta = {
  title: string;
  description: string;
  indexable?: boolean;
};

/** A page's metadata after the route path has been resolved. */
export type ResolvedPageMeta = Required<PageMeta> & { path: string };

export type HeadTag =
  | { kind: 'title'; text: string }
  | { kind: 'meta'; attr: 'name' | 'property'; key: string; content: string }
  | { kind: 'canonical'; href: string };

/** Canonical route path: no trailing slash (except the root). */
export const normalizeRoutePath = (pathname: string) =>
  pathname === '/' ? '/' : pathname.replace(/\/+$/, '') || '/';

/**
 * Single source of truth for every head tag a page owns. The browser (usePageMeta) and the
 * build-time prerender (scripts/prerender.mjs) both use it, so they can never drift apart.
 * Non-indexable pages (404) get `noindex` and no canonical / og:url.
 */
export function buildHeadTags({ title, description, path, indexable }: ResolvedPageMeta): HeadTag[] {
  const url = `${PRODUCTION_ORIGIN}${path}`;
  const tags: HeadTag[] = [
    { kind: 'title', text: title },
    { kind: 'meta', attr: 'name', key: 'description', content: description },
  ];
  if (!indexable) tags.push({ kind: 'meta', attr: 'name', key: 'robots', content: 'noindex' });
  tags.push(
    { kind: 'meta', attr: 'property', key: 'og:type', content: 'website' },
    { kind: 'meta', attr: 'property', key: 'og:site_name', content: SITE_NAME },
    { kind: 'meta', attr: 'property', key: 'og:title', content: title },
    { kind: 'meta', attr: 'property', key: 'og:description', content: description },
  );
  if (indexable) tags.push({ kind: 'meta', attr: 'property', key: 'og:url', content: url });
  tags.push(
    { kind: 'meta', attr: 'property', key: 'og:image', content: SOCIAL_IMAGE },
    { kind: 'meta', attr: 'property', key: 'og:image:width', content: SOCIAL_IMAGE_WIDTH },
    { kind: 'meta', attr: 'property', key: 'og:image:height', content: SOCIAL_IMAGE_HEIGHT },
    { kind: 'meta', attr: 'property', key: 'og:image:type', content: SOCIAL_IMAGE_TYPE },
    { kind: 'meta', attr: 'property', key: 'og:image:alt', content: SOCIAL_IMAGE_ALT },
    { kind: 'meta', attr: 'name', key: 'twitter:card', content: 'summary_large_image' },
    { kind: 'meta', attr: 'name', key: 'twitter:title', content: title },
    { kind: 'meta', attr: 'name', key: 'twitter:description', content: description },
    { kind: 'meta', attr: 'name', key: 'twitter:image', content: SOCIAL_IMAGE },
    { kind: 'meta', attr: 'name', key: 'twitter:image:alt', content: SOCIAL_IMAGE_ALT },
  );
  if (indexable) tags.push({ kind: 'canonical', href: url });
  return tags;
}

/**
 * Prerender-only: scripts/ssr-entry.tsx provides a collector so the metadata a page declares
 * through usePageMeta can be written into the static HTML <head>. Never set in the browser.
 */
export const HeadCollectorContext = createContext<{ current: ResolvedPageMeta | null } | null>(
  null,
);

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Sets unique per-page SEO metadata (title, description, Open Graph, Twitter). */
export function usePageMeta({ title, description, indexable = true }: PageMeta) {
  const { pathname } = useLocation();
  const collector = useContext(HeadCollectorContext);
  const path = normalizeRoutePath(pathname);

  // Prerender: record the metadata synchronously during render (effects never run on the server).
  if (collector) collector.current = { title, description, indexable, path };

  useEffect(() => {
    const tags = buildHeadTags({ title, description, indexable, path });

    // Updates tags already present in the prerendered HTML in place (no duplicates).
    for (const tag of tags) {
      if (tag.kind === 'title') document.title = tag.text;
      else if (tag.kind === 'meta') upsertMeta(tag.attr, tag.key, tag.content);
    }

    const canonicalLinks = document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]');
    if (indexable) {
      const canonicalLink = canonicalLinks[0] ?? document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = `${PRODUCTION_ORIGIN}${path}`;
      if (!canonicalLink.parentNode) document.head.appendChild(canonicalLink);
      canonicalLinks.forEach((link) => {
        if (link !== canonicalLink) link.remove();
      });
      document.head.querySelectorAll('meta[name="robots"]').forEach((meta) => meta.remove());
    } else {
      canonicalLinks.forEach((link) => link.remove());
      document.head.querySelectorAll('meta[property="og:url"]').forEach((meta) => meta.remove());
    }
  }, [title, description, path, indexable]);
}
