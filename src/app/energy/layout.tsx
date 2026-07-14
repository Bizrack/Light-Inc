import type { Metadata } from "next";
import { EnergyShell } from "@/components/energy/EnergyShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "LiGHT Energy",
  description:
    "LiGHT Energy delivers solar PV, battery storage, hybrid systems, and long-term operations for homes, businesses, and industries across Nigeria and Africa.",
  path: "/energy",
});

export default function EnergyLayout({ children }: { children: React.ReactNode }) {
  return <EnergyShell>{children}</EnergyShell>;
}
