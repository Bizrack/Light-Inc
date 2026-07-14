"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ENERGY_PRODUCTS } from "@/lib/products";
import { PageHero } from "@/components/ui/PageHero";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const CATEGORIES = [
  "All",
  "Solar Panels",
  "Inverters",
  "Batteries",
  "Mounting",
  "Accessories",
  "Monitoring",
  "EV Chargers",
] as const;

export default function ProductsSolutionsPage() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const items = useMemo(
    () =>
      category === "All"
        ? ENERGY_PRODUCTS
        : ENERGY_PRODUCTS.filter((p) => p.category === category),
    [category]
  );

  return (
    <>
      <PageHero
        eyebrow="Products Solutions"
        title="Inverters, batteries, panels & accessories for sale."
        subtitle="Browse LiGHT Energy hardware — request pricing for residential, commercial, and industrial installs."
        image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2000&q=80"
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  category === c
                    ? "bg-[var(--gold)] text-[var(--black)]"
                    : "border border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--gold-bright)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <StaggerItem key={product.id}>
              <article className="flex h-full flex-col overflow-hidden border border-[var(--border)] bg-black/30">
                <Link
                  href={product.href}
                  className="img-hover relative block h-72 overflow-hidden bg-[#14110c] sm:h-80"
                >
                  <MediaImage
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] tracking-[0.16em] uppercase text-[var(--gold)]">
                    {product.category}
                  </p>
                  <h2 className="font-display mt-2 text-xl text-[var(--fg)]">{product.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-[var(--fg-muted)]">{product.blurb}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.specs.map((s) => (
                      <li
                        key={s}
                        className="border border-[var(--border)] px-2 py-1 text-[10px] tracking-wide text-[var(--fg-muted)]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Button href="/apply" className="!px-4 !py-2 text-sm">
                      {product.priceLabel}
                    </Button>
                    <Link
                      href={product.href}
                      className="text-sm text-[var(--gold)] hover:text-[var(--gold-bright)]"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
