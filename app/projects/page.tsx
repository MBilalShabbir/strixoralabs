import type { Metadata } from "next";
import { ProjectsHero }   from "@/components/projects/ProjectsHero";
import { ProjectsGrid }   from "@/components/projects/ProjectsGrid";
import { CTA }            from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Strixora Labs — real-world software products built for healthcare, fintech, edtech, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <CTA />
    </>
  );
}
