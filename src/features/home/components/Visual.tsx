import cap from "@/assets/cap-portrait.png";
import type { Project } from "../../projects/types";

const BARS = [
  8, 22, 46, 18, 62, 34, 74, 28, 52, 90, 40, 16, 58, 30, 68, 24, 82, 36, 14, 50, 26, 70, 20, 44, 60,
  12, 38, 78, 30, 18,
];

export function Visual({ project, className }: { project: Project; className?: string }) {
  if (project.visual === "image" && project.image) {
    return (
      <div className={className || "relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-background/40"}>
        <img
          src={project.image}
          alt={project.alt ?? ""}
          loading="lazy"
          className="h-full w-full object-cover object-center opacity-95 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  if (project.id === "backend") {
    return (
      <div className={className || "relative flex aspect-[16/10] w-full flex-col justify-center items-center overflow-hidden border border-hairline/30 rounded-lg bg-surface/40 p-6"}>
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
        <div className="absolute inset-y-0 left-1/3 w-px bg-hairline/30" />
        <div className="absolute inset-y-0 left-2/3 w-px bg-hairline/30" />

        <div className="relative z-10 grid grid-cols-3 gap-3 md:gap-4 w-full max-w-sm">
          {/* Python */}
          <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-elevated/70 border border-white/10 hover:border-accent/40 transition-colors">
            <svg className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 128 128" fill="none">
              <path d="M63.5 12.3c-27.4 0-25.7 11.9-25.7 11.9l.03 12.3h26.2v3.7H27.5C12.3 40.2 12 52.8 12 52.8s-.3 15 0 22.3c.3 7.3 10.3 12.3 22.3 12.3h7.4v-10.4c0-7.3 6.3-12.3 12.3-12.3h26.2c6 0 11.3-4.7 11.3-11.3v-29c0-6.6-4.7-12.1-11.3-12.1H63.5zm-7.4 7.4c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z" fill="#387EB8" />
              <path d="M64.5 115.7c27.4 0 25.7-11.9 25.7-11.9l-.03-12.3H64v-3.7h36.5c15.2 0 15.5-12.6 15.5-12.6s.3-15 0-22.3c-.3-7.3-10.3-12.3-22.3-12.3h-7.4v10.4c0 7.3-6.3 12.3-12.3 12.3H47.8c-6 0-11.3 4.7-11.3 11.3v29c0 6.6 4.7 12.1 11.3 12.1h16.7zm7.4-7.4c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1z" fill="#FFE052" />
            </svg>
            <span className="font-sans text-[0.68rem] font-medium tracking-[0.04em] uppercase text-foreground/90 mt-2">Python</span>
          </div>

          {/* FastAPI */}
          <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-elevated/70 border border-white/10 hover:border-accent/40 transition-colors">
            <svg className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 128 128" fill="none">
              <circle cx="64" cy="64" r="56" fill="#009688" />
              <path d="M66 22L36 74h26l-6 32 36-54H66l6-30z" fill="white" />
            </svg>
            <span className="font-sans text-[0.68rem] font-medium tracking-[0.04em] uppercase text-foreground/90 mt-2">FastAPI</span>
          </div>

          {/* Flask */}
          <div className="flex flex-col items-center justify-center p-3 md:p-4 rounded-lg bg-elevated/70 border border-white/10 hover:border-accent/40 transition-colors">
            <svg className="w-8 h-8 md:w-9 md:h-9" viewBox="0 0 128 128" fill="none">
              <path d="M54 20h20v14l18 36c4 8 6 16 6 24 0 18-15 34-34 34s-34-16-34-34c0-8 2-16 6-24l18-36V20z" stroke="#F2F2F0" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M46 20h36" stroke="#F2F2F0" strokeWidth="7" strokeLinecap="round" />
              <path d="M44 82h40" stroke="#FF4D1A" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <span className="font-sans text-[0.68rem] font-medium tracking-[0.04em] uppercase text-foreground/90 mt-2">Flask</span>
          </div>
        </div>

        <p className="relative z-10 font-label text-[0.72rem] tracking-wider text-muted-foreground uppercase mt-4">
          Core Backend Stack & Services
        </p>
      </div>
    );
  }


  if (project.visual === "waveform") {
    return (
      <div className={className || "relative flex aspect-[16/10] w-full flex-col justify-center overflow-hidden border border-hairline/30 rounded-lg"}>
        <img
          src={cap}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
        />
        <div className="relative flex h-32 md:h-40 items-end gap-[3px] px-8">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="reveal flex-1 bg-foreground/60 transition-colors duration-500 group-hover:bg-accent/70"
              style={{ height: `${h}%`, ["--d" as string]: `${i * 22}ms` }}
            />
          ))}
        </div>
        <p className="label relative mt-6 md:mt-8 px-8">Scheduled delivery / tts stream</p>
      </div>
    );
  }

  const rows = project.id === "ai-computer-vision"
    ? [
        "DXF & Text Parsing (Source of Truth)",
        "Secondary Vision Model Pass",
        "RAG Standards Vector Store (FAISS)",
        "Inference Pipelines (ResNet50 / YOLO)",
        "Evaluation & Validation Layer",
      ]
    : project.id === "web-design-ai-agents"
    ? [
        "Design Spec & Interface Prompt",
        "Autonomous Agent Orchestration",
        "Component & Token Synthesis",
        "Multi-Viewport Layout Verification",
        "Interactive Preview Sandbox",
      ]
    : ["Client", "API layer", "Task & analytics services", "PostgreSQL", "AI assistance"];

  return (
    <div className={className || "relative flex aspect-[16/10] w-full flex-col justify-center gap-px overflow-hidden border border-hairline/30 rounded-lg px-6 md:px-8 bg-surface/30 backdrop-blur-sm"}>
      <div className="absolute inset-y-0 left-1/3 w-px bg-hairline/30" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-hairline/30" />
      {rows.map((row, i) => (
        <div
          key={row}
          className="reveal relative flex items-center justify-between border-t border-hairline/20 py-2.5 md:py-3"
          style={{ ["--d" as string]: `${i * 90}ms` }}
        >
          <span className="font-sans text-[0.68rem] md:text-[0.72rem] font-medium tracking-[0.03em] uppercase text-foreground/85">{row}</span>
          <span className="font-label text-[0.75rem] text-accent">{`0${i + 1}`}</span>
        </div>
      ))}
    </div>
  );
}
