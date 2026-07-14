"use client";

import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { COMPANY } from "@/lib/content";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy & cookies"
        subtitle="How we use essential cookies and optional analytics on this website."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
        compact
      />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-[var(--fg-muted)] sm:px-6">
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-[var(--fg)]">Cookies we use</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              <strong className="text-[var(--gold-bright)]">Strictly necessary</strong> — required
              for core site functions, form drafts on your device, and remembering your cookie
              choice.
            </li>
            <li>
              <strong className="text-[var(--gold-bright)]">Analytics</strong> — help us understand
              how pages are used (only if you accept all cookies).
            </li>
            <li>
              <strong className="text-[var(--gold-bright)]">Preferences</strong> — remember choices
              such as preferred company or newsletter interest.
            </li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl text-[var(--fg)]">Your choice</h2>
          <p className="text-sm leading-relaxed">
            On first visit you can accept all cookies or continue with necessary cookies only. Your
            decision is saved on this device. Contact us at{" "}
            <a className="text-[var(--gold-bright)]" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>{" "}
            for privacy questions.
          </p>
        </section>
        <p className="text-sm">
          <Link href="/" className="text-[var(--gold)] hover:text-[var(--gold-bright)]">
            ← Back home
          </Link>
        </p>
      </article>
    </>
  );
}
