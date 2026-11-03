import Link from 'next/link';
import type { Metadata } from 'next';
import { TEAM, WHY } from '@/lib/site-content';

export const metadata: Metadata = {
  title: '企业出海美国第一站｜RVL Funding · 洛杉矶美企落地运营团队',
  description:
    'RVL Funding 为落地美国的中国企业组建专属团队：公司设立、会计税务、薪资人力、商业保险、移民身份、法律合规、财富传承八个职能，一张时间表，对您和您的公司负责。',
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">关于 · About RVL Funding</p>
          <h1>企业出海美国第一站</h1>
          <p className="hero-text">
            当一家企业第一次把业务落到美国，面对的是一整套陌生的合规体系：公司设立、银行开户、薪资与工资税、商业保险、州与联邦申报、员工与高管的身份。每一项市场上都有人做，但没有人替你把它们放在同一张表上。
          </p>
          <p className="hero-text">
            RVL 的做法是：为每家客户组建一支由八个专业职能组成的专属团队，对您和您的公司负责。您对接的是一支团队，不是一串电话号码。
          </p>
        </div>
      </section>

      <section className="section-intro" id="team">
        <div className="container">
          <p className="section-label">团队</p>
          <h2>八个职能，一张时间表</h2>
          <p style={{ maxWidth: '44rem', margin: '1rem 0 2rem' }}>{TEAM.intro}</p>
          <div className="team-stats">
            {TEAM.stats.map((s) => (
              <div className="team-stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="function-grid">
            {TEAM.functions.map((f) => (
              <article className="function-card" key={f.role}>
                <h3>{f.role}</h3>
                <p>{f.text}</p>
                <Link href={`/team/${f.slug}`} className="fn-link">
                  看这个职能做什么 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--mist">
        <div className="container about-layout">
          <div>
            <p className="section-label">我们怎么工作</p>
            <h2>三件固定交付，一张时间表</h2>
            <p style={{ margin: '1rem 0' }}>
              <strong>每月一份经营记录包。</strong>流水、工资单、发票、合同、租约，按移民局、银行和税局要看的格式归档。延期、EB-1C、贷款、审计，拿出来就能用。
            </p>
            <p style={{ margin: '1rem 0' }}>
              <strong>每件事提前 30 天进日历。</strong>年审、续保、申报、执照、延期，到期前有人提醒、有人办、办完有回执。
            </p>
            <p style={{ margin: '1rem 0' }}>
              <strong>每季度一次检视。</strong>八个职能同桌，把下一季要做的事、要花的钱、要做的决定列给您，您只做决定。
            </p>
          </div>
          <div>
            <p className="section-label">我们能做的</p>
            <h2>从第一张执照到绿卡落地</h2>
            <p style={{ margin: '1rem 0' }}>
              公司设立与年度合规，记账报税与涉外申报，发薪与员工福利，商业保险与理赔，L-1A / EB-1C / EB-5 的路径与递交，合同、租约与股权文件，信托与家庭传承。这些全部在团队内完成，由项目统筹排进同一张表。
            </p>
            <p style={{ margin: '1rem 0' }}>
              多家关联公司的保险、审计与理赔，我们已经连续管了七年；L-1 全案从零整理到获批，我们做过。每一项都有人做过，而且是同一支团队。
            </p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">我们怎么做</span>
            <h2>五件说到做到的事</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <article className="why-card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--mist">
        <div className="container about-layout">
          <div>
            <p className="section-label">创始人 · 项目统筹</p>
            <h2>Ruby Xie</h2>
            <p style={{ margin: '1rem 0' }}>
              Ruby 负责 RVL 的整体运营与每个客户项目的统筹，带领由公司秘书、会计税务、薪资人力、商业保险、移民身份、法律合规与财富传承组成的专业团队，为落地美国的中国企业提供美国侧的运营管理。
            </p>
            <p style={{ margin: '1rem 0' }}>
              加入美国市场之前，她在中国从事中美跨境贸易逾十年，主导一家外贸公司从设立到经营持平，负责客户开发、报价谈判、订单执行与跨境资金结算。移居美国后，她在纽约创立 RVL，此后以洛杉矶为基地，为南加州的制造、进出口与仓储企业管理商业保险、工资审计与理赔，并为多家关联公司统一对接保险公司、审计机构与监管检查。
            </p>
            <p style={{ margin: '1rem 0' }}>
              她持有金融领域执业资质，专长为跨境企业的资金来源证明（source of funds）、经营记录与合规文件体系，以及 L-1 / EB-1C 项目从设立到递交的运营支持。她本人走过完整的美国移民流程，也替企业主做过同样的事。
            </p>
            <p style={{ margin: '1rem 0' }}>常驻洛杉矶，中英双语。</p>
          </div>
          <div>
            <span className="eyebrow">第一步</span>
            <h2 style={{ marginBottom: '1.25rem' }}>从一份书面方案开始</h2>
            <p style={{ marginBottom: '1.5rem' }}>路径评估 $300 起，面谈后 5 个工作日交付；60 天内签约，评估费全额抵扣。</p>
            <Link href="/assessment" className="btn-primary">
              预约路径评估
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
