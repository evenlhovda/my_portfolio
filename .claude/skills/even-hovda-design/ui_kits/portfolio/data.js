// data.js — projects (port of portfolio_page/lib/data.ts)
// Image paths rewritten to point at design system assets.

window.PROJECTS = [
  {
    id: 1,
    title: "Randi fakturaansvarlig AI agent",
    description: "En AI-agent som automatisk prosesserer og analyserer fakturaer. Randi kan lese ut viktig informasjon som beløp, MVA, kontonummer og forfallsdato, og returnere dette i et format som enkelt kan deles med andre systemer. Dette er ett eksempel på hvordan AI kan effektivisere administrative oppgaver og inngå som ett ledd i en større automatisert prosess.",
    image: "../../assets/projects/randi-fakturatolk.png",
    tags: ["AI", "LangChain", "Flowise", "Next.js", "OCR", "Automatisering"],
    role: "Utvikler", year: "2025", client: "Demo", demoUrl: "#"
  },
  {
    id: 11,
    title: "Stemmestyrt forsikringsagent",
    description: "En intelligent agent for skadebehandling av bilglassforsikring. Agenten kan via naturlig samtale svare på vanlige spørsmål, hente ut informasjon om kundens forsikring, verifisere viktige detaljer og booke verkstedstimer. Løsningen integrerer flere APIer og benytter OpenAI's API for sanntidsprosessering av tale.",
    image: "../../assets/projects/voice-insurance-agent.png",
    tags: ["AI", "Voice", "OpenAI", "Forsikring", "API-integrasjon"],
    role: "Utvikler", year: "2025", client: "Belron Solutions"
  },
  {
    id: 12,
    title: "Integrert fakturaagent",
    description: "En spesialisert fakturaagent som automatisk leser fakturaer, ekstraherer relevant informasjon og leverer dette i strukturert format. Dataene mates direkte inn i en automatisert prosessflyt som utfører priskontroll mot forsikringsselskapets tariffer.",
    image: "../../assets/projects/invoice-insurance-agent.png",
    tags: ["AI", "Fine-tuning", "Dokumentanalyse", "Forsikring"],
    role: "Utvikler", year: "2025", client: "Belron Solutions"
  },
  {
    id: 10,
    title: "Innovasjonsagent",
    description: "Belron Solutions er opptatt av innovasjon. Innovasjonsagentens rolle er å ta imot og tydeliggjøre nye idéer, før de lagres i idédatabasen for videre prioritering og utvikling. Boten er tilgjengelig for alle ansatte direkte i MS Teams.",
    image: "../../assets/projects/innovasjons-agent.jpg",
    tags: ["AI", "Flowise", "LangChain", "MS Teams", "Innovasjon"],
    role: "Utvikler", year: "2025", client: "Belron Solutions"
  },
  {
    id: 9,
    title: "Mina Mailassistent",
    description: "Mina leser innkommende mailer fra kunder, sorterer ut relevant info og legger det inn i selskapets interne support- og feedback-systemer. Bygget med Flowise.",
    image: "../../assets/projects/mina-mailassistent.jpg",
    tags: ["AI", "Flowise", "LangChain", "Claude"],
    role: "Utvikler", year: "2025", client: "Demo", demoUrl: "#"
  },
  {
    id: 8,
    title: "Rune AI-Assistent",
    description: "Rune er en AI-assistent som er spesialisert på å svare på spørsmål om min erfaring. Ved å kombinere LangChain-rammeverket med en kunnskapsbase om min bakgrunn og erfaringer, kan Rune gi relevante og presise svar på henvendelser.",
    image: "../../assets/projects/rune-avatar.png",
    tags: ["AI", "LangChain", "Flowise", "Next.js", "ChatBot"],
    role: "Utvikler", year: "2025", client: "Demo"
  },
  {
    id: 7,
    title: "AI-basert web-utvikling",
    description: "Denne nettsiden ble til som et resultat av ønsket om å mestre AI-basert utvikling. Den er utviklet ved bruk av AI-verktøyene V0 og Cursor, samt bug testing, bildegenerering og tekstbehandling med ChatGPT og Claude.",
    image: "../../assets/projects/ai-code-project.webp",
    tags: ["AI", "V0", "Cursor", "Next.JS", "Webutvikling"],
    role: "Utvikler", year: "2025", client: "Me, Myself & I"
  },
  {
    id: 2,
    title: "Privat investorportefølje",
    description: "Som eier i unoterte selskaper som bruker OwnersRoom får du full kontroll på ditt eierskap og nyheter fra selskapene i porteføljen. Dette var et stort steg i å ta OwnersRoom fra å være et administrativt verktøy for selskapets ledelse, til en plattform for samhandling mellom selskaper og deres eiere.",
    image: "../../assets/projects/portfolio.gif",
    tags: ["Produktledelse", "Scoping"],
    role: "Produktleder", year: "2023-2024", client: "OwnersRoom AS"
  },
  {
    id: 4,
    title: "Sosial betting-app for fotball-EM",
    description: "En web-app der spillere kan tippe på utfallet av fotball-EM i lukkede grupper, bygget på lavkodeplattformen Bubble og lansert til EM 2024.",
    image: "../../assets/projects/fotball.jpg",
    tags: ["No code", "Bubble.io", "Lavkode", "Spill"],
    role: "Initiativtager", year: "Våren 2024", client: "Sideprosjekt i pappaperm"
  },
  {
    id: 3,
    title: "Bryne Kitefestival",
    description: "Medarrangør og økonomiansvarlig for Bryne Kitefestival — en årlig samling for snøkitere på Jæren. Festivalen samler nybegynnere og erfarne i et community-drevet event.",
    image: "../../assets/projects/snowkiting.webp",
    tags: ["Sport", "Community", "Event"],
    role: "Medarrangør", year: "2021-", client: "Bryne Kitefestival"
  },
  {
    id: 5,
    title: "Validering av idé: Digital investorportal",
    description: "Tidlig markedsundersøkelse og validering for det som ble OwnersRoom — en SaaS-portal for samhandling mellom selskaper og deres eiere.",
    image: "../../assets/projects/ownersroom-02.png",
    tags: ["Entreprenørskap", "Markedsundersøkelse", "SaaS"],
    role: "Forretningsutvikler", year: "2018-2019", client: "OwnersRoom AS"
  },
  {
    id: 6,
    title: "FOU-prosjekt: IR & emisjonsverktøy",
    description: "Prosjektledelse for et forsknings- og utviklingsprosjekt rundt Investor Relationship Management og digitalt emisjonsverktøy — finansiert via SkatteFunn og Innovasjon Norge.",
    image: "../../assets/projects/ownersroom-01.png",
    tags: ["Prosjektledelse", "SkatteFunn", "Innovasjon Norge"],
    role: "Prosjektleder", year: "2019-2020", client: "OwnersRoom AS"
  }
];

window.ONGOING_IDS = [11, 12, 10, 9, 1, 7, 8];
