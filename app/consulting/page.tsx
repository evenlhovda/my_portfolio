'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { ContrastButton, PrimaryButton } from "@/components/ui/button-variants"
import { Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { NetworkAnimation } from "@/components/shared/network-animation"

export default function ConsultingPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1180px] px-8 py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <h1 className="font-display text-5xl font-bold tracking-tight text-fg-1 md:text-6xl">
                Digital innovasjon & <span className="text-brand">produktutvikling</span>
              </h1>
              <p className="text-xl leading-relaxed text-fg-2">
                Jeg hjelper bedrifter med å utvikle og automatisere digitale løsninger.
                Spesialisert på KI-agenter, dataflyt og produktutvikling.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton asChild>
                  <Link href="/projects">
                    Se prosjekter
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </PrimaryButton>
                <ContrastButton asChild>
                  <a href="mailto:evenlhovda+web@gmail.com">
                    <Mail className="h-4 w-4" />
                    Ta kontakt
                  </a>
                </ContrastButton>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square w-full md:aspect-[4/3]">
                <NetworkAnimation className="h-full w-full p-8 text-sage-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
