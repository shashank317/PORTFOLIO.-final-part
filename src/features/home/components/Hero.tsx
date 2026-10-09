import hero from "@/assets/hero-portrait.png";
import SpecularButton from "@/components/common/SpecularButton";
import { useParallax } from "@/lib/reveal";

export function Hero({ ready }: { ready: boolean }) {
  const { ref, p } = useParallax<HTMLElement>();
  const cls = (extra = "") => `${extra} ${ready ? "is-in" : ""}`;

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden pt-24 pb-3 md:pb-10"
    >
      {/* portrait image background */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[52%]"
        style={{ transform: `translate3d(0,${p * -30}px,0)` }}
      >
        <div className="absolute inset-0 glow-radial opacity-60" />
        <img
          src={hero}
          alt="Shashank H, side profile portrait lit with a cool blue rim light"
          className={cls("fade h-full w-full object-cover object-[60%_20%] transition-transform")}
          style={{
            filter: "brightness(2.2) contrast(1.05)",
            transform: ready ? "scale(1)" : "scale(1.03)",
            transitionProperty: "opacity, transform, filter",
            transitionDuration: "1.6s",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        {/* Soft edge blend overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#050505_12%,rgba(5,5,5,0.75)_32%,rgba(5,5,5,0.18)_65%,rgba(5,5,5,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Main content grid */}
      <div className="relative z-10 page-container flex flex-1 flex-col justify-between">
        {/* Top/Middle text block */}
        <div className="mt-auto pt-4 pb-6 md:pt-6 md:pb-12">
          {/* 1. Header Group (Subtitle + Name + Year) - Mobile alignment handled by .hero-mobile-title */}
          <div className="hero-mobile-title">
            {/* Subtitle */}
            <p
              className={cls("fade label mb-3 md:mb-6 text-[0.72rem] md:text-[0.7rem] tracking-[0.16em] md:tracking-[0.22em] text-muted-foreground")}
              style={{ ["--d" as string]: "150ms" }}
            >
              SOFTWARE ENGINEER / BACKEND / AI SYSTEMS
            </p>

            {/* Main Display Title */}
            <h1 className="display text-[clamp(3.6rem,14.5vw,10.5rem)] leading-[0.96] md:leading-[0.82] tracking-[-0.01em] md:tracking-[-0.03em] text-foreground mb-2 md:mb-6">
              <span className={cls("mask")} style={{ ["--d" as string]: "250ms" }}>
                <span>
                  SHASHANK<span className="inline-block text-accent mx-[0.03em] translate-y-[-0.08em] select-none">·</span>H
                </span>
              </span>
            </h1>

            {/* Year Indicator */}
            <p
              className={cls("fade label mb-4 md:mb-10 text-[0.75rem] md:text-[0.72rem] tracking-[0.2em] md:tracking-[0.24em] text-muted-foreground")}
              style={{ ["--d" as string]: "380ms" }}
            >
              / 2026
            </p>
          </div>

          {/* 2. Bio / Intro Paragraphs - Adjust translate-y on mobile here */}
          <div className="max-w-xl space-y-3 md:space-y-4 translate-y-10 md:translate-y-0">
            <p
              className={cls("fade text-[clamp(1.1rem,1.8vw,1.6rem)] font-normal leading-[1.35] text-foreground")}
              style={{ ["--d" as string]: "520ms" }}
            >
              I build backend systems and AI-powered products with Python.
            </p>
            <p
              className={cls("fade text-[clamp(0.875rem,1.15vw,1.05rem)] leading-relaxed text-muted-foreground")}
              style={{ ["--d" as string]: "620ms" }}
            >
              Focused on APIs, backend engineering, automation, and practical AI integrations.
            </p>
          </div>
        </div>

        {/* Bottom Alignment Bar */}
        <div
          className={cls("fade mt-auto flex w-full flex-wrap items-center justify-between gap-y-4 pt-4 md:pt-6")}
          style={{ ["--d" as string]: "750ms" }}
        >
          {/* Left Actions & Location */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <SpecularButton as="a" href="/Shashank_Resume.pdf" target="_blank" size="md">
              DOWNLOAD CV
            </SpecularButton>
            <span className="label text-[0.8rem] md:text-[0.78rem] tracking-[0.04em]">
              Based in Bengaluru, India
            </span>
          </div>

          {/* Right Section Label & Scroll Prompt (Hidden on mobile to de-duplicate clutter) */}
          <div className="hidden md:flex items-center gap-12 md:gap-24">
            <span className={cls("fade label text-[0.78rem] tracking-[0.04em]")} style={{ ["--d" as string]: "900ms" }}>
              00 / Intro
            </span>
            <span className={cls("fade label text-[0.78rem] tracking-[0.04em]")} style={{ ["--d" as string]: "980ms" }}>
              Scroll ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
