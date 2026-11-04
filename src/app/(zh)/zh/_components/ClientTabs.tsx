'use client';

import { useRef, useState } from 'react';
import { BOOKING, CLIENTS } from '../content';

export function ClientTabs() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabs = CLIENTS.tabs;

  function select(i: number, focus = false) {
    setActive(i);
    if (focus) tabRefs.current[i]?.focus();
  }

  return (
    <section className="band" id="clients">
      <div className="wrap">
        <div className="tabs-head">
          <div>
            <div className="eyebrow">{CLIENTS.eyebrow}</div>
            <h2 className="h2">{CLIENTS.title}</h2>
          </div>
          <div className="tablist" role="tablist" aria-label="客户类型">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`t-${t.id}`}
                aria-selected={active === i}
                aria-controls={`p-${t.id}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const next = (i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
                    select(next, true);
                  }
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        {tabs.map((t, i) => (
          <div
            key={t.id}
            className="panel"
            role="tabpanel"
            id={`p-${t.id}`}
            aria-labelledby={`t-${t.id}`}
            hidden={active !== i}
          >
            <div className="img" style={{ backgroundImage: `url('${t.image}')` }} role="img" aria-label={t.imageAlt} />
            <div className="body">
              <div className="tag">{t.label}</div>
              <h3>{t.heading}</h3>
              <ul>
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a className="btn btn-navy" href={t.id === 'fam' ? BOOKING.family : BOOKING.business}>
                {t.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
