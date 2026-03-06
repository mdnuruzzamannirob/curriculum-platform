"use client";

import { use, useState, Suspense } from "react";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { getCourseById } from "@/data/courses";
import { useProgress } from "@/context/ProgressContext";
import { calcCourseProgress } from "@/utils/progress";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProgressBar from "@/components/ProgressBar";
import LevelTabs from "@/components/LevelTabs";
import ModuleTabs from "@/components/ModuleTabs";
import TopicList from "@/components/TopicList";

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

  const { progress, isLoaded } = useProgress();
  const courseStats = calcCourseProgress(progress, course);

  const activeLevel =
    course.levels.find((l) => l.id === activeLevelId) ?? course.levels[0];
  const resolvedModuleId =
    activeModuleId && activeLevel.modules.some((m) => m.id === activeModuleId)
      ? activeModuleId
      : (activeLevel.modules[0]?.id ?? "");
  const activeModule = activeLevel.modules.find(
    (m) => m.id === resolvedModuleId,
  );

  function handleLevelChange(id: string) {
    setActiveLevelId(id);
    setActiveModuleId(null); // reset module when changing level
  }

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Dashboard", href: "/" }, { label: course.title }]}
      />

      {/* Course header */}
      <div className="mt-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{course.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
            <p className="text-sm text-gray-500">{course.description}</p>
          </div>
        </div>
        {isLoaded && (
          <div className="mt-4 max-w-md">
            <ProgressBar percentage={courseStats.percentage} size="lg" />
            <p className="mt-1 text-xs text-gray-400">
              {courseStats.completed}/{courseStats.total} subtopics completed
            </p>
          </div>
        )}
      </div>

      {/* Level selector */}
      <LevelTabs
        levels={course.levels}
        activeId={activeLevel.id}
        courseId={course.id}
        onSelect={handleLevelChange}
      />

      {/* Module tabs */}
      {activeLevel.modules.length > 0 && (
        <div className="mt-6">
          <ModuleTabs
            modules={activeLevel.modules}
            activeId={resolvedModuleId}
            courseId={course.id}
            levelId={activeLevel.id}
            onSelect={(id) => setActiveModuleId(id)}
          />
        </div>
      )}

      {/* Topic list */}
      {activeModule && (
        <div className="mt-6 rounded-xl border border-gray-200 bg-white">
          <TopicList
            topics={activeModule.topics}
            courseId={course.id}
            levelId={activeLevel.id}
            moduleId={activeModule.id}
          />
        </div>
      )}
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
        <div className="py-12 text-center text-gray-400">Loading course…</div>
      }
    >
      <CourseContent courseId={courseId} />
    </Suspense>
  );
}
