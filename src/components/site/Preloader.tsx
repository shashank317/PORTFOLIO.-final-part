import { useEffect, useState } from "react";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const a = window.setTimeout(() => setLeaving(true), 1350);
    const b = window.setTimeout(onDone, 1900);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [onDone]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: leaving ? 0 : 1, pointerEvents: leaving ? "none" : "auto" }}
    >
      <div className="display text-[clamp(3rem,13vw,10rem)] leading-none sm:text-[clamp(4rem,8vw,10rem)]">Shashank H</div>
      <div className="mt-6 h-px w-[52vw] max-w-md bg-hairline">
        <div className="loadline h-px w-full bg-foreground" />
      </div>
      <p className="label mt-5">Initializing Portfolio</p>
    </div>
  );
}
