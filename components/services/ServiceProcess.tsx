"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Brief",
    description:
      "You tell us what you're building and why. We ask the uncomfortable questions. Within 48 hours you have our honest assessment and a proposed scope.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Before a single feature is written, we agree on the system design, tech stack, data model, and the decisions that are hard to undo later.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Two-week sprints with daily updates, weekly demos, and a staging environment that mirrors production from day one. No surprises at the finish line.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "Production release with full observability, rollback procedures, runbooks, and a go-live checklist your team actually owns after we're done.",
  },
  {
    number: "05",
    title: "Compound",
    description:
      "Most clients stay. We run performance reviews, plan the next quarter, and keep the codebase in the shape it needs to be to scale.",
  },
];

export function ServiceProcess() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel className="mb-5">How we work</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight text-ink mb-4">
            How an engagement works
          </h2>
          <p className="text-ink/40 max-w-xl mx-auto">
            Five stages. No black boxes. You know exactly what's happening,
            why, and what's next at every point.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-panel-alt border border-brand-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-brand-500">{step.number}</span>
                </div>
                <h3 className="text-sm font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-xs text-ink/40 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
