"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { EHMonogram } from "@/components/ui/eh-monogram"

const links = [
  { href: "/",         label: "Hjem" },
  { href: "/projects", label: "Prosjekter" },
  { href: "/about",    label: "Om meg" },
  { href: "/contact",  label: "Kontakt" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line-1 bg-white/[0.78] backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-8 px-8 py-[14px]">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-fg-1 no-underline"
        >
          <EHMonogram size={32} variant="soft" />
          <span className="text-base font-bold tracking-snug">Even L. Hovda</span>
        </Link>
        <nav className="flex gap-7">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "py-1 text-sm transition-colors duration-fast ease-out-soft " +
                  (active
                    ? "font-semibold text-sage-700"
                    : "font-medium text-fg-2 hover:text-fg-1")
                }
              >
                {l.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
