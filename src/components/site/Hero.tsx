import hero from "@/assets/hero-portrait.png";
import { useParallax } from "./reveal";

export function Hero({ ready }: { ready: boolean }) {
  const { ref, p } = useParallax<HTMLElement>();
  const cls = (extra = "") => `${extra} ${ready ? "is-in" : ""}`;

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden pt-28 pb-16"
    >
      {/* portrait */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[56%]"
        style={{ transform: `translate3d(0,${p * -40}px,0)` }}
      >
        <div className="absolute inset-0 glow-radial opacity-70" />
        <img
          src={hero}
          alt="Shashank H, side profile portrait lit with a cool blue rim light"
          className={cls("fade h-full w-full object-cover object-[62%_18%] transition-transform")}
          style={{
            transform: ready ? "scale(1)" : "scale(1.04)",
            transitionProperty: "opacity, transform",
            transitionDuration: "1.6s",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.92)_22%,rgba(5,5,5,0.45)_45%,rgba(5,5,5,0.12)_70%,rgba(5,5,5,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1600px] min-h-[78svh] grid-cols-12 items-end gap-y-10 px-5 md:px-10">
        <div className="col-span-12 md:col-span-7">
          <p className={cls("fade label mb-8")} style={{ ["--d" as string]: "150ms" }}>
            Software Engineer / Backend / AI Systems
          </p>

          <h1 className="display text-[clamp(4.5rem,15vw,14rem)] leading-[0.82] md:text-[clamp(6rem,12vw,14rem)]">
            <span className={cls("mask")} style={{ ["--d" as string]: "250ms" }}>
              <span>Shashank.H</span>
            </span>
            <span className={cls("mask")} style={{ ["--d" as string]: "380ms" }}>
              <span className="inline-flex items-baseline gap-8">
                <span className="label mb-[0.35em] hidden md:inline-block">/ 2026</span>
              </span>
            </span>
          </h1>

          <div className="mt-10 max-w-xl">
            <p
              className={cls("fade text-[clamp(1rem,1.4vw,1.35rem)] leading-[1.45]")}
              style={{ ["--d" as string]: "520ms" }}
            >
              I build backend systems and AI-powered products with Python.
            </p>
            <p
              className={cls("fade mt-4 text-[clamp(0.85rem,1.1vw,1rem)] leading-relaxed text-muted-foreground")}
              style={{ ["--d" as string]: "620ms" }}
            >
              Focused on APIs, backend engineering, automation, and practical AI integrations.
            </p>
          </div>

          <div
            className={cls("fade mt-12 flex flex-wrap items-center gap-x-10 gap-y-5")}
            style={{ ["--d" as string]: "720ms" }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 border-b border-foreground pb-2 font-mono text-[0.7rem] tracking-[0.24em] uppercase transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              View selected work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <span className="label">Based in Bengaluru, India</span>
          </div>
        </div>

        <div className="col-span-12 flex items-end justify-between md:col-span-5">
          <span className={cls("fade label")} style={{ ["--d" as string]: "900ms" }}>
            00 / Intro
          </span>
          <span className={cls("fade label")} style={{ ["--d" as string]: "980ms" }}>
            Scroll ↓
          </span>
        </div>
      </div>
    </section>
  );
}
