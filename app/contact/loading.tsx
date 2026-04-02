import { PageHeroSkeleton, ContactSkeleton } from "@/components/ui/Skeleton";

export default function ContactLoading() {
  return (
    <>
      <PageHeroSkeleton />
      <ContactSkeleton />
    </>
  );
}
