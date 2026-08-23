"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StackedCardsAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".stacked-card",
        containerRef.current,
      );

      if (!cards.length) return;

      /*
       * Initial state
       */
      gsap.set(cards, {
        yPercent: 140,
        rotate: 0,
      });

      /*
       * Build timeline
       */
      const tl = gsap.timeline();

      cards.forEach((card, index) => {
        tl.to(
          card,
          {
            yPercent: 0,
            rotate: index % 2 === 0 ? 1.6 : -1.6,
            duration: 1,
            ease: "none",
          },
          index === 0 ? 0 : "-=0.3",
        );
      });

      /*
       * Connect timeline to scroll
       */
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "center center",
        end: () => `+=${cards.length * 300}`,
        scrub: 1,
        pin: true,
        animation: tl,
        markers: false,
      });
    },
    {
      scope: containerRef,
    },
  );

  return <div ref={containerRef}>{children}</div>;
}
