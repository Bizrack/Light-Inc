"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const theme = {
  baseColor: "#1a1610",
  highlightColor: "#3a3020",
} as const;

export function PageSkeleton() {
  return (
    <SkeletonTheme {...theme}>
      <div className="min-h-screen bg-black px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <Skeleton height={52} width="55%" borderRadius={0} />
          <Skeleton height={22} width="40%" borderRadius={0} />
          <div className="relative overflow-hidden">
            <Skeleton height={420} borderRadius={0} className="skeleton-shimmer" />
            <div className="media-skeleton pointer-events-none absolute inset-0" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="relative overflow-hidden">
                <Skeleton height={320} borderRadius={0} />
                <div className="media-skeleton pointer-events-none absolute inset-0" />
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Skeleton height={280} borderRadius={0} />
            <Skeleton height={280} borderRadius={0} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export function SectionSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <SkeletonTheme {...theme}>
      <div className="space-y-4">
        <Skeleton height={36} width="40%" borderRadius={0} />
        <Skeleton height={18} width="70%" borderRadius={0} />
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="relative overflow-hidden">
            <Skeleton height={120} borderRadius={0} />
            <div className="media-skeleton pointer-events-none absolute inset-0 opacity-60" />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <SkeletonTheme {...theme}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="relative overflow-hidden border border-[var(--border)]">
            <Skeleton height={220} borderRadius={0} />
            <div className="media-skeleton pointer-events-none absolute inset-0" />
            <div className="space-y-2 p-4">
              <Skeleton height={22} width="70%" borderRadius={0} />
              <Skeleton height={14} width="40%" borderRadius={0} />
            </div>
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
}

export function NavSkeleton() {
  return (
    <SkeletonTheme {...theme}>
      <div className="flex h-20 items-center justify-between px-6">
        <Skeleton width={140} height={40} borderRadius={0} />
        <Skeleton width={420} height={24} borderRadius={0} />
        <Skeleton width={180} height={40} borderRadius={0} />
      </div>
    </SkeletonTheme>
  );
}

export function ImageTileSkeleton({ className = "h-72" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#14110c] ${className}`}>
      <div className="media-skeleton absolute inset-0" />
    </div>
  );
}
