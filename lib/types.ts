import { ReactNode } from 'react'

export interface Project {
  id: number
  title: string
  description: string | ReactNode
  image: string
  tags: string[]
  role: string
  year: string
  client: string
} 