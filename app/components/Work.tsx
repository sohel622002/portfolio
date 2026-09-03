import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import HorizontalScrollProvider from "./animation-providers/WorkHorizontalScrollProvider";
import { projects } from "@/lib/data/projects";

export default function Work() {
  return (
    <HorizontalScrollProvider>
      <section
        id="work"
        aria-labelledby="work-heading"
        className="relative py-12 sm:py-14"
      >
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-12 space-y-4">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                Selected work
              </p>
              <h2
                id="work-heading"
                className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              >
                Things I’ve built along the{" "}
                <span className="mx-1 highlight-text">way</span>.
              </h2>
            </div>
            <p className="max-w-xl text-muted-foreground">
              A few projects that pushed me to learn, experiment, solve
              problems, and turn ideas into working products.
            </p>
          </div>
          <div className="overflow-x-auto scrollbar-none horizontal-section">
            <div className="horizontal-blur horizontal-blur-left" />
            <div className="horizontal-blur horizontal-blur-right" />

            <div className="flex gap-6 horizontal-track">
              {projects.map((project) => {
                const thumbnail = project.images[0];
                const { width, height } = project.imageSize ?? {
                  width: 1200,
                  height: 800,
                };

                return (
                  <div key={project.slug} className="group w-[400] shrink-0">
                    <a
                      href={`/project/${project.slug}`}
                      className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-white shadow-soft transition-shadow hover:shadow-lift"
                    >
                      <div
                        className="relative aspect-4/2 w-full overflow-hidden"
                        style={{ background: project.gradient }}
                      >
                        <Image
                          src={thumbnail}
                          alt={project.title}
                          width={width}
                          height={height}
                          loading="lazy"
                          className={`absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-[1.04] ${
                            project.imageFit === "contain"
                              ? "object-contain"
                              : "object-cover"
                          }`}
                        />
                        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-foreground shadow-soft transition-transform group-hover:rotate-12">
                          <ArrowUpRight className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 p-5 sm:p-6">
                        <span className="w-fit rounded-full bg-(--sunshine-soft) px-3 py-1 text-xs font-medium text-foreground/70">
                          {project.tags.join(" · ")}
                        </span>
                        <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">
                          {project.title}
                        </h3>
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/50">
                          {project.tagline}
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </HorizontalScrollProvider>
  );
}
