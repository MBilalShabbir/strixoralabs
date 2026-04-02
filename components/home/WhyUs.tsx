"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, Target, MessageSquare } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const reasons = [
  {
    icon: Layers,
    title: "No account managers",
    description: "Your engineers are your point of contact. Decisions reach the people building — without a layer of translation.",
    metric: "0",
    metricLabel: "Middlemen",
  },
  {
    icon: ShieldCheck,
    title: "Compliance is a default",
    description: "We've shipped under PCI-DSS, HIPAA, and SOC 2. Security and regulatory controls aren't options we quote separately.",
    metric: "0",
    metricLabel: "Breaches",
  },
  {
    icon: Zap,
    title: "Staff+ only",
    description: "Our team has principal and staff-level experience at companies you know. No juniors on client work — ever.",
    metric: "Top 5%",
    metricLabel: "Of the market",
  },
  {
    icon: Target,
    title: "We don't bill for discovery",
    description: "If we can't help you, we'll say so in the first call. If we can, we'll prove it before you sign anything.",
    metric: "< 48h",
    metricLabel: "To first proposal",
  },
  {
    icon: MessageSquare,
    title: "Clients stay",
    description: "94% of engagements extend or convert to long-term retainers. The work speaks louder than the pitch.",
    metric: "94%",
    metricLabel: "Retention rate",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

          {/* ── Left — sticky ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="lg:sticky lg:top-28"
          >
            <SectionLabel className="mb-6">Why Strixora</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tighter text-ink leading-tight text-balance mb-5">
              We don't take every project.{" "}
              <span className="text-gradient">We take the right ones.</span>
            </h2>
            <p className="text-[15px] text-ink/42 leading-relaxed mb-10 max-w-sm">
              Selective by design. We work with teams building something hard —
              and stay invested long after the last line of code ships.
            </p>

            {/* Testimonial */}
            <blockquote className="relative p-5 rounded-2xl overflow-hidden card-surface border-glow">
              {/* Top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/35 to-transparent" />

              <p className="text-[13.5px] text-ink/55 italic leading-relaxed mb-4">
                "Strixora flagged architectural issues in our data pipeline that three previous agencies missed.
                They didn't just build what we asked — they built what we needed."
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-brand-600/25 border border-brand-500/30 flex items-center justify-center text-[10px] font-bold text-brand-500 shrink-0">
                  SR
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-ink/75">Sarah R.</div>
                  <div className="text-[11px] text-ink/30">VP Engineering, FinLedger</div>
                </div>
              </footer>
            </blockquote>
          </motion.div>

          {/* ── Right — reason list ── */}
          <div className="space-y-2.5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className={cn(
                  "group flex gap-4 p-5 rounded-2xl",
                  "card-surface transition-all duration-250",
                  "hover:border-rule/10 hover:bg-layer",
                  "hover:shadow-[0_4px_20px_rgba(0,0,0,.08)]"
                )}
              >
                <div className="shrink-0 w-9 h-9 rounded-xl bg-brand-500/8 border border-brand-500/12 flex items-center justify-center">
                  <reason.icon className="w-4 h-4 text-brand-500" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h3 className="text-[13.5px] font-semibold text-ink/90">{reason.title}</h3>
                    <div className="shrink-0 text-right">
                      <div className="text-[18px] font-bold text-brand-500 leading-none tabular-nums">
                        {reason.metric}
                      </div>
                      <div className="text-[10px] text-ink/25 font-medium uppercase tracking-wide">
                        {reason.metricLabel}
                      </div>
                    </div>
                  </div>
                  <p className="text-[13px] text-ink/38 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
