'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Divider } from "@/components/ui/divider"
import { PrimaryButton } from "@/components/ui/button-variants"
import { MopeToggle } from "@/components/ui/mope-toggle"
import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const coreAreas = [
  {
    title: "Produktutvikling",
    body: "Erfaring med å ta digitale produkter fra idé til marked. Fokus på brukeropplevelse, teknisk gjennomførbarhet og forretningsverdi.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8h18M3 16h18M9 4v16M15 4v16" />
      </svg>
    ),
  },
  {
    title: "AI & automatisering",
    body: "Utvikler løsninger som tar i bruk kunstig intelligens i automatiserte arbeidsflyter.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="M12 3v3M8 22v-4M16 22v-4M2 12h2M20 12h2" />
        <circle cx="9" cy="11" r="1.2" />
        <circle cx="15" cy="11" r="1.2" />
      </svg>
    ),
  },
  {
    title: "Forretningsutvikling",
    body: "Bred erfaring med å utvikle og implementere forretningsstrategier, med fokus på digitalisering og innovasjon.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l5-5 4 4 8-8" />
        <path d="M14 8h6v6" />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1180px] px-8">
        {/* Hero */}
        <section className="grid items-center gap-16 py-24 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="mb-4 inline-block rounded-pill bg-sage-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-sage-700">
              Konsulent · AI produktleder
            </span>
            <h1 className="m-0 font-display text-[clamp(48px,6.5vw,76px)] font-bold leading-[1.02] tracking-tight text-fg-1">
              Even L. Hovda
            </h1>
            <p className="mb-3 mt-3 text-[22px] font-medium tracking-snug text-fg-1">
              AI, automatisering og forretningsutvikling.
            </p>
            <p className="mb-7 max-w-[44ch] text-[17px] leading-[1.6] text-fg-2">
              Jeg hjelper små og mellomstore bedrifter utvikle verdifulle løsninger
              med AI&nbsp;i sentrum.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects">
                <PrimaryButton>
                  Se prosjekter <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
              </Link>
              <a href="mailto:evenlhovda+web@gmail.com">
                <PrimaryButton variant="ghost">
                  <Mail className="h-4 w-4" /> Ta kontakt
                </PrimaryButton>
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="h-80 w-80 rounded-full bg-gradient-to-br from-sage-200 to-sky-200 p-2 shadow-lg">
              <Image
                src="/images/Profilbilde_lue_rund2.png"
                alt="Even L. Hovda"
                width={320}
                height={320}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Kjerneområder */}
        <section>
          <Divider>Kjerneområder</Divider>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {coreAreas.map((a) => (
              <article
                key={a.title}
                className="rounded-lg border border-line-2 bg-surface p-7 shadow-xs transition-[transform,box-shadow] duration-base ease-out-soft hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-[12px] bg-sage-100 text-sage-700">
                  {a.icon}
                </div>
                <h3 className="mb-1.5 text-lg font-semibold tracking-snug text-fg-1">
                  {a.title}
                </h3>
                <p className="m-0 text-sm leading-[1.6] text-fg-2">{a.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Om meg fjernet etter ønske */}
      </div>

      <MopeToggle />
    </SiteLayout>
  )
}
