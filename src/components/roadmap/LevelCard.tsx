"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Course, Level } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcLevelProgress } from "@/utils/progress";
import ProgressBar from "@/components/ProgressBar";
import { Skeleton } from "@/components/ui/skeleton";

interface LevelCardProps {
  course: Course;
  level: Level;
  levelIndex: number;
}

export default function LevelCard({
  course,
  level,
  levelIndex,
}: LevelCardProps) {
  const { progress, isLoaded } = useProgress();
  const stats = calcLevelProgress(progress, course.id, level);

  const totalTopics = level.modules.reduce(
    (sum, mod) => sum + mod.topics.length,
    0,
  );
  const totalSubtopics = level.modules.reduce(
    (sum, mod) =>
      sum + mod.topics.reduce((t, topic) => t + topic.subtopics.length, 0),
    0,
  );

  return (
    <Link
      href={`/roadmap/${course.id}/${level.id}`}
      className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-card-hover"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            data-accent={level.color}
            style={{
              backgroundColor: "rgb(var(--accent-rgb) / 0.1)",
              color: "var(--accent)",
            }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border text-xs font-black"
          >
            L{levelIndex}
          </span>
          <div>
            <p className="font-bold text-card-foreground">{level.title}</p>
            <p className="text-xs text-subtle">{level.description}</p>
          </div>
        </div>
        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-disabled transition-transform group-hover:translate-x-0.5 group-hover:text-subtle" />
      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 text-xs text-subtle">
        <span>{level.modules.length} modules</span>
        <span className="text-disabled">·</span>
        <span>{totalTopics} topics</span>
        <span className="text-disabled">·</span>
        <span>{totalSubtopics} subtopics</span>
      </div>

      {/* Progress */}
      {isLoaded ? (
        <ProgressBar
          percentage={stats.percentage}
          size="sm"
          color={level.color}
        />
      ) : (
        <Skeleton className="h-1.5 w-full rounded-full" />
      )}
    </Link>
  );
}
