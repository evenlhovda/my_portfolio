'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Icon } from "@/components/ui/icon"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Calendar, Users, Building } from 'lucide-react'
import { projects } from "@/lib/data"
import { DemoButton } from "@/components/ui/demo-button"

// Separate ongoing and previous projects
const ongoingProjects = projects
  .filter(p => [9, 1, 7, 8].includes(p.id)) // Added 9 at the start
  .sort((a, b) => [9, 1, 7, 8].indexOf(a.id) - [9, 1, 7, 8].indexOf(b.id)) // Sort by the order in the array

const previousProjects = projects.filter(p => ![9, 1, 7, 8].includes(p.id))

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <div className="container px-4 py-12 mx-auto space-y-16">
        {/* Ongoing Projects Section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tighter text-slate-100 sm:text-4xl mb-8">
            Pågående prosjekter
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {ongoingProjects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer transition-all duration-200 hover:translate-y-[-4px] hover:shadow-lg bg-secondary border-secondary overflow-hidden">
                    <CardHeader className="relative aspect-video p-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardTitle className="text-xl mb-2 text-slate-100">{project.title}</CardTitle>
                      <div className="relative">
                        {typeof project.description === 'string' ? (
                          <p className="text-slate-300 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                        ) : (
                          <div className="text-slate-300 mb-4 line-clamp-2">
                            {project.description}
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-secondary to-transparent" />
                      </div>
                      <div className="flex flex-wrap items-center gap-2 justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-accent text-accent-foreground">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {project.demoUrl && (
                          <DemoButton 
                            projectId={project.id} 
                            demoUrl={project.demoUrl}
                          />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col bg-secondary text-slate-100">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover rounded-lg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-4">
                        {typeof project.description === 'string' ? (
                          <p className="text-slate-300">{project.description}</p>
                        ) : (
                          <div className="text-slate-300">{project.description}</div>
                        )}
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Users className="h-4 w-4" />
                          <span className="font-medium text-slate-100">Rolle:</span> {project.role}
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <Building className="h-4 w-4" />
                          <span className="font-medium text-slate-100">Klient:</span> {project.client}
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium text-slate-100">Når:</span> {project.year}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-accent text-accent-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {project.demoUrl && (
                        <div className="pt-4">
                          <DemoButton 
                            projectId={project.id} 
                            demoUrl={project.demoUrl}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Previous Projects Section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tighter text-slate-100 sm:text-4xl mb-8">
            Tidligere prosjekter
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {previousProjects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer transition-all duration-200 hover:translate-y-[-4px] hover:shadow-lg bg-secondary border-secondary overflow-hidden">
                    <CardHeader className="relative aspect-video p-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardTitle className="text-xl mb-2 text-slate-100">{project.title}</CardTitle>
                      <div className="relative">
                        {typeof project.description === 'string' ? (
                          <p className="text-slate-300 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                        ) : (
                          <div className="text-slate-300 mb-4 line-clamp-2">
                            {project.description}
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-secondary to-transparent" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-accent text-accent-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col bg-secondary text-slate-100">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover rounded-lg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-4">
                        {typeof project.description === 'string' ? (
                          <p className="text-slate-300">{project.description}</p>
                        ) : (
                          <div className="text-slate-300">{project.description}</div>
                        )}
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2 text-slate-300">
                          <Users className="h-4 w-4" />
                          <span className="font-medium text-slate-100">Rolle:</span> {project.role}
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <Building className="h-4 w-4" />
                          <span className="font-medium text-slate-100">Klient:</span> {project.client}
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium text-slate-100">Når:</span> {project.year}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-accent text-accent-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  )
} 