"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, Copy } from "lucide-react";
import { Course, Module, SubtopicStatus } from "@/types";
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

/** Cycle: not-started → in-progress → completed → not-started */
function nextStatus(current: SubtopicStatus): SubtopicStatus {
  if (current === "not-started") return "in-progress";
  if (current === "in-progress") return "completed";
  return "not-started";
}

function moduleAnchorId(moduleId: string): string {
  return `module-${moduleId}`;
}

function topicAnchorId(moduleId: string, topicId: string): string {
  return `topic-${moduleId}-${topicId}`;
}

function subtopicAnchorId(
  moduleId: string,
  topicId: string,
  subtopicId: string,
): string {
  return `subtopic-${moduleId}-${topicId}-${subtopicId}`;
}

function StatusIcon({ status }: { status: SubtopicStatus }) {
  if (status === "completed")
    return (
      <Check className="h-2.5 w-2.5" strokeWidth={3} aria-label="Completed" />
    );
  if (status === "in-progress")
    return (
      <span
        className="block h-1.5 w-1.5 rounded-full bg-current"
        aria-label="In progress"
      />
    );
  return null;
}

function CheckboxButton({
  status,
  onClick,
}: {
  status: SubtopicStatus;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      title={
        status === "not-started"
          ? "Mark in-progress"
          : status === "in-progress"
            ? "Mark completed"
            : "Reset"
      }
      className={cn(
        "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
        status === "completed"
          ? "border-foreground bg-foreground text-background"
          : status === "in-progress"
            ? "border-amber-400 bg-amber-400/10 text-amber-400"
            : "border-subtle hover:border-foreground",
      )}
    >
      <StatusIcon status={status} />
    </button>
  );
}

function CopyButton({
  text,
  label = "copy",
}: {
  text: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Copy ${label}`}
      className="ml-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded opacity-0 transition-all group-hover/item:opacity-60 hover:opacity-100!"
    >
      {copied ? (
        <Check className="h-4 w-4 text-foreground" strokeWidth={3} />
      ) : (
        <Copy className="h-4 w-4 text-muted-foreground" />
      )}
    </button>
  );
}

export default function ModuleCard({
  course,
  levelId,
  module,
}: ModuleCardProps) {
  const [isModuleExpanded, setIsModuleExpanded] = useState(true);
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [highlightedTargetId, setHighlightedTargetId] = useState<string | null>(
    null,
  );
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

  useEffect(() => {
    const applyHashExpansion = () => {
      let hash = window.location.hash;
      if (!hash) {
        setHighlightedTargetId(null);
        return;
      }

      try {
        hash = decodeURIComponent(hash);
      } catch {
        // Keep the original hash if decoding fails.
      }

      const normalizedHash = hash.replace(/^#/, "");
      if (!normalizedHash) {
        setHighlightedTargetId(null);
        return;
      }

      if (normalizedHash === moduleAnchorId(module.id)) {
        setHighlightedTargetId(normalizedHash);
        setIsModuleExpanded(true);
        return;
      }

      const matchedTopic = module.topics.find(
        (topic) => normalizedHash === topicAnchorId(module.id, topic.id),
      );

      if (matchedTopic) {
        setHighlightedTargetId(normalizedHash);
        setIsModuleExpanded(true);
        setExpandedTopics((prev) => {
          if (prev.has(matchedTopic.id)) return prev;
          const next = new Set(prev);
          next.add(matchedTopic.id);
          return next;
        });
        return;
      }

      const matchedSubtopicTopic = module.topics.find((topic) =>
        normalizedHash.startsWith(`subtopic-${module.id}-${topic.id}-`),
      );

      if (!matchedSubtopicTopic) {
        setHighlightedTargetId(null);
        return;
      }

      setHighlightedTargetId(normalizedHash);
      setIsModuleExpanded(true);
      setExpandedTopics((prev) => {
        if (prev.has(matchedSubtopicTopic.id)) return prev;
        const next = new Set(prev);
        next.add(matchedSubtopicTopic.id);
        return next;
      });

      window.setTimeout(() => {
        document
          .getElementById(normalizedHash)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    };

    applyHashExpansion();
    window.addEventListener("hashchange", applyHashExpansion);
    return () => window.removeEventListener("hashchange", applyHashExpansion);
  }, [module.id, module.topics]);

  // useEffect(() => {
  //   if (!highlightedTargetId) return;
  //   const timeout = window.setTimeout(() => {
  //     setHighlightedTargetId(null);
  //   }, 6000);
  //   return () => window.clearTimeout(timeout);
  // }, [highlightedTargetId]);

  function clearHighlightAndHash() {
    setHighlightedTargetId(null);
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  }

  return (
    <div
      id={moduleAnchorId(module.id)}
      data-accent={module.color}
      className={cn(
        "scroll-mt-28 overflow-hidden rounded-xl border border-border bg-card transition-colors",
        highlightedTargetId === moduleAnchorId(module.id) &&
          "border-primary/40 bg-primary/5 ring-2 ring-primary/25",
      )}
    >
      {/* Module header — clickable to collapse/expand */}
      <button
        type="button"
        onClick={() => setIsModuleExpanded((prev) => !prev)}
        className="flex w-full items-start gap-3 p-4 text-left"
      >
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

          <div className="flex items-center gap-2 mt-2 ">
            <div className="flex-1">
              <ProgressBar
                percentage={moduleStats.percentage}
                size="sm"
                color={module.color}
                showLabel={false}
              />
            </div>
            <span className="shrink-0 text-xs font-medium text-card-foreground">
              {moduleStats.percentage}%
            </span>
          </div>
          <p className="text-xs text-subtle">
            {moduleStats.completed} of {moduleStats.total} subtopics completed
          </p>
        </div>

        <ChevronDown
          className={cn(
            "mt-0.5 h-4 w-4 shrink-0 text-disabled transition-transform duration-200",
            isModuleExpanded && "rotate-180",
          )}
        />
      </button>

      {highlightedTargetId && (
        <div className="border-t border-border px-4 py-2">
          <button
            type="button"
            onClick={clearHighlightAndHash}
            className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] bg-destructive/90 duration-100 text-foreground font-medium  hover:bg-destructive/80 "
          >
            Clear search highlight
          </button>
        </div>
      )}

      {/* Topics list — collapsible */}
      {isModuleExpanded && (
        <div className="divide-y divide-border border-t border-border">
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
            const inProg =
              topicStats.inProgress > 0 ||
              (topicStats.completed > 0 && !allDone);

            const topicCopyText =
              `${topic.title}\n` +
              topic.subtopics.map((s) => `- ${s.title}`).join("\n");
            const topicTargetId = topicAnchorId(module.id, topic.id);
            const isTopicHighlighted = highlightedTargetId === topicTargetId;

            return (
              <div key={topic.id}>
                {/* Topic row — fully clickable */}
                <div
                  id={topicTargetId}
                  className={cn(
                    "group/item scroll-mt-28 flex w-full cursor-pointer items-center px-4 py-3 transition-colors",
                    isTopicHighlighted &&
                      "bg-primary/10 ring-1 ring-primary/25",
                  )}
                  onClick={() => toggleTopic(topic.id)}
                >
                  <div className="flex flex-1 items-center gap-3 text-left">
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-disabled transition-transform duration-200",
                        isExpanded && "rotate-180",
                      )}
                    />

                    {/* Status dot */}
                    <span
                      className={cn(
                        "flex h-2 w-2 shrink-0 rounded-full",
                        allDone
                          ? "bg-emerald-500"
                          : inProg
                            ? "bg-amber-400"
                            : "bg-border-strong",
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
                  </div>

                  <CopyButton text={topicCopyText} label="topic" />

                  <span className="ml-3 shrink-0 text-xs text-subtle">
                    {topicStats.completed}/{topicStats.total}
                  </span>
                </div>

                {/* Subtopics */}
                {isExpanded && (
                  <div className="space-y-0.5 px-4 pb-3 pt-1">
                    {topic.subtopics.map((subtopic) => {
                      const subtopicTargetId = subtopicAnchorId(
                        module.id,
                        topic.id,
                        subtopic.id,
                      );
                      const isSubtopicHighlighted =
                        highlightedTargetId === subtopicTargetId;
                      const status = getSubtopicStatus(
                        progress,
                        course.id,
                        levelId,
                        module.id,
                        topic.id,
                        subtopic.id,
                      );

                      return (
                        <div
                          key={subtopic.id}
                          id={subtopicTargetId}
                          onClick={() =>
                            updateSubtopicStatus(
                              course.id,
                              levelId,
                              module.id,
                              topic.id,
                              subtopic.id,
                              nextStatus(status),
                            )
                          }
                          className={cn(
                            "group/item scroll-mt-28 flex cursor-pointer items-center gap-2.5 rounded-sm px-2 py-1.5 transition-colors hover:bg-card-hover",
                            isSubtopicHighlighted &&
                              "bg-primary/10 ring-1 ring-primary/25",
                          )}
                        >
                          <CheckboxButton
                            status={status}
                            onClick={() =>
                              updateSubtopicStatus(
                                course.id,
                                levelId,
                                module.id,
                                topic.id,
                                subtopic.id,
                                nextStatus(status),
                              )
                            }
                          />

                          <span
                            className={cn(
                              "flex-1 text-sm",
                              status === "completed"
                                ? "text-subtle line-through opacity-60"
                                : "text-card-foreground",
                            )}
                          >
                            {subtopic.title}
                          </span>

                          {status === "in-progress" && (
                            <span className="shrink-0 rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-500">
                              In Progress
                            </span>
                          )}
                          {status === "completed" && (
                            <span className="shrink-0 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                              Completed
                            </span>
                          )}

                          <CopyButton text={subtopic.title} label="subtopic" />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
