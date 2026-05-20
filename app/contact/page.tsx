'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Divider } from "@/components/ui/divider"
import { Mail, Linkedin, MapPin, ArrowRight } from "lucide-react"
import { PrimaryButton } from "@/components/ui/button-variants"

const EMAIL = "evenlhovda+web@gmail.com"

export default function ContactPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1180px] px-8 py-12">
        <Divider>La oss ta en prat</Divider>

        <div className="mx-auto mt-10 grid max-w-[860px] gap-6 md:grid-cols-2">
          {/* Kontaktinformasjon */}
          <div className="rounded-lg border border-line-2 bg-surface px-7 py-6 shadow-xs">
            <h3 className="mb-3.5 text-lg font-semibold tracking-snug text-fg-1">
              Kontaktinformasjon
            </h3>
            <ul className="m-0 flex list-none flex-col gap-3 p-0 text-sm text-fg-2">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-sage-600" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="border-b border-transparent text-fg-2 transition-colors hover:border-line-strong hover:text-fg-1"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 text-sage-600" />
                <span>Oslo, Norge</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 flex-shrink-0 text-sage-600" />
                <a
                  href="https://www.linkedin.com/in/evenhovda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent text-fg-2 transition-colors hover:border-line-strong hover:text-fg-1"
                >
                  linkedin.com/in/evenhovda
                </a>
              </li>
            </ul>
          </div>

          {/* Interessert i en prat? */}
          <div className="flex flex-col rounded-lg border border-line-2 bg-tint-sage px-7 py-6 shadow-xs">
            <h3 className="mb-3.5 text-lg font-semibold tracking-snug text-fg-1">
              Interessert i en prat?
            </h3>
            <p className="mb-5 text-sm leading-[1.6] text-fg-2">
              Send meg en e-post — jeg svarer som regel innen et døgn.
            </p>
            <div className="mt-auto">
              <PrimaryButton asChild>
                <a href={`mailto:${EMAIL}`}>
                  <Mail className="h-4 w-4" />
                  Send meg en mail
                  <ArrowRight className="h-4 w-4" />
                </a>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}
