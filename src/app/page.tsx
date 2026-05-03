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
              <a href="/eb1a-checklist.pdf" download className="btn-primary">
                Get Checklist
              </a>
              <Link href="/contact" className="btn-secondary">
                Book a Call
              </Link>
            </div>
          </div>
         <div className="hero-glass-panel" aria-hidden={true} style={{ textAlign: 'center' }}>
            <div className="hero-monogram" style={{ textAlign: 'center' }}>RVL</div>
            <p className="hero-glass-tagline" style={{
              color: 'rgba(212, 175, 55, 0.7)',
              fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
              letterSpacing: '0.08em',
              lineHeight: 1.6,
              opacity: 1,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
              Reliability · Value · Legacy
            </p>
          </div>
  <div className="hero-monogram">RVL</div>
  <p className="hero-glass-tagline" style={{
    color: 'var(--gold)',
    fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
    letterSpacing: '0.08em',
    lineHeight: 1.6,
    opacity: 1,
    textAlign: 'center',
  }}>
    Reliability · Value · Legacy
  </p>
</div>
        </div>
      </section>

      <section className="home-section home-section--mist" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Capabilities</span>
            <h2 id="services-heading">Four pillars for capital that crosses Borders</h2>
            <p>
  Immigration as the anchor. Followed by strategic allocation, tax efficiency, and protective structures—all orchestrated under a single, cohesive project cadence that your auditors and outside counsel can rely on with confidence.
</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <h3>U.S. immigration &amp; status planning</h3>
              <p>
                EB-1, EB-2, EB-3, and NIW roadmaps; evidence architecture and narrative alignment with
                independent immigration counsel.
              </p>
            </article>
            <article className="service-card">
              <h3>Cross-border asset allocation</h3>
              <p>
                Jurisdiction-aware positioning, liquidity ladders, and concentration management for global
                balance sheets and family offices.
              </p>
            </article>
            <article className="service-card">
              <h3>Global tax optimization &amp; compliance</h3>
              <p>
                FATCA, CRS, and pre-immigration planning without aggressive schemes—structures we can defend
                under scrutiny.
              </p>
            </article>
            <article className="service-card">
              <h3>Asset protection trusts &amp; offshore architecture</h3>
              <p>
                Trust and SPV layering for creditor protection, governance, and privacy—where law and policy
                allow.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="trust-section" aria-labelledby="trust-heading">
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
              <div className="num">20+</div>
              <div className="lbl">Years in cross-border wealth &amp; status</div>
            </div>
          </div>

          <h3 className="section-label" style={{ marginBottom: '1.25rem' }}>
            Client voices (anonymous)
          </h3>
          <div className="testimonial-grid">
            <blockquote className="testimonial-card">
              <p className="testimonial-quote">
                “From EB-1A evidence to tax-residency transitions, the team runs with investment-bank
                discipline—tight workstreams and a full audit trail. Non-negotiable for a listed-company
                principal.”
              </p>
              <footer className="testimonial-meta">UHNW · Technology &amp; investing · Anonymous</footer>
            </blockquote>
            <blockquote className="testimonial-card">
              <p className="testimonial-quote">
                “Cross-border restructuring and trust design in one operating rhythm. This is balance-sheet
                thinking, not product placement.”
              </p>
              <footer className="testimonial-meta">Family office principal · APAC · Anonymous</footer>
            </blockquote>
            <blockquote className="testimonial-card">
              <p className="testimonial-quote">
                “Reputation risk is everything. The advice is conservative where it should be, decisive where it
                counts—and second opinions land when stakes are high.”
              </p>
              <footer className="testimonial-meta">Founder · Global industrial · Anonymous</footer>
            </blockquote>
          </div>

          <h3 className="section-label" style={{ marginBottom: '1rem' }}>
            Credentials &amp; network
          </h3>
          <div className="badge-row">
            <span className="trust-badge">Non-discretionary advisory</span>
            <span className="trust-badge">U.S. immigration counsel network</span>
            <span className="trust-badge">Global tax &amp; compliance framework</span>
            <span className="trust-badge">Trust &amp; estate institution partners</span>
          </div>
        </div>
      </section>

      <section className="insights-blog-section" aria-labelledby="intel-heading">
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
            <h2 id="resources-heading">Downloads &amp; private community</h2>
            <p>
              Start with the EB-1A checklist. Our Zsxq-hosted circle carries longer memos, moderated Q&amp;A,
              and invitations to small-format salons.
            </p>
          </div>
          <div className="resources-grid">
            <div className="resource-tile">
              <span className="resource-pill">Free download</span>
              <h3>EB-1A checklist (PDF)</h3>
              <p>Prioritized document and evidence list for self-review before counsel sign-off.</p>
              <a href="/eb1a-checklist.pdf" download className="btn-primary">
                Download PDF
              </a>
            </div>
            <div className="resource-tile">
              <span className="resource-pill">Free download</span>
              <h3>Cross-border allocation worksheet</h3>
              <p>Jurisdiction and exposure mapping to align vocabulary with your advisory team.</p>
              <a href="/asset-allocation-template.pdf" download className="btn-primary">
                Download template
              </a>
            </div>
            <div className="resource-tile">
              <span className="resource-pill">Community</span>
              <h3>RVL circle on Zsxq</h3>
              <p>
                Replace the outbound link with your invite URL when ready. We publish working drafts here
                first.
              </p>
              <a
                href="https://zsxq.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open Zsxq community
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
              Built by practitioners with 20+ years in cross-border wealth and immigration. We believe in deep
              expertise, institutional discipline, and the kind of confidentiality that earns family-office trust.
            </p>
          </div>

          <div className="values-grid">
            <article className="value-card">
              <h3>Expertise over volume</h3>
              <p>
                We take fewer mandates and develop them deeper. That's how we build institutional-grade
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
              <h3>Ecosystem thinking</h3>
              <p>
                Immigration counsel, tax advisors, and trust institutions aren't afterthoughts. We coordinate
                under one timeline and hold accountability across disciplines.
              </p>
            </article>
          </div>

          <div className="team-showcase">
            <h3 className="section-label">Leadership &amp; team</h3>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">R</div>
                <h4>Founder &amp; Lead advisor</h4>
                <p className="member-title">Immigration &amp; wealth strategy</p>
                <p className="member-bio">
                  20+ years advising ultra-high-net-worth families and founders on U.S. immigration, tax, and
                  trust architecture. Prior: Big-4 tax, in-house counsel at a family office.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">V</div>
                <h4>Senior advisor</h4>
                <p className="member-title">Cross-border tax &amp; operations</p>
                <p className="member-bio">
                  15+ years on global tax planning and compliance for multinational families. Licensed in three
                  jurisdictions; network spans Hong Kong, Singapore, London, and New York.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">L</div>
                <h4>Senior advisor</h4>
                <p className="member-title">Trust &amp; asset protection</p>
                <p className="member-bio">
                  Specialized in offshore trust design, SPV layering, and legacy structures. Prior: trust
                  counsel at a Cayman-based institution; relationships with global fiduciaries.
                </p>
              </div>
            </div>
          </div>

          <div className="team-cta" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p>
              Interested in joining a practice that combines expertise, discretion, and ecosystem thinking?
            </p>
            <Link href="/contact" className="link-pill">
              Start a conversation with our team
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow" style={{ textAlign: 'center' }}>
              Next step
            </span>
            <h2 id="cta-heading">Confidential intake for qualified mandates</h2>
            <p>
              Share objectives under NDA when appropriate. We reply with a scoped path—not a generic pitch.
              Legal opinions come from your retained counsel; we coordinate delivery.
            </p>
            <Link href="/contact" className="btn-navy">
              Contact RVL
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
