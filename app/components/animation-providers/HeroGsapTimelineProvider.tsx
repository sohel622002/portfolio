"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GsapTimelineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isNarrow = window.matchMedia("(max-width: 639px)").matches;
    const slideX = reduceMotion ? 0 : isNarrow ? -20 : -50;
    const headerY = reduceMotion ? 0 : isNarrow ? -40 : -80;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.5 },
      });

      tl.from(".animate-header", { y: headerY, opacity: 0 })
        .from(".animate-chip", { x: slideX, opacity: 0 }, "-=0.34")
        .from(".animate-name", { x: slideX, opacity: 0 }, "-=0.34")
        .from(".animate-title", { x: slideX, opacity: 0 }, "-=0.34")
        .from(".animate-subtitle", { x: slideX, opacity: 0 }, "-=0.34")
        .from(
          ".animate-actions",
          { x: slideX, opacity: 0, stagger: 0.2 },
          "-=0.34",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
