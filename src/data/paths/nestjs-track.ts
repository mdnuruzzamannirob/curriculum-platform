import type { Path } from "@/types";

export const nestjsTrackPath: Path = {
  id: "nestjs-track",
  title: "NestJS Backend",
  tagline:
    "Enterprise-grade APIs with NestJS — structured, scalable, TypeScript-first",
  description:
    "Progress from JavaScript and TypeScript through Node.js into NestJS, then wire up MongoDB and PostgreSQL. Best suited for teams and larger codebases that benefit from opinionated architecture, decorators, and dependency injection.",
  color: "#e0234e",
  icon: "sparkles",
  phases: [
    {
      id: "language-foundation",
      title: "Language Foundation",
      description:
        "TypeScript is first-class in NestJS — nail the language before the framework.",
      steps: [
        {
          roadmapId: "javascript",
          note: "Core language fundamentals every Node runtime relies on.",
        },
        {
          roadmapId: "typescript",
          note: "Decorators, interfaces, generics — NestJS is built entirely in TS.",
        },
      ],
    },
    {
      id: "server-runtime",
      title: "Server Runtime",
      description:
        "NestJS runs on Node.js — understanding the runtime makes you a better NestJS developer.",
      steps: [
        {
          roadmapId: "nodejs",
          note: "Event loop, streams, module system — under the hood of every Nest app.",
        },
      ],
    },
    {
      id: "enterprise-framework",
      title: "Enterprise Framework",
      description:
        "Build feature-rich, modular applications with NestJS dependency injection.",
      steps: [
        {
          roadmapId: "nestjs",
          note: "Modules, controllers, providers, guards, pipes — full framework mastery.",
        },
      ],
    },
    {
      id: "database",
      title: "Database",
      description: "Integrate databases via NestJS ORM/ODM modules.",
      steps: [
        {
          roadmapId: "mongodb",
          note: "Use with Mongoose — flexible schema fits NestJS module pattern nicely.",
        },
        {
          roadmapId: "postgresql",
          note: "Use with TypeORM or Prisma — the default choice for enterprise SQL workloads.",
        },
      ],
    },
  ],
};
