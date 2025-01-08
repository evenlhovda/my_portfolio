'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Calendar, Users, Linkedin, Mail, Building } from 'lucide-react'
import Link from 'next/link'
import { PrimaryButton, ContrastButton, OutlineContrastButton } from "@/components/ui/button-variants"
import { Icon } from "@/components/ui/icon"
import { AnimatedLogo } from "@/components/ui/animated-logo"

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Automatisering av dataflyt for bedre kundehåndtering",
      description: (
        <div className="prose prose-invert">
          <div className="mb-2 text-slate-300">
            Jeg leder et strategisk prosjekt som 
            fokuserer på å gjøre data mer tilgjengelig for beslutningsgrunnlag og automatisering. Målet med prosjektet 
            er å sikre at ulike systemer deler data effektivt, slik at vi kan ta bedre og mer informerte beslutninger 
            i vårt kommersielle arbeid. Dette innebærer å tilgjengeliggjøre relevant informasjon for prosesser 
            innen salg, fakturering, support og Customer Success. Prosjektet er designet for å levere robuste, fleksible 
            strukturer som er brukervennlige, lett tilgjengelige for hele selskapet og krever minimalt vedlikehold.
          </div>
          <div className="mb-2">
            <strong>Mål:</strong>
          </div>
          <ul className="list-disc pl-5 mb-2">
            <li className="mb-2">
              <strong>Bedre oversikt over kundekontakt:</strong> All kommunikasjon med kunder – fra verktøy som 
              Hubspot, Intercom, personlig e-post og support-e-post – er nå knyttet til CRM-systemet for enkel oversikt.
            </li>
            <li className="mb-2">
              <strong>Ny onboardingsflyt:</strong> En ny, automatisert onboarding emailflyt sikrer grunnleggende oppfølging uten å trekke ressurser fra CS-teamet.
            </li>
            <li className="mb-2">
              <strong>Effektivisering av support:</strong> En AI-assistent på førstelinje settes opp for å håndtere innkommende 
              supporthenvendelser og redusere behovet for manuell oppfølging av enkle supportsaker.
            </li>
            <li className="mb-2">
              <strong>Produktdata tilgjengeliggjøres for daglige beslutninger:</strong> Relevante produktdata tilgjengeliggjøres via 
              BI-dashbord og tilknyttede verktøy (Big Query og Looker), for raskt å kunne ta datadrevne beslutninger i det daglige.
            </li>
            <li className="mb-2">
              <strong>Redusert manuelt arbeid:</strong> Behovet for manuell overføring av data mellom systemer 
              er drastisk redusert, noe som frigjør tid til mer verdiskapende aktiviteter.
            </li>
          </ul>
        </div>
      ),
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
    },{
      id: 3,
      title: "Bryne Kitefestival",
      description: (
        <div className="space-y-2">
          <div className="mb-2">
            Det startet med 3 venner som dro til danmark for å kite. Nå er det 2 årlige festivaler med 50+ ivrige deltagere som samles for å kite.
          </div>
          <div>
            Jeg er medarrangører og styrer økonomien for vinterfestivalen som er en lukket, all inclusiv snø-kite-festival over fire dager.
          </div>
        </div>
      ),
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
      description: (
        <div className="space-y-2">
          <div className="mb-2">
            Idéen om å øke effektiviteten i det private kapitalmarkedet med digital einvestorportaler ble testet våren 2017. Vi gjennomførte intervjuer, analyserte statistikk, NOU-rapporter og gjennomførte spørreundersøkelser mot norske gründere og investorer. Det var ingen tvil om at det var store muligheter for forbedre informasjonsflyt, prosesshåndtering og øke likviditet i unoterte aksjer. Konklusjonen var at her var det vært å satse videre.
          </div>
          <div className="mb-2">
            I dag har OwnersRoom flere tusen registrerte brukere, mer enn 200 kunder og har digitalisert kapitalutvidelser på ca 2 mrd NOK! Som forretningsutvikler var jeg med å bygge selskapet fra start og har bidratt til prototype-utvikling, kommersielle eksperimenter, brukerintervjuer, strategi-utvikling, rekruttering av pilotkunder, sikre finansiering ++.
          </div>
          <div>
            For mer informasjon om OwnersRoom, se <a href="https://ownersroom.com" className="text-blue-400 hover:text-blue-300">https://ownersroom.com</a>.
          </div>
        </div>
      ),
      image: "/images/OwnersRoom_illustrasjon02.png",
      tags: ["Entreprenørskap", "Markedsundersøkelse", "Forretningsutvikling", "SaaS"],
      role: "Forretningsutvikler",
      year: "2018-2019",
      client: "OwnersRoom AS"
    },
    {
      id: 6,
      title: "FOU-prosjekt: Investor Relationship Management og digitalt emisjonsverktøy",
      description: (
        <div className="space-y-2">
          <div className="mb-2">
            Forsknings- og utviklingsporsjekt med støtte fra Skattefunn og Innovasjon Norge der vi utviklet nye løsninger for å hjelpe selskaper gjennomføre effektive kapitalprosesser og økt tillit i relasjonen mellom selskap og investor.
          </div>
          <div className="mb-2">
            Prosjektet resulterte i innsikt og utvikling av første versjon av et digitalt emisjonsverktøy. Dette er i dag en helt sentral del av OwnersRoom sitt verdiforslag.
          </div>
          <div>
            Min rolle var å lede prosjektet, søke støtte fra Innovasjon Norge og Skattefunn, samt følge opp og rapportere fremdrift og ressursbruk i prosjektet.
          </div>
        </div>
      ),
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
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-secondary bg-background/75 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <AnimatedLogo className="text-primary group-hover:text-primary/80 transition-colors" size={60} />
              <span className="text-xl font-bold text-slate-100 group-hover:text-slate-50">
                Even L Hovda
              </span>
            </Link>
            <div className="flex gap-6">
              <Link href="/projects" className="text-slate-300 hover:text-slate-100 transition-colors">
                Prosjekter
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-slate-100 transition-colors">
                Om oss
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-slate-100 transition-colors">
                Kontakt
              </Link>
            </div>
          </nav>
        </div>
      </header>
      
      <div className="relative flex-grow">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="container px-4 py-16 mx-auto">
            <div className="grid gap-4 md:grid-cols-3 items-center">
              <div className="space-y-4 md:col-span-2">
                <h1 className="text-4xl font-bold tracking-tighter text-slate-100 sm:text-5xl xl:text-6xl/none">
                  Even Lømo Hovda
                </h1>
                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-accent">
                    Innovasjon og digital produktledelse.
                  </p>
                  <p className="text-xl text-slate-300">
                    Utvikler digitale produkter som skaper reel verdi. Spesielt fokus på utviklig av automatiserte KI-agenter. Kan både utvikle løsninger på egenhånd, som del av et team eller som prosjektleder. Flere års erfaring med produktledelse, produktstrategi og customer success.
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src="/images/Profilbilde_lue_rund2.png"
                    alt="Even Lømo Hovda"
                    className="object-cover rounded-full border-4 border-accent"
                    fill
                    sizes="(max-width: 768px) 192px, 256px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Category Divider */}
          <div className="w-full bg-secondary/30 py-16">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center gap-3 group">
                  <Icon name="ai" className="text-primary transition-transform group-hover:scale-110" size={64} />
                  <span className="text-slate-300 font-medium">AI & Automatisering</span>
                </div>
                <div className="flex flex-col items-center gap-3 group">
                  <Icon name="data" className="text-contrast transition-transform group-hover:scale-110" size={64} />
                  <span className="text-slate-300 font-medium">Data & Integrasjoner</span>
                </div>
                <div className="flex flex-col items-center gap-3 group">
                  <Icon name="analytics" className="text-primary transition-transform group-hover:scale-110" size={64} />
                  <span className="text-slate-300 font-medium">Analyse & Innsikt</span>
                </div>
                <div className="flex flex-col items-center gap-3 group">
                  <Icon name="settings" className="text-contrast transition-transform group-hover:scale-110" size={64} />
                  <span className="text-slate-300 font-medium">Utvikling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <section className="container px-4 py-12 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-slate-100 sm:text-4xl mb-12">
              Utvalgte prosjekter
            </h2>
            
            {/* Existing projects grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer transition-all duration-200 hover:translate-y-[-4px] hover:shadow-lg bg-secondary border-secondary overflow-hidden">
                      <CardHeader className="relative aspect-video p-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </CardHeader>
                      <CardContent className="pt-4">
                        <CardTitle className="text-xl mb-2 text-slate-100">{project.title}</CardTitle>
                        <div className="relative">
                          {typeof project.description === 'string' ? (
                            <p className="text-slate-300 mb-4 line-clamp-2">
                              {project.description}
                            </p>
                          ) : (
                            <div className="text-slate-300 mb-4 line-clamp-2">
                              {project.description}
                            </div>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-secondary to-transparent" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-accent text-accent-foreground">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col bg-secondary text-slate-100">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 overflow-y-auto pr-2 custom-scrollbar">
                      <div className="relative aspect-video">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="object-cover rounded-lg"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-4">
                          {typeof project.description === 'string' ? (
                            <p className="text-slate-300">{project.description}</p>
                          ) : (
                            <div className="text-slate-300">{project.description}</div>
                          )}
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center gap-2 text-slate-300">
                            <Users className="h-4 w-4" />
                            <span className="font-medium text-slate-100">Rolle:</span> {project.role}
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Building className="h-4 w-4" />
                            <span className="font-medium text-slate-100">Klient:</span> {project.client}
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium text-slate-100">Når:</span> {project.year}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-accent text-accent-foreground">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>

          {/* Get in Touch Section */}
          <section className="container px-4 py-12 mx-auto text-center">
            <ContrastButton asChild>
              <a 
                href="mailto:evenlhovda+web@gmail.com" 
                className="inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Interessert i en prat? 📮
              </a>
            </ContrastButton>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-secondary bg-secondary/50">
        <div className="container px-4 py-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Even Lømo Hovda. Reserverte rettigheter og sånne ting...
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <OutlineContrastButton asChild size="icon">
              <a href="https://www.linkedin.com/in/evenhovda" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-4 w-4" />
              </a>
            </OutlineContrastButton>
            <OutlineContrastButton asChild size="icon">
              <a href="mailto:evenlhovda+web@gmail.com">
                <span className="sr-only">Email</span>
                <Mail className="h-4 w-4" />
              </a>
            </OutlineContrastButton>
          </div>
        </div>
      </footer>
    </div>
  )
}
