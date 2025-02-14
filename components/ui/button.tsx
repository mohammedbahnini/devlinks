import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-w-[227px] whitespace-nowrap rounded-lg heading-s transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-25 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-purple text-white bg-purple  hover:bg-purple-hover",
        outline:
          "border border-[1px] border-purple bg-white hover:bg-light-grey text-purple "
      },
      size: {
        default: "h-auto px-4 py-3",
        sm: "h-auto  rounded-md px-3 text-xs",
        lg: "h-auto rounded-md px-8",
        icon: "h-9 w-9",
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
