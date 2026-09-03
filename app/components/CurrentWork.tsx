import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import StackedCardsAnimation from "./animation-providers/CurrentWorkStackedCardsAnimation";

export default function CurrentWork() {
  return (
    <StackedCardsAnimation>
      <section
        id="other-work"
        aria-labelledby="other-work-heading"
        className="relative"
      >
        <div>
          <div className="sticky top-16 flex items-center">
            <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
              <div className="mb-12 space-y-4">
                <div className="max-w-xl">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                    Currently building
                  </p>
                  <h2
                    id="other-work-heading"
                    className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
                  >
                    Things I’m working on,{" "}
                    <span className="ml-1 highlight-text">one idea</span> at a
                    time
                  </h2>
                </div>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  A few projects I’m building and exploring outside of work —
                  mostly to learn, experiment, and see what I can make.
                </p>
              </div>
              <div>
                <div className="lg:col-span-7">
                  <div
                    className="relative mx-auto w-full max-w-2xl overflow-hidden pb-2"
                    style={{ height: "386px" }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 origin-bottom stacked-card"
                      style={{ zIndex: "1", transform: "none" }}
                    >
                      <a
                        href="/project/docopilot"
                        className="group flex items-center gap-4 rounded-3xl border border-border/60 bg-white p-4 shadow-lift transition-colors sm:gap-6 sm:p-6 hover:bg-(--sunshine-light)"
                      >
                        <div
                          className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32"
                          style={{
                            background:
                              "linear-gradient(135deg, #FDF3B8 0%, #E4D8FA 100%)",
                          }}
                        >
                          {/* <Image
                            src="/__l5e/assets-v1/0a5627a5-ac9e-4ff2-9b31-2c9979c540dc/acw-hero.png"
                            alt="American cocktail week menu"
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          /> */}
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/50">
                            Docker Fleet Management
                          </span>
                          <h3 className="font-display mt-1 text-lg font-semibold leading-tight sm:text-xl">
                            DocoPilot
                          </h3>
                          <div className="mt-2 space-x-2">
                            <span className="inline-block rounded-full bg-(--sunshine-soft) px-3 py-1 text-[11px] font-medium text-foreground/70 group-hover:bg-background">
                              Ongoing
                            </span>
                            <span className="inline-block rounded-full bg-(--sunshine-soft) px-3 py-1 text-[11px] font-medium text-foreground/70 group-hover:bg-background">
                              React
                            </span>
                            <span className="inline-block rounded-full bg-(--sunshine-soft) px-3 py-1 text-[11px] font-medium text-foreground/70 group-hover:bg-background">
                              Docker
                            </span>
                            <span className="inline-block rounded-full bg-(--sunshine-soft) px-3 py-1 text-[11px] font-medium text-foreground/70 group-hover:bg-background">
                              WebSocket
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            A self-hosted Docker fleet-management platform for
                            remote container/image lifecycle management and
                            monitoring across multiple servers.
                          </p>
                        </div>
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-12">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </a>
                    </div>
                    <div
                      className="absolute inset-x-0 top-0 origin-bottom stacked-card"
                      style={{
                        zIndex: "2",
                        marginTop: "60px",
                      }}
                    >
                      <a
                        href="/project/project-vault"
                        className="group flex items-center gap-4 rounded-3xl border border-border/60 bg-white p-4 shadow-lift transition-colors sm:gap-6 sm:p-6 hover:bg-[var(--sunshine-soft)]"
                      >
                        <div
                          className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32"
                          style={{
                            background:
                              "linear-gradient(135deg, #E4D8FA 0%, #FFF6D6 100%)",
                          }}
                        >
                          {/* <Image
                            src="/__l5e/assets-v1/a77afe20-6b67-4428-aa62-1e5bffcf6a26/rogue-sailor-hero.png"
                            alt="Rogue Sailor Rum"
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          /> */}
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/50">
                            Project Management
                          </span>
                          <h3 className="font-display mt-1 text-lg font-semibold leading-tight sm:text-xl">
                            Project Vault
                          </h3>
                          <span className="mt-2 inline-block rounded-full bg-[var(--sunshine-soft)] px-3 py-1 text-[11px] font-medium text-foreground/70">
                            In progress
                          </span>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            A local-first project management app exploring
                            desktop applications, offline data, and team
                            collaboration.
                          </p>
                        </div>
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-12">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </a>
                    </div>
                    {/*
                    <div
                      className="absolute inset-x-0 top-0 origin-bottom stacked-card"
                      style={{
                        zIndex: "3",
                        marginTop: "120px",
                      }}
                    >
                      <a
                        href="/project/smoothie-cards"
                        className="group flex items-center gap-4 rounded-3xl border border-border/60 bg-white p-4 shadow-lift transition-colors sm:gap-6 sm:p-6 hover:bg-[var(--sunshine-soft)]"
                      >
                        <div
                          className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32"
                          style={{
                            background:
                              "linear-gradient(135deg, #FFF6D6 0%, #F6D65A 100%)",
                          }}
                        >
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/50">
                            Print design
                          </span>
                          <h3 className="font-display mt-1 text-lg font-semibold leading-tight sm:text-xl">
                            Darry's smoothie cards
                          </h3>
                          <span className="mt-2 inline-block rounded-full bg-[var(--sunshine-soft)] px-3 py-1 text-[11px] font-medium text-foreground/70">
                            2 hours
                          </span>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            Small smoothie cards with printed name and
                            ingredients, unlike a boring menu that can be
                            skipped through.
                          </p>
                        </div>
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-12">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </a>
                    </div>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StackedCardsAnimation>
  );
}
