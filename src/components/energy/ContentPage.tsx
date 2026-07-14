"use client";

import { PageHero } from "@/components/ui/PageHero";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ENERGY_NAV } from "@/lib/content";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  paragraphs: string[];
  bullets?: string[];
  ctaHref?: string;
  ctaLabel?: string;
};

export function ContentPage({
  eyebrow,
  title,
  subtitle,
  image,
  paragraphs,
  bullets,
  ctaHref = ENERGY_NAV.quote,
  ctaLabel = "Request a Quote",
}: ContentPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={image} compact />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-4">
            {paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-[var(--fg-muted)]">
                {p}
              </p>
            ))}
            {bullets && (
              <ul className="mt-4 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="border-l border-[var(--border)] pl-3 text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            )}
            <div className="pt-4">
              <Button href={ctaHref}>{ctaLabel}</Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="img-hover relative min-h-[440px] overflow-hidden bg-[#14110c]">
            <MediaImage src={image} alt="" fill className="object-cover" sizes="50vw" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
