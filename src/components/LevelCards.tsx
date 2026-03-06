"use client";

import { Level } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcModuleProgress } from "@/utils/progress";

interface LevelCardsProps {
  levels: Level[];
  activeId: string;
  courseId: string;
  onSelect: (id: string) => void;
}

export default function LevelCards({
  levels,
  activeId,
  courseId,
  onSelect,
}: LevelCardsProps) {
  const { progress } = useProgress();

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {levels.map((level, idx) => {
        const active = level.id === activeId;
        const borderColor = level.color ?? "#666";

        return (
          <button
            key={level.id}
            type="button"
            onClick={() => onSelect(level.id)}
            className={`rounded-lg border px-3 py-3 text-left transition-all ${
              active
                ? "border-current ring-1 ring-current"
                : "border-[#2a2a2a] hover:border-[#444]"
            }`}
            style={active ? { borderColor, color: borderColor } : undefined}
          >
            <p
              className="text-xs font-bold tracking-wide"
              style={{ color: borderColor }}
            >
              L{idx} {level.title}
            </p>
            <div className="mt-2 space-y-0.5">
              {level.modules.map((mod) => {
                const mp = calcModuleProgress(
                  progress,
                  courseId,
                  level.id,
                  mod,
                );
                return (
                  <div
                    key={mod.id}
                    className="flex items-center gap-1.5 text-xs"
                  >
                    <span
                      style={{ color: mod.color ?? "#888" }}
                      className="font-semibold"
                    >
                      {mod.id.toUpperCase()}:
                    </span>
                    <span
                      style={{ color: mod.color ?? "#888" }}
                      className="font-mono"
                    >
                      {mp.completed}/{mp.total}
                    </span>
                  </div>
                );
              })}
            </div>
          </button>
        );
      })}
    </div>
  );
}
