"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, BrainCircuit, Users, Lightbulb, Workflow, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    num: "01",
    icon: Code2,
    title: "Product Engineering",
    description:
      "We architect, build, and own the full stack. Our engineers don't wait for a spec — they write one, improve it, and ship.",
    tags: ["React", "Next.js", "Node.js", "Python", "Go", "AWS"],
    href: "/services#development",
    hoverBorder: "hover:border-indigo-500/30",
    hoverGlow:   "group-hover:shadow-[0_0_30px_rgba(99,102,241,.1)]",
    iconBg:  "bg-indigo-500/10",
    iconClr: "text-indigo-500",
    numClr:  "text-indigo-500/25",
  },
  {
    num: "02",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "We build AI that runs in production — not demos. LLM pipelines, RAG architectures, and predictive models with real accuracy targets.",
    tags: ["LLMs", "RAG", "Fine-tuning", "NLP", "MLOps"],
    href: "/services#ai",
    hoverBorder: "hover:border-violet-500/30",
    hoverGlow:   "group-hover:shadow-[0_0_30px_rgba(139,92,246,.1)]",
    iconBg:  "bg-violet-500/10",
    iconClr: "text-violet-500",
    numClr:  "text-violet-500/25",
  },
  {
    num: "03",
    icon: Users,
    title: "Embedded Engineering",
    description:
      "Staff+ engineers. Zero ramp-up theatre. We integrate with your codebase, tools, and culture in days — not months.",
    tags: ["Staff+ Level", "Contract", "Remote / Hybrid"],
    href: "/services#team",
    hoverBorder: "hover:border-sky-500/30",
    hoverGlow:   "group-hover:shadow-[0_0_30px_rgba(56,189,248,.1)]",
    iconBg:  "bg-sky-500/10",
    iconClr: "text-sky-500",
    numClr:  "text-sky-500/25",
  },
  {
    num: "04",
    icon: Lightbulb,
    title: "Architecture & Strategy",
    description:
      "We've reviewed codebases behind £50M raises and ones that nearly collapsed under load. You get a verdict, not a slide deck.",
    tags: ["Architecture review", "M&A due diligence", "Tech strategy"],
    href: "/services#consultancy",
    hoverBorder: "hover:border-amber-500/30",
    hoverGlow:   "group-hover:shadow-[0_0_30px_rgba(245,158,11,.08)]",
    iconBg:  "bg-amber-500/10",
    iconClr: "text-amber-500",
    numClr:  "text-amber-500/25",
  },
  {
    num: "05",
    icon: Workflow,
    title: "Process Automation",
    description:
      "Manual workflows cost more than you think. We map, automate, and monitor the processes that slow your team down.",
    tags: ["RPA", "API orchestration", "CI/CD", "Data pipelines"],
    href: "/services#automation",
    hoverBorder: "hover:border-emerald-500/30",
    hoverGlow:   "group-hover:shadow-[0_0_30px_rgba(52,211,153,.08)]",
    iconBg:  "bg-emerald-500/10",
    iconClr: "text-emerald-500",
    numClr:  "text-emerald-500/25",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="flex flex-col items-center text-center mb-20"
        >
          <SectionLabel className="mb-5">What we do</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tighter text-ink text-balance leading-tight">
            Five capabilities.{" "}
            <span className="text-gradient">One accountable team.</span>
          </h2>
          <p className="mt-4 text-base text-ink/40 max-w-md leading-relaxed text-balance">
            From first commit to scaled production — we own the outcome, end to end.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
            >
              <Link
                href={svc.href}
                className={cn(
                  "group relative flex flex-col h-full p-6 rounded-2xl overflow-hidden",
                  "card-surface transition-all duration-300",
                  svc.hoverBorder,
                  svc.hoverGlow,
                  "hover:-translate-y-0.5"
                )}
              >
                {/* Top beam on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rule/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Number watermark */}
                <span className={cn(
                  "absolute top-4 right-5 text-4xl font-black tabular-nums select-none pointer-events-none",
                  "transition-opacity duration-300 group-hover:opacity-60",
                  svc.numClr
                )}>
                  {svc.num}
                </span>

                <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center mb-5", svc.iconBg)}>
                  <svc.icon className={cn("w-4.5 h-4.5", svc.iconClr)} strokeWidth={1.75} />
                </div>

                <h3 className="text-[15px] font-semibold text-ink mb-2">
                  {svc.title}
                </h3>
                <p className="text-[13px] text-ink/40 leading-relaxed mb-5 flex-1">
                  {svc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-wash/4 border border-rule/7 text-[11px] font-medium text-ink/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink/30 group-hover:text-ink/60 transition-colors">
                  Explore
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
