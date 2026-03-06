import Link from "next/link";
import { Home, LayoutDashboard } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { courses } from "@/data/courses";
import { countModules, countSubtopics, countTopics } from "@/utils/course";
import Container from "./Container";

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

export default function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-default bg-surface/30">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand column */}
          <div className="space-y-4">
            <BrandLogo />
            <p className="max-w-xs text-sm leading-6 text-text-subtle">
              Structured learning paths for people who want a cleaner way to
              progress from fundamentals to mastery.
            </p>
          </div>

          {/* Navigate */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-faint">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary"
              >
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary"
              >
                <LayoutDashboard className="h-3.5 w-3.5" />
                Dashboard
              </Link>
            </nav>
          </div>

          {/* Library stats */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-faint">
              Library
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-text-subtle">
              <li>
                {totalCourses} learning track{totalCourses !== 1 ? "s" : ""}
              </li>
              <li>
                {totalModules} modules &middot; {totalTopics} topics
              </li>
              <li>{totalSubtopics} checkpoints</li>
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
      </Container>
    </footer>
  );
}
