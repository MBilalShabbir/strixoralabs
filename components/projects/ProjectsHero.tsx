import { PageHero } from "@/components/ui/PageHero";

export function ProjectsHero() {
  return (
    <PageHero
      label="Case Studies"
      headline={
        <>
          Shipped.{" "}
          <span className="text-gradient">Measured. Verified.</span>
        </>
      }
      subheadline="We don't describe what we built. We show what changed — with the numbers, the challenges, and the decisions that got us there."
    />
  );
}
