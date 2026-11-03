'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/', label: '首页' },
  { href: '/services', label: '服务与价格' },
  { href: '/assessment', label: '路径评估' },
  { href: '/cases', label: '案例' },
  { href: '/about', label: '关于' },
  { href: '/contact', label: '联系' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="brand-logo" onClick={() => setOpen(false)}>
          <div className="brand-mark">RVL</div>
          <div className="brand-text">
            <h4>RVL FUNDING</h4>
            <p>美企落地 · 运营统筹</p>
          </div>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? '关闭菜单' : '打开菜单'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav aria-label="主导航" className={open ? 'nav-open' : undefined}>
          <ul className="nav-menu">
            {nav.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={active ? 'is-active' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="nav-cta">
              <Link href="/assessment" className="btn-primary nav-cta-btn" onClick={() => setOpen(false)}>
                预约评估
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
