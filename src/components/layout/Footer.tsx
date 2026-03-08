import Link from "next/link";
import {
  BookOpen,
  CheckSquare,
  Hash,
  Home,
  LayoutDashboard,
  Route,
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
              Structured learning paths for people who want a cleaner, more
              focused way to grow from fundamentals to real mastery.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-xs text-faint">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              Built for focused learners
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
                href="/dashboard"
                className="group flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
              >
                <LayoutDashboard className="h-4 w-4 shrink-0" />
                Dashboard
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
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            &copy; {year} Classroom. Built for focused learners.
          </p>

          <p className="text-xs text-faint">
            Learn in sequence. Build real depth.
          </p>
        </div>
      </div>
    </footer>
  );
}
