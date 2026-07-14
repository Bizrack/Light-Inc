"use client";

import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  compact?: boolean;
};

export function PageHero({ eyebrow, title, subtitle, image, compact }: Props) {
  return (
    <section className={`relative overflow-hidden ${compact ? "min-h-[42vh]" : "min-h-[58vh]"}`}>
      <MediaImage src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 hero-video-overlay" />
      <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 text-xs tracking-[0.24em] uppercase text-[var(--gold)]">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display max-w-4xl text-4xl leading-tight text-[var(--fg)] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-[var(--fg-muted)] sm:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
