import Link from 'next/link';
import { FooterSubscribe } from './footer-subscribe';
import { SocialLinks } from './social-links';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-trust-strip">
        <div className="container footer-trust-inner">
          <span>Independent advisory · Est. 2010 · 15+ years institutional discipline</span>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-brand">
          <h4>RVL Funding</h4>
          <p>
            Private advisory for global families and founders—U.S. employment-based immigration, allocation,
            tax compliance, and trust architecture.
          </p>
        </div>
        <div className="footer-nav">
          <h5>Services</h5>
          <ul>
            <li>
              <Link href="/services">Immigration &amp; status</Link>
            </li>
            <li>
              <Link href="/services">Cross-border allocation</Link>
            </li>
            <li>
              <Link href="/services">Tax &amp; compliance</Link>
            </li>
            <li>
              <Link href="/services">Trusts &amp; offshore</Link>
            </li>
          </ul>
        </div>
        <div className="footer-nav">
          <h5>Firm</h5>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/cases">Cases</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/insights">Insights</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li className="footer-ref-highlight">
              <Link href="/ref">Ref · Partner tools</Link>
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
          © 2026 RVL Funding. All rights reserved. · <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
