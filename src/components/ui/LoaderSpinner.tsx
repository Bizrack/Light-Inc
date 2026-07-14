"use client";

export function LoaderSpinner({
  label = "Loading",
  fullScreen = false,
}: {
  label?: string;
  fullScreen?: boolean;
}) {
  const content = (
    <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
      <div className="relative">
        <div className="loader-ring" />
        <div className="absolute inset-0 m-auto h-2 w-2 animate-pulse rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--glow)]" />
      </div>
      <p className="text-sm tracking-[0.2em] uppercase text-[var(--fg-muted)]">{label}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(5,5,5,0.72)] backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
}
