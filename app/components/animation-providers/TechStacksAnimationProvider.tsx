"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function getRowScrollDistance(row: HTMLElement) {
  const wrapper = row.parentElement as HTMLElement;
  if (!wrapper) return 0;

  return Math.max(0, row.scrollWidth - wrapper.clientWidth);
}

export default function TechStacksAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const stacksSection = container?.querySelector(
        ".tech-stacks-section",
      ) as HTMLElement | null;
      const section = stacksSection?.closest("section") as HTMLElement | null;
      const rows = gsap.utils.toArray<HTMLElement>(
        ".tech-stack-row",
        container,
      );

      if (!section || !rows.length) return;

      const tl = gsap.timeline();

      rows.forEach((row, index) => {
        const distance = getRowScrollDistance(row);
        const direction = index % 2 === 0 ? -1 : 1;

        gsap.set(row, {
          x: direction === -1 ? 0 : -distance,
        });

        tl.to(
          row,
          {
            x: direction === -1 ? -distance : 0,
            duration: 1,
            ease: "none",
          },
          0,
        );
      });

      const scrollTrigger = ScrollTrigger.create({
        trigger: section,
        pin: section,
        start: "center center",
        end: () => {
          const maxDistance = Math.max(
            ...rows.map((row) => getRowScrollDistance(row)),
            1,
          );
          return `+=${maxDistance}`;
        },
        scrub: 1,
        animation: tl,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        markers: false,
      });

      const refresh = () => ScrollTrigger.refresh();
      refresh();

      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        scrollTrigger.kill();
      };
    },
    {
      scope: containerRef,
    },
  );

  return <div ref={containerRef}>{children}</div>;
}
