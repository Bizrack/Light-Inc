/** Shared form payloads — same shapes used by the store today and Resend later */

export type FormChannel = "contact" | "quote" | "newsletter" | "partner";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  interest: string;
};

export type QuotePayload = {
  applicant: string;
  payment: string;
  deposit: string;
  tariff: string;
  packageId: string;
  packageName: string;
  fullName: string;
  email: string;
  phone: string;
  state: string;
  budget: string;
  address: string;
  need: string;
  notes: string;
  nin: string;
  consent: boolean;
};

export type NewsletterPayload = {
  email: string;
};

export type PartnerPayload = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  partnerType: string;
  state: string;
  website: string;
  message: string;
  consent: boolean;
};

export type FormPayloadMap = {
  contact: ContactPayload;
  quote: QuotePayload;
  newsletter: NewsletterPayload;
  partner: PartnerPayload;
};

export type FormSubmission<C extends FormChannel = FormChannel> = {
  id: string;
  channel: C;
  payload: FormPayloadMap[C];
  createdAt: string;
  /** Where it was delivered: local store now, resend after migration */
  deliveredVia: "store" | "resend";
  status: "stored" | "queued" | "sent" | "failed";
  error?: string;
};

export type SubmitInput =
  | { channel: "contact"; payload: ContactPayload }
  | { channel: "quote"; payload: QuotePayload }
  | { channel: "newsletter"; payload: NewsletterPayload }
  | { channel: "partner"; payload: PartnerPayload };

export type SubmitResult =
  | { ok: true; submissionId: string; deliveredVia: "store" | "resend" }
  | { ok: false; error: string };
