import Link from 'next/link';
import { NETWORK, PRINCIPLES } from '@/components/en/content';
import { Cards, CtaBand, JsonLd, ORG_ID, PageHero, Section, breadcrumb, enMetadata, graph, webPage } from '@/components/en/kit';

const PATH = '/about';
const TITLE = 'About RVL Funding: A U.S.-Based Team for Chinese Companies and Families';
const DESCRIPTION =
  'RVL Funding is a bilingual advisory team in Los Angeles County. We set up and run the U.S. side for Chinese-owned companies and coordinate immigration attorneys, CPAs and insurers for founders and their families.';

export const metadata = enMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function AboutPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: PATH },
  ];
  return (
    <main className="page-shell">
      <JsonLd
        data={graph(
          { ...webPage(PATH, TITLE, DESCRIPTION, 'AboutPage'), about: { '@id': ORG_ID } },
          breadcrumb(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="About"
        title="A U.S.-based team for Chinese companies and families"
        text="We are based in Los Angeles County and work in Mandarin and English. Our job is the local work that keeps a U.S. company running and a family’s U.S. plans on schedule, coordinated with the licensed professionals each step requires."
      >
        <Link className="btn-primary" href="/book">
          Book a free 15-minute call
        </Link>
      </PageHero>

      <Section
        id="why"
        label="Why we exist"
        title="Most problems start after the company is formed"
        lead="Formation is the easy part. What goes wrong for Chinese-owned companies is usually what follows: a bank that won’t open the account, a missed Form 5472, payroll set up for the wrong state, or a visa filing that the company’s records can’t support. We built RVL Funding to handle that follow-through from inside the United States."
      />

      <Section id="principles" label="Principles" title="How we work">
        <Cards items={PRINCIPLES} />
      </Section>

      <Section
        id="network"
        tone="dark"
        label="Advisory network"
        title="Licensed professionals, coordinated"
        lead="RVL Funding does not give legal opinions, prepare tax returns or give investment advice. Those come from the licensed professionals below, each engaged by you. We coordinate them and keep the timeline."
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

      <Section id="where" label="Where we are" title="Los Angeles County, serving clients across the U.S. and China">
        <p className="en-lead">
          Our office is in the City of Industry, California. We work with clients setting up in California and in other states, and with
          founders and families who are still in China. See our <Link href="/services">services and fees</Link> or{' '}
          <Link href="/contact">contact us</Link>. 中文读者请看<Link href="/zh/about" hrefLang="zh-Hans">关于我们</Link>.
        </p>
      </Section>

      <CtaBand title="Start with a short call" text="Tell us what you are planning in the U.S. and we will tell you what comes first." />
    </main>
  );
}
