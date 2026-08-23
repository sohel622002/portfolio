import React from "react";
import FooterAnimationProvider from "./animation-providers/FooterAnimationProvider";

export default function Footer() {
  return (
    <>
      <FooterAnimationProvider>
        <footer id="resume" className="relative overflow-hidden">
          <div className="mx-auto max-w-5xl px-5 pb-10 pt-8 sm:px-8">
            <div className="call-to-action-footer-card rounded-3xl border border-border/60 bg-[var(--sunshine-soft)] p-8 shadow-soft sm:p-12">
              <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                    Say hello
                  </p>
                  <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    Got a project, an idea, or just a{" "}
                    <span className="highlight-text white">question?</span>
                  </h3>
                </div>
                <a
                  href="mailto:sohelshaikh622002@gmail.com"
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  sohelshaikh622002@gmail.com
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-muted-foreground">
                © {/* */}2026{/* */} Sohel. Made with code, curiosity, and too
                much chai.
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground/70 transition hover:bg-[var(--sunshine-soft)] hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-foreground/70 transition hover:bg-[var(--sunshine-soft)] hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width={4} height={12} x={2} y={9} />
                    <circle cx={4} cy={4} r={2} />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </FooterAnimationProvider>
    </>
  );
}
