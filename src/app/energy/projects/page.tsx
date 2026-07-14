"use client";

import { PROJECTS } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const EXTRA = [
  {
    title: "Hospital Hybrid Backup",
    location: "Abuja",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Agribusiness Cold Storage Power",
    location: "Ogun",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProjectsPage() {
  const all = [...PROJECTS, ...EXTRA];
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Real work. Measurable power."
        subtitle="Selected installations across residential, commercial, and industrial sites."
        image="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2000&q=80"
        compact
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((project) => (
            <StaggerItem
              key={project.title}
              className="img-hover overflow-hidden border border-[var(--border)]"
            >
              <div className="relative h-72 bg-[#14110c] sm:h-80">
                <MediaImage
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="min-h-[7.5rem] p-6">
                <h3 className="font-display text-2xl">{project.title}</h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">{project.location}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 text-center">
          <Button href="/energy/request-a-quote">Start your project</Button>
        </Reveal>
      </section>
    </>
  );
}
