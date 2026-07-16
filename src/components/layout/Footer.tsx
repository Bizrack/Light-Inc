"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, COMPANIES, NAV_LINKS, SOCIAL_LINKS } from "@/lib/content";
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

function SocialIcon({ network }: { network: (typeof SOCIAL_LINKS)[number]["network"] }) {
  const className = "h-4 w-4";
  if (network === "facebook") return <Facebook className={className} />;
  if (network === "instagram") return <Instagram className={className} />;
  if (network === "x") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    );
  }
  if (network === "threads") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.97-6.334-5.574 0-2.867 1.89-4.742 4.91-4.742.795 0 1.54.14 2.195.41-.05-.68-.08-1.26-.08-1.73 0-2.91 1.68-4.48 4.45-4.48 1.48 0 2.76.55 3.61 1.55l-1.52 1.57c-.53-.62-1.27-.95-2.1-.95-.99 0-1.66.58-1.66 1.66 0 .45.03 1.03.1 1.72 2.63-.33 4.55-1.74 4.55-4.34 0-3.02-2.44-5.12-6.03-5.12-4.07 0-6.78 2.55-6.78 6.35 0 .72.08 1.48.23 2.24C5.55 8.86 3.2 11.3 3.2 15.1c0 4.86 3.54 7.87 8.98 7.9H12.186zM12.5 16.2c-1.54 0-2.56.88-2.56 2.16 0 1.4 1.12 2.23 3.09 2.23 2.45 0 3.78-1.1 3.78-3.12 0-1.62-1.05-2.78-2.95-2.95.2.52.3 1.1.3 1.68 0 .7-.14 1.28-.4 1.72-.55.93-1.48 1.28-2.26 1.28z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.19 8.19 0 0 0 4.76 1.52V6.84a4.85 4.85 0 0 1-.99-.15z" />
    </svg>
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
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg-muted)] transition hover:-translate-y-1 hover:border-[var(--gold)] hover:text-[var(--gold-bright)]"
                aria-label={social.label}
              >
                <SocialIcon network={social.network} />
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
