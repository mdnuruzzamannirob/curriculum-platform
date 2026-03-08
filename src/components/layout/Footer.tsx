import Link from "next/link";
import {
  BookOpen,
  CheckSquare,
  Hash,
  Home,
  Info,
  LayoutDashboard,
  Route,
  Settings,
  Sparkles,
} from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import { courses } from "@/data/courses";
import { countModules, countSubtopics, countTopics } from "@/utils/course";

const totalCourses = courses.length;
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="app-container py-14 sm:py-16">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.4fr_1fr]">
          {/* Brand */}
          <div className="space-y-5">
            <BrandLogo />

            <p className="max-w-sm text-sm text-subtle">
              Level-scoped roadmaps that tell you exactly what to learn at each
              developer stage — from entry-level basics to principal-level
              mastery.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-xs text-faint">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              Level-based developer roadmaps
            </div>
          </div>

          {/* Navigate */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-faint">
              Navigate
            </h4>

            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="group flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
              >
                <Home className="h-4 w-4 shrink-0" />
                Home
              </Link>

              <Link
                href="/course"
                className="group flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
              >
                <BookOpen className="h-4 w-4 shrink-0" />
                Roadmaps
              </Link>

              <Link
                href="/dashboard"
                className="group flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
              >
                <LayoutDashboard className="h-4 w-4 shrink-0" />
                Dashboard
              </Link>

              <Link
                href="/about"
                className="group flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
              >
                <Info className="h-4 w-4 shrink-0" />
                About
              </Link>

              <Link
                href="/account"
                className="group flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
              >
                <Settings className="h-4 w-4 shrink-0" />
                Account
              </Link>
            </nav>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-faint">
              Courses
            </h4>

            <nav className="flex flex-col gap-2">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/course/${course.id}`}
                  className="group flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
                >
                  <Route className="h-4 w-4 shrink-0" />
                  <span className="truncate">{course.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-faint">
              Platform
            </h4>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-card">
                  <BookOpen className="h-3.5 w-3.5" />
                </span>
                <span>
                  <span className="font-semibold text-foreground">
                    {totalCourses}
                  </span>{" "}
                  courses
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-card">
                  <LayoutDashboard className="h-3.5 w-3.5" />
                </span>
                <span>
                  <span className="font-semibold text-foreground">
                    {totalModules}
                  </span>{" "}
                  modules
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-card">
                  <Hash className="h-3.5 w-3.5" />
                </span>
                <span>
                  <span className="font-semibold text-foreground">
                    {totalTopics}
                  </span>{" "}
                  topics
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-card">
                  <CheckSquare className="h-3.5 w-3.5" />
                </span>
                <span>
                  <span className="font-semibold text-foreground">
                    {totalSubtopics}
                  </span>{" "}
                  subtopics
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            &copy; {year} DevPath. Level-based developer roadmaps.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="text-xs text-faint hover:text-muted-foreground"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-faint hover:text-muted-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-faint hover:text-muted-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
