import { SectionHead } from "./SectionHead";

const GROUPS = [
  {
    title: "Built with",
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
  { title: "Working knowledge", count: "03", items: ["Docker", "AWS", "CI/CD"] },
  { title: "Exploring", count: "04", items: ["RAG", "Local LLMs", "AI Agents", "MCP"] },
];

export function Toolkit() {
  return (
    <section id="toolkit" className="relative pad-section">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <SectionHead number="04" label="Toolkit" />
        <h2 className="display mt-12 text-[clamp(3.5rem,18vw,9rem)] leading-none md:text-[clamp(4.5rem,8vw,9rem)]">
          <span className="mask">
            <span>Toolkit</span>
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-12 gap-y-16 md:gap-x-12">
          {GROUPS.map((g, gi) => (
            <div key={g.title} className="col-span-12 md:col-span-4">
              <div className="flex items-baseline justify-between border-b pb-4">
                <span className="label text-foreground">{g.title}</span>
                <span className="font-mono text-[0.7rem] text-accent">{g.count}</span>
              </div>
              <ul className="mt-2">
                {g.items.map((t, i) => (
                  <li
                    key={t}
                    className="reveal group flex items-baseline justify-between border-b border-transparent py-4 transition-colors duration-300 hover:border-hairline"
                    style={{ ["--d" as string]: `${gi * 80 + i * 70}ms` }}
                  >
                    <span className="text-sm tracking-wide transition-colors duration-300 group-hover:text-accent">
                      {t}
                    </span>
                    <span className="font-mono text-[0.6rem] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
