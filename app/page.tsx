import type { Metadata } from "next";
import { Hero }             from "@/components/home/Hero";
import { Services }         from "@/components/home/Services";
import { Industries }       from "@/components/home/Industries";
import { WhyUs }            from "@/components/home/WhyUs";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTA }              from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Strixora Labs — We build software your competitors can't replicate.",
  description:
    "Senior-only software engineers specialising in Fintech, Healthtech, Edtech, Martech, and Greentech. HIPAA, PCI-DSS, and CSRD-compliant systems by design. Currently accepting Q3 engagements.",
  alternates: {
    canonical: "https://strixoralabs.com",
  },
  openGraph: {
    url: "https://strixoralabs.com",
    title: "Strixora Labs — We build software your competitors can't replicate.",
    description:
      "Senior-only engineers. Regulated industries. 50+ products shipped. £2M+ daily fintech volume. 98% client retention.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <WhyUs />
      <FeaturedProjects />
      <CTA />
    </>
  );
}
