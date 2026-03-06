"use client";

import Link from "next/link";
import { Course } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcCourseProgress, calcModuleProgress } from "@/utils/progress";
import ProgressBar from "./ProgressBar";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { progress, isLoaded } = useProgress();
  const courseStats = calcCourseProgress(progress, course);

  // Aggregate module stats across all levels
  const moduleAgg: Record<
    string,
    { title: string; color: string; completed: number; total: number }
  > = {};
  for (const level of course.levels) {
    for (const mod of level.modules) {
      const mp = calcModuleProgress(progress, course.id, level.id, mod);
      if (!moduleAgg[mod.id]) {
        moduleAgg[mod.id] = {
          title: mod.title,
          color: mod.color ?? "#888",
          completed: 0,
          total: 0,
        };
      }
      moduleAgg[mod.id].completed += mp.completed;
      moduleAgg[mod.id].total += mp.total;
    }
  }

  return (
    <Link
      href={`/course/${course.id}`}
      className="group block rounded-xl border border-bd bg-s0 p-6 transition hover:border-bd3"
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          className="text-2xl font-bold font-mono"
          style={{ color: course.color }}
        >
          {course.icon}
        </span>
        <div>
          <h3 className="text-lg font-bold text-t0 group-hover:opacity-80 transition-opacity">
            {course.title}
          </h3>
          <p className="text-sm text-t2">{course.description}</p>
        </div>
      </div>

      {isLoaded && (
        <>
          <ProgressBar percentage={courseStats.percentage} size="md" />
          <p className="mt-2 text-xs text-t3">
            {courseStats.completed}/{courseStats.total} subtopics completed
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {Object.entries(moduleAgg).map(([id, agg]) => (
              <span
                key={id}
                className="text-xs font-mono"
                style={{ color: agg.color }}
              >
                {agg.completed}/{agg.total} {agg.title}
              </span>
            ))}
          </div>
        </>
      )}
    </Link>
  );
}
