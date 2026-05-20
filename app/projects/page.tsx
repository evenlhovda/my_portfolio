'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Calendar, Users, Building } from 'lucide-react'
import { projects } from "@/lib/data"
import type { Project } from "@/lib/types"
import { DemoButton } from "@/components/ui/demo-button"

const ongoingIds = [11, 12, 10, 9, 1, 7, 8]
const ongoingProjects = projects
  .filter((p) => ongoingIds.includes(p.id))
  .sort((a, b) => ongoingIds.indexOf(a.id) - ongoingIds.indexOf(b.id))
const previousProjects = projects.filter((p) => !ongoingIds.includes(p.id))

function ProjectTile({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="overflow-hidden rounded-lg border border-line-2 bg-surface p-0 text-left shadow-xs transition-[transform,box-shadow] duration-base ease-out-soft hover:-translate-y-0.5 hover:shadow-md"
        >
          <div className="relative aspect-video bg-sage-100">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="px-5 pb-5 pt-4">
            <h3 className="mb-1.5 text-lg font-semibold tracking-snug text-fg-1">
              {project.title}
            </h3>
            <div className="mb-3.5 line-clamp-2 text-[13.5px] leading-[1.55] text-fg-2">
              {project.description}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
                {project.tags.length > 4 && (
                  <Badge variant="outline">+{project.tags.length - 4}</Badge>
                )}
              </div>
              {project.demoUrl && (
                <DemoButton projectId={project.id} demoUrl={project.demoUrl} />
              )}
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] max-w-2xl flex-col overflow-hidden rounded-xl border border-line-2 bg-surface p-0 text-fg-1">
        <div className="relative aspect-video bg-sage-100">
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
        <div className="overflow-y-auto px-8 pb-8 pt-7">
          <DialogHeader>
            <DialogTitle className="m-0 mb-3.5 font-display text-[26px] font-bold tracking-tight text-fg-1">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          <div className="text-[15px] leading-[1.6] text-fg-2">
            {project.description}
          </div>
          <ul className="my-5 grid list-none gap-2 p-0 text-[14px] text-fg-2">
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 text-sage-700" />
              <span><b className="text-fg-1">Rolle:</b> {project.role}</span>
            </li>
            <li className="flex items-center gap-2">
              <Building className="h-4 w-4 text-sage-700" />
              <span><b className="text-fg-1">Klient:</b> {project.client}</span>
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-sage-700" />
              <span><b className="text-fg-1">Når:</b> {project.year}</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          {project.demoUrl && (
            <div className="pt-5">
              <DemoButton projectId={project.id} demoUrl={project.demoUrl} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1180px] px-8 py-12">
        <section>
          <h2 className="mb-8 font-display text-[32px] font-bold tracking-tight text-fg-1">
            Prosjekter 2025
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {ongoingProjects.map((p) => (
              <ProjectTile key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="mb-8 font-display text-[32px] font-bold tracking-tight text-fg-1">
            Tidligere prosjekter
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {previousProjects.map((p) => (
              <ProjectTile key={p.id} project={p} />
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
