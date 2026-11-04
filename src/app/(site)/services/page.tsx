import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>U.S. immigration and global wealth advisory</h1>
          <p className="hero-text">
            From status planning through allocation, tax compliance, and protective structures—one team
            accountable for documentation quality and timeline.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/contact">
              Request a scope
            </Link>
          </div>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2>What we deliver</h2>
          <div className="service-grid">
            <article className="service-card">
              <h3>U.S. employment-based immigration</h3>
              <p>
                EB-1A, EB-2, EB-3, and NIW strategy; evidence design in support of independent immigration
                counsel.
              </p>
            </article>
            <article className="service-card">
              <h3>Cross-border allocation</h3>
              <p>
                Exposure and liquidity planning across jurisdictions for families and operating principals.
              </p>
            </article>
            <article className="service-card">
              <h3>Tax optimization and compliance</h3>
              <p>
                Structures that hold up to disclosure regimes—no aggressive schemes marketed as “secret
                lanes.”
              </p>
            </article>
            <article className="service-card">
              <h3>Trusts and offshore architecture</h3>
              <p>
                Asset protection and governance layers coordinated with licensed trust and legal providers.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
