"use client";

import Link from "next/link";
import { Course } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcCourseProgress, calcLevelProgress } from "@/utils/progress";
import ProgressBar from "./ProgressBar";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { progress, isLoaded } = useProgress();
  const courseStats = calcCourseProgress(progress, course);

  return (
    <Link
      href={`/course/${course.id}`}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-gray-300"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">{course.icon}</span>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500">{course.description}</p>
        </div>
      </div>

      {isLoaded && (
        <>
          <ProgressBar percentage={courseStats.percentage} size="md" />
          <p className="mt-2 text-xs text-gray-400">
            {courseStats.completed}/{courseStats.total} subtopics completed
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1">
            {course.levels.map((level) => {
              const lp = calcLevelProgress(progress, course.id, level);
              return (
                <div
                  key={level.id}
                  className="flex items-center justify-between text-xs text-gray-500"
                >
                  <span>{level.title}</span>
                  <span className="font-medium">{lp.percentage}%</span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </Link>
  );
}
