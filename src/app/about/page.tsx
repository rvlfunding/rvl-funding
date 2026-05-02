import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>RVL Funding</h1>
          <p className="hero-text">
            We advise high-net-worth families and founders on U.S. employment-based immigration and
            cross-border wealth structure. Delivery is project-based—similar to a private-bank coverage
            team—with immigration counsel, tax advisors, and trust institutions coordinated under one
            operating rhythm.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/contact">
              Speak with us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <p className="section-label">How we work</p>
          <h2>Compliance first, multi-disciplinary by design</h2>
          <div className="service-grid">
            <article className="service-card">
              <h3>Compliance, not shortcuts</h3>
              <p>
                Every recommendation is stress-tested for auditability across the jurisdictions that matter to
                your balance sheet.
              </p>
            </article>
            <article className="service-card">
              <h3>One accountable interface</h3>
              <p>
                Immigration, tax, and trust workstreams run in parallel; RVL holds the timeline and the
                deliverable quality bar.
              </p>
            </article>
            <article className="service-card">
              <h3>Confidentiality</h3>
              <p>
                Engagements default to written confidentiality. Public case studies and quotes are anonymized
                or aggregated.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
