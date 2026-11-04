import fs from 'fs';
import path from 'path';
import { JsonLd, PageHero, Section, breadcrumb, enMetadata, graph, webPage } from '@/components/en/kit';
import SubscribeForm from './SubscribeForm';

interface Article {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  source?: string;
  sourceUrl?: string;
  category: string;
  readTime?: string;
  href?: string;
}

interface InsightsData {
  lastUpdated: string;
  immigration: Article[];
  financial: Article[];
}

function getInsightsData(): InsightsData {
  const filePath = path.join(process.cwd(), 'public', 'insights-data.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

const PATH = '/insights';
const TITLE = 'U.S. Immigration and Cross-Border Tax Updates, Every Week';
const DESCRIPTION =
  'Weekly updates for Chinese-speaking founders and families: USCIS and visa bulletin changes, IRS and cross-border tax developments, and U.S.–China regulatory news, each linked to its original source.';

export const metadata = enMetadata({ path: PATH, title: TITLE, description: DESCRIPTION });

function ArticleCard({ article }: { article: Article }) {
  const url = article.sourceUrl || article.href || '/insights';
  const isExternal = url.startsWith('http');

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{ textDecoration: 'none', display: 'flex', height: '100%' }}
    >
      <article className="service-card" style={{ cursor: 'pointer', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {article.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            {article.source || article.readTime || ''}
          </span>
        </div>
        <h3 style={{ marginBottom: '0.65rem', fontSize: '1rem', color: 'var(--navy)', lineHeight: 1.4 }}>
          {article.title}
        </h3>
        <p style={{ marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)', flex: 1 }}>
          {article.excerpt}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.85rem', borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{article.date}</span>
          <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.82rem' }}>Read →</span>
        </div>
      </article>
    </a>
  );
}

function Grid({ items }: { items: Article[] }) {
  return (
    <div className="en-grid-auto">
      {items.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default function InsightsPage() {
  const data = getInsightsData();
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Insights', path: PATH },
  ];
  return (
    <main className="page-shell">
      <JsonLd data={graph(webPage(PATH, TITLE, DESCRIPTION, 'CollectionPage'), breadcrumb(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Insights"
        title="U.S. immigration and cross-border tax updates, every week"
        text="We read USCIS, the State Department, the IRS and regulators each week and pick the changes that matter to Chinese-speaking founders and families. Each item links to its original source."
      />
      <p className="container en-updated">Last updated: {data.lastUpdated}</p>

      <Section id="immigration" label="Immigration policy" title="USCIS, visa bulletin and enforcement updates">
        <Grid items={data.immigration} />
      </Section>

      <Section id="financial" tone="mist" label="Tax and finance" title="IRS, cross-border tax and U.S.–China regulatory updates">
        <Grid items={data.financial} />
      </Section>

      <section className="cta-band" aria-labelledby="sub-h">
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow">Weekly briefing</span>
            <h2 id="sub-h">Get the updates every Monday</h2>
            <p>One short email a week, written for Chinese nationals and Chinese-American families. Unsubscribe any time.</p>
            <SubscribeForm />
          </div>
        </div>
      </section>
    </main>
  );
}
