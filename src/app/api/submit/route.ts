import { NextResponse } from "next/server";
import { buildOutboundEmail } from "@/lib/submissions/email";
import type { SubmitInput } from "@/lib/submissions/types";

export const runtime = "nodejs";

function isSubmitInput(body: unknown): body is SubmitInput {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    (b.channel === "contact" ||
      b.channel === "quote" ||
      b.channel === "newsletter" ||
      b.channel === "partner") &&
    typeof b.payload === "object" &&
    b.payload !== null
  );
}

/**
 * Form intake API — ready for Resend.
 *
 * Migration checklist:
 * 1. npm i resend
 * 2. RESEND_API_KEY=re_xxx
 * 3. RESEND_FROM="LiGHT Incorporation <onboarding@resend.dev>" (then your verified domain)
 * 4. NEXT_PUBLIC_FORM_PROVIDER=resend
 * 5. Uncomment the Resend send block below
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isSubmitInput(body)) {
    return NextResponse.json({ ok: false, error: "Invalid submission payload" }, { status: 400 });
  }

  const email = buildOutboundEmail(body);
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "LiGHT Incorporation <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Resend is not configured yet. Set RESEND_API_KEY (and RESEND_FROM), or keep NEXT_PUBLIC_FORM_PROVIDER=store.",
      },
      { status: 503 }
    );
  }

  // --- Resend send (enable when package is installed) ---
  // import { Resend } from "resend";
  // const resend = new Resend(apiKey);
  // const { data, error } = await resend.emails.send({
  //   from,
  //   to: email.to,
  //   replyTo: email.replyTo,
  //   subject: email.subject,
  //   text: email.text,
  //   html: email.html,
  // });
  // if (error) {
  //   return NextResponse.json({ ok: false, error: error.message }, { status: 502 });
  // }
  // return NextResponse.json({ ok: true, submissionId: data?.id, deliveredVia: "resend" });

  void from;
  void email;
  void apiKey;

  return NextResponse.json(
    {
      ok: false,
      error:
        "Resend client not wired yet. Install `resend`, uncomment the send block in /api/submit, then retry.",
    },
    { status: 501 }
  );
}
