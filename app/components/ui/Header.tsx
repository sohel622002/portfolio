import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./NavLink";

export default function Header() {
  return (
    <header className="animate-header pointer-events-none fixed left-0 right-0 top-0 z-50 w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <div className="pointer-events-auto rounded-full border border-border/70 bg-white/70 px-4 py-2 shadow-soft backdrop-blur-md">
          <Link
            className="font-display text-xl font-semibold tracking-tight active"
            href="/#top"
            data-status="active"
            aria-current="page"
          >
            Shaikh<span className="text-(--lavender)">.</span>
          </Link>
        </div>
        <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-border/70 bg-white/70 p-1.5 shadow-soft backdrop-blur-md">
          <NavLink link="#work" linkName="Work" />
          <NavLink link="#experience" linkName="Experience" />
          <a
            href="/sohel-resume.pdf"
            download="sohel-resume.pdf"
            className="group inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Resume
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
