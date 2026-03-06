"use client";

import { Module } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcModuleProgress } from "@/utils/progress";
import ProgressBar from "./ProgressBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

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

  function Card({ mod, compact }: { mod: Module; compact?: boolean }) {
    const active = mod.id === activeId;
    const mp = calcModuleProgress(progress, courseId, levelId, mod);
    const modColor = mod.color ?? "#888";

    return (
      <button
        type="button"
        onClick={() => onSelect(mod.id)}
        className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all w-full ${
          compact ? "min-w-[7.5rem]" : ""
        } ${
          active
            ? "border-transparent"
            : "border-[var(--c-bd)] bg-[var(--c-s0)] hover:border-[var(--c-bd3)] hover:bg-[var(--c-s1)]"
        }`}
        style={
          active
            ? {
                backgroundColor: modColor + "18",
                borderColor: modColor,
                boxShadow: `0 0 20px ${modColor}20`,
              }
            : undefined
        }
      >
        {/* Icon */}
        <span
          className="text-3xl font-black font-mono leading-none"
          style={{ color: modColor }}
        >
          {mod.icon ?? mod.id.charAt(0).toUpperCase()}
        </span>

        {/* Title */}
        <span
          className="text-[11px] font-bold uppercase tracking-widest"
          style={{ color: active ? modColor : "var(--c-t1)" }}
        >
          {mod.title}
        </span>

        {/* Progress bar */}
        <div className="w-full px-1">
          <ProgressBar
            percentage={mp.percentage}
            size="sm"
            color={modColor}
            showLabel={false}
          />
        </div>

        {/* Count */}
        <span
          className="text-[10px] font-mono tabular-nums"
          style={{ color: "var(--c-t2)" }}
        >
          {mp.completed}/{mp.total}
        </span>
      </button>
    );
  }

  return (
    <>
      {/* Mobile: horizontal Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[FreeMode]}
          freeMode
          slidesPerView="auto"
          spaceBetween={8}
          className="!overflow-visible"
        >
          {modules.map((mod) => (
            <SwiperSlide key={mod.id} className="!w-[7.5rem]">
              <Card mod={mod} compact />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: vertical stack */}
      <nav className="hidden md:flex md:flex-col md:gap-3">
        {modules.map((mod) => (
          <Card key={mod.id} mod={mod} />
        ))}
      </nav>
    </>
  );
}
