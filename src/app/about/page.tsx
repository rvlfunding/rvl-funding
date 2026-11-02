import Link from 'next/link';
import type { Metadata } from 'next';
import { BOUNDARIES, TEAM, WHY } from '@/lib/site-content';

export const metadata: Metadata = {
  title: '关于 RVL Funding｜洛杉矶美企落地运营团队 · 移民律师 · 税法律师 · CPA · 保险 · PEO',
  description:
    'RVL Funding 是洛杉矶的美企落地运营团队：移民律师、税法律师、CPA、薪资与 PEO、商业保险、人力资源七个职能，由金融背景的总协调师统一调度。中国企业在美国的企业管家。',
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">关于 · About RVL Funding</p>
          <h1>中国企业在美国的企业管家：一个团队，七个职能，一个入口</h1>
          <p className="hero-text">
            RVL Funding 在洛杉矶，为意向或已经在美国落地的中国企业提供落地运营服务。移民律师、税法律师、CPA、薪资与 PEO、商业保险、人力资源都在同一个团队里，由总协调师统一调度——你只需要对接一个人。
          </p>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <p className="section-label">团队</p>
          <h2>七个职能，各管一段，一个人统筹</h2>
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
          <p className="team-note">律师与 CPA 为独立持牌专业人士，是 RVL 长期整合的固定合作团队；由 RVL 总协调师统一调度。</p>
        </div>
      </section>

      <section className="home-section home-section--mist">
        <div className="container about-layout">
          <div>
            <p className="section-label">创始人 · 总协调师</p>
            <h2>Ruby Xie</h2>
            <p style={{ margin: '1rem 0' }}>
              十余年中美跨境贸易与企业运营背景：从跟单、报价、谈判，到主导一家外贸公司从零做到经营持平；熟悉资金结算、资金来源（source of funds）与跨境合规文件。持加州保险执照，从事商业保险经纪多年。
            </p>
            <p style={{ margin: '1rem 0' }}>
              在美国落地业务中，她亲手整理过获批的 L-1 全案材料——中美两边的财务报表、工资记录、组织架构、商业计划，把律师和申请人都不愿做的整理做完。这段经历决定了 RVL 的工作方式：看得懂账，也看得懂移民局想看什么，然后把每一方要的东西备齐、时间表对齐、截止日盯住。
            </p>
            <p style={{ margin: '1rem 0' }}>她在 RVL 的角色是总协调师：客户只对接她，她调度整个团队。</p>
          </div>
          <div>
            <p className="section-label">我们怎么工作</p>
            <h2>把别人不愿做的整理做完，把每个截止日盯住</h2>
            <p style={{ margin: '1rem 0' }}>
              L-1、EB-1C 这类案子，最后卡住的往往不是法律，是材料：国内的财报、工资记录、组织架构、美国这边的经营证据，没人愿意一张张整理。律师等材料，申请人以为律师会做。我们做的就是这一段——整理成律师可以直接用的样子，然后盯着每一个截止日。
            </p>
            <p style={{ margin: '1rem 0' }}>
              保险、薪资、人力资源也一样：续保、COI、理赔报案、工资审计、入职文件，每一件都小，加起来每个月几十小时。我们替多家关联公司做了七年，零断保。现在把它变成一项按月的服务。
            </p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">为什么是 RVL</span>
            <h2>五个事实</h2>
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
            <h2 style={{ marginBottom: '1.25rem' }}>先拿一份可以交给律师的落地方案</h2>
            <p style={{ marginBottom: '1.5rem' }}>路径评估 $300 起，面谈后 5 个工作日交付，60 天内签约全额抵扣。</p>
            <Link href="/assessment" className="btn-primary">
              预约路径评估
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
