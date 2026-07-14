"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "react-toastify";
import { COMPANY, COMPANIES } from "@/lib/content";
import { submitForm } from "@/lib/submissions";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/useAppStore";

export default function ContactPage() {
  const contactDraft = useAppStore((s) => s.contactDraft);
  const setContactDraft = useAppStore((s) => s.setContactDraft);
  const resetContactDraft = useAppStore((s) => s.resetContactDraft);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!contactDraft.name || !contactDraft.email || !contactDraft.message) {
      toast.error("Please complete name, email, and message.");
      return;
    }
    setSending(true);
    const result = await submitForm({
      channel: "contact",
      payload: { ...contactDraft },
    });
    setSending(false);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success(
      result.deliveredVia === "resend"
        ? "Message sent. We’ll get back to you soon."
        : "Message saved. We’ll follow up with you soon."
    );
    resetContactDraft();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to the team."
        subtitle="Share a few details and we will respond with clear next steps."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80"
        compact
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-6">
            <div className="glass-panel space-y-5 p-7">
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="flex items-start gap-4 transition hover:text-[var(--gold-bright)]"
              >
                <Phone className="mt-1 h-5 w-5 text-[var(--gold)]" />
                <div>
                  <p className="text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                    Phone
                  </p>
                  <p className="mt-1 text-lg">{COMPANY.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-4 transition hover:text-[var(--gold-bright)]"
              >
                <Mail className="mt-1 h-5 w-5 text-[var(--gold)]" />
                <div>
                  <p className="text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                    Email
                  </p>
                  <p className="mt-1 break-all text-lg">{COMPANY.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[var(--gold)]" />
                <div>
                  <p className="text-xs tracking-[0.16em] uppercase text-[var(--fg-muted)]">
                    Coverage
                  </p>
                  <p className="mt-1 text-lg">{COMPANY.address}</p>
                </div>
              </div>
            </div>
            <Button href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </Button>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="glass-panel space-y-4 p-7">
              <h2 className="font-display text-3xl">Send an enquiry</h2>
              <p className="text-sm text-[var(--fg-muted)]">
                Your draft is saved on this device while you write. Submissions are stored for
                follow-up.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={contactDraft.name}
                  onChange={(v) => setContactDraft({ name: v })}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={contactDraft.email}
                  onChange={(v) => setContactDraft({ email: v })}
                  required
                />
                <Field
                  label="Phone"
                  value={contactDraft.phone}
                  onChange={(v) => setContactDraft({ phone: v })}
                />
                <div>
                  <label className="mb-2 block text-xs tracking-[0.14em] uppercase text-[var(--fg-muted)]">
                    Interest
                  </label>
                  <select
                    value={contactDraft.interest}
                    onChange={(e) => setContactDraft({ interest: e.target.value })}
                    className="w-full rounded-xl border border-[var(--border)] bg-black/40 px-4 py-3 text-sm outline-none focus:border-[var(--gold)]"
                  >
                    <option value="">Select...</option>
                    {COMPANIES.map((c) => (
                      <option key={c.slug} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Field
                label="Subject"
                value={contactDraft.subject}
                onChange={(v) => setContactDraft({ subject: v })}
              />
              <div>
                <label className="mb-2 block text-xs tracking-[0.14em] uppercase text-[var(--fg-muted)]">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={contactDraft.message}
                  onChange={(e) => setContactDraft({ message: e.target.value })}
                  className="w-full rounded-xl border border-[var(--border)] bg-black/40 px-4 py-3 text-sm outline-none focus:border-[var(--gold)]"
                  required
                />
              </div>
              <Button type="submit" disabled={sending}>
                {sending ? "Sending…" : "Send message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs tracking-[0.14em] uppercase text-[var(--fg-muted)]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-[var(--border)] bg-black/40 px-4 py-3 text-sm outline-none focus:border-[var(--gold)]"
      />
    </div>
  );
}
