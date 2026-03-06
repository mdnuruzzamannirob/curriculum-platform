"use client";

import { Module } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcModuleProgress } from "@/utils/progress";

interface ModuleSidebarProps {
  modules: Module[];
  activeId: string;
  courseId: string;
  levelId: string;
  onSelect: (id: string) => void;
}

export default function ModuleSidebar({
  modules,
  activeId,
  courseId,
  levelId,
  onSelect,
}: ModuleSidebarProps) {
  const { progress } = useProgress();

  return (
    <nav className="space-y-1">
      {modules.map((mod) => {
        const active = mod.id === activeId;
        const mp = calcModuleProgress(progress, courseId, levelId, mod);
        const modColor = mod.color ?? "#888";

        return (
          <button
            key={mod.id}
            type="button"
            onClick={() => onSelect(mod.id)}
            className={`flex w-full flex-col items-center gap-1 rounded-lg px-3 py-3 text-center transition-colors ${
              active ? "bg-[#1a1a1a] border-l-2" : "hover:bg-[#141414]"
            }`}
            style={active ? { borderColor: modColor } : undefined}
          >
            <span
              className="text-lg font-bold font-mono"
              style={{ color: modColor }}
            >
              {mod.icon ?? mod.id.charAt(0).toUpperCase()}
            </span>
            <span
              className="text-xs font-semibold"
              style={{ color: active ? modColor : "#999" }}
            >
              {mod.title}
            </span>
            <span className="text-[11px] font-mono text-[#666]">
              {mp.completed}/{mp.total}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
