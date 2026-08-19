import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";

import { Preloader } from "@/components/site/Preloader";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Experience } from "@/components/site/Experience";
import { Toolkit as Skills } from "@/components/site/Toolkit";
import { Work } from "@/components/site/Work";
import { Certifications } from "@/components/site/Certifications";
import { Contact, Footer } from "@/components/site/Contact";
import { useRevealObserver } from "@/components/site/reveal";
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
      <Work />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
