'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Card } from "@/components/ui/card"
import { ContrastButton } from "@/components/ui/button-variants"
import { Upload, FileText, Loader2, Building2, CreditCard, Receipt } from 'lucide-react'
import { useState } from 'react'
import { ConfirmationModal } from "@/components/ui/confirmation-modal"

interface InvoiceData {
  KID: number;
  Fakturanummer: number;
  Konto: string;
  Sum: number;
  Valuta: string;
  MVA: number;
  Avsender_Mva_nr: string;
  Avsender: string;
  Forfallsdato: string;
}

interface AnalysisResult {
  json: InvoiceData;
  question: string;
  chatId: string;
  chatMessageId: string;
  isStreamValid: boolean;
  sessionId: string;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

export default function PdfAnalysisPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile && selectedFile.type === 'application/pdf') {
      if (selectedFile.size > MAX_FILE_SIZE) {
        setError('Filen er for stor. Maksimal størrelse er 10MB')
        setFile(null)
        return
      }
      setFile(selectedFile)
      setError(null)
    } else {
      setError('Vennligst velg en gyldig PDF-fil')
      setFile(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === 'application/pdf') {
      if (droppedFile.size > MAX_FILE_SIZE) {
        setError('Filen er for stor. Maksimal størrelse er 10MB')
        setFile(null)
        return
      }
      setFile(droppedFile)
      setError(null)
    } else {
      setError('Vennligst velg en gyldig PDF-fil')
      setFile(null)
    }
  }

  const analyzePdf = async () => {
    if (!file) return

    setIsLoading(true)
    setError(null)

    try {
      // Step 1: Create attachment
      const formData = new FormData()
      formData.append('files', file)

      const attachmentResponse = await fetch(
        'https://flowise-p9jk.onrender.com/api/v1/attachments/da6f6f1d-c43c-47d5-b54c-807b02c814c7/default-session',
        {
          method: 'POST',
          body: formData
        }
      )

      if (!attachmentResponse.ok) {
        throw new Error('Failed to upload file')
      }

      const [attachment] = await attachmentResponse.json()
      console.log('Attachment created:', attachment)

      // Step 2: Send prediction request with file content
      const requestBody = {
        question: "Please analyze this invoice",
        uploads: [{
          type: "file:full",
          name: file.name,
          data: attachment.content,
          mime: "application/pdf"
        }]
      }

      console.log('Sending prediction request...')

      const predictionResponse = await fetch(
        'https://flowise-p9jk.onrender.com/api/v1/prediction/da6f6f1d-c43c-47d5-b54c-807b02c814c7',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody)
        }
      )

      if (!predictionResponse.ok) {
        throw new Error(`Failed to analyze PDF: ${predictionResponse.status} ${predictionResponse.statusText}`)
      }

      const data = await predictionResponse.json()
      console.log('Full response data:', JSON.stringify(data, null, 2))
      setResult(data)
      setIsLoading(false)

    } catch (err) {
      console.error('Error in analyzePdf:', err)
      setError(err instanceof Error ? err.message : 'An error occurred while processing the PDF')
      setIsLoading(false)
    }
  }

  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto space-y-12">
        <h1 className="text-4xl font-bold tracking-tighter text-slate-100 sm:text-5xl">
          Randi Fakturaansvarlig
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Upload Section */}
          <Card className="p-6 bg-secondary border-secondary">
            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              Last opp faktura
            </h2>
            <div className="space-y-4">
              <div 
                className="border-2 border-dashed border-accent rounded-lg p-8 text-center transition-colors duration-200 hover:bg-accent/5"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="pdf-upload"
                />
                <label
                  htmlFor="pdf-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <Upload className="h-8 w-8 text-contrast" />
                  <span className="text-slate-300">
                    Klikk for å laste opp eller dra og slipp
                  </span>
                  <span className="text-sm text-slate-400">
                    Kun PDF-filer
                  </span>
                </label>
              </div>

              {file && (
                <div className="flex items-center gap-2 text-slate-300">
                  <FileText className="h-4 w-4" />
                  <span>{file.name}</span>
                </div>
              )}

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <ContrastButton
                onClick={analyzePdf}
                disabled={!file || isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyserer...
                  </>
                ) : (
                  'Analyser faktura'
                )}
              </ContrastButton>
            </div>
          </Card>

          {/* Results Section */}
          <Card className="p-6 bg-secondary border-secondary">
            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              Fakturadetaljer
            </h2>
            {result ? (
              <div className="space-y-6">
                {/* Sender Information */}
                <div className="bg-accent/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-contrast mb-3">
                    <Building2 className="h-4 w-4" />
                    <h3 className="text-sm font-medium">Avsender</h3>
                  </div>
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Selskap</span>
                      <span className="font-medium text-slate-200">{result.json.Avsender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">MVA-nummer</span>
                      <span className="font-medium text-slate-200">{result.json.Avsender_Mva_nr}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Details (previously Financial Details) */}
                <div className="bg-accent/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-contrast mb-3">
                    <Receipt className="h-4 w-4" />
                    <h3 className="text-sm font-medium">Betaling</h3>
                  </div>
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Beløp</span>
                      <span className="font-medium text-slate-200">
                        {result.json.Sum.toLocaleString('nb-NO')} {result.json.Valuta}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">MVA</span>
                      <span className="font-medium text-slate-200">
                        {result.json.MVA.toLocaleString('nb-NO')} {result.json.Valuta}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invoice Details (previously Payment Details) */}
                <div className="bg-accent/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-contrast mb-3">
                    <CreditCard className="h-4 w-4" />
                    <h3 className="text-sm font-medium">Fakturadetaljer</h3>
                  </div>
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Kontonummer</span>
                      <span className="font-medium text-slate-200">{result.json.Konto}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">KID-nummer</span>
                      <span className="font-medium text-slate-200">{result.json.KID}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Fakturanummer</span>
                      <span className="font-medium text-slate-200">{result.json.Fakturanummer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Forfallsdato</span>
                      <span className="font-medium text-slate-200">
                        {new Date(result.json.Forfallsdato).toLocaleDateString('nb-NO', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <ContrastButton 
                  onClick={() => setShowConfirmation(true)}
                  className="w-full"
                >
                  Legg til i betalinger
                </ContrastButton>
              </div>
            ) : (
              <div className="text-slate-300 text-center py-8">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Last opp en PDF og klikk analyser for å se fakturadetaljer her.</p>
              </div>
            )}
          </Card>

          <ConfirmationModal 
            isOpen={showConfirmation} 
            onClose={() => setShowConfirmation(false)} 
          />
        </div>

        {/* Info Section */}
        <div className="w-full">
          <Card className="p-6 bg-secondary/50 border-secondary">
            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              Om Randi
            </h2>
            <div className="prose prose-invert prose-sm max-w-none opacity-80 space-y-8">
              <div>
                <h3 className="text-lg font-medium text-slate-200 mb-2">Oppgave</h3>
                <p>
                  Randi Fakturaansvarlig har i oppgave å ta i mot, lese ut bestemt info fra fakturaer og returnere denne informasjonen i format som er egnet for dele med andre tjenester, som feks et betalingssystem, en database eller lignende.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-slate-200 mb-2">Bruksområder</h3>
                <p>
                  Randi kan brukes som ett av flere ledd i en større organisasjon, feks kan Mina Mail-assistent ha i oppgave å lese mailer sendt til selskapet og sortere alle mailer som gjelder salg til Solveig Salgssjef, fakturaer til Randi og produkt-input til Pål Produktsjef.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-slate-200 mb-2">Teknologi</h3>
                <p>
                  Randi er bygget på LangChain-rammeverket med Flowise, og bruker for tiden språkmodellen &apos;gpt-4o-mini&apos; som sin hjerne. Dette er en billig modell, som har visse begrensninger. Ønsker du å teste Randi hva Randi kan få til når hun har den siste og beste språkmodellen fra Open AI, ta kontakt.
                </p>
              </div>

              <div className="pt-4">
                <ContrastButton 
                  onClick={() => window.location.href = 'mailto:even@evenlhovda.com'}
                  className="w-full sm:w-auto"
                >
                  Ta kontakt for demo
                </ContrastButton>
              </div>
            </div>
          </Card>
        </div>

        <ConfirmationModal 
          isOpen={showConfirmation} 
          onClose={() => setShowConfirmation(false)} 
        />
      </div>
    </SiteLayout>
  )
} 