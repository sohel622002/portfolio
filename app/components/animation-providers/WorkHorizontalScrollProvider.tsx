"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;

      const section = containerRef.current?.querySelector(
        ".horizontal-section",
      ) as HTMLElement | null;

      const track = containerRef.current?.querySelector(
        ".horizontal-track",
      ) as HTMLElement | null;

      const leftBlur = containerRef.current?.querySelector(
        ".horizontal-blur-left",
      ) as HTMLElement | null;

      const rightBlur = containerRef.current?.querySelector(
        ".horizontal-blur-right",
      ) as HTMLElement | null;

      const cards = gsap.utils.toArray<HTMLElement>(
        ".horizontal-track > div",
        containerRef.current,
      );

      if (!section || !track || !leftBlur || !rightBlur || !cards.length) return;

      const getScrollAmount = () => {
        return Math.max(0, track.scrollWidth - section.clientWidth);
      };

      const entranceTimeline = gsap.timeline({
        paused: true,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 30,
      });

      entranceTimeline.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        once: true,

        onEnter: () => {
          entranceTimeline.play();
        },
      });

      // Initial state
      gsap.set(leftBlur, {
        opacity: 0,
      });

      gsap.set(rightBlur, {
        opacity: 1,
      });

      const setLeftBlur = gsap.quickTo(leftBlur, "opacity", {
        duration: 0.2,
      });

      const setRightBlur = gsap.quickTo(rightBlur, "opacity", {
        duration: 0.2,
      });

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "center center",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          markers: false,
          onUpdate: (self) => {
            const progress = self.progress;
            setLeftBlur(progress > 0.01 ? 1 : 0);
            setRightBlur(progress < 0.99 ? 1 : 0);
          },
        },
      });
    },
    {
      scope: containerRef,
    },
  );

  return <div ref={containerRef}>{children}</div>;
}
