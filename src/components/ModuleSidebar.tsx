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
                type="button"
                onClick={() => onSelect(mod.id)}
                className="flex shrink-0 flex-col items-center gap-1.5 rounded-xl px-4 py-3 text-center transition-all border"
                style={
                  active
                    ? {
                        backgroundColor: modColor + "14",
                        borderColor: modColor + "50",
                        borderLeftWidth: "3px",
                        borderLeftColor: modColor,
                      }
                    : {
                        borderColor: "var(--c-bd)",
                        backgroundColor: "var(--c-s0)",
                      }
                }
              >
                <span
                  className="text-2xl font-black font-mono leading-none"
                  style={{ color: modColor }}
                >
                  {mod.icon ?? mod.id.charAt(0).toUpperCase()}
                </span>
                <span
                  className="text-[10px] font-bold tracking-wide leading-tight whitespace-nowrap"
                  style={{ color: active ? modColor : "var(--c-t1)" }}
                >
                  {mod.title}
                </span>
                <span className="text-[9px] font-mono text-[var(--c-t2)]">
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
              type="button"
              onClick={() => onSelect(mod.id)}
              className={`flex flex-col items-center gap-2 rounded-xl px-3 py-4 text-center transition-all w-full border ${
                active
                  ? ""
                  : "border-[var(--c-bd)] bg-[var(--c-s0)] hover:border-[var(--c-bd2)] hover:bg-[var(--c-s1)]"
              }`}
              style={
                active
                  ? {
                      backgroundColor: modColor + "12",
                      borderColor: modColor + "30",
                      borderLeftWidth: "3px",
                      borderLeftColor: modColor,
                    }
                  : undefined
              }
            >
              <span
                className="text-3xl font-black font-mono leading-none"
                style={{ color: modColor }}
              >
                {mod.icon ?? mod.id.charAt(0).toUpperCase()}
              </span>
              <span
                className="text-[11px] font-bold uppercase tracking-widest leading-tight"
                style={{ color: active ? modColor : "var(--c-t1)" }}
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
              <span className="text-[10px] font-mono tabular-nums text-[var(--c-t2)]">
                {mp.completed}/{mp.total}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
