import Link from 'next/link';
import { AUDIENCE, AUDIENCE_INTRO, CASES, FAQ, HERO, PRODUCTS, STEPS, TEAM, WHY } from '@/lib/site-content';

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
          <div className="hero-glass-panel hero-watchlist" aria-label="合规日历">
            <p className="hero-watchlist-title">{HERO.watchlistTitle}</p>
            <ul>
              {HERO.watchlist.map((item) => {
                const [k, ...rest] = item.split('：');
                return (
                  <li key={item}>
                    <strong>{k}</strong>：{rest.join('：')}
                  </li>
                );
              })}
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
            <p>{AUDIENCE_INTRO}四种处境，一个共同点：不缺信息，缺一支把信息变成顺序、把顺序变成结果的团队。</p>
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
              从一次性的评估，到按月的陪跑，再到全程项目管理——深度不同，规则一样：包含什么、不包含什么、怎么付、怎么退，签约前写清。价格为参考价，以书面报价单为准。
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
            <span className="eyebrow">团队 · Team</span>
            <h2 id="team-heading">每家客户，一支专属团队</h2>
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
                <Link href={`/team/${f.slug}`} className="fn-link">
                  看这个职能做什么 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="home-section home-section--mist" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">我们怎么做 · How we work</span>
            <h2 id="why-heading">中介把你介绍给别人，我们把事做到底</h2>
            <p>
              落地这件事没有一个环节是新的，难的是把二十几件小事按对的顺序、在对的时间、由对的人做完。这就是我们每天在做的。
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
            <span className="eyebrow">案例 · Cases</span>
            <h2 id="cases-heading">几件做完的事</h2>
            <p>客户以代号呈现，不写姓名、公司名与证件信息。每个案子的条件都不同，过往结果不代表未来审批。</p>
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

      {/* FAQ */}
      <section className="home-section home-section--mist" aria-labelledby="faq-heading">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">团队 · Team</span>
            <h2 style={{ marginBottom: '1.25rem' }}>八个职能，一张时间表</h2>
            <p>{TEAM.intro}</p>
            <p style={{ marginTop: '1rem' }}>
              <Link href="/about#team" className="fn-link">
                了解团队如何分工 →
              </Link>
            </p>
          </div>
          <div>
            <span className="eyebrow">常见问题 · FAQ</span>
            <h2 id="faq-heading" style={{ marginBottom: '1.25rem' }}>
              签约前大家都会问的
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
            <h2 id="cta-heading">先把方向、步骤和预算写在纸上</h2>
            <p style={{ margin: '1rem 0 2rem' }}>
              路径评估 $300 起。面谈后 5 个工作日拿到书面落地方案；60 天内签约，这 $300 全额抵扣。
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
