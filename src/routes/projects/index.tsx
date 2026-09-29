import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHead } from "@/components/common/SectionHead";
import { PROJECTS, FEATURED_CASE_STUDIES } from "@/features/projects/data/projects";
import { triggerHaptic } from "@/lib/haptics";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "All Projects & Selected Work — Shashank H" },
      {
        name: "description",
        content:
          "Explore all software engineering projects, backend systems, and AI applications built by Shashank H.",
      },
    ],
  }),
  component: ProjectsIndexPage,
});

function ProjectsIndexPage() {
  return (
    <main className="grain relative bg-background min-h-screen flex flex-col justify-between">
      <Nav />

      <article className="pt-36 pb-24 mx-auto w-full max-w-[1600px] px-6 md:px-12 flex-1">
        <Link
          to="/"
          onClick={() => triggerHaptic("light")}
          className="inline-flex items-center gap-2 font-label text-[0.85rem] tracking-[0.06em] uppercase text-muted-foreground transition-colors duration-300 hover:text-accent mb-12"
        >
          <span>← BACK TO HOME</span>
        </Link>

        <SectionHead number="03" label="All Projects & Selected Work" />

        <div className="mt-10">
          <span className="display block text-[clamp(4.5rem,18vw,10rem)] leading-none text-elevated">
            03
          </span>
          <h1 className="display mt-2 text-[clamp(3.5rem,12vw,8.5rem)] leading-[0.84]">
            <span>Selected</span><br />
            <span>Projects.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-[clamp(1.1rem,1.6vw,1.45rem)] text-foreground/90 leading-relaxed font-normal">
            A comprehensive showcase of APIs, full-stack applications, and automated AI systems designed and implemented with Python and modern backend architectures.
          </p>
        </div>

        {/* Section 1: Categories Overview */}
        <div className="mt-20">
          <h2 className="font-label text-xs uppercase tracking-[0.1em] text-accent mb-8">
            01 / Categories & All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {PROJECTS.map((category, i) => (
              <div
                key={category.id}
                className="glass-card relative flex flex-col justify-between p-8 md:p-10"
                style={{ ["--d" as string]: `${i * 120}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-hairline/30 pb-5">
                    <span className="display text-3xl font-light text-accent">
                      {category.number}
                    </span>
                    <span className="font-label text-[0.78rem] tracking-[0.04em] uppercase text-foreground/90 bg-elevated/80 px-3 py-1 border border-white/15">
                      {category.role}
                    </span>
                  </div>

                  <h3 className="display text-2xl md:text-3xl leading-tight tracking-[0.03em] mt-6 text-foreground">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {category.description}
                  </p>

                  {/* List of projects in this category */}
                  <div className="mt-6 pt-6 border-t border-hairline/20 space-y-4">
                    {category.items && category.items.length > 0 ? (
                      category.items.map((item) => (
                        <div key={item.title} className="text-xs">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-medium text-foreground">{item.title}</span>
                            <div className="flex items-center gap-2">
                              {item.caseStudyUrl && (
                                <Link
                                  to={item.caseStudyUrl as any}
                                  onClick={() => triggerHaptic("light")}
                                  className="text-[0.7rem] text-accent hover:underline uppercase tracking-wider"
                                >
                                  Case Study
                                </Link>
                              )}
                              {item.liveUrl && (
                                <a
                                  href={item.liveUrl}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  onClick={() => triggerHaptic("light")}
                                  className="text-[0.7rem] text-muted-foreground hover:text-accent uppercase tracking-wider"
                                >
                                  Live ↗
                                </a>
                              )}
                              {item.repoUrl && (
                                <a
                                  href={item.repoUrl}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  onClick={() => triggerHaptic("light")}
                                  className="text-[0.7rem] text-muted-foreground hover:text-foreground uppercase tracking-wider"
                                >
                                  GitHub ↗
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-muted-foreground italic">Coming soon</p>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-hairline/30">
                  <div className="flex flex-wrap gap-2">
                    {category.stack.map((s) => (
                      <span
                        key={s}
                        className="font-sans text-[0.68rem] font-medium tracking-[0.02em] uppercase text-foreground/90 bg-elevated/80 px-2.5 py-1 border border-white/15"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: In-Depth Case Studies */}
        <div className="mt-28">
          <h2 className="font-label text-xs uppercase tracking-[0.1em] text-accent mb-8">
            02 / In-Depth Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {FEATURED_CASE_STUDIES.map((p, i) => (
              <article
                key={p.id}
                className="glass-card group relative flex flex-col justify-between p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl"
                style={{ ["--d" as string]: `${i * 120}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between border-b border-hairline/30 pb-5">
                    <span className="display text-3xl font-light text-accent">
                      {p.number}
                    </span>
                    <span className="font-label text-[0.78rem] tracking-[0.04em] uppercase text-foreground/90 bg-elevated/80 px-3 py-1 border border-white/15">
                      {p.role}
                    </span>
                  </div>

                  <Link to={p.link as any} className="block mt-6">
                    <h3 className="display text-3xl md:text-4xl leading-tight tracking-[0.03em] transition-colors duration-300 group-hover:text-accent">
                      {p.title}
                    </h3>
                  </Link>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {p.description}
                  </p>

                  <div className="mt-6 border-l-2 border-accent/40 pl-4 py-1">
                    <p className="text-xs leading-relaxed text-zinc-300">{p.context}</p>
                  </div>
                </div>

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
      </article>

      <Footer />
    </main>
  );
}
