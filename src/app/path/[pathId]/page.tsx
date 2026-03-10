import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowDown, ArrowRight, Shuffle } from "lucide-react";
import { getPathById, paths } from "@/data/paths";
import { getCourseById } from "@/data/courses";
import { AppIcon } from "@/lib/icons";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PathDetailPageProps {
  params: Promise<{ pathId: string }>;
}

export function generateStaticParams() {
  return paths.map((p) => ({ pathId: p.id }));
}

export default async function PathDetailPage({ params }: PathDetailPageProps) {
  const { pathId } = await params;
  const path = getPathById(pathId);
  if (!path) notFound();

  const totalRoadmaps = path.phases.reduce((sum, p) => sum + p.steps.length, 0);

  const firstStep = path.phases[0]?.steps[0];
  const firstHref = firstStep
    ? firstStep.levelId
      ? `/roadmap/${firstStep.roadmapId}/${firstStep.levelId}`
      : `/roadmap/${firstStep.roadmapId}`
    : "/roadmap";

  return (
    <div className="app-container space-y-6 py-4 sm:py-6 lg:py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Paths", href: "/path" },
          { label: path.title },
        ]}
      />

      {/* Hero card */}
      <div
        data-accent={path.color}
        className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6 sm:p-8"
      >
        <div className="flex items-start gap-4">
          <span
            data-accent={path.color}
            className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border accent-bg-soft-strong accent-text"
          >
            <AppIcon name={path.icon} className="h-7 w-7" strokeWidth={2.2} />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-black text-foreground sm:text-3xl">
                {path.title}
              </h1>
              <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                Learning Path
              </span>
            </div>
            <p className="mt-1 text-sm text-subtle">{path.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-subtle">
          <span>
            <span className="font-semibold text-card-foreground">
              {path.phases.length}
            </span>{" "}
            phases
          </span>
          <span>
            <span className="font-semibold text-card-foreground">
              {totalRoadmaps}
            </span>{" "}
            roadmaps
          </span>
        </div>
      </div>

      {/* Phase list */}
      <div className="space-y-1">
        {path.phases.map((phase, phaseIdx) => {
          const resolvedSteps = phase.steps.map((step) => ({
            step,
            course: getCourseById(step.roadmapId),
          }));

          return (
            <div key={phase.id}>
              {/* Phase card */}
              <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
                {/* Phase header */}
                <div className="mb-5 flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-sm font-black text-foreground">
                    {phaseIdx + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-black text-foreground">
                        {phase.title}
                      </h2>
                      {phase.isAlternative && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2 py-0.5 text-[11px] font-medium text-secondary-foreground">
                          <Shuffle className="h-3 w-3" />
                          Pick one
                        </span>
                      )}
                    </div>
                    {phase.description && (
                      <p className="mt-0.5 text-sm text-subtle">
                        {phase.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Roadmap step cards */}
                <div
                  className={`grid gap-3 ${
                    resolvedSteps.length > 1 ? "sm:grid-cols-2" : ""
                  }`}
                >
                  {resolvedSteps.map(({ step, course }) => {
                    if (!course) return null;
                    const href = step.levelId
                      ? `/roadmap/${course.id}/${step.levelId}`
                      : `/roadmap/${course.id}`;
                    return (
                      <Link
                        key={`${step.roadmapId}-${step.levelId ?? "root"}`}
                        href={href}
                        data-accent={course.color}
                        className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 hover:border-border-strong hover:bg-card-hover"
                      >
                        <span
                          data-accent={course.color}
                          className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border accent-bg-soft-strong accent-text"
                        >
                          <AppIcon
                            name={course.icon}
                            className="h-5 w-5"
                            strokeWidth={2.2}
                          />
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <h3 className="font-bold text-card-foreground group-hover:opacity-90">
                              {course.title}
                            </h3>
                            {step.isOptional && (
                              <span className="rounded-full border border-border px-1.5 py-0.5 text-[10px] font-medium text-subtle">
                                optional
                              </span>
                            )}
                          </div>
                          {step.note && (
                            <p className="mt-0.5 text-xs text-subtle">
                              {step.note}
                            </p>
                          )}
                        </div>

                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-disabled group-hover:text-subtle" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Connector arrow */}
              {phaseIdx < path.phases.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-5 w-5 text-border-strong" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-sm font-medium text-foreground">
          Ready to start? Begin Phase 1 and follow the path step by step.
        </p>
        <Link
          href={firstHref}
          className="mt-3 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-card-hover"
        >
          Start Phase 1
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
