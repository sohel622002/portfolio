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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-life-card",
          start: "top center",
          markers: false,
        },
      });

      tl.fromTo(
        ".work-life-card",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
      );

      // Start card timeline at 50% of main animation
      tl.fromTo(
        ".stack-card",
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.3,
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
