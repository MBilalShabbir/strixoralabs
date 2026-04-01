import { PageHero } from "@/components/ui/PageHero";

export function AboutHero() {
  return (
    <PageHero
      label="Our story"
      headline={
        <>
          Built on craft.{" "}
          <span className="text-gradient">Judged on outcomes.</span>
        </>
      }
      subheadline="We founded Strixora Labs because we'd seen too many good products fail — not from lack of effort, but from lack of engineering judgment. We exist to fix that gap."
    />
  );
}
