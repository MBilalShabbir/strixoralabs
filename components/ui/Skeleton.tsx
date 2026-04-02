import React from "react";
import { cn } from "@/lib/utils";

// ─── Base ────────────────────────────────────────────────────────────────────

export function Skeleton({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={cn("animate-pulse rounded-xl bg-white/[0.045]", className)}
      style={style}
    />
  );
}

// ─── Page hero ───────────────────────────────────────────────────────────────

export function PageHeroSkeleton() {
  return (
    <div className="relative py-28 flex flex-col items-center gap-5 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(99,102,241,0.08),transparent)]" />
      <Skeleton className="h-6 w-28 rounded-full" />
      <div className="flex flex-col items-center gap-3 w-full max-w-2xl">
        <Skeleton className="h-12 w-full max-w-xl" />
        <Skeleton className="h-12 w-4/5 max-w-lg" />
      </div>
      <div className="flex flex-col items-center gap-2 w-full max-w-lg">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

// ─── Project grid ────────────────────────────────────────────────────────────

export function ProjectGridSkeleton() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/[0.06] bg-[#0f0f1a] p-7 space-y-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-7 w-40" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-4/5" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Skeleton className="h-16 rounded-xl" />
                <Skeleton className="h-16 rounded-xl" />
              </div>
              <div className="flex gap-5">
                {[16, 20, 14].map((w, j) => (
                  <div key={j} className="space-y-1.5">
                    <Skeleton className={`h-6 w-${w}`} />
                    <Skeleton className="h-3 w-20" />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[14, 16, 12, 18, 14, 16].map((w, j) => (
                  <Skeleton key={j} className={`h-6 w-${w} rounded-md`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Detail cards (industries / services) ────────────────────────────────────

export function DetailCardsSkeleton({ count = 5 }: { count?: number }) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="rounded-3xl border border-white/[0.06] bg-[#0f0f1a] p-8 lg:p-10"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 space-y-4">
                <Skeleton className="w-11 h-11 rounded-2xl" />
                <Skeleton className="h-7 w-36" />
                <Skeleton className="h-4 w-64" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-11/12" />
                  <Skeleton className="h-4 w-10/12" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
                <Skeleton className="h-20 w-32 rounded-2xl" />
              </div>
              <div className="lg:w-1/2 space-y-3 pt-2">
                <Skeleton className="h-3 w-28 mb-4" />
                {Array.from({ length: 6 }).map((_, j) => (
                  <div key={j} className="flex gap-3">
                    <Skeleton className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-full" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Contact page ────────────────────────────────────────────────────────────

export function ContactSkeleton() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d14] p-8 space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-7 w-56" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Skeleton className="h-12 rounded-xl" />
                <Skeleton className="h-12 rounded-xl" />
              </div>
              <Skeleton className="h-12 rounded-xl" />
              <div className="grid sm:grid-cols-2 gap-5">
                <Skeleton className="h-12 rounded-xl" />
                <Skeleton className="h-12 rounded-xl" />
              </div>
              <Skeleton className="h-32 rounded-xl" />
              <Skeleton className="h-12 rounded-xl" />
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-white/[0.06] bg-[#0f0f1a] p-7 space-y-4">
              <Skeleton className="h-5 w-36" />
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <Skeleton className="w-8 h-8 rounded-lg flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/[0.06] bg-[#0f0f1a] p-7 space-y-4">
              <Skeleton className="h-5 w-40" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border-b border-white/5 pb-4 last:border-0 space-y-2">
                  <Skeleton className="h-4 w-64" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Generic section rows (about, services process, etc.) ────────────────────

export function SectionRowsSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <Skeleton className="h-5 w-24 rounded-full mx-auto" />
          <Skeleton className="h-10 w-80 mx-auto" />
        </div>
        <div className="space-y-6">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="flex gap-6 p-6 rounded-2xl border border-white/[0.06] bg-[#0d0d14]">
              <Skeleton className="w-10 h-10 rounded-xl flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
