"use client";

import { Level } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcLevelProgress } from "@/utils/progress";

interface LevelTabsProps {
  levels: Level[];
  activeId: string;
  courseId: string;
  onSelect: (id: string) => void;
}

export default function LevelTabs({
  levels,
  activeId,
  courseId,
  onSelect,
}: LevelTabsProps) {
  const { progress } = useProgress();

  return (
    <div className="flex flex-wrap gap-2">
      {levels.map((level) => {
        const active = level.id === activeId;
        const lp = calcLevelProgress(progress, courseId, level);

        return (
          <button
            key={level.id}
            type="button"
            onClick={() => onSelect(level.id)}
            className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {level.title}
            {lp.percentage > 0 && (
              <span
                className={`ml-1.5 text-xs ${active ? "text-blue-200" : "text-gray-400"}`}
              >
                {lp.percentage}%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
