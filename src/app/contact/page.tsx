export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Confidential intake</h1>
          <p className="hero-text">
            For new mandates, email a short description of your immigration and wealth objectives. We reply
            with next steps or a decline—without a generic sales sequence.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="mailto:contact@rvlfunding.com">
              Email RVL
            </a>
          </div>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <p className="section-label">Details</p>
          <h2>How to reach us</h2>
          <div className="service-grid">
            <article className="service-card">
              <h3>Email</h3>
              <p>contact@rvlfunding.com</p>
            </article>
            <article className="service-card">
              <h3>Hours</h3>
              <p>Monday–Friday, 9:00 a.m.–6:00 p.m. U.S. Eastern Time</p>
            </article>
            <article className="service-card">
              <h3>Engagement</h3>
              <p>Senior advisors respond to qualified inquiries; no call centers.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
