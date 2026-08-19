import { Link } from "@tanstack/react-router";
import doubleExposure from "@/assets/double-exposure.png";
import cap from "@/assets/cap-portrait.png";
import { SectionHead } from "./SectionHead";

export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  role: string;
  context: string;
  stack: string[];
  image?: string;
  alt?: string;
  visual: "architecture" | "image" | "waveform";
  link: string;
};

export const PROJECTS: Project[] = [
  {
    id: "teamsync",
    number: "01",
    title: "TeamSync",
    description:
      "An AI-powered project management platform that brings tasks, collaboration, analytics, and contextual AI assistance into a single workflow.",
    role: "Full-stack development",
    context:
      "Designed and built the application architecture, backend APIs, database workflows, and frontend experience.",
    stack: ["FastAPI", "PostgreSQL", "JavaScript", "Tailwind CSS", "OpenRouter API"],
    visual: "architecture",
    link: "/projects/teamsync",
  },
  {
    id: "ai-resume-enhancer",
    number: "02",
    title: "AI Resume Enhancer",
    description:
      "An AI-assisted resume optimization platform that analyzes resumes against job descriptions and uses structured feedback to generate targeted improvements.",
    role: "Full-stack development",
    context:
      "Built the backend document-processing pipeline, AI integration, ATS-oriented analysis workflow, and interactive frontend.",
    stack: ["Python", "FastAPI", "Gemini API", "JavaScript", "HTML / CSS"],
    image: doubleExposure,
    alt: "Black and white double exposure portrait used as an editorial transition",
    visual: "image",
    link: "/projects/ai-resume-enhancer",
  },
  {
    id: "whatsapp-gita-ai",
    number: "03",
    title: "WhatsApp Gita AI",
    description:
      "An automated system for verse selection, multilingual text-to-speech generation, scheduling, and WhatsApp delivery.",
    role: "Backend & automation",
    context:
      "Designed the application workflow around verse selection, AI-assisted context handling, text-to-speech generation, cloud-hosted audio, scheduling, and WhatsApp delivery.",
    stack: ["Python", "AWS S3", "Text-to-Speech", "Twilio", "Automation"],
    visual: "waveform",
    link: "/projects/whatsapp-gita-ai",
  },
];

const BARS = [
  8, 22, 46, 18, 62, 34, 74, 28, 52, 90, 40, 16, 58, 30, 68, 24, 82, 36, 14, 50, 26, 70, 20, 44, 60,
  12, 38, 78, 30, 18,
];

function Visual({ project }: { project: Project }) {
  if (project.visual === "image" && project.image) {
    return (
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.alt ?? ""}
          loading="lazy"
          className="h-full w-full object-cover object-top opacity-70 mix-blend-luminosity transition-[transform,opacity] duration-[900ms] ease-out group-hover:translate-y-[-8px] group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
    );
  }

  if (project.visual === "waveform") {
    return (
      <div className="relative flex aspect-[4/5] w-full flex-col justify-center overflow-hidden border">
        <img
          src={cap}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
        />
        <div className="relative flex h-40 items-end gap-[3px] px-8">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="reveal flex-1 bg-foreground/60 transition-colors duration-500 group-hover:bg-accent/70"
              style={{ height: `${h}%`, ["--d" as string]: `${i * 22}ms` }}
            />
          ))}
        </div>
        <p className="label relative mt-8 px-8">Scheduled delivery / tts stream</p>
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[4/5] w-full flex-col justify-center gap-px overflow-hidden border px-8">
      <div className="absolute inset-y-0 left-1/3 w-px bg-hairline" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-hairline" />
      {["Client", "API layer", "Task & analytics services", "PostgreSQL", "AI assistance"].map(
        (row, i) => (
          <div
            key={row}
            className="reveal relative flex items-center justify-between border-t py-4"
            style={{ ["--d" as string]: `${i * 110}ms` }}
          >
            <span className="font-sans text-[0.72rem] font-medium tracking-[0.04em] uppercase">{row}</span>
            <span className="font-label text-[0.75rem] text-accent">{`0${i + 1}`}</span>
          </div>
        ),
      )}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative pt-16 pb-12">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <SectionHead number="03" label="Selected Work" />
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-12 mb-16">
          <h2 className="display text-[clamp(3.5rem,18vw,9rem)] leading-[0.84] md:text-[clamp(4.5rem,9vw,9rem)]">
            <span className="mask">
              <span>Things</span>
            </span>
            <span className="mask" style={{ ["--d" as string]: "120ms" }}>
              <span>I built.</span>
            </span>
          </h2>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 border-b border-foreground pb-1 font-label text-[0.85rem] tracking-[0.06em] uppercase transition-colors duration-300 hover:border-accent hover:text-accent w-fit mb-2"
          >
            <span>EXPLORE ALL PROJECTS</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
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
