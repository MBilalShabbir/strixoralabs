import type { Metadata } from "next";
import { AboutHero }    from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutValues }  from "@/components/about/AboutValues";
import { AboutTeam }    from "@/components/about/AboutTeam";
import { CTA }          from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Strixora Labs is a senior-only software engineering firm. No account managers, no juniors staffed after the pitch — just Staff+ engineers who own the outcome. Based in London, working globally.",
  alternates: {
    canonical: "https://strixoralabs.com/about",
  },
  openGraph: {
    url: "https://strixoralabs.com/about",
    title: "About Strixora Labs — Built on craft. Judged on outcomes.",
    description:
      "An engineering firm, not an agency. Every person who appears on your project has shipped production software at scale. No bait and switch.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <CTA />
    </>
  );
}
