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
    <nav className="flex gap-1 overflow-x-auto md:flex-col md:overflow-x-visible">
      {modules.map((mod) => {
        const active = mod.id === activeId;
        const mp = calcModuleProgress(progress, courseId, levelId, mod);
        const modColor = mod.color ?? "#888";

        return (
          <button
            key={mod.id}
            type="button"
            onClick={() => onSelect(mod.id)}
            className={`flex shrink-0 flex-row items-center gap-2 rounded-lg px-3 py-2 transition-colors md:w-full md:flex-col md:gap-1 md:py-3 md:text-center ${
              active
                ? "bg-[#1a1a1a] border-b-2 md:border-b-0 md:border-l-2"
                : "hover:bg-[#141414]"
            }`}
            style={active ? { borderColor: modColor } : undefined}
          >
            <span
              className="text-base font-bold font-mono md:text-lg"
              style={{ color: modColor }}
            >
              {mod.icon ?? mod.id.charAt(0).toUpperCase()}
            </span>
            <span
              className="text-xs font-semibold whitespace-nowrap"
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
