'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Icon } from "@/components/ui/icon"
import { ContrastButton, PrimaryButton } from "@/components/ui/button-variants"
import { Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { NetworkAnimation } from "@/components/ui/network-animation"

export default function HomePage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container px-4 py-24 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-slate-100">
                Digital Innovasjon & <span className="text-primary">Produktutvikling</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Jeg hjelper bedrifter med å utvikle og automatisere digitale løsninger. 
                Spesialisert på KI-agenter, dataflyt og produktutvikling.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton asChild>
                  <Link href="/projects" className="inline-flex items-center gap-2">
                    Se prosjekter
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </PrimaryButton>
                <ContrastButton asChild>
                  <a 
                    href="mailto:evenlhovda+web@gmail.com"
                    className="inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Ta kontakt
                  </a>
                </ContrastButton>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square md:aspect-[4/3]">
              <NetworkAnimation className="w-full h-full text-primary p-8" />
              </div>
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

      {/* Featured Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter text-slate-100">
              Skreddersydde Digitale Løsninger
            </h2>
            <div className="space-y-4">
              <p className="text-slate-300">
                Med erfaring fra både teknisk utvikling og forretningsutvikling, 
                hjelper jeg bedrifter med å identifisere, utvikle og implementere 
                digitale løsninger som skaper verdi.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  Automatisering av arbeidsprosesser
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  Utvikling av KI-agenter
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  Dataintegrasjon og analyse
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  Produktstrategi og -utvikling
                </li>
              </ul>
            </div>
            <div>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                Les mer om min erfaring
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
            <div className="relative w-full aspect-square md:aspect-[4/3]">
            <Image
                    src="/images/generic_consulting_company_AI.png"
                    alt="Generic consulting firm"
                    className="object-cover rounded-2xl border-4 border-accent"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
            </div>
        </div>
      </section>
    </SiteLayout>
  )
}
