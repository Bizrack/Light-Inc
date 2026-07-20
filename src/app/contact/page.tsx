import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact LiGHT Incorporation — call +234 905 891 1060, email support@lightincorporation.com, or message us on WhatsApp.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
