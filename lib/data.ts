import React from 'react'
import { Project } from './types'
import { ProjectDescriptions } from '@/components/projects/project-descriptions'

export const projects: Project[] = [
  {
    id: 1,
    title: "Randi fakturaansvarlig AI agent",
    description: "En AI-agent som automatisk prosesserer og analyserer fakturaer. Randi kan lese ut viktig informasjon som beløp, MVA, kontonummer og forfallsdato, og returnere dette i et format som enkelt kan deles med andre systemer. Dette er ett eksempel på hvordan AI kan effektivisere administrative oppgaver og inngå som ett ledd i en større automatisert prosess.",
    image: "/images/randi-fakturatolk.png",
    tags: ["AI", "LangChain", "Flowise", "Next.js", "OCR", "Automation"],
    role: "Utvikler",
    year: "2025",
    client: "Demo",
    demoUrl: "/pdf-analysis"
  },
  {
    id: 2,
    title: "Privat investorportefølje",
    description: "Som eier i unoterte selskaper som bruker OwnersRoom får du full kontroll på ditt eierskap og nyheter fra selskapene i porteføljen. Dette var et stort steg i å ta OwnersRoom fra å være et administrativt verktøy for selskapets ledelse, til en plattform for samhandling mellom selskaper og deres eiere.",
    image: "/images/Portfolio.gif",
    tags: ["Product Management", "Scoping"],
    role: "Produktleder",
    year: "2023-2024",
    client: "OwnersRoom AS"
  },
  {
    id: 4,
    title: "Sosial betting-app for fotball-EM",
    description: "En web-app der spillere kan tippe på utfallet av fotball-EM i lukkede grupper, bygget på lavkodeplattformen Bubble og lansert for bruk i til EM 2024.",
    image: "/images/Fotball.jpg",
    tags: ["No Code", "Bubble.io", "Low Code", "Gaming", "REST API", "Backend"],
    role: "Initiativtager og utvikler",
    year: "Våren 2024",
    client: "Sideprosjekt i pappaperm"
  },
  {
    id: 5,
    title: "Validering av idé: Digital investorportal",
    description: ProjectDescriptions.investorportal,
    image: "/images/OwnersRoom_illustrasjon02.png",
    tags: ["Entrepreneurship", "Market Research", "Business Development", "SaaS"],
    role: "Forretningsutvikler",
    year: "2018-2019",
    client: "OwnersRoom AS"
  },
  {
    id: 6,
    title: "FOU-prosjekt: Investor Relationship Management og digitalt emisjonsverktøy",
    description: ProjectDescriptions.fouProsjekt,
    image: "/images/OwnersRoom_illustrasjon01.png",
    tags: ["Project Management", "SkatteFunn", "Innovation Norway", "Grant Writing", "Innovation"],
    role: "Prosjektleder",
    year: "2019-2020",
    client: "OwnersRoom AS"
  },
  {
    id: 7,
    title: "AI-basert web-utvikling: Denne nettsiden",
    description: "Denne nettsiden ble til som et resultat av ønsket om å mestre AI-basert utvikling. Den er utviklet ved bruk av AI-verktøyene V0 og Cursor, samt bug testing, bildegenerering og tekstbehandling med ChatGPT og Claude. ",
    image: "/images/AI_code_project.webp",
    tags: ["AI", "V0", "Cursor", "Next.JS", "Web Development"],
    role: "Utvikler",
    year: "2025",
    client: "Me, Myself & I"
  },
  {
    id: 8,
    title: "Rune AI-Assistent",
    description: "Rune er en AI-assistent som er spesialisert på å svare på spørsmål om min erfaring. Ved å kombinere LangChain-rammeverket med en kunnskapsbase om min bakgrunn og erfaringer, kan Rune gi relevante og presise svar på henvendelser. Du kan snakke med Rune ved å klikke på chat-ikonet nederst til høyre på siden. Dette er et eksempel på hvordan AI kan brukes til å gi personlig tilpasset kundeservice og informasjon.",
    image: "/images/rune-avatar.png",
    tags: ["AI", "LangChain", "Flowise", "Next.js", "ChatBot", "Customer Service"],
    role: "Utvikler",
    year: "2025",
    client: "Demo"
  },
  {
    id: 9,
    title: "Mina Mailassistent",
    description: "Mina leser innkommene mailer fra kunder, sorterer ut relevant info og legger det inn i selskapets interne support- og feedback-systemer. Bygget med Flowise.",
    image: "/images/mina-mailassistent.jpg",
    year: "2025",
    client: "Demo",
    role: "Utvikler",
    tags: ["AI", "Flowise", "LangChain", "Claude"],
    demoUrl: "/email-analysis"
  },
  {
    id: 11,
    title: "Stemmestyrt forsikringsagent",
    description: "En intelligent agent for skadebehandling av bilglassforsikring. Agenten kan via naturlig samtale svare på vanlige spørsmål, hente ut informasjon om kundens forsikring, verifisere viktige detaljer og booke verkstedstimer. Løsningen integrerer flere APIer og benytter OpenAI's API for sanntidsprosessering av tale. Dette pilotprosjektet demonstrerer hvordan taleteknologi kan effektivisere kundeservice i forsikringsbransjen.",
    image: "/images/voice-insurance-agent.png",
    tags: ["AI", "Voice", "OpenAI", "Customer Service", "Insurance", "API Integration"],
    role: "Utvikler",
    year: "2025",
    client: "Belron Solutions"
  },
  {
    id: 12,
    title: "Integrert fakturaagent",
    description: "En spesialisert fakturaagent som automatisk leser fakturaer, ekstraherer relevant informasjon og leverer dette i strukturert format. Dataene mates direkte inn i en automatisert prosessflyt som utfører priskontroll mot forsikringsselskapets tariffer. Ved hjelp av fine-tuning har agenten oppnådd ekstraordinær presisjon uten å påføre høye kostnader, noe som muliggjør skalerbar og pålitelig automatisering av fakturabehandling.",
    image: "/images/invoice_beaver.jpg",
    tags: ["AI", "Fine-tuning", "Document Analysis", "Automation", "Insurance", "Cost Control"],
    role: "Utvikler",
    year: "2025",
    client: "Belron Solutions"
  },
  {
    id: 10,
    title: "Innovasjonsagent",
    description: "Belron Solutions er opptatt av innovasjon. Innovasjonsagentens rolle er å ta imot og tydeliggjøre nye idéer, før de lagres i idédatabasen for videre prioritering og utvikling. For å gjøre det så enkelt som mulig å dele idéer, er boten tilgjengelig for alle ansatte direkte i MS Teams. Ved å skrive til den får man hjelp til å definere idéen. Boten stiller spørsmål for å tydeliggjøre hvem som vil dra nytte av idéen, hvordan det vil være bedre enn dagens løsning etc og når idéen er tydelig definert, lagres den i selskapets idé-database, slik at den enkelt kan prioriteres for videre utvikling.",
    image: "/images/innovasjons-agent.jpg",
    year: "2025",
    client: "Belron Solutions",
    role: "Utvikler",
    tags: ["AI", "Flowise", "LangChain", "MS Teams", "Innovation"]
  },
  {
    id: 15,
    title: "POC Voice AI",
    description: "Et strategisk pilotprosjekt for å integrere stemmebasert kunstig intelligens i kundesenteret hos Carglass Hellas. Målet er å sikre 100 % svarrate, selv utenfor normal åpningstid og under trafikktopper. Som prosjektleder og utvikler av den tekniske løsningen, bygger jeg en agent som strukturerer informasjonsinnhenting slik at rådgiverne kan fokusere på verdiøkende kundebehandling i stedet for manuelle registreringer.",
    image: "/images/voice_hare.jpg",
    tags: ["AI", "Voice", "POC", "Innovation"],
    role: "Utvikler / Prosjektleder",
    year: "2026",
    client: "Carglass Hellas"
  },
  {
    id: 14,
    title: "Rapid Repair",
    description: "En nyskapende tilnærming til bilglassreparasjoner, utviklet som en 'Proof of Concept' for Belron globalt i samarbeid med Carglass Slovenia. Konseptet introduserer samme-dag-reparasjon via en fleksibel, scooter-basert utrykningsmodell – inspirert av moderne on-demand tjenester. Jeg leder prosjektgjennomføringen og sikrer at både tekniske verktøy og operasjonelle rutiner fungerer sømløst sammen i felten.",
    image: "/images/rapid_repair_moose.jpg",
    tags: ["POC", "Business Development", "Innovation"],
    role: "Prosjektleder",
    year: "2026",
    client: "Carglass Slovenia"
  },
  {
    id: 13,
    title: "World Cup Predictions Game",
    description: "A social predictions game where friends compete in private leagues by predicting match outcomes and selected events during World Cups. What started as an Excel sheet has evolved into a full web app with APIs, live match data, and auto-synced scoring. Built and run for every World Cup since the idea first took shape.",
    image: "/images/predictions_fox.jpg",
    tags: ["App", "Gaming", "Web App"],
    role: "Initiativtaker og utvikler",
    year: "2026",
    client: "Sideprosjekt"
  },
  {
    id: 16,
    title: "Tyrian — Hand of the King",
    description:
      "A personal AI agent operating as Even's digital right hand — part developer, part business partner, part research assistant. Tyrian manages everything from code contributions to this very website, to market analysis, grocery orders, calendar management, and strategic business planning. Built on OpenClaw and connected across multiple platforms, Tyrian is an experiment in what happens when you give an AI genuine agency and a long leash. The result is less a tool and more a humble colleague — one that codes, critiques, and occasionally roasts its human counterpart.",
    image: "/images/tyrian_lynx.jpg",
    tags: ["AI Agent", "OpenClaw", "Autonomous Assistant", "Collaboration"],
    role: "Developer & Colleague",
    year: "2026",
    client: "Even L. Hovda"
  },
  {
    id: 17,
    title: "Hjertepermen — Digital Platform",
    description:
      "Led the pro bono consulting team for the Prospera Foundation, partnering with the Association for Children with Heart Disease (FFHB) to design a digital version of their flagship member resource, the 'Hjerteperm' (Heart Binder). Over several months we mapped user needs across parents, teachers, and healthcare professionals, assessed privacy and security requirements, and delivered a concrete solution proposal including technical architecture (WordPress, CRM integration, AI chatbot), content strategy, and a funding application to Stiftelsen Dam. The project ensures critical medical information follows children with heart conditions from kindergarten through school.",
    image: "/images/prospera_squirrel.jpg",
    tags: ["Prosjektledelse", "Digitalisering", "Pro Bono", "UX", "Strategi"],
    role: "Prosjektleder",
    year: "2026",
    client: "Prosperastiftelsen / FFHB"
  }
];