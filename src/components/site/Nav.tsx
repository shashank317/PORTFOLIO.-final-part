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
      className="fixed inset-x-0 top-0 z-50 border-b transition-[padding,background-color,border-color] duration-500"
      style={{
        paddingBlock: compact ? "0.7rem" : "1.35rem",
        backgroundColor: compact ? "rgba(5,5,5,0.72)" : "transparent",
        borderColor: compact ? "var(--color-hairline)" : "transparent",
        backdropFilter: compact ? "blur(10px)" : "none",
      }}
    >
      <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-mono text-[0.7rem] tracking-[0.28em] uppercase">
          Shashank H
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <ul className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="label transition-colors duration-300 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="label flex items-center gap-2 text-[0.55rem] md:text-[0.625rem]">
            <span className="dot-live inline-block size-[5px] rounded-full bg-accent" />
            Available for opportunities
          </span>
        </div>
      </nav>
    </header>
  );
}
