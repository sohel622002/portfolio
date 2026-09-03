import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, getProjectSlugs, projects } from "@/lib/data/projects";
import Footer from "@/app/components/Footer";
import ProjectImageCarousel from "@/app/components/ProjectImageCarousel";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/project/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — Sohel Shaikh`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/project/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-5 py-4 sm:px-8">
          <div className="pointer-events-auto rounded-full border border-border/70 bg-white/70 px-4 py-2 shadow-soft backdrop-blur-md">
            <Link
              className="font-display text-xl font-semibold tracking-tight"
              href="/#top"
            >
              Shaikh<span className="text-(--lavender)">.</span>
            </Link>
          </div>
          <Link
            href="/#work"
            className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-border/70 bg-white/70 px-4 py-2 text-sm font-medium text-foreground shadow-soft backdrop-blur-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to work
          </Link>
        </div>
      </header>

      <article className="pt-32 pb-16 sm:pt-40">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          {/* Header */}
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
              {project.category}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-(--sunshine-soft) px-3 py-1 text-xs font-medium text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Meta row */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-y border-border/60 py-6 sm:grid-cols-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/50">
                Role
              </p>
              <p className="mt-1 text-sm font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/50">
                Year
              </p>
              <p className="mt-1 text-sm font-medium">{project.year}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/50">
                Duration
              </p>
              <p className="mt-1 text-sm font-medium">{project.duration}</p>
            </div>
            {(project.links?.live || project.links?.github) && (
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/50">
                  Links
                </p>
                <div className="mt-1 flex flex-col gap-1">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                      Live site <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                    >
                      Source <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Hero image */}
          <div
            className="relative mt-10 aspect-16/9 w-full overflow-hidden rounded-3xl border border-border/60 shadow-soft"
            style={{ background: project.gradient }}
          >
            <ProjectImageCarousel
              images={project.images}
              alt={project.title}
              imageFit={project.imageFit}
              width={project.imageSize?.width ?? 1200}
              height={project.imageSize?.height ?? 800}
            />
          </div>

          {/* Body */}
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="space-y-5 lg:col-span-2">
              <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
                Overview
              </h2>
              {project.longDescription.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
                Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-2xl border border-border/60 bg-white p-4 text-sm leading-relaxed text-muted-foreground shadow-soft"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--sunshine)" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next project */}
          <div className="mt-20 border-t border-border/60 pt-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
              Next project
            </p>
            <Link
              href={`/project/${nextProject.slug}`}
              className="group flex items-center justify-between gap-4 rounded-3xl border border-border/60 bg-white p-6 shadow-soft transition-shadow hover:shadow-lift"
            >
              <div>
                <h3 className="font-display text-xl font-semibold leading-tight sm:text-2xl">
                  {nextProject.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {nextProject.tagline}
                </p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-12">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
