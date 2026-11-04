import Link from 'next/link';
import { FooterSubscribe } from './footer-subscribe';
import { SocialLinks } from './social-links';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-trust-strip">
        <div className="container footer-trust-inner">
          <span>U.S. company setup, operations and status planning · City of Industry, California · English and Mandarin</span>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-brand">
          <p className="footer-brand-name">RVL Funding</p>
          <p>
            A U.S.-based team for Chinese-owned companies and families: company formation, banking, tax
            compliance, payroll, and immigration and tax planning coordinated with licensed professionals.
          </p>
        </div>
        <div className="footer-nav">
          <h2 className="footer-h">Services</h2>
          <ul>
            <li>
              <Link href="/services#formation">Company formation</Link>
            </li>
            <li>
              <Link href="/services#banking">Business banking</Link>
            </li>
            <li>
              <Link href="/services#tax">Tax and compliance</Link>
            </li>
            <li>
              <Link href="/services#hr">HR and payroll</Link>
            </li>
            <li>
              <Link href="/services#immigration">Status planning</Link>
            </li>
            <li>
              <Link href="/services#planning">Cross-border planning</Link>
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <h2 className="footer-h">Firm</h2>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/insights">Insights</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li className="footer-ref-highlight">
              <Link href="/ref">For professionals</Link>
            </li>
            <li>
              <Link href="/zh" hrefLang="zh-Hans" lang="zh-Hans">
                中文网站
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <FooterSubscribe />
          <div className="footer-social-block">
            <span>Follow</span>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="footer-divider">
        <div className="footer-bottom">
          © 2026 RVL Funding. All rights reserved. General information only, not legal, tax or investment advice.{' '}
          <Link href="/privacy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
