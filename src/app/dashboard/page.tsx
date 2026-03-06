"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookMarked,
  CircleCheckBig,
  Compass,
  Layers3,
  ListChecks,
} from "lucide-react";
import CourseCard from "@/components/CourseCard";
import Container from "@/components/Container";
import ProgressBar from "@/components/ProgressBar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useProgress } from "@/context/ProgressContext";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import { countModules, countSubtopics, countTopics } from "@/utils/course";
import { calcCourseProgress } from "@/utils/progress";

export default function DashboardPage() {
  const { progress, isLoaded } = useProgress();

  const courseSummaries = courses.map((course) => ({
    course,
    stats: calcCourseProgress(progress, course),
  }));

  const totalModules = courses.reduce(
    (sum, course) => sum + countModules(course),
    0,
  );
  const totalTopics = courses.reduce(
    (sum, course) => sum + countTopics(course),
    0,
  );
  const totalSubtopics = courses.reduce(
    (sum, course) => sum + countSubtopics(course),
    0,
  );

  const completedSubtopics = courseSummaries.reduce(
    (sum, entry) => sum + entry.stats.completed,
    0,
  );
  const activeCourses = courseSummaries.filter(
    (entry) => entry.stats.completed > 0 || entry.stats.inProgress > 0,
  ).length;
  const overallPercentage = totalSubtopics
    ? Math.round((completedSubtopics / totalSubtopics) * 100)
    : 0;
  const nextCourse =
    courseSummaries.find((entry) => entry.stats.percentage < 100)?.course ??
    courses[0];

  return (
    <Container className="py-8 pb-14">
      <div className="space-y-10">
        <section className="space-y-6">
          <div className="flex flex-col gap-5 border-b border-border-default pb-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <Badge
                variant="muted"
                className="w-fit gap-2 rounded-full px-3 py-1"
              >
                <ListChecks className="h-3.5 w-3.5" />
                Dashboard
              </Badge>
              <div>
                <h1 className="text-3xl font-black tracking-[-0.05em] text-text-primary sm:text-4xl">
                  Keep your study flow structured.
                </h1>
                <p className="mt-2 max-w-2xl text-base leading-7 text-text-subtle">
                  This page is for active learning: progress, quick
                  continuation, and a clean overview of what matters now.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {nextCourse && (
                <Link
                  href={`/course/${nextCourse.id}`}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "rounded-full px-5",
                  )}
                >
                  Continue {nextCourse.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "subtle", size: "default" }),
                  "rounded-full px-5",
                )}
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card className="app-panel">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl accent-bg-soft">
                  <BarChart3 className="h-4 w-4 accent-text" />
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                  Active Courses
                </p>
                <p className="mt-2 text-4xl font-black text-text-primary">
                  {isLoaded ? (
                    activeCourses
                  ) : (
                    <span className="text-text-faint">—</span>
                  )}
                </p>
                <p className="mt-1 text-sm text-text-subtle">
                  Courses with progress started.
                </p>
              </CardContent>
            </Card>
            <Card className="app-panel">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl accent-bg-soft">
                  <CircleCheckBig className="h-4 w-4 accent-text" />
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                  Completed Steps
                </p>
                <p className="mt-2 text-4xl font-black text-text-primary">
                  {isLoaded ? (
                    completedSubtopics
                  ) : (
                    <span className="text-text-faint">—</span>
                  )}
                </p>
                <p className="mt-1 text-sm text-text-subtle">
                  Checkpoints finished across all paths.
                </p>
              </CardContent>
            </Card>
            <Card className="app-panel">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl accent-bg-soft">
                  <Layers3 className="h-4 w-4 accent-text" />
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                  Library Depth
                </p>
                <p className="mt-2 text-4xl font-black text-text-primary">
                  {totalModules}
                </p>
                <p className="mt-1 text-sm text-text-subtle">
                  Modules across {totalTopics} topics.
                </p>
              </CardContent>
            </Card>
            <Card className="app-panel">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl accent-bg-soft">
                  <BookMarked className="h-4 w-4 accent-text" />
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                  Study Surface
                </p>
                <p className="mt-2 text-4xl font-black text-text-primary">
                  {totalSubtopics}
                </p>
                <p className="mt-1 text-sm text-text-subtle">
                  Checkpoint-level steps to complete.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.3fr,0.7fr]">
          <Card className="app-panel">
            <CardContent className="space-y-5 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-text-primary">
                    Overall Progress
                  </h2>
                  <p className="mt-1 text-sm text-text-subtle">
                    A single view of your completion across the whole learning
                    library.
                  </p>
                </div>
                <Badge variant="muted" className="rounded-full px-3 py-1">
                  {overallPercentage}% complete
                </Badge>
              </div>

              {isLoaded ? (
                <div className="rounded-3xl border border-border-default bg-surface-emphasis p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                        Checkpoint Progress
                      </p>
                      <p className="mt-2 text-3xl font-black text-text-primary">
                        {completedSubtopics}/{totalSubtopics}
                      </p>
                    </div>
                    <p className="text-sm text-text-subtle">
                      Active in {activeCourses} course
                      {activeCourses === 1 ? "" : "s"}
                    </p>
                  </div>
                  <div className="mt-4">
                    <ProgressBar percentage={overallPercentage} size="md" />
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl border border-border-default bg-surface-emphasis p-5">
                  <Skeleton className="h-3 w-40" />
                  <Skeleton className="mt-3 h-9 w-36" />
                  <Skeleton className="mt-4 h-3 w-full" />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="app-panel overflow-hidden">
            <CardContent className="space-y-5 p-6">
              <Badge
                variant="muted"
                className="w-fit gap-2 rounded-full px-3 py-1"
              >
                <Compass className="h-3.5 w-3.5" />
                Next move
              </Badge>
              <div>
                <h3 className="text-xl font-black tracking-tight text-text-primary">
                  Pick up where you left off.
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-subtle">
                  Your active course is your best next step. Open it to work
                  through modules and checkpoints at your own pace.
                </p>
              </div>
              {nextCourse && (
                <div className="rounded-2xl border border-border-default bg-surface-emphasis p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-text-faint">
                    Active track
                  </p>
                  <p className="mt-2 text-base font-bold text-text-primary">
                    {nextCourse.title}
                  </p>
                  <Link
                    href={`/course/${nextCourse.id}`}
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "mt-3 w-full rounded-full",
                    )}
                  >
                    Continue learning
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-text-primary">
                Your Courses
              </h2>
              <p className="mt-1 text-sm text-text-subtle">
                Pick up where you left off and keep each learning path visible.
              </p>
            </div>
            <Badge variant="muted" className="w-fit rounded-full px-3 py-1">
              {courses.length} course{courses.length === 1 ? "" : "s"}
            </Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
