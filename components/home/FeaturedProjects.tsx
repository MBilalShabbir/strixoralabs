"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    title: "FinLedger",
    subtitle: "Open Banking Infrastructure",
    category: "Fintech",
    description:
      "PSD2-compliant financial data platform aggregating 15+ bank APIs. Real-time fraud detection caught £240k in suspicious activity within 90 days of launch.",
    tags: ["React", "Node.js", "PostgreSQL", "ML", "Plaid", "Redis"],
    metric: "£2M+",
    metricLabel: "Processed daily",
    href: "/projects#finledger",
    accentFrom: "from-emerald-500/8",
    accentBorder: "hover:border-emerald-500/25",
    dot: "bg-emerald-500",
  },
  {
    title: "HealthFlow",
    subtitle: "Clinical Telehealth Platform",
    category: "Healthtech",
    description:
      "HIPAA-compliant video consultation platform built to replace a system that crashed under peak load. Migrated 40k+ patients with zero downtime.",
    tags: ["Next.js", "WebRTC", "Python", "AI Triage", "AWS"],
    metric: "99.97%",
    metricLabel: "Uptime post-launch",
    href: "/projects#healthflow",
    accentFrom: "from-rose-500/8",
    accentBorder: "hover:border-rose-500/25",
    dot: "bg-rose-500",
  },
  {
    title: "LearnPath",
    subtitle: "Multi-Tenant Adaptive LMS",
    category: "Edtech",
    description:
      "Scaled from 3 to 200+ institutions on a single platform. AI-driven course personalisation increased completion rates by 34% in the first semester.",
    tags: ["Vue.js", "Django", "Redis", "NLP", "GCP"],
    metric: "34%",
    metricLabel: "Completion uplift",
    href: "/projects#learnpath",
    accentFrom: "from-sky-500/8",
    accentBorder: "hover:border-sky-500/25",
    dot: "bg-sky-500",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16"
        >
          <div>
            <SectionLabel className="mb-5">Case studies</SectionLabel>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tighter text-ink leading-tight text-balance">
              Real products.{" "}
              <span className="text-gradient">Real numbers.</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="shrink-0 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink/40 hover:text-ink/80 transition-colors duration-200"
          >
            All case studies
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* ── Project rows ── */}
        <div className="space-y-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.09, ease }}
            >
              <Link
                href={p.href}
                className={cn(
                  "group relative flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 rounded-2xl overflow-hidden",
                  "card-surface transition-all duration-300",
                  "border border-rule/[0.055]",
                  p.accentBorder,
                  "hover:shadow-[0_8px_32px_rgba(0,0,0,.1)]",
                  "hover:-translate-y-0.5"
                )}
              >
                {/* Gradient wash */}
                <div className={cn("absolute inset-0 bg-gradient-to-r via-transparent to-transparent opacity-50 pointer-events-none", p.accentFrom)} />

                {/* Left dot-line indicator */}
                <div className={cn("absolute left-0 top-6 bottom-6 w-[2px] rounded-full", p.dot)} />

                <div className="relative flex-1 pl-1">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className={cn("w-1.5 h-1.5 rounded-full", p.dot)} />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.09em] text-ink/30">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink/90 group-hover:text-ink transition-colors mb-0.5">
                    {p.title}
                    <span className="text-ink/30 font-normal ml-2 text-[15px]">— {p.subtitle}</span>
                  </h3>
                  <p className="text-[13px] text-ink/38 leading-relaxed max-w-2xl mt-2 mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-wash/4 border border-rule/7 text-[11px] font-medium text-ink/32"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right metric */}
                <div className="relative shrink-0 flex flex-col items-end justify-between self-stretch">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-ink tabular-nums">{p.metric}</div>
                    <div className="text-[11px] text-ink/28 font-medium">{p.metricLabel}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-ink/20 group-hover:text-ink/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
