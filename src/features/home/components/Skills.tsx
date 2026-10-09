import { SectionHead } from "@/components/common/SectionHead";
import capPortrait from "@/assets/cap-portrait.png";
import { triggerHaptic } from "@/lib/haptics";

const GROUPS = [
  {
    title: "Built With",
    count: "09",
    items: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQL",
      "REST APIs",
      "JavaScript",
      "Git",
      "Computer Vision",
      "RAG",
    ],
  },
  { title: "Working Knowledge", count: "03", items: ["Docker", "AWS", "CI/CD"] },
  { title: "Exploring", count: "03", items: ["Local LLMs", "AI Agents", "MCP"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative pad-section overflow-x-clip">
      {/* Background Cap Portrait Asset (Sticky Scrollytelling on both Mobile and Desktop) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="sticky top-0 h-[100svh] mx-auto w-full md:w-[70%] lg:w-[60%] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 glow-radial opacity-60" />
          <img
            src={capPortrait}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[50%_15%] opacity-25 md:opacity-40 mix-blend-luminosity"
          />
          {/* Soft edge blend overlays fading into dark background on both sides and top/bottom */}
          <div className="absolute inset-0 bg-background/50 md:bg-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/90 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/90 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 page-container">
        {/* Section Header */}
        <div className="mb-8 md:mb-16">
          <SectionHead number="02" label="Skills" />
          <h2 className="display mt-6 md:mt-12 text-[clamp(2.7rem,11.5vw,9rem)] leading-[0.98] md:leading-none tracking-[-0.01em] md:tracking-[-0.03em]">
            <span className="mask">
              <span>Technical Capabilities.</span>
            </span>
          </h2>
        </div>

        {/* Skill Cards Grid (Equal Heights on Desktop, Compact on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:items-stretch">
          {GROUPS.map((g, gi) => (
            <div
              key={g.title}
              className="glass-card col-span-1 md:col-span-4 p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:border-accent/50"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-hairline/40 pb-4">
                  <span className="label text-foreground">{g.title}</span>
                  <span className="font-label text-[0.85rem] text-accent">{g.count}</span>
                </div>
                <ul className={`mt-2 ${g.items.length > 4 ? "grid grid-cols-2 md:grid-cols-1 gap-x-4" : "flex flex-col"}`}>
                  {g.items.map((t, i) => (
                    <li
                      key={t}
                      onClick={() => triggerHaptic("light")}
                      className="reveal group flex items-baseline justify-between border-b border-hairline/20 py-3 md:py-4 transition-colors duration-300 hover:border-hairline cursor-pointer"
                      style={{ ["--d" as string]: `${gi * 80 + i * 70}ms` }}
                    >
                      <span className="text-sm tracking-wide transition-colors duration-300 group-hover:text-accent">
                        {t}
                      </span>
                      {t !== "Docker" && (
                        <span className="font-mono text-[0.6rem] text-muted-foreground opacity-70 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {`0${gi + 1}.${String(i + 1).padStart(2, "0")}`}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
