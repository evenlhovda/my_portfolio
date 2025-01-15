'use client'

import { useState, useRef } from "react"
import { SiteLayout } from "@/components/layout/site-layout"
import { Card } from "@/components/ui/card"
import { PrimaryButton } from "@/components/ui/button-variants"
import { Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from 'lucide-react'
import { User } from 'lucide-react'
import { ConfirmationModal } from "@/components/ui/confirmation-modal"
import Image from "next/image"

const previousFeedback = [
  {
    id: 1,
    title: "Mangler dark mode",
    snippet: "Det hadde vært fint med en dark mode. Appen er veldig lys på kvelden.",
    sender: "Lola Lollipop",
    role: "Skomaker, Din Støvel AS",
    email: "lollipop@example.com",
    date: "2025-01-10",
    tags: ["UI/UX", "Dark mode"]
  },
  {
    id: 2,
    title: "Forslag til forbedring av dashboard",
    snippet: "Kunne vi fått flere widgets på dashbordet? Spesielt interessert i å se flere grafer.",
    sender: "Wolf Resenlund",
    role: "Butikksjef, Resenlunds raketter ASA",
    email: "wore@example.com",
    date: "2024-12-09",
    tags: ["Dashboard", "Widgets", "Grafer"]
  }
]

export default function EmailAnalysisPage() {
  const [title, setTitle] = useState("Fantastisk lasersverd, men trenger litt veiledning")
  const [body, setBody] = useState("Kjære support-team, kraften i deres lasersverd er virkelig imponerende, det er det beste verktøyet jeg noensinne har brukt! Spesielt liker jeg balansen i håndtaket og den strålende grønne lysstrålen – det føles som om sverdet er en forlengelse av min egen vilje. Imponerende håndverk, det er! Men en utfordring møter jeg, ja. Bruksanvisningen nevner en meditasjonsmodus for å kalibrere sverdet med min indre kraft, men jeg finner ikke ut hvordan jeg aktiverer denne funksjonen. Kan dere forklare hvordan jeg bruker denne modusen? Takknemlig er jeg for deres fantastiske produkter og hjelp. Med vennlig hilsen, Yoda 🧘")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const resultsRef = useRef<HTMLDivElement>(null)

  const analyzeEmail = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://flowise-p9jk.onrender.com/api/v1/prediction/c75c8149-8648-4ac8-9ff5-7b74c1b43b80', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: `Tittel: ${title}\n\nTekst: ${body}`
        }),
      })

      const data = await response.json()
      
      // Parse the JSON string from the text property
      const parsedData = JSON.parse(data.text.replace(/```json\n|\n```/g, ''))
      console.log('Parsed data:', parsedData)
      
      setResult(parsedData)

      // Scroll to results after a short delay to ensure rendering is complete
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)

    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleButtonClick = (action: string) => {
    setModalMessage(`Dette er en demo. ${action} er ikke implementert enda.`)
    setShowModal(true)
  }

  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-4 md:grid md:grid-cols-[2fr,1fr] md:gap-8 md:items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-slate-100">
                Mina Mailassistent
              </h1>
              <p className="text-slate-300">
                Mina tar imot mailer, plukker ut relevant info og legger det inn i selskapets dedikerte systemer. 
                Prøv å sende henne mail og test selv! 👇
              </p>
              <p className="text-slate-300">
                Mina har foreløpig tilgang til følgende systemer:
                <ul className="list-disc pl-5 mb-2">
                  <li>Product Feedback System</li>
                  <li>Support System</li>
                </ul>
              </p>
              <p className="text-slate-300">
                Bygget med Flowise.
              </p>
            </div>
            <div className="relative aspect-square w-64 md:w-80 mx-auto md:ml-auto">
              <Image
                src="/images/mina-mailassistent.jpg"
                alt="Mina Mailassistent"
                fill
                className="object-cover border-4 border-accent/10"
              />
            </div>
          </div>

          <Card className="p-6 space-y-4 bg-secondary border-secondary">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-slate-300">
                Tittel
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded-md bg-secondary border border-accent/20 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Fantastisk lasersverd, men trenger litt veiledning"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="body" className="block text-sm font-medium text-slate-300">
                Tekst
              </label>
              <textarea
                id="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={6}
                className="w-full p-2 rounded-md bg-secondary border border-accent/20 text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Kjære support-team,

Kraften i deres lasersverd er virkelig imponerende, det er det beste verktøyet jeg noensinne har brukt! Spesielt liker jeg balansen i håndtaket og den strålende grønne lysstrålen – det føles som om sverdet er en forlengelse av min egen vilje. Imponerende håndverk, det er!

Men en utfordring møter jeg, ja. Bruksanvisningen nevner en meditasjonsmodus for å kalibrere sverdet med min indre kraft, men jeg finner ikke ut hvordan jeg aktiverer denne funksjonen. Kan dere forklare hvordan jeg bruker denne modusen?

Takknemlig er jeg for deres fantastiske produkter og hjelp.

Med vennlig hilsen,
Yoda"
              />
            </div>

            <PrimaryButton 
              onClick={analyzeEmail} 
              disabled={isLoading || !title || !body}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Mina pønsjer inn i systemene...
                </>
              ) : (
                'Send'
              )}
            </PrimaryButton>
          </Card>

          {result && (
            <div ref={resultsRef} className="grid md:grid-cols-2 gap-8">
              {/* Product Feedback System */}
              {result.main_category.product_feedback.relevance_score >= 0.0 && (
                <Card className="p-6 space-y-6 bg-secondary/50 border-accent/10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-accent/10 pb-4">
                      <h2 className="text-xl font-semibold text-slate-100">
                        Produkt Feedback System
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {/* New feedback from email */}
                      <div className="border-b border-accent/10 pb-4 bg-orange-500/5 -mx-6 -mt-6 p-6 rounded-t">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-slate-400">
                            {new Date().toLocaleDateString('no-NO')}
                          </span>
                          <Badge variant="secondary" className="bg-accent/20">
                            Relevans: {Math.round(result.main_category.product_feedback.relevance_score * 100)}%
                          </Badge>
                        </div>
                        <h3 className="font-medium text-slate-200 mb-2">
                          {result.main_category.product_feedback.generated_header}
                        </h3>
                        <p className="text-sm text-slate-300 mb-3">
                          &ldquo;{result.main_category.product_feedback.selected_content_snippet}&rdquo;
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {result.main_category.product_feedback.sub_categories.map((tag: string) => (
                            <Badge key={tag} variant="outline" className="text-xs capitalize bg-orange-500/10 text-orange-200 border-orange-500/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <User className="h-4 w-4" />
                            <span>Jens Jenssen, Daglig leder</span>
                          </div>
                          <button 
                            onClick={() => handleButtonClick("Link til idé-systemet")}
                            className="text-sm px-3 py-1.5 rounded bg-orange-500/10 text-orange-200 hover:bg-orange-500/20 transition-colors"
                          >
                            Link til Idé
                          </button>
                        </div>
                      </div>

                      {/* Previous feedback */}
                      {previousFeedback.map(feedback => (
                        <div key={feedback.id} className="border-b border-accent/10 pb-4">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-sm text-slate-400">
                              {new Date(feedback.date).toLocaleDateString('no-NO')}
                            </span>
                          </div>
                          <h3 className="font-medium text-slate-200 mb-2">{feedback.title}</h3>
                          <p className="text-sm text-slate-300 mb-3">&ldquo;{feedback.snippet}&rdquo;</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {feedback.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs capitalize bg-orange-500/10 text-orange-200 border-orange-500/20">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <User className="h-4 w-4" />
                            <span>{feedback.sender}, {feedback.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )}

              {/* Support System */}
              {result.main_category.support_inquiries.relevance_score >= 0.3 && (
                <Card className="p-6 space-y-6 bg-slate-900/50 border-red-500/10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-red-500/10 pb-4">
                      <h2 className="text-xl font-semibold text-slate-100">
                        Support System
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3 text-sm text-slate-300">
                        <div className="flex items-center gap-3">
                          <User className="h-4 w-4" />
                          <div>
                            <p className="font-medium">Jens Jenssen</p>
                            <p className="text-slate-400">Daglig leder, Jenssen & Co AS</p>
                            <p className="text-slate-400">jens@example.com</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-200 border-0">Åpen</Badge>
                      </div>

                      <div className="p-4 rounded bg-slate-950 border border-red-500/10 space-y-3">
                        <div className="text-sm text-slate-300 bg-slate-900/50 p-3 rounded border border-red-500/5">
                          &ldquo;{result.main_category.support_inquiries.selected_content_snippet}&rdquo;
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {result.main_category.support_inquiries.sub_categories.map((tag: string) => (
                            <Badge key={tag} variant="outline" className="text-xs capitalize bg-purple-500/10 text-purple-200 border-purple-500/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Collapsible className="w-full">
                        <CollapsibleTrigger className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-300">
                          <ChevronDown className="h-4 w-4" />
                          Vis original epost
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2">
                          <div className="p-3 rounded bg-slate-950 border border-red-500/10 space-y-2">
                            <div className="text-sm text-slate-400">
                              <p>Fra: Jens Jenssen</p>
                              <p>Daglig leder, Jenssen & Co AS</p>
                              <p>jens@example.com</p>
                            </div>
                            <p className="font-medium text-slate-300">{result.metadata.original_title}</p>
                            <p className="text-sm text-slate-400 whitespace-pre-line">{result.metadata.original_body}</p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>

                      <div className="flex items-center justify-between mt-4">
                        <button 
                          onClick={() => handleButtonClick("Svar-funksjonen")}
                          className="text-sm px-4 py-2 rounded bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 transition-colors font-medium"
                        >
                          Svar
                        </button>
                        <button 
                          onClick={() => handleButtonClick("Tildel ansvar-funksjonen")}
                          className="text-sm px-4 py-2 rounded border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
                        >
                          Tildel ansvar
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>

      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </SiteLayout>
  )
} 