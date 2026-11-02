import Link from 'next/link';
import type { Metadata } from 'next';
import { PRODUCTS } from '@/lib/site-content';

export const metadata: Metadata = {
  title: '运营陪跑月费与全程项目管理｜公司设立 · 合规日历 · 保险续保 · 运营记录',
  description: '按月提供美国公司合规日历、payroll 与 PEO、商业保险续保管理、HR 文件及 L-1A/EB-1C 运营记录包；五年全程项目管理可选。价格公开：评估 $300 起、月费 $1,500 起。',
};

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">服务与价格 · Services &amp; Pricing</p>
          <h1>三个产品，三个阶段，价格写在纸上</h1>
          <p className="hero-text">
            先用一次性的路径评估看清楚；需要有人盯就按月；需要有人从头负责到底就五年。每个产品都写明包含、不包含、付款与退出。价格为参考价，以书面报价单为准。
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/assessment">
              从路径评估开始
            </Link>
            <Link className="btn-navy" href="/book">
              先约 15 分钟电话
            </Link>
          </div>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th></th>
                  {PRODUCTS.map((p) => (
                    <th key={p.slug}>
                      {p.name}
                      <small>{p.nameEn}</small>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>适合谁</th>
                  {PRODUCTS.map((p) => (
                    <td key={p.slug}>{p.forWho}</td>
                  ))}
                </tr>
                <tr>
                  <th>价格</th>
                  {PRODUCTS.map((p) => (
                    <td key={p.slug}>
                      <strong>{p.price}</strong>
                    </td>
                  ))}
                </tr>
                <tr>
                  <th>形态</th>
                  <td>一次性，面谈后 5 个工作日交付</td>
                  <td>按月，12 个月起签</td>
                  <td>五年，分五段付款</td>
                </tr>
                <tr>
                  <th>你买到的</th>
                  <td>一份可以交给律师的书面落地方案</td>
                  <td>每个截止日有人盯，每月一份经营记录包</td>
                  <td>美国这边有一个全程负责、能到场能签字的团队</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {PRODUCTS.map((p, i) => (
        <section
          key={p.slug}
          id={p.slug}
          className={i % 2 === 0 ? 'home-section home-section--mist' : 'home-section'}
          aria-labelledby={`${p.slug}-heading`}
        >
          <div className="container product-detail">
            <div className="product-detail-head">
              <span className="eyebrow">{p.eyebrow}</span>
              <h2 id={`${p.slug}-heading`}>
                {p.name} <small>{p.nameEn}</small>
              </h2>
              <p className="pricing-price">{p.price}</p>
              <p className="product-price-note">{p.priceNote}</p>
              <p>{p.promise}</p>
              <Link href={p.ctaHref} className="btn-primary" style={{ marginTop: '1rem' }}>
                {p.cta}
              </Link>
            </div>
            <div className="product-detail-cols">
              <div className="product-col">
                <h3>包含</h3>
                <ul className="check-list">
                  {p.includes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="product-col">
                <h3>不包含</h3>
                <ul className="cross-list">
                  {p.excludes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <h3 style={{ marginTop: '1.5rem' }}>条款</h3>
                <ul className="dot-list">
                  {p.terms.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow">不确定选哪个？</span>
            <h2>都从路径评估开始</h2>
            <p style={{ margin: '1rem 0 2rem' }}>
              落地方案的最后一页就是建议：不做、按月、还是五年。60 天内签约，评估费全额抵扣。
            </p>
            <Link href="/assessment" className="btn-primary">
              预约路径评估
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
