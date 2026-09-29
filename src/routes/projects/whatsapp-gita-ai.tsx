import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionHead } from "@/components/common/SectionHead";
import { triggerHaptic } from "@/lib/haptics";

export const Route = createFileRoute("/projects/whatsapp-gita-ai")({
  head: () => ({
    meta: [
      { title: "WhatsApp Gita AI — Project Case Study | Shashank H" },
      {
        name: "description",
        content:
          "Deep dive into WhatsApp Gita AI, an automated system for verse selection, multilingual text-to-speech generation, AWS S3 audio hosting, and Twilio WhatsApp delivery.",
      },
    ],
  }),
  component: WhatsAppGitaAIPage,
});

function WhatsAppGitaAIPage() {
  return (
    <main className="grain relative bg-background min-h-screen flex flex-col justify-between">
      <Nav />

      <article className="pt-36 pb-24 mx-auto w-full max-w-[1600px] px-6 md:px-12 flex-1">
        <Link
          to="/"
          hash="work"
          onClick={() => triggerHaptic("light")}
          className="inline-flex items-center gap-2 font-label text-[0.85rem] tracking-[0.06em] uppercase text-muted-foreground transition-colors duration-300 hover:text-accent mb-12"
        >
          <span>← BACK TO WORK</span>
        </Link>

        <SectionHead number="03.3" label="Selected Work / Case Study" />

        <div className="mt-10">
          <span className="display block text-[clamp(4.5rem,14vw,9rem)] leading-none text-elevated">
            03
          </span>
          <h1 className="display mt-2 text-[clamp(3.5rem,11vw,8rem)] leading-[0.84]">
            WhatsApp Gita AI
          </h1>
          <p className="mt-6 max-w-3xl text-[clamp(1.1rem,1.8vw,1.5rem)] text-foreground/90 leading-relaxed font-normal">
            An automated system that selects Bhagavad Gita verses, generates multilingual voice content, and delivers scheduled messages through WhatsApp.
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="mt-16 grid grid-cols-12 gap-y-8 border-y py-10 md:gap-x-12">
          <div className="col-span-6 md:col-span-3">
            <p className="label mb-2 text-accent">Role</p>
            <p className="font-sans text-xs font-medium tracking-wide uppercase text-foreground">Backend & Automation Engineer</p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="label mb-2 text-accent">Timeline</p>
            <p className="font-sans text-xs font-medium tracking-wide uppercase text-foreground">2025</p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="label mb-2 text-accent">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {["Python", "AWS S3", "Text-to-Speech", "Twilio", "Automation"].map((tech) => (
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
            <h2 className="label text-accent mb-4">01 / System Concept</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Delivering spiritual text with contextual commentary and audio narration requires a reliable cron/scheduling pipeline that handles media hosting and messaging API limits smoothly.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h2 className="label text-accent mb-4">02 / Technical Architecture</h2>
            <p className="text-sm leading-relaxed text-foreground/90">
              Python cron tasks query selected verses, invoke neural Text-to-Speech synthesis engines, store generated MP3 streams to AWS S3 buckets, and dispatch structured WhatsApp templates via Twilio Messaging API.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h2 className="label text-accent mb-4">03 / Reliability & Automation</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Automated retry mechanisms for API webhooks, error logging, cloud audio caching, and daily subscriber queue delivery management.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
