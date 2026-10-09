import { useEffect, useState } from "react";
import PillNav from "@/components/common/PillNav";

const LINKS = [
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#work" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

const SH_LOGO = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="40" fill="%23ffffff">SH</text></svg>`;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-end md:justify-center px-4 pt-[calc(env(safe-area-inset-top,0px)+12px)] md:pt-6 pointer-events-none">
      <div className="pointer-events-auto flex justify-center">
        <PillNav
          logo={SH_LOGO}
          logoAlt="SH Logo"
          items={LINKS}
          className={`backdrop-blur-md rounded-full transition-all duration-500 border ${
            scrolled
              ? "border-accent/40 shadow-accent/5 bg-surface/80"
              : "border-white/10 bg-surface/60"
          }`}
          baseColor="rgba(10, 10, 10, 0.6)"
          pillColor="rgba(26, 26, 26, 0.8)"
          pillTextColor="#d4d4d4"
          hoveredPillTextColor="#ffffff"
        />
      </div>
    </header>
  );
}
