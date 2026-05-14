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
            <h1 className="text-4xl font-serif font-medium tracking-tight text-slate-100 sm:text-5xl">
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
              className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
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
                Hei! Jeg er Even Lømo Hovda, en 34 år gammel innovasjonsleder og prosjektleder basert i Oslo. Til daglig jobber jeg som Leader of Innovation i Belron Solutions, hvor jeg fokuserer på å bygge effektive verktøy, smidige prosesser og implementere ny teknologi for bilglass-bransjen. Jeg brenner for å ta komplekse konsepter – fra AI-stemmeagenter til nye operasjonelle rutiner – og gjøre dem om til praktiske løsninger som fungerer i virkeligheten. Enten det er å lede tekniske proofs-of-concept for globale markeder eller planlegge en kitefestival fra bunnen av, trives jeg best der teknologi, struktur og mennesker møtes.
              </p>
          </div>
        </section>

      </div>
    </SiteLayout>
  )
}
