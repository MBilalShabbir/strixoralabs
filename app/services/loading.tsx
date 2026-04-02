import { PageHeroSkeleton, DetailCardsSkeleton, SectionRowsSkeleton } from "@/components/ui/Skeleton";

export default function ServicesLoading() {
  return (
    <>
      <PageHeroSkeleton />
      <DetailCardsSkeleton count={5} />
      <SectionRowsSkeleton rows={5} />
    </>
  );
}
