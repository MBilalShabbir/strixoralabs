"use client";

import { motion } from "framer-motion";
import {
  HeartPulse, GraduationCap, BarChart3, TrendingUp, Leaf,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    id: "healthtech",
    icon: HeartPulse,
    name: "Healthtech",
    headline: "Clinical-grade software. Compliance is a baseline, not a feature.",
    description:
      "Healthcare software that fails an audit or leaks patient data doesn't just lose clients — it causes harm. We've built under HIPAA, NHS Digital, and IEC 62304 constraints for telehealth providers, device manufacturers, and digital therapeutics companies. Compliance is baked into our architecture, not bolted on during a pre-launch review.",
    capabilities: [
      "HIPAA, GDPR, and NHS Digital compliance by design",
      "Telehealth infrastructure — WebRTC, scheduling, async messaging",
      "EHR/EMR integration via HL7 FHIR and DICOM",
      "AI-assisted triage and clinical decision support with audit trails",
      "Medical device software under IEC 62304 with risk management documentation",
      "Patient-facing apps with accessibility, latency, and reliability standards",
    ],
    color: "text-rose-400",
    bg: "bg-rose-500/8",
    border: "border-rose-500/20",
    stat: { value: "40k+", label: "Active patients on platform" },
  },
  {
    id: "edtech",
    icon: GraduationCap,
    name: "Edtech",
    headline: "Learning platforms that scale without re-architecting.",
    description:
      "Most education platforms are built for the first 10 institutions, then frantically retrofitted for 100. We design multi-tenant LMS infrastructure that handles growth without structural rewrites — and AI personalisation that measurably improves learner outcomes, not just engagement metrics.",
    capabilities: [
      "Multi-tenant LMS architecture that scales from 1 to 200+ institutions",
      "Adaptive learning engines that adjust content paths based on real performance data",
      "Assessment and examination platforms with anti-cheating and accessibility support",
      "SCORM/xAPI content delivery with completion tracking and reporting",
      "Real-time collaboration — live classrooms, async discussion, co-authoring",
      "Learner analytics dashboards with cohort comparisons and predictive dropout signals",
    ],
    color: "text-blue-400",
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
    stat: { value: "200+", label: "Institutions on one platform" },
  },
  {
    id: "martech",
    icon: BarChart3,
    name: "Martech",
    headline: "Attribution that reflects reality. Pipelines that don't lag.",
    description:
      "Last-click attribution is lying to your marketing team. Dashboards that update every 24 hours are misleading your decisions. We build the data infrastructure behind high-performing marketing operations — real-time pipelines, multi-touch attribution models, and personalisation engines that tie spend to revenue.",
    capabilities: [
      "Customer Data Platform (CDP) implementation and custom event schema design",
      "Multi-touch attribution models with revenue tie-back, not just click tracking",
      "Real-time analytics pipelines with sub-minute latency at scale",
      "Personalisation and A/B testing infrastructure with statistical rigour",
      "CRM integrations — Salesforce, HubSpot, and custom systems",
      "Email, push, and in-app notification infrastructure built for deliverability",
    ],
    color: "text-purple-400",
    bg: "bg-purple-500/8",
    border: "border-purple-500/20",
    stat: { value: "10M+", label: "Events processed daily" },
  },
  {
    id: "fintech",
    icon: TrendingUp,
    name: "Fintech",
    headline: "Financial infrastructure your auditors will approve.",
    description:
      "Financial software operates in an environment where errors cost money, security failures attract regulators, and downtime destroys trust. We've built payment systems, open banking platforms, and fraud detection engines under PSD2, PCI-DSS, and SOC 2 — with real transaction volume and regulatory scrutiny.",
    capabilities: [
      "Payment processing, reconciliation, and ledger systems with full audit trails",
      "Open banking integrations under PSD2 with multi-provider failover",
      "ML-based fraud detection with explainability for regulatory reporting",
      "Regulatory reporting pipelines — FCA, HMRC, MiFID II",
      "Real-time financial data infrastructure with consistency guarantees",
      "PCI-DSS Level 1 and SOC 2 Type II compliant architectures",
    ],
    color: "text-emerald-400",
    bg: "bg-emerald-500/8",
    border: "border-emerald-500/20",
    stat: { value: "£2M+", label: "Daily transaction volume" },
  },
  {
    id: "greentech",
    icon: Leaf,
    name: "Greentech",
    headline: "Sustainability that's measurable, not just claimed.",
    description:
      "ESG reporting built on spreadsheets and manual data collection doesn't survive regulatory scrutiny. We build the engineering infrastructure that makes sustainability data accurate, verifiable, and CSRD-ready — from IoT sensor networks to carbon accounting platforms that your auditors can sign off.",
    capabilities: [
      "IoT telemetry ingestion and processing at sensor scale",
      "Carbon accounting engines aligned with GHG Protocol and TCFD frameworks",
      "CSRD and ESRS-compliant reporting infrastructure",
      "Energy management dashboards with anomaly detection",
      "Supply chain emissions data pipelines with source traceability",
      "Smart grid and renewable energy monitoring systems",
    ],
    color: "text-teal-400",
    bg: "bg-teal-500/8",
    border: "border-teal-500/20",
    stat: { value: "1M+", label: "IoT readings processed daily" },
  },
];

export function IndustriesDetail() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.id}
            id={ind.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "rounded-3xl border bg-[#0f0f1a] p-8 lg:p-10",
              ind.border
            )}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left */}
              <div className="lg:w-1/2">
                <div className={cn("w-11 h-11 rounded-2xl flex items-center justify-center mb-4", ind.bg)}>
                  <ind.icon className={cn("w-6 h-6", ind.color)} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">{ind.name}</h2>
                <p className={cn("text-sm font-medium mb-4", ind.color)}>{ind.headline}</p>
                <p className="text-gray-400 leading-relaxed text-sm mb-6">{ind.description}</p>

                {/* Stat */}
                <div className={cn("inline-flex flex-col p-4 rounded-2xl border", ind.bg, ind.border)}>
                  <span className={cn("text-3xl font-black", ind.color)}>{ind.stat.value}</span>
                  <span className="text-xs text-gray-500 font-medium">{ind.stat.label}</span>
                </div>
              </div>

              {/* Right */}
              <div className="lg:w-1/2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  Our capabilities
                </h3>
                <ul className="space-y-3">
                  {ind.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className={cn("w-4 h-4 mt-0.5 flex-shrink-0", ind.color)} />
                      <span className="text-sm text-gray-300">{cap}</span>
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
