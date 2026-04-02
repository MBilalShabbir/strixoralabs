import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { CTA }          from "@/components/home/CTA";
import { ProjectGridSkeleton } from "@/components/ui/Skeleton";

const ProjectsGrid = dynamic(
  () => import("@/components/projects/ProjectsGrid").then((m) => ({ default: m.ProjectsGrid })),
  { loading: () => <ProjectGridSkeleton /> }
);

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real case studies: FinLedger (£240k fraud caught), HealthFlow (99.97% uptime, 40k+ patients), LearnPath (34% completion uplift, 200+ institutions), CarbonTrace (CSRD compliant), and more.",
  alternates: {
    canonical: "https://strixoralabs.com/projects",
  },
  openGraph: {
    url: "https://strixoralabs.com/projects",
    title: "Projects — Shipped. Measured. Verified.",
    description:
      "We don't describe what we built. We show what changed — with the numbers, the challenges, and the decisions that got us there.",
  },
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
