import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Heart,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Clarity over quantity",
    desc: "We design every roadmap around one goal: knowing exactly what to learn next and why. No bloated syllabi.",
  },
  {
    icon: BookOpen,
    title: "Depth over breadth",
    desc: "Each track goes from fundamentals to real mastery — not surface-level overviews that leave you Googling everything.",
  },
  {
    icon: Heart,
    title: "Progress that feels real",
    desc: "Checking off checkpoints and watching progress bars fill isn't just satisfying — it keeps you moving.",
  },
  {
    icon: Users,
    title: "Built for self-learners",
    desc: "No enrollment, no schedule, no pressure. Just you, the material, and a system designed to work at your pace.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="app-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Code2 className="h-3.5 w-3.5" />
              About DevPath
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Built to stop
              <br />
              <span className="text-muted-foreground">the confusion</span>
            </h2>

            <p className="mt-5 text-base text-subtle">
              Most learning resources don&apos;t tell you <em>how much</em> of a
              topic you need at your level. Should a junior dev know the event
              loop internals? Should a mid-level dev tackle V8 optimization?
            </p>

            <p className="mt-4 text-base text-subtle">
              DevPath answers this by scoping every technology into 6 developer
              levels — from Absolute Basics to Mastery — each listing exactly
              the topics that belong there. Follow your level, track your
              progress, and always know what’s next.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/course"
                className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <GraduationCap className="h-4 w-4" />
                Browse courses
              </Link>
              <Link
                href="/about"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-medium text-card-foreground hover:bg-card-hover"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-xl border border-border bg-card p-5 hover:bg-card-hover"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <p className="text-sm font-bold text-card-foreground">
                    {v.title}
                  </p>
                  <p className="mt-1.5 text-sm text-subtle">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
