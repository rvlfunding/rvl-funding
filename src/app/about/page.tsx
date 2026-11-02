import Link from 'next/link';
import type { Metadata } from 'next';
import { BOUNDARIES, WHY } from '@/lib/site-content';

export const metadata: Metadata = {
  title: '关于 · About | RVL Funding',
  description: 'RVL Funding 创始人 Ruby Xie：17 年中美跨境经营，洛杉矶。帮中国企业和家庭在美国落地，把财务、身份、保险、合规整理成能获批、能执行的方案。',
};

const TIMELINE = [
  { year: '2003–2009', text: '白俄罗斯留学六年。俄语、英语、中文三语。' },
  { year: '2009–2013', text: '杭州外贸公司。跟单、报价、谈判，跟着老板跑遍客户和工厂。' },
  { year: '2013 起', text: '扬州，先任总经理助理，后以技术入股新设外贸公司，半年开始成交，三年做到经营持平。' },
  { year: '来美至今', text: '洛杉矶。考取加州保险执照，做商业保险经纪；替企业主整理 L-1 全案材料并获批；为在美落地的中国企业做美国这边的运营与合规。' },
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">关于 · About</p>
          <h1>我帮中国企业和家庭在美国落地，把财务、身份、保险、合规整理成能获批、能执行的方案</h1>
          <p className="hero-text">
            RVL Funding 由 Ruby Xie 创立，在洛杉矶。一个人负责到底，不转手。
          </p>
        </div>
      </section>

      <section className="section-intro">
        <div className="container about-layout">
          <div>
            <p className="section-label">我做过什么</p>
            <h2>十七年，中美两边都操过盘</h2>
            <ul className="timeline">
              {TIMELINE.map((t) => (
                <li key={t.year}>
                  <span className="timeline-year">{t.year}</span>
                  <p>{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-label">我怎么工作</p>
            <h2>把别人不愿做的整理做完</h2>
            <p style={{ marginBottom: '1.25rem' }}>
              L-1、EB-1C 这类案子，最后卡住的往往不是法律，是材料：国内的财报、工资记录、组织架构、美国这边的经营证据，没人愿意一张张整理。律师等材料，申请人以为律师会做。我做的就是这一段——把它整理成律师可以直接用的样子，然后盯着每一个截止日。
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              保险也一样。续保、COI、理赔报案、工资审计，每一件都小，加起来每个月几十小时。我替几家关联公司做了七年，零断保。现在把它变成一项按月的服务。
            </p>
            <p>
              我不是律师，不是会计师。我是你在美国这边把事办完的人。
            </p>
          </div>
        </div>
      </section>

      <section className="home-section home-section--mist">
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

      <section className="home-section">
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
            <span className="eyebrow">合作方</span>
            <h2 style={{ marginBottom: '1.25rem' }}>律师、CPA、保险公司各管一段</h2>
            <p style={{ marginBottom: '1rem' }}>
              所有移民申请由独立持牌移民律师递交；税务申报由合作 CPA 负责；保险由持牌保险公司承保。RVL 负责把三方要的材料准备好、把时间表对齐、把每个截止日盯住。
            </p>
            <Link href="/assessment" className="btn-primary">
              预约路径评估
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
