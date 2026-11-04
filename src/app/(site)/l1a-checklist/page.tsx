export default function L1AChecklistPage() {
  return (
    <main className="page-shell">

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Client Resources</p>
          <h1>L1-A Visa Checklist</h1>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 7vw, 5rem) 0', background: 'var(--mist-2)' }}>
        <div className="container">

          {/* OVERVIEW */}
          <div style={card}>
            <h2 style={cardH}>Overview — What is the L1-A Visa?</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              The L-1A nonimmigrant visa allows multinational companies to transfer executives or managers
              from a foreign affiliate, subsidiary, parent, or branch to a U.S. office. The L-1A is also
              a common pathway to the EB-1C green card for multinational managers and executives.
              This checklist covers the key documents required for an L-1A petition (Form I-129).
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.25rem' }}>
              {[
                ['Initial L-1A', 'Up to 3 years'],
                ['Extension', 'Up to 2 years per extension (7-year max)'],
                ['New Office L-1A', 'Initial 1 year; renewable'],
              ].map(([title, desc], i) => (
                <div key={i} style={{ background: 'var(--mist-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{title}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PART 1 — PETITIONER (U.S. COMPANY) */}
          <div style={card}>
            <h2 style={cardH}>Part 1 — Petitioner Documents (U.S. Company)</h2>
            <table style={tbl}>
              <thead><tr><th style={th}>Document</th><th style={th}>Notes</th></tr></thead>
              <tbody>
                {[
                  ['Form I-129 + L Supplement', 'Signed and dated by authorized company representative'],
                  ['Form G-28', 'If represented by an attorney'],
                  ['Filing fee payment', 'Check current USCIS fee schedule before filing'],
                  ['Anti-fraud fee ($500)', 'Required for all L petitions'],
                  ['Premium processing fee', 'Optional — Form I-907 + $2,805 for 15-business-day processing'],
                  ['U.S. company business license / registration', 'Articles of incorporation or state registration'],
                  ['U.S. company tax returns (2–3 years)', 'Federal corporate returns demonstrating active operations'],
                  ['U.S. company financial statements', 'Balance sheet, P&L for the most recent year'],
                  ['U.S. company organizational chart', 'Showing the beneficiary\'s proposed position and reporting structure'],
                  ['U.S. company payroll records', 'Demonstrating employees under the beneficiary\'s supervision'],
                  ['U.S. office lease or property deed', 'Proof of established U.S. business premises'],
                  ['U.S. company brochure / website printout', 'Evidence of active business operations'],
                  ['Letter of support from U.S. company', 'Describing the qualifying relationship and beneficiary\'s role'],
                ].map(([doc, notes], i) => (
                  <tr key={i} style={{ background: i%2===0 ? 'var(--mist-2)' : 'var(--white)' }}>
                    <td style={{ ...td, fontWeight: 600, color: 'var(--navy)', width: '42%' }}>{doc}</td>
                    <td style={td}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PART 2 — QUALIFYING RELATIONSHIP */}
          <div style={card}>
            <h2 style={cardH}>Part 2 — Qualifying Relationship Between U.S. &amp; Foreign Entities</h2>
            <table style={tbl}>
              <thead><tr><th style={th}>Document</th><th style={th}>Notes</th></tr></thead>
              <tbody>
                {[
                  ['Corporate organizational chart (global)', 'Showing ownership structure of all related entities'],
                  ['Stock certificates / ownership records', 'Proving majority ownership or control'],
                  ['Shareholder agreements', 'If ownership structure is complex'],
                  ['Certificate of good standing (foreign entity)', 'Issued within 6 months of filing'],
                  ['Foreign entity registration documents', 'Articles of incorporation or equivalent'],
                  ['Audited financial statements (foreign entity)', 'Most recent 1–2 years'],
                  ['Foreign entity annual report', 'If publicly traded or required by local law'],
                  ['Affiliate / subsidiary agreement', 'If qualifying relationship is based on affiliation rather than ownership'],
                ].map(([doc, notes], i) => (
                  <tr key={i} style={{ background: i%2===0 ? 'var(--mist-2)' : 'var(--white)' }}>
                    <td style={{ ...td, fontWeight: 600, color: 'var(--navy)', width: '42%' }}>{doc}</td>
                    <td style={td}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PART 3 — BENEFICIARY EMPLOYMENT HISTORY */}
          <div style={card}>
            <h2 style={cardH}>Part 3 — Beneficiary's Employment History at Foreign Entity</h2>
            <table style={tbl}>
              <thead><tr><th style={th}>Document</th><th style={th}>Notes</th></tr></thead>
              <tbody>
                {[
                  ['Employment verification letter (foreign entity)', 'Must confirm 1 continuous year of employment in the past 3 years in a managerial or executive role'],
                  ['Foreign entity organizational chart', 'Showing beneficiary\'s position, direct reports, and reporting structure'],
                  ['Job description — foreign position', 'Detailed duties demonstrating managerial or executive capacity'],
                  ['Payroll records or pay stubs (foreign)', 'Confirming employment dates and salary'],
                  ['Performance reviews (if available)', 'Supporting seniority and managerial role'],
                  ['Business cards / email signatures', 'Corroborating title and role'],
                  ['Contracts or board resolutions', 'Authorizing the transfer to the U.S. entity'],
                ].map(([doc, notes], i) => (
                  <tr key={i} style={{ background: i%2===0 ? 'var(--mist-2)' : 'var(--white)' }}>
                    <td style={{ ...td, fontWeight: 600, color: 'var(--navy)', width: '42%' }}>{doc}</td>
                    <td style={td}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PART 4 — BENEFICIARY PERSONAL DOCUMENTS */}
          <div style={card}>
            <h2 style={cardH}>Part 4 — Beneficiary Personal Documents</h2>
            <table style={tbl}>
              <thead><tr><th style={th}>Document</th><th style={th}>Notes</th></tr></thead>
              <tbody>
                {[
                  ['Valid passport (copy of bio page)', 'Must be valid for at least 6 months beyond intended stay'],
                  ['Copy of all prior U.S. visas', 'Including expired visas'],
                  ['Copy of prior I-94 records', 'Download from CBP website: i94.cbp.dhs.gov'],
                  ['Copies of prior approval notices (I-797)', 'Any prior L, H, O, or other nonimmigrant status'],
                  ['Diploma / degree certificates', 'Educational background supporting executive/managerial role'],
                  ['CV / résumé', 'Full employment history in both foreign and U.S. entities'],
                  ['Passport-style photo', 'Per USCIS specifications if consular processing is involved'],
                ].map(([doc, notes], i) => (
                  <tr key={i} style={{ background: i%2===0 ? 'var(--mist-2)' : 'var(--white)' }}>
                    <td style={{ ...td, fontWeight: 600, color: 'var(--navy)', width: '42%' }}>{doc}</td>
                    <td style={td}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PART 5 — NEW OFFICE L-1A (if applicable) */}
          <div style={card}>
            <h2 style={cardH}>Part 5 — New Office L-1A (Additional Requirements)</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Required only when the U.S. entity has been operating for less than one year.
            </p>
            <table style={tbl}>
              <thead><tr><th style={th}>Document</th><th style={th}>Notes</th></tr></thead>
              <tbody>
                {[
                  ['U.S. business plan', 'Comprehensive 3–5 year plan demonstrating viability and growth'],
                  ['Proof of sufficient physical premises', 'Signed lease covering at least the requested visa period'],
                  ['Evidence of capitalization', 'Bank statements or wire transfer records showing funds transferred to U.S. entity'],
                  ['Projected organizational chart', 'Showing planned hiring and structure within 1 year'],
                  ['Market research / feasibility study', 'Supporting the viability of U.S. operations'],
                  ['Evidence of active business development', 'Contracts, client letters of intent, or purchase orders'],
                ].map(([doc, notes], i) => (
                  <tr key={i} style={{ background: i%2===0 ? 'var(--mist-2)' : 'var(--white)' }}>
                    <td style={{ ...td, fontWeight: 600, color: 'var(--navy)', width: '42%' }}>{doc}</td>
                    <td style={td}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PART 6 — L-1A TO EB-1C PATHWAY */}
          <div style={card}>
            <h2 style={cardH}>Part 6 — L-1A to EB-1C Green Card Pathway</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              L-1A holders in executive or managerial roles may be sponsored for the EB-1C immigrant visa (green card) by their U.S. employer.
            </p>
            <table style={tbl}>
              <thead><tr><th style={th}>Step</th><th style={th}>Details</th></tr></thead>
              <tbody>
                {[
                  ['Step 1 — I-140 Petition', 'U.S. employer files Form I-140 (Immigrant Petition for Alien Workers) on behalf of the beneficiary. No PERM labor certification required for EB-1C.'],
                  ['Step 2 — Priority Date', 'EB-1C is generally current for most countries. Check the monthly Visa Bulletin for any backlog (e.g., India, China).'],
                  ['Step 3 — Adjustment of Status', 'File Form I-485 concurrently with I-140 if a visa number is immediately available, or after I-140 approval.'],
                  ['Step 4 — Consular Processing', 'Alternative to I-485 if the beneficiary is outside the U.S. Apply at the nearest U.S. consulate.'],
                  ['Key Advantage', 'No PERM required. EB-1C is employer-sponsored and typically faster than EB-2/EB-3 for most nationalities.'],
                ].map(([step, details], i) => (
                  <tr key={i} style={{ background: i%2===0 ? 'var(--mist-2)' : 'var(--white)' }}>
                    <td style={{ ...td, fontWeight: 700, color: 'var(--gold)', width: '28%' }}>{step}</td>
                    <td style={td}>{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* DISCLAIMER */}
          <div style={{ marginTop: '2.5rem', padding: '1.5rem 2rem', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                background: 'linear-gradient(145deg, var(--navy) 0%, var(--navy-mid) 100%)',
                color: 'var(--gold)', fontWeight: 700, fontSize: '0.75rem',
                padding: '0.4rem 0.8rem', borderRadius: '6px', letterSpacing: '0.1em',
              }}>
                RVL FUNDING
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <a href="https://www.rvlfunding.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>www.rvlfunding.com</a>
                {' · '}
                <a href="mailto:info@rvlfunding.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>info@rvlfunding.com</a>
              </div>
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              <strong>Disclaimer:</strong> This checklist is for general informational purposes only and does not constitute legal advice.
              Immigration requirements are subject to change. Document requirements may vary based on individual circumstances,
              USCIS policy updates, and consular post requirements. Always consult a qualified U.S. immigration attorney
              before filing any petition. © 2026 RVL Funding · All rights reserved.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

const card: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  padding: 'clamp(1.25rem, 3vw, 2rem)',
  boxShadow: '0 8px 32px rgba(10,37,64,0.05)',
  marginBottom: '1.5rem',
};
const cardH: React.CSSProperties = {
  fontSize: '1.05rem', fontWeight: 700, color: 'var(--navy)',
  marginBottom: '1rem', paddingBottom: '0.75rem',
  borderBottom: '2px solid var(--gold)', letterSpacing: '-0.01em',
};
const tbl: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' };
const th: React.CSSProperties = {
  background: 'var(--navy)', color: 'var(--gold)',
  padding: '0.6rem 0.9rem', textAlign: 'left',
  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
};
const td: React.CSSProperties = {
  padding: '0.6rem 0.9rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--border)',
  verticalAlign: 'top', lineHeight: 1.7,
};
