// CoreAreasSection.jsx — three "Kjerneområder" cards.

const Divider = ({ children }) => (
  <div className="divider">
    <span className="divider__line" />
    {children && <h2 className="divider__title">{children}</h2>}
    <span className="divider__line" />
  </div>
);

const AreaCard = ({ title, body, icon }) => (
  <article className="area-card">
    <div className="area-card__icon">{icon}</div>
    <h3 className="area-card__title">{title}</h3>
    <p className="area-card__body">{body}</p>
  </article>
);

const CoreAreasSection = () => (
  <section id="core-areas">
    <Divider>Kjerneområder</Divider>
    <div className="area-grid">
      <AreaCard
        title="Produktutvikling"
        body="Erfaring med å ta digitale produkter fra idé til marked. Fokus på brukeropplevelse, teknisk gjennomførbarhet og forretningsverdi."
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h18M3 16h18M9 4v16M15 4v16" />
          </svg>
        }
      />
      <AreaCard
        title="AI & automatisering"
        body="Utvikler løsninger som tar i bruk kunstig intelligens i automatiserte arbeidsflyter."
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="6" width="16" height="12" rx="2" />
            <path d="M12 3v3M8 22v-4M16 22v-4M2 12h2M20 12h2" />
            <circle cx="9" cy="11" r="1.2" />
            <circle cx="15" cy="11" r="1.2" />
          </svg>
        }
      />
      <AreaCard
        title="Forretningsutvikling"
        body="Bred erfaring med å utvikle og implementere forretningsstrategier, med fokus på digitalisering og innovasjon."
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 17l5-5 4 4 8-8" />
            <path d="M14 8h6v6" />
          </svg>
        }
      />
    </div>
  </section>
);

window.CoreAreasSection = CoreAreasSection;
window.Divider = Divider;
