'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { Calendar, Users, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Bryne Kitefestival",
      description: "Det som startet med 3 venner som dro til danmark for å kite, er nå en festival med 50+ årlige deltagere.",
      image: "/images/snowkiter.jpg",
      tags: ["Sport", "Community", "Event"],
      role: "Medarrangør & økonomiansvarlig",
      year: "2021-",
      client: "Bryne Kitefestival",
      contributors: [
        { name: "Ole Jørgen Grønli", image: "/placeholder.svg" },
        { name: "Nora Markussen", image: "/placeholder.svg" },
      ]
    },
    {
      id: 2,
      title: '"Strava for motorsyklister" – app for MC-miljøet i Norge',
      description: "En digitalt samlingssted for motorsyklister å planlegge turer, bygget på lavkodeplattformen Bubble",
      image: "/placeholder.svg",
      tags: ["Innovasjon og validering", "Lavkodeutvikling"],
      role: "Technical Lead",
      year: "2021-2023",
      client: "NAF - Norges Automobil Forbund",
      contributors: [
        { name: "Christer Dalsbøe", image: "/placeholder.svg" },
        { name: "Ole Jørgen Grønli", image: "/placeholder.svg" },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container px-4 py-24 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Even Lømo Hovda
              </h1>
              <div className="space-y-4">
                <p className="text-2xl font-semibold text-orange-600">
                  Innovasjon og digital produkter
                </p>
                <p className="text-xl text-muted-foreground">
                  Brenner for å skape gode opplevelser og produkter som løser relle problemer. Fokus på utforske behov og raskt validere løsningsforslag. Aller helst med no code verktøy og AI.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/Profilbilde_lue_rund2.png"
                  alt="Even Lømo Hovda"
                  className="object-cover rounded-full border-4 border-orange-200"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container px-4 py-12 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:bg-muted/50 transition-colors border border-orange-200">
                    <CardHeader className="relative aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover rounded-t-lg"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
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
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span className="font-medium">Client:</span> {project.client}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">Timeline:</span> {project.year}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Contributors</h3>
                        <div className="flex gap-2">
                          {project.contributors.map((contributor, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="relative w-8 h-8">
                                <Image
                                  src={contributor.image}
                                  alt={contributor.name}
                                  className="rounded-full"
                                  fill
                                  sizes="32px"
                                />
                              </div>
                              <span className="text-sm">{contributor.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
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

        {/* Get in Touch Section */}
        <section className="container px-4 py-12 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">Get in Touch</h2>
          <Card className="border border-orange-200">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-200 bg-orange-50">
        <div className="container px-4 py-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
