"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

/** Dangote-style: We value your privacy + Customise / Reject All / Accept All */
export function CookieBanner() {
  const decided = useAppStore((s) => s.user.cookieConsent.decided);
  const acceptAllCookies = useAppStore((s) => s.acceptAllCookies);
  const acceptNecessaryCookies = useAppStore((s) => s.acceptNecessaryCookies);
  const [ready, setReady] = useState(false);
  const [customise, setCustomise] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [prefs, setPrefs] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(t);
  }, []);

  const saveCustom = () => {
    if (analytics || prefs) acceptAllCookies();
    else acceptNecessaryCookies();
    setCustomise(false);
  };

  return (
    <AnimatePresence>
      {ready && !decided && (
        <motion.div
          role="dialog"
          aria-labelledby="cookie-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="fixed bottom-4 left-4 z-[90] w-[min(100%-2rem,380px)] border border-[var(--border)] bg-[#f7f4ec] p-5 text-[#111] shadow-xl"
        >
          <h2 id="cookie-title" className="text-base font-bold">
            We value your privacy
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#444]">
            We use cookies to enhance your browsing experience, serve personalised content, and
            analyse our traffic.{" "}
            <Link href="/privacy" className="underline">
              Privacy & cookies
            </Link>
          </p>

          {customise && (
            <div className="mt-3 space-y-2 border border-[#ddd] bg-white p-3 text-sm">
              <label className="flex items-center justify-between gap-2">
                <span>Necessary (always on)</span>
                <input type="checkbox" checked disabled className="accent-[var(--gold-deep)]" />
              </label>
              <label className="flex items-center justify-between gap-2">
                <span>Analytics</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="accent-[var(--gold-deep)]"
                />
              </label>
              <label className="flex items-center justify-between gap-2">
                <span>Preferences</span>
                <input
                  type="checkbox"
                  checked={prefs}
                  onChange={(e) => setPrefs(e.target.checked)}
                  className="accent-[var(--gold-deep)]"
                />
              </label>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCustomise((v) => !v)}
              className="border border-[#1a1a1a] px-3 py-2 text-xs font-semibold uppercase tracking-wide"
            >
              Customise
            </button>
            <button
              type="button"
              onClick={acceptNecessaryCookies}
              className="border border-[#1a1a1a] px-3 py-2 text-xs font-semibold uppercase tracking-wide"
            >
              Reject All
            </button>
            <button
              type="button"
              onClick={customise ? saveCustom : acceptAllCookies}
              className="bg-[var(--gold)] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-black"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
