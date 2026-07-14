"use client";

import { INDUSTRIES } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Excellence, integrity, and forward-thinking solutions."
        subtitle="LiGHT Incorporation exists to deliver innovative, sustainable, and high-impact solutions that empower individuals, businesses, industries, and communities."
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">Our Mission</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              World-class solutions. Lasting value.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--fg-muted)]">
              To provide world-class engineering, renewable energy, infrastructure, and technology
              solutions that create lasting value for our clients while contributing to sustainable
              economic and social development.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">Our Purpose</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              Improve lives. Shape a better future.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--fg-muted)]">
              To improve lives by designing and delivering reliable, innovative, and sustainable
              solutions that power growth, inspire confidence, and shape a better future for
              generations to come.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">
              The Industries We Serve
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl sm:text-4xl">
              We proudly serve a wide range of sectors
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <StaggerItem
                key={industry}
                className="border border-[var(--border)] bg-black/20 px-4 py-5 text-sm transition hover:-translate-y-1 hover:border-[rgba(212,175,55,0.45)] hover:text-[var(--gold-bright)]"
              >
                {industry}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="img-hover relative min-h-[460px] overflow-hidden bg-[#14110c]">
            <MediaImage
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
              alt="Professionals collaborating"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">
              Our Commitment to Innovation
            </p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">
              Innovation is at the heart of everything we do.
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--fg-muted)]">
              We continuously embrace emerging technologies, best engineering practices, and
              sustainable solutions to deliver exceptional results. By combining technical expertise
              with creative thinking, we help our clients overcome complex challenges, improve
              operational efficiency, and build a more resilient future.
            </p>
            <div className="mt-8">
              <Button href="/our-companies">Explore our companies</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
