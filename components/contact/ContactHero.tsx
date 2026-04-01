import { PageHero } from "@/components/ui/PageHero";

export function ContactHero() {
  return (
    <PageHero
      label="Let's talk"
      headline={
        <>
          Tell us what{" "}
          <span className="text-gradient">you&apos;re building.</span>
        </>
      }
      subheadline="We respond within 24 hours with a direct, honest view on fit — not a sales pitch. If we're not right for you, we'll say so and point you somewhere better."
    />
  );
}
