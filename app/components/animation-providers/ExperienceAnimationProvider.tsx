"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".reveal-card",
        containerRef.current,
      );

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            x: 30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",

            scrollTrigger: {
              trigger: card,
              // Start when 50% of the card has entered viewport
              start: "top 50%",
              // Play only once
              once: true,
              markers: false,
            },
          },
        );
      });
    },
    {
      scope: containerRef,
    },
  );

  return <div ref={containerRef}>{children}</div>;
}
