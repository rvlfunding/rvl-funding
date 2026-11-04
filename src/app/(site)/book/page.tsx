import { EMAIL, JsonLd, PageHero, Section, breadcrumb, enMetadata, graph, webPage } from '@/components/en/kit';

const PATH = '/book';
const TITLE = 'Book a Free 15-Minute Consultation';
const DESCRIPTION =
  'Book a free 15-minute call with RVL Funding about setting up or running a U.S. company, payroll and tax compliance, or U.S. status planning. In English or Mandarin.';

const PREPARE = [
  'Where your company is today: country, industry and rough annual revenue',
  'What you want to do in the U.S. and in which state',
  'Who is involved: owners, family members, existing attorney or CPA',
  'Any deadline, such as a visa expiry, lease start or first hire',
];

export const metadata = enMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function BookPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Book a call', path: PATH },
  ];
  return (
    <main className="page-shell">
      <JsonLd data={graph(webPage(PATH, TITLE, DESCRIPTION), breadcrumb(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Book a call"
        title="Book a free 15-minute consultation"
        text="Pick a time below. The call is free and confidential, in English or Mandarin, and we confirm within one business day."
      />
      <Section id="prepare" label="Before the call" title="Useful to have ready">
        <ul className="en-points en-points--lg">
          {PREPARE.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </Section>
      <section className="section-dark" aria-label="Booking calendar">
        <div className="container">
          <div className="en-panel en-panel--form">
            <iframe
              src="https://cal.com/rvl-info-buojoz/15min?embed=true"
              title="Book a 15-minute consultation with RVL Funding"
              width="100%"
              height="700"
              loading="lazy"
            />
          </div>
          <p className="en-fine-light">
            Prefer email? Write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
