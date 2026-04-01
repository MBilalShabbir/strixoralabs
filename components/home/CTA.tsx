"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="relative overflow-hidden rounded-3xl p-12 sm:p-20 text-center"
          style={{
            background: "linear-gradient(135deg, #0e0e1c 0%, #0a0a14 50%, #0c0c18 100%)",
            border: "1px solid rgba(99,102,241,.2)",
            boxShadow: "0 0 0 1px rgba(99,102,241,.06), 0 20px 60px rgba(0,0,0,.5)",
          }}
        >
          {/* Aurora blob */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(99,102,241,.18) 0%, rgba(139,92,246,.08) 45%, transparent 70%)",
            }}
          />
          {/* Top shimmer line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/45 to-transparent" />
          {/* Scan beam */}
          <div className="absolute top-0 bottom-0 w-24 opacity-20 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-y-0 w-full animate-beam"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(99,102,241,.5), transparent)",
                animationDuration: "4s",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/8 px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-dot" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-300/80">
                Now accepting Q3 engagements
              </span>
            </div>

            <h2 className={cn(
              "text-[clamp(2.2rem,5vw,4rem)] font-extrabold tracking-tighter leading-[1.06] text-white text-balance mb-5"
            )}>
              Building something{" "}
              <span className="text-gradient">complex or high-stakes?</span>
            </h2>

            <p className="text-[15px] text-white/40 max-w-[46ch] mx-auto leading-relaxed mb-10 text-balance">
              Tell us what you're building. We'll respond within 24 hours with
              a direct, honest view on whether we're the right fit — and what
              that engagement would look like.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <Link
                href="/contact"
                className={cn(
                  "group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl",
                  "text-[15px] font-semibold text-white",
                  "bg-brand-600 hover:bg-brand-500",
                  "transition-all duration-200",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_1px_3px_rgba(0,0,0,.5)]",
                  "hover:shadow-[inset_0_1px_0_rgba(255,255,255,.15),0_0_0_1px_rgba(99,102,241,.4),0_8px_24px_rgba(99,102,241,.3)]"
                )}
              >
                Talk to an engineer
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact#schedule"
                className={cn(
                  "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl",
                  "text-[15px] font-semibold text-white/55 hover:text-white",
                  "border border-white/10 hover:border-white/18 bg-white/4 hover:bg-white/7",
                  "transition-all duration-200",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,.05)]"
                )}
              >
                <Calendar className="w-4 h-4" />
                Check availability
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {["No commitment needed", "Response within 24 hours", "NDA on request", "Fixed-price available"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-[12px] text-white/22">
                  <span className="w-1 h-1 rounded-full bg-brand-500/40" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
