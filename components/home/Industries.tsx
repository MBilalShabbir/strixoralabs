"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartPulse, GraduationCap, BarChart3, TrendingUp, Leaf } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const industries = [
  {
    icon: HeartPulse,
    name: "Healthtech",
    desc: "Compliance isn't a feature — it's a baseline. HIPAA, NHS Digital, HL7 FHIR. We've shipped clinical software with real stakes.",
    href: "/industries#healthtech",
    clr: "text-rose-400",
    bg:  "bg-rose-500/8",
    bdr: "border-rose-500/15 hover:border-rose-500/35",
    glow: "hover:shadow-[0_0_28px_rgba(244,63,94,.1)]",
  },
  {
    icon: GraduationCap,
    name: "Edtech",
    desc: "Learning platforms that scale from a single institution to a national network — without re-architecting at every stage.",
    href: "/industries#edtech",
    clr: "text-sky-400",
    bg:  "bg-sky-500/8",
    bdr: "border-sky-500/15 hover:border-sky-500/35",
    glow: "hover:shadow-[0_0_28px_rgba(56,189,248,.1)]",
  },
  {
    icon: BarChart3,
    name: "Martech",
    desc: "Attribution models that don't lie. Real-time data pipelines that give your team visibility, not vanity metrics.",
    href: "/industries#martech",
    clr: "text-purple-400",
    bg:  "bg-purple-500/8",
    bdr: "border-purple-500/15 hover:border-purple-500/35",
    glow: "hover:shadow-[0_0_28px_rgba(168,85,247,.1)]",
  },
  {
    icon: TrendingUp,
    name: "Fintech",
    desc: "PCI-DSS, PSD2, SOC 2. We've built compliant payment systems and fraud detection engines with real money on the line.",
    href: "/industries#fintech",
    clr: "text-emerald-400",
    bg:  "bg-emerald-500/8",
    bdr: "border-emerald-500/15 hover:border-emerald-500/35",
    glow: "hover:shadow-[0_0_28px_rgba(52,211,153,.1)]",
  },
  {
    icon: Leaf,
    name: "Greentech",
    desc: "Sustainability that's measurable. IoT telemetry, carbon accounting, and CSRD-ready reporting infrastructure.",
    href: "/industries#greentech",
    clr: "text-teal-400",
    bg:  "bg-teal-500/8",
    bdr: "border-teal-500/15 hover:border-teal-500/35",
    glow: "hover:shadow-[0_0_28px_rgba(45,212,191,.1)]",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-28 lg:py-36 relative">
      {/* Faint mid-section tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(99,102,241,.04), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="flex flex-col items-center text-center mb-20"
        >
          <SectionLabel className="mb-5">Industries</SectionLabel>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tighter text-white text-balance leading-tight">
            We know your industry.{" "}
            <span className="text-gradient">Not just your stack.</span>
          </h2>
          <p className="mt-4 text-base text-white/40 max-w-md text-balance leading-relaxed">
            Domain knowledge is why our code survives first contact with regulation, compliance, and real users.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
            >
              <Link
                href={ind.href}
                className={cn(
                  "group flex flex-col h-full p-5 rounded-2xl",
                  "card-surface transition-all duration-300",
                  "border",
                  ind.bdr,
                  ind.glow,
                  "hover:-translate-y-0.5"
                )}
              >
                <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center mb-4", ind.bg)}>
                  <ind.icon className={cn("w-4.5 h-4.5", ind.clr)} strokeWidth={1.75} />
                </div>
                <h3 className="text-[14px] font-semibold text-white mb-1.5">{ind.name}</h3>
                <p className="text-[12px] text-white/38 leading-relaxed">{ind.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
