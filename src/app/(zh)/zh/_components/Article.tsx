import Link from 'next/link';
import type { FaqItem } from '../content';
import { pageName } from '../data/registry';
import type { Block, Source } from '../types';
import { FaqList } from './Sections';

export type Crumb = { name: string; path: string };

export function PageHero({
  crumbs,
  eyebrow,
  h1,
  lead,
  image,
  imageAlt,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  lead: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero">
      {image ? <div className="bg" style={{ ['--hero-img' as string]: `url('${image}')` }} role="img" aria-label={imageAlt} /> : null}
      <div className="wrap">
        <nav className="crumbs" aria-label="面包屑导航">
          <ol>
            {crumbs.map((c, i) => (
              <li key={c.path}>
                {i < crumbs.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{h1}</h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b) => (
        <section className="blk" key={b.h} id={b.id} aria-labelledby={b.id ? `${b.id}-h` : undefined}>
          <h2 id={b.id ? `${b.id}-h` : undefined}>{b.h}</h2>
          {b.p?.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
          {b.points ? (
            <ul className="pts">
              {b.points.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : null}
          {b.table ? (
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    {b.table.head.map((h) => (
                      <th key={h} scope="col">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.table.rows.map((r) => (
                    <tr key={r.join('|')}>
                      {r.map((c, i) =>
                        i === 0 ? (
                          <th key={i} scope="row">
                            {c}
                          </th>
                        ) : (
                          <td key={i}>{c}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {b.note ? <p className="blk-note">{b.note}</p> : null}
        </section>
      ))}
    </>
  );
}

export function FaqSection({ items, id = 'faq', title = '常见问题' }: { items: FaqItem[]; id?: string; title?: string }) {
  if (!items.length) return null;
  return (
    <section className="blk" id={id} aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{title}</h2>
      <FaqList items={items} openFirst={false} />
    </section>
  );
}

export function SourceList({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <section className="blk sources" aria-labelledby="sources-h">
      <h2 id="sources-h">资料来源</h2>
      <ol>
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" lang="en">
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** 侧栏：相关服务与相关问题，构成站内链接网。 */
export function Aside({ related, questions }: { related: string[]; questions: string[] }) {
  return (
    <aside className="side" aria-label="相关内容">
      {questions.length ? (
        <nav aria-labelledby="side-q">
          <h2 className="side-h" id="side-q">
            相关问题
          </h2>
          <ul>
            {questions.map((slug) => (
              <li key={slug}>
                <Link href={`/zh/faq/${slug}`}>{pageName(`/zh/faq/${slug}`)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      {related.length ? (
        <nav aria-labelledby="side-r">
          <h2 className="side-h" id="side-r">
            相关服务与指南
          </h2>
          <ul>
            {related.map((p) => (
              <li key={p}>
                <Link href={p}>{pageName(p)}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <div className="side-cta">
        <p>需要按您的情况排定时间表？</p>
        <Link className="btn btn-gold" href="/zh#cta">
          预约诊断
        </Link>
      </div>
    </aside>
  );
}

export function Disclaimer() {
  return <p className="disclaimer">本页内容仅供一般信息参考，不构成法律、税务、投资或保险建议；具体事项以持牌专业人士的书面意见及政府最新公布为准。</p>;
}
