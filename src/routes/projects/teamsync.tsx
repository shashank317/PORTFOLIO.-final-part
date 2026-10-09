import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHead } from "@/components/common/SectionHead";
import { triggerHaptic } from "@/lib/haptics";

export const Route = createFileRoute("/projects/teamsync")({
  head: () => ({
    meta: [
      { title: "TeamSync — Project Case Study | Shashank H" },
      {
        name: "description",
        content:
          "Deep dive into TeamSync, an AI-powered project management platform built with FastAPI, PostgreSQL, JavaScript, Tailwind CSS, and OpenRouter API.",
      },
    ],
  }),
  component: TeamSyncPage,
});

function TeamSyncPage() {
  return (
    <main className="grain relative bg-background min-h-screen flex flex-col justify-between">
      <Nav />

      <article className="pt-16 md:pt-36 pb-12 md:pb-24 page-container flex-1">
        <Link
          to="/"
          hash="work"
          onClick={() => triggerHaptic("light")}
          className="inline-flex items-center gap-2 font-label text-[0.85rem] tracking-[0.06em] uppercase text-muted-foreground transition-colors duration-300 hover:text-accent mb-4 md:mb-12"
        >
          <span>← BACK TO WORK</span>
        </Link>

        <SectionHead number="03.1" label="Selected Work / Case Study" />

        <div className="mt-4 md:mt-10">
          <span className="display block text-[clamp(4.5rem,14vw,9rem)] leading-none text-elevated">
            01
          </span>
          <h1 className="display mt-2 text-[clamp(3.5rem,11vw,8rem)] leading-[0.84]">
            TeamSync
          </h1>
          <p className="mt-6 max-w-3xl text-[clamp(1.1rem,1.8vw,1.5rem)] text-foreground/90 leading-relaxed font-normal">
            An AI-powered project management platform that brings tasks, collaboration, analytics, and contextual AI assistance into a single workflow.
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="mt-16 grid grid-cols-12 gap-y-8 border-y py-10 md:gap-x-12">
          <div className="col-span-6 md:col-span-3">
            <p className="label mb-2 text-accent">Role</p>
            <p className="font-sans text-xs font-medium tracking-wide uppercase text-foreground">Full-Stack Architect</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="label mb-2 text-accent">Timeline</p>
            <p className="font-sans text-xs font-medium tracking-wide uppercase text-foreground">2025 — 2026</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="label mb-2 text-accent">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {["FastAPI", "PostgreSQL", "JavaScript", "Tailwind CSS", "OpenRouter API"].map((tech) => (
                <span key={tech} className="label border px-2.5 py-1 text-[0.62rem] text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Deep Dive Content Sections */}
        <div className="mt-20 grid grid-cols-12 gap-y-16 md:gap-x-16">
          <div className="col-span-12 md:col-span-4">
            <h2 className="label text-accent mb-4">01 / Challenge & Context</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Modern engineering teams often fragment project context across chat apps, task trackers, and documentation silos. This disconnect leads to missed deadline risks and low visibility into project health.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h2 className="label text-accent mb-4">02 / Technical Architecture</h2>
            <p className="text-sm leading-relaxed text-foreground/90">
              Built on a high-throughput FastAPI backend with asynchronous database querying via PostgreSQL. Features integrated LLM assistance using OpenRouter API to summarize task blockages, generate action items, and auto-route notifications.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h2 className="label text-accent mb-4">03 / Key Outcomes</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Streamlined task tracking with zero friction. Real-time workspace analytics provide actionable insights for sprint retrospectives and team allocation.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
