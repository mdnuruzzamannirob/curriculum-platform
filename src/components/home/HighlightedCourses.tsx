import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import SectionTop from "../SectionTop";

export default function HighlightedCourses() {
  const highlightedCourses = courses.slice(0, 3);

  return (
    <section id="roadmaps" className="space-y-6 app-container  py-16 sm:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionTop
          titleTop="Start with the right path,"
          titleBottom="not random tutorials"
          description="Start from the most relevant learning track and move into the
            dashboard when you want a full progress view across all your
            roadmaps."
        />

        <Link
          href="/dashboard"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card-hover"
        >
          Open Dashboard
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlightedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
