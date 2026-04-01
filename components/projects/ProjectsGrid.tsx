"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "FinLedger",
    subtitle: "Open Banking & Fraud Intelligence",
    category: "Fintech",
    badgeVariant: "brand" as const,
    description:
      "A PSD2-compliant open banking platform aggregating 15+ bank feeds with real-time transaction categorisation, ML fraud detection, and automated reconciliation — built for SMEs who can't afford a full finance team.",
    challenge:
      "The client was losing hours weekly to manual reconciliation across disconnected banking portals, with no fraud visibility until month-end. They needed live data, not daily exports.",
    outcome:
      "Fraud detection flagged £240k in suspicious transactions in the first quarter alone. Finance admin dropped from a part-time role to 8 hours a week. The platform now processes £2M+ in daily transaction volume.",
    tags: ["React", "Node.js", "PostgreSQL", "Plaid", "ML", "Redis"],
    metrics: [
      { value: "£2M+", label: "Daily transaction volume" },
      { value: "£240k", label: "Fraud caught, Q1" },
      { value: "8hrs", label: "Admin saved weekly" },
    ],
    accentColor: "border-emerald-500/20",
    accentBg: "from-emerald-500/8 via-transparent",
    accentBar: "bg-emerald-500",
  },
  {
    title: "HealthFlow",
    subtitle: "HIPAA-Compliant Telehealth Platform",
    category: "Healthtech",
    badgeVariant: "green" as const,
    description:
      "A clinical-grade telehealth platform with WebRTC video consultations, AI-assisted triage, HL7 FHIR EHR integration, and real-time scheduling — replacing a legacy system that collapsed under peak load.",
    challenge:
      "The client's existing platform failed during GP surges and couldn't satisfy HIPAA audit requirements. They needed a full replacement with zero downtime migration and compliance baked in from day one.",
    outcome:
      "Migrated 40k+ active patients with zero data incidents. Triage times dropped 60%. The platform expanded from 2 to 12 clinics in 6 months and has maintained 99.97% uptime since launch.",
    tags: ["Next.js", "WebRTC", "Python", "PostgreSQL", "AWS", "AI Triage"],
    metrics: [
      { value: "40k+", label: "Active patients" },
      { value: "99.97%", label: "Uptime SLA" },
      { value: "60%", label: "Faster triage" },
    ],
    accentColor: "border-rose-500/20",
    accentBg: "from-rose-500/8 via-transparent",
    accentBar: "bg-rose-500",
  },
  {
    title: "LearnPath",
    subtitle: "Multi-Tenant Adaptive LMS",
    category: "Edtech",
    badgeVariant: "blue" as const,
    description:
      "A multi-tenant learning management system built for a university consortium — each institution gets isolated data, custom branding, and its own regulatory profile, all on a single shared infrastructure that was designed to scale from day one.",
    challenge:
      "200+ institutions needed one platform that could reflect completely different pedagogical approaches, compliance requirements, and student populations — without the platform fracturing into one-off configurations.",
    outcome:
      "Course completion rates rose 34% after adaptive content paths were enabled. The platform now handles 500k+ learning events per day with no per-institution re-architecture required as the consortium grows.",
    tags: ["Vue.js", "Django", "Redis", "NLP", "GCP", "SCORM"],
    metrics: [
      { value: "200+", label: "Institutions" },
      { value: "34%", label: "Completion uplift" },
      { value: "500k+", label: "Events/day" },
    ],
    accentColor: "border-blue-500/20",
    accentBg: "from-blue-500/8 via-transparent",
    accentBar: "bg-blue-500",
  },
  {
    title: "CarbonTrace",
    subtitle: "CSRD-Ready Carbon Accounting Platform",
    category: "Greentech",
    badgeVariant: "green" as const,
    description:
      "An enterprise carbon accounting platform that pulls IoT sensor telemetry, supply chain data, and energy usage into a single GHG Protocol-aligned ledger — with audit-ready CSRD and ESRS reporting built in.",
    challenge:
      "The client had a hard CSRD regulatory deadline with no existing emissions data infrastructure. Reporting was being assembled manually across spreadsheets and email threads — not auditable, not defensible.",
    outcome:
      "First compliant CSRD report submitted on time and signed off without revision. Carbon reporting overhead dropped from a 3-month process to a 2-week automated cycle. Now processing 1M+ IoT readings per day.",
    tags: ["React", "Python", "IoT", "TimescaleDB", "GHG Protocol", "Azure"],
    metrics: [
      { value: "1M+", label: "IoT readings/day" },
      { value: "87%", label: "Reporting time saved" },
      { value: "CSRD", label: "First submission: on time" },
    ],
    accentColor: "border-teal-500/20",
    accentBg: "from-teal-500/8 via-transparent",
    accentBar: "bg-teal-500",
  },
  {
    title: "Campfire",
    subtitle: "Real-Time Marketing Attribution",
    category: "Martech",
    badgeVariant: "amber" as const,
    description:
      "A unified marketing intelligence platform that replaces seven disconnected tools with one — real-time multi-touch attribution, cross-channel campaign data, and AI-generated optimisation signals that tie spend to revenue, not just clicks.",
    challenge:
      "The marketing team had no shared source of truth. Each tool told a different story. Last-click attribution was masking a significant budget misallocation that nobody could quantify until spend was already wasted.",
    outcome:
      "Marketing ROI improved 28% in Q1 after switching from last-click to data-driven attribution. Data latency collapsed from 24 hours to under 2 minutes. The team cut their tooling overhead from 7 platforms to one.",
    tags: ["Next.js", "Kafka", "Spark", "BigQuery", "Python", "ML"],
    metrics: [
      { value: "28%", label: "ROI improvement, Q1" },
      { value: "20+", label: "Channels unified" },
      { value: "<2min", label: "Data latency" },
    ],
    accentColor: "border-purple-500/20",
    accentBg: "from-purple-500/8 via-transparent",
    accentBar: "bg-purple-500",
  },
  {
    title: "Augment",
    subtitle: "AI-Assisted Hiring at Scale",
    category: "AI / HR",
    badgeVariant: "brand" as const,
    description:
      "An AI-powered recruitment platform that handles structured screening, bias-aware shortlisting, and competency-based interview generation — built for companies that receive thousands of applications but need to preserve hiring quality.",
    challenge:
      "A fast-scaling tech company was receiving 5,000+ applications per role. Quality was slipping as recruiters triaged volume manually, and shortlist diversity was not meeting internal targets.",
    outcome:
      "Time-to-hire dropped from 6 weeks to 12 days. Shortlist diversity increased 41% after bias-aware scoring replaced manual filtering. The recruiting team now manages 3x the role volume without additional headcount.",
    tags: ["React", "Python", "GPT-4", "PostgreSQL", "RBAC", "AWS"],
    metrics: [
      { value: "12 days", label: "Avg. time-to-hire" },
      { value: "41%", label: "Shortlist diversity increase" },
      { value: "3×", label: "Role volume, same team" },
    ],
    accentColor: "border-brand-500/20",
    accentBg: "from-brand-500/8 via-transparent",
    accentBar: "bg-brand-500",
  },
];

export function ProjectsGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative flex flex-col rounded-3xl border bg-[#0f0f1a] overflow-hidden",
                "hover:border-white/12 transition-all duration-300",
                project.accentColor
              )}
            >
              {/* Top gradient stripe */}
              <div className={cn("absolute inset-x-0 top-0 h-px", project.accentBar)} />
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30", project.accentBg)} />

              <div className="relative p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <Badge variant={project.badgeVariant} className="mb-2">
                      {project.category}
                    </Badge>
                    <h2 className="text-xl font-bold text-white">{project.title}</h2>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-brand-400" />
                  </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Challenge + Outcome */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-white/3 border border-white/5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Challenge</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/3 border border-white/5">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Outcome</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex gap-4 mb-5">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg font-bold text-white">{m.value}</div>
                      <div className="text-xs text-gray-600">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/6 text-xs text-gray-500 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
