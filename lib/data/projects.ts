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
    slug: "un-paused",
    title: "Zyklo",
    category: "Social Media Platform",
    tagline: "A social media platform",
    description:
      "Zyklo was one of the projects where I explored building a complete frontend experience with React. I worked on the interface, navigation, application state, and Firebase integration to bring the product together.",
    longDescription: [
      "Zyklo was one of the projects where I explored building a complete frontend experience with React. I worked on the interface, navigation, application state, and Firebase integration to bring the product together.",
      "The goal was to design a social feed that felt fast and familiar, while keeping the codebase simple enough to extend with new features like stories, comments, and real-time notifications.",
    ],
    image: "/social-media-clone.webp",
    gradient: "linear-gradient(135deg, #FDF3B8 0%, #F6D65A 100%)",
    tags: ["React", "Firebase"],
    year: "2024",
    role: "Frontend Developer",
    duration: "6 weeks",
    links: {},
    highlights: [
      "Built a responsive feed, profile, and messaging interface from scratch",
      "Integrated Firebase Auth, Firestore, and Storage for a real-time backend",
      "Managed complex application state across nested routes and modals",
    ],
  },
  {
    slug: "spicey-guava",
    title: "Origin Financial",
    category: "Finance Tracker",
    tagline: "A finance tracker",
    description:
      "A project focused on creating a clean, responsive interface while experimenting with modern Next.js patterns. I worked with TypeScript, Tailwind CSS, and Framer Motion to bring the interface and interactions together.",
    longDescription: [
      "A project focused on creating a clean, responsive interface while experimenting with modern Next.js patterns. I worked with TypeScript, Tailwind CSS, and Framer Motion to bring the interface and interactions together.",
      "It gave me the chance to dig into data-heavy dashboard layouts — charts, filters, and transaction lists — while keeping the experience light and legible.",
    ],
    image: "/finance-dashboard.webp",
    gradient: "linear-gradient(135deg, #FDF3B8 0%, #F6D65A 100%)",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2024",
    role: "Frontend Developer",
    duration: "4 weeks",
    links: {},
    highlights: [
      "Designed and built a dashboard with charts, budgets, and transaction views",
      "Used the Next.js App Router with server components for data-heavy pages",
      "Animated key interactions with Framer Motion for a polished feel",
    ],
  },
  {
    slug: "angry-toast",
    title: "Project Vault",
    category: "Project Management",
    tagline: "An offline project management.",
    description:
      "Project Vault is one of my deeper engineering projects, combining an Electron desktop application with React, Node.js, and PostgreSQL. It explores local-first data, team collaboration, authentication, network discovery, and running a complete application without relying entirely on the cloud.",
    longDescription: [
      "Project Vault is one of my deeper engineering projects, combining an Electron desktop application with React, Node.js, and PostgreSQL. It explores local-first data, team collaboration, authentication, network discovery, and running a complete application without relying entirely on the cloud.",
      "The app runs its own local server, discovers teammates on the same network, and syncs project data without a mandatory cloud dependency — an interesting constraint that shaped most of the architecture decisions.",
    ],
    image: "/project-management-dashboard.webp",
    gradient: "linear-gradient(135deg, #FDF3B8 0%, #F6D65A 100%)",
    tags: ["Electron", "React", "Node.js", "PostgreSQL"],
    year: "2025",
    role: "Full-stack Developer",
    duration: "In progress",
    links: {},
    highlights: [
      "Built a local-first desktop app with an embedded Node.js server",
      "Implemented network discovery for LAN-based team collaboration",
      "Designed authentication and data sync without a mandatory cloud backend",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}
