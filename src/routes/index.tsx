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


const SITE_URL = import.meta.env.VITE_SITE_URL;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shashank H, Python backend & AI developer" },
      {
        name: "description",
        content: "Shashank H, Python backend & AI developer",
      },
      { property: "og:title", content: "Shashank H, Python backend & AI developer" },
      {
        property: "og:description",
        content: "Shashank H, Python backend & AI developer",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(SITE_URL
        ? [
            { property: "og:image", content: `${SITE_URL}/hero-portrait.png` },
            { name: "twitter:image", content: `${SITE_URL}/hero-portrait.png` },
          ]
        : []),
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
