import doubleExposure from "@/assets/double-exposure.png";
import cap from "@/assets/cap-portrait.png";
import { SectionHead } from "./SectionHead";

type Project = {
  number: string;
  title: string;
  description: string;
  role: string;
  context: string;
  stack: string[];
  image?: string;
  alt?: string;
  visual: "architecture" | "image" | "waveform";
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "TeamSync",
    description:
      "An AI-powered project management platform that brings tasks, collaboration, analytics, and contextual AI assistance into a single workflow.",
    role: "Full-stack development",
    context:
      "Designed and built the application architecture, backend APIs, database workflows, and frontend experience.",
    stack: ["FastAPI", "PostgreSQL", "JavaScript", "Tailwind CSS", "OpenRouter API"],
    visual: "architecture",
  },
  {
    number: "02",
    title: "AI Resume Enhancer",
    description:
      "A web application that analyzes resumes against job descriptions and uses AI-assisted reasoning to generate a more targeted version with structured feedback.",
    role: "Full-stack development",
    context:
      "Built the backend document-processing pipeline, AI integration, ATS-oriented analysis workflow, and interactive frontend.",
    stack: ["Python", "FastAPI", "Gemini API", "JavaScript", "HTML / CSS"],
    image: doubleExposure,
    alt: "Black and white double exposure portrait used as an editorial transition",
    visual: "image",
  },
  {
    number: "03",
    title: "WhatsApp Gita AI",
    description:
      "An automated system that selects Bhagavad Gita verses, generates multilingual voice content, and delivers scheduled messages through WhatsApp.",
    role: "Backend & automation",
    context:
      "Designed the application workflow around verse selection, AI-assisted context handling, text-to-speech generation, cloud-hosted audio, scheduling, and WhatsApp delivery.",
    stack: ["Python", "AWS S3", "Text-to-Speech", "Twilio", "Automation"],
    visual: "waveform",
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
            <span className="font-mono text-[0.66rem] tracking-[0.16em] uppercase">{row}</span>
            <span className="font-mono text-[0.6rem] text-accent">{`0${i + 1}`}</span>
          </div>
        ),
      )}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative pad-section">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <SectionHead number="03" label="Selected Work" />
        <h2 className="display mt-12 text-[clamp(3.5rem,18vw,9rem)] leading-[0.84] md:text-[clamp(4.5rem,9vw,9rem)]">
          <span className="mask">
            <span>Things</span>
          </span>
          <span className="mask" style={{ ["--d" as string]: "120ms" }}>
            <span>I built.</span>
          </span>
        </h2>
      </div>

      <div className="mt-16 flex flex-col">
        {PROJECTS.map((p, i) => (
          <article key={p.number} className="group border-t py-12 md:py-16">
            <div className="mx-auto grid w-full max-w-[1600px] grid-cols-12 gap-y-12 px-5 md:gap-x-12 md:px-10">
              <div
                className={`col-span-12 md:col-span-5 ${i % 2 === 1 ? "md:order-2" : "md:order-1"}`}
              >
                <Visual project={p} />
              </div>

              <div
                className={`col-span-12 flex flex-col md:col-span-7 ${i % 2 === 1 ? "md:order-1" : "md:order-2"}`}
              >
                <div className="flex items-baseline gap-6">
                  <span className="display text-[clamp(3rem,16vw,7rem)] leading-none text-elevated md:text-[clamp(3rem,7vw,7rem)]">
                    {p.number}
                  </span>
                  <span className="draw rule flex-1" />
                </div>

                <h3 className="display mt-4 text-[clamp(2.5rem,11vw,6rem)] leading-[0.9] transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-[clamp(2.5rem,5vw,6rem)]">
                  {p.title}
                </h3>

                <p className="reveal mt-8 max-w-2xl text-base leading-relaxed text-foreground/90 md:text-lg">
                  {p.description}
                </p>

                <div className="mt-12 grid gap-10 border-t pt-8 md:grid-cols-2">
                  <div className="reveal">
                    <p className="label mb-3 text-accent">Role</p>
                    <p className="font-mono text-[0.7rem] tracking-[0.16em] uppercase">{p.role}</p>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.context}</p>
                  </div>
                  <div className="reveal" style={{ ["--d" as string]: "120ms" }}>
                    <p className="label mb-3 text-accent">Stack</p>
                    <ul className="flex flex-col gap-2">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="font-mono text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <span className="mt-12 inline-flex w-fit items-center gap-3 border-b border-hairline pb-2 font-mono text-[0.7rem] tracking-[0.24em] uppercase transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                  View case study
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
