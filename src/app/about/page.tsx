import Link from 'next/link';
import type { Metadata } from 'next';
import { BOUNDARIES, TEAM, WHY } from '@/lib/site-content';

export const metadata: Metadata = {
  title: '关于 RVL Funding｜洛杉矶美企落地运营团队 · 移民律师 · 税法律师 · CPA · 保险 · PEO',
  description:
    'RVL Funding 是洛杉矶的美企落地运营团队：公司设立、会计税务、薪资与 PEO、商业保险、移民与法律七个职能按行业惯例分工，由一位项目统筹对接。中国企业在美国的企业管家。',
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">关于 · About RVL Funding</p>
          <h1>一家替中国企业在美国做运营的公司</h1>
          <p className="hero-text">
            RVL Funding 在洛杉矶。公司设立、会计税务、薪资与人事、商业保险、移民与法律，这些服务市场上都有，但各做各的，中间的衔接最后都落在老板自己身上。我们做的是把它们放进同一张时间表，由一个人对你负责。
          </p>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <p className="section-label">团队</p>
          <h2>按行业惯例分成七个职能</h2>
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
              </article>
            ))}
          </div>
          <p className="team-note">{TEAM.note}</p>
        </div>
      </section>

      <section className="home-section home-section--mist">
        <div className="container about-layout">
          <div>
            <p className="section-label">创始人 · 项目统筹</p>
            <h2>Ruby Xie</h2>
            <p style={{ margin: '1rem 0' }}>
              近二十年中美两地的企业经营者。早年在中国做跨境贸易，从订单执行、报价谈判做起，后来主导一家外贸公司从零做到经营持平；移居美国后在纽约创立 RVL，现以洛杉矶为基地。持加州保险执照，从事商业与家庭保险经纪多年，长期和资金结算、资金来源证明（source of funds）、跨境合规文件打交道。
            </p>
            <p style={{ margin: '1rem 0' }}>
              移民这件事她自己走过一遍，也替企业主做过：从 L-1 全案材料的从零整理到获批——两边的财务报表、工资记录、组织架构、商业计划——到落地后的运营、保险与合规。管过企业、办过身份、持有金融执照，三件事同时在一个人身上，所以能把律师、会计、保险、薪资、人事放进同一张时间表里统筹。
            </p>
            <p style={{ margin: '1rem 0' }}>在 RVL，她是客户唯一的对接人，团队由她调度。</p>
          </div>
          <div>
            <p className="section-label">我们怎么工作</p>
            <h2>材料提前做，截止日提前盯</h2>
            <p style={{ margin: '1rem 0' }}>
              L-1、EB-1C 这类案子卡住，多半不是法律问题，是材料问题：国内的财报、工资记录、组织架构，美国这边的经营证据，没人愿意一张张整理。律师在等材料，申请人以为律师会做。我们接的就是这一段——按月整理成律师能直接用的格式，递交那天不用回头补。
            </p>
            <p style={{ margin: '1rem 0' }}>
              保险、薪资、人事也是同一个道理：续保、COI、理赔报案、工资审计、入职文件，单看都是小事，加起来一个月几十个小时。我们替多家关联公司做了七年，没断过一次保。现在把这套做法变成按月的服务。
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
            <span className="eyebrow">边界</span>
            <h2 style={{ marginBottom: '1.25rem' }}>我们不做什么</h2>
            <ul className="boundary-list">
              {BOUNDARIES.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
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
