import Link from 'next/link';
import { FooterSubscribe } from './footer-subscribe';
import { SocialLinks } from './social-links';
import { SITE } from '@/lib/site-content';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-trust-strip">
        <div className="container footer-trust-inner">
          <span>RVL Funding · City of Industry, CA · 服务意向与已落地美国的中国企业</span>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-brand">
          <h4>RVL Funding</h4>
          <p>
            洛杉矶的美企落地运营团队。公司设立、会计税务、薪资人力、风险与保险、移民与身份、法律合规、财富传承，一支专属团队负责。
          </p>
          <p style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
            {SITE.address}
            <br />
            {SITE.email}
          </p>
        </div>
        <div className="footer-nav">
          <h5>服务</h5>
          <ul>
            <li>
              <Link href="/assessment">路径评估</Link>
            </li>
            <li>
              <Link href="/services#retainer">运营陪跑月费</Link>
            </li>
            <li>
              <Link href="/services#program">全程项目管理</Link>
            </li>
            <li>
              <Link href="/services">服务与价格</Link>
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <h5>公司</h5>
          <ul>
            <li>
              <Link href="/about">关于</Link>
            </li>
            <li>
              <Link href="/cases">案例</Link>
            </li>
            <li>
              <Link href="/contact">联系</Link>
            </li>
            <li>
              <Link href="/book">预约 15 分钟电话</Link>
            </li>
            <li>
              <Link href="/resources">资料库 Resources</Link>
            </li>
            <li>
              <Link href="/insights">政策动态 Insights</Link>
            </li>
          </ul>
        </div>
        <div>
          <FooterSubscribe />
          <div className="footer-social-block">
            <span>关注</span>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="footer-divider">
        <div className="footer-bottom">
          © 2026 RVL Funding. 本站内容为一般信息，不构成针对个案的法律、税务或投资意见；任何申请的结果由主管机关决定。 ·{' '}
          <Link href="/privacy">隐私</Link>
        </div>
      </div>
    </footer>
  );
}
