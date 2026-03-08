import Link from "next/link";
import { courses } from "@/data/courses";
import { countModules, countSubtopics, countTopics } from "@/utils/course";
import { AppIcon } from "@/lib/icons";
import Breadcrumbs from "@/components/Breadcrumbs";
import CourseProgressSummary from "@/components/course/CourseProgressSummary";
import SectionTop from "@/components/SectionTop";
import { ArrowRight } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="app-container space-y-10 py-10">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />

      <SectionTop
        titleTop="All Learning"
        titleBottom="Roadmaps"
        description="Pick a track and follow the structured path from beginner to mastery. Every course is split into levels so you always know where you stand."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => {
          const totalModules = countModules(course);
          const totalTopics = countTopics(course);
          const totalSubtopics = countSubtopics(course);

          return (
            <Link
              key={course.id}
              href={`/course/${course.id}`}
              data-accent={course.color}
              className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:bg-card-hover"
            >
              {/* Icon + title */}
              <div className="flex items-start gap-4">
                <span
                  data-accent={course.color}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border accent-bg-soft-strong accent-text"
                >
                  <AppIcon
                    name={course.icon}
                    className="h-6 w-6"
                    strokeWidth={2.2}
                  />
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="font-black text-card-foreground group-hover:opacity-90">
                    {course.title}
                  </h2>
                  <p className="mt-0.5 text-sm text-subtle line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-disabled transition-transform group-hover:translate-x-0.5 group-hover:text-subtle" />
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Levels", value: course.levels.length },
                  { label: "Modules", value: totalModules },
                  { label: "Topics", value: totalTopics },
                  { label: "Subtopics", value: totalSubtopics },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-xl border border-border bg-background px-3 py-2 text-center"
                  >
                    <span className="text-sm font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-subtle">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <CourseProgressSummary course={course} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
