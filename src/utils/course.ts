import { Course } from "@/types";

export function countModules(course: Course): number {
  return course.levels.reduce((sum, level) => sum + level.modules.length, 0);
}

export function countTopics(course: Course): number {
  return course.levels.reduce(
    (sum, level) =>
      sum +
      level.modules.reduce(
        (moduleSum, mod) => moduleSum + mod.topics.length,
        0,
      ),
    0,
  );
}

/** Count every subtopic across the entire course. */
export function countSubtopics(course: Course): number {
  let count = 0;
  for (const level of course.levels)
    for (const mod of level.modules)
      for (const topic of mod.topics) count += topic.subtopics.length;
  return count;
}
