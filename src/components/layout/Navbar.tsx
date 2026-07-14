"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, User, X } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/useAppStore";
import { clsx } from "clsx";

/** Header CTAs styled after Sygnite: Sign in + Get a quote */
export function Navbar() {
  const pathname = usePathname();
  const trackPage = useAppStore((s) => s.trackPage);
  const isSignedIn = useAppStore((s) => s.user.isSignedIn);
  const authAccount = useAppStore((s) => s.user.authAccount);
  const signOut = useAppStore((s) => s.signOut);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    trackPage(pathname);
  }, [pathname, trackPage]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-[var(--border)] bg-black/95 backdrop-blur-md"
          : "border-transparent bg-black/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <Image
            src="/logo-light-inc-trans.png"
            alt="LiGHT Incorporation"
            width={150}
            height={72}
            className="h-11 w-auto object-contain sm:h-12"
            priority
          />
          <span className="hidden max-w-[11rem] text-[10px] leading-snug tracking-[0.12em] uppercase text-[var(--fg-muted)] xl:block">
            {COMPANY.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition",
                  active ? "text-[var(--gold)]" : "text-[var(--fg)] hover:text-[var(--gold)]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isSignedIn && authAccount ? (
            <button
              type="button"
              onClick={() => signOut()}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-[var(--fg-muted)] transition hover:text-[var(--gold)]"
            >
              <User className="h-4 w-4" />
              {authAccount.name.split(" ")[0]} · Sign out
            </button>
          ) : (
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm text-[var(--fg)] transition hover:text-[var(--gold)]"
            >
              <User className="h-4 w-4" />
              Sign in
            </Link>
          )}
          <Button href="/apply" className="!rounded-none !px-4 !py-2.5 text-sm">
            Get a quote
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-[var(--border)] text-[var(--gold-bright)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-black px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-base hover:text-[var(--gold)]">
                {link.label}
              </Link>
            ))}
            {isSignedIn ? (
              <button
                type="button"
                onClick={() => signOut()}
                className="inline-flex items-center gap-2 text-left text-base text-[var(--fg-muted)]"
              >
                <User className="h-4 w-4" />
                Sign out
              </button>
            ) : (
              <Link href="/sign-in" className="inline-flex items-center gap-2 text-base">
                <User className="h-4 w-4" />
                Sign in
              </Link>
            )}
            <Button href="/apply" className="!rounded-none">
              Get a quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
