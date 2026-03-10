import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import { paths } from "@/data/paths";
import { getCourseById } from "@/data/courses";
import { AppIcon } from "@/lib/icons";
import SectionTop from "../SectionTop";

export default function BackendPath() {
  return (
    <section className="app-container space-y-8 py-16 sm:py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionTop
          titleTop="Backend Learning"
          titleBottom="Paths"
          description="Three guided tracks for backend development — pick the one that matches your goal. Each path sequences roadmaps in the right order so you never have to wonder what to learn next."
        />

        <Link
          href="/path"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-card-foreground hover:bg-card-hover"
        >
          All Paths
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Path cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {paths.map((path) => {
          return (
            <Link
              key={path.id}
              href={`/path/${path.id}`}
              data-accent={path.color}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-5 hover:border-border-strong hover:bg-card-hover"
            >
              {/* Header */}
              <div className="flex items-start gap-3">
                <span
                  data-accent={path.color}
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border accent-bg-soft-strong accent-text"
                >
                  <AppIcon
                    name={path.icon}
                    className="h-5 w-5"
                    strokeWidth={2.2}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-black text-card-foreground group-hover:opacity-90">
                    {path.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-subtle line-clamp-2">
                    {path.tagline}
                  </p>
                </div>
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-disabled group-hover:text-subtle" />
              </div>

              {/* Phase flow */}
              <div className="flex flex-wrap items-center gap-1.5">
                {path.phases.map((phase, idx) => {
                  const firstCourse = getCourseById(phase.steps[0]?.roadmapId);
                  return (
                    <span
                      key={phase.id}
                      className="inline-flex items-center gap-1.5"
                    >
                      <span
                        data-accent={firstCourse?.color ?? path.color}
                        className="inline-flex items-center gap-1 rounded-lg border border-border accent-bg-soft px-2 py-0.5 text-[11px] font-medium accent-text"
                      >
                        {phase.steps.length > 1 ? (
                          phase.steps.map((step) => {
                            const c = getCourseById(step.roadmapId);
                            return c ? (
                              <span
                                key={step.roadmapId}
                                data-accent={c.color}
                                className="inline-flex items-center gap-1 accent-text"
                              >
                                <AppIcon
                                  name={c.icon}
                                  className="h-2.5 w-2.5"
                                  strokeWidth={2.4}
                                />
                              </span>
                            ) : null;
                          })
                        ) : firstCourse ? (
                          <>
                            <AppIcon
                              name={firstCourse.icon}
                              className="h-2.5 w-2.5"
                              strokeWidth={2.4}
                            />
                            {firstCourse.title}
                          </>
                        ) : null}
                      </span>
                      {idx < path.phases.length - 1 && (
                        <MoveRight className="h-3 w-3 shrink-0 text-border-strong" />
                      )}
                    </span>
                  );
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
