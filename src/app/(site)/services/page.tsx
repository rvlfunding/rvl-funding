import Link from 'next/link';
import { FEES_NOTE, PLANS } from '@/components/en/content';
import {
  CtaBand,
  Disclaimer,
  FaqList,
  JsonLd,
  ORG_ID,
  PageHero,
  SITE,
  Section,
  breadcrumb,
  enMetadata,
  faqPage,
  graph,
  webPage,
  type QA,
} from '@/components/en/kit';

const PATH = '/services';
const TITLE = 'Services: U.S. Company Formation, Tax, Payroll and Immigration Planning';
const DESCRIPTION =
  'U.S. setup and operating services for Chinese-owned companies: entity formation and EIN, business banking, Form 5472 and state tax compliance, payroll and PEO, L-1A / EB-1C planning and cross-border tax coordination. Fees from $300.';

type Area = { id: string; label: string; title: string; intro: string; points: string[]; note?: string };

const AREAS: Area[] = [
  {
    id: 'formation',
    label: 'Company formation',
    title: 'U.S. company formation for foreign owners',
    intro:
      'We start from where the business will actually operate. The state you form in, whether you choose an LLC or a C corporation, and how ownership is held all affect tax, banking and any later visa filing.',
    points: [
      'State and entity choice: LLC or C corporation, single state or holding structure',
      'Formation filings, registered agent and operating agreement or bylaws with your attorney',
      'EIN application for owners without an SSN or ITIN',
      'State tax registration, business licences and seller’s permits',
      'First-year compliance calendar for annual reports, franchise tax and Form 5472',
    ],
    note: 'Fees and deadlines differ widely by state. See our state-by-state guides in Chinese for California, Delaware, Texas, New York and eight more states.',
  },
  {
    id: 'banking',
    label: 'Business banking',
    title: 'Business bank accounts for foreign-owned companies',
    intro:
      'Banks review ownership, the real business behind the company and the source of funds, not just the formation documents. Most rejections come from incomplete files rather than ineligibility.',
    points: [
      'Ownership chart, beneficial-owner IDs and source-of-funds documentation',
      'Business-substance file: contracts, invoices, website and U.S. address',
      'Introductions to banks that accept foreign-owned companies',
      'Attending the branch meeting with you, in Mandarin and English',
      'A plan for what to fix and where to apply after a rejection',
    ],
  },
  {
    id: 'tax',
    label: 'Tax and compliance',
    title: 'Federal and state tax compliance, coordinated with your CPA',
    intro:
      'A foreign-owned company carries filings a domestic one does not. Missing them is expensive: the penalty for a late or incomplete Form 5472 starts at $25,000 per form.',
    points: [
      'Form 5472 and pro forma Form 1120 for foreign-owned single-member LLCs',
      'Federal corporate or partnership returns prepared by your CPA',
      'State annual reports and franchise taxes, such as California’s $800 minimum',
      'Sales-tax registration and remote-seller thresholds for e-commerce sellers',
      'Payroll tax filings and year-end W-2 and 1099 forms',
    ],
  },
  {
    id: 'hr',
    label: 'HR and payroll',
    title: 'HR, payroll and PEO for your first U.S. employees',
    intro:
      'Hiring in the U.S. means state registrations, insurance and paperwork before the first paycheck. We set it up for the state you hire in and keep it current as rules change.',
    points: [
      'State unemployment and withholding accounts',
      'Workers’ compensation insurance, required from the first employee in many states',
      'Payroll provider or PEO selection and onboarding',
      'Offer letters, employee handbook, I-9 and onboarding packets',
      'Employee or contractor classification reviewed with counsel',
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    title: 'Monthly operating support and project management',
    intro:
      'For companies that need a U.S. team without hiring one yet, we run the operating rhythm: who does what, by when, and what is coming next.',
    points: [
      'Monthly meeting and a one-page progress report',
      'Office or warehouse leases, vendors and insurance coordinated locally',
      'Operating records kept in a form your CPA and attorney can use',
      'A dedicated project team for larger engagements',
    ],
  },
  {
    id: 'immigration',
    label: 'Status planning',
    title: 'U.S. immigration route planning, with licensed attorneys',
    intro:
      'The right route depends on how your business is built. We compare the options against your company, role and family, then build the timeline with an immigration attorney who files on your behalf.',
    points: [
      'L-1A for executives and managers transferring to a U.S. affiliate, including new-office petitions',
      'EB-1C for multinational executives: one year abroad in the past three years and a U.S. company doing business for at least a year',
      'EB-1A and NIW for individuals with a strong record of achievement',
      'O-1 for extraordinary ability, and EB-2 or EB-3 where an employer sponsors',
      'EB-5 investment: $1,050,000, or $800,000 in a targeted employment area',
    ],
    note: 'Eligibility and filing strategy are decided by your immigration attorney. We do not give legal advice or appear before USCIS.',
  },
  {
    id: 'planning',
    label: 'Cross-border planning',
    title: 'Pre-immigration tax and family planning',
    intro:
      'Becoming a U.S. tax resident changes how worldwide income and assets are taxed. The order of decisions in the year or two before that change matters more than any single product.',
    points: [
      'Asset review before U.S. tax residency begins, with your CPA',
      'Trusts and estate documents through licensed attorneys and trustees',
      'Life insurance planning for non-residents and new residents',
      'FBAR, FATCA and foreign-asset reporting coordinated with your CPA',
    ],
  },
  {
    id: 'legal',
    label: 'Legal and compliance',
    title: 'Contracts, leases and employment compliance',
    intro: 'We prepare the facts and keep the paperwork moving; business attorneys review and sign off.',
    points: ['Leases and commercial contracts', 'Shareholder and equity documents', 'Employment law compliance', 'Notarisation and document legalisation'],
  },
];

const FAQ: QA[] = [
  {
    q: 'How much does it cost to set up a U.S. company with RVL Funding?',
    a: 'A route assessment starts at $300 for one meeting and a written report. Monthly operating support starts at $2,500 a month. State filing fees, registered agent fees and attorney fees are separate and paid at cost or directly to the provider.',
  },
  {
    q: 'Can you open a U.S. bank account for my company before I arrive?',
    a: 'Some banks open accounts for foreign-owned companies remotely, but many require the signer to attend a branch. We prepare the file and tell you in advance which banks will need you in person.',
  },
  {
    q: 'Do I need a PEO to hire my first U.S. employee?',
    a: 'No, but a PEO can take on payroll, benefits and some employer filings when you have no U.S. HR staff. For one or two employees a payroll provider plus workers’ compensation insurance is often enough. We compare both for your state.',
  },
  {
    q: 'Which visa is best for the owner of a Chinese company opening in the U.S.?',
    a: 'Many owners start with an L-1A new-office petition and later move to EB-1C, because both build on the relationship between the company abroad and the U.S. company. Others are better suited to EB-1A, NIW or EB-5. An immigration attorney decides; we help you see the trade-offs and get the business ready.',
  },
];

export const metadata = enMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function ServicesPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: PATH },
  ];
  return (
    <main className="page-shell">
      <JsonLd
        data={graph(
          webPage(PATH, TITLE, DESCRIPTION),
          breadcrumb(crumbs),
          {
            '@type': 'ItemList',
            name: 'RVL Funding services',
            itemListElement: AREAS.map((a, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: { '@type': 'Service', name: a.title, url: `${SITE}${PATH}#${a.id}`, provider: { '@id': ORG_ID }, areaServed: 'US' },
            })),
          },
          faqPage(FAQ),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Services"
        title="U.S. Company Formation, Tax, Payroll and Immigration Planning"
        text="Everything a Chinese-owned company needs to set up and run in the United States, handled by a team on the ground in Los Angeles County and coordinated with licensed attorneys and CPAs."
      >
        <Link className="btn-primary" href="/book">
          Book a free 15-minute call
        </Link>
      </PageHero>

      <section className="section-intro" aria-label="Jump to a service">
        <div className="container">
          <nav className="en-jump" aria-label="Services on this page">
            {AREAS.map((a) => (
              <a key={a.id} href={`#${a.id}`}>
                {a.label}
              </a>
            ))}
            <a href="#fees">Fees</a>
          </nav>
        </div>
      </section>

      {AREAS.map((a, i) => (
        <Section key={a.id} id={a.id} tone={i % 2 === 0 ? 'mist' : 'light'} label={a.label} title={a.title} lead={a.intro}>
          <ul className="en-points en-points--lg">
            {a.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          {a.note ? <p className="en-note">{a.note}</p> : null}
        </Section>
      ))}

      <Section id="fees" tone="mist" label="Fees" title="Fees" lead={FEES_NOTE}>
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

      <Section id="faq" label="FAQ" title="Questions about our services">
        <FaqList items={FAQ} />
        <Disclaimer />
      </Section>

      <CtaBand title="Not sure where to start?" text="Book a 15-minute call. We will tell you which step comes first for your company and what it costs." />
    </main>
  );
}
