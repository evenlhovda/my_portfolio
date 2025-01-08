'use client'

import Link from 'next/link'
import { AnimatedLogo } from "@/components/ui/animated-logo"
import { Linkedin, Mail } from 'lucide-react'
import { OutlineContrastButton } from "@/components/ui/button-variants"

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-secondary bg-background/75 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <AnimatedLogo className="text-primary group-hover:text-primary/80 transition-colors" size={60} />
              <span className="text-xl font-bold text-slate-100 group-hover:text-slate-50">
                Even L Hovda
              </span>
            </Link>
            <div className="flex gap-6">
              <Link href="/projects" className="text-slate-300 hover:text-slate-100 transition-colors">
                Prosjekter
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-slate-100 transition-colors">
                Om meg
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-slate-100 transition-colors">
                Kontakt
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative flex-grow">
        <main className="flex-grow">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-secondary bg-secondary/50">
        <div className="container px-4 py-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Even Lømo Hovda. Reserverte rettigheter og sånne ting...
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <OutlineContrastButton asChild size="icon">
              <a href="https://www.linkedin.com/in/evenhovda" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-4 w-4" />
              </a>
            </OutlineContrastButton>
            <OutlineContrastButton asChild size="icon">
              <a href="mailto:evenlhovda+web@gmail.com">
                <span className="sr-only">Email</span>
                <Mail className="h-4 w-4" />
              </a>
            </OutlineContrastButton>
          </div>
        </div>
      </footer>
    </div>
  )
} 