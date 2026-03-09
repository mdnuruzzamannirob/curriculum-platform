import { Course } from "@/types";
import { l0Level } from "./l0-entry";
import { l1Level } from "./l1-core";
import { l2Level } from "./l2-intermediate";
import { l3Level } from "./l3-advanced";
import { l4Level } from "./l4-professional";
import { l5Level } from "./l5-mastery";

export const nestjsCourse: Course = {
  id: "nestjs",
  title: "NestJS",
  description:
    "Master NestJS from zero — modules, DI, pipes, guards, TypeORM, JWT auth, microservices, GraphQL, CQRS, and production-scale enterprise patterns.",
  icon: "sparkles",
  color: "#e0234e",
  levels: [l0Level, l1Level, l2Level, l3Level, l4Level, l5Level],
};
