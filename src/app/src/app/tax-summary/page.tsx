import Link from 'next/link';

export default function TaxSummaryPage() {
  return (
    <main className="page-shell">

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Client Resources</p>
          <h1>2026 Tax Summary</h1>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 7vw, 5rem) 0', background: 'var(--mist-2)' }}>
        <div className="container">

          {/* INCOME TAX BRACKETS */}
          <div style={cardStyle}>
            <h2 style={cardTitle}>2026 Federal Income Tax Brackets</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <p style={tableLabel}>Single / Married Filing Separately</p>
                <table style={tableStyle}>
                  <thead><tr><th style={th}>Rate</th><th style={th}>Taxable Income</th></tr></thead>
                  <tbody>
                    {[
                      ['10%', '$0 – $12,400'],
                      ['12%', '$12,401 – $50,400'],
                      ['22%', '$50,401 – $105,700'],
                      ['24%', '$105,701 – $201,775'],
                      ['32%', '$201,776 – $256,225'],
                      ['35%', '$256,226 – $640,600'],
                      ['37%', 'Over $640,600'],
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
                  <thead><tr><th style={th}>Rate</th><th style={th}>Taxable Income</th></tr></thead>
                  <tbody>
                    {[
                      ['10%', '$0 – $24,800'],
                      ['12%', '$24,801 – $100,800'],
                      ['22%', '$100,801 – $211,400'],
                      ['24%', '$211,401 – $403,550'],
                      ['32%', '$403,551 – $512,450'],
                      ['35%', '$512,451 – $768,700'],
                      ['37%', 'Over $768,700'],
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

          {/* CAPITAL GAINS */}
          <div style={cardStyle}>
            <h2 style={cardTitle}>2026 Long-Term Capital Gains &amp; Qualified Dividends</h2>
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
                  ['0%',  '$0 – $49,450',        '$0 – $98,900',        '$0 – $66,200'],
                  ['15%', '$49,451 – $545,500',   '$98,901 – $613,700',  '$66,201 – $579,600'],
                  ['20%', 'Over $545,500',         'Over $613,700',        'Over $579,600'],
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
            <p style={noteStyle}>Net Investment Income Tax (NIIT): additional 3.8% on net investment income for MAGI over $200,000 (single) / $250,000 (MFJ). Short-term gains taxed as ordinary income.</p>
          </div>

          {/* STANDARD DEDUCTION + RETIREMENT */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={cardStyle}>
              <h2 style={cardTitle}>2026 Standard Deduction</h2>
              <table style={tableStyle}>
                <tbody>
                  {[
                    ['Single / MFS', '$16,100'],
                    ['Married Filing Jointly', '$32,200'],
                    ['Head of Household', '$24,150'],
                    ['Age 65+ / Blind add-on (Single)', '+$2,050'],
                    ['Age 65+ / Blind add-on (MFJ, each)', '+$1,650'],
                    ['Senior Bonus Deduction (age 65+)*', '+$6,000'],
                  ].map(([label, val], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                      <td style={td}>{label}</td>
                      <td style={{ ...td, color: 'var(--navy)', fontWeight: 700 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={noteStyle}>*Senior Bonus phases out at 6% for MAGI over $75,000 (single) / $150,000 (MFJ). Temporary through 2028.</p>
            </div>

            <div style={cardStyle}>
              <h2 style={cardTitle}>2026 Retirement Contribution Limits</h2>
              <table style={tableStyle}>
                <tbody>
                  {[
                    ['401(k) / 403(b) / 457', '$24,500'],
                    ['Catch-up (age 50–59 / 64+)', '+$7,500'],
                    ['Super Catch-up (age 60–63)', '+$11,250'],
                    ['Traditional / Roth IRA', '$7,500'],
                    ['IRA Catch-up (age 50+)', '+$1,100'],
                    ['SEP-IRA (25% of comp, max)', '$70,000'],
                    ['SIMPLE IRA', '$16,500'],
                    ['HSA — Self Only', '$4,400'],
                    ['HSA — Family', '$8,750'],
                    ['HSA Catch-up (age 55+)', '+$1,000'],
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

          {/* ESTATE + AMT */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={cardStyle}>
              <h2 style={cardTitle}>2026 Estate &amp; Gift Tax</h2>
              <table style={tableStyle}>
                <tbody>
                  {[
                    ['Federal Estate Tax Exemption', '$15,000,000'],
                    ['Lifetime Gift Tax Exemption', '$15,000,000'],
                    ['Married Couple Combined', '$30,000,000'],
                    ['Annual Gift Tax Exclusion', '$19,000'],
                    ['Annual Exclusion — Non-Citizen Spouse', '$190,400'],
                    ['Top Estate / Gift Tax Rate', '40%'],
                  ].map(([label, val], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                      <td style={td}>{label}</td>
                      <td style={{ ...td, color: 'var(--navy)', fontWeight: 700 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={noteStyle}>OBBBA made the higher TCJA exemption permanent and indexed for inflation going forward.</p>
            </div>

            <div style={cardStyle}>
              <h2 style={cardTitle}>2026 AMT &amp; Other Key Figures</h2>
              <table style={tableStyle}>
                <tbody>
                  {[
                    ['AMT Exemption — Single', '$90,100'],
                    ['AMT Exemption — MFJ', '$140,200'],
                    ['AMT Phase-out — Single', 'Above $500,000'],
                    ['AMT Phase-out — MFJ', 'Above $1,000,000'],
                    ['Social Security Wage Base', '$176,100'],
                    ['Medicare Tax Rate (employees)', '1.45%'],
                    ['Additional Medicare Tax (MAGI >$200K single)', '0.9%'],
                    ['SALT Deduction Cap (OBBBA)', '$40,400 (MFJ)'],
                    ['Child Tax Credit (per child)', '$2,200'],
                  ].map(([label, val], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--mist-2)' : 'var(--white)' }}>
                      <td style={td}>{label}</td>
                      <td style={{ ...td, color: 'var(--navy)', fontWeight: 700 }}>{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={noteStyle}>SALT cap increases 1%/yr through 2029, then reverts to $10,000 in 2030. Phase-out above ~$505,000 MAGI.</p>
            </div>
          </div>

          {/* ROTH IRA */}
          <div style={{ ...cardStyle, marginTop: '1.5rem' }}>
            <h2 style={cardTitle}>2026 Roth IRA Income Phase-Out Ranges</h2>
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
                  ['Married Filing Jointly', '$242,000', '$252,000'],
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

          {/* DISCLAIMER */}
          <div style={{ marginTop: '2.5rem', padding: '1.5rem 2rem', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              <strong>Source:</strong> IRS Rev. Proc. 2025-32 · One Big Beautiful Bill Act (OBBBA, enacted 2025).
              This summary is for informational purposes only and does not constitute tax or legal advice.
              Figures are subject to change. Consult a qualified tax professional for advice specific to your situation.
            </p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              © 2026 RVL Funding ·{' '}
              <a href="https://www.rvlfunding.com" style={{ color: 'var(--gold)' }}>www.rvlfunding.com</a>
              {' '}·{' '}
              <a href="mailto:info@rvlfunding.com" style={{ color: 'var(--gold)' }}>info@rvlfunding.com</a>
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', background: 'var(--white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow" style={{ textAlign: 'center' }}>Next Step</span>
            <h2>Questions about your tax situation?</h2>
            <p>Our advisors specialize in cross-border tax, immigration timing, and wealth structuring for high-net-worth families.</p>
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

const cardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  padding: 'clamp(1.25rem, 3vw, 2rem)',
  boxShadow: '0 8px 32px rgba(10,37,64,0.05)',
  marginBottom: '1.5rem',
};
const cardTitle: React.CSSProperties = {
  fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)',
  marginBottom: '1rem', paddingBottom: '0.75rem',
  borderBottom: '2px solid var(--gold)', letterSpacing: '-0.01em',
};
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' };
const th: React.CSSProperties = {
  background: 'var(--navy)', color: 'var(--gold)',
  padding: '0.6rem 0.9rem', textAlign: 'left',
  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
};
const td: React.CSSProperties = {
  padding: '0.55rem 0.9rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--border)',
};
const tableLabel: React.CSSProperties = {
  fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)',
  letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem',
};
const noteStyle: React.CSSProperties = {
  fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '0.75rem', fontStyle: 'italic',
};
