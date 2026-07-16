"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Factory, Globe2, HardHat } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const INTRO =
  "LiGHT Incorporation is a diversified engineering and technology company delivering innovative solutions across renewable energy, infrastructure, construction, and emerging industries. We partner with businesses, governments, and communities to build sustainable systems that improve lives and drive long-term growth.";

/**
 * Local solar farm / installation assets from /public/images
 * objectPosition keeps panels in frame (avoids sky-only crops).
 */
const SLIDES = [
  {
    id: "1",
    title: "Building Solutions That Power Businesses, Communities, and the Future.",
    tagline: COMPANY.tagline,
    text: INTRO,
    cta: { href: "/apply", label: "See My Estimate →" },
    image: "/images/photo-1541888946425-d81bb19240f5.webp",
    objectPosition: "center 72%",
  },
  {
    id: "2",
    title: "Energy That Works Where You Live",
    tagline: COMPANY.tagline,
    text: "Rooftop and commercial installs that cut diesel reliance and keep power flowing.",
    cta: { href: "/apply", label: "See My Estimate →" },
    image: "/images/bill-mead-wmaP3Tl80ww-unsplash.jpg",
    objectPosition: "left 55%",
  },
  {
    id: "3",
    title: "Clean Energy Construction in Progress",
    tagline: "Engineering · Installation · Commissioning",
    text: "On-site solar installation and field engineering that turn rooftops and land into reliable power.",
    cta: { href: "/apply", label: "Get a Quote →" },
    image: "/images/ricardo-gomez-angel-MagdWoazARo-unsplash.jpg",
    objectPosition: "center center",
  },
  {
    id: "4",
    title: "Powering Africa's Industrial Transformation",
    tagline: "Solar farms · Clean energy · Infrastructure",
    text: "Utility-scale and commercial solar arrays engineered, built, and commissioned for lasting generation.",
    cta: { href: "/our-companies", label: "Explore Our Businesses →" },
    image: "/images/zbynek-burival-V4ZYJZJ3W4M-unsplash.jpg",
    objectPosition: "left 60%",
  },
  {
    id: "5",
    title: "Solar Farms Built for Tomorrow",
    tagline: "From ground works to grid connection",
    text: "Construction crews, mounting systems, and panel arrays — delivering bankable renewable assets across Nigeria and beyond.",
    cta: { href: "/energy/projects", label: "Explore Our Projects →" },
    image: "/images/benjamin-peck-1lsoCjbLm3I-unsplash.jpg",
    objectPosition: "center 55%",
  },
  {
    id: "6",
    title: "Clean Energy Across the Horizon",
    tagline: "Utility-scale · Bankable · Built to last",
    text: "Rows of generation stretching to the horizon — solar infrastructure that powers industry and communities.",
    cta: { href: "/energy", label: "Explore LiGHT Energy →" },
    image: "/images/manny-becerra-NgdhrwAx0J8-unsplash.jpg",
    objectPosition: "center 55%",
  },
  {
    id: "7",
    title: "Building for Tomorrow, Today",
    tagline: COMPANY.tagline,
    text: "Where everyone has the opportunity to thrive — across renewable energy, agriculture, infrastructure, and emerging industries.",
    cta: { href: "/who-we-are", label: "Who We Are →" },
    image: "/images/michael-pointner-OZ0ZEAm_PbE-unsplash.jpg",
    objectPosition: "center 65%",
  },
  {
    id: "8",
    title: "Panels That Power Progress",
    tagline: "Solar · Storage · Systems that stay",
    text: "High-performance arrays sized for homes, businesses, and communities — installed with precision.",
    cta: { href: "/energy", label: "Explore LiGHT Energy →" },
    image: "/images/jeroen-van-de-water-aQOzmgcT6sI-unsplash.jpg",
    objectPosition: "center 45%",
  },
  {
    id: "9",
    title: "From Field to Grid Connection",
    tagline: "Renewable power that stays",
    text: "Precision installs and durable arrays — solar systems designed for real-world performance.",
    cta: { href: "/energy/projects", label: "Explore Our Projects →" },
    image: "/images/istvan-hernek-tOKF2VSdpJM-unsplash.jpg",
    objectPosition: "center 70%",
  },
  {
    id: "10",
    title: "Solar Engineering at Every Scale",
    tagline: "Homes · Businesses · Communities",
    text: "From close-up craftsmanship to full-site arrays — LiGHT Energy builds systems that perform.",
    cta: { href: "/contact", label: "Contact Us →" },
    image: "/images/michael-roberts-U0ys6tX7UMU-unsplash.jpg",
    objectPosition: "center 60%",
  },
  {
    id: "11",
    title: "Infrastructure That Powers Growth",
    tagline: "Engineering · Construction · Impact",
    text: "On-site teams delivering the systems that power businesses, communities, and the future.",
    cta: { href: "/our-companies", label: "Explore Our Companies →" },
    image: "/images/asia-chang-Yr-PvhKiorM-unsplash.jpg",
    objectPosition: "left center",
  },
] as const;

const AUTO_MS = 14000;
const CROSSFADE_MS = 1200;

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(index + 1), AUTO_MS);
    return () => clearInterval(t);
  }, [index, go]);

  return (
    <section className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#0a0a0a]">
      {/* Stacked crossfade — previous image stays visible under the next (no black gap) */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: `${CROSSFADE_MS}ms`,
              zIndex: i === index ? 2 : 1,
              pointerEvents: "none",
            }}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i <= 1}
              className="object-cover"
              style={{ objectPosition: s.objectPosition }}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 z-[3] hero-video-overlay" />
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/45 text-white sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/45 text-white sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-24 pt-20 text-center sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-copy"}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex max-w-5xl flex-col items-center"
          >
            {slide.tagline ? (
              <p className="mb-4 text-[10px] tracking-[0.32em] uppercase text-[var(--gold)] sm:text-xs">
                {slide.tagline}
              </p>
            ) : null}
            <h1 className="font-display text-3xl leading-[1.12] font-semibold tracking-wide text-white uppercase sm:text-5xl md:text-6xl lg:text-[3.4rem]">
              {slide.title}
            </h1>
            {slide.text ? (
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base">
                {slide.text}
              </p>
            ) : null}
            <div className="mt-9">
              <Button href={slide.cta.href} className="!rounded-none !px-7 !py-3.5 uppercase tracking-wide">
                {slide.cta.label}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2 md:left-10 md:translate-x-0">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-1.5 transition-all ${
                i === index ? "w-10 bg-[var(--gold)]" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-20 hidden w-[min(100%,320px)] bg-[var(--gold)] px-6 py-8 text-black shadow-2xl sm:right-0 md:block lg:w-[340px] lg:py-10">
        <div className="flex items-start gap-4 border-b border-black/20 pb-5">
          <Globe2 className="mt-0.5 h-6 w-6 shrink-0" />
          <div>
            <p className="text-2xl font-bold leading-none">12+</p>
            <p className="mt-1.5 text-sm font-semibold leading-snug">Business Divisions</p>
          </div>
        </div>
        <div className="flex items-start gap-4 border-b border-black/20 py-5">
          <HardHat className="mt-0.5 h-6 w-6 shrink-0" />
          <div>
            <p className="text-2xl font-bold leading-none">35+</p>
            <p className="mt-1.5 text-sm font-semibold leading-snug">States of Reach</p>
          </div>
        </div>
        <div className="flex items-start gap-4 pt-5">
          <Factory className="mt-0.5 h-6 w-6 shrink-0" />
          <div>
            <p className="text-2xl font-bold leading-none">500+</p>
            <p className="mt-1.5 text-sm font-semibold leading-snug">Projects Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
