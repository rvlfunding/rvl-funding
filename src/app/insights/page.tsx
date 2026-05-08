import fs from 'fs';
import path from 'path';
import Link from 'next/link';
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

const blogPosts: Article[] = [
  {
    id: 'blog-001',
    date: 'April 2026',
    title: 'EB-1A Evidence: What Officers Weight First',
    excerpt:
      'How to sequence publications, compensation, and leadership proof when your profile is strong but uneven. A practitioner framework for building a file that survives RFE.',
    category: 'Immigration',
    readTime: '8 min',
    href: '/blog',
  },
  {
    id: 'blog-002',
    date: 'March 2026',
    title: 'Cross-Border Tax: Compliance Before Optimization',
    excerpt:
      'A practical ordering of disclosures and structures when multiple tax residences are in play. Get the sequencing wrong and optimization becomes liability.',
    category: 'Tax Planning',
    readTime: '6 min',
    href: '/blog',
  },
  {
    id: 'blog-003',
    date: 'February 2026',
    title: 'Sequencing the Balance Sheet Before the Green Card',
    excerpt:
      'Ordering tax, trust, and operating moves ahead of the status inflection point. The decisions made in the 18 months before filing define the next decade.',
    category: 'Wealth Architecture',
    readTime: '7 min',
    href: '/blog',
  },
];

function ArticleCard({ article }: { article: Article }) {
  const url = article.sourceUrl || article.href || '/blog';
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

function SectionDivider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      <div style={{
        background: 'var(--navy)', color: 'var(--gold)',
        fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.2em',
        textTransform: 'uppercase' as const,
        padding: '0.4rem 1.25rem',
        borderRadius: '999px', whiteSpace: 'nowrap' as const,
      }}>
        {label}
      </div>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  );
}

export default function InsightsPage() {
  const data = getInsightsData();

  return (
    <main className="page-shell">

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Intelligence</span>
          <h1>What You Need to Know. Nothing More.</h1>
          <p className="hero-text">
            Three curated streams — updated weekly — for principals navigating U.S. immigration,
            cross-border wealth, and regulatory change.
          </p>

          {/* Three pillars — light background fix */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '2rem',
            maxWidth: '760px',
          }}>
            {[
              {
                label: 'Immigration Policy',
                desc: 'USCIS alerts, visa bulletin shifts, and enforcement signals — filtered for high-skilled and investor categories.',
              },
              {
                label: 'Financial Intelligence',
                desc: 'IRS guidance, cross-border tax developments, and U.S.–China regulatory signals that affect your balance sheet.',
              },
              {
                label: 'Blog',
                desc: 'Long-form analysis on immigration strategy, wealth architecture, and the decisions that define your next decade.',
              },
            ].map(({ label, desc }) => (
              <div key={label} style={{
                padding: '1rem 1.25rem',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                boxShadow: '0 4px 16px rgba(10,37,64,0.05)',
              }}>
                <p style={{
                  margin: '0 0 6px',
                  fontSize: '0.68rem', fontWeight: 700,
                  color: 'var(--gold)', letterSpacing: '0.12em',
                  textTransform: 'uppercase' as const,
                }}>
                  {label}
                </p>
                <p style={{
                  margin: 0, fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1.25rem' }}>
            Last updated: {data.lastUpdated}
          </p>
        </div>
      </section>

      {/* ── 1. IMMIGRATION ── */}
      <section className="section-intro">
        <div className="container">
          <SectionDivider label="Immigration Policy" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {data.immigration.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)',
              textDecoration: 'none', borderBottom: '2px solid var(--gold)', paddingBottom: '2px',
            }}>
              View all Immigration articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. FINANCIAL ── */}
      <section className="section-intro" style={{ background: 'var(--mist-2)' }}>
        <div className="container">
          <SectionDivider label="Financial & Wealth Intelligence" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {data.financial.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)',
              textDecoration: 'none', borderBottom: '2px solid var(--gold)', paddingBottom: '2px',
            }}>
              View all Financial articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. BLOG ── */}
      <section className="section-intro">
        <div className="container">
          <SectionDivider label="Blog" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {blogPosts.slice(0, 3).map((post) => (
              <ArticleCard key={post.id} article={post} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)',
              textDecoration: 'none', borderBottom: '2px solid var(--gold)', paddingBottom: '2px',
            }}>
              View all Blog articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE ── */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow" style={{ textAlign: 'center' }}>Weekly Briefing</span>
            <h2>Delivered Every Monday.</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '460px', margin: '0 auto' }}>
              Immigration policy, financial intelligence, and editorial commentary —
              curated for Chinese nationals and Chinese-American families.
              No noise. No sales sequence.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>

    </main>
  );
}
