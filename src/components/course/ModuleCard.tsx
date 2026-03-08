"use client";

import { useState } from "react";
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
      className="ml-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded opacity-0 transition-all group-hover/item:opacity-50 hover:opacity-100!"
    >
      {copied ? (
        <Check className="h-3 w-3 text-foreground" strokeWidth={3} />
      ) : (
        <Copy className="h-3 w-3 text-subtle" />
      )}
    </button>
  );
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
          <p className="text-sm font-bold text-card-foreground">
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
          const inProg =
            topicStats.inProgress > 0 || (topicStats.completed > 0 && !allDone);

          const topicCopyText =
            `${topic.title}\n` +
            topic.subtopics.map((s) => `- ${s.title}`).join("\n");

          return (
            <div key={topic.id}>
              {/* Topic row */}
              <div className="group/item flex w-full items-center px-4 py-3">
                <button
                  onClick={() => toggleTopic(topic.id)}
                  className="flex flex-1 items-center gap-3 text-left"
                >
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
                </button>

                <CopyButton text={topicCopyText} label="topic" />

                <span className="ml-3 shrink-0 text-xs text-subtle">
                  {topicStats.completed}/{topicStats.total}
                </span>
              </div>

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

                    return (
                      <div
                        key={subtopic.id}
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
                        className="group/item flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-card-hover"
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
    </div>
  );
}
