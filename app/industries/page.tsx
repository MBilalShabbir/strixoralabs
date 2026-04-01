import type { Metadata } from "next";
import { IndustriesHero }   from "@/components/industries/IndustriesHero";
import { IndustriesDetail } from "@/components/industries/IndustriesDetail";
import { CTA }              from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Strixora Labs has deep expertise in Healthtech, Edtech, Fintech, Martech, and Greentech — from regulatory compliance to domain-specific system design.",
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
