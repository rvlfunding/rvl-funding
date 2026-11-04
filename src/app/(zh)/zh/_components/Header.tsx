'use client';

import { useState } from 'react';
import { EMAIL, NAV } from '../content';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="util">
        <div className="wrap">
          <div>
            <span>洛杉矶 · 南加州</span>
            <span>服务全球华语企业家与家庭</span>
          </div>
          <div>
            <span>
              中文 / <a href="/" hrefLang="en">EN</a>
            </span>
            <span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </span>
          </div>
        </div>
      </div>

      <header className="site">
        <div className="wrap">
          <a className="brand" href="#top" aria-label="RVL 首页">
            <b>RVL</b>
            <small>美国落地与家庭规划</small>
          </a>
          <nav className="main" aria-label="主导航">
            {NAV.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hdr-cta">
            <a className="urgent" href="#faq">
              <i />
              紧急事项
            </a>
            <a className="btn btn-gold" href="#cta">
              预约诊断
            </a>
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
            if ((e.target as HTMLElement).tagName === 'A') setOpen(false);
          }}
        >
          <div className="wrap">
            {NAV.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="#faq">紧急事项</a>
          </div>
        </div>
      </header>
    </>
  );
}
