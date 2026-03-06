"use client";

import Link from "next/link";
import { Topic } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcTopicProgress } from "@/utils/progress";
import ProgressBar from "./ProgressBar";

interface TopicListProps {
  topics: Topic[];
  courseId: string;
  levelId: string;
  moduleId: string;
}

export default function TopicList({
  topics,
  courseId,
  levelId,
  moduleId,
}: TopicListProps) {
  const { progress } = useProgress();

  if (topics.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-gray-400">
        No topics in this module yet.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-gray-100">
      {topics.map((topic) => {
        const tp = calcTopicProgress(
          progress,
          courseId,
          levelId,
          moduleId,
          topic,
        );

        return (
          <li key={topic.id}>
            <Link
              href={`/course/${courseId}/${levelId}/${moduleId}/${topic.id}`}
              className="group flex items-center justify-between gap-4 rounded-lg px-4 py-4 transition hover:bg-gray-50"
            >
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {topic.title}
                </h4>
                {topic.description && (
                  <p className="mt-0.5 truncate text-xs text-gray-400">
                    {topic.description}
                  </p>
                )}
              </div>

              <div className="flex w-36 shrink-0 items-center gap-3">
                <div className="flex-1">
                  <ProgressBar
                    percentage={tp.percentage}
                    size="sm"
                    showLabel={false}
                  />
                </div>
                <span className="text-xs text-gray-400">
                  {tp.completed}/{tp.total}
                </span>
              </div>

              <svg
                className="h-4 w-4 shrink-0 text-gray-300 group-hover:text-blue-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
