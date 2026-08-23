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
                        Studio Carbon
                      </h3>
                      <span className="shrink-0 w-fit rounded-full bg-[var(--sunshine-soft)] px-3 py-1 text-xs font-medium text-foreground/70">
                        Jan 2026 — Jun 2026
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      Communication Design Intern
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <p>
                          Awarded a place in Studio Carbon's{" "}
                          <b className="highlight-text">Graduation Project</b>{" "}
                          Cohort, receiving six months of structured design
                          mentorship.
                        </p>
                      </li>
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Conducted design research on menopause in India
                          through secondary research and semi-structured
                          interviews with women and medical experts,
                          synthesising findings into behavioural archetypes and
                          actionable insights to address systemic and
                          household-level health literacy gaps.
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Designed un.paused, an accessible publication and
                          communication ecosystem that promotes menopause
                          awareness and helps dismantle domestic stigma among
                          homemakers in India.
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
                        Spicey Guava
                      </h3>
                      <span className="shrink-0 text-xs font-medium text-muted-foreground">
                        May 2025 — Nov 2025
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      Junior Graphic Designer
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Led complete end-to-end branding solutions for a
                          diverse client portfolio including hospitality (cafés,
                          restaurants), retail (skincare brand, cloud kitchen,
                          patisserie), and B2B (creative consultancy, Spicey
                          Guava), each requiring distinct market identities.
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Led packaging design for gifting products and dark rum
                          brands, website design and development, and the
                          creation of core marketing assets including social
                          media content, content calendars, menus, and brand
                          collaterals.
                        </span>
                      </li>
                      <li className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lavender)]"
                        />
                        <span>
                          Delivered cohesive brand systems with creative
                          distinction, strengthening client market presence and
                          customer engagement across both digital and print
                          platforms.
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
