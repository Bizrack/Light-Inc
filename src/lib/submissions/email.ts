import type { FormChannel, SubmitInput } from "./types";
import { COMPANY } from "@/lib/content";

/** Email blueprints — swap transport to Resend without rewriting form UI */
export type OutboundEmail = {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
};

const ADMIN = COMPANY.email;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rowsToHtml(rows: [string, string][]) {
  return `
    <table cellpadding="0" cellspacing="0" style="width:100%;font-family:Arial,sans-serif;font-size:14px;color:#111">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 0;border-bottom:1px solid #eee;width:140px;color:#666">${escapeHtml(k)}</td><td style="padding:6px 0;border-bottom:1px solid #eee">${escapeHtml(v)}</td></tr>`
        )
        .join("")}
    </table>
  `;
}

function rowsToText(rows: [string, string][]) {
  return rows.map(([k, v]) => `${k}: ${v}`).join("\n");
}

export function buildOutboundEmail(input: SubmitInput): OutboundEmail {
  if (input.channel === "contact") {
    const p = input.payload;
    const rows: [string, string][] = [
      ["Name", p.name],
      ["Email", p.email],
      ["Phone", p.phone || "—"],
      ["Interest", p.interest || "—"],
      ["Subject", p.subject || "Enquiry from website"],
      ["Message", p.message],
    ];
    return {
      to: ADMIN,
      replyTo: p.email,
      subject: `[Contact] ${p.subject || "Website enquiry"} — ${p.name}`,
      text: rowsToText(rows),
      html: `<h2>New contact enquiry</h2>${rowsToHtml(rows)}`,
    };
  }

  if (input.channel === "quote") {
    const p = input.payload;
    const rows: [string, string][] = [
      ["Applicant", p.applicant],
      ["Payment", p.payment],
      ["Deposit", p.payment === "instalment" ? `${p.deposit}%` : "—"],
      ["Tariff", p.payment === "payg" ? p.tariff : "—"],
      ["Package", p.packageName || p.packageId],
      ["Full name", p.fullName],
      ["Email", p.email],
      ["Phone", p.phone],
      ["State", p.state || "—"],
      ["Budget", p.budget || "—"],
      ["Address", p.address || "—"],
      ["Need", p.need || "—"],
      ["Notes", p.notes || "—"],
      ["NIN", p.nin || "—"],
      ["Consent", p.consent ? "Yes" : "No"],
    ];
    return {
      to: ADMIN,
      replyTo: p.email,
      subject: `[Quote] ${p.packageName || p.packageId} — ${p.fullName}`,
      text: rowsToText(rows),
      html: `<h2>New solar quote application</h2>${rowsToHtml(rows)}`,
    };
  }

  if (input.channel === "partner") {
    const p = input.payload;
    const rows: [string, string][] = [
      ["Full name", p.fullName],
      ["Company", p.company],
      ["Email", p.email],
      ["Phone", p.phone],
      ["Partner type", p.partnerType],
      ["State", p.state || "—"],
      ["Website", p.website || "—"],
      ["Message", p.message],
      ["Consent", p.consent ? "Yes" : "No"],
    ];
    return {
      to: ADMIN,
      replyTo: p.email,
      subject: `[Partner] ${p.partnerType || "Application"} — ${p.company || p.fullName}`,
      text: rowsToText(rows),
      html: `<h2>New partner application</h2>${rowsToHtml(rows)}`,
    };
  }

  const p = input.payload;
  const rows: [string, string][] = [["Email", p.email]];
  return {
    to: ADMIN,
    replyTo: p.email,
    subject: `[Newsletter] ${p.email}`,
    text: rowsToText(rows),
    html: `<h2>Newsletter signup</h2>${rowsToHtml(rows)}`,
  };
}

export function channelLabel(channel: FormChannel) {
  if (channel === "contact") return "Contact enquiry";
  if (channel === "quote") return "Quote application";
  if (channel === "partner") return "Partner application";
  return "Newsletter signup";
}
