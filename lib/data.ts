import React from 'react'
import { Project } from './types'
import { ProjectDescriptions } from '@/components/project-descriptions'

export const projects: Project[] = [
  {
    id: 1,
    title: "Automatisering av dataflyt for bedre kundehåndtering",
    description: ProjectDescriptions.automatisering,
    image: "/images/kommersiell_rigg_3.png",
    tags: ["Automatisering", "Big Query", "Looker studio", "Hubspot", "Stripe", "Intercom"],
    role: "Prosjektleder",
    year: "2024",
    client: "OwnersRoom AS"
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
    year: "2024",
    client: "Me, Myself & I"
  }
] 