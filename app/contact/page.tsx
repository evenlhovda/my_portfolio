'use client'

import { SiteLayout } from "@/components/layout/site-layout"
import { Divider } from "@/components/ui/divider"
import { Mail, Linkedin, MapPin, Loader2, Check } from 'lucide-react'
import { PrimaryButton } from "@/components/ui/button-variants"
import { useState, FormEvent, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const RATE_LIMIT_MINUTES = 5

const inputClasses =
  "w-full rounded-[8px] border border-line-2 bg-page px-3 py-2.5 text-sm text-fg-1 transition-[border,box-shadow] duration-fast ease-out-soft placeholder:text-fg-3 focus:border-sage-500 focus:shadow-focus focus:outline-none disabled:opacity-60"

export default function ContactPage() {
  useEffect(() => {
    emailjs.init('nprKvlm3Y4eEppTnj')
  }, [])

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
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
    const lastSubmission = localStorage.getItem('lastSubmission')
    if (lastSubmission) {
      const minutesSince = (Date.now() - parseInt(lastSubmission)) / (1000 * 60)
      if (minutesSince < RATE_LIMIT_MINUTES) {
        setErrorMessage(`Vennligst vent ${Math.ceil(RATE_LIMIT_MINUTES - minutesSince)} minutter før du sender en ny melding`)
        return false
      }
    }
    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setErrorMessage('')
    if (!validateForm()) return
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
      localStorage.setItem('lastSubmission', Date.now().toString())
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
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
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errorMessage) setErrorMessage('')
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-[1180px] px-8 py-12">
        <Divider>La oss ta en prat</Divider>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.1fr]">
          {/* Info column */}
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-line-2 bg-surface px-7 py-6 shadow-xs">
              <h3 className="mb-3.5 text-lg font-semibold tracking-snug text-fg-1">
                Kontaktinformasjon
              </h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 text-sm text-fg-2">
                <li className="flex items-center gap-3">
                  <Mail className="h-4.5 w-4.5 flex-shrink-0 text-sage-600" />
                  <a
                    href="mailto:evenlhovda+web@gmail.com"
                    className="border-b border-transparent text-fg-2 transition-colors hover:border-line-strong hover:text-fg-1"
                  >
                    evenlhovda@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4.5 w-4.5 flex-shrink-0 text-sage-600" />
                  <span>Oslo, Norge</span>
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="h-4.5 w-4.5 flex-shrink-0 text-sage-600" />
                  <a
                    href="https://www.linkedin.com/in/evenhovda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-transparent text-fg-2 transition-colors hover:border-line-strong hover:text-fg-1"
                  >
                    linkedin.com/in/evenhovda
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-line-2 bg-tint-sage px-7 py-6 shadow-xs">
              <h3 className="mb-3.5 text-lg font-semibold tracking-snug text-fg-1">
                Interessert i en prat?
              </h3>
              <p className="mb-5 text-sm leading-[1.6] text-fg-2">
                Jeg tar gjerne en prat om hvordan jeg kan hjelpe deg med ditt prosjekt.
              </p>
              <PrimaryButton asChild>
                <a href="mailto:evenlhovda+web@gmail.com">
                  <Mail className="h-4 w-4" /> Send meg en mail
                </a>
              </PrimaryButton>
            </div>
          </div>

          {/* Form column */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-3.5 rounded-lg border border-line-2 bg-surface px-7 py-6 shadow-xs"
          >
            <h3 className="mb-1.5 text-lg font-semibold tracking-snug text-fg-1">
              Send meg en melding
            </h3>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-semibold text-fg-1">Navn</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="Hva heter du?"
                className={inputClasses}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-semibold text-fg-1">E-post</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="din@adresse.no"
                className={inputClasses}
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[12.5px] font-semibold text-fg-1">Melding</span>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                placeholder="Hva slags problem ønsker du å løse?"
                className={`${inputClasses} resize-y`}
              />
            </label>

            {errorMessage && (
              <p className="m-0 rounded-sm bg-danger-bg px-2.5 py-2 text-[12.5px] text-[#863329]">
                {errorMessage}
              </p>
            )}

            {status === 'success' && (
              <p className="m-0 inline-flex items-center gap-1.5 rounded-sm bg-success-bg px-2.5 py-2 text-[12.5px] text-[#386B38]">
                <Check className="h-3.5 w-3.5" />
                Meldingen din er sendt — jeg tar kontakt snart.
              </p>
            )}

            <PrimaryButton type="submit" className="w-full" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sender…
                </>
              ) : (
                'Send melding'
              )}
            </PrimaryButton>
          </form>
        </div>
      </div>
    </SiteLayout>
  )
}
