import type { Metadata } from "next";
import { QuotePlatform } from "@/components/energy/QuotePlatform";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quote",
  description:
    "See what a LiGHT Energy system could cost in minutes. Size by your monthly power spend, then leave details for a full estimate.",
  path: "/energy/request-a-quote",
});

export default function Page() {
  return <QuotePlatform />;
}
