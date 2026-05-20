'use client'

import { Linkedin, Mail } from 'lucide-react'
import { SiteHeader } from "@/components/layout/site-header"

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-page">
      <SiteHeader />

      {/* Main Content */}
      <div className="relative flex-grow">
        <main className="flex-grow">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-line-2 bg-tint-sage">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-8 py-6">
          <p className="m-0 text-[13px] text-fg-3">
            © {new Date().getFullYear()} Even Lømo Hovda. Reserverte rettigheter og sånne ting…
          </p>
          <div className="flex gap-2.5">
            <a
              href="https://www.linkedin.com/in/evenhovda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-sage-300 text-sage-700 transition-colors duration-fast ease-out-soft hover:border-sage-500 hover:bg-sage-50"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:evenlhovda+web@gmail.com"
              aria-label="E-post"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-sage-300 text-sage-700 transition-colors duration-fast ease-out-soft hover:border-sage-500 hover:bg-sage-50"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}