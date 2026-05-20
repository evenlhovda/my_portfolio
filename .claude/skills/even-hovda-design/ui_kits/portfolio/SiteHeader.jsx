// SiteHeader.jsx — sticky header with mark, name, Norwegian nav.

const SiteHeader = ({ route, onNavigate }) => {
  const links = [
    { id: "home", label: "Hjem" },
    { id: "projects", label: "Prosjekter" },
    { id: "about", label: "Om meg" },
    { id: "contact", label: "Kontakt" },
  ];
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="site-header__brand"
          href="#home"
          onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
        >
          <window.EHMonogram size={32} variant="soft" />
          <span className="site-header__name">Even L. Hovda</span>
        </a>
        <nav className="site-header__nav">
          {links.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              className={"site-header__link" + (route === l.id ? " is-active" : "")}
              onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

window.SiteHeader = SiteHeader;
