import Link from "next/link";
import {
  ArrowRight,
  Compass,
  LayoutDashboard,
  Sparkles,
  Stars,
  Trophy,
} from "lucide-react";
import { courses } from "@/data/courses";
import BrandLogo from "@/components/BrandLogo";
import CourseCard from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { countModules, countSubtopics, countTopics } from "@/utils/course";

export default function HomePage() {
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
  const highlightedCourses = courses.slice(0, 3);
  const featuredCourse = courses[0];

  return (
    <div className="space-y-10 pb-6">
      <section className="relative overflow-hidden rounded-4xl border border-border-default bg-surface/80">
        <div className="absolute inset-0 surface-mesh opacity-60" />
        <div className="absolute -left-12 top-12 h-40 w-40 rounded-full bg-[rgba(var(--accent-rgb)/0.16)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[rgba(56,189,248,0.14)] blur-3xl" />
        <div className="relative grid gap-8 px-6 py-8 lg:grid-cols-[1.25fr,0.75fr] lg:px-8 lg:py-10">
          <div className="space-y-6">
            <Badge
              variant="muted"
              className="w-fit gap-2 rounded-full px-3 py-1"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Curated Learning Platform
            </Badge>
            <BrandLogo className="pointer-events-none" />
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-black tracking-[-0.06em] text-text-primary sm:text-5xl lg:text-6xl">
                Roadmaps that keep your learning focused, visible, and
                finishable.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-text-subtle sm:text-lg">
                Start from a clean landing page, jump into your dashboard when
                you want progress context, and move through each course with a
                sharper sense of direction.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ size: "default" }),
                  "rounded-full px-5",
                )}
              >
                Go to Dashboard
                <LayoutDashboard className="h-4 w-4" />
              </Link>
              {featuredCourse && (
                <Link
                  href={`/course/${featuredCourse.id}`}
                  className={cn(
                    buttonVariants({ variant: "subtle", size: "default" }),
                    "rounded-full px-5",
                  )}
                >
                  Explore {featuredCourse.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="app-panel rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                  Tracks
                </p>
                <p className="mt-3 text-3xl font-black text-text-primary">
                  {courses.length}
                </p>
                <p className="text-sm text-text-subtle">Ready to start</p>
              </div>
              <div className="app-panel rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-text-faint">
                  Depth
                </p>
                <p className="mt-3 text-3xl font-black text-text-primary">
                  {totalModules}
                </p>
                <p className="text-sm text-text-subtle">
                  Modules across {totalTopics} topics
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
                  Granular progress markers
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <Card className="app-panel overflow-hidden border-border-default/80 bg-surface/80">
              <CardContent className="space-y-4 p-5">
                <Badge
                  variant="muted"
                  className="w-fit gap-2 rounded-full px-3 py-1"
                >
                  <Compass className="h-3.5 w-3.5" />
                  Why it feels cleaner
                </Badge>
                <div className="space-y-3">
                  <div className="rounded-2xl border border-border-default bg-surface-emphasis p-4">
                    <p className="text-sm font-semibold text-text-primary">
                      Landing page for orientation
                    </p>
                    <p className="mt-1 text-sm text-text-subtle">
                      Banner, featured learning paths, and product context
                      without dashboard clutter.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border-default bg-surface-emphasis p-4">
                    <p className="text-sm font-semibold text-text-primary">
                      Dashboard for active study
                    </p>
                    <p className="mt-1 text-sm text-text-subtle">
                      Progress, course cards, and focused next actions in one
                      dedicated place.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border-default bg-surface-emphasis p-4">
                    <p className="text-sm font-semibold text-text-primary">
                      Course pages for execution
                    </p>
                    <p className="mt-1 text-sm text-text-subtle">
                      Modules, topics, and checkpoints stay close to the work
                      itself.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-text-primary sm:text-3xl">
              Highlighted Courses
            </h2>
            <p className="mt-1 text-sm text-text-subtle">
              Start from the most relevant path and move into the dashboard when
              you want the full progress view.
            </p>
          </div>
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ variant: "subtle", size: "sm" }),
              "w-fit rounded-full",
            )}
          >
            Open full dashboard
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlightedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="app-panel lg:col-span-2">
          <CardContent className="grid gap-4 p-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border-default bg-surface-emphasis p-4">
              <Stars className="h-5 w-5 text-text-muted" />
              <p className="mt-3 text-sm font-semibold text-text-primary">
                Clear entry point
              </p>
              <p className="mt-1 text-sm text-text-subtle">
                Home introduces the platform instead of mixing onboarding with
                active progress.
              </p>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-emphasis p-4">
              <Trophy className="h-5 w-5 text-text-muted" />
              <p className="mt-3 text-sm font-semibold text-text-primary">
                Progress when you need it
              </p>
              <p className="mt-1 text-sm text-text-subtle">
                Dashboard becomes the working surface for daily study and
                tracking.
              </p>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-emphasis p-4">
              <Compass className="h-5 w-5 text-text-muted" />
              <p className="mt-3 text-sm font-semibold text-text-primary">
                Focused navigation
              </p>
              <p className="mt-1 text-sm text-text-subtle">
                Course pages stay dedicated to modules, topics, and next
                checkpoints.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="app-panel overflow-hidden">
          <CardContent className="space-y-4 p-6">
            <Badge
              variant="muted"
              className="w-fit gap-2 rounded-full px-3 py-1"
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
              Ready to study
            </Badge>
            <div>
              <h3 className="text-xl font-black tracking-tight text-text-primary">
                Jump into your dashboard.
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-subtle">
                Use the dedicated dashboard view for progress, course access,
                and a cleaner study routine.
              </p>
            </div>
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "default" }),
                "w-full rounded-full",
              )}
            >
              Open Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
