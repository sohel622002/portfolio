import React from "react";
import TechStacksAnimationProvider from "./animation-providers/TechStacksAnimationProvider";
import TechStackIcon from "./TechStackIcon";
import { techStackRows } from "@/lib/data/tech-stack";

export default function TectStack() {
  return (
    <TechStacksAnimationProvider>
      <section
        id="other-work"
        aria-labelledby="other-work-heading"
        className="relative"
      >
        <div>
          <div className="flex min-h-screen items-center">
            <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
              <div className="mb-12 space-y-4">
                <div className="max-w-xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                    Tech stack
                  </p>
                  <h2
                    id="other-work-heading"
                    className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                  >
                    The tools I use to turn ideas into{" "}
                    <span className="ml-1 highlight-text">
                      working software
                    </span>
                  </h2>
                </div>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  A mix of technologies I use at work, in side projects, and
                  whenever I’m curious enough to build something.
                </p>
              </div>
              <div className="mx-auto w-full max-w-2xl space-y-3 tech-stacks-section">
                {techStackRows.map((row) => (
                  <div key={row.id} className="overflow-hidden">
                    <div className="flex w-max flex-nowrap gap-3 tech-stack-row">
                      {row.icons.map((icon) => (
                        <TechStackIcon key={icon.id} icon={icon} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </TechStacksAnimationProvider>
  );
}
