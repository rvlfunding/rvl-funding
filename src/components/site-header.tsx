import Link from 'next/link';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Cases' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="brand-logo">
          <div className="brand-mark">RVL</div>
          <div className="brand-text">
            <h4>RVL Funding</h4>
            <p>Wealth · Immigration</p>
          </div>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-menu">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
