"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ENERGY_NAV } from "@/lib/content";
import { ENERGY_PRODUCTS } from "@/lib/products";
import { PageHero } from "@/components/ui/PageHero";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export default function EnergyOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="LiGHT ENERGY"
        title="Empowering homes, businesses, and industries with reliable power."
        subtitle="Solar PV, battery storage, hybrid systems, audits, and long-term operations — sized honestly to your real usage."
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap gap-3">
            <Button href={ENERGY_NAV.quote}>Get your quote</Button>
            <Button href="/energy/products" variant="secondary">
              Browse Products Solutions
            </Button>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Sized to your real usage",
              text: "Honest system design from your appliances, load profile, and goals — no padding.",
            },
            {
              title: "Install, monitor, and stay",
              text: "We do not vanish after commissioning. Support and operations stay with you.",
            },
            {
              title: "Scale with confidence",
              text: "From residential backup to commercial and industrial plants — one partner.",
            },
          ].map((card) => (
            <StaggerItem key={card.title} className="glass-panel p-6">
              <h3 className="font-display text-2xl">{card.title}</h3>
              <p className="mt-3 text-sm text-[var(--fg-muted)]">{card.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Products Solutions — hardware for sale */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-soft)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">
                  Products Solutions
                </p>
                <h2 className="font-display mt-3 text-3xl sm:text-4xl">
                  Inverters, batteries, panels & accessories
                </h2>
                <p className="mt-3 max-w-2xl text-[var(--fg-muted)]">
                  Hardware available for sale and installation — request pricing on the pieces you
                  need.
                </p>
              </div>
              <Button href="/energy/products" variant="secondary">
                View all products
              </Button>
            </div>
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ENERGY_PRODUCTS.slice(0, 4).map((product) => (
              <StaggerItem key={product.id}>
                <Link
                  href="/energy/products"
                  className="img-hover group block overflow-hidden border border-[var(--border)] bg-black/30"
                >
                  <div className="relative h-64 overflow-hidden bg-[#14110c] sm:h-72">
                    <MediaImage
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] tracking-[0.14em] uppercase text-[var(--gold)]">
                      {product.category}
                    </p>
                    <h3 className="font-display mt-1 text-lg">{product.name}</h3>
                    <p className="mt-1 text-xs text-[var(--fg-muted)]">{product.priceLabel}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">Solutions</p>
            <h2 className="font-display mt-3 text-3xl">Systems for every scale</h2>
            <ul className="mt-6 space-y-3">
              {ENERGY_NAV.solutions.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-3 text-[var(--fg)] transition hover:text-[var(--gold-bright)]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/energy/solutions" variant="secondary">
                Explore solutions
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="img-hover relative min-h-[440px] overflow-hidden bg-[#14110c]">
            <MediaImage
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1400&q=80"
              alt="Residential solar array"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
