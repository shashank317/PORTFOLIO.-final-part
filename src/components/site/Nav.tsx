import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color] duration-500"
      style={{
        paddingBlock: compact ? "0.75rem" : "1.5rem",
        backgroundColor: compact ? "rgba(5,5,5,0.85)" : "transparent",
        borderColor: compact ? "var(--color-hairline)" : "transparent",
        borderBottomWidth: compact ? "1px" : "0px",
        backdropFilter: compact ? "blur(12px)" : "none",
      }}
    >
      <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 md:px-12">
        <a href="#top" className="flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.28em] uppercase text-foreground">
          <span className="inline-block h-3.5 w-[2px] bg-foreground" />
          <span>Shashank H</span>
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <ul className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="label text-[0.68rem] tracking-[0.2em] transition-colors duration-300 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="label flex items-center gap-2 text-[0.55rem] md:text-[0.625rem] tracking-[0.16em]">
            <span className="dot-live inline-block size-[6px] rounded-full bg-accent" />
            Available for opportunities
          </span>
        </div>
      </nav>
    </header>
  );
}
