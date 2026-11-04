import Link from 'next/link';
import { PageHero } from '../_components/Article';
import { JsonLd } from '../_components/JsonLd';
import { CtaBand } from '../_components/Sections';
import { R, SITE_URL } from '../content';
import { STATES } from '../data/states';
import { breadcrumb, buildMetadata, graph, organization, webPage } from '../seo';

const TITLE = '美国各州公司注册与落地指南：费用、年报、销售税与用工';
const DESC = '华人企业家在美国各州落地的对比指南：加州、特拉华、德州、纽约、华盛顿、内华达、怀俄明、佛州等州的注册费用、年报、销售税与用工规定。';

export const metadata = buildMetadata({
  path: R.states,
  title: TITLE,
  description: DESC,
  keywords: ['美国各州注册公司', '美国哪个州注册公司', '各州公司年费', '美国各州销售税', '各州劳工规定'],
});

export default function StatesHub() {
  const crumbs = [
    { name: '首页', path: R.home },
    { name: '各州落地指南', path: R.states },
  ];
  return (
    <>
      <JsonLd
        data={graph(organization(), webPage(R.states, TITLE, DESC), breadcrumb(crumbs), {
          '@type': 'ItemList',
          itemListElement: STATES.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE_URL}/zh/states/${s.slug}`, name: s.h1 })),
        })}
      />
      <main id="top">
        <PageHero
          crumbs={crumbs}
          eyebrow="State guides"
          h1="美国各州落地指南"
          lead="注册州与经营州是两回事。每个州的注册费用、年报、税种与用工规定都不同，选择之前先看清您的业务会在哪些州产生义务。"
        />
        <div className="wrap">
          <div className="state-grid">
            {STATES.map((s) => (
              <Link key={s.slug} href={`/zh/states/${s.slug}`} className="state-card">
                <span className="abbr" lang="en">
                  {s.abbr}
                </span>
                <h2>{s.name}</h2>
                <p>{s.fit}</p>
              </Link>
            ))}
          </div>
          <p className="blk-note hub-note">
            还没确定选哪个州？先看<Link href="/zh/faq/which-state-to-incorporate">美国公司注册在哪个州好</Link>，或直接<Link href="/zh#cta">预约诊断</Link>。
          </p>
        </div>
        <CtaBand />
      </main>
    </>
  );
}
