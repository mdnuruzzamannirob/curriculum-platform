import { Course } from "@/types";
import { l0Level } from "./l0-entry";
import { l1Level } from "./l1-core";
import { l2Level } from "./l2-intermediate";
import { l3Level } from "./l3-advanced";
import { l4Level } from "./l4-professional";
import { l5Level } from "./l5-mastery";

export const postgresqlCourse: Course = {
  id: "postgresql",
  title: "PostgreSQL",
  description:
    "Master PostgreSQL from SQL fundamentals to window functions, indexing, partitioning, MVCC internals, streaming replication, and production-scale system design.",
  icon: "bookOpen",
  color: "#336791",
  levels: [l0Level, l1Level, l2Level, l3Level, l4Level, l5Level],
};
