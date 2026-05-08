import fs from 'fs';
import path from 'path';

interface Article {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  source: string;
  sourceUrl: string;
  category: string;
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

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article className="service-card" style={{ cursor: 'pointer', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {article.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.05em' }}>
            {article.source}
          </span>
        </div>
        <h3 style={{ marginBottom: '0.65rem', fontSize: '1rem', color: 'var(--navy)', lineHeight: 1.4 }}>
          {article.title}
        </h3>
        <p style={{ marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
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

export default function InsightsPage() {
  const data = getInsightsData();

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Intelligence</span>
          <h1>Insights &amp; Policy Updates</h1>
          <p className="hero-text">
            Curated weekly briefings on U.S. immigration policy and cross-border financial intelligence —
            filtered for relevance to Chinese nationals and Chinese-American families.
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Last updated: {data.lastUpdated}
          </p>
        </div>
      </section>

      {/* ── IMMIGRATION ── */}
      <section className="section-intro">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            <div style={{
              background: 'var(--navy)', color: 'var(--gold)',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', padding: '0.4rem 1.2rem', borderRadius: '999px',
              whiteSpace: 'nowrap',
            }}>
              USCIS · Immigration Policy
            </div>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {data.immigration.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCIAL ── */}
      <section className="section-intro" style={{ background: 'var(--mist-2)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            <div style={{
              background: 'var(--navy)', color: 'var(--gold)',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', padding: '0.4rem 1.2rem', borderRadius: '999px',
              whiteSpace: 'nowrap',
            }}>
              Financial &amp; Wealth Intelligence
            </div>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {data.financial.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE ── */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow" style={{ textAlign: 'center' }}>Weekly Briefing</span>
            <h2>Subscribe to Our Insights</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Every Monday — curated USCIS updates and cross-border financial intelligence,
              relevant to Chinese nationals and Chinese-American families.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function SubscribeForm() {
  'use client';
  return (
    <form
      action="/api/subscribe"
      method="POST"
      style={{ display: 'flex', gap: '0.75rem', maxWidth: '480px', margin: '1.5rem auto 0', flexWrap: 'wrap' }}
    >
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        style={{
          flex: 1, minWidth: '200px', padding: '0.85rem 1rem',
          borderRadius: '999px', border: '1px solid var(--border)',
          fontSize: '1rem', fontFamily: 'inherit',
        }}
      />
      <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
        Subscribe
      </button>
    </form>
  );
}

