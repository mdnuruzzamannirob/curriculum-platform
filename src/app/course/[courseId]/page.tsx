import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getCourseById } from "@/data/courses";
import { AppIcon } from "@/lib/icons";
import { countSubtopics, countTopics, countModules } from "@/utils/course";
import Breadcrumbs from "@/components/Breadcrumbs";
import CourseProgressSummary from "@/components/course/CourseProgressSummary";
import LevelCard from "@/components/course/LevelCard";
import Link from "next/link";

interface CoursePageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = getCourseById(courseId);
  if (!course) notFound();

  const totalModules = countModules(course);
  const totalTopics = countTopics(course);
  const totalSubtopics = countSubtopics(course);

  return (
    <div className="app-container space-y-6 py-8">
      {/* Back + breadcrumbs */}
      <div className="flex items-center gap-3">
        <Link
          href="/course"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-card-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-card-hover"
          aria-label="Back to courses"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Courses", href: "/course" },
            { label: course.title },
          ]}
        />
      </div>

      {/* Course header card */}
      <div
        data-accent={course.color}
        className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8"
      >
        <div className="flex items-start gap-4">
          <span
            data-accent={course.color}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border accent-bg-soft-strong accent-text"
          >
            <AppIcon name={course.icon} className="h-7 w-7" strokeWidth={2.2} />
          </span>
          <div>
            <h1 className="text-2xl font-black text-foreground sm:text-3xl">
              {course.title}
            </h1>
            <p className="mt-1 text-sm text-subtle">{course.description}</p>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-6 text-sm text-subtle">
          <span>
            <span className="font-semibold text-card-foreground">
              {course.levels.length}
            </span>{" "}
            levels
          </span>
          <span>
            <span className="font-semibold text-card-foreground">
              {totalModules}
            </span>{" "}
            modules
          </span>
          <span>
            <span className="font-semibold text-card-foreground">
              {totalTopics}
            </span>{" "}
            topics
          </span>
          <span>
            <span className="font-semibold text-card-foreground">
              {totalSubtopics}
            </span>{" "}
            subtopics
          </span>
        </div>

        <CourseProgressSummary course={course} />
      </div>

      {/* Level cards */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-foreground">
          Learning Levels
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.levels.map((level, index) => (
            <LevelCard
              key={level.id}
              course={course}
              level={level}
              levelIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
