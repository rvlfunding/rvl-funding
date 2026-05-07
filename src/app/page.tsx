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

      <section
        style={{
          padding: 'clamp(3.5rem, 8vw, 5.5rem) 0',
          background: 'linear-gradient(165deg, var(--navy-deep) 0%, var(--navy) 50%, var(--navy-mid) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(212,175,55,0.12), transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(240px, 30%, 340px) 1fr',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'start',
            }}
          >
            {/* Left: copy */}
            <div>
              <p className="eyebrow">Get Started</p>
              <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>
                Tell us about your situation
              </h2>
              <p
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '0.97rem',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                }}
              >
                Fill out the form and our team will follow up within 1–2 business days to schedule your
                complimentary consultation.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Initial consultation is completely free',
                  'All information strictly confidential',
                  'English & Mandarin advisors available',
                  'Tax, Immigration, and Wealth questions welcome',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '0.88rem',
                      padding: '0.6rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <span style={{ color: 'var(--gold)', marginTop: '2px', flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Google Form */}
            <div
              style={{
                background: 'var(--glass-light)',
                border: '1px solid var(--glass-border)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 40px 100px rgba(0,0,0,0.28)',
              }}
            >
              {/* Header bar */}
              <div
                style={{
                  background: 'rgba(0,0,0,0.25)',
                  borderBottom: '1px solid rgba(212,175,55,0.25)',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  Contact Information
                </span>
              </div>

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScWG1YBv0RQhEOaNz3U4cRhOXv5ujMvTyA1N3EseSBdjurhPQ/viewform?embedded=true"
                title="Contact Information Form"
                width="100%"
                height="1254"
                style={{ display: 'block', border: 'none', background: 'var(--white)' }}
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
