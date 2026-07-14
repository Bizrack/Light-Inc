"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { ENERGY_NAV } from "@/lib/content";
import { clsx } from "clsx";

const TOP = [
  { href: ENERGY_NAV.overview, label: "Overview" },
  { href: "/energy/solutions", label: "Solutions" },
  { href: "/energy/products", label: "Products Solutions" },
  { href: ENERGY_NAV.brands, label: "Brands" },
  { href: ENERGY_NAV.projects, label: "Projects" },
  { href: ENERGY_NAV.quote, label: "Request a Quote" },
];

export function EnergyShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isQuote = pathname.includes("request-a-quote") || pathname === "/apply";

  if (isQuote) {
    return <>{children}</>;
  }

  return (
    <div>
      <div className="sticky top-[72px] z-40 border-b border-[var(--border)] bg-[rgba(0,0,0,0.92)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-3 scrollbar-thin sm:px-6 lg:px-8">
          {TOP.map((item) => {
            const active =
              item.href === "/energy"
                ? pathname === "/energy"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm transition",
                  active
                    ? "bg-[rgba(212,175,55,0.16)] text-[var(--gold-bright)]"
                    : "text-[var(--fg-muted)] hover:text-[var(--gold-bright)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      {children}
    </div>
  );
}
