"use client";

import { motion } from "framer-motion";
import {
  Code2, BrainCircuit, Users, Lightbulb, Workflow,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "development",
    icon: Code2,
    title: "Product Engineering",
    headline: "We own it. End to end.",
    description:
      "Most teams have a gap between what they designed and what shipped. We close it. Our engineers own the full stack — architecture, frontend, backend, data layer, infrastructure — with no ambiguity about who's accountable when something breaks or something needs to scale.",
    points: [
      "React and Next.js frontends built for performance, not just appearance",
      "Node.js, Python, or Go backends designed for the load you'll hit in 18 months",
      "Schema design, query optimisation, and migration strategies that don't panic under pressure",
      "Cloud-native infrastructure on AWS, GCP, or Azure with IaC from day one",
      "CI/CD pipelines, feature flags, and deployment strategies that make Friday releases boring",
      "Observability, alerting, and runbooks so your on-call isn't a mystery tour",
    ],
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    headline: "Production AI. Not a proof of concept.",
    description:
      "We've seen what happens when AI projects stay in notebook hell. We build the engineering layer that takes a good model and makes it a reliable, monitored, production system — with latency targets, fallback strategies, and evaluation pipelines that tell you when it starts drifting.",
    points: [
      "LLM integration with structured outputs, tool use, and multi-agent orchestration",
      "RAG systems with retrieval quality metrics, not just cosine similarity",
      "Fine-tuning and RLHF on domain-specific datasets with proper evaluation",
      "NLP pipelines — classification, extraction, summarisation — at production scale",
      "Computer vision systems with real inference performance and edge-deployment options",
      "AI monitoring, drift detection, and A/B evaluation frameworks that give confidence, not guesswork",
    ],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    id: "team",
    icon: Users,
    title: "Embedded Engineering",
    headline: "Senior engineers. Zero ramp-up theatre.",
    description:
      "When you need to move faster than your hiring pipeline allows, we embed Staff+ engineers directly into your team. They read your codebase, attend your standups, raise PRs against your main branch, and contribute to architectural decisions — not a separate workstream that delivers at the end.",
    points: [
      "Senior, Staff, and Principal-level engineers — no juniors on client work",
      "Productive in your codebase within the first week, not the first quarter",
      "Integrated into your GitHub, Jira, Slack, and review culture from day one",
      "Engagements from 3 to 12 months — with options to extend or hire permanently",
      "Structured knowledge transfer so nothing walks out the door when we do",
      "Architecture and code quality that holds up after the engagement ends",
    ],
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    id: "consultancy",
    icon: Lightbulb,
    title: "Architecture & Strategy",
    headline: "A verdict, not a slide deck.",
    description:
      "We've reviewed codebases behind £50M raises and ones that nearly collapsed under their first production load. You get a direct, specific, actionable assessment of where you are and what it will take to get to where you need to be — not a polished report that tells you what you already suspected.",
    points: [
      "Architecture review with specific risk identification and remediation paths",
      "Technology stack evaluation grounded in your team's capabilities and constraints",
      "Technical due diligence for M&A, Series A, or investor requirements",
      "Engineering org design — team structure, hiring plan, and process improvements",
      "Security posture assessment against OWASP, CIS benchmarks, and compliance requirements",
      "Digital transformation roadmaps with honest sequencing, not aspirational timelines",
    ],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Process Automation",
    headline: "Your engineers should build products, not fight fires.",
    description:
      "Every hour your team spends on manual reconciliation, report generation, or environment management is an hour not spent on features. We identify, automate, and monitor the processes that drain engineering capacity — and build automation that's observable and self-healing, not a black box that breaks silently.",
    points: [
      "Business process automation across multi-system workflows with auditability built in",
      "API integration and orchestration with retry logic, rate limiting, and alerting",
      "Data pipeline automation with schema validation, quality checks, and SLA monitoring",
      "CI/CD maturity — from basic pipelines to progressive delivery and canary deployments",
      "Report and alert automation that delivers signal, not noise",
      "Workflow monitoring with self-healing triggers and escalation paths",
    ],
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export function ServicesDetail() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        {services.map((svc, i) => (
          <motion.div
            key={svc.id}
            id={svc.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "rounded-3xl border bg-[#0f0f1a] p-8 lg:p-10",
              svc.border
            )}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left */}
              <div className="lg:w-1/2">
                <div className={cn("w-11 h-11 rounded-2xl flex items-center justify-center mb-4", svc.bg)}>
                  <svc.icon className={cn("w-6 h-6", svc.color)} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">{svc.title}</h2>
                <p className={cn("text-sm font-medium mb-4", svc.color)}>{svc.headline}</p>
                <p className="text-gray-400 leading-relaxed text-sm">{svc.description}</p>
              </div>

              {/* Right */}
              <div className="lg:w-1/2">
                <ul className="space-y-3">
                  {svc.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className={cn("w-4 h-4 mt-0.5 flex-shrink-0", svc.color)} />
                      <span className="text-sm text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
