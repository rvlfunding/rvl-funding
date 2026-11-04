import type { Metadata } from 'next';
import Link from 'next/link';

export const SITE = 'https://www.rvlfunding.com';
export const EMAIL = 'info@rvlfunding.com';
export const ORG_ID = `${SITE}/#organization`;

/** English pages that have a Chinese equivalent. Only true equivalents are paired for hreflang. */
const ZH_PAIR: Record<string, string> = { '/': '/zh', '/about': '/zh/about', '/privacy': '/zh/privacy' };

export function enMetadata({
  path,
  title,
  description,
  absoluteTitle,
  noindex,
}: {
  path: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
}): Metadata {
  const zh = ZH_PAIR[path];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      ...(zh ? { languages: { en: path, 'zh-Hans': zh, 'x-default': path } } : {}),
    },
    openGraph: { title, description, url: path, type: 'website', siteName: 'RVL Funding', locale: 'en_US' },
    twitter: { card: 'summary_large_image', title, description },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function JsonLd({ data }: { data: unknown }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE}${it.path}` })),
  };
}

export function webPage(path: string, name: string, description: string, type = 'WebPage') {
  return {
    '@type': type,
    '@id': `${SITE}${path}#webpage`,
    url: `${SITE}${path}`,
    name,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': ORG_ID },
  };
}

export type QA = { q: string; a: string };

export function faqPage(items: QA[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export const graph = (...nodes: unknown[]) => ({ '@context': 'https://schema.org', '@graph': nodes });

export function Crumbs({ items }: { items: Array<{ name: string; path: string }> }) {
  return (
    <nav className="en-crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((c, i) => (
          <li key={c.path}>{i < items.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  crumbs?: Array<{ name: string; path: string }>;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs ? <Crumbs items={crumbs} /> : null}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
        {children ? <div className="hero-actions">{children}</div> : null}
      </div>
    </section>
  );
}

export function Section({
  id,
  label,
  title,
  lead,
  tone = 'light',
  children,
}: {
  id?: string;
  label?: string;
  title: string;
  lead?: string;
  tone?: 'light' | 'mist' | 'dark';
  children?: React.ReactNode;
}) {
  const cls = tone === 'dark' ? 'section-dark' : tone === 'mist' ? 'section-intro en-mist' : 'section-intro';
  return (
    <section className={cls} id={id} aria-labelledby={id ? `${id}-h` : undefined}>
      <div className="container">
        {label ? <p className="section-label">{label}</p> : null}
        <h2 id={id ? `${id}-h` : undefined}>{title}</h2>
        {lead ? <p className="en-lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}

export type Card = { title: string; text: string; points?: string[]; href?: string; more?: string };

export function Cards({ items }: { items: Card[] }) {
  return (
    <div className="service-grid">
      {items.map((c) => (
        <article className="service-card" key={c.title}>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
          {c.points ? (
            <ul className="en-points">
              {c.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          ) : null}
          {c.href ? (
            <Link className="en-more" href={c.href}>
              {c.more ?? 'Learn more'} →
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function Steps({ items }: { items: Array<{ title: string; when: string; text: string }> }) {
  return (
    <ol className="en-steps">
      {items.map((s, i) => (
        <li key={s.title}>
          <span className="en-step-n">{String(i + 1).padStart(2, '0')}</span>
          <h3>{s.title}</h3>
          <p className="en-step-when">{s.when}</p>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ items }: { items: QA[] }) {
  return (
    <div className="en-faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            <h3>{f.q}</h3>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="cta-band" aria-labelledby="cta-h">
      <div className="container">
        <div className="cta-inner">
          <span className="eyebrow">Next step</span>
          <h2 id="cta-h">{title}</h2>
          <p>{text}</p>
          <div className="en-cta-actions">
            <Link href="/book" className="btn-primary">
              Book a free 15-minute call
            </Link>
            <a href={`mailto:${EMAIL}`} className="btn-navy">
              Email {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Disclaimer() {
  return (
    <p className="en-disclaimer">
      General information only, not legal, tax, investment or insurance advice. Legal opinions are given by licensed attorneys,
      and tax filings are prepared by CPAs, each under their own engagement with you.
    </p>
  );
}
