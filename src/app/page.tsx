"use client";

import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--c-t0)]">
          Your Learning Dashboard
        </h1>
        <p className="mt-1 text-sm text-[var(--c-t2)]">
          Pick a course and start learning at your own pace.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
