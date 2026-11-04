'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { EMAIL, NAV, R, UTIL } from '../content';

/** 中文页对应的英文页；没有真正对应页面时回到英文首页。 */
const EN_MAP: Record<string, string> = { [R.about]: '/about' };

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || R.home;
  const enHref = EN_MAP[pathname] ?? '/';

  return (
    <>
      <div className="util">
        <div className="wrap">
          <div>
            <span>{UTIL.region}</span>
          </div>
          <div>
            <span>
              中文 / <a href={enHref} hrefLang="en" lang="en">EN</a>
            </span>
            <span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </span>
          </div>
        </div>
      </div>

      <header className="site">
        <div className="wrap">
          <Link className="brand" href={R.home} aria-label="RVL 中文首页">
            <b>RVL</b>
            <small>美国落地与家庭规划</small>
          </Link>
          <nav className="main" aria-label="主导航">
            {NAV.map((item) => (
              <Link key={item.label} href={item.href} aria-current={item.href === pathname ? 'page' : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hdr-cta">
            <Link className="urgent" href={R.urgent} aria-current={pathname === R.urgent ? 'page' : undefined}>
              <i />
              紧急事项
            </Link>
            <Link className="btn btn-gold" href={`${R.home}#cta`}>
              预约诊断
            </Link>
          </div>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="drawer"
            onClick={() => setOpen((v) => !v)}
          >
            菜单
          </button>
        </div>
        <div
          className="drawer"
          id="drawer"
          hidden={!open}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('a')) setOpen(false);
          }}
        >
          <div className="wrap">
            {NAV.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href={R.faq}>常见问题</Link>
            <Link href={R.urgent}>紧急事项</Link>
          </div>
        </div>
      </header>
    </>
  );
}
