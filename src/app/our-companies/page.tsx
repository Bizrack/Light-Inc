import type { Metadata } from "next";
import OurCompaniesPage from "@/components/pages/OurCompaniesPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Companies",
  description:
    "LiGHT Incorporation is a diversified group of companies dedicated to delivering innovative solutions across energy, construction, farms, technology, and more.",
  path: "/our-companies",
});

export default function Page() {
  return <OurCompaniesPage />;
}
