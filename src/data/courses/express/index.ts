import { Course } from "@/types";
import { l0Level } from "./l0-entry";
import { l1Level } from "./l1-core";
import { l2Level } from "./l2-intermediate";
import { l3Level } from "./l3-advanced";
import { l4Level } from "./l4-professional";
import { l5Level } from "./l5-mastery";

export const expressCourse: Course = {
  id: "express",
  title: "Express.js",
  description:
    "Master Express.js from zero-to-hero — routing, middleware, REST APIs, authentication, production deployment, microservices, and system design.",
  icon: "layers",
  color: "#e67e22",
  levels: [l0Level, l1Level, l2Level, l3Level, l4Level, l5Level],
};
