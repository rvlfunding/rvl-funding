import { notFound } from 'next/navigation';
import { Aside, Blocks, Disclaimer, FaqSection, PageHero } from '../_components/Article';
import { JsonLd } from '../_components/JsonLd';
import { CtaBand } from '../_components/Sections';
import { SelfAssessment } from '../_components/SelfAssessment';
import { R } from '../content';
import { SERVICE_BY_SLUG, SERVICES_DATA } from '../data/services';
import { breadcrumb, buildMetadata, faqPage, graph, organization, service, webPage } from '../seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = SERVICE_BY_SLUG[slug];
  if (!s) return {};
  return buildMetadata({
    path: `/zh/${s.slug}`,
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    image: s.image,
    imageAlt: s.imageAlt,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = SERVICE_BY_SLUG[slug];
  if (!s) notFound();
  const path = `/zh/${s.slug}`;
  const parent =
    s.kind === 'route' ? [{ name: '美国身份规划', path: R.status }] : s.kind === 'local' ? [{ name: '各州落地指南', path: R.states }] : [];
  const crumbs = [{ name: '首页', path: R.home }, ...parent, { name: s.name, path }];
  const ld = graph(
    organization(),
    webPage(path, s.title, s.description),
    service(path, s.h1, s.description, s.serviceType),
    breadcrumb(crumbs),
    ...(s.faqs.length ? [faqPage(s.faqs, path)] : []),
  );

  return (
    <>
      <JsonLd data={ld} />
      <main id="top">
        <PageHero crumbs={crumbs} eyebrow={s.eyebrow} h1={s.h1} lead={s.lead} image={s.image} imageAlt={s.imageAlt} />
        <div className="wrap article">
          <div className="article-body">
            <Blocks blocks={s.blocks} />
            <FaqSection items={s.faqs} />
            <Disclaimer />
          </div>
          <Aside related={s.related} questions={s.questions} />
        </div>
        {s.assess ? <SelfAssessment /> : null}
        <CtaBand />
      </main>
    </>
  );
}
