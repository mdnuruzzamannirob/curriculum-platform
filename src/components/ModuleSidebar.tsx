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

      {/* Desktop: vertical module tabs */}
      <nav className="hidden md:flex border-l border-border-default  md:flex-col">
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
              className={`w-full items-start space-y-2 gap-2 border-l-2 px-3 py-3 text-left ${
                active
                  ? "accent-bg-soft accent-border"
                  : "border-transparent hover:bg-surface-hover hover:border-border-muted"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <p className="rounded justify-center min-w-6 text-center font-mono font-black leading-none accent-text">
                  {mod.icon ?? mod.id.charAt(0).toUpperCase()}
                </p>
                <p
                  className={`text-sm font-bold uppercase tracking-wide leading-tight ${
                    active ? "accent-text" : "text-text-muted"
                  }`}
                >
                  {mod.title}
                </p>
              </div>

              <div className="flex w-full items-center gap-1">
                <div className="w-full">
                  <ProgressBar
                    percentage={mp.percentage}
                    size="sm"
                    color={modColor}
                    showLabel={false}
                  />
                </div>
                <span className="text-[10px] font-mono tabular-nums text-text-faint">
                  {mp.completed}/{mp.total}
                </span>
              </div>
            </button>
          );
        })}
      </nav>
    </>
  );
}
