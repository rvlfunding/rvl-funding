import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Commentary on immigration, tax, and wealth architecture</h1>
          <p className="hero-text">
            Longer essays for principals and family offices already running institutional processes—not
            generic marketing posts.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/contact">
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <p className="section-label">Latest</p>
          <h2>Selected articles</h2>
          <div className="blog-grid">
            <article className="blog-card">
              <h3>EB-1A evidence: what officers weight first</h3>
              <p>
                How to sequence publications, compensation, and leadership proof when your profile is strong
                but uneven.
              </p>
            </article>
            <article className="blog-card">
              <h3>Cross-border tax: compliance before optimization</h3>
              <p>
                A practical ordering of disclosures and structures when multiple tax residences are in play.
              </p>
            </article>
            <article className="blog-card">
              <h3>Asset protection without theatrics</h3>
              <p>
                Trust and offshore layering where statute allows—without strategies that fail under creditor
                or regulatory review.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
