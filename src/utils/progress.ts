import {
  Course,
  Level,
  Module,
  Topic,
  ProgressState,
  ProgressStats,
  SubtopicStatus,
} from "@/types";

const STORAGE_KEY = "learning-platform-progress";

// ── localStorage helpers ──────────────────────────────────

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveProgress(state: ProgressState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ── Status readers ────────────────────────────────────────

export function getSubtopicStatus(
  progress: ProgressState,
  courseId: string,
  levelId: string,
  moduleId: string,
  topicId: string,
  subtopicId: string,
): SubtopicStatus {
  return (
    progress[courseId]?.[levelId]?.[moduleId]?.[topicId]?.[subtopicId] ??
    "not-started"
  );
}

// ── Progress calculators ──────────────────────────────────

function statsFromStatuses(statuses: SubtopicStatus[]): ProgressStats {
  const total = statuses.length;
  if (total === 0)
    return { completed: 0, inProgress: 0, total: 0, percentage: 0 };
  const completed = statuses.filter((s) => s === "completed").length;
  const inProgress = statuses.filter((s) => s === "in-progress").length;
  return {
    completed,
    inProgress,
    total,
    percentage: Math.round((completed / total) * 100),
  };
}

export function calcTopicProgress(
  progress: ProgressState,
  courseId: string,
  levelId: string,
  moduleId: string,
  topic: Topic,
): ProgressStats {
  const statuses = topic.subtopics.map((s) =>
    getSubtopicStatus(progress, courseId, levelId, moduleId, topic.id, s.id),
  );
  return statsFromStatuses(statuses);
}

export function calcModuleProgress(
  progress: ProgressState,
  courseId: string,
  levelId: string,
  mod: Module,
): ProgressStats {
  const statuses: SubtopicStatus[] = [];
  for (const topic of mod.topics)
    for (const sub of topic.subtopics)
      statuses.push(
        getSubtopicStatus(
          progress,
          courseId,
          levelId,
          mod.id,
          topic.id,
          sub.id,
        ),
      );
  return statsFromStatuses(statuses);
}

export function calcLevelProgress(
  progress: ProgressState,
  courseId: string,
  level: Level,
): ProgressStats {
  const statuses: SubtopicStatus[] = [];
  for (const mod of level.modules)
    for (const topic of mod.topics)
      for (const sub of topic.subtopics)
        statuses.push(
          getSubtopicStatus(
            progress,
            courseId,
            level.id,
            mod.id,
            topic.id,
            sub.id,
          ),
        );
  return statsFromStatuses(statuses);
}

export function calcCourseProgress(
  progress: ProgressState,
  course: Course,
): ProgressStats {
  const statuses: SubtopicStatus[] = [];
  for (const level of course.levels)
    for (const mod of level.modules)
      for (const topic of mod.topics)
        for (const sub of topic.subtopics)
          statuses.push(
            getSubtopicStatus(
              progress,
              course.id,
              level.id,
              mod.id,
              topic.id,
              sub.id,
            ),
          );
  return statsFromStatuses(statuses);
}
