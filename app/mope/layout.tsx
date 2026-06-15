'use client'

import { Syne, DM_Mono } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-mono',
})

export default function MopeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${syne.variable} ${dmMono.variable}`}>
      {children}
    </div>
  )
}
