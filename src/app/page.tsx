import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  LayoutDashboard,
  Layers3,
  Palette,
  Route,
  Stars,
  Zap,
} from "lucide-react";
import { courses } from "@/data/courses";
import Container from "@/components/Container";
import CourseCard from "@/components/CourseCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Banner from "@/components/home/Banner";

export default function HomePage() {
  const highlightedCourses = courses.slice(0, 3);
  const featuredCourse = courses[0];

  return (
    <>
      <Banner />

      {/* ── Below-fold ──────────────────────────────────────────────────── */}
      <Container className="py-16">
        <div className="space-y-24">
          {/* ── How it works ── */}
          <section className="space-y-10">
            <div className="text-center">
              <div className="mx-auto mb-4 w-fit rounded-full border border-[rgb(var(--accent-rgb)/0.3)] bg-[rgb(var(--accent-rgb)/0.07)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-(--accent)">
                How it works
              </div>
              <h2 className="text-3xl font-black tracking-tight text-text-primary sm:text-4xl">
                Three steps to structured mastery
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-text-subtle">
                From picking a track to checking off your last subtopic — the
                path is always clear.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {(
                [
                  {
                    step: "01",
                    title: "Choose a Learning Track",
                    description:
                      "Pick from curated paths covering the full spectrum — from beginner fundamentals to advanced mastery.",
                    icon: BookOpen,
                  },
                  {
                    step: "02",
                    title: "Follow the Roadmap",
                    description:
                      "Each course is organized into levels and modules. Move in order or jump to exactly what you need.",
                    icon: Route,
                  },
                  {
                    step: "03",
                    title: "Track Every Checkpoint",
                    description:
                      "Check off subtopics as you complete them. Your progress is saved locally and always visible.",
                    icon: CheckCircle2,
                  },
                ] as const
              ).map((item) => (
                <div
                  key={item.step}
                  className="app-panel relative overflow-hidden rounded-2xl p-6"
                >
                  <div className="absolute right-4 top-3 text-[3.5rem] font-black leading-none text-border-default select-none">
                    {item.step}
                  </div>
                  <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl accent-bg-soft">
                    <item.icon className="h-5 w-5 accent-text" />
                  </div>
                  <h3 className="relative text-base font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-6 text-text-subtle">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Highlighted Courses ── */}
          <section className="space-y-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-text-primary sm:text-3xl">
                  Highlighted Courses
                </h2>
                <p className="mt-1 text-sm text-text-subtle">
                  Start from the most relevant path and move into the dashboard
                  when you want the full progress view.
                </p>
              </div>
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ variant: "subtle", size: "sm" }),
                  "w-fit rounded-full",
                )}
              >
                Open full dashboard
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {highlightedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>

          {/* ── Features ── */}
          <section className="space-y-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-text-primary sm:text-4xl">
                  Everything you need
                  <br />
                  <span className="hero-gradient-text">to stay on track</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-text-subtle sm:text-right">
                Designed for depth and clarity — not distraction.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(
                [
                  {
                    icon: Route,
                    label: "Structured Curriculum",
                    desc: "Every course is methodically organized into levels and modules for clear, logical progression.",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                  },
                  {
                    icon: Layers3,
                    label: "Level-by-level Learning",
                    desc: "Progress through beginner, intermediate, and advanced concepts in the right order.",
                    color: "text-violet-400",
                    bg: "bg-violet-500/10",
                  },
                  {
                    icon: CheckCircle2,
                    label: "Granular Checkpoints",
                    desc: "Break each module into bite-sized subtopics and check them off as you go.",
                    color: "text-emerald-400",
                    bg: "bg-emerald-500/10",
                  },
                  {
                    icon: BarChart3,
                    label: "Visual Progress Tracking",
                    desc: "Progress bars and completion stats let you see exactly how far you've come.",
                    color: "text-amber-400",
                    bg: "bg-amber-500/10",
                  },
                  {
                    icon: Palette,
                    label: "Dark & Light Modes",
                    desc: "Switch between beautiful dark zinc and clean light zinc themes to suit your environment.",
                    color: "text-pink-400",
                    bg: "bg-pink-500/10",
                  },
                  {
                    icon: Zap,
                    label: "Fast Navigation",
                    desc: "Jump directly to any level, module, or topic instantly using intuitive tab navigation.",
                    color: "text-cyan-400",
                    bg: "bg-cyan-500/10",
                  },
                ] as const
              ).map((f) => (
                <div key={f.label} className="app-panel rounded-2xl p-5">
                  <div
                    className={cn(
                      "mb-4 flex h-10 w-10 items-center justify-center rounded-xl",
                      f.bg,
                    )}
                  >
                    <f.icon className={cn("h-5 w-5", f.color)} />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary">
                    {f.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-text-subtle">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA Banner ── */}
          <section className="relative overflow-hidden rounded-3xl border border-[rgb(var(--accent-rgb)/0.2)] bg-[rgb(var(--accent-rgb)/0.05)] p-8 text-center sm:p-14">
            <div className="absolute inset-0 surface-mesh opacity-30 pointer-events-none" />
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-40 w-80 -translate-y-1/2 rounded-full bg-[rgb(var(--accent-rgb)/0.12)] blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl accent-bg-soft shadow-[0_0_30px_rgba(var(--accent-rgb)/0.25)]">
                <Stars className="h-6 w-6 accent-text" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-text-primary sm:text-4xl">
                Ready to start learning?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-text-subtle">
                Pick a track, follow the roadmap, and build skills that stick —
                at your own pace.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "h-11 rounded-full px-7 shadow-[0_0_24px_rgba(var(--accent-rgb)/0.35)]",
                  )}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Go to Dashboard
                </Link>
                {featuredCourse && (
                  <Link
                    href={`/course/${featuredCourse.id}`}
                    className={cn(
                      buttonVariants({ variant: "subtle", size: "default" }),
                      "h-11 rounded-full px-7",
                    )}
                  >
                    Browse Courses
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
