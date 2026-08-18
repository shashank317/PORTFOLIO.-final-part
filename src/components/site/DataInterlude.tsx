import cloud from "@/assets/point-cloude.png";
import { useParallax } from "./reveal";

export function DataInterlude() {
  const { ref, p } = useParallax<HTMLDivElement>();

  return (
    <section className="relative pad-section">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <span className="label">02 / Selected Engineering</span>
      </div>

      <div ref={ref} className="scan relative mt-10 w-full overflow-hidden aspect-[4/5] md:aspect-video md:max-h-[80svh]">
        <img
          src={cloud}
          alt="Point-cloud study: a side profile rendered as dispersed data points"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%] opacity-90"
          style={{ transform: `translate3d(0,${(p - 0.5) * 60}px,0)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,transparent_35%,#050505_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

        <div className="absolute inset-0 mx-auto flex w-full max-w-[1600px] flex-col justify-end gap-10 px-5 py-10 md:gap-16 md:px-10 md:py-16">
          <div className="flex justify-between">
            <span className="fade label">
              Constructed
              <br />
              from data_
            </span>
            <span className="fade label text-right" style={{ ["--d" as string]: "150ms" }}>
              Point
              <br />
              cloud study
            </span>
          </div>
          <div className="flex justify-between">
            <span className="fade label" style={{ ["--d" as string]: "300ms" }}>
              Voxel
              <br />
              dispersion
            </span>
            <span className="fade label text-right" style={{ ["--d" as string]: "450ms" }}>
              System / A-01
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
