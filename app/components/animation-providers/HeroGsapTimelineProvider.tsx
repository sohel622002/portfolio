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
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.5 },
      });

      // Target your classes cleanly from the scoped container
      tl.from(".animate-header", { y: -80, opacity: 0 })
        .from(".animate-chip", { x: -50, opacity: 0 }, "-=0.34")
        .from(".animate-name", { x: -50, opacity: 0 }, "-=0.34")
        .from(".animate-title", { x: -50, opacity: 0 }, "-=0.34")
        .from(".animate-subtitle", { x: -50, opacity: 0 }, "-=0.34")
        .from(
          ".animate-actions",
          { x: -50, opacity: 0, stagger: 0.2 },
          "-=0.34",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
