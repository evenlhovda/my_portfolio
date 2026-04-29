'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Icon } from "@/components/ui/icon"
import { ContrastButton, PrimaryButton } from "@/components/ui/button-variants"
import { Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { NetworkAnimation } from "@/components/shared/network-animation"

export default function ConsultingPage() {
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
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Ta kontakt
                  </Link>
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

      {/* Rest of the current landing page content... */}
    </SiteLayout>
  )
} 