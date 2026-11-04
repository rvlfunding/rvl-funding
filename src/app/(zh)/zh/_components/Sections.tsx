import {
  BOOKING,
  CTA,
  FAQ,
  HERO,
  IMG,
  INSIGHTS,
  LOGOS,
  MARQUEE,
  NETWORK,
  PRICING,
  PROCESS,
  SERVICES,
  TEAM,
} from '../content';

function Tbd({ children = '待确认' }: { children?: string }) {
  return <span className="tbd">{children}</span>;
}

export function Hero() {
  return (
    <section className="hero">
      <div className="bg" style={{ ['--hero-img' as string]: `url('${IMG.hero}')` }} role="img" aria-label="洛杉矶夜景" />
      <div className="wrap">
        <div>
          <div className="eyebrow">{HERO.eyebrow}</div>
          <h1>
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
        <aside className="nodes" aria-label={HERO.nodesTitle}>
          <h2 className="nodes-title">{HERO.nodesTitle}</h2>
          <ol>
            {HERO.nodes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>
          <p className="foot">{HERO.nodesFoot}</p>
        </aside>
      </div>
    </section>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-label="服务关键词">
      <div className="track">
        {MARQUEE.map((m) => (
          <span key={m}>{m}</span>
        ))}
        {MARQUEE.map((m) => (
          <span key={`dup-${m}`} aria-hidden="true">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="band" id="services">
      <div className="wrap">
        <div className="eyebrow">{SERVICES.eyebrow}</div>
        <h2 className="h2">{SERVICES.title}</h2>
        <p className="lead">{SERVICES.lead}</p>
        <div className="svc">
          {SERVICES.items.map((s) => (
            <a key={s.n} href="#cta">
              <span className="n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="more">{s.more}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="band process" id="process">
      <div className="wrap">
        <div className="eyebrow">{PROCESS.eyebrow}</div>
        <h2 className="h2">{PROCESS.title}</h2>
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
    <section className="band pricing" id="pricing">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="eyebrow">{PRICING.eyebrow}</div>
            <h2 className="h2">{PRICING.title}</h2>
            <p className="lead">{PRICING.lead}</p>
          </div>
          <div className="photo" style={{ backgroundImage: `url('${IMG.signing}')` }} role="img" aria-label="签署文件" />
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
              <p className="note">{p.note}</p>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <a className={p.featured ? 'btn btn-gold' : 'btn btn-navy'} href={BOOKING[p.href]}>
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

export function Network() {
  return (
    <section className="band network alt" id="network">
      <div className="wrap grid">
        <div>
          <div className="eyebrow">{NETWORK.eyebrow}</div>
          <h2 className="h2">{NETWORK.title}</h2>
          <p className="lead">{NETWORK.lead}</p>
          <div className="roles">
            {NETWORK.roles.map((r) => (
              <div className="role" key={r.role}>
                <b>{r.role}</b>
                <span>{r.scope}</span>
              </div>
            ))}
          </div>
          <p className="fine">
            {NETWORK.fine}
            <Tbd>{NETWORK.fineTbd}</Tbd>
          </p>
        </div>
        <div>
          <div className="netphoto" style={{ backgroundImage: `url('${IMG.advisors}')` }} role="img" aria-label="两位顾问交谈" />
          <h3 className="principles-title" id="principles">
            {NETWORK.principlesTitle}
          </h3>
          <div className="principles">
            {NETWORK.principles.map((p) => (
              <div key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="band team" id="team">
      <div className="wrap grid">
        <div>
          <div className="eyebrow">{TEAM.eyebrow}</div>
          <h2 className="h2">{TEAM.title}</h2>
          <p className="lead">{TEAM.lead}</p>
          <div className="people">
            {TEAM.people.map((p) => (
              <div className="person" key={p.name}>
                <div className={p.placeholder ? 'avatar ph' : 'avatar'}>{p.initial}</div>
                <div>
                  <h3>{p.name}</h3>
                  <div className="r">{p.role}</div>
                  <p>
                    {p.bio}
                    {p.tbd ? <Tbd>{p.tbd}</Tbd> : null}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="teamphoto" style={{ backgroundImage: `url('${IMG.team}')` }} role="img" aria-label={TEAM.photoAlt} />
      </div>
    </section>
  );
}

export function Insights() {
  return (
    <section className="band" id="insights">
      <div className="wrap">
        <div className="ins-head">
          <div>
            <div className="eyebrow">{INSIGHTS.eyebrow}</div>
            <h2 className="h2">{INSIGHTS.title}</h2>
          </div>
          <a href={INSIGHTS.allHref}>{INSIGHTS.allLabel}</a>
        </div>
        <div className="insights">
          {INSIGHTS.posts.map((p) => (
            <a className="post" href={p.href || '#insights'} key={p.title}>
              <span className="cat">{p.cat}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="meta">
                <span>{p.kind}</span>
                <span>阅读</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="band faq alt" id="faq">
      <div className="wrap grid">
        <div>
          <div className="eyebrow">{FAQ.eyebrow}</div>
          <h2 className="h2">{FAQ.title}</h2>
          <p className="lead">{FAQ.lead}</p>
        </div>
        <div>
          {FAQ.items.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Logos() {
  return (
    <section className="logos" aria-label="媒体与合作机构">
      <div className="wrap">
        {LOGOS.rows.map((row) => (
          <div className="row" key={row.label}>
            <div className="lbl">{row.label}</div>
            <div className="slots">
              {Array.from({ length: row.slots }, (_, i) => (
                <div className="slot" key={i}>
                  {LOGOS.slotText}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta" id="cta">
      <div className="bg" style={{ ['--cta-img' as string]: `url('${IMG.meeting}')` }} />
      <div className="wrap">
        <div>
          <h2>{CTA.title}</h2>
          <p>{CTA.text}</p>
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
