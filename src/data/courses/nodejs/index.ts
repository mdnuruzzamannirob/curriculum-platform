import { Course } from "@/types";
import { l0Level } from "./l0-entry";
import { l1Level } from "./l1-core";
import { l2Level } from "./l2-intermediate";
import { l3Level } from "./l3-advanced";
import { l4Level } from "./l4-professional";
import { l5Level } from "./l5-mastery";

export const nodejsCourse: Course = {
  id: "nodejs",
  title: "Node.js",
  description:
    "Master Node.js from core runtime fundamentals to production-scale internals, microservices, and performance engineering.",
  icon: "route",
  color: "#68a063",
  levels: [l0Level, l1Level, l2Level, l3Level, l4Level, l5Level],
};
