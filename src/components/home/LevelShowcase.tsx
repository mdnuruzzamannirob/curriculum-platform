import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";

const levelDescriptions: Record<string, string> = {
  entry:
    "Variables, syntax, control flow, and basic functions. The essential foundations every developer starts with.",
  junior:
    "DOM manipulation, events, async basics, APIs. Start building real-world things that run in the browser.",
  mid: "Closures, prototypes, design patterns, error handling. Write clean, maintainable, production-quality code.",
  senior:
    "Deep internals, architecture decisions, performance optimisation. Lead and scale codebases with confidence.",
  staff:
    "V8 engine, memory management, toolchain internals. Own the runtime and optimise at the platform level.",
  principal:
    "Ecosystem architecture, compiler tooling, mentoring at scale. Shape the trajectory of entire technology stacks.",
};

const levelColors: Record<string, string> = {
  entry: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30",
  junior: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30",
  mid: "from-orange-500/20 to-orange-500/5 border-orange-500/30",
  senior: "from-pink-500/20 to-pink-500/5 border-pink-500/30",
  staff: "from-sky-500/20 to-sky-500/5 border-sky-500/30",
  principal: "from-emerald-400/20 to-emerald-400/5 border-emerald-400/30",
};

export default function LevelShowcase() {
  const featuredCourse = courses[0];
  if (!featuredCourse) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="app-container space-y-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            One roadmap.
            <br />
            <span className="text-muted-foreground">Six developer levels.</span>
          </h2>
          <p className="mt-4 text-sm text-subtle sm:text-base">
            Every roadmap on DevPath is sliced into 6 scoped levels — each tied
            to a developer career stage. You&apos;ll never wonder whether a
            topic belongs at your level again.
          </p>
        </div>

        {/* Level grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourse.levels.map((level, i) => {
            const colorClass =
              levelColors[level.id] ??
              "from-primary/20 to-primary/5 border-primary/30";
            const desc =
              levelDescriptions[level.id] ??
              level.description ??
              "Advance your knowledge at this level.";

            return (
              <Link
                key={level.id}
                href={`/course/${featuredCourse.id}/${level.id}`}
                className={`group relative overflow-hidden rounded-xl border bg-linear-to-br p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${colorClass}`}
              >
                {/* Level number badge */}
                <span className="absolute right-4 top-3 text-[2.8rem] font-black leading-none text-foreground/5 select-none">
                  L{i}
                </span>

                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Level {i} &mdash; {level.description}
                  </p>
                  <h3 className="mt-1.5 text-base font-black text-foreground sm:text-lg">
                    {level.title}
                  </h3>
                  <p className="mt-2 text-sm text-subtle">{desc}</p>

                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-muted-foreground group-hover:text-foreground">
                    View level
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <p className="text-center text-sm text-subtle">
          Showing levels for the{" "}
          <span className="font-semibold text-foreground">
            {featuredCourse.title}
          </span>{" "}
          roadmap.{" "}
          <Link
            href="/course"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            See all roadmaps →
          </Link>
        </p>
      </div>
    </section>
  );
}
