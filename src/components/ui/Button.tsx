import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react"
import { cn } from "../../lib/utils"

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "light"
  size?: "sm" | "md" | "lg"
}

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { 
  href?: never;
  ref?: React.Ref<HTMLButtonElement>;
}
type ButtonAsAnchor = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { 
  href: string;
  ref?: React.Ref<HTMLAnchorElement>;
}

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

export const Button = (props: ButtonProps) => {
  const { className, variant = "primary", size = "md" } = props

  const variants = {
    primary: "bg-brand text-white hover:bg-brand-dark shadow-md shadow-brand/10",
    secondary: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
    ghost: "text-zinc-600 hover:text-brand hover:bg-brand/5",
    light: "bg-brand/10 text-brand hover:bg-brand/20",
  }

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  }

  const baseStyles = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  )

  if (props.href) {
    const { href, ref, ...anchorProps } = props
    return (
      <a
        ref={ref}
        href={href}
        className={baseStyles}
        {...anchorProps}
      />
    )
  }

  const { ref, ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      ref={ref}
      className={baseStyles}
      {...buttonProps}
    />
  )
}

Button.displayName = "Button"
