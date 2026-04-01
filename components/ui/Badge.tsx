import { cn } from "@/lib/utils";

type BadgeVariant = "brand" | "amber" | "green" | "blue" | "gray";

const variants: Record<BadgeVariant, string> = {
  brand: "bg-brand-500/10 text-brand-400 border-brand-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  blue:  "bg-sky-500/10 text-sky-400 border-sky-500/20",
  gray:  "bg-white/5 text-gray-400 border-white/10",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "brand", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
