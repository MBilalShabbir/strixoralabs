import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small eyebrow label above section headings.
 * Minimal — a subtle pill with a pulsing dot.
 */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2",
        "rounded-full border border-brand-500/18 bg-brand-500/7 px-3.5 py-1.5",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-300/80">
        {children}
      </span>
    </div>
  );
}
