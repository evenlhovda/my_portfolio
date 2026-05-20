'use client'

import { Button } from "@/components/ui/button"

interface DemoButtonProps {
  projectId?: number;
  demoUrl?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function DemoButton({ projectId, demoUrl, onClick }: DemoButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (projectId === 8) {
      if (typeof window !== 'undefined' && window.Chatbot?.open) {
        window.Chatbot.open()
      }
    } else if (onClick) {
      onClick(e)
    } else if (demoUrl) {
      window.location.href = demoUrl
    }
  }

  return (
    <Button variant="accent" size="sm" onClick={handleClick}>
      {projectId === 8 ? 'Chat med Rune' : 'Prøv demo'}
    </Button>
  )
}
