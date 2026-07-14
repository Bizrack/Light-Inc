import type { Metadata } from "next";
import { QuotePlatform } from "@/components/energy/QuotePlatform";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Get a Quote",
  description:
    "See what a LiGHT Energy system could cost in minutes. No salesperson. No pressure. Outright, instalment, or pay-as-you-go options.",
  path: "/apply",
});

export default function ApplyPage() {
  return <QuotePlatform />;
}
