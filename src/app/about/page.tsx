import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  GraduationCap,
  Heart,
  Route,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { courses } from "@/data/courses";
import { countModules, countSubtopics, countTopics } from "@/utils/course";

const totalModules = courses.reduce((sum, c) => sum + countModules(c), 0);
const totalTopics = courses.reduce((sum, c) => sum + countTopics(c), 0);
const totalSubtopics = courses.reduce((sum, c) => sum + countSubtopics(c), 0);

const stats = [
  { value: String(courses.length), label: "Learning tracks" },
  { value: String(totalModules), label: "Modules" },
  { value: String(totalTopics), label: "Topics" },
  { value: String(totalSubtopics), label: "Checkpoints" },
];

const values = [
  {
    icon: Target,
    title: "Clarity over quantity",
    desc: "We design every roadmap around one goal: knowing exactly what to learn next and why. No bloated syllabi, no random tutorial rabbit holes.",
  },
  {
    icon: BookOpen,
    title: "Depth over breadth",
    desc: "Each track goes from fundamentals to real mastery — not surface-level overviews that leave you Googling everything after 10 minutes.",
  },
  {
    icon: Heart,
    title: "Progress that feels real",
    desc: "Checking off checkpoints and watching progress bars fill isn't just satisfying — it reinforces learning and keeps you moving forward.",
  },
  {
    icon: Users,
    title: "Built for self-learners",
    desc: "No enrollment, no schedule, no pressure. Just you, the material, and a system designed to work at your pace and on your terms.",
  },
  {
    icon: Zap,
    title: "Instant access, always",
    desc: "Everything is available immediately — no sign-up required to browse. Your progress is saved locally so it's always there when you return.",
  },
  {
    icon: CheckCircle2,
    title: "Granular checkpoints",
    desc: "Break each module into bite-sized subtopics. Check them off as you go and see your progress update in real time.",
  },
];

const stack = [
  { label: "Next.js 15", desc: "App Router, server & client components" },
  { label: "TypeScript", desc: "End-to-end type safety" },
  { label: "Tailwind CSS v4", desc: "Utility-first, CSS-variables powered" },
  { label: "Local Storage", desc: "Zero-backend progress persistence" },
];

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="border-b border-border bg-card/50">
        <div className="app-container py-12 sm:py-16">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
          />

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Code2 className="h-3.5 w-3.5" />
              About Classroom
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Built for people who
              <br />
              <span className="text-muted-foreground">want real mastery</span>
            </h1>

            <p className="mt-6 text-base text-subtle sm:text-lg">
              Classroom is a structured learning platform built out of
              frustration with the usual &ldquo;watch 200 hours of video and
              hope for the best&rdquo; approach. We organize knowledge into
              level-based roadmaps with granular checkpoints — so the path
              forward is always clear.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="app-container py-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center"
              >
                <p className="text-3xl font-black text-foreground">{s.value}</p>
                <p className="mt-1 text-xs text-subtle">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border">
        <div className="app-container py-14 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                The problem with
                <br />
                <span className="text-muted-foreground">
                  most learning resources
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-base text-subtle">
                <p>
                  Most online learning is unstructured. You watch a tutorial,
                  feel productive, then realize three days later you have no
                  idea where you are or what to tackle next. The path is
                  unclear.
                </p>
                <p>
                  Classroom solves this by turning every subject into a
                  structured roadmap — broken into levels, modules, topics, and
                  subtopics. Every checkpoint is trackable, every level builds
                  on the last, and your progress is always visible.
                </p>
                <p>
                  Whether you&apos;re an absolute beginner or filling in gaps as
                  an experienced developer, the roadmap meets you where you are
                  and shows you exactly what&apos;s next.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                How it
                <br />
                <span className="text-muted-foreground">works</span>
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: Route,
                    title: "Choose a track",
                    desc: "Pick a curated learning path covering the full scope of a technology from basics to mastery.",
                  },
                  {
                    icon: BookOpen,
                    title: "Follow the roadmap",
                    desc: "Work through levels and modules in order, or jump directly to whatever you need right now.",
                  },
                  {
                    icon: GraduationCap,
                    title: "Track your progress",
                    desc: "Check off subtopics as you learn them. Progress is saved and always visible across all your tracks.",
                  },
                ].map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {step.title}
                        </p>
                        <p className="mt-0.5 text-sm text-subtle">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border">
        <div className="app-container py-14 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Design principles
            </h2>
            <p className="mt-4 text-base text-subtle">
              Every decision in Classroom flows from a core set of beliefs about
              how good learning tools should work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card p-5 hover:bg-card-hover"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="font-bold text-card-foreground">{v.title}</p>
                  <p className="mt-2 text-sm text-subtle">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-b border-border">
        <div className="app-container py-14 sm:py-20">
          <div className="mb-10">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Built with
            </h2>
            <p className="mt-4 max-w-xl text-base text-subtle">
              Classroom is built with modern, open-source tools with a focus on
              speed, type safety, and maintainability.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <p className="font-bold text-card-foreground">{s.label}</p>
                <p className="mt-1 text-sm text-subtle">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="app-container py-14 sm:py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-base text-subtle">
            Pick a learning track and start building real, structured knowledge
            today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/course"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              <GraduationCap className="h-4 w-4" />
              Browse courses
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-medium text-card-foreground hover:bg-card-hover"
            >
              Go to Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
