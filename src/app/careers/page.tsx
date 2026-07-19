import CareersPage from "@/components/pages/CareersPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Build your career at LiGHT Incorporation and help deliver solutions across energy, construction, technology, and emerging industries.",
  path: "/careers",
});

export default function Careers() {
  return <CareersPage />;
}
