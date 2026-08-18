import light from "@/assets/light-bar.png";
import { useParallax } from "./reveal";

export function Interlude() {
  const { ref, p } = useParallax<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="relative flex py-32 w-full items-center overflow-hidden min-h-[60svh] md:py-48 md:min-h-[80svh]"
    >
      <img
        src={light}
        alt="Side profile lit by a horizontal white light bar in smoke"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[58%_35%]"
        style={{ transform: `translate3d(0,${(p - 0.5) * 70}px,0) scale(1.05)` }}
      />
      <div className="absolute inset-0 bg-background/45" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <h2 className="display text-[clamp(3.5rem,14vw,12rem)] leading-[0.86] md:text-[clamp(5rem,9vw,12rem)]">
          <span className="mask">
            <span>Build systems.</span>
          </span>
          <span className="mask" style={{ ["--d" as string]: "140ms" }}>
            <span className="text-muted-foreground">Not just interfaces.</span>
          </span>
        </h2>
      </div>
    </section>
  );
}
