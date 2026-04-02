"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  label:       string;
  headline:    React.ReactNode;
  subheadline: string;
  className?:  string;
  children?:   React.ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Shared hero section used across all inner pages.
 * Consistent background, grid, and animation — only copy varies.
 */
export function PageHero({ label, headline, subheadline, className, children }: PageHeroProps) {
  return (
    <section className={cn("relative pt-32 pb-20 overflow-hidden", className)}>
      {/* Aurora */}
      <div
        className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(99,102,241,.13) 0%, rgba(139,92,246,.05) 50%, transparent 70%)",
        }}
      />
      {/* Fine grid — adaptive via CSS class */}
      <div className="absolute inset-0 pointer-events-none grid-page" />
      {/* Bottom fade — fades to canvas color */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <SectionLabel className="mb-7">{label}</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold tracking-tighter leading-[1.06] text-ink text-balance mb-5"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease }}
          className="text-[clamp(.95rem,1.5vw,1.1rem)] text-ink/40 leading-relaxed max-w-[52ch] mx-auto text-balance"
        >
          {subheadline}
        </motion.p>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
