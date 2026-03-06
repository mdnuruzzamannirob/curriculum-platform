"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Check, CheckCheck, ChevronDown, Copy, Dot } from "lucide-react";
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
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { progress, updateSubtopicStatus } = useProgress();
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const resolvedAccent = moduleColor ?? "#888";

  const copyText = useCallback(async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(
        () => setCopiedId((prev) => (prev === id ? null : prev)),
        1500,
      );
    } catch {
      // Clipboard API not available
    }
  }, []);

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
            <div className="flex items-center group/topic hover:bg-surface-hover">
              <button
                type="button"
                onClick={() => toggle(topic.id)}
                className="flex flex-1 items-center justify-between px-5 py-4 text-left min-w-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold accent-bg-soft-strong accent-text">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold text-text-primary truncate">
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
                  <ChevronDown
                    className={`h-4 w-4 text-text-faint ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2.2}
                  />
                </div>
              </button>
              <button
                type="button"
                onClick={() => copyText(topic.title, `topic-${topic.id}`)}
                className="mr-3 shrink-0 rounded p-1.5 opacity-0 group-hover/topic:opacity-100 text-text-faint hover:text-text-primary hover:bg-surface-emphasis"
                title="Copy topic title"
              >
                {copiedId === `topic-${topic.id}` ? (
                  <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

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
                      <li key={sub.id} className="group/sub">
                        <div
                          ref={isHighlighted ? highlightRef : null}
                          className={`flex items-center gap-1 rounded-lg px-3 py-2 ${
                            isHighlighted
                              ? "accent-bg-soft accent-outline"
                              : "hover:bg-surface-emphasis"
                          }`}
                        >
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
                            className="flex flex-1 items-center gap-3 text-left min-w-0"
                          >
                            {/* Checkbox visual */}
                            <span
                              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                status === "completed"
                                  ? "border-emerald-500 bg-emerald-500/20"
                                  : status === "in-progress"
                                    ? "border-amber-400 bg-amber-400/10"
                                    : "border-border-strong group-hover/sub:border-text-subtle"
                              }`}
                            >
                              {status === "completed" && (
                                <Check
                                  className="h-3 w-3 text-emerald-400"
                                  strokeWidth={3}
                                />
                              )}
                              {status === "in-progress" && (
                                <Dot
                                  className="h-4 w-4 text-amber-400"
                                  strokeWidth={3}
                                />
                              )}
                            </span>

                            <span
                              className={`text-sm truncate ${
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
                              <span className="ml-auto shrink-0 text-[10px] font-bold uppercase tracking-wider accent-text">
                                ← here
                              </span>
                            )}
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              copyText(sub.title, `sub-${topic.id}-${sub.id}`)
                            }
                            className="shrink-0 rounded p-1 opacity-0 group-hover/sub:opacity-100 text-text-faint hover:text-text-primary"
                            title="Copy"
                          >
                            {copiedId === `sub-${topic.id}-${sub.id}` ? (
                              <CheckCheck className="h-3.5 w-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                        </div>
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
