import Link from 'next/link';

export default function CasesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Cases</p>
          <h1>Representative outcomes</h1>
          <p className="hero-text">
            Illustrative engagements—anonymized and summarized. Past results do not guarantee future
            outcomes; every file is unique.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/contact">
              Discuss your mandate
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <p className="section-label">Snapshots</p>
          <h2>Immigration and balance-sheet work in parallel</h2>
          <div className="case-list">
            <article className="case-card">
              <h3>EB-1A with dual-use evidence strategy</h3>
              <p>
                Mapped professional achievements to regulatory criteria with outside immigration counsel;
                client received approval after a structured RFE response.
              </p>
            </article>
            <article className="case-card">
              <h3>Global portfolio repositioning</h3>
              <p>
                Rebuilt exposure across three jurisdictions for a family office, aligning liquidity, tax
                reporting, and governance.
              </p>
            </article>
            <article className="case-card">
              <h3>Trust and tax integration</h3>
              <p>
                Combined compliant tax planning with a creditor-aware trust stack for an operating founder
                exiting a private business event.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
