// HeroSection.jsx — hero (h1, tagline, primary CTA + portrait).

const HeroSection = ({ onSeeProjects }) => (
  <section className="hero">
    <div className="hero__copy">
      <span className="eyebrow">Konsulent · AI produktleder</span>
      <h1 className="hero__title">Even L. Hovda</h1>
      <p className="hero__tagline">AI, automatisering og forretningsutvikling.</p>
      <p className="hero__lede">
        Jeg hjelper små og mellomstore bedrifter utvikle verdifulle løsninger
        med AI&nbsp;i sentrum.
      </p>
      <div className="hero__actions">
        <button className="btn btn--primary" onClick={onSeeProjects}>
          Se prosjekter <window.IconArrowRight size={16} />
        </button>
        <a className="btn btn--ghost" href="mailto:evenlhovda+web@gmail.com">
          <window.IconMail size={16} /> Ta kontakt
        </a>
      </div>
    </div>
    <div className="hero__portrait">
      <div className="hero__portrait-ring">
        <img src="../../assets/portrait.png" alt="Even L. Hovda" />
      </div>
    </div>
  </section>
);

window.HeroSection = HeroSection;
