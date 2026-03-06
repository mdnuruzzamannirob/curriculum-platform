"use client";

import { useState } from "react";
import { Topic, SubtopicStatus } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcTopicProgress, getSubtopicStatus } from "@/utils/progress";

interface TopicAccordionProps {
  topics: Topic[];
  courseId: string;
  levelId: string;
  moduleId: string;
  moduleColor?: string;
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
}: TopicAccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());
  const { progress, updateSubtopicStatus } = useProgress();

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
      <p className="py-8 text-center text-sm text-[#555]">
        No topics in this module yet.
      </p>
    );
  }

  return (
    <div className="space-y-2">
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
            className="rounded-lg border border-[#2a2a2a] bg-[#111]"
          >
            {/* Topic header */}
            <button
              type="button"
              onClick={() => toggle(topic.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-[#161616]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#1e1e1e] text-xs font-bold text-[#888]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-[#e5e5e5]">
                  {topic.title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#666]">
                  {tp.completed > 0 && (
                    <span className="text-emerald-400 mr-1">
                      {tp.completed} done
                    </span>
                  )}
                  {tp.total} items
                </span>
                <svg
                  className={`h-4 w-4 text-[#555] transition-transform ${isOpen ? "rotate-180" : ""}`}
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
              <div className="border-t border-[#1e1e1e] px-5 py-2">
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

                    return (
                      <li key={sub.id}>
                        <button
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
                          className="flex w-full items-center gap-3 rounded px-2 py-2 text-left transition-colors hover:bg-[#1a1a1a] group"
                        >
                          {/* Checkbox visual */}
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                              status === "completed"
                                ? "border-emerald-500 bg-emerald-500/20"
                                : status === "in-progress"
                                  ? "border-amber-400 bg-amber-400/10"
                                  : "border-[#444] group-hover:border-[#666]"
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
                            className={`text-sm font-mono ${
                              status === "completed"
                                ? "text-[#666] line-through"
                                : status === "in-progress"
                                  ? "text-amber-200"
                                  : "text-[#ccc]"
                            }`}
                          >
                            {sub.title}
                          </span>
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
