import { useAppStore } from "@/store/useAppStore";
import { buildOutboundEmail } from "./email";
import type { FormSubmission, SubmitInput, SubmitResult } from "./types";

/**
 * Active form delivery target.
 * - store  → persist in Zustand (current)
 * - resend → POST /api/submit (Resend); also mirrored to the store
 *
 * Set NEXT_PUBLIC_FORM_PROVIDER=resend when Resend is ready.
 */
export function getFormProvider(): "store" | "resend" {
  const value = process.env.NEXT_PUBLIC_FORM_PROVIDER?.toLowerCase();
  return value === "resend" ? "resend" : "store";
}

function newId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `sub_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function toSubmission(
  input: SubmitInput,
  deliveredVia: FormSubmission["deliveredVia"],
  status: FormSubmission["status"],
  error?: string
): FormSubmission {
  return {
    id: newId(),
    channel: input.channel,
    payload: input.payload,
    createdAt: new Date().toISOString(),
    deliveredVia,
    status,
    error,
  } as FormSubmission;
}

/** Persist + prepare email content (email object is what Resend will send later) */
function saveToStore(
  input: SubmitInput,
  deliveredVia: FormSubmission["deliveredVia"],
  status: FormSubmission["status"],
  error?: string
): FormSubmission {
  const submission = toSubmission(input, deliveredVia, status, error);
  useAppStore.getState().addSubmission(submission);

  if (input.channel === "newsletter") {
    useAppStore.getState().setNewsletterEmail(input.payload.email);
  }

  // Keep draft email blueprint available for debugging / future Resend payload inspection
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.info("[form-submit]", submission.channel, buildOutboundEmail(input));
  }

  return submission;
}

/**
 * Single entry point for every public form.
 * UI should only call this — never talk to mailto / Resend directly.
 */
export async function submitForm(input: SubmitInput): Promise<SubmitResult> {
  const provider = getFormProvider();

  if (provider === "resend") {
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        submissionId?: string;
      };

      if (!res.ok || !data.ok) {
        saveToStore(input, "store", "failed", data.error || "Submit failed");
        return { ok: false, error: data.error || "Submit failed" };
      }

      const saved = saveToStore(input, "resend", "sent");
      return {
        ok: true,
        submissionId: data.submissionId || saved.id,
        deliveredVia: "resend",
      };
    } catch (err) {
      const message = err instanceof Error ? err.message : "Network error";
      saveToStore(input, "store", "failed", message);
      return { ok: false, error: message };
    }
  }

  const saved = saveToStore(input, "store", "stored");
  return { ok: true, submissionId: saved.id, deliveredVia: "store" };
}
