"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Course, Module } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import {
  calcModuleProgress,
  calcTopicProgress,
  getSubtopicStatus,
} from "@/utils/progress";
import { AppIcon } from "@/lib/icons";
import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  course: Course;
  levelId: string;
  module: Module;
}

export default function ModuleCard({
  course,
  levelId,
  module,
}: ModuleCardProps) {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const { progress, updateSubtopicStatus } = useProgress();

  const moduleStats = calcModuleProgress(progress, course.id, levelId, module);

  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) next.delete(topicId);
      else next.add(topicId);
      return next;
    });
  };

  return (
    <div
      data-accent={module.color}
      className="overflow-hidden rounded-2xl border border-border bg-card"
    >
      {/* Module header */}
      <div className="flex items-center gap-3 border-b border-border p-4">
        <span
          data-accent={module.color}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border accent-bg-soft accent-text"
        >
          <AppIcon
            name={module.icon ?? "braces"}
            className="h-4 w-4"
            strokeWidth={2.2}
          />
        </span>

        <div className="min-w-0 flex-1">
          <p className="font-bold text-card-foreground">{module.title}</p>
          {module.description && (
            <p className="text-xs text-subtle">{module.description}</p>
          )}
        </div>

        <div className="shrink-0 text-right">
          <p className="text-sm font-semibold text-card-foreground">
            {moduleStats.percentage}%
          </p>
          <p className="text-xs text-subtle">
            {moduleStats.completed}/{moduleStats.total}
          </p>
        </div>
      </div>

      {/* Module progress bar */}
      <div className="border-b border-border px-4 py-2">
        <ProgressBar
          percentage={moduleStats.percentage}
          size="sm"
          color={module.color}
          showLabel={false}
        />
      </div>

      {/* Topics list */}
      <div className="divide-y divide-border">
        {module.topics.map((topic) => {
          const topicStats = calcTopicProgress(
            progress,
            course.id,
            levelId,
            module.id,
            topic,
          );
          const isExpanded = expandedTopics.has(topic.id);
          const allDone = topicStats.percentage === 100;

          return (
            <div key={topic.id}>
              {/* Topic row */}
              <button
                onClick={() => toggleTopic(topic.id)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-card-hover"
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-disabled transition-transform duration-200",
                    isExpanded && "rotate-180",
                  )}
                />
                <span
                  className={cn(
                    "flex-1 text-sm font-medium",
                    allDone
                      ? "text-subtle line-through"
                      : "text-card-foreground",
                  )}
                >
                  {topic.title}
                </span>
                <span className="shrink-0 text-xs text-subtle">
                  {topicStats.completed}/{topicStats.total}
                </span>
              </button>

              {/* Subtopics */}
              {isExpanded && (
                <div className="space-y-0.5 px-4 pb-3 pt-1">
                  {topic.subtopics.map((subtopic) => {
                    const status = getSubtopicStatus(
                      progress,
                      course.id,
                      levelId,
                      module.id,
                      topic.id,
                      subtopic.id,
                    );
                    const isCompleted = status === "completed";

                    return (
                      <button
                        key={subtopic.id}
                        onClick={() =>
                          updateSubtopicStatus(
                            course.id,
                            levelId,
                            module.id,
                            topic.id,
                            subtopic.id,
                            isCompleted ? "not-started" : "completed",
                          )
                        }
                        className="group flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-card-hover"
                      >
                        {/* Checkbox */}
                        <span
                          className={cn(
                            "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all",
                            isCompleted
                              ? "border-foreground bg-foreground text-background"
                              : "border-border group-hover:border-border-strong",
                          )}
                        >
                          {isCompleted && (
                            <Check className="h-2.5 w-2.5" strokeWidth={3} />
                          )}
                        </span>

                        <span
                          className={cn(
                            "text-sm",
                            isCompleted
                              ? "text-subtle line-through opacity-60"
                              : "text-card-foreground",
                          )}
                        >
                          {subtopic.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
