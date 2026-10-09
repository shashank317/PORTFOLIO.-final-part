import { useEffect, useState } from "react";
import PillNav from "@/components/common/PillNav";
import shLogo from "@/assets/sh-logo.png";

const LINKS = [
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#work" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

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
          logo={shLogo}
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
