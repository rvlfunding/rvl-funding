export default function BookPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Schedule a Call</p>
          <h1>Book Your Free 15-Minute Consultation</h1>
          <p className="hero-text">
            Select a time that works for you. We will confirm within one business day.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: 'clamp(3rem, 7vw, 5rem) 0',
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
              background: 'var(--navy-mid)',
              border: '1px solid rgba(212,175,55,0.4)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
              overflow: 'hidden',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {/* Header bar */}
            <div
              style={{
                background: 'var(--navy-deep)',
                borderBottom: '2px solid var(--gold)',
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
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                RVL Funding · 15-Minute Consultation
              </span>
            </div>

            {/* Cal.com iframe */}
            <iframe
              src="https://cal.com/rvl-info-buojoz/15min?embed=true"
              title="Book a 15-Minute Consultation"
              width="100%"
              height="700"
              style={{
                display: 'block',
                border: 'none',
                background: 'var(--white)',
              }}
              loading="lazy"
            />
          </div>

          {/* Bottom note */}
          <p
            style={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.8rem',
              marginTop: '1.5rem',
              letterSpacing: '0.04em',
            }}
          >
            All consultations are strictly confidential · info@rvlfunding.com
          </p>
        </div>
      </section>
    </main>
  );
}
