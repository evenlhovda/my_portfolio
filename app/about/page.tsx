'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import Image from "next/image"

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero Section moved from home page */}
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
                Utvikler digitale produkter som skaper reel verdi. Spesielt fokus på utviklig av automatiserte KI-agenter. 
                Kan både utvikle løsninger på egenhånd, som del av et team eller som prosjektleder. 
                Flere års erfaring med produktledelse, produktstrategi og customer success.
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
    </SiteLayout>
  )
} 