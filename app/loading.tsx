import { PageHeroSkeleton } from "@/components/ui/Skeleton";

export default function RootLoading() {
  return (
    <div className="min-h-screen">
      <PageHeroSkeleton />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-48 rounded-3xl animate-pulse bg-white/[0.04]"
            style={{ animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
