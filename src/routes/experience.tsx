import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Flow, SectionHead, Tags } from "@/components/common/SectionHead";
import { triggerHaptic } from "@/lib/haptics";
import particlesVideo from "@/assets/Glowing_particles_.mp4";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Engineering Work — Shashank H" },
      {
        name: "description",
        content:
          "Detailed work experience of Shashank H at Cadmaxx Solutions, focusing on parametric CAD automation and AI-assisted engineering drawing review.",
      },
    ],
  }),
  component: ExperiencePage,
});

const INITIATIVES = [
  {
    id: "cad-automation",
    index: "01",
    chapter: "CHAPTER 01 // PARAMETRIC AUTOMATION",
    title: "Parametric CAD Automation",
    subtitle: "Python & FastAPI Engineering Pipeline",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Pydantic"],
    challenge:
      "A repetitive CAD design workflow depended on manual rework.",
    approach:
      "Automated the design generation process using Python scripts from CAD macros. Built a FastAPI backend with SQLAlchemy and Pydantic validation to handle user inputs and return DXF/PDF files in real-time.",
    flow: ["API Request", "Pydantic Validation", "Python Macro Execution", "DXF/PDF Output"],
    scan: false,
  },
  {
    id: "drawing-review",
    index: "02",
    chapter: "CHAPTER 02 // AI DRAWING ANALYSIS",
    title: "AI-Assisted Drawing Review",
    subtitle: "Hybrid Extraction & RAG Validation",
    tags: ["Python", "Vision-Language Models", "RAG", "FAISS", "RESTful APIs"],
    challenge:
      "Manual review of technical engineering drawings for dimension and annotation extraction was slow and prone to errors.",
    approach:
      "Built a hybrid review pipeline: values extracted directly from the DXF are the source of truth, and a vision-language model only fills in dimensions or annotations the text pass missed, so a vision misread can never override an exact DXF value. A RAG layer (FAISS, sentence-transformers) over client-specific design standards grounds the validation and speeds up quality checks.",
    flow: ["DXF Ingestion", "Text Extraction", "Vision Fallback", "RAG Validation", "Review Output"],
    scan: true,
  },
];

function ExperiencePage() {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const sections = document.querySelectorAll(".story-chapter");
      sections.forEach((sec, idx) => {
        const top = (sec as HTMLElement).offsetTop;
        const height = (sec as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveChapter(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="grain relative bg-background min-h-screen flex flex-col justify-between">
      {/* Pinned Fixed Video Background Layer */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 glow-radial opacity-0" />
        <video
          src={particlesVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center opacity-55 mix-blend-luminosity"
        />
        {/* Ambient Dark Gradient Vignettes for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/95" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
      </div>

      {/* Floating Scrollytelling HUD Tracker */}
      <div className="glass-card pointer-events-none fixed bottom-8 right-8 z-30 hidden md:flex items-center gap-4 px-5 py-3 !min-h-0 rounded-[12px]">
        <span className="font-label text-[0.82rem] tracking-[0.06em] uppercase text-accent">
          {activeChapter === 0 ? "OVERVIEW // CADMAXX" : INITIATIVES[activeChapter - 1]?.chapter}
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full transition-colors ${activeChapter === 0 ? "bg-accent" : "bg-hairline"}`} />
          <span className={`h-1.5 w-1.5 rounded-full transition-colors ${activeChapter === 1 ? "bg-accent" : "bg-hairline"}`} />
          <span className={`h-1.5 w-1.5 rounded-full transition-colors ${activeChapter === 2 ? "bg-accent" : "bg-hairline"}`} />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <Nav />

        <article className="pt-36 pb-24 mx-auto w-full max-w-[1600px] px-6 md:px-12 flex-1">
          <Link
            to="/"
            onClick={() => triggerHaptic("light")}
            className="inline-flex items-center gap-2 font-label text-[0.85rem] tracking-[0.06em] uppercase text-muted-foreground transition-colors duration-300 hover:text-accent mb-12"
          >
            <span>← BACK TO HOME</span>
          </Link>

          <SectionHead number="01" label="Scrollytelling Experience" />

          {/* Chapter 0: Hero Overview Story Block */}
          <section className="story-chapter min-h-[65vh] flex flex-col justify-center py-12">
            <div className="grid grid-cols-12 gap-y-12 items-center">
              <div className="col-span-12 lg:col-span-8">
                <span className="font-label text-[0.88rem] tracking-[0.06em] uppercase text-accent block mb-4">
                  01 // CAREER STORY
                </span>
                <span className="display block text-[clamp(4.5rem,18vw,10rem)] leading-none text-elevated">
                  01
                </span>
                <h1 className="display mt-2 text-[clamp(3.5rem,12vw,8.5rem)] leading-[0.86]">
                  <span>Cadmaxx</span><br />
                  <span>Solutions</span>
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="label text-foreground">Graduate Trainee</span>
                  <span className="label text-muted-foreground">• Jun 2025 — Jun 2026</span>
                </div>

                <div className="glass-card mt-8 max-w-2xl rounded-[12px] relative overflow-hidden !min-h-0">
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-accent/70 z-10" />
                  <div className="pl-6 py-4 pr-6">
                    <p className="text-[clamp(1.1rem,1.6vw,1.45rem)] leading-relaxed text-foreground/90 font-normal">
                      Automated CAD design generation using Python and FastAPI, reducing part design turnaround time by 5%. Built a hybrid text-and-vision pipeline with RAG for automated engineering drawing review.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-3 font-label text-[0.82rem] tracking-[0.06em] uppercase text-muted-foreground">
                  <span>SCROLL DOWN TO EXPLORE INITIATIVES</span>
                  <span className="animate-bounce">↓</span>
                </div>
              </div>
            </div>
          </section>

          {/* Chapters 1 & 2: Scroll-Driven Story Cards */}
          <div className="mt-20 flex flex-col gap-24 md:gap-36">
            {INITIATIVES.map((item, idx) => (
              <section
                key={item.id}
                id={item.id}
                className="story-chapter relative min-h-[70vh] flex flex-col justify-center border-t border-hairline/40 pt-16 md:pt-24"
              >
                <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 items-start">
                  {/* Left Column: Chapter Title & Meta */}
                  <header className="col-span-12 lg:col-span-4 sticky top-32">
                    <span className="font-label text-[0.82rem] tracking-[0.06em] uppercase text-accent block mb-3">
                      {item.chapter}
                    </span>
                    <h2 className="display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.9]">
                      {item.title}
                    </h2>
                    <p className="mt-2 font-sans text-[0.78rem] font-medium tracking-[0.02em] uppercase text-muted-foreground">
                      {item.subtitle}
                    </p>
                    <div className="mt-8">
                      <Tags items={item.tags} />
                    </div>
                  </header>

                  {/* Right Column: Scrollytelling Detail Card */}
                  <div className="glass-card col-span-12 lg:col-span-8 flex flex-col gap-10 p-8 md:p-12 !min-h-0 relative">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <span className="label mb-3 block text-accent font-label text-[0.82rem] tracking-[0.06em] uppercase">
                          The Challenge
                        </span>
                        <p className="text-sm leading-relaxed text-foreground/70">
                          {item.challenge}
                        </p>
                      </div>
                      <div>
                        <span className="label mb-3 block text-accent font-label text-[0.82rem] tracking-[0.06em] uppercase">
                          Technical Approach
                        </span>
                        <p className="text-sm leading-relaxed text-foreground/90">
                          {item.approach}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-hairline/40 pt-8">
                      <span className="label mb-6 block font-label text-[0.82rem] tracking-[0.06em] uppercase text-foreground">
                        System Architecture Flow
                      </span>
                      <Flow steps={item.flow} />
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </article>

        <Footer />
      </div>
    </main>
  );
}
