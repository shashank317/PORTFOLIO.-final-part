import { SectionHead } from "@/components/common/SectionHead";

type Certification = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  tags: string[];
  link?: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    id: "python-django-udemy",
    title: "Python Django Framework",
    issuer: "Udemy",
    tags: ["Python", "Django", "Web Framework"],
  },
  {
    id: "mysql-udemy",
    title: "MySQL Beginner to Advanced",
    issuer: "Udemy",
    tags: ["MySQL", "Relational DB", "SQL"],
  },
  {
    id: "problem-solving-hackerrank",
    title: "Problem Solving",
    issuer: "HackerRank",
    tags: ["Algorithms", "Data Structures", "Logic"],
  },
  {
    id: "python-hackerrank",
    title: "Python",
    issuer: "HackerRank",
    tags: ["Python", "Core Python", "Scripting"],
  },
  {
    id: "sql-hackerrank",
    title: "SQL",
    issuer: "HackerRank",
    tags: ["SQL", "Database Queries", "RDBMS"],
  },
  {
    id: "rest-apis-hackerrank",
    title: "REST APIs",
    issuer: "HackerRank",
    tags: ["REST APIs", "API Design", "HTTP"],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative pad-section">
      <div className="page-container">
        <SectionHead number="04" label="Certifications" />

        <h2 className="display mt-6 md:mt-8 text-[clamp(2.7rem,12vw,7.5rem)] leading-[0.98] md:leading-none tracking-[-0.01em] md:tracking-[-0.03em]">
          <span className="mask">
            <span>Verified</span>
          </span>
          <span className="mask" style={{ ["--d" as string]: "120ms" }}>
            <span className="text-muted-foreground">Credentials.</span>
          </span>
        </h2>

        <div className="mt-8 md:mt-10 flex flex-col border-t">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              className="group flex flex-col justify-between border-b py-6 md:flex-row md:items-center md:py-10 transition-colors"
            >
              <div className="flex flex-col gap-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-label text-[0.82rem] text-accent">0{index + 1}</span>
                  <span className="label text-muted-foreground text-[0.82rem]">{cert.issuer}</span>
                  {cert.date && (
                    <span className="font-label text-[0.82rem] text-muted-foreground">• {cert.date}</span>
                  )}
                </div>
                <h3 className="font-sans text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent md:text-xl">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 md:gap-3 md:mt-0">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="label rounded-full border border-hairline/40 px-3 py-1 text-[0.72rem] text-muted-foreground transition-colors duration-300 group-hover:border-accent/40 group-hover:text-foreground"
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
