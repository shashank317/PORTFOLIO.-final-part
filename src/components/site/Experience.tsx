import { Link } from "@tanstack/react-router";
import SpecularButton from "./SpecularButton";
import { SectionHead } from "./SectionHead";
import particlesVideo from "@/assets/Glowing_particles_.mp4";

export function Experience() {
  return (
    <section id="experience" className="relative pad-section overflow-hidden">
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

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <SectionHead number="01" label="Experience" />

        <div className="mt-16 grid grid-cols-12 gap-y-12 items-center">
          {/* Right Text & Summary Column */}
          <div className="col-span-12 md:col-start-6 md:col-span-7 lg:col-start-7 lg:col-span-6 flex flex-col justify-between ml-auto">
            <div>
              <span className="display block text-[clamp(4.5rem,18vw,10rem)] leading-none text-elevated md:text-[clamp(4.5rem,10vw,10rem)]">
                01
              </span>
              <h2 className="display mt-2 text-[clamp(3rem,12vw,8.5rem)] leading-[0.86] md:text-[clamp(3.5rem,7vw,8.5rem)]">
                <span className="mask">
                  <span>Cadmaxx</span>
                </span>
                <span className="mask" style={{ ["--d" as string]: "120ms" }}>
                  <span>Solutions</span>
                </span>
              </h2>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="label text-foreground">Graduate Trainee Engineer</span>
                <span className="label text-muted-foreground">• Jul 2025 — Jun 2026</span>
              </div>
            </div>

            {/* Short intro quote block */}
            <div className="mt-10 border-l-2 border-accent/70 pl-6 py-2 max-w-2xl">
              <p className="text-[clamp(1rem,1.4vw,1.35rem)] leading-relaxed text-foreground/90 font-normal">
                Worked on engineering automation workflows using Python, with a focus on reducing repetitive processes and exploring AI-assisted analysis for technical drawings.
              </p>
            </div>

            {/* Dedicated page navigation button */}
            <div className="mt-10 flex items-center gap-6">
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
