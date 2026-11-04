import Link from 'next/link';

export default function RefPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Ref · Partner tools</p>
          <h1>Professional network and referral resources</h1>
          <p className="hero-text">
            We work alongside immigration counsel, wealth managers, trust companies, and family offices.
            This page summarizes how partnerships are structured—not a consumer referral scheme.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <p className="section-label">Ecosystem</p>
          <h2>Who we collaborate with</h2>
          <div className="service-grid">
            <article className="service-card">
              <h3>U.S. immigration counsel</h3>
              <p>
                Coordinated filings and evidence strategy; RVL does not provide legal opinions or appear
                before agencies.
              </p>
            </article>
            <article className="service-card">
              <h3>Cross-border tax advisors</h3>
              <p>
                Compliance-first planning for clients with multi-country reporting obligations.
              </p>
            </article>
            <article className="service-card">
              <h3>Trust and asset protection</h3>
              <p>
                Implementation with licensed trustees and estate counsel where structures are warranted.
              </p>
            </article>
            <article className="service-card">
              <h3>Private banks and family offices</h3>
              <p>
                Shared clients with clear lanes: investment policy on your side, immigration and structural
                advisory on ours.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
