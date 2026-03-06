"use client";

import { use, useState, useMemo, Suspense } from "react";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { getCourseById } from "@/data/courses";
import { useProgress } from "@/context/ProgressContext";
import { calcCourseProgress, calcModuleProgress } from "@/utils/progress";
import Breadcrumbs from "@/components/Breadcrumbs";
import LevelCards from "@/components/LevelCards";
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

  const { progress } = useProgress();
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
    const agg: Record<string, { title: string; color: string; total: number }> =
      {};
    for (const level of course.levels) {
      for (const mod of level.modules) {
        const mp = calcModuleProgress(progress, course.id, level.id, mod);
        if (!agg[mod.id])
          agg[mod.id] = {
            title: mod.title,
            color: mod.color ?? "#888",
            total: 0,
          };
        agg[mod.id].total += mp.total;
      }
    }
    return agg;
  }, [course, progress]);

  const totalSubtopics = Object.values(moduleAgg).reduce(
    (s, m) => s + m.total,
    0,
  );

  function handleLevelChange(id: string) {
    setActiveLevelId(id);
    setActiveModuleId(null);
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
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#555]">
          Mastery System
        </p>
        <div className="mt-1 flex items-baseline gap-3">
          <h1 className="text-3xl font-black text-[#e5e5e5]">{course.title}</h1>
          <span
            className="text-xl font-bold font-mono"
            style={{ color: course.color }}
          >
            {course.icon}
          </span>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
          {Object.entries(moduleAgg).map(([id, agg]) => (
            <span
              key={id}
              className="font-semibold"
              style={{ color: agg.color }}
            >
              {agg.total} {agg.title} topics
            </span>
          ))}
          <span className="text-[#555]">=</span>
          <span className="text-[#888]">{totalSubtopics} total</span>
        </div>
      </div>

      {/* ── Level cards ──────────────────────────────────── */}
      <LevelCards
        levels={course.levels}
        activeId={activeLevel.id}
        courseId={course.id}
        onSelect={handleLevelChange}
      />

      {/* ── Level tabs bar ───────────────────────────────── */}
      <div className="mt-6 flex gap-1 overflow-x-auto border-b border-[#222]">
        {course.levels.map((level, idx) => {
          const active = level.id === activeLevel.id;
          const color = level.color ?? "#888";
          return (
            <button
              key={level.id}
              type="button"
              onClick={() => handleLevelChange(level.id)}
              className={`flex shrink-0 flex-col items-center px-5 py-2 transition-colors ${
                active ? "border-b-2" : "hover:bg-[#141414]"
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
              {level.description && (
                <span className="text-[10px] text-[#444]">
                  {level.description}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Content: sidebar + topics ────────────────────── */}
      <div className="mt-6 flex gap-6">
        {/* Module sidebar */}
        <div className="w-20 shrink-0">
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
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-md px-2 py-0.5 text-xs font-bold"
                    style={{
                      backgroundColor: activeLevel.color + "22",
                      color: activeLevel.color,
                    }}
                  >
                    L{activeLevelIdx}
                  </span>
                  <h2 className="text-base font-bold text-[#e5e5e5]">
                    {activeModule.title} Topics
                  </h2>
                </div>
                <span className="text-xs text-[#555]">
                  {activeModule.topics.length} sections ·{" "}
                  {activeModuleStats?.total ?? 0} items
                </span>
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
