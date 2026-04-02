import { PageHeroSkeleton, DetailCardsSkeleton } from "@/components/ui/Skeleton";

export default function IndustriesLoading() {
  return (
    <>
      <PageHeroSkeleton />
      <DetailCardsSkeleton count={5} />
    </>
  );
}
