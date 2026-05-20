// SiteFooter.jsx — copyright line, outline icon buttons for LinkedIn + Mail.

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <p className="site-footer__copy">
        © {new Date().getFullYear()} Even Lømo Hovda. Reserverte rettigheter og sånne ting…
      </p>
      <div className="site-footer__icons">
        <a
          className="icon-btn-outline"
          href="https://www.linkedin.com/in/evenhovda"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <window.IconLinkedin size={16} />
        </a>
        <a
          className="icon-btn-outline"
          href="mailto:evenlhovda+web@gmail.com"
          aria-label="E-post"
        >
          <window.IconMail size={16} />
        </a>
      </div>
    </div>
  </footer>
);

window.SiteFooter = SiteFooter;
