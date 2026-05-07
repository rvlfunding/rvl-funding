import Link from 'next/link';

export default function TaxSummaryPage() {
  return (
    <main className="page-shell">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Client Resources</p>
          <h1>2026 Tax Summary</h1>
          <p className="hero-text">
            Key federal tax figures for 2026 — for reference only. Consult a qualified tax professional
            for advice specific to your situation.
          </p>
          <div className="hero-actions">
            <Link href="/book" className="btn-primary">Book a Free Consultation</Link>
            <Link href="/contact" className="btn-navy">Contact RVL</Link>
          </div>
        </div>
      </section>

      {/* ── Tables ── */}
      <section style={{ padding: 'clamp(3rem, 7vw, 5rem) 0', background: 'var(--mist-2)' }}>
        <div className="container">

          {/* ── INCOME TAX BRACKETS ── */}
          <div style={cardStyle}>
            <h2 style={cardTitle}>Federal Income Tax Brackets</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <p style={tableLabel}>Single / Married Filing Separately</p>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={th}>Rate</th>
                      <th style={th}>Taxable Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['10%', '$0 – $11,925'],
                      ['12%', '$11,926 – $48,475'],
                      ['22%', '$48,476 – $103,350'],
                      ['24%', '$103,351 – $197,300'],
                      ['32%', '$197,301 – $250,525'],
                      ['35%', '$250,526 – $626,350'],
                      ['37%', 'Over $626,350'],
                    ].map(([rate, income], i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                        <td style={{ ...td, color: 'var(--gold)', fontWeight: 700 }}>{rate}</td>
                        <td style={td}>{income}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <p style={tableLabel}>Married Filing Jointly / Qualifying Widow(er)</p>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={th}>Rate</th>
                      <th style={th}>Taxable Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['10%', '$0 – $23,850'],
                      ['12%', '$23,851 – $96,950'],
                      ['22%', '$96,951 – $206,700'],
                      ['24%', '$206,701 – $394,600'],
                      ['32%', '$394,601 – $501,050'],
                      ['35%', '$501,051 – $751,600'],
                      ['37%', 'Over $751,600'],
                    ].map(([rate, income], i) => (
                      <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                        <td style={{ ...td, color: 'var(--gold)', fontWeight: 700 }}>{rate}</td>
                        <td style={td}>{income}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ── CAPITAL GAINS ── */}
          <div style={cardStyle}>
            <h2 style={cardTitle}>Long-Term Capital Gains & Qualified Dividends</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Rate</th>
                  <th style={th}>Single</th>
                  <th style={th}>Married Filing Jointly</th>
                  <th style={th}>Head of Household</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['0%', '$0 – $48,350', '$0 – $96,700', '$0 – $64,750'],
                  ['15%', '$48,351 – $533,400', '$96,701 – $600,050', '$64,751 – $566,700'],
                  ['20%', 'Over $533,400', 'Over $600,050', 'Over $566,700'],
                ].map(([rate, s, mfj, hoh], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                    <td style={{ ...td, color: 'var(--gold)', fontWeight: 700 }}>{rate}</td>
                    <td style={td}>{s}</td>
                    <td style={td}>{mfj}</td>
                    <td style={td}>{hoh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={noteStyle}>Net Investment Income Tax (NIIT): 3.8% on lesser of net investment income or MAGI above $200,000 (single) / $250,000 (MFJ)</p>
          </div>

          {/* ── STANDARD DEDUCTION + RETIREMENT ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

            {/* Standard Deduction */}
            <div style={cardStyle}>
              <h2 style={cardTitle}>Standard Deduction</h2>
              <table style={tableStyle}>
                <tbody>
                  {[
                    ['Single', '$15,000'],
                    ['Married Filing Jointly', '$30,000'],
                    ['Head of Household', '$22,500'],
                    ['Age 65+ / Blind (Single)', '+$2,000'],
                    ['Age 65+ / Blind (MFJ)', '+$1,600 each'],
                  ].map(([label, val], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                      <td style={td}>{label}</td>
                      <td style={{ ...td, color: 'var(--navy)', fontWeight: 700 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Retirement */}
            <div style={cardStyle}>
              <h2 style={cardTitle}>Retirement Contribution Limits</h2>
              <table style={tableStyle}>
                <tbody>
                  {[
                    ['401(k) / 403(b) / 457', '$23,500'],
                    ['Catch-up (age 50+)', '+$7,500'],
                    ['Catch-up (age 60–63)', '+$11,250'],
                    ['IRA (Traditional / Roth)', '$7,000'],
                    ['IRA Catch-up (age 50+)', '+$1,000'],
                    ['SEP-IRA', 'Up to $70,000'],
                    ['SIMPLE IRA', '$16,500'],
                  ].map(([label, val], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                      <td style={td}>{label}</td>
                      <td style={{ ...td, color: 'var(--navy)', fontWeight: 700 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── ESTATE + OTHER ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>

            {/* Estate & Gift */}
            <div style={cardStyle}>
              <h2 style={cardTitle}>Estate &amp; Gift Tax</h2>
              <table style={tableStyle}>
                <tbody>
                  {[
                    ['Estate Tax Exemption (per person)', '$13,990,000'],
                    ['Lifetime Gift Tax Exemption', '$13,990,000'],
                    ['Annual Gift Tax Exclusion', '$19,000'],
                    ['Top Estate / Gift Tax Rate', '40%'],
                    ['GST Tax Exemption', '$13,990,000'],
                  ].map(([label, val], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                      <td style={td}>{label}</td>
                      <td style={{ ...td, color: 'var(--navy)', fontWeight: 700 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={noteStyle}>⚠️ TCJA exemption scheduled to sunset after 2025 — monitor for legislative updates.</p>
            </div>

            {/* Other Key Figures */}
            <div style={cardStyle}>
              <h2 style={cardTitle}>Other Key Figures</h2>
              <table style={tableStyle}>
                <tbody>
                  {[
                    ['Social Security Wage Base', '$176,100'],
                    ['Medicare Tax Rate', '1.45%'],
                    ['Additional Medicare Tax (>$200K single)', '0.9%'],
                    ['HSA Limit — Self Only', '$4,300'],
                    ['HSA Limit — Family', '$8,550'],
                    ['HSA Catch-up (age 55+)', '+$1,000'],
                    ['SALT Deduction Cap', '$10,000'],
                    ['AMT Exemption — Single', '$88,100'],
                    ['AMT Exemption — MFJ', '$137,000'],
                  ].map(([label, val], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                      <td style={td}>{label}</td>
                      <td style={{ ...td, color: 'var(--navy)', fontWeight: 700 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── ROTH IRA INCOME LIMITS ── */}
          <div style={{ ...cardStyle, marginTop: '1.5rem' }}>
            <h2 style={cardTitle}>Roth IRA Income Phase-Out Ranges</h2>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={th}>Filing Status</th>
                  <th style={th}>Phase-Out Begins</th>
                  <th style={th}>Phase-Out Ends</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Single / Head of Household', '$150,000', '$165,000'],
                  ['Married Filing Jointly', '$236,000', '$246,000'],
                  ['Married Filing Separately', '$0', '$10,000'],
                ].map(([status, start, end], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                    <td style={td}>{status}</td>
                    <td style={{ ...td, color: 'var(--navy)', fontWeight: 700 }}>{start}</td>
                    <td style={{ ...td, color: 'var(--navy)', fontWeight: 700 }}>{end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── DISCLAIMER ── */}
          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.5rem 2rem',
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '0.5rem',
            }}
          >
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <strong>Disclaimer:</strong> This summary is for informational purposes only and does not constitute tax or legal advice.
              Figures are based on currently available 2025–2026 IRS guidance and are subject to change.
              Please consult a qualified tax professional for advice specific to your individual situation.
            </p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              © 2026 RVL Funding · <a href="https://www.rvlfunding.com" style={{ color: 'var(--gold)' }}>www.rvlfunding.com</a> · <a href="mailto:info@rvlfunding.com" style={{ color: 'var(--gold)' }}>info@rvlfunding.com</a>
            </p>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow" style={{ textAlign: 'center' }}>Next Step</span>
            <h2>Have questions about your tax situation?</h2>
            <p>Our advisors can help you navigate cross-border tax complexity, immigration timing, and wealth structuring.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const, marginTop: '1.5rem' }}>
              <Link href="/book" className="btn-primary">Book a Free 15-Min Call</Link>
              <Link href="/contact" className="btn-navy">Contact RVL</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// ── Styles ──
const cardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  padding: 'clamp(1.25rem, 3vw, 2rem)',
  boxShadow: '0 8px 32px rgba(10,37,64,0.05)',
  marginBottom: '1.5rem',
};

const cardTitle: React.CSSProperties = {
  fontSize: '1.05rem',
  fontWeight: 700,
  color: 'var(--navy)',
  marginBottom: '1rem',
  paddingBottom: '0.75rem',
  borderBottom: '2px solid var(--gold)',
  letterSpacing: '-0.01em',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.875rem',
};

const th: React.CSSProperties = {
  background: 'var(--navy)',
  color: 'var(--gold)',
  padding: '0.6rem 0.9rem',
  textAlign: 'left',
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
};

const td: React.CSSProperties = {
  padding: '0.55rem 0.9rem',
  color: 'var(--text-muted)',
  borderBottom: '1px solid var(--border)',
};

const tableLabel: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 700,
  color: 'var(--text-muted)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
};

const noteStyle: React.CSSProperties = {
  fontSize: '0.76rem',
  color: 'var(--text-muted)',
  marginTop: '0.75rem',
  fontStyle: 'italic',
};
