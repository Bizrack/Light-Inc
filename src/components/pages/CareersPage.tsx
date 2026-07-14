"use client";

import { Briefcase, GraduationCap, HeartHandshake, Rocket } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const ROLES = [
  {
    title: "Solar PV Engineers",
    team: "LiGHT Energy",
    type: "Full-time",
  },
  {
    title: "Project Managers",
    team: "LiGHT Construction",
    type: "Full-time",
  },
  {
    title: "Software Engineers",
    team: "LiGHT Technology",
    type: "Full-time",
  },
  {
    title: "Business Development Associates",
    team: "Group",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build tomorrow with us."
        subtitle="Join a diversified engineering and technology group where excellence, integrity, and innovation are everyday standards."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Rocket, title: "Impact work", text: "Contribute to projects that power real communities." },
            { icon: GraduationCap, title: "Growth", text: "Learn across energy, technology, and business." },
            { icon: HeartHandshake, title: "Culture", text: "Integrity, collaboration, and shared excellence." },
            { icon: Briefcase, title: "Careers that compound", text: "Room to specialize or grow across the group." },
          ].map((item) => (
            <StaggerItem key={item.title} className="glass-panel p-6">
              <item.icon className="mb-4 h-6 w-6 text-[var(--gold)]" />
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--fg-muted)]">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs tracking-[0.24em] uppercase text-[var(--gold)]">Open roles</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">Current opportunities</h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {ROLES.map((role) => (
              <Reveal key={role.title}>
                <div className="flex flex-wrap items-center justify-between gap-4 border border-[var(--border)] bg-black/20 px-5 py-5 transition hover:border-[rgba(212,175,55,0.4)]">
                  <div>
                    <h3 className="font-display text-xl">{role.title}</h3>
                    <p className="mt-1 text-sm text-[var(--fg-muted)]">
                      {role.team} · {role.type}
                    </p>
                  </div>
                  <Button
                    href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                    variant="secondary"
                  >
                    Apply
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-[var(--fg-muted)]">
              Do not see a fit? Send your CV to{" "}
              <a className="text-[var(--gold-bright)] underline" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
