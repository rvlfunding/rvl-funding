import type { Metadata } from 'next';
import { Disclaimer, PageHero } from '../_components/Article';
import { BOOKING, EMAIL, R } from '../content';
import { OFFERS, OFFER_ORDER, formatUsd, paymentsConfigured } from '@/lib/payments';

const TITLE = '在线付款';
const DESC = 'RVL 服务费在线付款：路径评估、美国落地诊断与月度陪跑；全程项目管理按里程碑开具发票。';

/** 收款页上线前不进入搜索索引。 */
export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: R.pay },
  robots: { index: false, follow: false },
};

const STATUS: Record<string, string> = {
  unconfigured: '在线付款尚未开通。请先发邮件预约，我们会发送付款链接或发票。',
  cancelled: '付款已取消，未产生任何扣款。',
  error: '付款页暂时无法打开，请稍后再试，或发邮件联系我们。',
  invalid: '未找到对应的服务项目。',
};

const MILESTONES = [
  { h: '签约', p: '首期款，启动项目与团队排期' },
  { h: '里程碑一', p: '商业计划与实体、银行、用工安排就绪' },
  { h: '里程碑二', p: '申请或延期所需经营资料整理完毕，交律师审阅' },
  { h: '结项', p: '交付清单逐项确认' },
];

export default async function PayPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;
  const live = paymentsConfigured();
  const crumbs = [
    { name: '首页', path: R.home },
    { name: '在线付款', path: R.pay },
  ];
  return (
    <main id="top">
      <PageHero
        crumbs={crumbs}
        eyebrow="Payments"
        h1="在线付款"
        lead="付款页由 Stripe 提供，支持银行卡、Link、美国银行账户转账（ACH），以及在开通后的支付宝。本页只收取 RVL 的服务费。"
      />
      <section className="band pricing" aria-labelledby="pay-online">
        <div className="wrap">
          {status && STATUS[status] ? (
            <p className="pay-status" role="status">
              {STATUS[status]}
            </p>
          ) : null}
          {!live ? (
            <p className="pay-status" role="note">
              预览版：Stripe 账户尚未开通，点击按钮会回到本页并提示。
            </p>
          ) : null}
          <h2 className="h2" id="pay-online">
            在线支付
          </h2>
          <div className="plans">
            {OFFER_ORDER.map((id) => {
              const o = OFFERS[id];
              const featured = id === 'monthly';
              return (
                <form
                  className={featured ? 'plan feature' : 'plan'}
                  id={o.id}
                  key={o.id}
                  action="/api/checkout"
                  method="post"
                >
                  <input type="hidden" name="offer" value={o.id} />
                  <input type="hidden" name="lang" value="zh" />
                  <div className="type">{o.mode === 'subscription' ? '按月' : '按次'}</div>
                  <h3>{o.nameZh}</h3>
                  <div className="price">
                    {formatUsd(o.amount)}
                    <small>{o.mode === 'subscription' ? '美元 / 月起' : '美元'}</small>
                  </div>
                  {!o.confirmed ? <div className="note">价格待确认</div> : null}
                  <ul>
                    <li>{o.descZh}</li>
                  </ul>
                  <button className={featured ? 'btn btn-gold' : 'btn btn-navy'} type="submit">
                    {o.mode === 'subscription' ? '开始月度陪跑' : `支付${o.nameZh}费用`}
                  </button>
                </form>
              );
            })}
          </div>
          <p className="fees">
            月度陪跑建议首期 90 日按季度预付；具体以服务协议为准。付款前如需确认范围，可先
            <a href={BOOKING.monthly}>发邮件咨询</a>。
          </p>
        </div>
      </section>
      <div className="wrap article single">
        <div className="article-body">
          <section className="blk" id="project">
            <h2>全程项目管理：按里程碑开具发票</h2>
            <p>全程项目管理不在线刷卡。签约后按里程碑开具发票，通过美国银行账户转账（ACH）或电汇支付。各期比例与交付标准写入服务协议（待确认）。</p>
            <ol>
              {MILESTONES.map((m) => (
                <li key={m.h}>
                  <b>{m.h}</b>：{m.p}
                </li>
              ))}
            </ol>
            <p>收费不以任何签证或移民申请的批准结果为条件；申请策略与法律意见由合作移民律师出具。</p>
          </section>
          <section className="blk" id="from-china">
            <h2>从中国付款</h2>
            <ul>
              <li>评估与诊断等小额费用：开通后可在付款页选择支付宝，以人民币显示金额。</li>
              <li>大额费用：建议由您在境外的账户电汇，或由国内企业凭服务合同与发票，按服务贸易对外付款办理。单笔超过等值 5 万美元的对外支付，境内一般需先办理税务备案，具体由您的银行与税务顾问确认。</li>
              <li>个人购汇须如实申报用途；国家外汇管理局规定，个人购汇不得用于购买境外人寿保险等尚未开放的资本项目。</li>
            </ul>
          </section>
          <section className="blk" id="principles">
            <h2>付款原则</h2>
            <ul>
              <li>不经手资金：本页只收 RVL 服务费。保险保费直接付给保险公司，律师费直接付给律师事务所，投资款与员工薪酬不经过 RVL。</li>
              <li>抵扣：路径评估与落地诊断费用，可在 30 日内抵扣后续服务费。</li>
              <li>退款：会议开始 24 小时前取消可全额退款；之后按已完成部分结算（待确认）。</li>
              <li>收据：付款成功后，Stripe 会将收据发送至您填写的邮箱。</li>
            </ul>
            <p>
              如有疑问，请写信至 <a href={`mailto:${EMAIL}`}>{EMAIL}</a>。
            </p>
          </section>
          <Disclaimer />
        </div>
      </div>
    </main>
  );
}
