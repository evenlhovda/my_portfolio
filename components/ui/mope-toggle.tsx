'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'

/**
 * Liten flytende knapp (à la en dark-mode-switch) som tar deg til
 * den eksperimentelle "/mope"-versjonen av siden — samme innhold,
 * men med et levende, regelbrytende design.
 */
export function MopeToggle() {
  return (
    <Link
      href="/mope"
      aria-label="Bytt til eksperimentelt design"
      title="Bytt til eksperimentelt design"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-pill border border-line-2 bg-white/80 px-3.5 py-2 text-sm font-medium text-fg-2 shadow-md backdrop-blur-md transition-all duration-base ease-out-soft hover:-translate-y-0.5 hover:border-sage-400 hover:text-fg-1 hover:shadow-lg"
    >
      <Sparkles className="h-4 w-4 text-sage-600 transition-transform duration-base ease-out-soft group-hover:rotate-12 group-hover:scale-110" />
      <span className="hidden sm:inline">Future mode</span>
    </Link>
  )
}
