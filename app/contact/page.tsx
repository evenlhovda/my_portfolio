'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, MapPin, Phone, Loader2 } from 'lucide-react'
import { ContrastButton } from "@/components/ui/button-variants"
import { useState, FormEvent, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// Validation helpers
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const RATE_LIMIT_MINUTES = 5

export default function ContactPage() {
  useEffect(() => {
    emailjs.init('nprKvlm3Y4eEppTnj')
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Vennligst fyll inn navnet ditt')
      return false
    }
    
    if (!formData.email.trim()) {
      setErrorMessage('Vennligst fyll inn e-postadressen din')
      return false
    }
    
    if (!isValidEmail(formData.email)) {
      setErrorMessage('Vennligst oppgi en gyldig e-postadresse')
      return false
    }
    
    if (formData.message.trim().length < 10) {
      setErrorMessage('Meldingen må være minst 10 tegn')
      return false
    }

    // Check rate limit
    const lastSubmission = localStorage.getItem('lastSubmission')
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission)
      const minutesSinceLastSubmission = timeSinceLastSubmission / (1000 * 60)
      
      if (minutesSinceLastSubmission < RATE_LIMIT_MINUTES) {
        setErrorMessage(`Vennligst vent ${Math.ceil(RATE_LIMIT_MINUTES - minutesSinceLastSubmission)} minutter før du sender en ny melding`)
        return false
      }
    }

    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    
    if (!validateForm()) {
      return
    }

    setStatus('loading')

    try {
      await emailjs.send(
        'service_q881s4s',
        'template_ylwsquo',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Even L Hovda',
        },
        'nprKvlm3Y4eEppTnj'
      )

      // Store submission timestamp for rate limiting
      localStorage.setItem('lastSubmission', Date.now().toString())

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setErrorMessage('Beklager, noe gikk galt. Prøv igjen senere eller send meg en epost direkte.')
      
      setTimeout(() => {
        setStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  return (
    <SiteLayout>
      <div className="container px-4 py-16 mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter text-slate-100 sm:text-5xl mb-12">
          La oss ta en prat
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-secondary border-secondary">
              <h2 className="text-2xl font-semibold text-slate-100 mb-6">
                Kontaktinformasjon
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:evenlhovda+web@gmail.com" className="hover:text-slate-100">
                    evenlhovda@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+4792223344" className="hover:text-slate-100">
                    +47 922 23 344
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Stavanger, Norge</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/evenhovda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-slate-100"
                  >
                    linkedin.com/in/evenhovda
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-secondary border-secondary">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4">
                Interessert i en prat?
              </h2>
              <p className="text-slate-300 mb-6">
                Ta gjerne kontakt for en uforpliktende prat om hvordan jeg kan bidra til ditt prosjekt.
              </p>
              <ContrastButton asChild>
                <a 
                  href="mailto:evenlhovda+web@gmail.com"
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Send meg en mail
                </a>
              </ContrastButton>
            </Card>
          </div>

          {/* Updated Contact Form */}
          <Card className="p-6 bg-secondary border-secondary">
            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              Send meg en melding
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-accent rounded-md text-slate-100"
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-accent rounded-md text-slate-100"
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                  Melding
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-accent rounded-md text-slate-100"
                  disabled={status === 'loading'}
                ></textarea>
              </div>
              
              {errorMessage && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}
              
              {status === 'success' && (
                <p className="text-green-400 text-sm">Meldingen din er sendt! Jeg tar kontakt snart.</p>
              )}

              <ContrastButton 
                type="submit" 
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sender...
                  </>
                ) : (
                  'Send melding'
                )}
              </ContrastButton>
            </form>
          </Card>
        </div>
      </div>
    </SiteLayout>
  )
} 