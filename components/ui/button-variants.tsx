import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface CustomButtonProps extends ButtonProps {
  children: ReactNode
}

// Sage primary — the main CTA.
export const PrimaryButton = ({ children, className, ...props }: CustomButtonProps) => (
  <Button variant="default" className={cn(className)} {...props}>
    {children}
  </Button>
)

// Sky accent — high-impact alternative action.
export const ContrastButton = ({ children, className, ...props }: CustomButtonProps) => (
  <Button variant="accent" className={cn(className)} {...props}>
    {children}
  </Button>
)

// Mist surface — quiet, recessive action.
export const SecondaryButton = ({ children, className, ...props }: CustomButtonProps) => (
  <Button variant="secondary" className={cn(className)} {...props}>
    {children}
  </Button>
)

// Sage outline — used for footer icon buttons + secondary CTAs.
export const OutlineContrastButton = ({ children, className, ...props }: CustomButtonProps) => (
  <Button variant="outline" className={cn(className)} {...props}>
    {children}
  </Button>
)
