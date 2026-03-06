"use client";

import { courses } from "@/data/courses";
import BrandLogo from "@/components/BrandLogo";
import CourseCard from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { countModules, countSubtopics, countTopics } from "@/utils/course";

export default function DashboardPage() {
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

  return (
    <div className="space-y-8 pb-4">
      <Card className="surface-mesh overflow-hidden">
        <CardContent className="grid gap-8 px-6 py-8 lg:grid-cols-[1.15fr,0.85fr] lg:px-8">
          <div className="space-y-5">
            <Badge variant="muted" className="w-fit">
              Curated Roadmap Workspace
            </Badge>
            <div className="space-y-3">
              <BrandLogo className="pointer-events-none" />
              <h1 className="max-w-2xl text-3xl font-black tracking-tight text-text-primary sm:text-5xl">
                Learn in sequence, keep context, and finish what you start.
              </h1>
              <p className="max-w-xl text-base text-text-subtle sm:text-lg">
                Pathshala turns sprawling topic lists into a focused learning
                map with progress tracking, quick search, and modular study
                paths.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="app-panel rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                Active Tracks
              </p>
              <p className="mt-3 text-3xl font-black text-text-primary">
                {courses.length}
              </p>
              <p className="text-sm text-text-subtle">
                Structured learning paths
              </p>
            </div>
            <div className="app-panel rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                Modules + Topics
              </p>
              <p className="mt-3 text-3xl font-black text-text-primary">
                {totalModules}
              </p>
              <p className="text-sm text-text-subtle">
                Mapped across {totalTopics} topics
              </p>
            </div>
            <div className="app-panel rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                Checkpoints
              </p>
              <p className="mt-3 text-3xl font-black text-text-primary">
                {totalSubtopics}
              </p>
              <p className="text-sm text-text-subtle">
                Small wins you can actually track
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-text-primary">
            Course Library
          </h2>
          <p className="mt-1 text-sm text-text-subtle">
            Pick a roadmap and move through it module by module.
          </p>
        </div>
        <Badge variant="muted" className="w-fit">
          {courses.length} course{courses.length === 1 ? "" : "s"}
        </Badge>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
