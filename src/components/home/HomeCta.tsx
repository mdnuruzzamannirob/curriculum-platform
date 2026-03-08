import Link from "next/link";
import { ArrowRight, LayoutDashboard, Stars } from "lucide-react";

import { courses } from "@/data/courses";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomeCta() {
  const featuredCourse = courses[0];

  return (
    <section className="app-container py-16 sm:py-20">
      <div className=" relative overflow-hidden rounded-4xl border border-border bg-card py-10 text-center px-6 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Stars className="h-6 w-6" />
          </div>

          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Ready to start learning?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base text-subtle">
            Pick a track, follow the roadmap, and build skills that stick — at
            your own pace, with a system built for clarity and progress.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "default" }),
                "h-11 rounded-full bg-primary px-7 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90",
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              Go to Dashboard
            </Link>

            {featuredCourse && (
              <Link
                href={`/course/${featuredCourse.id}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card-hover"
              >
                Browse Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
