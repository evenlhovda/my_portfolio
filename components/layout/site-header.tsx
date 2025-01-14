import Link from "next/link"
import { Icon } from "@/components/ui/icon"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/10 bg-secondary/80 backdrop-blur">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Icon name="ai" className="h-5 w-5" />
          <span className="font-medium">Even L. Hovda</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end gap-4">
          <Link 
            href="/projects" 
            className="text-sm font-medium text-slate-300 hover:text-slate-100"
          >
            Prosjekter
          </Link>
        </nav>
      </div>
    </header>
  )
} 