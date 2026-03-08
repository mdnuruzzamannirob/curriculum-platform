"use client";

import Link from "next/link";
import { Course } from "@/types";
import { useProgress } from "@/context/ProgressContext";
import { AppIcon } from "@/lib/icons";
import { calcCourseProgress, calcModuleProgress } from "@/utils/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import ProgressBar from "./ProgressBar";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { progress, isLoaded } = useProgress();
  const courseStats = calcCourseProgress(progress, course);

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
    <Link href={`/course/${course.id}`} className="group block">
      <Card className="h-full border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-border-strong group-hover:bg-card-hover">
        <CardHeader className="pb-4">
          <div className="flex items-start gap-3">
            <span
              data-accent={course.color}
              className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-card accent-bg-soft-strong accent-text"
            >
              <AppIcon
                name={course.icon}
                className="h-6 w-6"
                strokeWidth={2.2}
              />
            </span>

            <div className="space-y-1">
              <CardTitle className="text-lg font-black text-card-foreground transition-opacity group-hover:opacity-90">
                {course.title}
              </CardTitle>

              <CardDescription className="text-sm text-subtle">
                {course.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          {isLoaded ? (
            <>
              <ProgressBar percentage={courseStats.percentage} size="md" />

              <p className="text-xs text-faint">
                {courseStats.completed}/{courseStats.total} subtopics completed
              </p>

              <div className="flex flex-wrap gap-2">
                {Object.entries(moduleAgg).map(([id, agg]) => (
                  <span
                    key={id}
                    data-accent={agg.color}
                    className="rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium accent-bg-soft accent-text"
                  >
                    {agg.completed}/{agg.total} {agg.title}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-40" />

              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-28 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
                <Skeleton className="h-8 w-32 rounded-full" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
