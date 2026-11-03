import { FAQ, PRODUCTS, SITE } from '@/lib/site-content';

/** 结构化数据：组织 + 服务 + FAQ。只写站点上公开、可核实的信息。 */
export function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description:
      '美企落地运营团队：为意向或已经在美国落地的中国企业提供合规日历、经营记录、税务与移民材料、薪资系统、商业保险与人力资源的运营服务。',
    areaServed: ['US', 'CN'],
    availableLanguage: ['zh-CN', 'en'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17800 Castleton St',
      addressLocality: 'City of Industry',
      addressRegion: 'CA',
      postalCode: '91748',
      addressCountry: 'US',
    },
    openingHours: 'Mo-Fr 10:00-16:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '落地运营服务',
      itemListElement: PRODUCTS.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: `${p.name} ${p.nameEn}`, description: p.promise },
        priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', description: p.price },
        url: `${SITE.url}${p.ctaHref.split('?')[0]}`,
      })),
    },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
