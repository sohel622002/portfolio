"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TechStacksAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const rows = gsap.utils.toArray<HTMLElement>(
        ".tech-stack-row",
        container,
      );

      if (!container || !rows.length) return;

      const tl = gsap.timeline();

      rows.forEach((row, index) => {
        const wrapper = row.parentElement as HTMLElement;
        const distance = Math.max(0, row.scrollWidth - wrapper.clientWidth);
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

      ScrollTrigger.create({
        trigger: container,
        pin: container,
        start: "top top",
        end: () => {
          const distances = rows.map((row) => {
            const wrapper = row.parentElement as HTMLElement;
            return Math.max(0, row.scrollWidth - wrapper.clientWidth);
          });
          return `+=${Math.max(...distances)}`;
        },
        scrub: 1,
        animation: tl,
        invalidateOnRefresh: true,
        markers: false,
      });
    },
    {
      scope: containerRef,
    },
  );

  return <div ref={containerRef}>{children}</div>;
}
