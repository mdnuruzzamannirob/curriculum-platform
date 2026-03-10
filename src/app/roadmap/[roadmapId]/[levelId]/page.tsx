import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getCourseById } from "@/data/courses";
import Breadcrumbs from "@/components/Breadcrumbs";
import LevelProgressHeader from "@/components/roadmap/LevelProgressHeader";
import ModuleCard from "@/components/roadmap/ModuleCard";

interface LevelPageProps {
  params: Promise<{ roadmapId: string; levelId: string }>;
}

export default async function LevelPage({ params }: LevelPageProps) {
  const { roadmapId, levelId } = await params;
  const course = getCourseById(roadmapId);
  if (!course) notFound();

  const levelIndex = course.levels.findIndex((l) => l.id === levelId);
  if (levelIndex === -1) notFound();

  const level = course.levels[levelIndex];
  const prevLevel = course.levels[levelIndex - 1];
  const nextLevel = course.levels[levelIndex + 1];

  return (
    <div className="app-container space-y-6 py-4 sm:py-6 lg:py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Roadmaps", href: "/roadmap" },
          { label: course.title, href: `/roadmap/${course.id}` },
          { label: level.title },
        ]}
      />

      <LevelProgressHeader
        course={course}
        level={level}
        levelIndex={levelIndex}
      />

      {/* Modules */}
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

      {/* Level navigation */}
      {(prevLevel || nextLevel) && (
        <div className="flex items-center justify-between gap-4 border-t border-border pt-6">
          {prevLevel ? (
            <Link
              href={`/roadmap/${course.id}/${prevLevel.id}`}
              className="group flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-card-foreground hover:-translate-y-0.5 hover:bg-card-hover"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5" />
              <span className="line-clamp-1 max-w-40 sm:max-w-xs">
                {prevLevel.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextLevel && (
            <Link
              href={`/roadmap/${course.id}/${nextLevel.id}`}
              className="group flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-card-foreground hover:-translate-y-0.5 hover:bg-card-hover"
            >
              <span className="line-clamp-1 max-w-40 sm:max-w-xs">
                {nextLevel.title}
              </span>
              <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
