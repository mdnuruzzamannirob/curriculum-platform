import { Course } from "@/types";
import { l0Level } from "./l0-entry";
import { l1Level } from "./l1-core";
import { l2Level } from "./l2-intermediate";
import { l3Level } from "./l3-advanced";
import { l4Level } from "./l4-runtime";
import { l5Level } from "./l5-mastery";

export const javascriptCourse: Course = {
  id: "javascript",
  title: "JavaScript",
  description: "Master JavaScript from fundamentals to advanced internals.",
  icon: "{ }",
  color: "#f7df1e",
  levels: [l0Level, l1Level, l2Level, l3Level, l4Level, l5Level],
};

