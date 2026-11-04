import Link from 'next/link';
import { EMAIL, JsonLd, ORG_ID, PageHero, Section, breadcrumb, enMetadata, graph, webPage } from '@/components/en/kit';

const PATH = '/contact';
const TITLE = 'Contact RVL Funding: City of Industry, CA (English and Mandarin)';
const DESCRIPTION =
  'Contact RVL Funding in City of Industry, California. Email info@rvlfunding.com, book a free 15-minute call or send the intake form. Monday to Friday, 10 a.m. to 4 p.m. Pacific Time, in English and Mandarin.';

const DETAILS = [
  { h: 'Email', v: EMAIL, href: `mailto:${EMAIL}` },
  { h: 'Hours', v: 'Monday to Friday, 10 a.m. to 4 p.m. Pacific Time' },
  { h: 'Office', v: '17800 Castleton St, City of Industry, CA 91748' },
];

const EXPECT = [
  'The first 15-minute call is free',
  'Everything you share is kept confidential, and we sign an NDA before substantive work',
  'Advisors speak English and Mandarin',
  'Questions on U.S. company setup, tax, payroll, immigration routes and family planning are all welcome',
  'We reply within one to two business days',
];

export const metadata = enMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function ContactPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: PATH },
  ];
  return (
    <main className="page-shell">
      <JsonLd data={graph({ ...webPage(PATH, TITLE, DESCRIPTION, 'ContactPage'), about: { '@id': ORG_ID } }, breadcrumb(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Contact"
        title="Contact RVL Funding"
        text="Send a short summary of what you are planning in the U.S.: the company, the state, the people involved and any deadline. We reply with next steps."
      >
        <a className="btn-primary" href={`mailto:${EMAIL}`}>
          Email {EMAIL}
        </a>
        <Link className="btn-secondary" href="/book">
          Book a free 15-minute call
        </Link>
      </PageHero>

      <Section id="details" label="Details" title="How to reach us">
        <div className="service-grid">
          {DETAILS.map((d) => (
            <article className="service-card" key={d.h}>
              <h3>{d.h}</h3>
              <p>{d.href ? <a href={d.href}>{d.v}</a> : d.v}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="section-dark" aria-labelledby="intake-h">
        <div className="container">
          <p className="section-label">Intake</p>
          <h2 id="intake-h">Tell us about your situation</h2>
          <div className="en-two">
            <div className="en-panel">
              <h3>What to expect</h3>
              <ul className="en-points en-points--light">
                {EXPECT.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="en-panel en-panel--form">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScWG1YBv0RQhEOaNz3U4cRhOXv5ujMvTyA1N3EseSBdjurhPQ/viewform?embedded=true"
                title="RVL Funding intake form"
                width="100%"
                height="1254"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
