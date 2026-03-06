"use client";

import { use, useState, useMemo, useEffect, Suspense } from "react";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { getCourseById } from "@/data/courses";
import { useProgress } from "@/context/ProgressContext";
import {
  calcCourseProgress,
  calcModuleProgress,
  calcLevelProgress,
} from "@/utils/progress";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProgressBar from "@/components/ProgressBar";
import ModuleSidebar from "@/components/ModuleSidebar";
import TopicAccordion from "@/components/TopicAccordion";

function CourseContent({ courseId }: { courseId: string }) {
  const course = getCourseById(courseId);
  if (!course) notFound();

  const searchParams = useSearchParams();
  const initialLevel = searchParams.get("level") ?? course.levels[0]?.id ?? "";
  const initialModule = searchParams.get("module");

  const [activeLevelId, setActiveLevelId] = useState(initialLevel);
  const [activeModuleId, setActiveModuleId] = useState<string | null>(
    initialModule,
  );
  const [showProgress, setShowProgress] = useState(true);

  // Sync state when search params change (e.g. via SearchBar navigation)
  useEffect(() => {
    const level = searchParams.get("level");
    const mod = searchParams.get("module");
    if (level) setActiveLevelId(level);
    if (mod) setActiveModuleId(mod);
  }, [searchParams]);

  const { progress, isLoaded } = useProgress();
  const courseStats = calcCourseProgress(progress, course);

  const activeLevel =
    course.levels.find((l) => l.id === activeLevelId) ?? course.levels[0];
  const activeLevelIdx = course.levels.indexOf(activeLevel);
  const resolvedModuleId =
    activeModuleId && activeLevel.modules.some((m) => m.id === activeModuleId)
      ? activeModuleId
      : (activeLevel.modules[0]?.id ?? "");
  const activeModule = activeLevel.modules.find(
    (m) => m.id === resolvedModuleId,
  );

  // Aggregate per-module totals across all levels
  const moduleAgg = useMemo(() => {
    const agg: Record<
      string,
      { title: string; color: string; completed: number; total: number }
    > = {};
    for (const level of course.levels) {
      for (const mod of level.modules) {
        const mp = calcModuleProgress(progress, course.id, level.id, mod);
        if (!agg[mod.id])
          agg[mod.id] = {
            title: mod.title,
            color: mod.color ?? "#888",
            completed: 0,
            total: 0,
          };
        agg[mod.id].completed += mp.completed;
        agg[mod.id].total += mp.total;
      }
    }
    return agg;
  }, [course, progress]);

  const totalSubtopics = Object.values(moduleAgg).reduce(
    (s, m) => s + m.total,
    0,
  );
  const totalCompleted = Object.values(moduleAgg).reduce(
    (s, m) => s + m.completed,
    0,
  );

  function handleLevelChange(id: string) {
    setActiveLevelId(id);
    setActiveModuleId(null);
  }

  const activeModuleStats = activeModule
    ? calcModuleProgress(progress, course.id, activeLevel.id, activeModule)
    : null;
  const activeLevelStats = calcLevelProgress(progress, course.id, activeLevel);

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Dashboard", href: "/" }, { label: course.title }]}
      />

      {/* ── Course header ────────────────────────────────── */}
      <div className="mt-4 mb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#555]">
              Mastery System
            </p>
            <div className="mt-1 flex items-baseline gap-3">
              <h1 className="text-2xl font-black text-[#e5e5e5] sm:text-3xl">
                {course.title}
              </h1>
              <span
                className="text-xl font-bold font-mono"
                style={{ color: course.color }}
              >
                {course.icon}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowProgress(!showProgress)}
            className="rounded-lg border border-[#1e1e1e] bg-[#111] px-3 py-1.5 text-xs font-medium text-[#999] transition-colors hover:border-[#333] hover:text-[#e5e5e5] shrink-0 mt-2"
          >
            {showProgress ? "Hide Stats" : "Show Stats"}
          </button>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
          {Object.entries(moduleAgg).map(([id, agg]) => (
            <span
              key={id}
              className="font-semibold"
              style={{ color: agg.color }}
            >
              {agg.completed}/{agg.total} {agg.title}
            </span>
          ))}
          <span className="text-[#333]">·</span>
          <span className="text-[#666]">{totalSubtopics} total</span>
        </div>

        {/* Course progress bar - toggleable */}
        {showProgress && isLoaded && (
          <div className="mt-3 max-w-md">
            <ProgressBar
              percentage={courseStats.percentage}
              size="md"
              color={course.color}
            />
            <p className="mt-1 text-xs text-[#555]">
              {totalCompleted}/{totalSubtopics} subtopics completed
            </p>
          </div>
        )}
      </div>

      {/* ── Level cards grid ─────────────────────────────── */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {course.levels.map((level, idx) => {
          const active = level.id === activeLevel.id;
          const color = level.color ?? "#666";
          const lp = calcLevelProgress(progress, course.id, level);

          return (
            <button
              key={level.id}
              type="button"
              onClick={() => handleLevelChange(level.id)}
              className={`rounded-lg border p-3 text-left transition-all ${
                active ? "ring-1" : "border-[#1e1e1e] hover:border-[#333]"
              }`}
              style={
                active
                  ? { borderColor: color, boxShadow: `0 0 0 1px ${color}40` }
                  : undefined
              }
            >
              <p
                className="text-[10px] font-bold tracking-wider"
                style={{ color }}
              >
                L{idx}
              </p>
              <p
                className={`text-xs font-semibold mt-0.5 ${active ? "text-[#e5e5e5]" : "text-[#999]"}`}
              >
                {level.title}
              </p>
              {showProgress && (
                <div className="mt-2 space-y-0.5">
                  {level.modules.map((mod) => {
                    const mp = calcModuleProgress(
                      progress,
                      course.id,
                      level.id,
                      mod,
                    );
                    return (
                      <div
                        key={mod.id}
                        className="flex items-center gap-1.5 text-[10px]"
                      >
                        <span
                          className="font-semibold"
                          style={{ color: mod.color ?? "#888" }}
                        >
                          {mod.id.toUpperCase()}
                        </span>
                        <span className="font-mono text-[#666]">
                          {mp.completed}/{mp.total}
                        </span>
                      </div>
                    );
                  })}
                  {lp.percentage > 0 && (
                    <div className="mt-1">
                      <div className="h-1 rounded-full bg-[#1e1e1e]">
                        <div
                          className="h-1 rounded-full transition-all"
                          style={{
                            width: `${lp.percentage}%`,
                            backgroundColor: color,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Level tabs bar ───────────────────────────────── */}
      <div className="mt-6 -mx-4 px-4 sm:-mx-0 sm:px-0 flex gap-1 overflow-x-auto border-b border-[#1e1e1e]">
        {course.levels.map((level, idx) => {
          const active = level.id === activeLevel.id;
          const color = level.color ?? "#888";
          return (
            <button
              key={level.id}
              type="button"
              onClick={() => handleLevelChange(level.id)}
              className={`flex shrink-0 items-center gap-1.5 px-4 py-2.5 transition-colors ${
                active ? "border-b-2" : "hover:bg-[#111]"
              }`}
              style={active ? { borderColor: color } : undefined}
            >
              <span
                className={`text-[10px] font-bold ${active ? "" : "text-[#555]"}`}
                style={active ? { color } : undefined}
              >
                L{idx}
              </span>
              <span
                className={`text-xs font-semibold ${active ? "text-[#e5e5e5]" : "text-[#666]"}`}
              >
                {level.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Content: sidebar + topics ────────────────────── */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:gap-6">
        {/* Module sidebar - horizontal on mobile, vertical on desktop */}
        <div className="w-full md:w-20 shrink-0">
          <ModuleSidebar
            modules={activeLevel.modules}
            activeId={resolvedModuleId}
            courseId={course.id}
            levelId={activeLevel.id}
            onSelect={(id) => setActiveModuleId(id)}
          />
        </div>

        {/* Topics area */}
        <div className="min-w-0 flex-1">
          {activeModule && (
            <>
              {/* Section header */}
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-md px-2 py-0.5 text-xs font-bold"
                    style={{
                      backgroundColor: (activeLevel.color ?? "#888") + "18",
                      color: activeLevel.color,
                    }}
                  >
                    L{activeLevelIdx}
                  </span>
                  <h2 className="text-base font-bold text-[#e5e5e5]">
                    {activeModule.title} Topics
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  {showProgress && activeModuleStats && (
                    <div className="w-24">
                      <ProgressBar
                        percentage={activeModuleStats.percentage}
                        size="sm"
                        color={activeModule.color}
                      />
                    </div>
                  )}
                  <span className="text-xs text-[#555]">
                    {activeModuleStats?.completed ?? 0}/
                    {activeModuleStats?.total ?? 0} done ·{" "}
                    {activeModule.topics.length} sections
                  </span>
                </div>
              </div>

              <TopicAccordion
                topics={activeModule.topics}
                courseId={course.id}
                levelId={activeLevel.id}
                moduleId={activeModule.id}
                moduleColor={activeModule.color}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CoursePage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = use(params);
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center text-[#555]">Loading course…</div>
      }
    >
      <CourseContent courseId={courseId} />
    </Suspense>
  );
}
