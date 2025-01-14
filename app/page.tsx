'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Divider } from "@/components/ui/divider"
import { Card } from "@/components/ui/card"
import { ContrastButton } from "@/components/ui/button-variants"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto space-y-24">
        {/* Hero Section */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter text-slate-100 sm:text-5xl">
              Even L. Hovda
            </h1>
            <p className="text-xl text-slate-300">
              Produktleder og utvikler med fokus på AI og automatisering
            </p>
            <div className="flex gap-4">
              <Link href="/projects">
                <ContrastButton>Se prosjekter</ContrastButton>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/snowkiting.jpg"
              alt="Snowkiter - Photo by NRK beta"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Core Concepts Section */}
        <section>
          <Divider className="mb-16">Kjernekompetanse</Divider>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6 bg-secondary/50 border-secondary">
              <h3 className="text-lg font-medium text-slate-100 mb-2">Produktutvikling</h3>
              <p className="text-slate-300 text-sm">
                Erfaring med å ta produkter fra idé til marked. Fokus på brukeropplevelse, 
                teknisk gjennomførbarhet og forretningsverdi.
              </p>
            </Card>
            <Card className="p-6 bg-secondary/50 border-secondary">
              <h3 className="text-lg font-medium text-slate-100 mb-2">AI & Automatisering</h3>
              <p className="text-slate-300 text-sm">
                Spesialisert på å utvikle og implementere AI-løsninger for å automatisere 
                prosesser og forbedre brukeropplevelser.
              </p>
            </Card>
            <Card className="p-6 bg-secondary/50 border-secondary">
              <h3 className="text-lg font-medium text-slate-100 mb-2">Forretningsutvikling</h3>
              <p className="text-slate-300 text-sm">
                Bred erfaring med å utvikle og implementere forretningsstrategier, 
                med fokus på digitalisering og innovasjon.
              </p>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section>
          <Divider className="mb-16">Om meg</Divider>
          <div className="grid gap-16 md:grid-cols-[2fr,1fr]">
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-slate-200">
                Jeg er en lidenskapelig teknologientusiast og entreprenør med over åtte års erfaring innen SaaS og fintech. 
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                Som en av de første ansatte i OwnersRoom var jeg med på å bygge selskapet fra grunnen av, med fokus på produktutvikling, forretningsstrategi og customer success. Denne reisen ga meg verdifull innsikt i hvordan teknologi kan brukes til å skape varig verdi for selskaper og deres kunder.
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                Den siste tiden har jeg rettet oppmerksomheten mot de transformative forretningsmulighetene innen kunstig intelligens. Jeg jobber med å effektivisere arbeidsprosesser og øke produktivitet ved bruk av kunstig intelligens. Blant annet har jeg utviklet AI-assistenten Randi, som leser og håndterer innkommende fakturaer, og Rune, en intelligent chatbot som bruker RAG (Retrieval-Augmented Generation) for å levere skreddersydd informasjon.
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
              Disse verktøyene er eksempler på hvordan teknologi kan gjøre komplekse oppgaver enklere og mer tilgjengelige for både enkeltpersoner og organisasjoner. Fordelen er at de er raske å utvikle og integrere med eksisterende systemer!
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                Mitt engasjement handler om å bruke teknologi til å løse reelle problemer og bidra til forretningsmessig vekst. Jeg brenner for å utvikle verktøy som ikke bare fungerer, men som virkelig gjør en forskjell for brukerne.
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                Utforsk gjerne mine prosjekter, og ta kontakt hvis du ønsker å diskutere hvordan vi kan bruke AI og teknologi for å skape meningsfulle løsninger sammen.
              </p>
            </div>
            <div className="relative">
              <div className="sticky top-24 aspect-square overflow-hidden rounded-full border-4 border-accent/10">
                <Image
                  src="/images/Profilbilde_lue_rund2.png"
                  alt="Even L. Hovda"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
