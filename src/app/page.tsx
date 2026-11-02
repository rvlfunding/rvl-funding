import Link from 'next/link';
import { BOUNDARIES, CASES, FAQ, PRODUCTS, SITE, STEPS, WHY } from '@/lib/site-content';

const WATCHLIST = [
  '保险到期：workers’ comp、责任险、仓库险',
  '执照年审、Statement of Information',
  '工资税申报、工伤与审计',
  '经营记录：流水、工资单、合同、租约归档',
  '律师与 CPA 要的材料',
  '政府与保险公司的官方信件',
];

const AUDIENCE = [
  {
    title: '刚拿到 L-1、刚设点的工厂或仓库',
    text: '人到了，公司注册了，接下来 18 个月有十几件事要按时发生：保险、执照、工资、审计、延期材料。没人盯，到递交时才补。',
  },
  {
    title: '老板在国内，美国这边没有自己人',
    text: '会计只做账，律师只做案，保险人只卖保单。每一件小事都要你隔着时差亲自催，出了事找不到一个说了算的人。',
  },
  {
    title: '拿过移民报价，两年没动',
    text: '不是不想做，是看不懂、不敢信、怕被套。缺的不是另一份报价，是一份能拿给律师核对的书面对比。',
  },
];

export default function Home() {
  const [assessment, retainer, program] = PRODUCTS;

  return (
    <div className="page-home">
      {/* Hero */}
      <section className="hero-home" aria-label="首屏">
        <div className="hero-home-shine" aria-hidden={true} />
        <div className="hero-home-noise" aria-hidden={true} />
        <div className="hero-home-inner">
          <div className="hero-home-copy">
            <span className="eyebrow">在美落地 · 运营 · 合规 · Landing Operations</span>
            <h1>{SITE.tagline}</h1>
            <p className="hero-subtitle">
              {SITE.taglineEn} — 面向已经在美国落地的中国企业：保险续保、合规日历、经营记录、律师与 CPA
              对接。你在国内，这边的事有人应。
            </p>
            <div className="hero-home-actions">
              <Link href="/assessment" className="btn-primary">
                预约路径评估 · $1,800 起
              </Link>
              <Link href="/services#retainer" className="btn-secondary">
                看月费包含什么
              </Link>
            </div>
          </div>
          <div className="hero-glass-panel hero-watchlist" aria-label="每月替你盯的事">
            <p className="hero-watchlist-title">每月替你盯的 6 类事</p>
            <ul>
              {WATCHLIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="hero-watchlist-foot">每个截止日提前提醒 · 每月一份经营记录包 · 每季一次检视</p>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="home-section home-section--mist" aria-labelledby="audience-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">为谁服务 · Who it’s for</span>
            <h2 id="audience-heading">三种情况，我们每天都在处理</h2>
          </div>
          <div className="service-grid">
            {AUDIENCE.map((a) => (
              <article className="service-card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="home-section" aria-labelledby="products-heading" id="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">三个产品 · 三个阶段</span>
            <h2 id="products-heading">先看清楚，再按月，再五年</h2>
            <p>
              所有价格为参考价，以书面报价单为准。评估费在 60 天内签约可全额抵扣；月费签约当月起原有单项收费取消。
            </p>
          </div>
          <div className="pricing-grid">
            {[assessment, retainer, program].map((p, i) => (
              <article className={`pricing-card${i === 1 ? ' pricing-card--featured' : ''}`} key={p.slug} id={p.slug}>
                <span className="pricing-eyebrow">{p.eyebrow}</span>
                <h3>
                  {p.name}
                  <small>{p.nameEn}</small>
                </h3>
                <p className="pricing-price">{p.price}</p>
                <p className="pricing-for">{p.forWho}</p>
                <p className="pricing-promise">{p.promise}</p>
                <Link href={p.ctaHref} className={i === 1 ? 'btn-primary' : 'btn-navy'}>
                  {p.cta}
                </Link>
                <Link href={`/services#${p.slug}`} className="pricing-more">
                  包含 / 不包含 / 条款 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-dark" aria-labelledby="steps-heading">
        <div className="container">
          <p className="section-label">怎么合作 · How it works</p>
          <h2 id="steps-heading" style={{ color: 'var(--white)', marginBottom: '2.5rem' }}>
            三步，每一步都写在纸上
          </h2>
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div className="step-card" key={s.n}>
                <span className="step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="home-section home-section--mist" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">为什么是 RVL</span>
            <h2 id="why-heading">不是中介，是替你把事做完的人</h2>
            <p>
              中介把你介绍给别人；我们把中美两边的财务、身份、保险、合规整理成能获批、能执行的方案，然后按月盯着它发生。
            </p>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <article className="why-card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cases preview */}
      <section className="home-section" aria-labelledby="cases-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">案例 · 以代号呈现</span>
            <h2 id="cases-heading">真实的事，匿名的人</h2>
            <p>客户以代号呈现，不写姓名、公司名与任何证件信息。过往结果不代表未来审批。</p>
          </div>
          <div className="service-grid">
            {CASES.slice(0, 3).map((c) => (
              <article className="service-card case-preview" key={c.code}>
                <span className="case-code">
                  {c.code} · {c.industry}
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <p className="case-result">{c.result}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/cases" className="btn-navy">
              看全部案例
            </Link>
          </div>
        </div>
      </section>

      {/* Boundaries + FAQ */}
      <section className="home-section home-section--mist" aria-labelledby="faq-heading">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">边界 · 我们不做什么</span>
            <h2 style={{ marginBottom: '1.25rem' }}>说清楚不做的，才能把做的做好</h2>
            <ul className="boundary-list">
              {BOUNDARIES.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">常见问题 · FAQ</span>
            <h2 id="faq-heading" style={{ marginBottom: '1.25rem' }}>
              客户最常问的五个问题
            </h2>
            <div className="faq-list">
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow">第一步</span>
            <h2 id="cta-heading">先花 90 分钟，把该不该做、走哪条路、花多少钱算清楚</h2>
            <p style={{ margin: '1rem 0 2rem' }}>
              路径评估 $1,800 起，5 个工作日出书面报告，60 天内签约全额抵扣。每月只排 4 个。
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <Link href="/assessment" className="btn-primary">
                预约路径评估
              </Link>
              <Link href="/book" className="btn-navy">
                先约 15 分钟电话
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
