"use client";

import Link from "next/link";
import { ENERGY_NAV } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Energy systems for every scale."
        subtitle="Residential, commercial, industrial, hybrid, and long-term maintenance — designed around real demand."
        image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2000&q=80"
        compact
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ENERGY_NAV.solutions.map((s) => (
            <StaggerItem key={s.href}>
              <Link
                href={s.href}
                className="glass-panel block p-7 transition hover:-translate-y-1 hover:border-[rgba(212,175,55,0.45)]"
              >
                <h2 className="font-display text-2xl text-[var(--gold-bright)]">{s.label}</h2>
                <p className="mt-3 text-sm text-[var(--fg-muted)]">
                  Explore {s.label.toLowerCase()} solar and power solutions from LiGHT Energy.
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-10 text-center text-sm text-[var(--fg-muted)]">
          Need help choosing?{" "}
          <Link href="/energy/request-a-quote" className="text-[var(--gold-bright)] underline">
            Request a quote
          </Link>
        </Reveal>
      </section>
    </>
  );
}
