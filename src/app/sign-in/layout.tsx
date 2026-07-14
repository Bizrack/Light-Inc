import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sign in",
  description: "Sign in or create a LiGHT Incorporation account to continue quotes and project conversations.",
  path: "/sign-in",
  noIndex: true,
});

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return children;
}
