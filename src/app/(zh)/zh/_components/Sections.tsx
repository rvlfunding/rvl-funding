import Link from 'next/link';
import {
  ALT,
  BOOKING,
  CTA,
  HERO,
  HOME_FAQ,
  IMG,
  INSIGHTS,
  MARQUEE,
  NETWORK,
  PRICING,
  PROCESS,
  SERVICES,
  TEAM,
  type FaqItem,
} from '../content';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="bg" style={{ ['--hero-img' as string]: `url('${IMG.hero}')` }} role="img" aria-label={ALT.hero} />
      <div className="wrap">
        <div>
          <div className="eyebrow">{HERO.eyebrow}</div>
          <h1 id="hero-title">
            {HERO.titleLines[0]}
            <br />
            {HERO.titleLines[1]}
          </h1>
          <p className="sub">{HERO.sub}</p>
          <p className="desc">{HERO.desc}</p>
          <div className="ctas">
            <a className="btn btn-gold" href="#cta">
              {HERO.ctaBusiness}
            </a>
            <a className="btn btn-ghost" href="#cta">
              {HERO.ctaFamily}
            </a>
          </div>
          <div className="trust">
            {HERO.trust.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <aside className="nodes" aria-labelledby="hero-faq">
          <h2 className="nodes-title" id="hero-faq">
            {HERO.cardTitle}
          </h2>
          <ol>
            {HERO.card.map((n) => (
              <li key={n.q}>
                <Link href={n.href}>{n.q}</Link>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}

export function Marquee() {
  return (
    <nav className="marquee" aria-label="服务关键词">
      <div className="track">
        {MARQUEE.map((m) => (
          <Link key={m.label} href={m.href}>
            {m.label}
          </Link>
        ))}
        {MARQUEE.map((m) => (
          <Link key={`dup-${m.label}`} href={m.href} aria-hidden="true" tabIndex={-1}>
            {m.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Services() {
  return (
    <section className="band" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="eyebrow">{SERVICES.eyebrow}</div>
        <h2 className="h2" id="services-title">
          {SERVICES.title}
        </h2>
        <p className="lead">{SERVICES.lead}</p>
        <div className="svc">
          {SERVICES.items.map((s) => (
            <Link key={s.n} href={s.href}>
              <span className="n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="more">{s.more}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="band process" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="eyebrow">{PROCESS.eyebrow}</div>
        <h2 className="h2" id="process-title">
          {PROCESS.title}
        </h2>
        <p className="lead">{PROCESS.lead}</p>
        <ol className="steps">
          {PROCESS.steps.map((s, i) => (
            <li className="step" key={s.title}>
              <div className="dot">{i + 1}</div>
              <h3>{s.title}</h3>
              <div className="when">{s.when}</div>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="band pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="eyebrow">{PRICING.eyebrow}</div>
            <h2 className="h2" id="pricing-title">
              {PRICING.title}
            </h2>
            <p className="lead">{PRICING.lead}</p>
          </div>
          <div className="photo" style={{ backgroundImage: `url('${IMG.signing}')` }} role="img" aria-label={ALT.signing} />
        </div>
        <div className="plans">
          {PRICING.plans.map((p) => (
            <div className={p.featured ? 'plan feature' : 'plan'} key={p.title}>
              <div className="type">{p.type}</div>
              <h3>{p.title}</h3>
              <div className="price">
                {p.price}
                <small>{p.unit}</small>
              </div>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a className="btn btn-navy" href={p.href}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="fees">{PRICING.fees}</p>
      </div>
    </section>
  );
}

export function Roles() {
  return (
    <div className="roles">
      {NETWORK.roles.map((r) => (
        <div className="role" key={r.role}>
          <b>{r.role}</b>
          <span>{r.scope}</span>
        </div>
      ))}
    </div>
  );
}

export function Principles({ level = 3 }: { level?: 2 | 3 }) {
  const H = level === 2 ? 'h2' : 'h3';
  return (
    <>
      <H className="principles-title" id="principles">
        {NETWORK.principlesTitle}
      </H>
      <div className="principles">
        {NETWORK.principles.map((p) => (
          <div key={p.title}>
            <p className="p-title">{p.title}</p>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export function Network() {
  return (
    <section className="band network alt" id="network" aria-labelledby="network-title">
      <div className="wrap grid">
        <div>
          <div className="eyebrow">{NETWORK.eyebrow}</div>
          <h2 className="h2" id="network-title">
            {NETWORK.title}
          </h2>
          <p className="lead">{NETWORK.lead}</p>
          <Roles />
        </div>
        <div>
          <div className="netphoto" style={{ backgroundImage: `url('${IMG.advisors}')` }} role="img" aria-label={ALT.advisors} />
          <Principles />
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="band team" id="team" aria-labelledby="team-title">
      <div className="wrap grid">
        <div>
          <div className="eyebrow">{TEAM.eyebrow}</div>
          <h2 className="h2" id="team-title">
            {TEAM.title}
          </h2>
          <p className="lead">{TEAM.lead}</p>
          <Link className="more-link" href={TEAM.more.href}>
            {TEAM.more.label}
          </Link>
        </div>
        <div className="teamphoto" style={{ backgroundImage: `url('${IMG.team}')` }} role="img" aria-label={ALT.team} />
      </div>
    </section>
  );
}

export function Insights() {
  return (
    <section className="band" id="insights" aria-labelledby="insights-title">
      <div className="wrap">
        <div className="ins-head">
          <div>
            <div className="eyebrow">{INSIGHTS.eyebrow}</div>
            <h2 className="h2" id="insights-title">
              {INSIGHTS.title}
            </h2>
          </div>
          <Link href={INSIGHTS.allHref}>{INSIGHTS.allLabel}</Link>
        </div>
        <div className="insights">
          {INSIGHTS.posts.map((p) => (
            <Link className="post" href={p.href} key={p.title}>
              <span className="cat">{p.cat}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="meta">
                <span>{p.kind}</span>
                <span>阅读</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** 常见问题折叠列表，首页与各服务页共用。 */
export function FaqList({ items, openFirst = true }: { items: FaqItem[]; openFirst?: boolean }) {
  return (
    <div className="faq-list">
      {items.map((f, i) => (
        <details key={f.q} open={openFirst && i === 0}>
          <summary>
            <span>{f.q}</span>
            {f.en ? (
              <small lang="en" className="en-q">
                {f.en}
              </small>
            ) : null}
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Faq() {
  return (
    <section className="band faq alt" id="faq" aria-labelledby="faq-title">
      <div className="wrap grid">
        <div>
          <div className="eyebrow">{HOME_FAQ.eyebrow}</div>
          <h2 className="h2" id="faq-title">
            {HOME_FAQ.title}
          </h2>
          <p className="lead">{HOME_FAQ.lead}</p>
          <Link className="more-link" href="/zh/faq">
            查看全部常见问题
          </Link>
        </div>
        <FaqList items={HOME_FAQ.items} />
      </div>
    </section>
  );
}

export function CtaBand({ title = CTA.title, text = CTA.text }: { title?: string; text?: string }) {
  return (
    <section className="cta" id="cta" aria-labelledby="cta-title">
      <div className="bg" style={{ ['--cta-img' as string]: `url('${IMG.meeting}')` }} />
      <div className="wrap">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="ctas">
          <a className="btn btn-gold" href={BOOKING.business}>
            预约企业诊断
          </a>
          <a className="btn btn-ghost" href={BOOKING.family}>
            预约家庭诊断
          </a>
        </div>
      </div>
    </section>
  );
}
