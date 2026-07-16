"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { PageSkeleton } from "@/components/ui/SkeletonBlocks";

const FOCUS_ROUTES = ["/energy/request-a-quote", "/apply", "/partner"];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const focused = FOCUS_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/"));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <PageSkeleton />;
  }

  if (focused) {
    return (
      <>
        <main className="min-h-screen">{children}</main>
        <WhatsAppFloat />
        <CookieBanner />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[72px]">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </>
  );
}
