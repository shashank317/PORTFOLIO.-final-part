import { Link } from "@tanstack/react-router";
import { SectionHead } from "@/components/common/SectionHead";
import SpecularButton from "@/components/common/SpecularButton";
import { PROJECTS } from "../../projects/data/projects";
import { Visual } from "./Visual";

export function Projects() {
  return (
    <section id="work" className="relative pt-16 pb-12">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
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
            <article
              key={p.id}
              className="group relative flex flex-col justify-between overflow-hidden border border-hairline/40 bg-surface/40 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl"
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
                <div className="my-6">
                  <Link to={p.link as any} className="block overflow-hidden border border-hairline/30">
                    <Visual project={p} />
                  </Link>
                </div>

                {/* Card Title & Description */}
                <Link to={p.link as any} className="block">
                  <h3 className="display text-3xl md:text-4xl leading-tight transition-colors duration-300 group-hover:text-accent">
                    {p.title}
                  </h3>
                </Link>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90 line-clamp-3">
                  {p.description}
                </p>
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

                <Link
                  to={p.link as any}
                  className="inline-flex items-center gap-3 font-label text-[0.85rem] tracking-[0.06em] uppercase text-foreground transition-colors duration-300 group-hover:text-accent"
                >
                  <span>VIEW CASE STUDY</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
