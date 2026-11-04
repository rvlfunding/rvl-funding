import Link from 'next/link';
import { Disclaimer, PageHero } from '../_components/Article';
import { JsonLd } from '../_components/JsonLd';
import { CtaBand } from '../_components/Sections';
import { BOOKING, R } from '../content';
import { breadcrumb, buildMetadata, graph, organization, webPage } from '../seo';

const TITLE = '紧急事项：平台保险要求、员工入职、开户受阻与申报截止';
const DESC = '美国业务临近截止日的紧急事项：亚马逊等平台要求保险证明、首位员工即将入职、银行开户受阻、签证或申报截止日临近。注明截止日期，优先安排诊断。';

export const metadata = buildMetadata({
  path: R.urgent,
  title: TITLE,
  description: DESC,
  keywords: ['美国公司紧急事项', '亚马逊保险证明', '员工即将入职', '申报截止'],
});

const ITEMS = [
  { h: '平台要求提交保险证明（COI）', p: '平台通知通常附有提交期限。请准备产品清单、近期销售数据与公司资料。', href: '/zh/faq/amazon-product-liability-insurance' },
  { h: '首位美国员工即将入职', p: '州雇主登记、工资系统、劳工补偿保险与入职文件需在入职前完成。', href: '/zh/faq/first-us-employee' },
  { h: '银行开户受阻，影响收款与结算', p: '整理被拒原因，补齐股权结构、经营实质与资金来源材料，并评估备选渠道。', href: '/zh/faq/bank-account-rejected' },
  { h: '税务申报或年报截止日临近', p: '逾期会产生罚款与利息。请准备上一年度的经营记录与已收到的税务通知。', href: '/zh/faq/annual-tax-filings' },
  { h: '签证续签或身份申请截止日临近', p: '请准备当前身份文件与批准通知，具体申请策略由移民律师出具。', href: R.status },
];

export default function UrgentPage() {
  const crumbs = [
    { name: '首页', path: R.home },
    { name: '紧急事项', path: R.urgent },
  ];
  return (
    <>
      <JsonLd data={graph(organization(), webPage(R.urgent, TITLE, DESC), breadcrumb(crumbs))} />
      <main id="top">
        <PageHero crumbs={crumbs} eyebrow="Urgent" h1="紧急事项" lead="如事项已临近截止日，请在预约时注明截止日期与收到的通知，我们会据此安排诊断的先后。">
          <div className="ctas">
            <a className="btn btn-gold" href={BOOKING.business}>
              预约企业诊断
            </a>
          </div>
        </PageHero>
        <div className="wrap article single">
          <div className="article-body">
            {ITEMS.map((it) => (
              <section className="blk urgent-item" key={it.h}>
                <h2>{it.h}</h2>
                <p>{it.p}</p>
                <Link className="more-link" href={it.href}>
                  查看应对要点
                </Link>
              </section>
            ))}
            <Disclaimer />
          </div>
        </div>
        <CtaBand />
      </main>
    </>
  );
}
