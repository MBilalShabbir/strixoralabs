"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const team = [
  {
    name: "Aisha Rauf",
    role: "Co-founder & CEO",
    bio: "Led engineering and product at two regulated Fintech companies before co-founding Strixora. She still reviews architecture decisions on every engagement.",
    initials: "AR",
    ring: "ring-violet-500/25",
    bg: "bg-violet-600/15 text-violet-600 dark:text-violet-300",
  },
  {
    name: "Marcus Chen",
    role: "Co-founder & CTO",
    bio: "Staff Engineer at two unicorns. Designed distributed systems handling billions of events per day. Now applies that experience to client infrastructure.",
    initials: "MC",
    ring: "ring-sky-500/25",
    bg: "bg-sky-600/15 text-sky-600 dark:text-sky-300",
  },
  {
    name: "Priya Nair",
    role: "Head of AI",
    bio: "PhD in NLP from UCL. Previously built production ML systems at a major UK bank — models that actually go to prod, not notebooks that live in Confluence.",
    initials: "PN",
    ring: "ring-rose-500/25",
    bg: "bg-rose-600/15 text-rose-600 dark:text-rose-300",
  },
  {
    name: "Tobias Keller",
    role: "Head of Engineering",
    bio: "Full-stack architect who has taken four products from zero to production at scale. Runs our code review culture and sets the bar for what ships.",
    initials: "TK",
    ring: "ring-emerald-500/25",
    bg: "bg-emerald-600/15 text-emerald-600 dark:text-emerald-300",
  },
];

export function AboutTeam() {
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
          <SectionLabel className="mb-5">The team</SectionLabel>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-tighter text-ink text-balance mb-3">
            The people who actually do the work.
          </h2>
          <p className="text-[14px] text-ink/35 max-w-sm mx-auto">
            No juniors staffed after the pitch. The people you meet are the people who build.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
              className="group p-5 rounded-2xl card-surface hover:border-rule/10 transition-all duration-200"
            >
              <div className={cn(
                "w-11 h-11 rounded-2xl ring-1 flex items-center justify-center text-[13px] font-bold mb-4",
                member.ring, member.bg
              )}>
                {member.initials}
              </div>
              <h3 className="text-[13.5px] font-semibold text-ink/90 mb-0.5">{member.name}</h3>
              <p className="text-[11.5px] text-brand-500 font-medium mb-3">{member.role}</p>
              <p className="text-[12.5px] text-ink/35 leading-relaxed mb-4">{member.bio}</p>
              <div className="flex items-center gap-1.5">
                {[Linkedin, Twitter].map((Icon, j) => (
                  <button
                    key={j}
                    className="w-7 h-7 rounded-lg bg-wash/4 border border-rule/7 flex items-center justify-center text-ink/25 hover:text-ink/60 hover:bg-wash/8 transition-all duration-200"
                    aria-label="Social link"
                  >
                    <Icon className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
