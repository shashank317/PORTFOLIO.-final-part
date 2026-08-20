import cap from "@/assets/cap-portrait.png";
import type { Project } from "../../projects/types";

const BARS = [
  8, 22, 46, 18, 62, 34, 74, 28, 52, 90, 40, 16, 58, 30, 68, 24, 82, 36, 14, 50, 26, 70, 20, 44, 60,
  12, 38, 78, 30, 18,
];

export function Visual({ project }: { project: Project }) {
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
