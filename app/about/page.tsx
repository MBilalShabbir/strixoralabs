import type { Metadata } from "next";
import { AboutHero }     from "@/components/about/AboutHero";
import { AboutMission }  from "@/components/about/AboutMission";
import { AboutValues }   from "@/components/about/AboutValues";
import { AboutTeam }     from "@/components/about/AboutTeam";
import { CTA }           from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Strixora Labs — our mission, values, and the team building intelligent software for the world's most important industries.",
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
