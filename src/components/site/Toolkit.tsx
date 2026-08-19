import { SectionHead } from "./SectionHead";
import capPortrait from "@/assets/cap-portrait.png";

const GROUPS = [
  {
    title: "Built With",
    count: "08",
    items: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQL",
      "REST APIs",
      "JavaScript",
      "Git",
      "Computer Vision",
    ],
  },
  { title: "Working Knowledge", count: "03", items: ["Docker", "AWS", "CI/CD"] },
  { title: "Exploring", count: "04", items: ["RAG", "Local LLMs", "AI Agents", "MCP"] },
];

export function Toolkit() {
  return (
    <section id="skills" className="relative pad-section overflow-x-clip">
      {/* Fixed Background Cap Portrait Asset */}
      <div className="pointer-events-none sticky top-0 inset-x-0 h-screen mx-auto w-full md:w-[70%] lg:w-[60%] overflow-hidden z-0">
        <div className="absolute inset-0 glow-radial opacity-60" />
        <img
          src={capPortrait}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[50%_15%] opacity-40 mix-blend-luminosity"
        />
        {/* Soft edge blend overlays fading into dark background on both sides and top/bottom */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-12 -mt-[100vh]">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <SectionHead number="02" label="Skills" />
          <h2 className="display mt-6 md:mt-12 text-[clamp(3.5rem,14vw,9rem)] leading-none md:text-[clamp(4.5rem,8vw,9rem)]">
            <span className="mask">
              <span>Technical</span>
            </span>
            <span className="mask" style={{ ["--d" as string]: "120ms" }}>
              <span>Capabilities.</span>
            </span>
          </h2>
        </div>

        {/* Skill Cards Grid (1-Column on Mobile, 3-Column on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-8 md:items-start">
          {GROUPS.map((g, gi) => (
            <div 
              key={g.title} 
              className="glass-card col-span-1 md:col-span-4 p-6 md:p-8 transition-all duration-500 hover:border-accent/50"
            >
              <div className="flex items-baseline justify-between border-b border-hairline/40 pb-4">
                <span className="label text-foreground">{g.title}</span>
                <span className="font-label text-[0.85rem] text-accent">{g.count}</span>
              </div>
              <ul className="mt-2">
                {g.items.map((t, i) => (
                  <li
                    key={t}
                    className="reveal group flex items-baseline justify-between border-b border-hairline/20 py-3.5 md:py-4 transition-colors duration-300 hover:border-hairline"
                    style={{ ["--d" as string]: `${gi * 80 + i * 70}ms` }}
                  >
                    <span className="text-sm tracking-wide transition-colors duration-300 group-hover:text-accent">
                      {t}
                    </span>
                    <span className="font-mono text-[0.6rem] text-muted-foreground opacity-70 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {`${g.count.slice(-1)}.${String(i + 1).padStart(2, "0")}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
