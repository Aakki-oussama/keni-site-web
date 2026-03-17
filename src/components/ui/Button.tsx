import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "light" | "pill";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    ref?: React.Ref<HTMLButtonElement>;
  };
type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    ref?: React.Ref<HTMLAnchorElement>;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = (props: ButtonProps) => {
  const { className, variant = "primary", size = "md", icon } = props;

  const variants = {
    primary:
      "bg-brand text-white hover:bg-brand-dark shadow-md shadow-brand/10",
    secondary: "bg-zinc-900 text-white hover:bg-zinc-800",
    outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
    ghost: "text-zinc-600 hover:text-brand hover:bg-brand/5",
    light: "bg-brand/10 text-brand hover:bg-brand/20",
    pill: "bg-brand text-white hover:bg-brand-dark",
  };

  const sizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  // ─── PILL VARIANT ───────────────────────────────────────────
  if (variant === "pill") {
    const pillStyles = cn(
      "inline-flex items-center rounded-full py-1.5 pe-1.5 transition-all duration-300 active:scale-[0.98] group",
      variants.pill,
      className,
    );

    const content = (
      <span className="flex items-center gap-4">
        {/* Texte — hover: légèrement transparent */}
        <span
          className={cn(
            "ps-6 font-marcellus transition-opacity duration-300 group-hover:opacity-90",
            sizes[size],
          )}
        >
          {props.children}
        </span>

        {/* Cercle icône — hover: plus clair */}
        {icon && (
          <span
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
              "bg-brand-foncer group-hover:bg-white",
              "transition-all duration-300",
              "group-hover:scale-110",
              "text-white group-hover:text-brand-foncer",
            )}
          >
            {icon}
          </span>
        )}
      </span>
    );

    if (props.href) {
      const { href, ref, ...anchorProps } = props;
      return (
        <a ref={ref} href={href} className={pillStyles} {...anchorProps}>
          {content}
        </a>
      );
    }

    const { ref, ...buttonProps } = props as ButtonAsButton;
    return (
      <button ref={ref} className={pillStyles} {...buttonProps}>
        {content}
      </button>
    );
  }

  // ─── NORMAL VARIANTS ────────────────────────────────────────
  const baseStyles = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (props.href) {
    const { href, ref, ...anchorProps } = props;
    return <a ref={ref} href={href} className={baseStyles} {...anchorProps} />;
  }

  const { ref, ...buttonProps } = props as ButtonAsButton;
  return <button ref={ref} className={baseStyles} {...buttonProps} />;
};

Button.displayName = "Button";
