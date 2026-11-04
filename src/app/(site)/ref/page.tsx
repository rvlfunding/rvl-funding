import Link from 'next/link';
import { EMAIL, JsonLd, PageHero, Section, breadcrumb, enMetadata, graph, webPage, type Card, Cards } from '@/components/en/kit';

const PATH = '/ref';
const TITLE = 'For Attorneys, CPAs and Advisors: Working With RVL Funding';
const DESCRIPTION =
  'How immigration attorneys, CPAs, wealth advisers, PEOs and insurers work with RVL Funding on shared Chinese-speaking clients: clear lanes, a single U.S. timeline and organised records.';

const LANES: Card[] = [
  {
    title: 'Immigration attorneys',
    text: 'You set strategy and file. We help the client’s U.S. company keep the operating records, payroll and organisation charts your petition relies on, and collect evidence on your list.',
  },
  {
    title: 'CPAs and tax advisers',
    text: 'You prepare returns and advise on tax residency. We keep the compliance calendar, chase documents in Mandarin and deliver clean books and ownership records on time.',
  },
  {
    title: 'Business attorneys',
    text: 'You draft and review contracts, leases and equity documents. We gather the facts, translate client instructions and track signatures.',
  },
  {
    title: 'Wealth advisers, trustees and insurers',
    text: 'Investment advice, trust administration and underwriting stay with you. We coordinate timing with the client’s immigration and tax plan.',
  },
];

const HOW = [
  'One U.S. timeline shared by every professional on the file',
  'Mandarin and English communication with the client and family',
  'We never hold client funds and never give legal, tax or investment opinions',
  'Engagement letters stay between you and the client',
];

export const metadata = enMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function RefPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'For professionals', path: PATH },
  ];
  return (
    <main className="page-shell">
      <JsonLd data={graph(webPage(PATH, TITLE, DESCRIPTION), breadcrumb(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="For professionals"
        title="Working with RVL Funding on shared clients"
        text="Many of our clients already have an immigration attorney or CPA. We work alongside them, with clear lanes and one timeline, so the client gets one coordinated plan."
      >
        <a className="btn-primary" href={`mailto:${EMAIL}?subject=Professional%20collaboration`}>
          Introduce your practice
        </a>
      </PageHero>
      <Section id="lanes" label="Who does what" title="Clear lanes on every file">
        <Cards items={LANES} />
      </Section>
      <Section id="how" tone="mist" label="Ground rules" title="How we work with other professionals">
        <ul className="en-points en-points--lg">
          {HOW.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <p className="en-lead" style={{ marginTop: '1.5rem' }}>
          See the full list of <Link href="/services">services we provide to clients</Link>.
        </p>
      </Section>
    </main>
  );
}
