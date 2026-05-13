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
              AI, automatisering og forretningsutvikling.
            </p>
            <div className="flex gap-4">
              <Link href="/projects">
                <ContrastButton>Se prosjekter</ContrastButton>
              </Link>
            </div>
          </div>
          <div className="relative aspect-square w-64 h-64 ml-auto">
            <Image
              src="/images/Profilbilde_lue_rund2.png"
              alt="Even L. Hovda"
              fill
              className="object-cover rounded-full border-4 border-accent/10"
            />
          </div>
        </section>

        {/* Core Concepts Section */}
        <section>
          <Divider className="mb-16">Kjerneområder</Divider>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6 bg-secondary/50 border-secondary">
              <h3 className="text-lg font-medium text-slate-100 mb-2">Produktutvikling</h3>
              <p className="text-slate-300 text-sm">
                Erfaring med å ta digitale produkter fra idé til marked. Fokus på brukeropplevelse, 
                teknisk gjennomførbarhet og forretningsverdi.
              </p>
            </Card>
            <Card className="p-6 bg-secondary/50 border-secondary">
              <h3 className="text-lg font-medium text-slate-100 mb-2">AI & Automatisering</h3>
              <p className="text-slate-300 text-sm">
                Utvikler løsninger som tar i bruk kunstig intelligens i automatiserte arbeidsflyter.
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
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-lg leading-relaxed text-slate-200">
                Jeg jobber med å skape teknologiske løsninger på forretningsproblemer. Jeg elsker problemer og mener at det å virkelig forstå problemet man ønsker løst, er halvparten av løsningen.
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
              Jeg har den siste tiden primært fokusert på hvordan kunstig intelligens skaper nye muligheter for verdiskaping. Spesielt når kunstig intelligens blir integrert i automatiserte arbeidsflyter. Prosjekter jeg har jobbet på inkluderer ulike chatbot-løsninger, automatisering av datainnsamling fra ustrukturerte kilder (noe som feks er supernyttig i mange onboardingsflyter), stemmestyrte agenter, funksjonskall (feks bruke MCP / API-kall for å løse oppgaver), RAG (Retrieval-Augmented Generation), TTS (Text-to-Speech) og ASR (Automatic Speech Recognition).
              </p>
              <p className="text-lg leading-relaxed text-slate-200">
              Har du et problem som du tror kunstig intelligens kan løse? Jeg hjelper gjerne til med å se på mulighetene.
              </p>
          </div>
        </section>

      </div>
    </SiteLayout>
  )
}
