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
    <footer className="border-t border-border-default bg-surface/20">
      <div className="app-container py-12">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.4fr_1fr]">
          {/* Brand */}
          <div className="space-y-4">
            <BrandLogo />
            <p className="max-w-xs text-sm leading-6 text-text-subtle">
              Structured learning paths for people who want a cleaner way to
              progress from fundamentals to mastery.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-md accent-bg-soft">
                <Sparkles className="h-3 w-3 accent-text" />
              </span>
              <span className="text-xs text-text-faint">
                Built for focused learners
              </span>
            </div>
          </div>

          {/* Navigate */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-faint">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                <Home className="h-3.5 w-3.5 shrink-0" />
                Home
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                <LayoutDashboard className="h-3.5 w-3.5 shrink-0" />
                Dashboard
              </Link>
            </nav>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-faint">
              Courses
            </h4>
            <nav className="flex flex-col gap-2">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/course/${course.id}`}
                  className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  <Route className="h-3.5 w-3.5 shrink-0" />
                  {course.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Library stats */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-faint">
              Library
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg accent-bg-soft">
                  <BookOpen className="h-3.5 w-3.5 accent-text" />
                </span>
                <span className="text-text-subtle">
                  <strong className="font-semibold text-text-primary">
                    {totalCourses}
                  </strong>{" "}
                  track{totalCourses !== 1 ? "s" : ""}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg accent-bg-soft">
                  <Hash className="h-3.5 w-3.5 accent-text" />
                </span>
                <span className="text-text-subtle">
                  <strong className="font-semibold text-text-primary">
                    {totalModules}
                  </strong>{" "}
                  modules &middot; {totalTopics} topics
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg accent-bg-soft">
                  <CheckSquare className="h-3.5 w-3.5 accent-text" />
                </span>
                <span className="text-text-subtle">
                  <strong className="font-semibold text-text-primary">
                    {totalSubtopics}
                  </strong>{" "}
                  checkpoints
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-1.5 border-t border-border-default pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-faint">
            &copy; {year} Pathshala. Built for focused learners.
          </p>
          <p className="text-xs text-text-faint">
            Learn in sequence. Build real depth.
          </p>
        </div>
      </div>
    </footer>
  );
}
