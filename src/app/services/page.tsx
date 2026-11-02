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
          <h1>三种合作方式，一套看得见的规则</h1>
          <p className="hero-text">
            一次性的评估、按月的陪跑、五年的全程负责。深度不同，规则一样：包含什么、不包含什么、怎么付、怎么退，签约前全部写清。价格为参考价，以书面报价单为准。
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
                  <td>方向、步骤、预算、风险，写成一份能拿给律师核对的方案</td>
                  <td>一个长期在场的人：截止日有人盯，记录按月整理，材料提前备齐</td>
                  <td>从设立到绿卡，一张五年时间表，一个团队负责到底</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="home-section home-section--mist" aria-labelledby="vs-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">和市场上常见的三类服务比</span>
            <h2 id="vs-heading">注册代办、名义雇主（EOR/PEO）、运营陪跑，各管哪一段</h2>
            <p>市场上「从注册到运营」的服务大多只覆盖一段。看清楚每种收费管什么，再决定要不要月费。</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <h3>注册代办 · 按年收费</h3>
              <p>管注册、EIN、注册代理和年报。公司开出来之后的运营、人事、保险、律师会计的衔接不在范围内。</p>
            </article>
            <article className="service-card">
              <h3>名义雇主 EOR / PEO · 按员工人月计价</h3>
              <p>管雇佣、发薪、工资税和福利。不管公司本身的合规日历、保险续保、移民运营记录。</p>
            </article>
            <article className="service-card">
              <h3>RVL 运营陪跑 · 按公司每月固定</h3>
              <p>管公司这一层的全部：合规日历、经营记录、律师与 CPA 对接、保险续保、人事文件；PEO 可作为模块按人头加入。</p>
            </article>
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
            <h2>三条路都从评估开始</h2>
            <p style={{ margin: '1rem 0 2rem' }}>
              评估方案的最后一页会给出建议：不做、按月、还是五年。60 天内签约，评估费全额抵扣。
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
