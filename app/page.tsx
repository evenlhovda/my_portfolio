'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Divider } from "@/components/ui/divider"
import { PrimaryButton } from "@/components/ui/button-variants"
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

const techLogos = [
  { name: "Flowise",    src: "/images/tech/flowise.png",    href: "https://flowiseai.com" },
  { name: "Cursor",     src: "/images/tech/cursor.jpeg",    href: "https://cursor.sh" },
  { name: "V0",         src: "/images/tech/v0.jpeg",        href: "https://v0.dev" },
  { name: "PostgreSQL", src: "/images/tech/postgresql.png", href: "https://postgresql.org" },
  { name: "Big Query",  src: "/images/tech/bigquery.png",   href: "https://cloud.google.com/bigquery" },
  { name: "OpenAI",     src: "/images/tech/openai.jpeg",    href: "https://openai.com" },
  { name: "Anthropic",  src: "/images/tech/anthropic.jpeg", href: "https://anthropic.com" },
  { name: "Bubble.io",  src: "/images/tech/bubble.jpeg",    href: "https://bubble.io" },
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

        {/* Om meg */}
        <section id="about" className="mt-20 scroll-mt-24">
          <Divider>Om meg</Divider>
          <div className="mt-10 max-w-[680px]">
            <p className="mb-5 text-[17px] leading-[1.7] text-fg-1">
              Jeg jobber med å skape teknologiske løsninger på forretningsproblemer.
              Jeg elsker problemer og mener at det å virkelig forstå problemet man
              ønsker løst, er halvparten av løsningen.
            </p>
            <p className="mb-5 text-[17px] leading-[1.7] text-fg-1">
              Jeg har den siste tiden primært fokusert på hvordan kunstig
              intelligens skaper nye muligheter for verdiskaping — spesielt når den
              blir integrert i automatiserte arbeidsflyter. Prosjekter jeg har
              jobbet på inkluderer ulike chatbot-løsninger, automatisering av
              datainnsamling fra ustrukturerte kilder, stemmestyrte agenter,
              funksjonskall (MCP / API), RAG, TTS og ASR.
            </p>
            <p className="mb-5 text-[17px] leading-[1.7] text-fg-1">
              Har du et problem som du tror kunstig intelligens kan løse?{" "}
              <a
                href="mailto:evenlhovda+web@gmail.com"
                className="border-b border-sage-300 text-sage-700 transition-colors hover:border-sage-500 hover:text-sage-800"
              >
                Jeg hjelper gjerne til med å se på mulighetene.
              </a>
            </p>
          </div>
        </section>

        {/* Tech logos */}
        <section className="my-24">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-80">
            {techLogos.map((t) => (
              <a
                key={t.name}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale transition-all hover:grayscale-0"
              >
                <Image
                  src={t.src}
                  alt={t.name}
                  width={200}
                  height={60}
                  className="h-6 w-auto"
                />
              </a>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
