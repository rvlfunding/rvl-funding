import Link from 'next/link';
import { PageHero } from '../_components/Article';
import { JsonLd } from '../_components/JsonLd';
import { CtaBand, FaqList } from '../_components/Sections';
import { FAQS, R } from '../content';
import { QUESTION_CATEGORIES, QUESTIONS } from '../data/questions';
import { breadcrumb, buildMetadata, faqPage, graph, organization, webPage } from '../seo';

const TITLE = '常见问题：美国公司注册、开户、报税、用工与 EB-1C 移民';
const DESC = '华人企业家在美国落地的常见问题解答：如何注册美国公司、开立银行账户、每年报哪些税、雇佣首位员工，以及 EB-1C、L-1A 等身份路径。';

export const metadata = buildMetadata({
  path: R.faq,
  title: TITLE,
  description: DESC,
  keywords: ['美国公司常见问题', '美国落地问题', 'EB-1C 常见问题', '美国公司注册问题', '美国报税问题'],
});

const cats = Object.keys(QUESTION_CATEGORIES) as Array<keyof typeof QUESTION_CATEGORIES>;

export default function FaqHub() {
  const crumbs = [
    { name: '首页', path: R.home },
    { name: '常见问题', path: R.faq },
  ];
  const quick = [...FAQS.general.items];
  return (
    <>
      <JsonLd data={graph(organization(), webPage(R.faq, TITLE, DESC), breadcrumb(crumbs), faqPage(quick, R.faq))} />
      <main id="top">
        <PageHero
          crumbs={crumbs}
          eyebrow="FAQ"
          h1="常见问题解答"
          lead="按主题整理的问题解答，每个问题都有独立页面，包括简要回答、具体步骤与资料来源。如事项已临近截止日，请直接预约诊断。"
        />
        <div className="wrap faq-hub">
          <nav className="cat-nav" aria-label="问题分类">
            {cats.map((c) => (
              <a key={c} href={`#${c}`}>
                {QUESTION_CATEGORIES[c]}
              </a>
            ))}
          </nav>
          {cats.map((c) => (
            <section className="blk" id={c} key={c} aria-labelledby={`${c}-h`}>
              <h2 id={`${c}-h`}>{QUESTION_CATEGORIES[c]}</h2>
              <ul className="q-list">
                {QUESTIONS.filter((q) => q.category === c).map((q) => (
                  <li key={q.slug}>
                    <Link href={`/zh/faq/${q.slug}`}>
                      <span>{q.q}</span>
                      {q.en ? (
                        <small lang="en">{q.en}</small>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="blk" id="service" aria-labelledby="service-h">
            <h2 id="service-h">{FAQS.general.title}</h2>
            <FaqList items={quick} openFirst={false} />
          </section>
        </div>
        <CtaBand />
      </main>
    </>
  );
}
