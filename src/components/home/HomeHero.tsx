"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Factory, Globe2, HardHat } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const INTRO =
  "LiGHT Incorporation is a diversified engineering and technology company delivering innovative solutions across renewable energy, infrastructure, construction, and emerging industries. We partner with businesses, governments, and communities to build sustainable systems that improve lives and drive long-term growth.";

const SLIDES = [
  {
    id: "group",
    title: "Building Solutions That Power Businesses, Communities, and the Future.",
    mobileTitle: "Powering a Better Tomorrow",
    tagline: COMPANY.tagline,
    text: INTRO,
    mobileText: "Engineering and technology solutions that improve lives and drive lasting growth.",
    cta: { href: "/our-companies", label: "Explore Our Companies →" },
    image: "/images/photo-1541888946425-d81bb19240f5.webp",
    objectPosition: "center 72%",
  },
  {
    id: "energy",
    title: "Reliable Energy for Everyday Life",
    mobileTitle: "Reliable Energy for Everyday Life",
    tagline: "LiGHT Energy",
    text: "Renewable power, storage, and engineering solutions for homes, businesses, and communities.",
    mobileText: "Reliable renewable power for homes, businesses, and communities.",
    cta: { href: "/energy", label: "Explore LiGHT Energy →" },
    image: "/images/bill-mead-wmaP3Tl80ww-unsplash.jpg",
    objectPosition: "left 55%",
  },
  {
    id: "healthcare",
    title: "Better Healthcare, Healthier Communities",
    mobileTitle: "Healthcare for Healthier Communities",
    tagline: "LiGHT Healthcare",
    text: "Accessible, patient-centred healthcare services and technology designed to improve lives.",
    mobileText: "Accessible healthcare and technology designed to improve lives.",
    cta: { href: "/our-companies#healthcare", label: "Explore LiGHT Healthcare →" },
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=85",
    objectPosition: "center center",
  },
  {
    id: "academy",
    title: "Skills That Create New Possibilities",
    mobileTitle: "Skills That Create Possibilities",
    tagline: "LiGHT Academy",
    text: "Practical education, professional development, and digital skills for lifelong success.",
    mobileText: "Practical education and digital skills for lifelong success.",
    cta: { href: "/our-companies#academy", label: "Explore LiGHT Academy →" },
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=85",
    objectPosition: "center 48%",
  },
  {
    id: "construction",
    title: "Infrastructure Built to Endure",
    mobileTitle: "Infrastructure Built to Endure",
    tagline: "LiGHT Construction",
    text: "Quality construction and engineering that shape resilient infrastructure and thriving communities.",
    mobileText: "Quality construction for resilient, thriving communities.",
    cta: { href: "/our-companies#construction", label: "Explore LiGHT Construction →" },
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85",
    objectPosition: "center 58%",
  },
  {
    id: "real-estate",
    title: "Spaces Designed for Lasting Value",
    mobileTitle: "Spaces Designed for Lasting Value",
    tagline: "LiGHT Real Estate",
    text: "Exceptional residential, commercial, and mixed-use developments created for how people live and work.",
    mobileText: "Exceptional spaces created for how people live and work.",
    cta: { href: "/our-companies#real-estate", label: "Explore LiGHT Real Estate →" },
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    objectPosition: "center center",
  },
  {
    id: "solar-farms",
    title: "Solar Farms Built for Tomorrow",
    mobileTitle: "Solar Farms Built for Tomorrow",
    tagline: "LiGHT Energy · Utility-scale solar",
    text: "Bankable renewable infrastructure engineered from ground works through grid connection.",
    mobileText: "Renewable infrastructure engineered from ground works to grid.",
    cta: { href: "/energy/projects", label: "Explore Solar Projects →" },
    image: "/images/benjamin-peck-1lsoCjbLm3I-unsplash.jpg",
    objectPosition: "center 55%",
  },
] as const;

const AUTO_MS = 7000;
const CROSSFADE_MS = 900;

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
              priority={i === 0}
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

      <div className="relative z-10 flex h-full flex-col items-center justify-start px-4 pb-24 pt-32 text-center sm:px-8 sm:pt-36 md:justify-center md:pt-20">
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
            <h1 className="font-display text-2xl leading-[1.12] font-semibold tracking-wide text-white uppercase sm:text-4xl md:text-6xl lg:text-[3.4rem]">
              <span className="md:hidden">{slide.mobileTitle}</span>
              <span className="hidden md:inline">{slide.title}</span>
            </h1>
            {slide.text ? (
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/85 sm:text-base md:mt-5">
                <span className="md:hidden">{slide.mobileText}</span>
                <span className="hidden md:inline">{slide.text}</span>
              </p>
            ) : null}
            <div className="mt-7 md:mt-9">
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
