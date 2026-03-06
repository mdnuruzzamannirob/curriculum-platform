"use client";

import { Subtopic, SubtopicStatus } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { getSubtopicStatus } from "@/utils/progress";

interface SubtopicChecklistProps {
  subtopics: Subtopic[];
  courseId: string;
  levelId: string;
  moduleId: string;
  topicId: string;
}

const STATUS_STYLES: Record<
  SubtopicStatus,
  { dot: string; label: string; select: string }
> = {
  "not-started": {
    dot: "bg-gray-300",
    label: "Not Started",
    select: "text-gray-500 bg-gray-50 border-gray-200",
  },
  "in-progress": {
    dot: "bg-amber-400",
    label: "In Progress",
    select: "text-amber-700 bg-amber-50 border-amber-200",
  },
  completed: {
    dot: "bg-emerald-500",
    label: "Completed",
    select: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
};

export default function SubtopicChecklist({
  subtopics,
  courseId,
  levelId,
  moduleId,
  topicId,
}: SubtopicChecklistProps) {
  const { progress, updateSubtopicStatus } = useProgress();

  return (
    <ul className="space-y-2">
      {subtopics.map((sub) => {
        const status = getSubtopicStatus(
          progress,
          courseId,
          levelId,
          moduleId,
          topicId,
          sub.id,
        );
        const styles = STATUS_STYLES[status];

        return (
          <li
            key={sub.id}
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-4 py-3 transition hover:border-gray-200"
          >
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${styles.dot}`} />
              <span className="text-sm font-medium text-gray-800">
                {sub.title}
              </span>
            </div>
            <select
              value={status}
              onChange={(e) =>
                updateSubtopicStatus(
                  courseId,
                  levelId,
                  moduleId,
                  topicId,
                  sub.id,
                  e.target.value as SubtopicStatus,
                )
              }
              className={`rounded-md border px-2.5 py-1 text-xs font-medium outline-none cursor-pointer transition ${styles.select}`}
            >
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </li>
        );
      })}
    </ul>
  );
}
