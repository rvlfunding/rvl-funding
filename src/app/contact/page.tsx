import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE } from '@/lib/site-content';

export const metadata: Metadata = {
  title: '联系 · Contact | RVL Funding',
  description: '联系 RVL Funding：邮件、15 分钟电话预约、洛杉矶办公室。',
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">联系 · Contact</p>
          <h1>一封邮件，或一个 15 分钟的电话</h1>
          <p className="hero-text">
            写两三句话：你的公司在做什么、现在在美国的状态、卡在哪里。我们 1 个工作日内回复下一步。
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href={`mailto:${SITE.email}?subject=${encodeURIComponent('咨询 · RVL Funding')}`}>
              发邮件
            </a>
            <Link className="btn-navy" href="/book">
              约 15 分钟电话
            </Link>
          </div>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <p className="section-label">方式</p>
          <h2>怎么找到我们</h2>
          <div className="service-grid" style={{ marginTop: '2rem' }}>
            <article className="service-card">
              <h3>邮件</h3>
              <p>{SITE.email}</p>
            </article>
            <article className="service-card">
              <h3>时间</h3>
              <p>{SITE.hours}</p>
            </article>
            <article className="service-card">
              <h3>地址</h3>
              <p>{SITE.address}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="contact-split">
            <div>
              <p className="section-label">已经知道要什么？</p>
              <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>直接走对应的入口</h2>
              <ul className="contact-links">
                <li>
                  <Link href="/assessment">路径评估 → 填表预约，$1,800 起</Link>
                </li>
                <li>
                  <Link href="/services#retainer">运营陪跑月费 → 看包含与条款</Link>
                </li>
                <li>
                  <Link href="/services#program">全程项目管理 → 先做评估，再出五年方案</Link>
                </li>
              </ul>
            </div>
            <div className="contact-note">
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>请不要在邮件里发送</p>
              <p>
                护照、身份证、保单号、银行信息。第一次联系只需要文字描述；需要材料时我们会用安全的方式单独索取。
              </p>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.7 }}>
                RVL Funding 不是律师事务所，不提供法律、税务或投资意见。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
