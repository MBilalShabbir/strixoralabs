"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  Variant;
  size?:     Size;
  isLoading?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: cn(
    "bg-brand-600 text-white",
    "shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_1px_2px_rgba(0,0,0,.4)]",
    "hover:bg-brand-500",
    "hover:shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_0_0_1px_rgba(99,102,241,.4),0_4px_16px_rgba(99,102,241,.28)]",
    "active:bg-brand-700 active:shadow-none active:scale-[0.985]"
  ),
  secondary: cn(
    "bg-white/5 text-white/70 hover:text-white",
    "border border-white/10 hover:border-white/18",
    "shadow-[inset_0_1px_0_rgba(255,255,255,.05)]",
    "hover:bg-white/8"
  ),
  ghost: cn(
    "text-white/50 hover:text-white",
    "hover:bg-white/6"
  ),
  outline: cn(
    "border border-brand-500/35 text-brand-400",
    "hover:bg-brand-500/8 hover:border-brand-400/60"
  ),
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-1.5 text-[13px] gap-1.5 rounded-lg",
  md: "px-5 py-2 text-[13.5px] gap-2 rounded-xl",
  lg: "px-6 py-3 text-[15px] gap-2.5 rounded-xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-semibold",
          "transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-3.5 w-3.5 opacity-70"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing…
          </>
        ) : children}
      </button>
    );
  }
);

Button.displayName = "Button";
