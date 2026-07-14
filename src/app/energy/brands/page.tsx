"use client";

import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const BRANDS = [
  "Tier-1 PV partners",
  "Hybrid inverter platforms",
  "Lithium storage systems",
  "Monitoring & EMS",
  "Mounting & BOS",
  "Protection & switchgear",
];

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="Trusted hardware ecosystems."
        subtitle="We partner with proven manufacturers so every LiGHT Energy project is built on bankable components."
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80"
        compact
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b) => (
            <StaggerItem
              key={b}
              className="glass-panel flex min-h-[160px] items-center justify-center px-6 py-8 text-center text-[var(--gold-bright)]"
            >
              {b}
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="img-hover relative min-h-[420px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
              alt="Solar hardware"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl">Ask for a brand shortlist</h2>
            <p className="mt-4 text-[var(--fg-muted)]">
              Tell us your site constraints and we will recommend a stack that balances yield,
              warranty, and cost.
            </p>
            <div className="mt-6">
              <Button href="/energy/request-a-quote">Request a Quote</Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
