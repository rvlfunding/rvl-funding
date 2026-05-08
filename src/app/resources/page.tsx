import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h1>Downloads &amp; References</h1>
          <p className="hero-text">
            Practical materials for high-net-worth clients preparing U.S. employment-based immigration and
            cross-border planning — not substitutes for legal or tax advice.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <p className="section-label">Library</p>
          <h2>Checklists &amp; Tax Reference</h2>
          <div className="resource-cards">

            <Link className="resource-card" href="/l1a-checklist">
              <p>L1-A Checklist</p>
              <span>View Online →</span>
            </Link>

            <Link className="resource-card" href="/tax-summary">
              <p>2026 Tax Summary</p>
              <span>View Online →</span>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
