export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string[];
  image: string;
  gradient: string;
  tags: string[];
  year: string;
  role: string;
  duration: string;
  links?: {
    live?: string;
    github?: string;
  };
  highlights: string[];
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "docopilot",
    title: "DocoPilot",
    category: "Docker Fleet Management",
    tagline: "A self-hosted Docker fleet-management platform",
    description:
      "DocoPilot is a full-stack, self-hosted Docker fleet-management platform enabling remote container and image lifecycle management, plus monitoring across multiple servers from a single web dashboard.",
    longDescription: [
      "DocoPilot is a full-stack, self-hosted Docker fleet-management platform enabling remote container/image lifecycle management (create, inspect, logs, remove) and monitoring across multiple servers from a single web dashboard.",
      "It uses a secure agent-server-client architecture built on outbound-only WebSocket connections with HMAC-signed handshakes and per-server credential pairs, eliminating the need to expose Docker sockets or open inbound ports on managed hosts.",
      "Production-readiness was built in from the ground up: structured logging, a persisted audit trail, automated tests, and CI/CD pipelines for multi-service builds and container image publishing.",
    ],
    image: "/social-media-clone.webp",
    gradient: "linear-gradient(135deg, #FDF3B8 0%, #F6D65A 100%)",
    tags: ["React", "WebSocket", "Supabase", "Docker", "Node.js", "Express"],
    year: "2025",
    role: "Full-stack Developer",
    duration: "Ongoing",
    links: {
      live: "https://doco-pilot.vercel.app/",
      github: "https://github.com/sohel622002/doco-pilot",
    },
    highlights: [
      "Secure agent-server-client architecture over outbound-only WebSockets with HMAC-signed handshakes",
      "Webhook-based alerting (crash detection, CPU threshold monitoring) and transactional email via Resend",
      "JWT auth, AES-256-GCM encrypted credential storage, and Zod-validated APIs",
      "Responsive React 19 dashboard (Vite, Tailwind, Zustand, TanStack Query) with live resource-usage charts",
    ],
  },
  {
    slug: "sql-inspector",
    title: "SQL Inspector",
    category: "Open-source Dev Tool",
    tagline: "Browse live SQLite data from mobile & hybrid apps",
    description:
      "An open-source npm dev tool that lets developers browse live SQLite data from mobile and hybrid apps in a browser — without pulling .db files or using platform-specific IDE inspectors.",
    longDescription: [
      "SQL Inspector is an open-source npm dev tool that lets developers browse live SQLite data from mobile and hybrid apps in a browser — without pulling .db files or using platform-specific IDE inspectors.",
      "It's built around a 3-tier architecture (vanilla browser UI, a Node.js relay server, and an in-app WebSocket client) with a pluggable DataSource adapter pattern, so any embedded database can plug in via two methods: listTables() and getTableData().",
      "The self-hosted browser UI supports table search, cross-column row filtering, pagination, JSON cell inspection, and a light/dark theme, relayed over WebSocket with request/response correlation, timeouts, and auto-reconnect.",
    ],
    image: "/finance-dashboard.webp",
    gradient: "linear-gradient(135deg, #FDF3B8 0%, #F6D65A 100%)",
    tags: ["Node.js", "WebSockets", "SQLite", "Capacitor"],
    year: "2025",
    role: "Open-source Author",
    duration: "Published",
    links: {
      live: "https://www.npmjs.com/package/sql-inspector",
    },
    highlights: [
      "Non-invasive integration: dev-only bootstrap code stripped from production builds via dynamic imports",
      "Pluggable DataSource adapter pattern so any embedded database can plug in",
      "Self-hosted browser UI with search, filtering, pagination, and JSON cell inspection",
      "26 automated tests covering the relay layer, WebSocket client, and full end-to-end server",
    ],
  },
  {
    slug: "project-vault",
    title: "Project Vault",
    category: "Project Management",
    tagline: "A local-first project management desktop app",
    description:
      "Project Vault is a full-stack desktop project management application built with Electron, enabling teams to manage projects locally without relying on cloud-hosted project data.",
    longDescription: [
      "Project Vault is a full-stack desktop project management application built with Electron, enabling teams to manage projects locally without relying on cloud-hosted project data.",
      "It uses a dual-database architecture — Supabase (PostgreSQL) for cloud authentication and local PostgreSQL for project, task, and user data via Prisma ORM — with an admin-client networking model where an admin hosts the local database and teammates connect over LAN using Bonjour (mDNS) service discovery.",
      "The Kanban-style board supports drag-and-drop task management, custom stages, assignees, priorities, and due dates, with real-time updates across clients via Socket.IO.",
    ],
    image: "/project-management-dashboard.webp",
    gradient: "linear-gradient(135deg, #FDF3B8 0%, #F6D65A 100%)",
    tags: ["Electron", "React", "Node.js", "PostgreSQL"],
    year: "2025",
    role: "Full-stack Developer",
    duration: "In progress",
    links: {},
    highlights: [
      "Dual-database architecture: Supabase for auth, local PostgreSQL via Prisma for project data",
      "LAN-based team collaboration via Bonjour (mDNS) service discovery and manual IP configuration",
      "First-time setup flow to download and configure local PostgreSQL binaries for offline use",
      "Packaged for Windows with Electron Builder and a standalone backend executable",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}
