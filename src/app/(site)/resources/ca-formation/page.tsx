import type { Metadata } from 'next';
import LeadForm from './LeadForm';

export const metadata: Metadata = {
  title: '美国加州公司注册咨询及服务报价 | California Entity Formation Advisory — RVL Funding',
  description:
    'Bilingual advisory memorandum on forming a company in California: choice of entity (C Corporation, S Corporation, LLC), governance, capitalization, federal and California tax considerations, and RVL’s schedule of professional fees.',
  alternates: { canonical: '/resources/ca-formation' },
};

const CONTENTS: Array<[string, string]> = [
  ['公司类型选择', 'C Corporation, S Corporation and LLC compared — including why a C Corp is usually preferred over a single-member LLC for PRC individual shareholders'],
  ['股东、董事及管理结构', 'Residency requirements, board and officer roles, and the California Agent for Service of Process'],
  ['经营范围与注册资本', 'Describing business activities for formation, tax registration and banking; industry licensing; capitalization'],
  ['美国联邦及加州主要税务', '21% federal corporate rate, 8.84% California franchise tax, the $800 LLC annual tax, Form 5472 reporting and sales tax nexus'],
  ['服务报价及预计时间', 'Formation, EIN, banking assistance, annual compliance, tax filings and hourly advisory — with indicative timelines'],
];

const cardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-lg)',
  padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
  boxShadow: 'var(--shadow-soft)',
};

export default function CaFormationPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Client Resources · 客户资源</p>
          <h1>美国加州公司注册咨询及服务报价</h1>
          <p className="hero-text">
            California Corporate Formation Advisory and Schedule of Professional Fees — a bilingual
            (Chinese / English) memorandum issued by RVL Funding, Inc. covering choice of entity,
            governance, capitalization, and federal and California tax considerations.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(3rem, 7vw, 5rem) 0', background: 'var(--mist-2)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              alignItems: 'start',
            }}
          >
            <div style={cardStyle}>
              <p className="section-label">Inside the memorandum · 内容概要</p>
              <h2 style={{ fontSize: '1.5rem', margin: '0.35rem 0 1.25rem' }}>6 pages · 中英双语</h2>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', margin: 0, padding: 0 }}>
                {CONTENTS.map(([zh, en]) => (
                  <li key={zh} style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1rem' }}>
                    <p style={{ fontWeight: 700, fontSize: '0.98rem', margin: 0 }}>{zh}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.65, margin: '0.2rem 0 0' }}>
                      {en}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div style={cardStyle}>
              <p className="section-label">Download · 获取文件</p>
              <h2 style={{ fontSize: '1.5rem', margin: '0.35rem 0 0.75rem' }}>
                填写信息，即刻发送至您的邮箱
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.75, margin: '0 0 1.75rem' }}>
                Complete the form and we will email you a download link straight away.
              </p>
              <LeadForm />
            </div>
          </div>

          <p
            style={{
              maxWidth: '760px',
              margin: 'clamp(2rem, 4vw, 3rem) auto 0',
              color: 'var(--text-muted)',
              fontSize: '0.82rem',
              lineHeight: 1.8,
              textAlign: 'center',
            }}
          >
            本文件为一般性公司设立及税务说明，不构成对任何特定事实情形的最终税务或法律意见。
            <br />
            This memorandum is general in nature and does not constitute final tax or legal advice for any
            specific set of facts.
          </p>
        </div>
      </section>
    </main>
  );
}
