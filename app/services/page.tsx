import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ServicesHero }   from "@/components/services/ServicesHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { CTA }            from "@/components/home/CTA";
import { DetailCardsSkeleton, SectionRowsSkeleton } from "@/components/ui/Skeleton";

const ServicesDetail = dynamic(
  () => import("@/components/services/ServicesDetail").then((m) => ({ default: m.ServicesDetail })),
  { loading: () => <DetailCardsSkeleton count={5} /> }
);

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five engineering disciplines. One accountable team. Product Engineering, AI & ML, Embedded Engineering, Architecture & Strategy, and Process Automation — delivered by senior engineers who own the outcome.",
  alternates: {
    canonical: "https://strixoralabs.com/services",
  },
  openGraph: {
    url: "https://strixoralabs.com/services",
    title: "Services — Five capabilities. One standard of delivery.",
    description:
      "Whether you need a product built from scratch, a team scaled quickly, or an architecture that won't embarrass you at Series B — we own the outcome.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetail />
      <ServiceProcess />
      <CTA />
    </>
  );
}
