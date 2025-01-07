import { cn } from '@/lib/utils'

type IconName = 'ai' | 'data' | 'analytics' | 'settings'

interface IconProps {
  name: IconName
  className?: string
  size?: number
}

const iconPositions = {
  ai: '0 0',
  data: '-60px 0',
  analytics: '-120px 0',
  settings: '-180px 0',
}

export function Icon({ name, className, size = 40 }: IconProps) {
  return (
    <div 
      className={cn('relative inline-block', className)}
      style={{ 
        width: size, 
        height: size,
        backgroundImage: 'url(/icons/design-system-icons.svg)',
        backgroundPosition: iconPositions[name],
        backgroundSize: '240px 60px',
        backgroundRepeat: 'no-repeat'
      }}
    />
  )
} 