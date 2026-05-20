import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus-visible:shadow-focus",
  {
    variants: {
      variant: {
        default:   "bg-sage-100 text-sage-800",
        secondary: "bg-slate-100 text-slate-700",
        sky:       "bg-sky-100 text-sky-700",
        slate:   "bg-slate-100 text-slate-700",
        spring:  "bg-spring text-sage-800",
        outline: "bg-transparent text-fg-2 border border-line-2",
        solid:   "bg-sage-500 text-fg-inv",
        success: "bg-success-bg text-[#386B38]",
        warning: "bg-warning-bg text-[#815B22]",
        danger:  "bg-danger-bg text-[#863329]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
