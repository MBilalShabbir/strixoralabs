import type { Metadata } from "next";
import { Hero }             from "@/components/home/Hero";
import { Services }         from "@/components/home/Services";
import { Industries }       from "@/components/home/Industries";
import { WhyUs }            from "@/components/home/WhyUs";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTA }              from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Strixora Labs — Technology & Innovation",
  description:
    "Full-stack software development, AI solutions, team augmentation, and consultancy for companies in Healthtech, Fintech, Edtech, Martech, and Greentech.",
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
