import { EMAIL, FOOTER, SOCIAL } from '../content';

const icons: Record<keyof typeof SOCIAL, { label: string; path: string }> = {
  youtube: {
    label: 'YouTube',
    path: 'M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1z',
  },
  linkedin: {
    label: 'LinkedIn',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z',
  },
  facebook: {
    label: 'Facebook',
    path: 'M14 8V6.3c0-.8.2-1.3 1.4-1.3H17V2h-2.6C11.3 2 10 3.6 10 6.1V8H8v3h2v11h4V11h2.7l.3-3z',
  },
  x: {
    label: 'X',
    path: 'M17.8 2.5h3.3l-7.2 8.2 8.5 10.8h-6.6l-5.2-6.7-6 6.7H1.3l7.7-8.8L.9 2.5h6.8l4.7 6.2zm-1.2 17h1.8L7.5 4.4H5.6z',
  },
};

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap cols">
        <div>
          <div className="brand">
            <b>RVL</b>
          </div>
          <p className="foot-about">
            {FOOTER.tagline}
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <br />
            {FOOTER.location}
          </p>
          <div className="social" aria-label="社交媒体">
            {(Object.keys(icons) as Array<keyof typeof SOCIAL>).map((k) => {
              const url = SOCIAL[k];
              return (
                <a
                  key={k}
                  href={url || '#top'}
                  aria-label={icons[k].label}
                  {...(url ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={icons[k].path} />
                  </svg>
                </a>
              );
            })}
          </div>
        </div>
        {FOOTER.columns.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="wrap legal">
        <p className="comp">{FOOTER.compliance}</p>
        <p>{FOOTER.legal}</p>
        <p>{FOOTER.credits}</p>
      </div>
    </footer>
  );
}
