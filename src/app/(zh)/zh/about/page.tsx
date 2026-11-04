import Link from 'next/link';
import { Disclaimer, PageHero } from '../_components/Article';
import { JsonLd } from '../_components/JsonLd';
import { CtaBand, Principles, Roles } from '../_components/Sections';
import { ALT, IMG, NETWORK, R, TEAM } from '../content';
import { breadcrumb, buildMetadata, graph, organization, webPage } from '../seo';

const TITLE = '关于 RVL：洛杉矶的华人企业家美国统筹团队';
const DESC = 'RVL 团队位于洛杉矶南加州，为华人企业家统筹美国落地与家庭规划；法律、税务与投资意见由持牌专业人士出具，我们负责统筹与执行跟进。';

export const metadata = buildMetadata({
  path: R.about,
  title: TITLE,
  description: DESC,
  keywords: ['RVL Funding', '关于 RVL', '洛杉矶华人顾问', '美国落地统筹团队'],
  image: IMG.team,
  imageAlt: ALT.team,
  en: '/about',
});

export default function AboutPage() {
  const crumbs = [
    { name: '首页', path: R.home },
    { name: '关于我们', path: R.about },
  ];
  return (
    <>
      <JsonLd data={graph(organization(), { ...webPage(R.about, TITLE, DESC), '@type': 'AboutPage' }, breadcrumb(crumbs))} />
      <main id="top">
        <PageHero crumbs={crumbs} eyebrow="About" h1="关于我们" lead={TEAM.lead} image={IMG.team} imageAlt={ALT.team} />
        <div className="wrap article single">
          <div className="article-body">
            <section className="blk" aria-labelledby="who-h">
              <h2 id="who-h">我们做什么</h2>
              <p>RVL 为跨国企业家统筹美国落地事务：公司设立、银行开户、人力资源、商业法咨询、工作签证和移民、资产与税务协调。我们把分散的专业服务纳入同一时间表与同一份行动清单，确保每一关键节点有人负责、按期完成。</p>
              <p>团队位于洛杉矶南加州，服务全球华语企业家与家庭；以视频会议为主，南加州客户可预约面谈。</p>
            </section>
            <section className="blk" aria-labelledby="local-h">
              <h2 id="local-h">为什么是美国本地团队</h2>
              <p>注册、开户、雇主登记、申报与签署，这些事情都发生在美国。我们与美国的律师、注册会计师、持牌顾问和服务商在同一时区协作，需要到场的事项可以在当地跟进，而不是隔着时差转述。</p>
            </section>
            <section className="blk" aria-labelledby="net-h">
              <h2 id="net-h">{NETWORK.title}</h2>
              <p>{NETWORK.lead}</p>
              <Roles />
            </section>
            <section className="blk">
              <Principles level={2} />
            </section>
            <p className="blk-note">
              了解<Link href={R.ops}>项目统筹的工作方式</Link>与<Link href={`${R.home}#pricing`}>收费标准</Link>。
            </p>
            <Disclaimer />
          </div>
        </div>
        <CtaBand />
      </main>
    </>
  );
}
