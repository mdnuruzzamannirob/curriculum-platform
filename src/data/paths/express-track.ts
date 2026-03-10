import type { Path } from "@/types";

export const expressTrackPath: Path = {
  id: "express-track",
  title: "Express.js Backend",
  tagline:
    "Build REST APIs with Node.js and Express — the minimal, classic stack",
  description:
    "Go from JavaScript fundamentals to deploying production-grade Express.js APIs backed by MongoDB and PostgreSQL. Ideal if you prefer a hands-on, unopinionated framework where you control every layer.",
  color: "#e67e22",
  icon: "layers",
  phases: [
    {
      id: "language-foundation",
      title: "Language Foundation",
      description:
        "Master JavaScript and TypeScript before writing a single server line.",
      steps: [
        {
          roadmapId: "javascript",
          note: "The core language — every JS runtime depends on it.",
        },
        {
          roadmapId: "typescript",
          note: "Add static types for safer, self-documenting server code.",
        },
      ],
    },
    {
      id: "server-runtime",
      title: "Server Runtime",
      description:
        "Understand how Node.js powers non-blocking, event-driven servers.",
      steps: [
        {
          roadmapId: "nodejs",
          note: "Event loop, streams, modules — the engine under Express.",
        },
      ],
    },
    {
      id: "web-framework",
      title: "Web Framework",
      description: "Build routing, middleware, and REST APIs with Express.",
      steps: [
        {
          roadmapId: "express",
          note: "Minimal and flexible — learn HTTP primitives hands-on.",
        },
      ],
    },
    {
      id: "database",
      title: "Database",
      description:
        "Persist data with both a document store and a relational engine.",
      steps: [
        {
          roadmapId: "mongodb",
          note: "Schema-flexible document database — fast to prototype with.",
        },
        {
          roadmapId: "postgresql",
          note: "Relational SQL — for structured, transactional workloads.",
        },
      ],
    },
  ],
};
