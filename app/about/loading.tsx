import { PageHeroSkeleton, SectionRowsSkeleton } from "@/components/ui/Skeleton";
import { Skeleton } from "@/components/ui/Skeleton";

export default function AboutLoading() {
  return (
    <>
      <PageHeroSkeleton />

      {/* Mission skeleton */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              <Skeleton className="h-5 w-24 rounded-full" />
              <Skeleton className="h-10 w-3/4" />
              <div className="space-y-2 pt-2">
                {[1, 0.9, 0.8, 1, 0.7].map((w, i) => (
                  <Skeleton key={i} className="h-4" style={{ width: `${w * 100}%` }} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-24 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values skeleton */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <Skeleton className="h-5 w-24 rounded-full mx-auto" />
            <Skeleton className="h-9 w-72 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/[0.06] bg-[#0d0d14] space-y-3">
                <Skeleton className="w-9 h-9 rounded-xl" />
                <Skeleton className="h-4 w-32" />
                <div className="space-y-1.5">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team skeleton */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <Skeleton className="h-5 w-20 rounded-full mx-auto" />
            <Skeleton className="h-9 w-80 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/[0.06] bg-[#0d0d14] space-y-3">
                <Skeleton className="w-11 h-11 rounded-2xl" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
                <div className="space-y-1.5">
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-11/12" />
                  <Skeleton className="h-3 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
