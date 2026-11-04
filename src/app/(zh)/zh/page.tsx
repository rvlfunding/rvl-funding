import type { Metadata } from 'next';
import { ClientTabs } from './_components/ClientTabs';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';
import { SelfAssessment } from './_components/SelfAssessment';
import {
  CtaBand,
  Faq,
  Hero,
  Insights,
  Logos,
  Marquee,
  Network,
  Pricing,
  Process,
  Services,
  Team,
} from './_components/Sections';
import { EMAIL, FAQ, IMG, PAGE_PATH, SEO, SERVICES, SITE_URL, SOCIAL } from './content';

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  alternates: {
    canonical: PAGE_PATH,
    languages: {
      'zh-Hans': PAGE_PATH,
      en: '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: PAGE_PATH,
    siteName: 'RVL Funding',
    title: SEO.title,
    description: SEO.description,
    images: [{ url: IMG.hero, width: 1343, alt: '洛杉矶夜景' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
    images: [IMG.hero],
  },
  robots: { index: true, follow: true },
};

function jsonLd() {
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;
  const orgId = `${SITE_URL}/#organization`;
  const sameAs = Object.values(SOCIAL).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'RVL Funding',
        url: SITE_URL,
        email: EMAIL,
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${pageUrl}#service`,
        name: 'RVL Funding',
        url: pageUrl,
        description: SEO.description,
        email: EMAIL,
        image: `${SITE_URL}${IMG.hero}`,
        parentOrganization: { '@id': orgId },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Walnut',
          addressRegion: 'CA',
          addressCountry: 'US',
        },
        areaServed: [
          { '@type': 'City', name: 'Los Angeles' },
          { '@type': 'AdministrativeArea', name: 'Southern California' },
        ],
        availableLanguage: ['zh-Hans', 'en'],
        priceRange: 'USD 1,500–10,000',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '服务范围',
          itemListElement: SERVICES.items.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.text },
          })),
        },
      },
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: SEO.title,
        inLanguage: 'zh-Hans',
        isPartOf: { '@type': 'WebSite', url: SITE_URL, name: 'RVL Funding' },
        about: { '@id': `${pageUrl}#service` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: '首页', item: pageUrl }],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

export default function ZhHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, '\\u003c') }}
      />
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <ClientTabs />
        <SelfAssessment />
        <Services />
        <Process />
        <Pricing />
        <Network />
        <Team />
        <Insights />
        <Faq />
        <Logos />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
