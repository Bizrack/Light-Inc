import type { Metadata } from "next";
import WhoWeArePage from "@/components/pages/WhoWeArePage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Who We Are",
  description:
    "LiGHT Incorporation exists to deliver innovative, sustainable, and high-impact solutions that empower individuals, businesses, industries, and communities.",
  path: "/who-we-are",
});

export default function Page() {
  return <WhoWeArePage />;
}
