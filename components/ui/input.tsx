'use client';
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  error?: string;
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, error, ...props }, ref,) => {
    const [isFocused, setIsFocused] = React.useState(false);
    return (
      <div className={cn("flex items-center gap-x-3  border-2  rounded-lg px-4 py-3 ",
        isFocused && 'border-purple focused',
        !isFocused && 'border-border-color',
        error && 'border-red')}>
        {icon}
        <input
          type={type}
          className={cn(
            "flex w-full rounded-md border-none outline-none  body-m bg-transparent file:bg-transparent text-dark-grey  placeholder:text-dark-grey/50  disabled:cursor-not-allowed disabled:opacity-50 ",
            error && 'text-red',
            className
          )}
          ref={ref}
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <span className="body-s shrink-0 text-red">{error}</span>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
