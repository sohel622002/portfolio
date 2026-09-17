import React from "react";
import GsapTimelineProvider from "./animation-providers/HeroGsapTimelineProvider";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="flex w-full min-h-[100dvh] min-h-screen justify-center overflow-x-clip pt-[max(5.75rem,env(safe-area-inset-top,0px)+4.5rem)] pb-10 sm:pt-36 sm:pb-14"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col justify-center px-4 sm:px-8">
        <div className="max-w-2xl sm:max-w-none">
          <div
            className="animate-chip w-fit max-w-full rounded-full border border-border/60 bg-card px-3 py-2 text-center shadow-soft sm:inline-flex sm:items-center sm:gap-2 sm:py-1.5 sm:text-left"
          >
            <span className="block text-[11px] font-medium leading-snug tracking-[0.1em] text-foreground/70 uppercase sm:inline sm:text-xs sm:tracking-[0.14em]">
              You made it this far. Might as well say hello.
            </span>
          </div>
          <p className="animate-name mt-5 font-display text-xs font-medium tracking-[0.16em] text-foreground/60 uppercase sm:mt-7 sm:tracking-[0.18em] md:mt-8 sm:text-sm">
            Sohel Shaikh
          </p>
          <h1
            id="hero-heading"
            className="animate-title mt-2 font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl sm:leading-[1.07] md:text-6xl lg:text-[78px]"
          >
            Hey, I’m Sohel.
            <br />
            I build things that{" "}
            <span className="highlight-text">work.</span>
          </h1>
          <p className="animate-subtitle mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-pretty text-muted-foreground sm:mt-6 sm:text-base sm:leading-relaxed md:text-lg">
            I’m a Software Engineer based in Ahmedabad, India. I like turning
            ideas into useful products, solving interesting problems, and
            occasionally overthinking the small details.
          </p>
          <div className="animate-actions mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a
              href="/sohel-resume.pdf"
              download="sohel-resume.pdf"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-soft transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:bg-[var(--sunshine-soft)] sm:w-auto"
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
