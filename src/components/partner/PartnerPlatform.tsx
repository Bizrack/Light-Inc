"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { ArrowLeft } from "lucide-react";
import { submitForm } from "@/lib/submissions";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import { useAppStore } from "@/store/useAppStore";
import { clsx } from "clsx";

const PARTNER_TYPES = [
  "Installer / EPC",
  "Distributor / Dealer",
  "Supplier / Manufacturer",
  "Investor / Financier",
  "Property Developer",
  "Reseller / Channel Partner",
  "Other",
] as const;

/** Focused partner application — same shell pattern as the quote form */
export function PartnerPlatform() {
  const draft = useAppStore((s) => s.partnerDraft);
  const setDraft = useAppStore((s) => s.setPartnerDraft);
  const resetDraft = useAppStore((s) => s.resetPartnerDraft);
  const [booting, setBooting] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 600);
    return () => clearTimeout(t);
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!draft.fullName.trim() || !draft.email.includes("@") || !draft.phone.trim()) {
      toast.error("Please complete name, email, and phone.");
      return;
    }
    if (!draft.company.trim() || !draft.partnerType) {
      toast.error("Please add your company and partner type.");
      return;
    }
    if (!draft.consent) {
      toast.error("Please agree to the privacy terms to continue.");
      return;
    }
    setSubmitting(true);
    const result = await submitForm({
      channel: "partner",
      payload: { ...draft },
    });
    setSubmitting(false);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success(
      result.deliveredVia === "resend"
        ? "Partner application sent. We’ll be in touch."
        : "Partner application saved. We’ll follow up shortly."
    );
    resetDraft();
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[var(--fg)]">
      <header className="border-b border-[var(--border)] bg-black/80">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-light-inc-trans.png"
              alt="LiGHT Incorporation"
              width={120}
              height={56}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--fg-muted)] hover:text-[var(--gold-bright)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to site
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <AnimatePresence mode="wait">
          {booting ? (
            <motion.div
              key="boot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex min-h-[65vh] flex-col items-center justify-center gap-3"
            >
              <LoaderSpinner label="Loading" />
              <p className="text-sm text-[var(--fg-muted)]">Preparing partner form…</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--gold)]">
                Be a Partner
              </p>
              <h1 className="font-display mt-3 text-3xl sm:text-4xl">
                Grow with LiGHT Incorporation
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-[var(--fg-muted)]">
                Tell us how you’d like to partner — distribution, installation, supply, investment,
                or channel. Your draft is saved on this device while you write.
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <section className="space-y-4 rounded-xl border border-[var(--border)] bg-black/40 p-4 sm:p-5">
                  <h2 className="text-[11px] tracking-[0.22em] uppercase text-[var(--fg-muted)]">
                    About you
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      value={draft.fullName}
                      onChange={(v) => setDraft({ fullName: v })}
                      required
                    />
                    <Field
                      label="Company / organisation"
                      value={draft.company}
                      onChange={(v) => setDraft({ company: v })}
                      required
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={draft.email}
                      onChange={(v) => setDraft({ email: v })}
                      required
                    />
                    <Field
                      label="Phone"
                      value={draft.phone}
                      onChange={(v) => setDraft({ phone: v })}
                      required
                    />
                  </div>
                </section>

                <section className="space-y-4 rounded-xl border border-[var(--border)] bg-black/40 p-4 sm:p-5">
                  <h2 className="text-[11px] tracking-[0.22em] uppercase text-[var(--fg-muted)]">
                    Partnership
                  </h2>
                  <div>
                    <p className="mb-2 text-sm font-medium">Partner type</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {PARTNER_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setDraft({ partnerType: type })}
                          className={clsx(
                            "min-h-[3.5rem] rounded-xl border px-4 py-3 text-left text-sm transition",
                            draft.partnerType === type
                              ? "border-[var(--gold)] bg-[rgba(212,175,55,0.12)]"
                              : "border-[rgba(212,175,55,0.25)] hover:border-[var(--gold)]"
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="State / location"
                      value={draft.state}
                      onChange={(v) => setDraft({ state: v })}
                      placeholder="e.g. Lagos"
                    />
                    <Field
                      label="Website (optional)"
                      value={draft.website}
                      onChange={(v) => setDraft({ website: v })}
                      placeholder="https://"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Tell us about the opportunity
                    </label>
                    <textarea
                      rows={5}
                      value={draft.message}
                      onChange={(e) => setDraft({ message: e.target.value })}
                      placeholder="Markets you cover, capacity, products, or how you’d like to work together"
                      className="field-input"
                      required
                    />
                  </div>
                </section>

                <label className="flex items-start gap-3 text-sm text-[var(--fg-muted)]">
                  <input
                    type="checkbox"
                    checked={draft.consent}
                    onChange={(e) => setDraft({ consent: e.target.checked })}
                    className="mt-1"
                  />
                  <span>
                    I agree that LiGHT Incorporation may contact me about this partnership and
                    process the information provided in line with the privacy policy.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary !w-full !justify-center !rounded-none disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Submit partner application"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="field-input"
      />
    </div>
  );
}
