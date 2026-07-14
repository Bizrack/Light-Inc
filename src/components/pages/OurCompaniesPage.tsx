"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANIES } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/useAppStore";

export default function OurCompaniesPage() {
  const setPreferredCompany = useAppStore((s) => s.setPreferredCompany);
  const preferredCompany = useAppStore((s) => s.user.preferredCompany);

  return (
    <>
      <PageHero
        eyebrow="Our Companies"
        title="A diversified group. A shared standard of excellence."
        subtitle="Each company operates with specialized expertise while sharing a common commitment to excellence, integrity, innovation, and sustainable development."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANIES.map((c) => (
            <StaggerItem key={c.slug}>
              <a
                href={`#${c.slug}`}
                onClick={() => setPreferredCompany(c.slug)}
                className={`block border px-4 py-4 text-sm transition hover:-translate-y-0.5 hover:border-[rgba(212,175,55,0.5)] ${
                  preferredCompany === c.slug
                    ? "border-[var(--gold)] bg-[rgba(212,175,55,0.08)] text-[var(--gold-bright)]"
                    : "border-[var(--border)] text-[var(--fg-muted)]"
                }`}
              >
                {c.name}
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <div className="space-y-0">
        {COMPANIES.map((company, index) => {
          const href = company.slug === "energy" ? "/energy" : "/contact";
          const reverse = index % 2 === 1;
          return (
            <section
              key={company.slug}
              id={company.slug}
              className={`scroll-mt-24 border-t border-[var(--border)] ${
                reverse ? "bg-[var(--bg-soft)]" : ""
              }`}
            >
              <div
                className={`mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="img-hover relative min-h-[440px] overflow-hidden">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">
                    Division
                  </p>
                  <h2 className="font-display mt-3 text-3xl sm:text-4xl">{company.name}</h2>
                  <p className="mt-4 text-[var(--fg-muted)]">{company.blurb}</p>
                  <h3 className="mt-8 text-sm tracking-[0.16em] uppercase text-[var(--gold)]">
                    Core Services
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {company.services.map((service) => (
                      <li
                        key={service}
                        className="border-l border-[var(--border)] pl-3 text-sm text-[var(--fg)]"
                      >
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      href={href}
                      onClick={() => setPreferredCompany(company.slug)}
                    >
                      {company.slug === "energy" ? "Enter LiGHT Energy" : "Get in touch"}
                    </Button>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm text-[var(--gold)] transition hover:gap-3"
                    >
                      Talk to us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
