"use client";

import { Module } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcModuleProgress } from "@/utils/progress";
import ProgressBar from "./ProgressBar";

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
    <>
      {/* Mobile: horizontal native scroll */}
      <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex gap-2 pb-2 min-w-max">
          {modules.map((mod) => {
            const active = mod.id === activeId;
            const mp = calcModuleProgress(progress, courseId, levelId, mod);
            const modColor = mod.color ?? "#888";
            return (
              <button
                key={mod.id}
                data-accent={modColor}
                type="button"
                onClick={() => onSelect(mod.id)}
                className={`flex shrink-0 flex-col items-center gap-1.5 rounded-xl border px-4 py-3 text-center ${
                  active
                    ? "accent-bg-soft accent-border-soft border-l-[3px] accent-border-left"
                    : "border-border-default bg-surface"
                }`}
              >
                <span className="text-2xl font-black font-mono leading-none accent-text">
                  {mod.icon ?? mod.id.charAt(0).toUpperCase()}
                </span>
                <span
                  className={`text-[10px] font-bold tracking-wide leading-tight whitespace-nowrap ${
                    active ? "accent-text" : "text-text-muted"
                  }`}
                >
                  {mod.title}
                </span>
                <span className="text-[9px] font-mono text-text-subtle">
                  {mp.completed}/{mp.total}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop: vertical stack with left-border active indicator */}
      <nav className="hidden md:flex md:flex-col md:gap-1">
        {modules.map((mod) => {
          const active = mod.id === activeId;
          const mp = calcModuleProgress(progress, courseId, levelId, mod);
          const modColor = mod.color ?? "#888";
          return (
            <button
              key={mod.id}
              data-accent={modColor}
              type="button"
              onClick={() => onSelect(mod.id)}
              className={`flex w-full flex-col items-center gap-2 rounded-xl border px-3 py-4 text-center ${
                active
                  ? "accent-bg-soft accent-border-soft border-l-[3px] accent-border-left"
                  : "border-border-default bg-surface hover:border-border-muted hover:bg-surface-hover"
              }`}
            >
              <span className="text-3xl font-black font-mono leading-none accent-text">
                {mod.icon ?? mod.id.charAt(0).toUpperCase()}
              </span>
              <span
                className={`text-[11px] font-bold uppercase tracking-widest leading-tight ${
                  active ? "accent-text" : "text-text-muted"
                }`}
              >
                {mod.title}
              </span>
              <div className="w-full">
                <ProgressBar
                  percentage={mp.percentage}
                  size="sm"
                  color={modColor}
                  showLabel={false}
                />
              </div>
              <span className="text-[10px] font-mono tabular-nums text-text-subtle">
                {mp.completed}/{mp.total}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
