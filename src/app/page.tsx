"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { COMPANIES, COMPANY } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { HomeHero } from "@/components/home/HomeHero";

const PILLARS = [
  {
    title: "Sustainability in Action",
    text: "Investing in clean energy and resource efficiency to build a greener, resilient Africa.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80",
    href: "/energy",
  },
  {
    title: "Our Role in Food Security",
    text: "Supporting agriculture through modern farming and efficient food production systems.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80",
    href: "/our-companies#farms",
  },
  {
    title: "Building Infrastructure",
    text: "Construction and engineering that transform skylines, roadways, and communities.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
    href: "/our-companies#construction",
  },
  {
    title: "Driving Industrial Growth",
    text: "Local manufacturing and industrial solutions that reduce imports and raise competitiveness.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1000&q=80",
    href: "/our-companies#manufacturing",
  },
  {
    title: "Empowering Communities",
    text: "Healthcare, education, and people-first solutions that uplift where we work and live.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    href: "/our-companies#healthcare",
  },
  {
    title: "Innovation for Progress",
    text: "Technology and forward-thinking systems that redefine business and development.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    href: "/our-companies#technology",
  },
];

const SUSTAIN_PILLARS = [
  "Financial",
  "Institutional",
  "Economic",
  "Operational",
  "Cultural",
  "Environmental",
  "Social",
];

const FEATURED = COMPANIES.slice(0, 5);

export default function HomePage() {
  const [activeBiz, setActiveBiz] = useState(0);

  return (
    <>
      <HomeHero />

      {/* Impact pillars — Dangote 6-up */}
      <section className="bg-[#0a0a0a] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">
              Sustainable impact. Real progress.
            </p>
            <h2 className="font-display mt-2 text-3xl text-white sm:text-4xl">
              Building prosperity & self-sufficiency
            </h2>
            <div className="mt-3 h-1 w-16 bg-[var(--gold)]" />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group relative block h-80 overflow-hidden sm:h-96"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl text-[var(--gold-bright)]">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/80">{p.text}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[var(--gold)]">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Businesses — Dangote accordion columns */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-white sm:text-4xl">Our Companies</h2>
            <div className="mt-3 h-1 w-16 bg-[var(--gold)]" />
            <p className="mt-4 max-w-2xl text-[var(--fg-muted)]">
              As a diversified group, our interest in multiple industries reflects our commitment to
              delivering essential solutions with excellence, integrity, and innovation.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex h-[520px] w-full overflow-hidden md:h-[600px]">
          {FEATURED.map((c, i) => {
            const open = activeBiz === i;
            return (
              <button
                key={c.slug}
                type="button"
                onMouseEnter={() => setActiveBiz(i)}
                onFocus={() => setActiveBiz(i)}
                onClick={() => setActiveBiz(i)}
                className={`relative overflow-hidden transition-all duration-500 ${
                  open ? "flex-[3]" : "flex-[1]"
                }`}
              >
                <Image src={c.image} alt={c.name} fill className="object-cover" sizes="40vw" />
                <div
                  className={`absolute inset-0 transition ${
                    open ? "bg-black/55" : "bg-black/35"
                  }`}
                />
                {open ? (
                  <div className="absolute inset-x-0 bottom-0 bg-[var(--gold)] p-5 text-left text-black">
                    <h3 className="text-lg font-bold uppercase">{c.short}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wide opacity-80">
                      Division / Engineering / Growth
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm">{c.blurb}</p>
                    <Link
                      href={c.slug === "energy" ? "/energy" : `/our-companies#${c.slug}`}
                      className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase"
                    >
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ) : (
                  <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                    <p className="text-sm font-semibold uppercase text-white">{c.short}</p>
                    <p className="text-[10px] uppercase text-white/70">Division</p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
        <div className="mx-auto flex max-w-7xl justify-end px-4 pt-6 sm:px-6 lg:px-8">
          <Button href="/our-companies" className="!rounded-none uppercase tracking-wide">
            → View All Businesses
          </Button>
        </div>
      </section>

      {/* Financing strip — replaces news/careers */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-[var(--gold)] px-6 py-16 text-black sm:px-10 lg:px-14">
          <h2 className="font-display text-3xl sm:text-4xl">Power Your Home with LiGHT</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-black/80">
            Through LiGHT Energy you can buy solar and pay over time — outright purchase,
            instalment plans, or pay-as-you-go lease for businesses.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex gap-2">
              <Check className="h-4 w-4 shrink-0" /> Outright purchase quotes
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 shrink-0" /> Instalment plans with flexible deposits
            </li>
            <li className="flex gap-2">
              <Check className="h-4 w-4 shrink-0" /> Pay-As-You-Go for commercial customers
            </li>
          </ul>
          <div className="mt-8">
            <Link
              href="/apply"
              className="inline-flex bg-black px-5 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--gold)]"
            >
              Get Your Quote →
            </Link>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=80"
            alt="Solar financing"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </section>

      {/* Sustainability band — Dangote 3-column */}
      <section className="grid lg:grid-cols-[1.1fr_1fr_0.9fr]">
        <div className="relative min-h-[440px] bg-[#0b1520] px-6 py-16 sm:px-10">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Sustainability</p>
            <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">
              Building prosperity & self-sufficiency
            </h2>
            <div className="mt-6">
              <Button href="/apply" className="!rounded-none uppercase">
                Get Started Today!
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-[#111] px-6 py-16 sm:px-10">
          <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
            At LiGHT Incorporation, sustainability goes beyond compliance. We build ventures that
            positively impact host communities and society at large. Our pillars are:
          </p>
          <ul className="mt-6 space-y-2">
            {SUSTAIN_PILLARS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white">
                <Check className="h-4 w-4 text-[var(--gold)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#f0ebe0] px-6 py-16 text-black sm:px-10">
          <p className="font-display text-4xl font-semibold">500+</p>
          <p className="mt-2 text-sm font-semibold">Projects Delivered</p>
          <p className="mt-2 text-xs text-black/70">
            Across energy, infrastructure, and emerging industries.
          </p>
          <div className="my-8 h-px bg-black/15" />
          <p className="font-display text-4xl font-semibold">12+</p>
          <p className="mt-2 text-sm font-semibold">Group Companies</p>
          <p className="mt-2 text-xs text-black/70">
            One partner. Specialised expertise under LiGHT Incorporation.
          </p>
        </div>
      </section>

      {/* Portrait strip closing — Dangote-like */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-black px-6 py-20 sm:px-12">
            <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">
              {COMPANY.tagline}
            </p>
            <h2 className="font-display mt-3 text-3xl text-white sm:text-5xl">
              Building Solutions That Power Businesses, Communities, and the Future.
            </h2>
            <p className="mt-5 max-w-lg text-[var(--fg-muted)]">
              We partner with businesses, governments, and communities to build sustainable systems
              that improve lives and drive long-term growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/apply" className="!rounded-none uppercase">
                See My Estimate
              </Button>
              <Button href="/contact" variant="secondary" className="!rounded-none uppercase">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative min-h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80"
              alt="Engineer on site"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
