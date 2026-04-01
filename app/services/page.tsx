import type { Metadata } from "next";
import { ServicesHero }    from "@/components/services/ServicesHero";
import { ServicesDetail }  from "@/components/services/ServicesDetail";
import { ServiceProcess }  from "@/components/services/ServiceProcess";
import { CTA }             from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack development, AI solutions, team augmentation, consultancy, and automation — delivered by senior engineers who own the outcome.",
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
