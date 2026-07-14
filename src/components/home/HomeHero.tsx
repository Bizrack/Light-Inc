"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Factory, Globe2, HardHat } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const INTRO =
  "LiGHT Incorporation is a diversified engineering and technology company delivering innovative solutions across renewable energy, infrastructure, construction, and emerging industries. We partner with businesses, governments, and communities to build sustainable systems that improve lives and drive long-term growth.";

/** Dangote-style: full-bleed media, centered uppercase headline, one CTA, floating stats */
const SLIDES = [
  {
    id: "1",
    title: "Building Solutions That Power Businesses, Communities, and the Future.",
    tagline: COMPANY.tagline,
    text: INTRO,
    cta: { href: "/apply", label: "See My Estimate →" },
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-solar-panels-on-a-rooftop-5684/1080p.mp4",
  },
  {
    id: "2",
    title: "Powering Africa's Industrial Transformation",
    tagline: null,
    text: null,
    cta: { href: "/our-companies", label: "Explore Our Businesses →" },
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: "3",
    title: "Building for Tomorrow, Today",
    tagline: COMPANY.tagline,
    text: "Where everyone has the opportunity to thrive — across renewable energy, agriculture, infrastructure, and emerging industries.",
    cta: { href: "/who-we-are", label: "Who We Are →" },
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
  },
];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 9000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[680px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.05 }}
        >
          {"video" in slide && slide.video ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={slide.image}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ) : null}
          <Image
            src={slide.image}
            alt=""
            fill
            priority={index === 0}
            className={`object-cover ${"video" in slide && slide.video ? "-z-10" : ""}`}
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-video-overlay" />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/45 text-white sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => setIndex((i) => (i + 1) % SLIDES.length)}
        className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/45 text-white sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-24 pt-20 text-center sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-copy"}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55 }}
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
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all ${
                i === index ? "w-10 bg-[var(--gold)]" : "w-4 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating stats — Dangote pattern, taller card */}
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
