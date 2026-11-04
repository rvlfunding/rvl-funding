import { notFound } from 'next/navigation';
import { Aside, Blocks, Disclaimer, FaqSection, PageHero, SourceList } from '../../_components/Article';
import { JsonLd } from '../../_components/JsonLd';
import { CtaBand } from '../../_components/Sections';
import { R, SITE_URL } from '../../content';
import { STATE_BY_SLUG, STATES } from '../../data/states';
import { breadcrumb, buildMetadata, faqPage, graph, ORG_ID, organization, webPage } from '../../seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return STATES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = STATE_BY_SLUG[slug];
  if (!s) return {};
  return buildMetadata({ path: `/zh/states/${s.slug}`, title: s.title, description: s.description, keywords: s.keywords });
}

export default async function StatePage({ params }: Props) {
  const { slug } = await params;
  const s = STATE_BY_SLUG[slug];
  if (!s) notFound();
  const path = `/zh/states/${s.slug}`;
  const crumbs = [
    { name: '首页', path: R.home },
    { name: '各州落地指南', path: R.states },
    { name: s.name, path },
  ];
  const ld = graph(
    organization(),
    webPage(path, s.title, s.description),
    {
      '@type': 'Service',
      '@id': `${SITE_URL}${path}#service`,
      name: `${s.name}公司设立与落地统筹`,
      serviceType: 'Business setup consulting',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'State', name: s.en, containedInPlace: { '@type': 'Country', name: 'United States' } },
      availableLanguage: ['zh-Hans', 'en'],
    },
    breadcrumb(crumbs),
    ...(s.faqs.length ? [faqPage(s.faqs, path)] : []),
  );

  return (
    <>
      <JsonLd data={ld} />
      <main id="top">
        <PageHero crumbs={crumbs} eyebrow={`${s.en} · ${s.abbr}`} h1={s.h1} lead={s.lead} />
        <div className="wrap article">
          <article className="article-body">
            <section className="answer" aria-labelledby="fit-h">
              <h2 id="fit-h">适合在{s.name}落地的情形</h2>
              <p>{s.fit}</p>
            </section>
            <section className="blk" aria-labelledby="facts-h">
              <h2 id="facts-h">{s.name}关键数据一览</h2>
              <div className="tbl-wrap">
                <table className="tbl facts">
                  <tbody>
                    {s.facts.map((f) => (
                      <tr key={f.k}>
                        <th scope="row">{f.k}</th>
                        <td>
                          {f.v}
                          {f.src ? <sup className="src">[{f.src}]</sup> : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="blk-note">资料核对日期：{s.checked}。各项费用与税率可能调整，以{s.name}政府最新公布为准；方括号数字对应页末资料来源。</p>
            </section>
            <Blocks blocks={s.blocks} />
            <FaqSection items={s.faqs} />
            <SourceList sources={s.sources} />
            <Disclaimer />
          </article>
          <Aside related={s.related} questions={s.questions} />
        </div>
        <CtaBand />
      </main>
    </>
  );
}
