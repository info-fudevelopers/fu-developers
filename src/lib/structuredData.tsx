import { SITE } from '../data/site';
import { PRODUCTION_ORIGIN } from './seo';

/**
 * Organization + WebSite JSON-LD live once in index.html (so they are present in the
 * raw HTML of every route). Page-level schemas below reference them by @id instead of
 * repeating the full Organization block.
 */
export const ORGANIZATION_ID = `${PRODUCTION_ORIGIN}/#organization`;
export const WEBSITE_ID = `${PRODUCTION_ORIGIN}/#website`;

type JsonLdObject = Record<string, unknown>;

const pageUrl = (path: string) => `${PRODUCTION_ORIGIN}${path === '/' ? '/' : path}`;

/** Renders one or more JSON-LD objects as <script type="application/ld+json">. SSR-safe. */
export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  const json = JSON.stringify(Array.isArray(data) ? data : [data]).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

/** Mirrors the visible breadcrumb trail (PageHero crumbs) on detail pages. */
export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function serviceSchema(opts: {
  slug: string;
  name: string;
  serviceType: string;
  description: string;
}): JsonLdObject {
  const url = pageUrl(`/services/${opts.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: { '@type': 'Country', name: 'Pakistan' },
  };
}

export function projectSchema(opts: {
  slug: string;
  name: string;
  description: string;
  keywords: string[];
}): JsonLdObject {
  const url = pageUrl(`/projects/${opts.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: opts.name,
    description: opts.description,
    url,
    keywords: opts.keywords.join(', '),
    creator: { '@id': ORGANIZATION_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function contactPageSchema(opts: { name: string; description: string }): JsonLdObject {
  const url = pageUrl('/contact');
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${url}#webpage`,
    name: opts.name,
    description: opts.description,
    url,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE.name,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SITE.email,
          telephone: `+${SITE.whatsappIntl}`,
        },
      ],
    },
  };
}
