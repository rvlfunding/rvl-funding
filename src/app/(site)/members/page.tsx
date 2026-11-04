import Link from 'next/link';
import { EMAIL, PageHero, Section, enMetadata } from '@/components/en/kit';

export const metadata = enMetadata({
  path: '/members',
  title: 'Private Client Community',
  description: 'RVL Funding’s private community for clients: weekly briefings on U.S. immigration policy and cross-border tax, and small-group Q&A sessions. By invitation.',
  noindex: true,
});

const BENEFITS = [
  'Weekly briefings on U.S. immigration policy and cross-border tax',
  'Early notice of rule changes that affect foreign-owned companies',
  'Small-group Q&A sessions with RVL advisors',
];

export default function MembersPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Private community"
        title="Private client community"
        text="A small, invitation-only community for clients and the founders and families we work with."
      >
        <a className="btn-primary" href={`mailto:${EMAIL}?subject=Community%20invitation`}>
          Request an invitation
        </a>
      </PageHero>
      <Section id="benefits" label="Members receive" title="What the community offers">
        <ul className="en-points en-points--lg">
          {BENEFITS.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="en-lead" style={{ marginTop: '1.5rem' }}>
          Public updates are on our <Link href="/insights">Insights</Link> page.
        </p>
      </Section>
    </main>
  );
}
