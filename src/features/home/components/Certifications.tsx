import { SectionHead } from "@/components/common/SectionHead";

type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  tags: string[];
  link?: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    id: "python-backend",
    title: "Python & Backend Systems Architecture",
    issuer: "Professional Certificate",
    date: "2025",
    tags: ["Python", "FastAPI", "API Design"],
  },
  {
    id: "ai-llm-integrations",
    title: "Practical AI & LLM Integrations",
    issuer: "Specialization",
    date: "2025",
    tags: ["LLM", "Prompt Engineering", "OpenAI / Gemini APIs"],
  },
  {
    id: "cloud-devops-foundations",
    title: "Cloud Infrastructure & Containerization",
    issuer: "Technical Foundations",
    date: "2024",
    tags: ["Docker", "AWS S3", "CI/CD Workflows"],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative pt-12 pb-16">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <SectionHead number="04" label="Certifications" />

        <h2 className="display mt-8 text-[clamp(3rem,14vw,7.5rem)] leading-none md:text-[clamp(3.5rem,7vw,7.5rem)]">
          <span className="mask">
            <span>Verified</span>
          </span>
          <span className="mask" style={{ ["--d" as string]: "120ms" }}>
            <span className="text-muted-foreground">Credentials.</span>
          </span>
        </h2>

        <div className="mt-10 flex flex-col border-t">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              className="reveal group flex flex-col justify-between border-b py-8 md:flex-row md:items-center md:py-10"
              style={{ ["--d" as string]: `${index * 100}ms` }}
            >
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-label text-[0.8rem] text-accent">0{index + 1}</span>
                  <span className="label text-muted-foreground">{cert.issuer}</span>
                  <span className="font-label text-[0.8rem] text-muted-foreground">• {cert.date}</span>
                </div>
                <h3 className="font-sans text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent md:text-xl">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 md:mt-0">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label rounded-none border border-hairline/40 px-3 py-1.5 text-[0.62rem] text-muted-foreground transition-colors duration-300 group-hover:border-accent/40 group-hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
