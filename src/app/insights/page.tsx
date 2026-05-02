'use client';

export default function InsightsPage() {
  const articles = [
    {
      date: 'May 2024',
      title: 'EB-1A Visa: Key Strategic Insights for 2024',
      excerpt:
        'Understanding the evolving criteria and successful documentation strategies for EB-1A visa applications in the current immigration landscape.',
      category: 'Immigration',
      readTime: '8 min',
    },
    {
      date: 'April 2024',
      title: 'Cross-Border Tax Planning: Maximizing Efficiency',
      excerpt:
        'Expert analysis on latest tax structures and compliance strategies for high-net-worth individuals with U.S. immigration objectives.',
      category: 'Tax Planning',
      readTime: '6 min',
    },
    {
      date: 'April 2024',
      title: 'Asset Protection in Volatile Markets',
      excerpt:
        'Why offshore trusts and strategic asset allocation remain critical tools for wealth preservation and multi-generational planning.',
      category: 'Wealth Management',
      readTime: '7 min',
    },
    {
      date: 'March 2024',
      title: 'EB-2 & NIW: When to Pursue These Categories',
      excerpt:
        'Comprehensive guide comparing EB-2 and NIW visa pathways, helping you determine the optimal strategy for your professional profile.',
      category: 'Immigration',
      readTime: '9 min',
    },
    {
      date: 'March 2024',
      title: 'Family Office Governance for Global Families',
      excerpt:
        'Governance frameworks that align immigration timelines with family office investment policy and reporting.',
      category: 'Family Office',
      readTime: '10 min',
    },
  ];

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Industry Insights</span>
          <h1>Expert Articles &amp; Market Analysis</h1>
          <p className="hero-text">
            USCIS operations, fee and form changes, and cross-border tax signals—short briefings for principals,
            general counsel, and family-office leads.
          </p>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {articles.map((article, idx) => (
              <article key={idx} className="service-card" style={{ cursor: 'pointer', height: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {article.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{article.readTime}</span>
                </div>
                <h3 style={{ marginBottom: '0.65rem', fontSize: '1.1rem' }}>{article.title}</h3>
                <p style={{ marginBottom: '1rem', fontSize: '0.92rem', lineHeight: 1.65 }}>{article.excerpt}</p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{article.date}</span>
                  <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.85rem' }}>Read More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow" style={{ textAlign: 'center' }}>
              Newsletter
            </span>
            <h2>Subscribe to Our Insights</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Get updates on immigration policy, tax optimization, and wealth management — delivered with
              institutional rigor.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
              }}
              style={{ display: 'flex', gap: '0.75rem', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}
            >
              <input
                type="email"
                placeholder="Email address"
                required
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '0.85rem 1rem',
                  borderRadius: '999px',
                  border: '1px solid var(--border)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                }}
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
