import React from "react";
import ExperienceAnimationProvider from "./animation-providers/ExperienceAnimationProvider";

export default function Experience() {
  return (
    <>
      <ExperienceAnimationProvider>
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="relative py-12 sm:py-14"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="mb-12 max-w-xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                Experience
              </p>
              <h2
                id="experience-heading"
                className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              >
                The road{/* */} <span className="highlight-text">so far</span>.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                A quick look at where I’ve worked, what I’ve been responsible
                for, and the things I’ve learned along the way.
              </p>
            </div>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-3 top-2 bottom-2 w-px bg-border sm:left-4"
              />
              <ol className="space-y-6">
                <li
                  className="relative pl-10 sm:pl-14"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-3 grid h-6 w-6 place-items-center rounded-full bg-white shadow-soft sm:left-1"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--lavender)]" />
                  </span>
                  <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-soft sm:p-6 reveal-card">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                      <h3 className="font-display truncate text-lg font-semibold sm:text-xl">
                        Convasys Technology Pvt Ltd
                      </h3>
                      <span className="shrink-0 w-fit rounded-full bg-[var(--sunshine-soft)] px-3 py-1 text-xs font-medium text-foreground/70">
                        Sept 2024 — Present
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      Software Engineer
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Developed and maintained{" "}
                          <b className="highlight-text">Angular</b> web
                          applications and Ionic-based mobile apps for
                          Android, iOS, and PWA, supporting the company's core
                          product across platforms.
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Implemented reactive programming patterns using
                          RxJS to manage complex asynchronous flows and
                          application state, and integrated RESTful APIs in
                          close collaboration with backend teams.
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Built and maintained company websites using
                          Next.js with a focus on performance, SEO, and
                          scalability, while contributing to backend
                          development (~40% of workload) using NestJS to
                          build REST APIs and microservices.
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className="relative pl-10 sm:pl-14"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-3 grid h-6 w-6 place-items-center rounded-full bg-white shadow-soft sm:left-1"
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--lavender)]" />
                  </span>
                  <div className="rounded-2xl border border-border/60 bg-white p-5 shadow-soft sm:p-6 reveal-card">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                      <h3 className="font-display truncate text-lg font-semibold sm:text-xl">
                        Freelance
                      </h3>
                      <span className="shrink-0 text-xs font-medium text-muted-foreground">
                        Oct 2023 — Sept 2024
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      Frontend / Full-Stack Developer
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Delivered frontend-focused freelance projects using
                          React and Next.js, building responsive UIs with
                          HTML, CSS, SCSS, and JavaScript, and optimizing
                          client websites for performance, SEO, and
                          scalability.
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Developed REST APIs using Node.js and Express.js to
                          support frontend functionality, and designed and
                          managed databases using PostgreSQL and Prisma ORM.
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Managed the full project lifecycle — requirement
                          gathering, development, testing, and client
                          feedback — for multiple independent clients across
                          India and Malaysia.
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </ExperienceAnimationProvider>
    </>
  );
}
