import Link from 'next/link';
import { JsonLd, PageHero, SITE, Section, breadcrumb, enMetadata, graph, webPage } from '@/components/en/kit';

const PATH = '/resources';
const TITLE = 'Free Resources: L-1A Checklist, 2026 Tax Summary and U.S. Setup Guides';
const DESCRIPTION =
  'Free references from RVL Funding: an L-1A visa document checklist, the 2026 federal tax summary, a California company formation guide, a family financial checklist and a 2026 U.S. retirement plan comparison.';

const ITEMS = [
  {
    href: '/l1a-checklist',
    title: 'L-1A visa document checklist',
    text: 'Documents for the company abroad, the U.S. company and the transferring executive or manager, including new-office petitions.',
    lang: 'en',
  },
  {
    href: '/tax-summary',
    title: '2026 federal tax summary',
    text: 'Income tax brackets, standard deduction, capital gains rates, retirement contribution limits and estate and gift tax figures for 2026.',
    lang: 'en',
  },
  {
    href: '/resources/ca-formation',
    title: 'California company formation guide',
    text: 'Formation steps, state fees and our service quote for forming an LLC or corporation in California. In Chinese and English.',
    lang: 'zh',
  },
  {
    href: '/financial-checklist.html',
    title: 'Family financial self-check',
    text: 'A self-check for Chinese-speaking families across status, cash flow, tax, insurance, education, retirement and estate planning. In Chinese.',
    lang: 'zh',
  },
  {
    href: '/retirement-plans-2026.html',
    title: '2026 U.S. retirement plans compared',
    text: '401(k), IRA, SEP, SIMPLE and solo 401(k) side by side for business owners. In Chinese.',
    lang: 'zh',
  },
];

export const metadata = enMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

export default function ResourcesPage() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Resources', path: PATH },
  ];
  return (
    <main className="page-shell">
      <JsonLd
        data={graph(webPage(PATH, TITLE, DESCRIPTION, 'CollectionPage'), breadcrumb(crumbs), {
          '@type': 'ItemList',
          itemListElement: ITEMS.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.title, url: `${SITE}${it.href}` })),
        })}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Resources"
        title="Free resources for founders and families"
        text="Checklists and reference tables we use with clients. They are general information, not legal or tax advice, and a good starting point before you talk to an attorney or CPA."
      />
      <Section id="library" label="Library" title="Checklists, guides and tax tables">
        <div className="resource-cards">
          {ITEMS.map((it) =>
            it.href.endsWith('.html') ? (
              <a className="resource-card" href={it.href} key={it.href} hrefLang={it.lang === 'zh' ? 'zh-Hans' : undefined}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                <span>Open →</span>
              </a>
            ) : (
              <Link className="resource-card" href={it.href} key={it.href}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                <span>Open →</span>
              </Link>
            ),
          )}
        </div>
        <p className="en-lead" style={{ marginTop: '1.5rem' }}>
          More in Chinese: <Link href="/zh/faq" hrefLang="zh-Hans">常见问题解答</Link> and <Link href="/zh/states" hrefLang="zh-Hans">各州落地指南</Link>.
        </p>
      </Section>
    </main>
  );
}
