import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Route,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "How it works — DevPath",
  description:
    "Learn how DevPath structures knowledge into levels so you always know what to study at every stage of your career.",
};

const steps = [
  {
    number: "01",
    icon: Route,
    title: "Pick a roadmap",
    description:
      "Browse topic-based roadmaps — JavaScript, Python, system design, and more. Each roadmap covers an entire subject from first principles to advanced mastery.",
  },
  {
    number: "02",
    icon: Target,
    title: "Find your level",
    description:
      "Every roadmap is split into 6 career levels: Entry, Core, Intermediate, Advanced, Runtime, and Mastery. Assess where you are now and start there — no backtracking, no guessing.",
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Learn topic by topic",
    description:
      "Each level contains focused modules and subtopics. Work through them in order. Everything is scoped so you're never overwhelmed with content that belongs to a different stage.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Mark your progress",
    description:
      "Check off topics as you complete them. Your dashboard shows real-time progress across every roadmap and level so you always see how far you've come.",
  },
  {
    number: "05",
    icon: Trophy,
    title: "Advance to the next level",
    description:
      "Once you've covered a level's material, move up. DevPath makes it clear what you've earned and what comes next — no certificate needed to know you're ready.",
  },
];

const levels = [
  {
    id: "l0",
    name: "Entry",
    slug: "l0-entry",
    description:
      "The absolute basics — syntax, setup, and your first programs.",
  },
  {
    id: "l1",
    name: "Core",
    slug: "l1-core",
    description: "Foundational concepts every working developer must know.",
  },
  {
    id: "l2",
    name: "Intermediate",
    slug: "l2-intermediate",
    description: "Patterns, tooling, and code you'd see in a real codebase.",
  },
  {
    id: "l3",
    name: "Advanced",
    slug: "l3-advanced",
    description: "Deep internals, architecture decisions, and edge cases.",
  },
  {
    id: "l4",
    name: "Runtime",
    slug: "l4-runtime",
    description: "Performance, concurrency, memory management, and the engine.",
  },
  {
    id: "l5",
    name: "Mastery",
    slug: "l5-mastery",
    description:
      "Language internals, contribution-level knowledge, and leading teams.",
  },
];

const audiences = [
  { icon: "💻", label: "Developers" },
  { icon: "⚙️", label: "Engineers" },
  { icon: "🎨", label: "Designers going technical" },
  { icon: "🔄", label: "Career switchers" },
  { icon: "📚", label: "Self-taught learners" },
  { icon: "🧑‍🏫", label: "Bootcamp grads" },
];

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background py-16 sm:py-24">
        <div className="app-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How it works
            </p>
            <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Learning with
              <br />
              <span className="text-muted-foreground">a clear direction</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-subtle sm:text-lg">
              DevPath structures knowledge into career levels so you always know
              what to study — and what you can safely skip — at every stage.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/course"
                className={cn(
                  buttonVariants({ size: "default" }),
                  "h-11 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90",
                )}
              >
                Browse roadmaps
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-medium text-card-foreground hover:bg-card-hover"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-y border-border bg-card/40 py-12 sm:py-16">
        <div className="app-container">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-faint">
            Built for anyone who wants to learn with structure
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {audiences.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
              >
                <span>{a.icon}</span>
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-16 sm:py-24">
        <div className="app-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Five steps to
              <br />
              <span className="text-muted-foreground">structured progress</span>
            </h2>
          </div>

          <div className="relative mt-14 space-y-8 sm:mt-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex gap-6 rounded-xl border border-border bg-card p-6 sm:p-8"
                >
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-primary text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-faint">
                      Step {step.number}
                    </p>
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-subtle">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 6 levels explained */}
      <section className="border-y border-border bg-card/40 py-16 sm:py-24">
        <div className="app-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              The 6 career levels
              <br />
              <span className="text-muted-foreground">explained</span>
            </h2>
            <p className="mt-4 text-sm text-subtle sm:text-base">
              Every DevPath roadmap is divided into the same six levels. Once
              you understand the structure, navigating any roadmap feels
              familiar.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level, i) => (
              <div
                key={level.id}
                className="rounded-xl border border-border bg-background p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-primary text-sm font-black text-primary-foreground">
                    {i}
                  </span>
                  <h3 className="font-bold text-foreground">{level.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-subtle">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Privacy note */}
      <section className="bg-background py-16 sm:py-24">
        <div className="app-container">
          <div className="mx-auto max-w-2xl">
            <div className="flex gap-4 rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card-hover">
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  Your data stays on your device
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-subtle">
                  DevPath stores all progress data locally in your browser.
                  There are no tracking scripts, no analytics collecting your
                  reading habits. Clear your browser storage at any time and
                  everything resets — it&apos;s your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card/40 py-16 sm:py-20">
        <div className="app-container text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Ready to learn
            <br />
            <span className="text-muted-foreground">with direction?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-subtle sm:text-base">
            Pick a roadmap, find your level, and start today. No account
            required to explore — just focused, structured learning.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/course"
              className={cn(
                buttonVariants({ size: "default" }),
                "h-11 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90",
              )}
            >
              Browse roadmaps
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/auth/register"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-6 text-sm font-medium text-foreground hover:bg-card-hover"
            >
              Create free account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
