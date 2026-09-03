import React from "react";
import GsapTimelineProvider from "./animation-providers/HeroGsapTimelineProvider";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="pt-24 pb-12 sm:pt-34 sm:pb-14 min-h-screen flex justify-center w-full"
    >
      <div className="relative z-10 mx-auto px-5 sm:px-8 max-w-5xl w-full">
        <div>
          <div className="animate-chip inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs font-medium text-foreground/70 shadow-soft">
            <span className="uppercase tracking-[0.14em]">
              You made it this far. Might as well say hello.
            </span>
          </div>
          <p className="animate-name font-display mt-7 text-xs font-medium uppercase tracking-[0.18em] text-foreground/60 md:mt-8 sm:text-sm">
            Sohel Shaikh
          </p>
          <h1
            id="hero-heading"
            className="animate-title font-display mt-2 text-4xl font-semibold leading-[1.07] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[78px]"
          >
            Hey, I’m Sohel.
            <br />I build things that{" "}
            <span className="highlight-text">work.</span>
          </h1>
          <p className="animate-subtitle mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I’m a Software Engineer based in Ahmedabad, India. I like turning
            ideas into useful products, solving interesting problems, and
            occasionally overthinking the small details.
          </p>
          <div className="animate-actions mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/sohel-resume.pdf"
              download="sohel-resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Grab my resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-medium text-foreground transition hover:bg-[var(--sunshine-soft)]"
            >
              See selected work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-down h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
