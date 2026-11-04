import type { Metadata } from 'next';
import { EMAIL, IMG, SITE_URL, SOCIAL, type FaqItem } from './content';

export const ORG_ID = `${SITE_URL}/#organization`;

type MetaInput = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  /** 对应英文页面路径（有真正对应的英文页时才填）。 */
  en?: string;
  /** 首页用完整标题，其余页套用「｜RVL Funding」模板。 */
  absoluteTitle?: boolean;
};

export function buildMetadata({ path, title, description, keywords, image = IMG.hero, imageAlt, en, absoluteTitle }: MetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title}｜RVL Funding`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: path,
      languages: en ? { 'zh-Hans': path, en, 'x-default': en } : { 'zh-Hans': path },
    },
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url: path,
      siteName: 'RVL Funding',
      title: fullTitle,
      description,
      images: [{ url: image, alt: imageAlt ?? fullTitle }],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: [image] },
    robots: { index: true, follow: true },
  };
}

export function organization() {
  const sameAs = Object.values(SOCIAL).filter(Boolean);
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'RVL Funding',
    url: SITE_URL,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17800 Castleton St',
      addressLocality: 'City of Industry',
      addressRegion: 'CA',
      postalCode: '91748',
      addressCountry: 'US',
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function faqPage(items: FaqItem[], path: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${path}#faq`,
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function webPage(path: string, name: string, description: string) {
  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path}`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    inLanguage: 'zh-Hans',
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: 'RVL Funding' },
    publisher: { '@id': ORG_ID },
  };
}

export function service(path: string, name: string, description: string, serviceType: string) {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}${path}#service`,
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'City', name: 'Los Angeles' },
      { '@type': 'Country', name: 'United States' },
    ],
    availableLanguage: ['zh-Hans', 'en'],
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
