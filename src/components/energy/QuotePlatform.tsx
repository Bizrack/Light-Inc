"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { ArrowLeft } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { ENERGY_PACKAGES } from "@/lib/packages";
import { submitForm } from "@/lib/submissions";
import { LoaderSpinner } from "@/components/ui/LoaderSpinner";
import { useAppStore } from "@/store/useAppStore";
import { clsx } from "clsx";

/** Exact Sygnite /apply quote flow — Black & Gold theme */
export function QuotePlatform() {
  const q = useAppStore((s) => s.quoteDraft);
  const setQ = useAppStore((s) => s.setQuoteDraft);
  const resetQ = useAppStore((s) => s.resetQuoteDraft);
  const [booting, setBooting] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 700);
    return () => clearTimeout(t);
  }, []);

  // PAYG only for business
  useEffect(() => {
    if (q.applicant === "individual" && q.payment === "payg") {
      setQ({ payment: "instalment" });
    }
  }, [q.applicant, q.payment, setQ]);

  const needsIdentity = q.payment === "instalment" || q.payment === "payg";

  const selectedPkg = useMemo(
    () =>
      ENERGY_PACKAGES.find((p) => p.id === q.packageId) ||
      (q.packageId === "custom" || q.packageId === "other"
        ? { name: q.packageId === "custom" ? "Custom solution" : "Other / not sure" }
        : null),
    [q.packageId]
  );

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!q.fullName.trim() || !q.email.includes("@") || !q.phone.trim()) {
      toast.error("Please complete name, email, and phone.");
      return;
    }
    if (!q.consent) {
      toast.error("Please agree to the privacy terms to continue.");
      return;
    }
    setSubmitting(true);
    const result = await submitForm({
      channel: "quote",
      payload: {
        applicant: q.applicant,
        payment: q.payment,
        deposit: q.deposit,
        tariff: q.tariff,
        packageId: q.packageId,
        packageName: selectedPkg?.name || q.packageId,
        fullName: q.fullName,
        email: q.email,
        phone: q.phone,
        state: q.state,
        budget: q.budget,
        address: q.address,
        need: q.need,
        notes: q.notes,
        nin: q.nin,
        consent: q.consent,
      },
    });
    setSubmitting(false);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success(
      result.deliveredVia === "resend"
        ? "Application sent. Our team will confirm next steps."
        : "Application saved. Our team will follow up shortly."
    );
    resetQ();
  };

  const selectCard =
    "w-full rounded-xl border px-5 py-6 text-left transition cursor-pointer min-h-[5.5rem]";
  const selected =
    "border-[var(--gold)] bg-[rgba(212,175,55,0.12)] text-[var(--fg)]";
  const idle = "border-[rgba(212,175,55,0.25)] bg-[var(--bg-elevated)] hover:border-[var(--gold)]";

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

      <AnimatePresence mode="wait">
        {booting ? (
          <motion.div
            key="boot"
            className="flex min-h-[65vh] flex-col items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-xs tracking-[0.28em] uppercase text-[var(--gold)]">
              Get your quote
            </p>
            <LoaderSpinner label="Loading" />
          </motion.div>
        ) : (
          <motion.main
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10"
          >
            <h1 className="text-center text-xs tracking-[0.32em] uppercase text-[var(--fg-muted)]">
              Get your quote
            </h1>
            <p className="mx-auto mt-4 max-w-md text-center text-sm text-[var(--fg-muted)]">
              Tell us what you need and how you’d like to pay. It takes two minutes, no obligation.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-8 space-y-8 rounded-2xl border border-[var(--border)] bg-[#111] p-5 shadow-2xl sm:p-8"
            >
              {/* I AM APPLYING AS */}
              <section>
                <h2 className="mb-3 text-[11px] tracking-[0.22em] uppercase text-[var(--fg-muted)]">
                  I am applying as
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {(
                    [
                      ["individual", "An individual"],
                      ["business", "A business"],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setQ({ applicant: value })}
                      className={clsx(selectCard, q.applicant === value ? selected : idle)}
                    >
                      <span className="font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* HOW WOULD YOU LIKE TO PAY */}
              <section>
                <h2 className="mb-3 text-[11px] tracking-[0.22em] uppercase text-[var(--fg-muted)]">
                  How would you like to pay?
                </h2>
                <div className="space-y-3">
                  {(
                    [
                      {
                        id: "outright" as const,
                        title: "Outright purchase",
                        text: "Pay once, own it outright. We send you a quote.",
                        disabled: false,
                      },
                      {
                        id: "instalment" as const,
                        title: "Instalment plan",
                        text: "Deposit upfront, spread the balance monthly.",
                        disabled: false,
                      },
                      {
                        id: "payg" as const,
                        title:
                          q.applicant === "individual"
                            ? "Pay-As-You-Go lease — businesses only"
                            : "Pay-As-You-Go lease",
                        text: "No big upfront cost; pay as you use the system.",
                        disabled: q.applicant === "individual",
                      },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={opt.disabled}
                      onClick={() => !opt.disabled && setQ({ payment: opt.id })}
                      className={clsx(
                        selectCard,
                        opt.disabled && "cursor-not-allowed opacity-40",
                        !opt.disabled && (q.payment === opt.id ? selected : idle)
                      )}
                    >
                      <span className="block font-medium">{opt.title}</span>
                      <span className="mt-1 block text-sm text-[var(--fg-muted)]">{opt.text}</span>
                    </button>
                  ))}
                </div>
                {q.applicant === "individual" && (
                  <p className="mt-3 text-xs text-[var(--fg-muted)]">
                    Pay-As-You-Go is for business and commercial customers only. As an individual
                    you can choose outright purchase or an instalment plan.
                  </p>
                )}
              </section>

              {/* DEPOSIT */}
              {q.payment === "instalment" && (
                <section>
                  <h2 className="mb-3 text-[11px] tracking-[0.22em] uppercase text-[var(--fg-muted)]">
                    Preferred upfront deposit
                  </h2>
                  <div className="grid grid-cols-4 gap-2">
                    {(["20", "30", "40", "50"] as const).map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setQ({ deposit: d })}
                        className={clsx(
                          "rounded-xl border py-3 text-sm font-medium transition",
                          q.deposit === d ? selected : idle
                        )}
                      >
                        {d}%
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-[var(--fg-muted)]">
                    A higher deposit lowers your monthly instalments. Final terms are confirmed by
                    LiGHT Energy before your contract.
                  </p>
                </section>
              )}

              {/* PAYG TARIFF */}
              {q.payment === "payg" && (
                <section>
                  <h2 className="mb-3 text-[11px] tracking-[0.22em] uppercase text-[var(--fg-muted)]">
                    PAYG energy tariff
                  </h2>
                  <div className="grid grid-cols-3 gap-2">
                    {(
                      [
                        ["day", "Day tier", "₦299/kWh"],
                        ["extended", "Extended", "₦345/kWh"],
                        ["custom", "Custom", "Agree a rate"],
                      ] as const
                    ).map(([id, title, rate]) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setQ({ tariff: id })}
                        className={clsx(
                          "rounded-xl border px-2 py-3 text-center transition",
                          q.tariff === id ? selected : idle
                        )}
                      >
                        <span className="block text-sm font-medium">{title}</span>
                        <span className="mt-1 block text-xs text-[var(--fg-muted)]">{rate}</span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--fg-muted)]">
                    On PAYG you pay only for the energy you use. LiGHT Energy owns, installs and
                    maintains the system. Final rate and sizing are confirmed before your contract.
                  </p>
                </section>
              )}

              {/* PACKAGES */}
              <section>
                <h2 className="mb-3 text-[11px] tracking-[0.22em] uppercase text-[var(--fg-muted)]">
                  Which LiGHT Energy package fits you?
                </h2>
                <div className="space-y-3">
                  {ENERGY_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setQ({ packageId: pkg.id })}
                      className={clsx(selectCard, q.packageId === pkg.id ? selected : idle)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-semibold">{pkg.name}</span>
                        <span className="shrink-0 text-[10px] tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                          {pkg.tag}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-[var(--fg)]">{pkg.specs}</p>
                      <p className="mt-1 text-sm text-[var(--fg-muted)]">{pkg.description}</p>
                    </button>
                  ))}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setQ({ packageId: "custom" })}
                      className={clsx(selectCard, q.packageId === "custom" ? selected : idle)}
                    >
                      <span className="font-semibold">Custom solution</span>
                      <p className="mt-1 text-sm text-[var(--fg-muted)]">
                        I want LiGHT Energy to design something specific.
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setQ({ packageId: "other" })}
                      className={clsx(selectCard, q.packageId === "other" ? selected : idle)}
                    >
                      <span className="font-semibold">Other / not sure</span>
                      <p className="mt-1 text-sm text-[var(--fg-muted)]">
                        Tell us what you need below.
                      </p>
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[var(--fg-muted)]">
                  You can adjust this with your LiGHT Energy advisor before your contract is issued.
                </p>
              </section>

              {/* CONTACT FIELDS */}
              <section className="space-y-4">
                <Field
                  label="Full name *"
                  value={q.fullName}
                  onChange={(v) => setQ({ fullName: v })}
                  placeholder="e.g. Tunde Bello"
                  required
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Email"
                    type="email"
                    value={q.email}
                    onChange={(v) => setQ({ email: v })}
                    placeholder="you@email.com"
                    required
                  />
                  <Field
                    label="Phone"
                    value={q.phone}
                    onChange={(v) => setQ({ phone: v })}
                    placeholder="080..."
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="State"
                    value={q.state}
                    onChange={(v) => setQ({ state: v })}
                    placeholder="e.g. Lagos"
                  />
                  <Field
                    label="Budget (₦, optional)"
                    value={q.budget}
                    onChange={(v) => setQ({ budget: v })}
                    placeholder="e.g. 5000000"
                  />
                </div>
                <Field
                  label="Installation address"
                  value={q.address}
                  onChange={(v) => setQ({ address: v })}
                  placeholder="Where the system will be installed"
                />
                <Field
                  label="What do you need?"
                  value={q.need}
                  onChange={(v) => setQ({ need: v })}
                  placeholder="e.g. 5kVA home backup, or 3-bed house"
                />
              </section>

              {/* Optional NIN for instalment / PAYG — no BVN */}
              {needsIdentity && (
                <section className="rounded-xl bg-black/40 p-4 sm:p-5">
                  <h2 className="mb-3 text-[11px] tracking-[0.22em] uppercase text-[var(--fg-muted)]">
                    Optional identity
                  </h2>
                  <Field
                    label="NIN (optional)"
                    value={q.nin}
                    onChange={(v) => setQ({ nin: v })}
                    placeholder="11-digit NIN"
                  />
                  <p className="mt-3 text-xs text-[var(--fg-muted)]">
                    You may share your NIN if you want us to speed up follow-up. We never ask for
                    BVN or bank login details.
                  </p>
                </section>
              )}

              <div>
                <label className="mb-2 block text-sm font-medium">Anything else?</label>
                <textarea
                  rows={4}
                  value={q.notes}
                  onChange={(e) => setQ({ notes: e.target.value })}
                  placeholder="Optional notes"
                  className="field-input"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-[var(--fg-muted)]">
                <input
                  type="checkbox"
                  checked={q.consent}
                  onChange={(e) => setQ({ consent: e.target.checked })}
                  className="mt-1 accent-[var(--gold)]"
                />
                <span>
                  I agree that LiGHT Incorporation may contact me and process the information and
                  documents I provide to assess my application, in line with its{" "}
                  <Link href="/privacy" className="text-[var(--gold-bright)] underline">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-[var(--gold)] py-3.5 text-center text-sm font-semibold text-black transition hover:brightness-110 disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Submit application"}
              </button>
            </form>

            <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[var(--fg-muted)]">
              {[
                { href: "/", label: "Home" },
                { href: "/energy/solutions/residential", label: "Residential" },
                { href: "/energy/solutions/commercial", label: "Commercial" },
                { href: "/apply", label: "Financing" },
                { href: "/contact", label: "Contact" },
              ].map((l, i, arr) => (
                <span key={l.href} className="inline-flex items-center gap-3">
                  <Link href={l.href} className="hover:text-[var(--gold-bright)]">
                    {l.label}
                  </Link>
                  {i < arr.length - 1 && <span>·</span>}
                </span>
              ))}
            </nav>
            <p className="mt-4 text-center text-xs text-[var(--fg-muted)]">
              LiGHT Energy · {COMPANY.name}
            </p>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[var(--fg)]">{label}</label>
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
