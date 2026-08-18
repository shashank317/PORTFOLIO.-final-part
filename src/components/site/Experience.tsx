import { Flow, SectionHead, Tags } from "./SectionHead";

const BLOCKS = [
  {
    index: "01",
    title: "Parametric CAD Automation",
    tags: ["Python", "FreeCAD", "Backend Automation"],
    challenge:
      "A repetitive CAD workflow required engineers to rebuild configurable components by hand for every variant.",
    approach:
      "I built a parameter-driven backend automation that accepts engineering inputs and generates CAD output, so producing a variant becomes a matter of supplying parameters rather than modelling it again.",
    flow: ["Engineering inputs", "Validation", "Geometry generation", "CAD output"],
    scan: false,
  },
  {
    index: "02",
    title: "AI-Assisted Drawing Review",
    tags: ["Python", "Structured Extraction", "Vision", "LLM Analysis"],
    challenge:
      "Reviewing engineering drawings is detailed, repetitive work, and inconsistencies are easy to miss by eye.",
    approach:
      "An experimental workflow that extracts structured data from a drawing, performs visual verification, and applies AI-assisted analysis to flag potential inconsistencies for a reviewer to judge.",
    flow: ["Drawing", "Structured extraction", "Visual verification", "Flagged for review"],
    scan: true,
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative pad-section">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <SectionHead number="01" label="Experience" />

        <div className="mt-16 grid grid-cols-12 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <span className="display block text-[clamp(5rem,22vw,11rem)] leading-none text-elevated md:text-[clamp(5rem,11vw,11rem)]">
              01
            </span>
            <h2 className="display mt-2 text-[clamp(3rem,13vw,9rem)] leading-[0.86] md:text-[clamp(3.5rem,7vw,9rem)]">
              <span className="mask">
                <span>Cadmaxx</span>
              </span>
              <span className="mask" style={{ ["--d" as string]: "120ms" }}>
                <span>Solutions</span>
              </span>
            </h2>
          </div>
          <div className="col-span-12 flex flex-col gap-3 lg:col-span-4 lg:items-end lg:text-right">
            <span className="reveal label">Graduate Trainee Engineer</span>
            <span className="reveal label" style={{ ["--d" as string]: "100ms" }}>
              Jul 2025 — Jun 2026
            </span>
          </div>
        </div>

        <div className="draw rule mt-14" />

        <div className="mt-8 flex flex-col">
          {BLOCKS.map((b) => (
            <article
              key={b.index}
              className={`relative grid grid-cols-12 gap-y-10 border-t py-12 md:gap-x-10 md:py-16 ${b.scan ? "scan" : ""}`}
            >
              <header className="col-span-12 md:col-span-4">
                <p className="label mb-5">{b.index} —</p>
                <h3 className="display text-[clamp(2rem,9vw,5rem)] leading-[0.9] md:text-[clamp(1.8rem,3.2vw,4rem)]">{b.title}</h3>
                <div className="mt-7">
                  <Tags items={b.tags} />
                </div>
              </header>

              <div className="col-span-12 grid gap-10 md:col-span-8 md:grid-cols-2">
                <div className="reveal">
                  <p className="label mb-3 text-accent">The Challenge</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.challenge}</p>
                </div>
                <div className="reveal" style={{ ["--d" as string]: "120ms" }}>
                  <p className="label mb-3 text-accent">Technical Approach</p>
                  <p className="text-sm leading-relaxed text-foreground/90">{b.approach}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="label mb-5">System Architecture</p>
                  <Flow steps={b.flow} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
