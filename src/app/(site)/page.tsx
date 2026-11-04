import Link from 'next/link';
import { HOME_FAQ, LOCAL_EDGE, NETWORK, PLANS, FEES_NOTE, PRINCIPLES, PROCESS, SERVICES } from '@/components/en/content';
import {
  Cards,
  CtaBand,
  Disclaimer,
  EMAIL,
  FaqList,
  JsonLd,
  ORG_ID,
  SITE,
  Section,
  Steps,
  enMetadata,
  faqPage,
  graph,
  webPage,
} from '@/components/en/kit';

const TITLE = 'U.S. Company Formation & Business Setup for Chinese Companies | RVL Funding';
const DESCRIPTION =
  'A Mandarin-speaking team in Los Angeles County that sets up and runs the U.S. side of Chinese-owned businesses: company formation, EIN, banking, tax filings, payroll and L-1A / EB-1C planning with licensed attorneys.';

export const metadata = enMetadata({ path: '/', title: TITLE, description: DESCRIPTION, absoluteTitle: true });

export default function HomePage() {
  return (
    <main className="page-home">
      <JsonLd
        data={graph(
          {
            '@type': 'Organization',
            '@id': ORG_ID,
            name: 'RVL Funding',
            url: SITE,
            email: EMAIL,
            address: {
              '@type': 'PostalAddress',
              streetAddress: '17800 Castleton St',
              addressLocality: 'City of Industry',
              addressRegion: 'CA',
              postalCode: '91748',
              addressCountry: 'US',
            },
            areaServed: ['US', 'CN'],
            knowsLanguage: ['en', 'zh'],
          },
          { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'RVL Funding', inLanguage: ['en-US', 'zh-Hans'], publisher: { '@id': ORG_ID } },
          webPage('/', TITLE, DESCRIPTION),
          faqPage(HOME_FAQ),
        )}
      />

      <section className="hero-home" aria-labelledby="hero-h">
        <div className="hero-home-shine" aria-hidden />
        <div className="hero-home-noise" aria-hidden />
        <div className="hero-home-inner">
          <div className="hero-home-copy">
            <span className="eyebrow">Company formation · Operations · Status planning</span>
            <h1 id="hero-h">U.S. Business Setup and Operations for Chinese Companies and Founders</h1>
            <p className="hero-subtitle">
              A local team in Los Angeles County that forms your U.S. company, opens the bank account, runs payroll and the
              compliance calendar, and coordinates your immigration attorney and CPA, in Mandarin and English.
            </p>
            <div className="hero-home-actions">
              <Link href="/book" className="btn-primary">
                Book a free 15-minute call
              </Link>
              <Link href="/services" className="btn-secondary">
                See services and fees
              </Link>
            </div>
          </div>
          <div className="hero-glass-panel en-hero-panel" aria-hidden>
            <p className="en-hero-mark">RVL</p>
            <p className="en-hero-tag">Reliability · Value · Legacy</p>
          </div>
        </div>
      </section>

      <Section
        id="local"
        tone="mist"
        label="Why a U.S.-based team"
        title="The work that can’t be done from overseas"
        lead="Agencies based in China can file your formation documents. What they can’t do is sit in the bank meeting, answer the state agency on U.S. hours, or notice that a deadline in California is different from one in Texas. That local work is what we do."
      >
        <Cards items={LOCAL_EDGE} />
      </Section>

      <Section id="services" label="Services" title="Six practice areas, one accountable team" lead="Take a single service, or bring them together under monthly operating support.">
        <Cards items={SERVICES} />
      </Section>

      <Section id="process" tone="mist" label="How we work" title="From first call to annual service">
        <Steps items={PROCESS} />
      </Section>

      <Section id="fees" label="Fees" title="Published fees, confirmed in writing" lead={FEES_NOTE}>
        <div className="en-plans">
          {PLANS.map((p) => (
            <article className="en-plan" key={p.title}>
              <p className="en-plan-type">{p.type}</p>
              <h3>{p.title}</h3>
              <p className="en-plan-price">{p.price}</p>
              <ul className="en-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="network"
        tone="dark"
        label="Advisory network"
        title="Licensed professionals for every licensed opinion"
        lead="We coordinate, schedule and follow through. Each opinion that requires a licence is given by the licensed professional, under their own engagement with you."
      >
        <div className="en-roles">
          {NETWORK.map((n) => (
            <div key={n.role} className="en-role">
              <h3>{n.role}</h3>
              <p>{n.scope}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="principles" label="Principles" title="How we handle money, data and access">
        <Cards items={PRINCIPLES} />
      </Section>

      <Section id="faq" tone="mist" label="FAQ" title="Common questions from Chinese founders">
        <FaqList items={HOME_FAQ} />
        <p className="en-lead" style={{ marginTop: '1.5rem' }}>
          Free references: the <Link href="/l1a-checklist">L-1A visa checklist</Link>, the{' '}
          <Link href="/tax-summary">2026 federal tax summary</Link> and our <Link href="/resources">resource library</Link>.
          Prefer Chinese? Read the <Link href="/zh" hrefLang="zh-Hans">中文网站</Link>.
        </p>
        <Disclaimer />
      </Section>

      <CtaBand
        title="Tell us where your U.S. business stands"
        text="A 15-minute call is enough to tell you what comes first, what can wait, and whether we are the right team."
      />
    </main>
  );
}
