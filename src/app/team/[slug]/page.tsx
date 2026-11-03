import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TEAM_FUNCTIONS, getTeamFunction } from '@/lib/team-content';
import { PRODUCTS, SITE } from '@/lib/site-content';

type Params = { slug: string };

export function generateStaticParams() {
  return TEAM_FUNCTIONS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getTeamFunction(slug);
  if (!f) return {};
  return {
    title: `${f.role} · ${f.roleEn}｜${SITE.name}`,
    description: `${f.short} ${f.summary.slice(0, 80)}`,
  };
}

export default async function TeamFunctionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const f = getTeamFunction(slug);
  if (!f) notFound();
  const idx = TEAM_FUNCTIONS.findIndex((x) => x.slug === slug);
  const prev = TEAM_FUNCTIONS[(idx + TEAM_FUNCTIONS.length - 1) % TEAM_FUNCTIONS.length];
  const next = TEAM_FUNCTIONS[(idx + 1) % TEAM_FUNCTIONS.length];
  const related = PRODUCTS.filter((p) => f.related.includes(p.slug));

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <Link href="/about#team">团队</Link> · 职能 {String(idx + 1).padStart(2, '0')} / {String(TEAM_FUNCTIONS.length).padStart(2, '0')}
          </p>
          <h1>{f.role}</h1>
          <p className="hero-text">
            <span className="fn-en">{f.roleEn}</span>
            {f.summary}
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="container fn-layout">
          <div>
            <span className="eyebrow">工作职责</span>
            <h2>这个职能替你做的事</h2>
            <ul className="check-list fn-duties">
              {f.duties.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <aside className="fn-side">
            <div className="fn-card">
              <h3>交付物</h3>
              <ul className="dot-list">
                {f.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="fn-card">
              <h3>节奏</h3>
              {f.cadence.map((c) => (
                <p key={c.label}>
                  <strong>{c.label}</strong>
                  <br />
                  {c.items.join(' · ')}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="home-section home-section--mist">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">常见场景</span>
            <h2>通常在这些时候找到我们</h2>
          </div>
          <div className="why-grid">
            {f.scenarios.map((s) => (
              <article className="why-card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container about-layout">
          <div>
            <span className="eyebrow">包含在</span>
            <h2 style={{ marginBottom: '1rem' }}>对应的服务</h2>
            <ul className="dot-list">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link href={`/services#${p.slug}`}>
                    {p.name} · {p.price}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">第一步</span>
            <h2 style={{ marginBottom: '1.25rem' }}>先做一次路径评估</h2>
            <p style={{ marginBottom: '1.5rem' }}>一次面谈，5 个工作日拿到书面方案；60 天内签约，评估费全额抵扣。</p>
            <Link href="/assessment" className="btn-primary">
              预约路径评估
            </Link>
          </div>
        </div>
      </section>

      <nav className="container fn-nav" aria-label="其他职能">
        <Link href={`/team/${prev.slug}`}>← {prev.role}</Link>
        <Link href="/about#team">全部八个职能</Link>
        <Link href={`/team/${next.slug}`}>{next.role} →</Link>
      </nav>
    </main>
  );
}
