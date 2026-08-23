import Image from "next/image";
import AboutGsapAnimationProvider from "./animation-providers/AboutGsapAnimationProvider";

export default function About() {
  return (
    <AboutGsapAnimationProvider>
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative py-12 sm:py-14"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-12 space-y-4">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                About · a little more about me
              </p>
              <h2
                id="about-heading"
                className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              >
                A little bit about me, beyond the
                <span className="ml-2 highlight-text">IDE</span>.
              </h2>
            </div>
            <p className="max-w-xl text-muted-foreground">
              When I’m not working, I’m usually switching between cricket
              matches, learning something new, working on a side project, or
              simply taking some time to grow — in knowledge, in life, and in my
              deen.
            </p>
          </div>
          {/* columns-1 gap-5 sm:columns-2 [&amp;&gt;*]:mb-5 [&amp;&gt;*:break-inside-avoid */}
          <div className="grid grid-cols-2 gap-5">
            <div className="work-life-card bg-(--sunshine-soft) rounded-2xl border border-border/60 p-5 shadow-soft transition-shadow hover:shadow-lift">
              <div className="flex h-full flex-col justify-between gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-foreground/60">
                  Sohel, somewhere between work and life
                </span>
                <div className="aspect-3/4 w-full overflow-hidden rounded-xl bg-white/70 text-foreground/40">
                  <Image
                    src={"/sohel-travelling-photo.png"}
                    width={200}
                    height={300}
                    alt="Sohel in the mountains"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="text-sm text-foreground/70">
                  Proof that I occasionally manage to take a decent picture.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="stack-card bg-white rounded-2xl border border-border/60 p-5 shadow-soft transition-shadow hover:shadow-lift">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--sunshine-soft)] px-3 py-1 text-xs font-medium text-foreground/70">
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
                      className="lucide lucide-clock-icon lucide-clock h-3.5 w-3.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>{" "}
                    Lately
                  </div>
                  <p className="font-display text-2xl font-semibold leading-snug">
                    Cricket · Side projects · Learning
                  </p>
                  {/* <p className="text-sm text-muted-foreground">
                    by Thomas Erikson
                  </p> */}
                </div>
              </div>
              <div className="stack-card bg-[var(--lavender-soft)] rounded-2xl border border-border/60 p-5 shadow-soft transition-shadow hover:shadow-lift">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground/70">
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
                      className="lucide lucide-map-pin h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>{" "}
                    Recently Living in
                  </div>
                  <p className="font-display text-2xl font-semibold leading-tight">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
              <div className="stack-card bg-white rounded-2xl border border-border/60 p-5 shadow-soft transition-shadow hover:shadow-lift">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-foreground/60">
                    Currently working with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-border bg-[var(--sunshine-soft)] px-3 py-1 text-xs font-medium text-foreground/80">
                      TypeScript
                    </span>
                    <span className="rounded-full border border-border bg-[var(--sunshine-soft)] px-3 py-1 text-xs font-medium text-foreground/80">
                      React
                    </span>
                    <span className="rounded-full border border-border bg-[var(--sunshine-soft)] px-3 py-1 text-xs font-medium text-foreground/80">
                      Angular
                    </span>
                    <span className="rounded-full border border-border bg-[var(--sunshine-soft)] px-3 py-1 text-xs font-medium text-foreground/80">
                      Next.js
                    </span>
                    <span className="rounded-full border border-border bg-[var(--sunshine-soft)] px-3 py-1 text-xs font-medium text-foreground/80">
                      Node.js
                    </span>
                    <span className="rounded-full border border-border bg-[var(--sunshine-soft)] px-3 py-1 text-xs font-medium text-foreground/80">
                      NestJS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AboutGsapAnimationProvider>
  );
}
