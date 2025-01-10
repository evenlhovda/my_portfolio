'use client'

interface DemoButtonProps {
  projectId?: number;
  demoUrl?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function DemoButton({ projectId, demoUrl, onClick }: DemoButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    
    if (projectId === 8) {
      // Rune chat
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
    <button 
      onClick={handleClick}
      className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-contrast text-contrast-foreground shadow hover:bg-contrast/90 h-8 rounded-md px-3"
    >
      {projectId === 8 ? 'Chat med Rune' : 'Prøv demo'}
    </button>
  )
} 