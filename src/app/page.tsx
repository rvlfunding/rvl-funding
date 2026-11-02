import Link from 'next/link';
import { AUDIENCE, BOUNDARIES, CASES, FAQ, HERO, PRODUCTS, STEPS, TEAM, WHY } from '@/lib/site-content';

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
            <span className="eyebrow">{HERO.eyebrow}</span>
            <h1>{HERO.h1}</h1>
            <p className="hero-subtitle">{HERO.sub}</p>
            <div className="hero-home-actions">
              <Link href="/assessment" className="btn-primary">
                {HERO.primaryCta}
              </Link>
              <Link href="/services#retainer" className="btn-secondary">
                {HERO.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="hero-glass-panel hero-watchlist" aria-label="每月替你盯的事">
            <p className="hero-watchlist-title">{HERO.watchlistTitle}</p>
            <ul>
              {HERO.watchlist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="hero-watchlist-foot">{HERO.watchlistFoot}</p>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="home-section home-section--mist" aria-labelledby="audience-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">为谁服务 · 三种情况我们每天都在处理</span>
            <h2 id="audience-heading">中国企业落地美国后，谁在管日常运营？</h2>
            <p>想做，不知道怎么做；不想做，怕美国税务；怕被骗。缺的不是价格，是一份可以交给律师的落地方案。</p>
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
            <h2 id="products-heading">三种合作方式：路径评估、运营陪跑、全程项目管理</h2>
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

      {/* Team */}
      <section className="home-section" aria-labelledby="team-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">团队 · 一个入口，七个职能</span>
            <h2 id="team-heading">我们协调移民律师、税法律师、CPA、保险与 PEO，你只对接一个人</h2>
            <p>{TEAM.intro}</p>
          </div>
          <div className="team-stats">
            {TEAM.stats.map((s) => (
              <div className="team-stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="function-grid">
            {TEAM.functions.map((f) => (
              <article className="function-card" key={f.role}>
                <h3>{f.role}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
          <p className="team-note">律师与 CPA 为独立持牌专业人士，是 RVL 长期整合的固定合作团队；由 RVL 总协调师统一调度，你只对接一个人。</p>
        </div>
      </section>

      {/* Why */}
      <section className="home-section home-section--mist" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">为什么是 RVL</span>
            <h2 id="why-heading">不是中介，是替你把事做完的团队</h2>
            <p>
              中介把你介绍给别人；我们把中美两边的财务、身份、税务、保险、合规整理成能获批、能执行的方案，然后按月盯着它发生。
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
              客户最常问的六个问题
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
            <h2 id="cta-heading">先用 $300，把该不该做、走哪条路、花多少钱算清楚</h2>
            <p style={{ margin: '1rem 0 2rem' }}>
              路径评估 $300 起，5 个工作日出书面落地方案，60 天内签约全额抵扣。每月限量排期。
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
