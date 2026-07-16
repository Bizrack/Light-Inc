import type { Metadata } from "next";
import { COMPANY } from "@/lib/content";

/** Public site origin — set NEXT_PUBLIC_SITE_URL in production */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://lightincorporation.com";

export const SITE_NAME = COMPANY.name;
export const SITE_TAGLINE = COMPANY.tagline;

export const SITE_DESCRIPTION =
  "LiGHT Incorporation is a diversified engineering and technology company delivering innovative solutions across renewable energy, infrastructure, construction, and emerging industries. We partner with businesses, governments, and communities to build sustainable systems that improve lives and drive long-term growth.";

export const SITE_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`;

export const SITE_KEYWORDS = [
  "LiGHT Incorporation",
  "renewable energy Nigeria",
  "solar installation",
  "engineering",
  "infrastructure",
  "construction",
  "agriculture",
  "technology",
  "Africa",
  SITE_TAGLINE,
];

type PageSeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

/** Build per-page Metadata with shared Open Graph / Twitter defaults */
export function pageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image = "/opengraph-image",
  noIndex = false,
}: PageSeoInput = {}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;

  return {
    title: title ?? undefined,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo-light-inc.png`,
    description: SITE_DESCRIPTION,
    email: COMPANY.email,
    telephone: COMPANY.phoneTel,
    slogan: SITE_TAGLINE,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressRegion: "Nigeria",
    },
    sameAs: [
      COMPANY.whatsapp,
      "https://x.com/LiGHTINCORP",
      "https://www.instagram.com/lightincorporation",
      "https://www.facebook.com/share/1Bxvm8nnCE/",
      "https://www.threads.com/@lightincorporation",
      "https://www.tiktok.com/@lightincorporation",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phoneTel,
        contactType: "customer service",
        email: COMPANY.email,
        areaServed: "NG",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-light-inc.png`,
      },
    },
  };
}
