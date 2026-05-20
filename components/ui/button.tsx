import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-fast ease-out-soft focus-visible:outline-none focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:     "bg-brand text-fg-inv hover:bg-brand-hover",
        accent:      "bg-sky-500 text-fg-inv hover:bg-sky-600",
        secondary:   "bg-mist text-fg-1 border border-line-2 hover:bg-slate-100",
        outline:     "bg-transparent text-sage-700 border border-sage-400 hover:bg-sage-50",
        ghost:       "bg-transparent text-sage-700 hover:bg-sage-50",
        link:        "text-sage-700 underline-offset-4 hover:underline",
        destructive: "bg-danger text-fg-inv hover:bg-danger/90",
      },
      size: {
        default: "h-10 rounded-md px-[18px] py-2.5 text-sm",
        sm:      "h-8 rounded-sm px-3 text-[13px]",
        lg:      "h-12 rounded-md px-6 text-[15px]",
        icon:    "h-9 w-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
