import { Link } from "@tanstack/react-router";
import SpecularButton from "@/components/common/SpecularButton";
import { SectionHead } from "@/components/common/SectionHead";
import particlesVideo from "@/assets/Glowing_particles_.mp4";

export function Experience() {
  return (
    <section id="experience" className="relative pad-section pb-3 md:pb-auto overflow-hidden">
      {/* Background Animated Glowing Particles Video (Left Side) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full md:w-[58%] lg:w-[50%] overflow-hidden">
        <div className="absolute inset-0 glow-radial opacity-60" />
        <video
          src={particlesVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center opacity-65 mix-blend-luminosity"
        />
        {/* Soft edge blend overlays fading into dark background to the right */}
        <div className="absolute inset-0 bg-[linear-gradient(270deg,#050505_0%,#050505_22%,rgba(5,5,5,0.85)_45%,rgba(5,5,5,0.25)_75%,rgba(5,5,5,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 page-container">
        <SectionHead number="01" label="Experience" />

        <div className="mt-8 md:mt-16 grid grid-cols-12 gap-y-8 md:gap-y-12 items-center">
          {/* Right Text & Summary Column */}
          <div className="col-span-12 md:col-start-6 md:col-span-7 lg:col-start-7 lg:col-span-6 flex flex-col justify-between ml-auto">
            <div>
              <span className="display block text-[clamp(3.5rem,15vw,10rem)] leading-none text-elevated md:text-[clamp(4.5rem,10vw,10rem)]">
                01
              </span>
              <h2 className="display mt-2 text-[clamp(2.8rem,11.5vw,8.5rem)] leading-[0.98] md:leading-[0.86] tracking-[-0.01em] md:tracking-[-0.03em]">
                <span className="mask">
                  <span>Cadmaxx</span>
                </span>
                <span className="mask" style={{ ["--d" as string]: "120ms" }}>
                  <span>Solutions</span>
                </span>
              </h2>

              <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-3 md:gap-4">
                <span className="label text-foreground">Graduate Trainee</span>
                <span className="label text-muted-foreground">• Jun 2025 — Jun 2026</span>
              </div>
            </div>

            {/* Short intro quote block */}
            <div className="mt-6 md:mt-10 border-l-2 border-accent/70 pl-4 md:pl-6 py-2 max-w-2xl">
              <p className="text-[clamp(1rem,1.4vw,1.35rem)] leading-relaxed text-foreground/90 font-normal">
                Automated CAD design generation using Python and FastAPI. Built vision-language and RAG-based pipelines for dimension extraction and automated document review, reducing part design turnaround time by 5%.
              </p>
            </div>

            {/* Dedicated page navigation button */}
            <div className="mt-4 md:mt-10 flex items-center gap-6">
              <SpecularButton as="a" href="/experience" size="md">
                EXPLORE EXPERIENCE
              </SpecularButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
