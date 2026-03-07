import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Circle,
  LayoutDashboard,
  Layers3,
  Palette,
  PlayCircle,
  Route,
  Sparkles,
  Stars,
  Trophy,
  Zap,
} from "lucide-react";
import { courses } from "@/data/courses";
import Container from "@/components/Container";
import CourseCard from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { countModules, countSubtopics, countTopics } from "@/utils/course";

export default function HomePage() {
  const totalModules = courses.reduce(
    (sum, course) => sum + countModules(course),
    0,
  );
  const totalTopics = courses.reduce(
    (sum, course) => sum + countTopics(course),
    0,
  );
  const totalSubtopics = courses.reduce(
    (sum, course) => sum + countSubtopics(course),
    0,
  );
  const highlightedCourses = courses.slice(0, 3);
  const featuredCourse = courses[0];

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-surface/80 min-h-[calc(100svh-3.5rem)] flex flex-col justify-center">
        {/* Background effects */}
        <div className="absolute inset-0 surface-mesh opacity-40 pointer-events-none" />
        <div className="absolute -left-32 -top-16 h-130 w-130 rounded-full bg-[rgba(var(--accent-rgb)/0.13)] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-105 w-105 rounded-full bg-[rgba(56,189,248,0.09)] blur-[90px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-70 w-140 rounded-full bg-[rgba(var(--accent-rgb)/0.05)] blur-[80px] pointer-events-none" />

        <Container className="relative py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* ── Left: Content ── */}
            <div className="flex flex-col items-start">
              {/* Animated badge */}
              <div className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[rgb(var(--accent-rgb)/0.35)] bg-[rgb(var(--accent-rgb)/0.07)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-(--accent)">
                <span className="absolute inset-0 hero-badge-shimmer pointer-events-none" />
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--accent) opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-(--accent)" />
                </span>
                <Sparkles className="relative h-3.5 w-3.5" />
                <span className="relative">Curated Learning Platform</span>
              </div>

              {/* Headline */}
              <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] text-text-primary sm:text-6xl lg:text-[4.25rem] leading-[1.05]">
                Master skills
                <br />
                <span className="hero-gradient-text">one step</span> at a time.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-text-subtle sm:text-lg">
                Structured roadmaps that keep your learning focused, visible,
                and finishable. Pick a path, track your progress, and build real
                mastery step by step.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "h-11 rounded-full px-6 ",
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
                      "h-11 rounded-full px-6",
                    )}
                  >
                    Explore Courses
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>

              {/* Stats */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl accent-bg-soft">
                    <BookOpen className="h-4 w-4 accent-text" />
                  </div>
                  <div>
                    <p className="text-xl font-black leading-none text-text-primary">
                      {courses.length}
                    </p>
                    <p className="mt-0.5 text-xs text-text-faint">
                      Learning Tracks
                    </p>
                  </div>
                </div>
                <div className="h-8 w-px bg-border-default" />
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl accent-bg-soft">
                    <Stars className="h-4 w-4 accent-text" />
                  </div>
                  <div>
                    <p className="text-xl font-black leading-none text-text-primary">
                      {totalModules}
                    </p>
                    <p className="mt-0.5 text-xs text-text-faint">Modules</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-border-default" />
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl accent-bg-soft">
                    <Zap className="h-4 w-4 accent-text" />
                  </div>
                  <div>
                    <p className="text-xl font-black leading-none text-text-primary">
                      {totalSubtopics}
                    </p>
                    <p className="mt-0.5 text-xs text-text-faint">
                      Checkpoints
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Hero Banner / UI Mockup ── */}
            <div className="relative hidden lg:flex items-center justify-center h-130">
              {/* Ambient glow */}
              <div className="absolute h-72 w-72 rounded-full bg-[rgba(var(--accent-rgb)/0.14)] blur-[60px]" />

              {/* Main course progress card */}
              <div className="animate-hero-float relative z-10 w-[320px] app-panel rounded-2xl p-5 shadow-[0_30px_80px_rgba(2,6,23,0.55)]">
                {/* Course header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(var(--accent-rgb)/0.15)] text-sm font-black text-(--accent)">
                    JS
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-text-primary">
                      JavaScript Mastery
                    </p>
                    <p className="text-xs text-text-faint">
                      4 of 6 levels complete
                    </p>
                  </div>
                  <Badge
                    variant="accent"
                    className="ml-auto shrink-0 text-[10px]"
                  >
                    Active
                  </Badge>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="text-text-faint">Progress</span>
                    <span className="font-semibold text-text-secondary">
                      68%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-emphasis">
                    <div className="h-full w-[68%] rounded-full bg-(--accent) shadow-[0_0_8px_rgba(var(--accent-rgb)/0.6)]" />
                  </div>
                </div>

                {/* Module list */}
                <div className="mt-4 space-y-2">
                  {[
                    { label: "Variables & Types", state: "done" },
                    { label: "Functions & Closures", state: "done" },
                    { label: "Async / Await", state: "active" },
                    { label: "Advanced Patterns", state: "pending" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={cn(
                        "flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs",
                        item.state === "active"
                          ? "border border-[rgba(var(--accent-rgb)/0.25)] bg-[rgba(var(--accent-rgb)/0.08)]"
                          : "bg-surface-emphasis",
                      )}
                    >
                      {item.state === "done" ? (
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      ) : item.state === "active" ? (
                        <PlayCircle className="h-3.5 w-3.5 shrink-0 text-(--accent)" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 shrink-0 text-text-faint" />
                      )}
                      <span
                        className={cn(
                          item.state === "done"
                            ? "text-text-muted"
                            : item.state === "active"
                              ? "font-semibold text-text-primary"
                              : "text-text-faint",
                        )}
                      >
                        {item.label}
                      </span>
                      {item.state === "active" && (
                        <span className="ml-auto text-[10px] font-semibold text-(--accent)">
                          Current
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating achievement card — top right */}
              <div className="animate-hero-float-reverse absolute -right-4 top-14 z-20 w-42 app-panel rounded-2xl p-3.5 shadow-[0_20px_50px_rgba(2,6,23,0.45)]">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500/15">
                    <Trophy className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-text-primary">
                      Level Up!
                    </p>
                    <p className="text-[10px] font-semibold text-amber-400">
                      +250 XP earned
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating topics pill — bottom left */}
              <div className="animate-hero-float-delayed absolute -left-6 bottom-20 z-20 app-panel rounded-2xl px-4 py-2.5 shadow-[0_20px_50px_rgba(2,6,23,0.45)]">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-(--accent)" />
                  <span className="text-xs font-semibold text-text-primary">
                    {totalTopics} Topics Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

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
