import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 md:gap-8 rounded-full border px-5 py-2.5 md:px-7 md:py-3.5 backdrop-blur-xl transition-all duration-500 shadow-2xl ${
          scrolled
            ? "border-accent/40 bg-background/85 shadow-accent/5"
            : "border-hairline/40 bg-surface/60 hover:border-hairline/70"
        }`}
      >
        {/* Brand Logo / Home Link */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-label text-[0.85rem] tracking-[0.08em] uppercase text-foreground transition-colors duration-300 hover:text-accent"
        >
          <span className="inline-block h-3.5 w-[2px] bg-accent" />
          <span className="font-medium">SHASHANK H</span>
        </Link>

        {/* Center Pill Nav Links */}
        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-[0.72rem] font-medium tracking-[0.06em] uppercase text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Availability Pill Badge */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 font-label text-[0.72rem] md:text-[0.76rem] tracking-[0.04em] uppercase text-foreground/80 bg-background/60 px-3 py-1.5 rounded-full border border-hairline/30">
            <span className="dot-live inline-block size-[6px] rounded-full bg-accent" />
            <span className="hidden sm:inline">Available for opportunities</span>
            <span className="sm:hidden">Available</span>
          </span>
        </div>
      </nav>
    </header>
  );
}
