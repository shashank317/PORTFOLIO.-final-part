import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { SectionHead } from "@/components/site/SectionHead";
import { PROJECTS } from "@/components/site/Work";

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

        <div className="draw rule mt-16" />

        {/* Full Projects Card Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className="group relative flex flex-col justify-between overflow-hidden border border-hairline/40 bg-surface/40 p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-accent/60 hover:shadow-2xl"
              style={{ ["--d" as string]: `${i * 120}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between border-b border-hairline/30 pb-5">
                  <span className="display text-3xl font-light text-accent">
                    {p.number}
                  </span>
                  <span className="font-label text-[0.78rem] tracking-[0.04em] uppercase text-muted-foreground bg-background/60 px-3 py-1 border border-hairline/30">
                    {p.role}
                  </span>
                </div>

                <Link to={p.link as any} className="block mt-6">
                  <h2 className="display text-3xl md:text-4xl leading-tight transition-colors duration-300 group-hover:text-accent">
                    {p.title}
                  </h2>
                </Link>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                  {p.description}
                </p>

                <div className="mt-6 border-l-2 border-accent/40 pl-4 py-1">
                  <p className="text-xs leading-relaxed text-muted-foreground">{p.context}</p>
                </div>
              </div>

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
      </article>

      <Footer />
    </main>
  );
}
