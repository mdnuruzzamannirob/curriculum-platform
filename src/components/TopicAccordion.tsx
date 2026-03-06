"use client";

import { useState, useEffect, useRef } from "react";
import { Topic, SubtopicStatus } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcTopicProgress, getSubtopicStatus } from "@/utils/progress";

interface TopicAccordionProps {
  topics: Topic[];
  courseId: string;
  levelId: string;
  moduleId: string;
  moduleColor?: string;
  /** Auto-open this topic (from search navigation) */
  openTopicId?: string;
  /** Highlight this subtopic (from search navigation) */
  highlightSubtopicId?: string;
}

const NEXT_STATUS: Record<SubtopicStatus, SubtopicStatus> = {
  "not-started": "in-progress",
  "in-progress": "completed",
  completed: "not-started",
};

export default function TopicAccordion({
  topics,
  courseId,
  levelId,
  moduleId,
  moduleColor,
  openTopicId,
  highlightSubtopicId,
}: TopicAccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(openTopicId ? [openTopicId] : []),
  );
  const { progress, updateSubtopicStatus } = useProgress();
  const highlightRef = useRef<HTMLButtonElement | null>(null);
  const resolvedAccent = moduleColor ?? "#888";

  // Scroll to highlighted item once the accordion section is visible.
  useEffect(() => {
    if (!highlightSubtopicId) return;
    const timer = setTimeout(() => {
      highlightRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);
    return () => clearTimeout(timer);
  }, [highlightSubtopicId, openTopicId]);

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  if (topics.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-text-faint">
        No topics in this module yet.
      </p>
    );
  }

  return (
    <div data-accent={resolvedAccent} className="space-y-2">
      {topics.map((topic, idx) => {
        const isOpen = openIds.has(topic.id);
        const tp = calcTopicProgress(
          progress,
          courseId,
          levelId,
          moduleId,
          topic,
        );

        return (
          <div
            key={topic.id}
            className="rounded-xl border border-border-default bg-surface overflow-hidden"
          >
            {/* Topic header */}
            <button
              type="button"
              onClick={() => toggle(topic.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-surface-hover"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold accent-bg-soft-strong accent-text">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-text-primary">
                  {topic.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-2">
                <span className="text-xs text-text-subtle">
                  {tp.completed > 0 && (
                    <span className="text-emerald-400 mr-1">
                      {tp.completed}✓
                    </span>
                  )}
                  {tp.total} items
                </span>
                <svg
                  className={`h-4 w-4 text-text-faint transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            {/* Subtopics list */}
            {isOpen && (
              <div className="border-t border-border-default px-4 pb-3 pt-2">
                <ul className="space-y-0.5">
                  {topic.subtopics.map((sub) => {
                    const status = getSubtopicStatus(
                      progress,
                      courseId,
                      levelId,
                      moduleId,
                      topic.id,
                      sub.id,
                    );
                    const isHighlighted = sub.id === highlightSubtopicId;

                    return (
                      <li key={sub.id}>
                        <button
                          ref={isHighlighted ? highlightRef : null}
                          type="button"
                          onClick={() =>
                            updateSubtopicStatus(
                              courseId,
                              levelId,
                              moduleId,
                              topic.id,
                              sub.id,
                              NEXT_STATUS[status],
                            )
                          }
                          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-all group ${
                            isHighlighted
                              ? "accent-bg-soft accent-outline"
                              : "hover:bg-surface-emphasis"
                          }`}
                        >
                          {/* Checkbox visual */}
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                              status === "completed"
                                ? "border-emerald-500 bg-emerald-500/20"
                                : status === "in-progress"
                                  ? "border-amber-400 bg-amber-400/10"
                                  : "border-border-strong group-hover:border-text-subtle"
                            }`}
                          >
                            {status === "completed" && (
                              <svg
                                className="h-3 w-3 text-emerald-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                            {status === "in-progress" && (
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                            )}
                          </span>

                          <span
                            className={`text-sm ${
                              status === "completed"
                                ? "text-text-subtle line-through"
                                : status === "in-progress"
                                  ? "text-amber-300"
                                  : "text-text-secondary"
                            }`}
                          >
                            {sub.title}
                          </span>

                          {isHighlighted && (
                            <span className="ml-auto text-[10px] font-bold uppercase tracking-wider accent-text">
                              ← here
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
