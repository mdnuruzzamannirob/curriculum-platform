import { BookOpen, CheckCircle2, Route } from "lucide-react";

const steps = [
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
] as const;

export default function HowItWorksSection() {
  return (
    <section id="features" className="space-y-10 app-container  py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-4 w-fit rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          How it works
        </div>

        <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Three steps to
          <br />
          <span className="text-muted-foreground">structured mastery</span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm text-subtle sm:text-base">
          From picking a track to checking off your last subtopic — the path
          stays clear, readable, and focused from start to finish.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.step}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-card-hover hover:border-border-strong"
            >
              <div className="absolute right-4 top-3 text-[3.5rem] font-black leading-none text-faint/20 select-none">
                {item.step}
              </div>

              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="relative text-base font-bold text-card-foreground sm:text-lg">
                {item.title}
              </h3>

              <p className="relative mt-3 text-sm text-subtle">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
