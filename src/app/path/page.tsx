import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { paths } from "@/data/paths";
import { AppIcon } from "@/lib/icons";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTop from "@/components/SectionTop";

export default function PathsPage() {
  return (
    <div className="app-container space-y-6 py-4 sm:py-6 lg:py-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Paths" }]}
      />

      <SectionTop
        titleTop="Learning Paths"
        titleBottom="from zero to hired"
        description="Curated multi-roadmap paths that guide you through everything you need to land a developer role. Each phase tells you exactly which roadmap to study next."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {paths.map((path) => {
          const totalRoadmaps = path.phases.reduce(
            (sum, p) => sum + p.steps.length,
            0,
          );

          return (
            <Link
              key={path.id}
              href={`/path/${path.id}`}
              data-accent={path.color}
              className="group flex flex-col gap-5 rounded-xl border border-border bg-card p-6 hover:border-border-strong hover:bg-card-hover"
            >
              {/* Icon + title */}
              <div className="flex items-start gap-4">
                <span
                  data-accent={path.color}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border accent-bg-soft-strong accent-text"
                >
                  <AppIcon
                    name={path.icon}
                    className="h-6 w-6"
                    strokeWidth={2.2}
                  />
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="font-black text-card-foreground group-hover:opacity-90">
                    {path.title}
                  </h2>
                  <p className="mt-0.5 text-sm text-subtle line-clamp-2">
                    {path.tagline}
                  </p>
                </div>

                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-disabled group-hover:text-subtle" />
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Phases", value: path.phases.length },
                  { label: "Roadmaps", value: totalRoadmaps },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-xl border border-border bg-background px-3 py-2 text-center"
                  >
                    <span className="text-sm font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-subtle">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
