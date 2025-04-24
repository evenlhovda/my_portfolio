import React from 'react'
import { Project } from './types'
import { ProjectDescriptions } from '@/components/project-descriptions'

export const projects: Project[] = [
  {
    id: 1,
    title: "Randi fakturaansvarlig AI agent",
    description: "En AI-agent som automatisk prosesserer og analyserer fakturaer. Randi kan lese ut viktig informasjon som beløp, MVA, kontonummer og forfallsdato, og returnere dette i et format som enkelt kan deles med andre systemer. Dette er ett eksempel på hvordan AI kan effektivisere administrative oppgaver og inngå som ett ledd i en større automatisert prosess.",
    image: "/images/randi-fakturatolk.png",
    tags: ["AI", "LangChain", "Flowise", "Next.js", "OCR", "Automatisering"],
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
    tags: ["Produktledelse", "Scoping"],
    role: "Produktleder",
    year: "2023-2024",
    client: "OwnersRoom AS"
  },
  {
    id: 3,
    title: "Bryne Kitefestival",
    description: ProjectDescriptions.kitefestival,
    image: "/images/Snowkiting.webp",
    tags: ["Sport", "Community", "Event"],
    role: "Medarrangør & økonomiansvarlig",
    year: "2021-",
    client: "Bryne Kitefestival"
  },
  {
    id: 4,
    title: "Sosial betting-app for fotball-EM",
    description: "En web-app der spillere kan tippe på utfallet av fotball-EM i lukkede grupper, bygget på lavkodeplattformen Bubble og lansert for bruk i til EM 2024.",
    image: "/images/Fotball.jpg",
    tags: ["No code", "Bubble.io", "Lavkode", "Spill", "REST API", "Backend"],
    role: "Initiativtager og utvikler",
    year: "Våren 2024",
    client: "Sideprosjekt i pappaperm"
  },
  {
    id: 5,
    title: "Validering av idé: Digital investorportal",
    description: ProjectDescriptions.investorportal,
    image: "/images/OwnersRoom_illustrasjon02.png",
    tags: ["Entreprenørskap", "Markedsundersøkelse", "Forretningsutvikling", "SaaS"],
    role: "Forretningsutvikler",
    year: "2018-2019",
    client: "OwnersRoom AS"
  },
  {
    id: 6,
    title: "FOU-prosjekt: Investor Relationship Management og digitalt emisjonsverktøy",
    description: ProjectDescriptions.fouProsjekt,
    image: "/images/OwnersRoom_illustrasjon01.png",
    tags: ["Prosjektledelse", "SkatteFunn", "Innovasjon Norge", "Søknad", "Innovasjon"],
    role: "Prosjektleder",
    year: "2019-2020",
    client: "OwnersRoom AS"
  },
  {
    id: 7,
    title: "AI-basert web-utvikling: Denne nettsiden",
    description: "Denne nettsiden ble til som et resultat av ønsket om å mestre AI-basert utvikling. Den er utviklet ved bruk av AI-verktøyene V0 og Cursor, samt bug testing, bildegenerering og tekstbehandling med ChatGPT og Claude. ",
    image: "/images/AI_code_project.webp",
    tags: [ "AI", "V0", "Cursor", "Next.JS", "Webutvikling"],
    role: "Utvikler",
    year: "2025",
    client: "Me, Myself & I"
  },
  {
    id: 8,
    title: "Rune AI-Assistent",
    description: "Rune er en AI-assistent som er spesialisert på å svare på spørsmål om min erfaring. Ved å kombinere LangChain-rammeverket med en kunnskapsbase om min bakgrunn og erfaringer, kan Rune gi relevante og presise svar på henvendelser. Du kan snakke med Rune ved å klikke på chat-ikonet nederst til høyre på siden. Dette er et eksempel på hvordan AI kan brukes til å gi personlig tilpasset kundeservice og informasjon.",
    image: "/images/rune-avatar.png",
    tags: ["AI", "LangChain", "Flowise", "Next.js", "ChatBot", "Kundeservice"],
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
    id: 10,
    title: "Innovasjonsagent",
    description: "Belron Solutions er opptatt av innovasjon. Innovasjonsagentens rolle er å ta imot og tydeliggjøre nye idéer, før de lagres i idédatabasen for videre prioritering og utvikling. For å gjøre det så enkelt som mulig å dele idéer, er boten tilgjengelig for alle ansatte direkte i MS Teams. Ved å skrive til den får man hjelp til å definere idéen. Boten stiller spørsmål for å tydeliggjøre hvem som vil dra nytte av idéen, hvordan det vil være bedre enn dagens løsning etc og når idéen er tydelig definert, lagres den i selskapets idé-database, slik at den enkelt kan prioriteres for videre utvikling.",
    image: "/images/innovasjons-agent.jpg",
    year: "2025",
    client: "Belron Solutions",
    role: "Utvikler",
    tags: ["AI", "Flowise", "LangChain", "MS Teams", "Innovasjon"]
  }
] 