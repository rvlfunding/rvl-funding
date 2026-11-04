import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Aside, Blocks, Disclaimer, FaqSection, PageHero, SourceList } from '../../_components/Article';
import { JsonLd } from '../../_components/JsonLd';
import { CtaBand } from '../../_components/Sections';
import { R, SITE_URL } from '../../content';
import { QUESTION_BY_SLUG, QUESTION_CATEGORIES, QUESTIONS } from '../../data/questions';
import { breadcrumb, buildMetadata, faqPage, graph, ORG_ID, organization } from '../../seo';

export const dynamicParams = false;
/** 内容最后审核日期，更新文案时一并修改。 */
const REVIEWED = '2026-11-04';

export function generateStaticParams() {
  return QUESTIONS.map((q) => ({ slug: q.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const q = QUESTION_BY_SLUG[slug];
  if (!q) return {};
  return buildMetadata({ path: `/zh/faq/${q.slug}`, title: q.title, description: q.description, keywords: q.keywords });
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;
  const q = QUESTION_BY_SLUG[slug];
  if (!q) notFound();
  const path = `/zh/faq/${q.slug}`;
  const crumbs = [
    { name: '首页', path: R.home },
    { name: '常见问题', path: R.faq },
    { name: QUESTION_CATEGORIES[q.category], path: `${R.faq}#${q.category}` },
  ];
  const ld = graph(
    organization(),
    {
      '@type': 'Article',
      '@id': `${SITE_URL}${path}#article`,
      headline: q.q,
      description: q.description,
      inLanguage: 'zh-Hans',
      datePublished: REVIEWED,
      dateModified: REVIEWED,
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: `${SITE_URL}${path}`,
      about: q.keywords.slice(0, 3),
    },
    faqPage([{ q: q.q, a: q.answer }, ...(q.faqs ?? [])], path),
    breadcrumb([...crumbs.slice(0, 2), { name: q.q, path }]),
  );

  return (
    <>
      <JsonLd data={ld} />
      <main id="top">
        <PageHero crumbs={[...crumbs.slice(0, 2), { name: q.q, path }]} eyebrow={QUESTION_CATEGORIES[q.category]} h1={q.q} lead={q.description}>
          {q.en ? (
            <p className="en-sub" lang="en">
              {q.en}
            </p>
          ) : null}
        </PageHero>
        <div className="wrap article">
          <article className="article-body">
            <section className="answer" aria-labelledby="answer-h">
              <h2 id="answer-h">简要回答</h2>
              <p>{q.answer}</p>
            </section>
            <Blocks blocks={q.blocks} />
            <FaqSection items={q.faqs ?? []} title="延伸问题" id="more" />
            {q.sources ? <SourceList sources={q.sources} /> : null}
            <p className="reviewed">
              内容审核：<time dateTime={REVIEWED}>2026 年 11 月 4 日</time> · <Link href={R.faq}>返回全部问题</Link>
            </p>
            <Disclaimer />
          </article>
          <Aside related={q.related} questions={q.questions} />
        </div>
        <CtaBand />
      </main>
    </>
  );
}
