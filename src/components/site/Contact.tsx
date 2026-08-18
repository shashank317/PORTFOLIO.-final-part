import { SectionHead } from "./SectionHead";

// TODO(editable): replace with the real profile URLs when available.
const LINKEDIN_URL = "https://www.linkedin.com/in/";
const GITHUB_URL = "https://github.com/";

const LINKS = [
  { label: "Email", href: "mailto:shashankssh07@gmail.com" },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "GitHub", href: GITHUB_URL },
];

export function Contact() {
  return (
    <section id="contact" className="relative flex flex-col justify-center pad-section min-h-[70svh]">
      <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
        <SectionHead number="05" label="Contact" />

        <h2 className="display mt-14 text-[clamp(3rem,14vw,9rem)] leading-[0.86] md:text-[clamp(4.5rem,8.5vw,9rem)]">
          <span className="mask">
            <span>Let's build</span>
          </span>
          <span className="mask" style={{ ["--d" as string]: "110ms" }}>
            <span>something</span>
          </span>
          <span className="mask" style={{ ["--d" as string]: "220ms" }}>
            <span className="text-muted-foreground">useful.</span>
          </span>
        </h2>

        <div className="mt-20 grid grid-cols-12 gap-y-14 md:gap-x-12">
          <p className="reveal col-span-12 max-w-2xl text-base leading-relaxed text-foreground/90 md:col-span-7 md:text-lg">
            I treat engineering problems as reasoning problems first: parse the input into something
            structured, route it deliberately, and keep the system honest about what it doesn't know.
          </p>

          <div className="col-span-12 md:col-span-5">
            <p className="reveal label mb-8">Open to software engineering and backend roles.</p>
            <ul className="flex flex-col border-t">
              {LINKS.map((l, i) => (
                <li key={l.label} className="reveal border-b" style={{ ["--d" as string]: `${i * 100}ms` }}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group flex items-center justify-between py-5 font-mono text-[0.72rem] tracking-[0.24em] uppercase transition-colors duration-300 hover:text-accent"
                  >
                    {l.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-5 md:flex-row md:items-center md:justify-between md:px-10">
        <span className="label">© 2026 Shashank H</span>
        <span className="label hidden md:inline">Designed with intent. Built with code.</span>
        <span className="label">Bengaluru, India</span>
      </div>
    </footer>
  );
}
