import { notFound } from "next/navigation";
import { getCourseById } from "@/data/courses";
import Breadcrumbs from "@/components/Breadcrumbs";
import LevelProgressHeader from "@/components/course/LevelProgressHeader";
import ModuleCard from "@/components/course/ModuleCard";

interface LevelPageProps {
  params: Promise<{ courseId: string; levelId: string }>;
}

export default async function LevelPage({ params }: LevelPageProps) {
  const { courseId, levelId } = await params;
  const course = getCourseById(courseId);
  if (!course) notFound();

  const levelIndex = course.levels.findIndex((l) => l.id === levelId);
  if (levelIndex === -1) notFound();

  const level = course.levels[levelIndex];

  return (
    <div className="app-container space-y-8 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: course.title, href: `/course/${course.id}` },
          { label: level.title },
        ]}
      />

      <LevelProgressHeader
        course={course}
        level={level}
        levelIndex={levelIndex}
      />

      {/* Modules */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-foreground">Modules</h2>
        <div className="space-y-4">
          {level.modules.map((mod) => (
            <ModuleCard
              key={mod.id}
              course={course}
              levelId={level.id}
              module={mod}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
