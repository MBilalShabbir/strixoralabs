"use client";

import { motion } from "framer-motion";
import { Eye, Cpu, HandshakeIcon, BookOpen, Rocket } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    icon: Eye,
    title: "Clarity over cleverness",
    description: "The best code is the code the next engineer understands immediately. We don't write puzzles.",
  },
  {
    icon: Cpu,
    title: "Engineering that holds",
    description: "We review, test, and document as if we'll be on-call for it in two years. Because sometimes we are.",
  },
  {
    icon: HandshakeIcon,
    title: "Honesty before comfort",
    description: "We flag problems early, give our real opinion, and never dress up bad news. You can handle the truth.",
  },
  {
    icon: BookOpen,
    title: "Depth, not breadth",
    description: "We stay ahead in the areas that matter to our clients. We don't spread thin to look full-service.",
  },
  {
    icon: Rocket,
    title: "Outcomes, not outputs",
    description: "Tickets closed and hours logged mean nothing. What changed for your users and your business does.",
  },
];

export function AboutValues() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="text-center mb-14"
        >
          <SectionLabel className="mb-5">Our values</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-tighter text-white text-balance">
            How we think. How we work.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
              className={cn(
                "p-5 rounded-2xl card-surface",
                "hover:border-brand-500/20 hover:bg-[#111119] transition-all duration-200"
              )}
            >
              <div className="w-9 h-9 rounded-xl bg-brand-500/8 border border-brand-500/12 flex items-center justify-center mb-4">
                <v.icon className="w-4 h-4 text-brand-400" strokeWidth={1.75} />
              </div>
              <h3 className="text-[13.5px] font-semibold text-white/90 mb-2">{v.title}</h3>
              <p className="text-[12.5px] text-white/35 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
