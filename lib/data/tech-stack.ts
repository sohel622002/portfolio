export type TechStackIcon = {
  id: string;
  label: string;
  /** Path to SVG in /public/tech-stack/ */
  src: string;
  padding?: "p-4" | "p-7";
};

export type TechStackRow = {
  id: string;
  icons: TechStackIcon[];
};

/**
 * Add or replace SVGs in /public/tech-stack/, then update `src` here.
 * Duplicate icons in a row if you want a longer marquee scroll.
 */
export const techStackRows: TechStackRow[] = [
  {
    id: "frontend-frameworks",
    icons: [
      {
        id: "javascript",
        label: "JavaScript",
        src: "/tech-stack/javascript.svg",
      },
      {
        id: "typescript",
        label: "TypeScript",
        src: "/tech-stack/typescript.svg",
      },
      { id: "react", label: "React", src: "/tech-stack/react.svg" },
      { id: "nextjs", label: "Next.js", src: "/tech-stack/nextjs.svg" },
      { id: "angular", label: "Angular", src: "/tech-stack/angular.svg" },
      { id: "ionic", label: "Ionic", src: "/tech-stack/ionic.svg" },
      { id: "html5", label: "HTML5", src: "/tech-stack/html5.svg" },
      { id: "css3", label: "CSS3", src: "/tech-stack/css3.svg" },
    ],
  },
  {
    id: "backend-data",
    icons: [
      { id: "nodejs", label: "Node.js", src: "/tech-stack/nodejs.svg" },
      {
        id: "express",
        label: "Express.js",
        src: "/tech-stack/express.svg",
        padding: "p-4",
      },
      { id: "nestjs", label: "NestJS", src: "/tech-stack/nestjs.svg" },
      { id: "rxjs", label: "RxJS", src: "/tech-stack/rxjs.svg" },
      {
        id: "postgresql",
        label: "PostgreSQL",
        src: "/tech-stack/postgresql.svg",
      },
      { id: "sqlite", label: "SQLite", src: "/tech-stack/sqlite.svg" },
      { id: "prisma", label: "Prisma", src: "/tech-stack/prisma.svg" },
      { id: "supabase", label: "Supabase", src: "/tech-stack/supabase.svg" },
    ],
  },
  {
    id: "tools-realtime",
    icons: [
      { id: "docker", label: "Docker", src: "/tech-stack/docker.svg" },
      { id: "electron", label: "Electron", src: "/tech-stack/electron.svg" },
      {
        id: "socketio",
        label: "Socket.IO",
        src: "/tech-stack/socketio.svg",
      },
      {
        id: "tanstack-query",
        label: "TanStack Query",
        src: "/tech-stack/tanstack-query.svg",
      },
      {
        id: "tailwindcss",
        label: "Tailwind CSS",
        src: "/tech-stack/tailwindcss.svg",
      },
      { id: "vite", label: "Vite", src: "/tech-stack/vite.svg" },
      { id: "zod", label: "Zod", src: "/tech-stack/zod.svg" },
      { id: "git", label: "Git", src: "/tech-stack/git.svg" },
    ],
  },
];
