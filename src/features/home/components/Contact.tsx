import { SectionHead } from "@/components/common/SectionHead";
import lightBar from "@/assets/light-bar.png";
import { triggerHaptic } from "@/lib/haptics";

const LINKEDIN_URL = "https://www.linkedin.com/";
const GITHUB_URL = "https://github.com/";

const LINKS = [
  { label: "Email", href: "mailto:shashankssh07@gmail.com" },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "GitHub", href: GITHUB_URL },
];


export function Contact() {
  return (
    <section id="contact" className="relative flex flex-col justify-center pad-section overflow-hidden">
      {/* Background Light Bar Portrait Asset */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[50%] overflow-hidden">
        <div className="absolute inset-0 glow-radial opacity-60" />
        <img
          src={lightBar}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[50%_20%] opacity-85 mix-blend-luminosity"
        />
        {/* Soft edge blend overlays fading into dark background to the left */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#050505_15%,rgba(5,5,5,0.75)_35%,rgba(5,5,5,0.15)_65%,rgba(5,5,5,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <SectionHead number="05" label="Contact" />

        <h2 className="display mt-14 text-[clamp(3rem,14vw,9rem)] leading-[0.86] md:text-[clamp(4.5rem,8.5vw,9rem)]">
          <span className="mask">
            <span>LET'S BUILD</span>
          </span>
          <span className="mask" style={{ ["--d" as string]: "110ms" }}>
            <span>SOMETHING</span>
          </span>
          <span className="mask" style={{ ["--d" as string]: "220ms" }}>
            <span className="text-accent">USEFUL.</span>
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-y-12 md:gap-x-12 items-end">
          <p className="reveal col-span-12 max-w-2xl text-base leading-relaxed text-foreground/90 md:col-span-7 md:text-lg font-normal">
            Open to software engineering, backend, and AI-focused roles. Whether you have a challenging project, an engineering role, or just want to connect, feel free to reach out.
          </p>

          <div className="glass-card col-span-12 md:col-span-5 p-6 md:p-8 !min-h-0">
            <p className="reveal label mb-6 text-muted-foreground">Available for opportunities</p>
            <ul className="flex flex-col border-t border-hairline/40">
              {LINKS.map((l, i) => (
                <li key={l.label} className="reveal border-b border-hairline/40" style={{ ["--d" as string]: `${i * 100}ms` }}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    onClick={() => triggerHaptic("light")}
                    className="group flex items-center justify-between py-4 font-label text-[0.88rem] tracking-[0.06em] uppercase transition-colors duration-300 hover:text-accent"
                  >
                    {l.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
