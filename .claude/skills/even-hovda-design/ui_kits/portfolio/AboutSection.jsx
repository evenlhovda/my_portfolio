// AboutSection.jsx — long-form prose, faithful to Even's voice.

const AboutSection = () => (
  <section id="about">
    <window.Divider>Om meg</window.Divider>
    <div className="prose">
      <p>
        Jeg jobber med å skape teknologiske løsninger på forretningsproblemer.
        Jeg elsker problemer og mener at det å virkelig forstå problemet man
        ønsker løst, er halvparten av løsningen.
      </p>
      <p>
        Jeg har den siste tiden primært fokusert på hvordan kunstig
        intelligens skaper nye muligheter for verdiskaping — spesielt når den
        blir integrert i automatiserte arbeidsflyter. Prosjekter jeg har
        jobbet på inkluderer ulike chatbot-løsninger, automatisering av
        datainnsamling fra ustrukturerte kilder, stemmestyrte agenter,
        funksjonskall (MCP / API), RAG, TTS og ASR.
      </p>
      <p>
        Har du et problem som du tror kunstig intelligens kan løse?{" "}
        <a href="mailto:evenlhovda+web@gmail.com">Jeg hjelper gjerne til med
        å se på mulighetene.</a>
      </p>
    </div>
  </section>
);

window.AboutSection = AboutSection;
