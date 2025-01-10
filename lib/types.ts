import { ReactNode } from 'react'

export type Project = {
  id: number
  title: string
  description: string | React.ReactNode
  image: string
  tags: string[]
  role: string
  year: string
  client: string
  demoUrl?: string
} 