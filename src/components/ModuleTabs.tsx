"use client";

import { Module } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcModuleProgress } from "@/utils/progress";

interface ModuleTabsProps {
  modules: Module[];
  activeId: string;
  courseId: string;
  levelId: string;
  onSelect: (id: string) => void;
}

export default function ModuleTabs({
  modules,
  activeId,
  courseId,
  levelId,
  onSelect,
}: ModuleTabsProps) {
  const { progress } = useProgress();

  return (
    <div className="flex gap-1 border-b border-gray-200">
      {modules.map((mod) => {
        const active = mod.id === activeId;
        const mp = calcModuleProgress(progress, courseId, levelId, mod);

        return (
          <button
            key={mod.id}
            type="button"
            onClick={() => onSelect(mod.id)}
            className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
              active
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {mod.title}
            {mp.percentage > 0 && (
              <span
                className={`ml-1.5 text-xs ${active ? "text-blue-400" : "text-gray-400"}`}
              >
                {mp.percentage}%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
