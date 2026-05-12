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

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function SocialLinks() {
  return (
    <div className="social-links-root">
      <a
        href="https://x.com/InfoRvl88301"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="X"
        aria-label="X"
      >
        <IconX />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61555228950967"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="Facebook"
        aria-label="Facebook"
      >
        <IconFacebook />
      </a>
      <a
        href="https://www.youtube.com/@rvlfunding"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="YouTube"
        aria-label="YouTube"
      >
        <IconYouTube />
      </a>
      <a
        href="https://www.linkedin.com/company/rvl-funding-inc/?viewAsMember=true"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <IconLinkedIn />
      </a>
    </div>
  );
}
