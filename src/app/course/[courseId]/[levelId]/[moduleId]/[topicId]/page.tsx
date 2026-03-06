"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getCourseById } from "@/data/courses";
import { findLevel, findModule, findTopic } from "@/utils/course";
import { useProgress } from "@/context/ProgressContext";
import { calcTopicProgress, getSubtopicStatus } from "@/utils/progress";
import { SubtopicStatus } from "@/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProgressBar from "@/components/ProgressBar";

const NEXT_STATUS: Record<SubtopicStatus, SubtopicStatus> = {
  "not-started": "in-progress",
  "in-progress": "completed",
  completed: "not-started",
};

export default function TopicPage({
  params,
}: {
  params: Promise<{
    courseId: string;
    levelId: string;
    moduleId: string;
    topicId: string;
  }>;
}) {
  const { courseId, levelId, moduleId, topicId } = use(params);

  const course = getCourseById(courseId);
  if (!course) notFound();

  const level = findLevel(course, levelId);
  if (!level) notFound();

  const mod = findModule(level, moduleId);
  if (!mod) notFound();

  const topic = findTopic(mod, topicId);
  if (!topic) notFound();

  const { progress, isLoaded, updateSubtopicStatus } = useProgress();
  const tp = calcTopicProgress(progress, courseId, levelId, moduleId, topic);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Dashboard", href: "/" },
          { label: course.title, href: `/course/${course.id}` },
          {
            label: level.title,
            href: `/course/${course.id}?level=${level.id}`,
          },
          {
            label: mod.title,
            href: `/course/${course.id}?level=${level.id}&module=${mod.id}`,
          },
          { label: topic.title },
        ]}
      />

      {/* Topic header */}
      <div className="mt-4 mb-8">
        <h1 className="text-2xl font-bold text-text-primary">{topic.title}</h1>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
          <span
            data-accent={level.color ?? "#3b82f6"}
            className="rounded-full px-2.5 py-0.5 font-medium accent-bg-soft-strong accent-text"
          >
            {level.title}
          </span>
          <span
            data-accent={mod.color ?? "#22d3ee"}
            className="rounded-full px-2.5 py-0.5 font-medium accent-bg-soft-strong accent-text"
          >
            {mod.title}
          </span>
          <span
            data-accent={course.color}
            className="rounded-full px-2.5 py-0.5 font-medium accent-bg-soft-strong accent-text"
          >
            {course.title}
          </span>
        </div>
        {topic.description && (
          <p className="mt-3 text-sm text-text-muted">{topic.description}</p>
        )}
        {isLoaded && (
          <div className="mt-4 max-w-sm">
            <ProgressBar percentage={tp.percentage} size="md" />
            <p className="mt-1 text-xs text-text-faint">
              {tp.completed}/{tp.total} subtopics completed
            </p>
          </div>
        )}
      </div>

      {/* Subtopics */}
      <div>
        <h2 className="mb-3 text-sm font-semibold text-text-muted">
          Subtopics
        </h2>
        <ul className="space-y-1">
          {topic.subtopics.map((sub) => {
            const status = getSubtopicStatus(
              progress,
              courseId,
              levelId,
              moduleId,
              topicId,
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
                      topicId,
                      sub.id,
                      NEXT_STATUS[status],
                    )
                  }
                  className="flex w-full items-center gap-3 rounded-lg border border-border-default bg-surface px-4 py-3 text-left transition-colors hover:border-border-strong group"
                >
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
                    className={`text-sm font-mono ${
                      status === "completed"
                        ? "text-text-subtle line-through"
                        : status === "in-progress"
                          ? "text-amber-400"
                          : "text-text-secondary"
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
    </div>
  );
}
