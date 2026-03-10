import type { Path } from "@/types";

export const backendPath: Path = {
  id: "backend",
  title: "Backend Developer",
  tagline: "From JavaScript fundamentals to production-ready APIs and databases",
  description:
    "A curated, step-by-step learning path for becoming a professional backend developer. Follow the phases in order — each one builds on the previous so you always know what to learn next.",
  color: "#6366f1",
  icon: "workflow",
  phases: [
    {
      id: "language-foundation",
      title: "Language Foundation",
      description:
        "Master the language before touching the server. Both roadmaps are essential.",
      steps: [
        {
          roadmapId: "javascript",
          note: "The core language — every JS runtime runs on it.",
        },
        {
          roadmapId: "typescript",
          note: "Static types for safer, more maintainable server code.",
        },
      ],
    },
    {
      id: "server-runtime",
      title: "Server Runtime",
      description:
        "Learn how JavaScript executes outside the browser and how the event loop powers scalable servers.",
      steps: [
        {
          roadmapId: "nodejs",
          note: "Event-driven, non-blocking I/O — the backbone of JS backends.",
        },
      ],
    },
    {
      id: "api-framework",
      title: "API Framework",
      description:
        "Build REST APIs and web servers. Pick the framework that fits your style.",
      isAlternative: true,
      steps: [
        {
          roadmapId: "express",
          note: "Minimal and flexible — great for learning HTTP primitives first.",
        },
        {
          roadmapId: "nestjs",
          note: "Structured, decorator-based — scales well in larger teams.",
          isOptional: true,
        },
      ],
    },
    {
      id: "database",
      title: "Database",
      description:
        "Store and query data. Learn both SQL and NoSQL to handle any requirement.",
      steps: [
        {
          roadmapId: "mongodb",
          note: "Document store — flexible schema, ideal for rapid development.",
        },
        {
          roadmapId: "postgresql",
          note: "Relational SQL — the gold standard for structured, transactional data.",
        },
      ],
    },
  ],
};
