import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
        404
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        This project doesn’t exist.
      </h1>
      <p className="max-w-md text-muted-foreground">
        The project you’re looking for may have been moved or renamed.
      </p>
      <Link
        href="/#work"
        className="mt-4 inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to work
      </Link>
    </main>
  );
}
