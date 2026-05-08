'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-home">
      <section className="hero-home" aria-label="Hero">
        <div className="hero-home-shine" aria-hidden={true} />
        <div className="hero-home-noise" aria-hidden={true} />
        <div className="hero-home-inner">
          <div className="hero-home-copy">
            <span className="eyebrow">Wealth · Immigration · Tax Strategy</span>
            <h1>Cross-Border Advisory for Global Families</h1>
            <p className="hero-subtitle">
              U.S. Immigration · Asset Protection · Tax Optimization
            </p>
            <div className="hero-home-actions">
              <a href="/fit-assessment.pdf" download className="btn-primary">
                Take the Fit Assessment
              </a>
              <Link href="/book" className="btn-secondary">
                Book a Call
              </Link>
            </div>
          </div>
          <div className="hero-glass-panel" aria-hidden={true} style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            <p style={{
              color: 'var(--gold)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '1.1em',
              paddingLeft: '1.1em',
              lineHeight: 1,
              margin: 0,
              textAlign: 'center',
            }}>
              RVL
            </p>
            <p style={{
              color: 'var(--white)',
              fontSize: 'clamp(0.72rem, 1.15vw, 0.9rem)',
              fontWeight: 700,
              letterSpacing: '0.22em',
              paddingLeft: '0.22em',
              lineHeight: 1,
              margin: 0,
              textAlign: 'center',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              Reliability · Value · Legacy
            </p>
          </div>
        </div>
      </section>

      <section className="home-section home-section--mist" aria-labelledby="services-heading" style={{ paddingBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Capabilities</span>
            <h2 id="services-heading">Three Pillars for Capital That Crosses Borders</h2>
            <p>
              Immigration as the anchor. Followed by strategic allocation, tax efficiency, and protective structures—all orchestrated under a single, cohesive project cadence that your auditors and outside counsel can rely on with confidence.
            </p>
          </div>
          <div className="service-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <article className="service-card">
              <h3>U.S. Immigration &amp; Status Planning</h3>
              <p>
                Strategic EB-1, EB-2, EB-3, and NIW roadmaps supported by meticulously architected evidence
                portfolios and compelling narratives, developed in full alignment with independent immigration
                counsel.
              </p>
            </article>
            <article className="service-card">
              <h3>Cross-Border Asset Allocation</h3>
              <p>
                Jurisdiction-optimized positioning, structured liquidity frameworks, and disciplined
                concentration management—delivering resilient, balanced global balance sheets for sophisticated
                family offices.
              </p>
            </article>
            <article className="service-card">
              <h3>Global Tax Optimization &amp; Compliance</h3>
              <p>
                Robust FATCA and CRS compliance integrated with proactive pre-immigration planning—delivering
                transparent, defensible structures that withstand the highest regulatory scrutiny.
              </p>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/contact" className="btn-primary">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-section" aria-labelledby="trust-heading" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Track record</span>
            <h2 id="trust-heading">Outcomes measured in decades, not quarters</h2>
            <p>
              Illustrative firm-level metrics; every mandate is diligenced separately. Client quotes are
              anonymized.
            </p>
          </div>

          <div className="trust-stats">
            <div className="trust-stat">
              <div className="num">98%</div>
              <div className="lbl">Client satisfaction on core immigration workstreams</div>
            </div>
            <div className="trust-stat">
              <div className="num">300+</div>
              <div className="lbl">High-net-worth &amp; family relationships</div>
            </div>
            <div className="trust-stat">
              <div className="num">$2B+</div>
              <div className="lbl">Assets under planning &amp; coordination</div>
            </div>
            <div className="trust-stat">
              <div className="num">15+</div>
              <div className="lbl">Years in cross-border wealth &amp; status</div>
            </div>
          </div>

          <h3 className="section-label" style={{ marginBottom: '1.25rem' }}>
            Client voices (anonymous)
          </h3>
          <div className="testimonial-grid">
            <blockquote className="testimonial-card">
              <p className="testimonial-quote">
                "From EB-1A evidence to tax-residency transitions, the team runs with investment-bank
                discipline—tight workstreams and a full audit trail. Non-negotiable for a listed-company
                principal."
              </p>
              <footer className="testimonial-meta">UHNW · Technology &amp; investing · Anonymous</footer>
            </blockquote>
            <blockquote className="testimonial-card">
              <p className="testimonial-quote">
                "Cross-border restructuring and trust design in one operating rhythm. This is balance-sheet
                thinking, not product placement."
              </p>
              <footer className="testimonial-meta">Family office principal · APAC · Anonymous</footer>
            </blockquote>
            <blockquote className="testimonial-card">
              <p className="testimonial-quote">
                "Reputation risk is everything. The advice is conservative where it should be, decisive where it
                counts—and second opinions land when stakes are high."
              </p>
              <footer className="testimonial-meta">Founder · Global industrial · Anonymous</footer>
            </blockquote>
          </div>

          <h3 className="section-label" style={{ marginBottom: '1rem' }}>
            Credentials &amp; Network
          </h3>
          <div style={{
            background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
            borderRadius: 'var(--radius)',
            padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.75rem, 4vw, 2.5rem)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
          }}>
            <p style={{
              color: 'var(--white)',
              fontSize: 'clamp(0.92rem, 1.2vw, 1.05rem)',
              lineHeight: 1.75,
              margin: 0,
              fontWeight: 400,
            }}>
              Non-discretionary advisory backed by a tightly curated U.S. immigration counsel network, a robust global tax &amp; compliance framework, and premier trust &amp; estate institution partners—delivering seamless, accountable coordination across disciplines under a single project cadence.
            </p>
          </div>
        </div>
      </section>

      <section className="insights-blog-section" aria-labelledby="intel-heading" style={{ paddingTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Intelligence</span>
            <h2 id="intel-heading">Agency briefings and long-form commentary</h2>
            <p>
              <strong>Insights</strong> follows USCIS and regulatory signals. <strong>Blog</strong> publishes
              deeper essays on immigration, tax, and wealth architecture—updated on a fixed cadence or when
              rules shift.
            </p>
          </div>
          <div className="insights-blog-split">
            <div className="insights-blog-column">
              <h3>Insights · Policy &amp; operations</h3>
              <p className="col-desc">
                Short memos suitable for general counsel or finance leads: fees, forms, trends, and what
                changed this quarter.
              </p>
              <Link href="/insights" className="preview-card">
                <div className="preview-meta">USCIS · Policy watch</div>
                <div className="preview-title">Premium processing and evidence standards—2026 snapshot</div>
                <div className="preview-excerpt">
                  How officers read EB-1A filings today, and where RFE risk concentrates for technology
                  founders.
                </div>
              </Link>
              <Link href="/insights" className="preview-card">
                <div className="preview-meta">Forms &amp; operations</div>
                <div className="preview-title">Form I-140 documentation hygiene: a delta checklist</div>
                <div className="preview-excerpt">
                  A practical update list for families already represented by outside counsel.
                </div>
              </Link>
              <Link href="/insights" className="col-footer-link">
                View all insights →
              </Link>
            </div>
            <div className="insights-blog-column">
              <h3>Blog · Editorials</h3>
              <p className="col-desc">
                Essays on allocation, trust design, and immigration strategy—for principals who already run
                institutional processes.
              </p>
              <Link href="/blog" className="preview-card">
                <div className="preview-meta">Editorial</div>
                <div className="preview-title">When NIW fits—and when EB-1A is the cleaner play</div>
                <div className="preview-excerpt">
                  A decision framework for scientists and operators with uneven public profiles.
                </div>
              </Link>
              <Link href="/blog" className="preview-card">
                <div className="preview-meta">Wealth architecture</div>
                <div className="preview-title">Sequencing the balance sheet before the green card</div>
                <div className="preview-excerpt">
                  Ordering tax, trust, and operating moves ahead of the status inflection point.
                </div>
              </Link>
              <Link href="/blog" className="col-footer-link">
                Read the blog →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-band" aria-labelledby="resources-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Resources</span>
            <h2 id="resources-heading">Downloads &amp; Private Community</h2>
            <p>
              Start with the L1-A checklist. Our private community provides in-depth memoranda, moderated
              Q&amp;A sessions, and invitations to exclusive small-format salons.
            </p>
            <Link
              href="/resources"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: '1rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--gold)',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                borderBottom: '1px solid rgba(212,175,55,0.4)',
                paddingBottom: '2px',
              }}
            >
              View all resources →
            </Link>
          </div>
          <div className="resources-grid" style={{ alignItems: 'stretch' }}>
            <div className="resource-tile" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="resource-pill">Free Download</span>
              <h3>L1-A Checklist (PDF)</h3>
              <p style={{ flex: 1 }}>
                Prioritized document and evidence checklist for self-review prior to immigration counsel
                sign-off.
              </p>
              <a href="/eb1a-checklist.pdf" download className="btn-primary" style={{ marginTop: '1.25rem' }}>
                Download PDF
              </a>
            </div>
            <div className="resource-tile" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="resource-pill">Free Download</span>
              <h3>2026 Tax Summary</h3>
              <p style={{ flex: 1 }}>
                Key federal tax figures for 2026 — brackets, standard deductions, capital gains, retirement limits, and estate tax.
              </p>
              <a href="/tax-summary.pdf" download className="btn-primary" style={{ marginTop: '1.25rem' }}>
                Download PDF
              </a>
            </div>
            <div className="resource-tile" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="resource-pill">Community</span>
              <h3>RVL Private Circle</h3>
              <p style={{ flex: 1 }}>
                Members-only community offering early access to working drafts and curated discussions.
              </p>
              <a
                href="https://zsxq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: '1.25rem' }}
              >
                Join the Community
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="discover-band" aria-labelledby="discover-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The firm</span>
            <h2 id="discover-heading">How we work—and how to engage</h2>
            <p>
              Review our mandate and operating model, or introduce your practice if you co-serve the same
              clients under a shared bar for diligence.
            </p>
          </div>
          <div className="discover-grid">
            <div className="discover-card">
              <h3>Mandate &amp; team</h3>
              <p>
                Principles, senior experience, and how we interface with immigration counsel, tax advisors,
                and trust institutions—before you commit time to an intake.
              </p>
              <div className="discover-actions">
                <Link href="/about" className="link-pill">
                  About RVL
                </Link>
                <Link href="/contact" className="link-pill link-pill--ghost">
                  Start a conversation
                </Link>
              </div>
            </div>
            <div className="discover-card">
              <h3>Professional partners</h3>
              <p>
                Law firms, RIAs, trust companies, and family offices: referral tools, diligence packs, and
                clear lanes when we share a client.
              </p>
              <div className="discover-actions">
                <Link href="/ref" className="link-pill">
                  Partner tools (/ref)
                </Link>
                <Link href="/contact" className="link-pill link-pill--ghost">
                  Propose a mandate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-band" aria-labelledby="team-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our foundation</span>
            <h2 id="team-heading">Principles, expertise, and the people behind RVL</h2>
            <p>
              Built by practitioners with 15+ years in cross-border wealth and immigration. We believe in deep
              expertise, institutional discipline, and the kind of confidentiality that earns family-office trust.
            </p>
          </div>

          <div className="values-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <article className="value-card">
              <h3>Expertise over volume</h3>
              <p>
                We take fewer mandates and develop them deeper. That&apos;s how we build institutional-grade
                processes and keep the attention span on what matters most.
              </p>
            </article>
            <article className="value-card">
              <h3>Discretion as default</h3>
              <p>
                Every engagement starts under NDA. Client anonymity in testimonials, case studies, and
                professional publications is non-negotiable.
              </p>
            </article>
            <article className="value-card">
              <h3>Measured counsel</h3>
              <p>
                We stress-test advice for auditability before delivery. Conservative where reputation risk
                concentrates; decisive where jurisdiction and timing allow.
              </p>
            </article>
            <article className="value-card">
              <h3>Ecosystem Thinking</h3>
              <p>
                Immigration, taxation, and wealth structures form one integrated ecosystem—not isolated
                elements. We orchestrate every party under a single unified timeline, delivering full
                cross-disciplinary accountability with the end outcome defined from the very first step.
              </p>
            </article>
          </div>

          <div className="team-showcase">
            <h3 className="section-label">Leadership &amp; team</h3>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <span style={{ fontSize: '1.1em' }}>R</span>
                  <span style={{ fontSize: '0.45em', fontWeight: 400, letterSpacing: '0.05em' }}>uby</span>
                </div>
                <h4>Ruby</h4>
                <p className="member-title">Founder &amp; Wealth Strategist</p>
                <p className="member-bio">
                  Over 15 years of experience advising high-net-worth families and cross-border entrepreneurs
                  on U.S. immigration and financial strategies. She serves as in-house financial advisor to
                  family offices.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <span style={{ fontSize: '1.1em' }}>V</span>
                  <span style={{ fontSize: '0.45em', fontWeight: 400, letterSpacing: '0.05em' }}>ictor</span>
                </div>
                <h4>Victor</h4>
                <p className="member-title">Senior Advisor &amp; Immigration Counsel</p>
                <p className="member-bio">
                  U.S. immigration attorney with deep expertise in strategic visa and status planning for
                  high-net-worth individuals and families.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <span style={{ fontSize: '1.1em' }}>L</span>
                  <span style={{ fontSize: '0.45em', fontWeight: 400, letterSpacing: '0.05em' }}>eo</span>
                </div>
                <h4>Leo</h4>
                <p className="member-title">Senior Advisor – Cross-Border Tax &amp; Operations</p>
                <p className="member-bio">
                  Big Four tax professional with extensive experience as in-house tax advisor to family
                  offices, specializing in cross-border tax planning and compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="team-cta" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p>
              Interested in joining a practice that combines expertise, discretion, and ecosystem thinking?
            </p>
            <Link href="/contact" className="link-pill" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              JOIN US NOW
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-heading" style={{ paddingTop: 'clamp(0.5rem, 1vw, 1rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow" style={{ textAlign: 'center' }}>
              Next Step
            </span>
            <h2 id="cta-heading">Action is Everything</h2>
            <p>
              We engage exclusively with qualified mandates. Share your objectives with us—we deliver a
              precisely scoped action plan, never a generic pitch. Our advisory counsel team provides legal
              opinions while we coordinate and ensure seamless cross-disciplinary execution.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <Link href="/contact" className="btn-navy">
                Contact RVL
              </Link>
              <Link href="/book" className="btn-primary" style={{ display: 'inline-flex' }}>
                Book a Free 15-Min Call
              </Link>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
