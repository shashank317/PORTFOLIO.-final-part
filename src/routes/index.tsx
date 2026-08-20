import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";

import { Preloader } from "@/components/layout/Preloader";
import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/features/home/components/Hero";
import { Experience } from "@/features/home/components/Experience";
import { Skills } from "@/features/home/components/Skills";
import { Projects } from "@/features/home/components/Projects";
import { Certifications } from "@/features/home/components/Certifications";
import { Contact } from "@/features/home/components/Contact";
import { Footer } from "@/components/layout/Footer";
import { useRevealObserver } from "@/lib/reveal";
import hero from "@/assets/hero-portrait.png";

const HERO_OG = `https://id-preview--6d4c6814-a19c-4e43-8eb3-e7529e8676a5.lovable.app${hero}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shashank H — Software Engineer / Backend & AI Systems" },
      {
        name: "description",
        content:
          "Portfolio of Shashank H, a backend-focused software engineer building APIs, automation, and practical AI integrations with Python.",
      },
      { property: "og:title", content: "Shashank H — Software Engineer / Backend & AI Systems" },
      {
        property: "og:description",
        content:
          "Backend systems, automation, and AI-powered products built with Python. Based in Bengaluru, India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_OG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_OG },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);
  const done = useCallback(() => setReady(true), []);
  useRevealObserver(ready);

  return (
    <main className="grain relative bg-background">
      {!ready && <Preloader onDone={done} />}
      <Nav />
      <Hero ready={ready} />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
