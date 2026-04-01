"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Animation variants ── */
const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/* ── Stats ── */
const stats = [
  { value: "50+",  label: "Products shipped" },
  { value: "£2M+", label: "Daily Fintech volume" },
  { value: "98%",  label: "Client retention" },
  { value: "< 48h",label: "Brief to proposal" },
];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Layered background ── */}
      {/* 1. Base */}
      <div className="absolute inset-0 bg-[#080810]" />

      {/* 2. Aurora / glow */}
      <div
        className="absolute inset-x-0 top-0 h-[70vh] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(99,102,241,.2) 0%, rgba(139,92,246,.08) 45%, transparent 70%)",
        }}
      />

      {/* 3. Subtle left spotlight */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at 0% 30%, rgba(99,102,241,.06), transparent 60%)",
        }}
      />

      {/* 4. Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      {/* 5. Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080810] to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow chip */}
          <motion.div variants={item}>
            <div className="chip mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
              Senior-only · Selective · Currently available
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className={cn(
              "max-w-[16ch] text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold tracking-tighter leading-[1.04]",
              "text-white text-balance"
            )}
          >
            We build software your competitors{" "}
            <span className="text-gradient">can't replicate.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="mt-6 max-w-[52ch] text-[clamp(1rem,1.5vw,1.2rem)] text-white/45 leading-[1.7] text-balance"
          >
            Strixora Labs is a senior-only engineering firm specialising in AI systems,
            Fintech infrastructure, and scalable product development. We take full
            ownership — from architecture to production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className={cn(
                "group inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                "text-[15px] font-semibold text-white",
                "bg-brand-600 hover:bg-brand-500",
                "transition-all duration-200",
                "shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_1px_3px_rgba(0,0,0,.5)]",
                "hover:shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_0_0_1px_rgba(99,102,241,.45),0_6px_20px_rgba(99,102,241,.3)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]"
              )}
            >
              Work with us
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/projects"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                "text-[15px] font-semibold text-white/65 hover:text-white",
                "border border-white/10 hover:border-white/18 bg-white/4 hover:bg-white/7",
                "transition-all duration-200",
                "shadow-[inset_0_1px_0_rgba(255,255,255,.05)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080810]"
              )}
            >
              See our work
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={item}
            className="mt-20 w-full max-w-[680px]"
          >
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-y-6">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={reduced ? {} : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease }}
                  className={cn(
                    "flex flex-col items-center gap-1",
                    // vertical dividers between items (desktop)
                    i > 0 && "sm:border-l sm:border-white/7"
                  )}
                >
                  <dt className="text-2xl font-bold text-white tracking-tight">{value}</dt>
                  <dd className="text-[11px] font-medium text-white/35 uppercase tracking-wider">{label}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
