import { PageHero } from "@/components/ui/PageHero";

export function IndustriesHero() {
  return (
    <PageHero
      label="Industries"
      headline={
        <>
          Sector expertise that{" "}
          <span className="text-gradient">shows in the code.</span>
        </>
      }
      subheadline="Generic engineers write generic software. We've built production systems in Fintech, Healthtech, Edtech, Martech, and Greentech — and we know the constraints that define each one."
    />
  );
}
