import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { CTA }            from "@/components/home/CTA";
import { DetailCardsSkeleton } from "@/components/ui/Skeleton";

const IndustriesDetail = dynamic(
  () => import("@/components/industries/IndustriesDetail").then((m) => ({ default: m.IndustriesDetail })),
  { loading: () => <DetailCardsSkeleton count={5} /> }
);

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Deep sector expertise in Fintech, Healthtech, Edtech, Martech, and Greentech. We've built under HIPAA, PCI-DSS, PSD2, IEC 62304, CSRD, and SOC 2 — not just around them.",
  alternates: {
    canonical: "https://strixoralabs.com/industries",
  },
  openGraph: {
    url: "https://strixoralabs.com/industries",
    title: "Industries — Sector expertise that shows in the code.",
    description:
      "Generic engineers write generic software. We know the compliance requirements, data models, and failure modes that define each industry we work in.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesDetail />
      <CTA />
    </>
  );
}
