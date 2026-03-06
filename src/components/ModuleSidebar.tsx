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
      {/* ── Mobile: horizontal scroll, desktop-style cards ── */}
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
                className={`flex shrink-0 flex-col gap-2 rounded-xl min-w-36 w-fit border px-3 py-3 text-left ${
                  active
                    ? "accent-bg-soft accent-border"
                    : "border-border-default bg-surface hover:bg-surface-hover hover:border-border-muted"
                }`}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-1.5">
                  <p
                    className="rounded justify-center min-w-6 text-center font-mono font-black leading-none accent-text"
                    style={{ color: modColor }}
                  >
                    {mod.icon ?? mod.id.charAt(0).toUpperCase()}
                  </p>
                  <p
                    className={`text-sm font-bold uppercase tracking-wide leading-tight truncate ${
                      active ? "accent-text" : "text-text-muted"
                    }`}
                    style={active ? { color: modColor } : undefined}
                  >
                    {mod.title}
                  </p>
                </div>

                {/* Progress bar + count */}
                <div className="flex w-full items-center gap-1">
                  <div className="w-full">
                    <ProgressBar
                      percentage={mp.percentage}
                      size="sm"
                      color={modColor}
                      showLabel={false}
                    />
                  </div>
                  <span className="text-[10px] font-mono tabular-nums text-text-faint whitespace-nowrap">
                    {mp.completed}/{mp.total}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Desktop: vertical module tabs (unchanged) ── */}
      <nav className="hidden md:flex border-l border-border-default md:flex-col">
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
                  className={`text-sm font-bold uppercase tracking-wide leading-tight ${active ? "accent-text" : "text-text-muted"}`}
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
