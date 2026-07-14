import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "LiGHT",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#d4af37",
    icons: [
      {
        src: "/logo-light-inc.png",
        sizes: "600x531",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-light-inc-trans.png",
        sizes: "297x250",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "energy"],
    lang: "en",
    orientation: "portrait-primary",
  };
}
