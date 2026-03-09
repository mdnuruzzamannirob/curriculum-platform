"use client";

import { Course, Level } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcLevelProgress } from "@/utils/progress";
import ProgressBar from "@/components/ProgressBar";
import { Skeleton } from "@/components/ui/skeleton";

interface LevelProgressHeaderProps {
  course: Course;
  level: Level;
  levelIndex: number;
}

export default function LevelProgressHeader({
  course,
  level,
  levelIndex,
}: LevelProgressHeaderProps) {
  const { progress, isLoaded } = useProgress();
  const stats = calcLevelProgress(progress, course.id, level);

  const totalSubtopics = level.modules.reduce(
    (sum, mod) =>
      sum + mod.topics.reduce((t, topic) => t + topic.subtopics.length, 0),
    0,
  );
  const totalTopics = level.modules.reduce(
    (sum, mod) => sum + mod.topics.length,
    0,
  );

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:p-8">
      {/* Level identity */}
      <div className="flex items-start gap-4">
        <span
          data-accent={level.color}
          style={{
            backgroundColor: "rgb(var(--accent-rgb) / 0.1)",
            color: "var(--accent)",
          }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border text-sm font-black"
        >
          L{levelIndex}
        </span>
        <div>
          <h1 className="text-2xl font-black text-foreground sm:text-3xl">
            {level.title}
          </h1>
          <p className="mt-1 text-sm text-subtle">{level.description}</p>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap gap-4 text-sm text-subtle">
        <span>{level.modules.length} modules</span>
        <span>{totalTopics} topics</span>
        <span>{totalSubtopics} subtopics</span>
      </div>

      {/* Progress */}
      {isLoaded ? (
        <div className="space-y-1.5">
          <ProgressBar
            percentage={stats.percentage}
            size="md"
            color={level.color}
          />
          <p className="text-xs text-subtle">
            {stats.completed} of {totalSubtopics} subtopics completed
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          <Skeleton className="h-2.5 w-full rounded-full" />
          <Skeleton className="h-3.5 w-40 rounded-full" />
        </div>
      )}
    </div>
  );
}
