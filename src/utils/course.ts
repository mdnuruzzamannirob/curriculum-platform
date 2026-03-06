import { Course, Level, Module, Topic, Subtopic } from "@/types";

export function findLevel(course: Course, levelId: string): Level | undefined {
  return course.levels.find((l) => l.id === levelId);
}

export function findModule(level: Level, moduleId: string): Module | undefined {
  return level.modules.find((m) => m.id === moduleId);
}

export function findTopic(mod: Module, topicId: string): Topic | undefined {
  return mod.topics.find((t) => t.id === topicId);
}

export function findSubtopic(
  topic: Topic,
  subtopicId: string,
): Subtopic | undefined {
  return topic.subtopics.find((s) => s.id === subtopicId);
}

/** Count every subtopic across the entire course. */
export function countSubtopics(course: Course): number {
  let count = 0;
  for (const level of course.levels)
    for (const mod of level.modules)
      for (const topic of mod.topics) count += topic.subtopics.length;
  return count;
}
