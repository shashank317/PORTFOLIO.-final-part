import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { SectionHead } from "@/components/common/SectionHead";
import SpecularButton from "@/components/common/SpecularButton";
import { PROJECTS } from "../../projects/data/projects";
import { Visual } from "./Visual";
import projBackground from "@/assets/skills-background.jpeg";
import { useOutsideClick } from "@/hooks/use-outside-click";
import type { Project } from "../../projects/types";

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-foreground"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export function Projects() {
  const [active, setActive] = useState<Project | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm h-full w-full z-[100]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[110] p-4 md:p-8">
            <motion.button
              key={`button-${active.id}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-6 right-6 items-center justify-center bg-surface border border-hairline/40 hover:border-accent transition-colors rounded-full h-10 w-10 z-10 cursor-pointer"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-[800px] h-full md:h-fit md:max-h-[90vh] flex flex-col bg-surface/95 backdrop-blur-2xl border border-hairline/40 md:rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.id}-${id}`} className="relative h-64 md:h-[400px] overflow-hidden border-b border-hairline/40 w-full shrink-0">
                 <Visual project={active} />
                 {/* Dark gradient overlay for modal header */}
                 <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
              </motion.div>

              <div className="flex flex-col flex-1 overflow-auto hide-scrollbar">
                <div className="flex flex-col justify-between items-start p-6 md:p-10 gap-6 border-b border-hairline/20">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-foreground"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-muted-foreground mt-4 text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed max-w-xl"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SpecularButton as={Link} href={active.link} size="md">
                      VIEW FULL CASE STUDY
                    </SpecularButton>
                  </motion.div>
                </div>
                
                <div className="p-6 md:p-10">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-muted-foreground/90 text-sm md:text-base leading-relaxed flex flex-col items-start gap-6"
                  >
                    <div className="border-l-2 border-accent/70 pl-4 py-1">
                      <p className="font-sans font-medium text-foreground">My Role: <span className="font-normal text-muted-foreground">{active.role}</span></p>
                    </div>
                    
                    <p className="max-w-2xl">{active.context}</p>
                    
                    <div className="mt-4">
                      <p className="font-label text-[0.8rem] tracking-wider uppercase mb-4 text-accent">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {active.stack.map((s) => (
                          <span
                            key={s}
                            className="font-sans text-[0.7rem] font-medium tracking-[0.02em] uppercase text-foreground/80 bg-elevated px-3 py-1.5 border border-hairline/20"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <section id="work" className="relative pt-16 pb-12">
        {/* Background Image Setup (Sticky for Scrollytelling effect) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="sticky top-0 h-[100svh] w-full flex items-center justify-center overflow-hidden">
            <img
              src={projBackground}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-50 -translate-y-12"
            />

            {/* Soft gradient fades for top and bottom edges */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
            {/* Radial glow for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_80%)]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-12">
          <SectionHead number="03" label="Selected Work" />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-12 mb-16">
            <h2 className="display text-[clamp(3.5rem,18vw,9rem)] leading-[0.84] md:text-[clamp(4.5rem,9vw,9rem)]">
              <span className="mask">
                <span>Things I built.</span>
              </span>
            </h2>
            <SpecularButton as="a" href="/projects" size="md">
              EXPLORE ALL PROJECTS
            </SpecularButton>
          </div>

          {/* High-End Interactive 3-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {PROJECTS.map((p, i) => (
              <motion.article
                layoutId={`card-${p.id}-${id}`}
                key={p.id}
                onClick={() => setActive(p)}
                className="group cursor-pointer relative flex flex-col justify-between overflow-hidden border border-hairline/40 bg-surface/40 p-8 md:p-10 backdrop-blur-[5px] transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl"
                style={{ ["--d" as string]: `${i * 120}ms` }}
              >
                {/* Subtle top glow highlight */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  {/* Header Row: Project Number & Category Badge */}
                  <div className="flex items-center justify-between border-b border-hairline/30 pb-5">
                    <span className="display text-3xl font-light text-accent">
                      {p.number}
                    </span>
                    <span className="font-label text-[0.78rem] tracking-[0.04em] uppercase text-muted-foreground bg-background/60 px-3 py-1 border border-hairline/30">
                      {p.role}
                    </span>
                  </div>

                  {/* Visual Preview Banner */}
                  <motion.div layoutId={`image-${p.id}-${id}`} className="my-6 block overflow-hidden border border-hairline/30">
                    <Visual project={p} />
                  </motion.div>

                  {/* Card Title & Description */}
                  <div className="block">
                    <motion.h3
                      layoutId={`title-${p.title}-${id}`}
                      className="display text-3xl md:text-4xl leading-tight transition-colors duration-300 group-hover:text-accent"
                    >
                      {p.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    layoutId={`description-${p.description}-${id}`}
                    className="mt-4 text-sm leading-relaxed text-muted-foreground/90 line-clamp-3"
                  >
                    {p.description}
                  </motion.p>
                </div>

                {/* Card Footer: Tech Stack & Link */}
                <div className="mt-8 pt-6 border-t border-hairline/30">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-sans text-[0.68rem] font-medium tracking-[0.02em] uppercase text-foreground/80 bg-background/80 px-2.5 py-1 border border-hairline/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div
                    className="inline-flex items-center gap-3 font-label text-[0.85rem] tracking-[0.06em] uppercase text-foreground transition-colors duration-300 group-hover:text-accent"
                  >
                    <span>VIEW CASE STUDY</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
