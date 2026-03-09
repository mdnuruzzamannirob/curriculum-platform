"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { useProgress } from "@/context/ProgressContext";
import { calcCourseProgress, calcLevelProgress } from "@/utils/progress";
import { countSubtopics } from "@/utils/course";
import { AppIcon } from "@/lib/icons";
import ProgressBar from "@/components/ProgressBar";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardClient() {
  const { progress, isLoaded } = useProgress();

  const overallCompleted = courses.reduce((sum, course) => {
    const s = calcCourseProgress(progress, course);
    return sum + s.completed;
  }, 0);
  const overallInProgress = courses.reduce((sum, course) => {
    const s = calcCourseProgress(progress, course);
    return sum + s.inProgress;
  }, 0);
  const overallTotal = courses.reduce(
    (sum, course) => sum + countSubtopics(course),
    0,
  );
  const totalLevels = courses.reduce(
    (sum, course) => sum + course.levels.length,
    0,
  );
  const overallPct = overallTotal
    ? Math.round((overallCompleted / overallTotal) * 100)
    : 0;

  return (
    <div className="space-y-8">
      {/* Overall stats */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-faint">
          Overview
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {[
            {
              label: "Overall Progress",
              value: isLoaded ? `${overallPct}%` : null,
              sub: isLoaded
                ? `${overallCompleted} / ${overallTotal} subtopics`
                : null,
            },
            {
              label: "Completed",
              value: isLoaded ? String(overallCompleted) : null,
              sub: "subtopics mastered",
            },
            {
              label: "In Progress",
              value: isLoaded ? String(overallInProgress) : null,
              sub: "currently active",
            },
            {
              label: "Courses",
              value: String(courses.length),
              sub: "available tracks",
            },
            {
              label: "Levels",
              value: String(totalLevels),
              sub: "learning stages",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-xs text-subtle">{stat.label}</p>
              {isLoaded || stat.value !== null ? (
                <>
                  <p className="text-2xl font-black text-foreground">
                    {stat.value ?? "—"}
                  </p>
                  <p className="text-xs text-subtle">{stat.sub}</p>
                </>
              ) : (
                <>
                  <Skeleton className="h-7 w-16 rounded" />
                  <Skeleton className="mt-1 h-3.5 w-32 rounded" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Per-course progress */}
      <h2 className="mb-4 text-lg font-bold text-foreground">Your Courses</h2>
      <div className="space-y-5">
        {courses.map((course) => {
          const courseStats = calcCourseProgress(progress, course);

          return (
            <div
              key={course.id}
              data-accent={course.color}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Course header */}
              <div className="flex items-center gap-4 p-5 pb-4">
                <span
                  data-accent={course.color}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border accent-bg-soft-strong accent-text"
                >
                  <AppIcon
                    name={course.icon}
                    className="h-5 w-5"
                    strokeWidth={2.2}
                  />
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-bold text-card-foreground">
                      {course.title}
                    </p>
                    <Link
                      href={`/course/${course.id}`}
                      className="inline-flex items-center gap-1 hover:bg-card-hover border border-border px-4 rounded-full py-2 text-xs text-subtle hover:text-foreground transition-colors"
                    >
                      Open <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                  {isLoaded ? (
                    <p className="text-xs text-subtle mt-0.5">
                      {courseStats.completed} / {courseStats.total} subtopics ·{" "}
                      {courseStats.percentage}%
                    </p>
                  ) : (
                    <Skeleton className="mt-1 h-3.5 w-40 rounded" />
                  )}
                </div>
              </div>

              {isLoaded ? (
                <div className="px-5 pb-4">
                  <ProgressBar
                    percentage={courseStats.percentage}
                    size="sm"
                    color={course.color}
                    showLabel={false}
                  />
                </div>
              ) : (
                <div className="px-5 pb-4">
                  <Skeleton className="h-1.5 w-full rounded-full" />
                </div>
              )}

              {/* Level breakdown */}
              <div className="border-t border-border divide-y divide-border">
                {course.levels.map((level, idx) => {
                  const ls = calcLevelProgress(progress, course.id, level);
                  const totalSubs = level.modules.reduce(
                    (s, m) =>
                      s +
                      m.topics.reduce((t, top) => t + top.subtopics.length, 0),
                    0,
                  );

                  return (
                    <Link
                      key={level.id}
                      href={`/course/${course.id}/${level.id}`}
                      data-accent={level.color}
                      className="group flex items-center gap-3 px-5 py-3 hover:bg-card-hover transition-colors"
                    >
                      <span
                        data-accent={level.color}
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-border text-[10px] font-black accent-bg-soft accent-text"
                      >
                        L{idx}
                      </span>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-card-foreground truncate">
                          {level.title}
                        </p>
                      </div>

                      {isLoaded ? (
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="w-24 hidden sm:block">
                            <ProgressBar
                              percentage={ls.percentage}
                              size="sm"
                              color={level.color}
                              showLabel={false}
                            />
                          </div>
                          <span className="text-xs text-subtle w-16 text-right">
                            {ls.completed}/{totalSubs}
                          </span>
                        </div>
                      ) : (
                        <Skeleton className="h-3 w-20 rounded" />
                      )}

                      <ArrowRight className="h-3.5 w-3.5 text-disabled group-hover:text-subtle transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
