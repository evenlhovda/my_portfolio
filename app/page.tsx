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
              Jeg løser problemer og leder digital produktutvikling.
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
                Kunstig intelligens gir enorme muligheter for automatisering og effektivering. Med tilgjengelig hyllevare 
                 automatiserer og effektiviserer jeg arbeidsflyter.
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
                Jeg er en lidenskapelig teknologientusiast og produktleder med over åtte års erfaring innen SaaS og fintech. 
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                Som en av de første ansatte i OwnersRoom var jeg med på å bygge selskapet fra grunnen av, med fokus på produktutvikling, forretningsstrategi og customer success. Denne reisen ga meg verdifull innsikt i hvordan teknologi kan brukes til å skape varig verdi for selskaper og deres kunder.
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                Den siste tiden har jeg rettet oppmerksomheten mot de nye forretningsmulighetene som muliggjøres av fremskrittene innen kunstig intelligens. Jeg jobber med å finne konkrete behov og abreidsoopgaver som kan løses med AI, uten at det kreves store implementeringer. Blant annet har jeg utviklet AI-assistenten Randi, som leser og håndterer innkommende fakturaer, og Rune, en intelligent chatbot som bruker RAG (Retrieval-Augmented Generation) for å levere skreddersydd informasjon.
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
              Disse verktøyene er eksempler på hvordan teknologi kan løse kjedelige oppgaver effektivt. Fordelen er at de er raske å utvikle og integrere med eksisterende systemer!
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
                Mitt engasjement handler om å bruke teknologi til å løse reelle problemer og bidra til forretningsmessig verdi. Jeg brenner for å utvikle verktøy som ikke bare fungerer, men som virkelig gjør en forskjell for brukerne.
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
        {/* Technology Section */}
        <section>
          <Divider className="mb-16">Teknologi</Divider>
          <div className="space-y-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-slate-200">
                Jeg er opptatt av mulighetene til å bruke teknologi effektivt for å løse problemer. Jeg følger med på de nyeste utviklingene innen AI og teknologi, for å kunne bruke de til å løse problemer. Det er dog ikke i teknologien at verdien skapes, men i hvordan det brukes. Mitt fokus vil alltid være å forstå brukernes behov og finne effektive løsninger - ikke teknologien i seg selv. En typisk rigg som jeg er kjent med er Flowise for å lage AI-applikasjoner, Cursor for generell utvikling, V0 / Replit / Windsurf for å raskt utvikle nettsider, Pinecone for vektordatabaser (for RAG) og PostgreSQL for databaser.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12">
              <a href="https://flowiseai.com" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all">
                <Image src="/images/tech/flowise.png" alt="Flowise" width={200} height={60} className="w-auto h-6" />
              </a>
              <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all">
                <Image src="/images/tech/cursor.jpeg" alt="Cursor" width={200} height={60} className="w-auto h-6" />
              </a>
              <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all">
                <Image src="/images/tech/v0.jpeg" alt="V0" width={200} height={60} className="w-auto h-6" />
              </a>
              <a href="https://postgresql.org" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all">
                <Image src="/images/tech/postgresql.png" alt="PostgreSQL" width={200} height={60} className="w-auto h-6" />
              </a>
              <a href="https://cloud.google.com/bigquery" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all">
                <Image src="/images/tech/bigquery.png" alt="Big Query" width={200} height={60} className="w-auto h-6" />
              </a>
              <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all">
                <Image src="/images/tech/openai.jpeg" alt="OpenAI" width={200} height={60} className="w-auto h-6" />
              </a>
              <a href="https://anthropic.com" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all">
                <Image src="/images/tech/anthropic.jpeg" alt="Anthropic" width={200} height={60} className="w-auto h-6" />
              </a>
              <a href="https://bubble.io" target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 transition-all">
                <Image src="/images/tech/bubble.jpeg" alt="Bubble.io" width={200} height={60} className="w-auto h-6" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
