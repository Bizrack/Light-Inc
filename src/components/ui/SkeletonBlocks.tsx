"use client";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function PageSkeleton() {
  return (
    <SkeletonTheme baseColor="#16130e" highlightColor="#2a2418">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <Skeleton height={420} borderRadius={0} className="skeleton-shimmer" />
        <div className="grid gap-6 md:grid-cols-3">
          <Skeleton height={180} />
          <Skeleton height={180} />
          <Skeleton height={180} />
        </div>
        <Skeleton height={120} />
        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton height={240} />
          <Skeleton height={240} />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export function SectionSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <SkeletonTheme baseColor="#16130e" highlightColor="#2a2418">
      <div className="space-y-4">
        <Skeleton height={36} width="40%" />
        <Skeleton height={18} width="70%" />
        {Array.from({ length: rows }).map((_, i) => (
          <Skeleton key={i} height={96} />
        ))}
      </div>
    </SkeletonTheme>
  );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <SkeletonTheme baseColor="#16130e" highlightColor="#2a2418">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <Skeleton key={i} height={280} />
        ))}
      </div>
    </SkeletonTheme>
  );
}

export function NavSkeleton() {
  return (
    <SkeletonTheme baseColor="#16130e" highlightColor="#2a2418">
      <div className="flex h-20 items-center justify-between px-6">
        <Skeleton width={140} height={40} />
        <Skeleton width={420} height={24} />
        <Skeleton width={180} height={40} borderRadius={999} />
      </div>
    </SkeletonTheme>
  );
}
