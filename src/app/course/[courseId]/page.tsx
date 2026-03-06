"use client";

import { use, useState, Suspense } from "react";
import { notFound } from "next/navigation";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
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

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchLevelId = searchParams.get("level");
  const searchModuleId = searchParams.get("module");
  const openTopicId = searchParams.get("topic") ?? undefined;
  const highlightSubtopicId = searchParams.get("subtopic") ?? undefined;

  const [selectedLevelId, setSelectedLevelId] = useState(
    searchLevelId ?? course.levels[0]?.id ?? "",
  );
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(
    searchModuleId,
  );
  const [showProgress, setShowProgress] = useState(true);

  const activeLevelId = searchLevelId ?? selectedLevelId;
  const activeModuleId = searchModuleId ?? selectedModuleId;

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
  const moduleAgg = (() => {
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
  })();

  const totalSubtopics = Object.values(moduleAgg).reduce(
    (s, m) => s + m.total,
    0,
  );
  const totalCompleted = Object.values(moduleAgg).reduce(
    (s, m) => s + m.completed,
    0,
  );

  function handleLevelChange(id: string) {
    setSelectedLevelId(id);
    setSelectedModuleId(null);
    // Clear search params so local state takes priority
    if (searchParams.toString()) router.replace(pathname);
  }

  const activeModuleStats = activeModule
    ? calcModuleProgress(progress, course.id, activeLevel.id, activeModule)
    : null;

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Dashboard", href: "/" }, { label: course.title }]}
      />

      {/* ── Course header ────────────────────────────────── */}
      <div className="mt-4 mb-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-text-faint">
              Mastery System
            </p>
            <div className="mt-1 flex items-baseline gap-3">
              <h1 className="text-2xl font-black text-text-primary sm:text-3xl">
                {course.title}
              </h1>
              <span
                data-accent={course.color}
                className="text-xl font-bold font-mono accent-text"
              >
                {course.icon}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowProgress(!showProgress)}
            className="mt-2 shrink-0 rounded-lg border border-border-default bg-surface px-3 py-1.5 text-xs font-medium text-text-muted hover:border-border-strong hover:text-text-primary"
          >
            {showProgress ? "Hide Stats" : "Show Stats"}
          </button>
        </div>

        {/* Module totals row */}
        <div className="my-2 flex flex-wrap items-center gap-x-4 gap-y-1">
          {Object.entries(moduleAgg).map(([id, agg]) => (
            <span key={id} className="flex items-center gap-1.5">
              <span
                data-accent={agg.color}
                className="text-xs font-bold accent-text"
              >
                {agg.title}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {agg.completed}/{agg.total}
              </span>
            </span>
          ))}
          <span className="text-[10px] text-text-faint">
            {totalSubtopics} subtopics total
          </span>
        </div>

        {/* Level stats cards + overall progress (toggleable) */}
        {showProgress && isLoaded && (
          <div className="mt-4 space-y-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {course.levels.map((level, idx) => {
                const active = level.id === activeLevel.id;
                const color = level.color ?? "#888";
                const lp = calcLevelProgress(progress, course.id, level);
                return (
                  <div
                    key={level.id}
                    data-accent={color}
                    className={`rounded-xl border p-2.5 ${
                      active
                        ? "accent-border-soft accent-bg-soft"
                        : "border-border-default bg-surface"
                    }`}
                  >
                    <p className="mb-1.5 text-[10px] font-black tracking-wide leading-snug accent-text">
                      L{idx}&nbsp;{level.title}
                    </p>
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
                          className="flex items-center gap-1 text-[10px] leading-relaxed"
                        >
                          <span
                            data-accent={mod.color ?? "#888"}
                            className="font-bold uppercase accent-text"
                          >
                            {mod.id.toUpperCase()}:
                          </span>
                          <span className="font-mono text-text-muted">
                            {mp.completed}/{mp.total}
                          </span>
                        </div>
                      );
                    })}
                    {lp.percentage > 0 && (
                      <div className="mt-2">
                        <ProgressBar
                          percentage={lp.percentage}
                          size="sm"
                          color={color}
                          showLabel={false}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-full">
              <ProgressBar
                percentage={courseStats.percentage}
                size="sm"
                color={course.color}
              />
              <p className="mt-1 text-xs text-text-faint">
                {totalCompleted}/{totalSubtopics} subtopics completed
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── Level tabs (native scroll) ───────────────────── */}
      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide border-b border-border-default -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        <div className="flex min-w-max">
          {course.levels.map((level, idx) => {
            const active = level.id === activeLevel.id;
            const color = level.color ?? "#888";
            const lp = calcLevelProgress(progress, course.id, level);
            return (
              <button
                key={level.id}
                data-accent={color}
                type="button"
                onClick={() => handleLevelChange(level.id)}
                className={`flex shrink-0 flex-col items-start gap-0.5 border-b-2 px-5 py-3 ${
                  active
                    ? "accent-border"
                    : "border-transparent hover:bg-surface-hover hover:border-border-muted"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] font-black leading-none ${
                      active
                        ? "accent-bg-soft-strong accent-text"
                        : "accent-bg-soft accent-text"
                    }`}
                  >
                    L{idx}
                  </span>
                  <span
                    className={`text-xs font-bold whitespace-nowrap ${
                      active ? "accent-text" : "text-text-subtle"
                    }`}
                  >
                    {level.title}
                  </span>
                </div>
                {level.description && (
                  <p className="max-w-35 pl-0.5 text-[10px] text-text-faint truncate">
                    {level.description}
                  </p>
                )}
                {showProgress && lp.percentage > 0 && (
                  <div className="mt-0.5 w-full min-w-32">
                    <ProgressBar
                      percentage={lp.percentage}
                      size="sm"
                      color={color}
                      showLabel={false}
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content: sidebar + topics ────────────────────── */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:gap-6">
        {/* Module sidebar - horizontal on mobile, vertical on desktop */}
        <div className="w-full shrink-0 md:w-44">
          <ModuleSidebar
            modules={activeLevel.modules}
            activeId={resolvedModuleId}
            courseId={course.id}
            levelId={activeLevel.id}
            onSelect={(id) => {
              setSelectedModuleId(id);
              if (searchParams.toString()) router.replace(pathname);
            }}
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
                    data-accent={activeLevel.color ?? "#888"}
                    className="rounded-md px-2 py-0.5 text-xs font-bold accent-bg-soft-strong accent-text"
                  >
                    L{activeLevelIdx}
                  </span>
                  <h2 className="text-base font-bold text-text-primary">
                    {activeModule.title} Topics
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  {showProgress && activeModuleStats && (
                    <div className="w-full sm:w-24">
                      <ProgressBar
                        percentage={activeModuleStats.percentage}
                        size="sm"
                        color={activeModule.color}
                      />
                    </div>
                  )}
                  <span className="text-xs whitespace-nowrap text-text-faint">
                    {activeModuleStats?.completed ?? 0}/
                    {activeModuleStats?.total ?? 0} done ·{" "}
                    {activeModule.topics.length} sections
                  </span>
                </div>
              </div>

              <TopicAccordion
                key={`${activeModule.id}:${openTopicId ?? ""}`}
                topics={activeModule.topics}
                courseId={course.id}
                levelId={activeLevel.id}
                moduleId={activeModule.id}
                moduleColor={activeModule.color}
                openTopicId={openTopicId}
                highlightSubtopicId={highlightSubtopicId}
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
        <div className="py-12 text-center text-text-faint">Loading course…</div>
      }
    >
      <CourseContent courseId={courseId} />
    </Suspense>
  );
}
