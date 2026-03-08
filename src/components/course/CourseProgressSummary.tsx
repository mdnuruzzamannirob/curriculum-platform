"use client";

import { Course } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { calcCourseProgress } from "@/utils/progress";
import { countSubtopics } from "@/utils/course";
import ProgressBar from "@/components/ProgressBar";
import { Skeleton } from "@/components/ui/skeleton";

interface CourseProgressSummaryProps {
  course: Course;
}

export default function CourseProgressSummary({
  course,
}: CourseProgressSummaryProps) {
  const { progress, isLoaded } = useProgress();
  const stats = calcCourseProgress(progress, course);
  const total = countSubtopics(course);

  if (!isLoaded) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-2.5 w-full rounded-full" />
        <Skeleton className="h-3.5 w-40 rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      <ProgressBar
        percentage={stats.percentage}
        size="md"
        color={course.color}
      />
      <p className="text-xs text-subtle">
        {stats.completed} of {total} subtopics completed
      </p>
    </div>
  );
}
