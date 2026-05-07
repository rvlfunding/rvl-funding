import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Confidential Intake</h1>
          <p className="hero-text">
            Email us now with a brief summary of your immigration and wealth objectives.
            We reply with next steps.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="mailto:info@rvlfunding.com">
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
              <h3>E-mail</h3>
              <p>info@rvlfunding.com</p>
            </article>
            <article className="service-card">
              <h3>Hours</h3>
              <p>Monday–Friday, 10:00 a.m.–4:00 p.m. PDT — Pacific Daylight Time</p>
            </article>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <article className="service-card" style={{ cursor: 'pointer', height: '100%' }}>
                <h3>Engagement</h3>
                <p>Senior advisors respond to qualified inquiries; no call centers.</p>
                <p style={{ marginTop: '1rem', fontSize: '0.82rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.06em' }}>
                  Learn more →
                </p>
              </article>
            </Link>
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
            background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(212,175,55,0.12), transparent 50%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(2rem, 5vw, 3rem)',
              alignItems: 'stretch',
            }}
          >
            {/* Left blue card */}
            <div
              style={{
                background: 'var(--navy-mid)',
                border: '1px solid rgba(212,175,55,0.4)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  background: 'var(--navy-deep)',
                  borderBottom: '2px solid var(--gold)',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  flexShrink: 0,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.85)' }}>
                  Why RVL
                </span>
              </div>

              <div style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p className="eyebrow">Get Started</p>
                <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>
                  Tell us about<br />your situation
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Fill out the form and our team will follow up within 1–2 business days to schedule your complimentary consultation.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, flex: 1 }}>
                  {[
                    'Initial consultation is completely free',
                    'All information strictly confidential',
                    'English & Mandarin advisors available',
                    'Tax, Immigration, and Wealth questions welcome',
                    'No generic sales sequence—ever',
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        color: 'rgba(255,255,255,0.65)',
                        fontSize: '0.9rem',
                        padding: '0.65rem 0',
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      <span style={{ color: 'var(--gold)', marginTop: '3px', flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    marginTop: '2rem',
                    padding: '1.1rem 1.4rem',
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.22)',
                    borderRadius: 'var(--radius)',
                  }}
                >
                  <p style={{ color: 'var(--gold)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, marginBottom: '0.4rem' }}>
                    Prefer email?
                  </p>
                  <a href="mailto:info@rvlfunding.com" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none' }}>
                    info@rvlfunding.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right blue card — Google Form */}
            <div
              style={{
                background: 'var(--navy-mid)',
                border: '1px solid rgba(212,175,55,0.4)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  background: 'var(--navy-deep)',
                  borderBottom: '2px solid var(--gold)',
                  padding: '1rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  flexShrink: 0,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.85)' }}>
                  Contact Information
                </span>
              </div>

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScWG1YBv0RQhEOaNz3U4cRhOXv5ujMvTyA1N3EseSBdjurhPQ/viewform?embedded=true"
                title="Contact Information Form"
                width="100%"
                height="1254"
                style={{ display: 'block', border: 'none', background: 'var(--white)', flex: 1 }}
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
