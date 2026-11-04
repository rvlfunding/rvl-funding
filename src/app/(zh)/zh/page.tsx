import { ClientTabs } from './_components/ClientTabs';
import { JsonLd } from './_components/JsonLd';
import { SelfAssessment } from './_components/SelfAssessment';
import { CtaBand, Faq, Hero, Insights, Marquee, Network, Pricing, Process, Services, Team } from './_components/Sections';
import { ALT, EMAIL, HOME_FAQ, HOME_SEO, IMG, R, SERVICES, SITE_URL } from './content';
import { breadcrumb, buildMetadata, faqPage, graph, ORG_ID, organization, webPage } from './seo';

export const metadata = buildMetadata({
  path: R.home,
  title: HOME_SEO.title,
  description: HOME_SEO.description,
  keywords: HOME_SEO.keywords,
  imageAlt: ALT.hero,
  en: '/',
  absoluteTitle: true,
});

function homeLd() {
  const url = `${SITE_URL}${R.home}`;
  return graph(
    organization(),
    {
      '@type': 'ProfessionalService',
      '@id': `${url}#business`,
      name: 'RVL Funding',
      url,
      description: HOME_SEO.description,
      email: EMAIL,
      image: `${SITE_URL}${IMG.hero}`,
      parentOrganization: { '@id': ORG_ID },
      areaServed: [
        { '@type': 'City', name: 'Los Angeles' },
        { '@type': 'Country', name: 'United States' },
      ],
      availableLanguage: ['zh-Hans', 'en'],
      priceRange: 'USD 300–300,000',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '服务范围',
        itemListElement: SERVICES.items.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.text, url: `${SITE_URL}${s.href}` },
        })),
      },
    },
    webPage(R.home, HOME_SEO.title, HOME_SEO.description),
    breadcrumb([{ name: '首页', path: R.home }]),
    faqPage(HOME_FAQ.items, R.home),
  );
}

export default function ZhHomePage() {
  return (
    <>
      <JsonLd data={homeLd()} />
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
        <CtaBand />
      </main>
    </>
  );
}
