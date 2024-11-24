'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Calendar, Users, Linkedin, Mail, Building } from 'lucide-react'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Automatisering av dataflyt for bedre kundehåndtering",
      description: (
        <div className="prose">
          <p className="mb-2">
            Jeg leder et strategisk prosjekt som 
            fokuserer på å gjøre data mer tilgjengelig for beslutningsgrunnlag og automatisering. Målet med prosjektet 
            er å sikre at ulike systemer deler data effektivt, slik at vi kan ta bedre og mer informerte beslutninger 
            i vårt kommersielle arbeid. Dette innebærer å tilgjengeliggjøre relevant informasjon for prosesser 
            innen salg, fakturering, support og Customer Success. Prosjektet er designet for å levere robuste, fleksible 
            strukturer som er brukervennlige, lett tilgjengelige for hele selskapet og krever minimalt vedlikehold.
          </p>
          <p className="mb-2">
            <strong>Mål:</strong>
          </p>
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
        <>
          <p className="mb-2"> Det startet med 3 venner som dro til danmark for å kite. Nå er det 2 årlige festivaler med 50+ ivrige deltagere som samles for å kite. </p>
          <p> Jeg er medarrangører og styrer økonomien for vinterfestivalen som er en lukket, all inclusiv snø-kite-festival over fire dager.</p>
        </>
        ),
      image: "/images/snowkiting.webp",
      tags: ["Sport", "Community", "Event"],
      role: "Medarrangør & økonomiansvarlig",
      year: "2021-",
      client: "Bryne Kitefestival"
    },
    {
      id: 4,
      title: "Sosial betting app for fotball EM",
      description: "En web app der spillere kan tippe på utfallet av fotball EM i lukkede grupper, bygget på lavkodeplattformen Bubble og lansert for bruk i til EM 2024.",
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
        <>
          <p className="mb-2">Idéen om å øke effektiviteten i det private kapitalmarkedet med digital einvestorportaler ble testet våren 2017. Vi gjennomførte intervjuer, analyserte statistikk, NOU-rapporter og gjennomførte spørreundersøkelser mot norske gründere og investorer. Det var ingen tvil om at det var store muligheter for forbedre informasjonsflyt, prosesshåndtering og øke likviditet i unoterte aksjer. Konklusjonen var at her var det vært å satse videre.</p>
          <p className="mb-2">I dag har OwnersRoom flere tusen registrerte brukere, mer enn 200 kunder og har digitalisert kapitalutvidelser på ca 2 mrd NOK! Som forretningsutvikler var jeg med å bygge selskapet fra start og har bidratt til prototype-utvikling, kommersielle eksperimenter, brukerintervjuer, strategi-utvikling, rekruttering av pilotkunder, sikre finansiering ++.</p>
          <p>For mer informasjon om OwnersRoom, se <a href="https://ownersroom.com">https://ownersroom.com</a>.</p>
        </>
      ),
      image: "/images/OwnersRoom_illustrasjon02.png",
      tags: [ "Entreprenørskap", "Markedsundersøkelse", "Forretningsutvikling", "SaaS"],
      role: "Forretningsutvikler",
      year: "2018-2019",
      client: "OwnersRoom AS"
    },
    {
      id: 6,
      title: "FOU prosjekt: Investor Relationship Management og digitalt emisjonsverktøy",
      description:  (
        <>
          <p className="mb-2">Forsknings- og utviklingsporsjekt med støtte fra Skattefunn og Innovasjon Norge der vi uviklet nye løsninger for å hjelpe selskaper gjennomføre effektive kapitalprosesser og understøtte effektive selskap-investor relasjoner.</p>
          <p className="mb-2">Prosjektet resluterte i innsikt og utvikling av første versjon av et digitalt emisjonsverktøy. Dette er i dag en helt sentral del av OwnersRoom sitt verdiforslag.</p>
          <p>Min rolle var å lede søknads-prosessen til både Innovasjon Norge og Skattefunn, samt følge opp fremdrift og ressursbruk i prosjektet.</p>
        </>
      ),
        image: "/images/OwnersRoom_illustrasjon01.png",
      tags: [ "Prosjektledelse", "SkatteFunn", "Innovasjon Norge", "Søknad", "Innovasjon"],
      role: "Prosjektleder",
      year: "2019-2020",
      client: "OwnersRoom AS"
    },
    {
      id: 7,
      title: "AI basert web-utvikling: Denne nettsiden",
      description: "Denne nettsiden ble til som et resultat av ønsket om å mestre AI-basert utvikling. Den er utviklet ved bruk av AI-verktøyene V0 og Cursor, samt bug testing, bildegenerering og tekstbehandling med ChatGPT og Claude. ",
      image: "/images/AI_code_project.webp",
      tags: [ "AI", "V0", "Cursor", "Next.JS", "Webutvikling"],
      role: "Utvikler",
      year: "2024",
      client: "Me, Myself & I"
    },
  ]

  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: 'url("/images/Background_image02.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/95 to-orange-200/85" />
      
      <div className="relative flex-grow">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="container px-4 py-16 mx-auto">
            <div className="grid gap-4 md:grid-cols-3 items-center">
              <div className="space-y-4 md:col-span-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Even Lømo Hovda
                </h1>
                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-orange-600">
                    Innovasjon og digital produktledelse.
                  </p>
                  <p className="text-xl text-muted-foreground">
                    Brenner for å skape gode digitale produkter som løser relle problemer. Flere års erfaring med forretningsutvikling, customer success og produktledelse. Elsker å bygge ting selv med lavkode/ AI-baserte verktøy.
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src="/images/Profilbilde_lue_rund2.png"
                    alt="Even Lømo Hovda"
                    className="object-cover rounded-full border-4 border-orange-200"
                    fill
                    sizes="(max-width: 768px) 192px, 256px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="container px-4 py-12 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">Utvalgte prosjekter</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <Dialog key={project.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer transition-all duration-200 hover:translate-y-[-4px] hover:shadow-lg border border-orange-200">
                      <CardHeader className="relative aspect-video">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="object-cover rounded-t-lg"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </CardHeader>
                      <CardContent className="pt-4">
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <div className="relative">
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
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
                        <p className="text-muted-foreground">{project.description}</p>
                        <div className="grid gap-2">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span className="font-medium">Rolle:</span> {project.role}
                          </div>
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">Klient:</span> {project.client}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">Når:</span> {project.year}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
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
            <p className="text-xl text-muted-foreground">
              <a 
                href="mailto:evenlhovda+web@gmail.com" 
                className="text-orange-600 hover:text-orange-700 hover:underline ml-2"
              >
                 Interessert i en prat? 📮
              </a>
            </p>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-orange-200 bg-orange-50/95">
        <div className="container px-4 py-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Even Lømo Hovda. Reserverte rettigheter og sånne ting...
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/in/evenhovda" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:evenlhovda+web@gmail.com" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
