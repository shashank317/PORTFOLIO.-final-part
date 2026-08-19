import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Contact";
import { SectionHead } from "@/components/site/SectionHead";
import doubleExposure from "@/assets/double-exposure.png";

export const Route = createFileRoute("/projects/ai-resume-enhancer")({
  head: () => ({
    meta: [
      { title: "AI Resume Enhancer — Project Case Study | Shashank H" },
      {
        name: "description",
        content:
          "Deep dive into AI Resume Enhancer, a web application that analyzes resumes against job descriptions using Gemini API, FastAPI, Python, and JavaScript.",
      },
    ],
  }),
  component: AIResumeEnhancerPage,
});

function AIResumeEnhancerPage() {
  return (
    <main className="grain relative bg-background min-h-screen flex flex-col justify-between">
      <Nav />

      <article className="pt-36 pb-24 mx-auto w-full max-w-[1600px] px-6 md:px-12 flex-1">
        <Link
          to="/"
          hash="work"
          className="inline-flex items-center gap-2 font-label text-[0.85rem] tracking-[0.06em] uppercase text-muted-foreground transition-colors duration-300 hover:text-accent mb-12"
        >
          <span>← BACK TO WORK</span>
        </Link>

        <SectionHead number="03.2" label="Selected Work / Case Study" />

        <div className="mt-10">
          <span className="display block text-[clamp(4.5rem,14vw,9rem)] leading-none text-elevated">
            02
          </span>
          <h1 className="display mt-2 text-[clamp(3rem,11vw,8rem)] leading-[0.84]">
            AI Resume Enhancer
          </h1>
          <p className="mt-6 max-w-3xl text-[clamp(1.1rem,1.8vw,1.5rem)] text-foreground/90 leading-relaxed font-normal">
            A web application that analyzes resumes against job descriptions and uses AI-assisted reasoning to generate a more targeted version with structured feedback.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="mt-12 relative max-h-[420px] w-full overflow-hidden border">
          <img
            src={doubleExposure}
            alt="AI Resume Enhancer editorial imagery"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Metadata Grid */}
        <div className="mt-16 grid grid-cols-12 gap-y-8 border-y py-10 md:gap-x-12">
          <div className="col-span-6 md:col-span-3">
            <p className="label mb-2 text-accent">Role</p>
            <p className="font-sans text-xs font-medium tracking-wide uppercase text-foreground">Full-Stack & AI Pipeline</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="label mb-2 text-accent">Timeline</p>
            <p className="font-sans text-xs font-medium tracking-wide uppercase text-foreground">2025</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="label mb-2 text-accent">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "Gemini API", "JavaScript", "HTML / CSS"].map((tech) => (
                <span key={tech} className="label border px-2.5 py-1 text-[0.62rem] text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Deep Dive Content Sections */}
        <div className="mt-20 grid grid-cols-12 gap-y-16 md:gap-x-16">
          <div className="col-span-12 md:col-span-4">
            <h2 className="label text-accent mb-4">01 / Challenge & Goal</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Generic resumes fail ATS filters and miss key keyword alignment. Applicants need objective, actionable alignment feedback tailored specifically to job descriptions.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h2 className="label text-accent mb-4">02 / Technical Architecture</h2>
            <p className="text-sm leading-relaxed text-foreground/90">
              Document parsing pipeline parses PDF/DOCX inputs into structured tokens. Uses Google Gemini API with strict JSON schema response formats to analyze ATS compatibility, keyword density, and action verb impact.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h2 className="label text-accent mb-4">03 / Key Features</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Side-by-side match score analytics, missing keyword detection, line-by-line bullet point rewrite recommendations, and instant export.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
