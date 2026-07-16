import type { Metadata } from "next";
import { PartnerPlatform } from "@/components/partner/PartnerPlatform";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Be a Partner",
  description:
    "Partner with LiGHT Incorporation — installers, distributors, suppliers, investors, and channel partners.",
  path: "/partner",
});

export default function PartnerPage() {
  return <PartnerPlatform />;
}
