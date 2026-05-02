function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.1-.9C17 2.5 12 2.5 12 2.5h0s-5 0-8.6.5c-.4.1-1.3.1-2.1.9C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.7.2 7.3.5 7.3.5s5 0 8.6-.5c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.3.8-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.5 14.6V8.9l5.8 2.9-5.8 2.8z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M24 12.1c0-6.6-5.4-12-12-12S0 5.5 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7v-3.5h3.1V9.7c0-3.1 1.8-4.8 4.7-4.8 1.4 0 2.8.2 2.8.2v3.1h-1.6c-1.6 0-2.1 1-2.1 2v2.5h3.6l-.6 3.5h-3v8.4C19.6 23.1 24 18.1 24 12.1z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M18.9 2h3.7l-8 9.1L24 22h-7.4l-5.8-7.6L5.5 22H1.7l8.6-9.8L0 2h7.6l5.2 6.9L18.9 2zm-1.3 18h2l-13-14H4.5l13 14z" />
    </svg>
  );
}

function IconZsxq() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="3.2" fill="currentColor" opacity="0.95" />
      <path
        d="M12 4.5a7.5 7.5 0 0 1 6.9 4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M5.1 15.9a7.5 7.5 0 0 0 13.8 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="19" cy="8" r="1.2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

const zsxqUrl = 'https://zsxq.com';

export function SocialLinks() {
  return (
    <div className="social-links-root">
      <a
        href={zsxqUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="Zsxq community"
        aria-label="Zsxq community"
      >
        <IconZsxq />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="YouTube"
        aria-label="YouTube"
      >
        <IconYouTube />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="Facebook"
        aria-label="Facebook"
      >
        <IconFacebook />
      </a>
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="X"
        aria-label="X"
      >
        <IconX />
      </a>
    </div>
  );
}
