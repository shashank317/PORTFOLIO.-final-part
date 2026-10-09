import { ReactLenis } from "lenis/react";
import { type ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
        smoothWheel: true,
        syncTouch: false,
        autoToggle: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
