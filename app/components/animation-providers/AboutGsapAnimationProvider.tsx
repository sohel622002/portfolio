"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutGsapAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isNarrow = window.matchMedia("(max-width: 639px)").matches;
      const slideY = reduceMotion ? 0 : isNarrow ? 20 : 35;
      const slideX = reduceMotion ? 0 : isNarrow ? 12 : 30;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-life-card",
          start: isNarrow ? "top 85%" : "top center",
          markers: false,
        },
      });

      tl.fromTo(
        ".work-life-card",
        {
          opacity: 0,
          y: slideY,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
      );

      tl.fromTo(
        ".stack-card",
        {
          opacity: 0,
          x: slideX,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: isNarrow ? 0.15 : 0.3,
        },
        "-=0.4",
      );
    },
    {
      scope: containerRef,
    },
  );

  return <div ref={containerRef}>{children}</div>;
}
