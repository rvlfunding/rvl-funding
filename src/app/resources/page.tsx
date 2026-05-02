export default function ResourcesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h1>Downloads</h1>
          <p className="hero-text">
            Practical materials for high-net-worth clients preparing U.S. employment-based immigration and
            cross-border planning—not substitutes for legal or tax advice.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="/eb1a-checklist.pdf" download>
              Download EB-1A checklist
            </a>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <p className="section-label">Library</p>
          <h2>Checklists and templates</h2>
          <div className="resource-cards">
            <a className="resource-card" href="/eb1a-checklist.pdf" download>
              <p>EB-1A checklist</p>
              <span>Download</span>
            </a>
            <a className="resource-card" href="/asset-allocation-template.pdf" download>
              <p>Cross-border allocation worksheet</p>
              <span>Download</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
