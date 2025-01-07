import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"
import { ReactNode } from "react"

interface CustomButtonProps extends ButtonProps {
  children: ReactNode
}

export const PrimaryButton = ({ children, className, ...props }: CustomButtonProps) => (
  <Button 
    className={`bg-primary hover:bg-primary-hover text-white ${className}`}
    {...props}
  >
    {children}
  </Button>
)

export const ContrastButton = ({ children, className, ...props }: CustomButtonProps) => (
  <Button 
    className={`bg-contrast hover:bg-contrast-hover text-white ${className}`}
    {...props}
  >
    {children}
  </Button>
)

export const SecondaryButton = ({ children, className, ...props }: CustomButtonProps) => (
  <Button 
    variant="secondary"
    className={`bg-secondary hover:bg-secondary/80 text-secondary-foreground ${className}`}
    {...props}
  >
    {children}
  </Button>
)

export const OutlineContrastButton = ({ children, className, ...props }: CustomButtonProps) => (
  <Button 
    variant="outline"
    className={`border-contrast text-contrast hover:bg-contrast/10 ${className}`}
    {...props}
  >
    {children}
  </Button>
) 