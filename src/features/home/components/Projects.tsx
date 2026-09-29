import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { SectionHead } from "@/components/common/SectionHead";
import SpecularButton from "@/components/common/SpecularButton";
import { PROJECTS } from "../../projects/data/projects";
import { Visual } from "./Visual";
import projBackground from "@/assets/skills-background.jpeg";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { triggerHaptic } from "@/lib/haptics";
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
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        triggerHaptic("close");
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => {
    if (active) {
      triggerHaptic("close");
      setActive(null);
    }
  });

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm h-full w-full z-[100]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[110] p-4 md:p-8">
            <motion.button
              key={`button-${active.id}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-6 right-6 items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 hover:border-accent transition-colors rounded-full h-10 w-10 z-20 cursor-pointer shadow-lg"
              onClick={() => {
                triggerHaptic("close");
                setActive(null);
              }}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.id}-${id}`}
              ref={ref}
              className="w-full max-w-[850px] h-full md:h-fit md:max-h-[90vh] flex flex-col bg-surface/95 backdrop-blur-2xl border border-white/25 rounded-[12px] overflow-hidden shadow-2xl relative"
            >
              {/* Top & Left highlight lines matching glass-card */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/80 via-transparent to-white/30 pointer-events-none z-10" />

              <motion.div layoutId={`image-${active.id}-${id}`} className="relative w-full aspect-[16/9] max-h-[380px] overflow-hidden border-b border-white/15 shrink-0 bg-surface/60">
                 <Visual project={active} className="relative h-full w-full overflow-hidden" />
                 {/* Soft bottom edge gradient for modal header */}
                 <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface via-surface/30 to-transparent pointer-events-none" />
              </motion.div>

              <div className="flex flex-col flex-1 overflow-auto hide-scrollbar">
                <div className="flex flex-col justify-between items-start p-6 md:p-10 gap-4 border-b border-white/10">
                  <motion.h3
                    layoutId={`title-${active.id}-${id}`}
                    className="display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-none tracking-[0.03em] text-foreground"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.id}-${id}`}
                    className="text-zinc-300 text-[clamp(0.95rem,1.3vw,1.1rem)] leading-relaxed max-w-2xl"
                  >
                    {active.description}
                  </motion.p>
                </div>
                
                <div className="p-6 md:p-10 space-y-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-muted-foreground/90 text-sm md:text-base leading-relaxed flex flex-col items-start gap-6"
                  >
                    <div className="border-l-2 border-accent/70 pl-4 py-1">
                      <p className="font-sans font-medium text-foreground">Focus: <span className="font-normal text-muted-foreground">{active.role}</span></p>
                    </div>
                    
                    <p className="max-w-2xl text-zinc-300 text-sm leading-relaxed">{active.context}</p>
                    
                    <div>
                      <p className="font-label text-[0.8rem] tracking-wider uppercase mb-3 text-accent">Key Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {active.stack.map((s) => (
                          <span
                            key={s}
                            className="font-sans text-[0.7rem] font-medium tracking-[0.02em] uppercase text-foreground/90 bg-elevated/80 px-3 py-1.5 border border-white/15"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* List of Category Items */}
                  <div className="pt-8 border-t border-white/10 w-full">
                    <p className="font-label text-[0.8rem] tracking-wider uppercase text-accent mb-6">
                      Projects {active.items && active.items.length > 0 ? `(${active.items.length})` : ""}
                    </p>

                    {active.items && active.items.length > 0 ? (
                      <div className="flex flex-col gap-5">
                        {active.items.map((item) => (
                          <div
                            key={item.title}
                            className="flex flex-col gap-3 p-5 md:p-6 bg-background/50 border border-white/10 hover:border-white/25 transition-colors rounded-lg"
                          >
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <h4 className="font-sans text-base md:text-lg font-medium text-foreground">
                                {item.title}
                              </h4>
                              {item.note && (
                                <span className="font-sans text-[0.7rem] text-muted-foreground/90 bg-elevated px-2 py-0.5 border border-white/10">
                                  {item.note}
                                </span>
                              )}
                            </div>

                            <p className="text-sm leading-relaxed text-zinc-300">
                              {item.description}
                            </p>

                            {item.metric && (
                              <p className="font-sans text-xs text-accent font-medium">
                                {item.metric}
                              </p>
                            )}

                            <div className="flex flex-wrap gap-1.5 mt-1">
                              {item.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="font-sans text-[0.65rem] font-medium tracking-[0.02em] uppercase text-foreground/80 bg-elevated px-2 py-0.5 border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {(item.repoUrl || item.liveUrl || item.caseStudyUrl) && (
                              <div className="flex flex-wrap items-center gap-4 mt-2 pt-3 border-t border-white/10">
                                {item.repoUrl && (
                                  <a
                                    href={item.repoUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    onClick={() => triggerHaptic("light")}
                                    className="inline-flex items-center gap-1 text-xs font-label uppercase tracking-wider text-foreground hover:text-accent transition-colors"
                                  >
                                    <span>GitHub</span>
                                    <span>↗</span>
                                  </a>
                                )}
                                {item.liveUrl && (
                                  <a
                                    href={item.liveUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    onClick={() => triggerHaptic("light")}
                                    className="inline-flex items-center gap-1 text-xs font-label uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
                                  >
                                    <span>Live</span>
                                    <span>↗</span>
                                  </a>
                                )}
                                {item.caseStudyUrl && (
                                  <Link
                                    to={item.caseStudyUrl as any}
                                    onClick={() => triggerHaptic("light")}
                                    className="inline-flex items-center gap-1 text-xs font-label uppercase tracking-wider text-foreground hover:text-accent transition-colors"
                                  >
                                    <span>Case study</span>
                                    <span>→</span>
                                  </Link>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 border border-dashed border-white/20 text-center bg-background/30 rounded-lg">
                        <p className="font-label text-sm uppercase tracking-widest text-muted-foreground">
                          Coming soon
                        </p>
                        <p className="text-xs text-muted-foreground/80 mt-1">
                          Projects in this category are currently in development.
                        </p>
                      </div>
                    )}
                  </div>
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
                onClick={() => {
                  triggerHaptic("open");
                  setActive(p);
                }}
                className="glass-card group cursor-pointer relative flex flex-col justify-between p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl"
                style={{ ["--d" as string]: `${i * 120}ms` }}
              >
                {/* Subtle top glow highlight on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20 pointer-events-none" />

                <div>
                  {/* Header Row: Project Number & Category Badge */}
                  <div className="flex items-center justify-between border-b border-hairline/30 pb-5">
                    <span className="display text-3xl font-light text-accent">
                      {p.number}
                    </span>
                    <span className="font-label text-[0.78rem] tracking-[0.04em] uppercase text-foreground/90 bg-elevated/80 px-3 py-1 border border-white/15">
                      {p.role}
                    </span>
                  </div>

                  {/* Visual Preview Banner */}
                  <motion.div layoutId={`image-${p.id}-${id}`} className="my-6 block overflow-hidden border border-white/10 rounded-lg">
                    <Visual project={p} />
                  </motion.div>

                  {/* Card Title & Description */}
                  <div className="block">
                    <motion.h3
                      layoutId={`title-${p.id}-${id}`}
                      className="display text-3xl md:text-4xl leading-tight tracking-[0.03em] transition-colors duration-300 group-hover:text-accent"
                    >
                      {p.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    layoutId={`description-${p.id}-${id}`}
                    className="mt-4 text-sm leading-relaxed text-zinc-300 line-clamp-3"
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
                        className="font-sans text-[0.68rem] font-medium tracking-[0.02em] uppercase text-foreground/90 bg-elevated/80 px-2.5 py-1 border border-white/15"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div
                    className="inline-flex items-center gap-3 font-label text-[0.85rem] tracking-[0.06em] uppercase text-foreground transition-colors duration-300 group-hover:text-accent"
                  >
                    <span>
                      {p.items && p.items.length > 0
                        ? `${p.items.length} ${p.items.length === 1 ? "project" : "projects"} →`
                        : "Coming soon"}
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

