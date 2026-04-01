import { PageHero } from "@/components/ui/PageHero";

export function ServicesHero() {
  return (
    <PageHero
      label="Services"
      headline={
        <>
          Five services.{" "}
          <span className="text-gradient">One standard of delivery.</span>
        </>
      }
      subheadline="Whether you need a product built from scratch, a team scaled quickly, or an architecture that won't embarrass you at Series B — we own the outcome."
    />
  );
}
