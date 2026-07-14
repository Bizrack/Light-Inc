"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { COMPANY, COMPANIES, NAV_LINKS } from "@/lib/content";
import { submitForm } from "@/lib/submissions";
import { useAppStore } from "@/store/useAppStore";

function CookieResetLink() {
  const resetCookieConsent = useAppStore((s) => s.resetCookieConsent);
  return (
    <button
      type="button"
      onClick={resetCookieConsent}
      className="hover:text-[var(--gold-bright)]"
    >
      Cookie settings
    </button>
  );
}

export function Footer() {
  const newsletterEmail = useAppStore((s) => s.user.newsletterEmail);
  const [email, setEmail] = useState(newsletterEmail);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSending(true);
    const result = await submitForm({
      channel: "newsletter",
      payload: { email: email.trim() },
    });
    setSending(false);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success(
      result.deliveredVia === "resend"
        ? "You're subscribed. Welcome aboard."
        : "You're on the list. Updates coming soon."
    );
  };

  return (
    <footer className="relative mt-24 border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <Image
            src="/logo-light-inc-trans.png"
            alt="LiGHT Incorporation"
            width={180}
            height={86}
            className="h-16 w-auto object-contain"
          />
          <p className="text-sm leading-relaxed text-[var(--fg-muted)]">
            A diversified engineering and technology group delivering solutions across energy,
            infrastructure, construction, and emerging industries.
          </p>
          <p className="text-xs tracking-[0.16em] uppercase text-[var(--gold)]">
            {COMPANY.tagline}
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition hover:-translate-y-1 hover:border-[var(--gold)] hover:text-[var(--gold-bright)]"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl text-[var(--gold-bright)]">Quick Links</h3>
          <ul className="space-y-3 text-sm text-[var(--fg-muted)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[var(--gold-bright)]">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/energy" className="transition hover:text-[var(--gold-bright)]">
                LiGHT Energy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xl text-[var(--gold-bright)]">
            Business Divisions
          </h3>
          <ul className="grid grid-cols-1 gap-2 text-sm text-[var(--fg-muted)] sm:grid-cols-2">
            {COMPANIES.slice(0, 10).map((c) => (
              <li key={c.slug}>
                <Link
                  href={c.slug === "energy" ? "/energy" : `/our-companies#${c.slug}`}
                  className="transition hover:text-[var(--gold-bright)]"
                >
                  {c.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="font-display text-xl text-[var(--gold-bright)]">Contact</h3>
          <ul className="space-y-3 text-sm text-[var(--fg-muted)]">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
              <a href={`tel:${COMPANY.phoneTel}`} className="hover:text-[var(--gold-bright)]">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="break-all hover:text-[var(--gold-bright)]"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
              <span>{COMPANY.address}</span>
            </li>
          </ul>

          <form onSubmit={onSubmit} className="space-y-3">
            <label className="block text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
              Stay informed
            </label>
            <div className="flex gap-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email"
                className="w-full rounded-full border border-[var(--border)] bg-black/40 px-4 py-2.5 text-sm outline-none transition focus:border-[var(--gold)]"
              />
              <button
                type="submit"
                disabled={sending}
                className="btn-primary !px-4 !py-2.5 text-sm disabled:opacity-60"
              >
                {sending ? "…" : "Join"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-[var(--border)] px-4 py-6 text-center text-xs text-[var(--fg-muted)] sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} LiGHT Incorporation. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--gold-bright)]">
              Privacy & cookies
            </Link>
            <CookieResetLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
