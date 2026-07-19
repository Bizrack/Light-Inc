import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = [
  "/",
  "/who-we-are",
  "/our-companies",
  "/careers",
  "/contact",
  "/partner",
  "/sign-in",
  "/apply",
  "/privacy",
  "/energy",
  "/energy/solutions",
  "/energy/products",
  "/energy/brands",
  "/energy/projects",
  "/energy/request-a-quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/energy") ? 0.8 : 0.7,
  }));
}
