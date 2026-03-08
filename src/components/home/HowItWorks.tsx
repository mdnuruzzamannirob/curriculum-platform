import { BookOpen, CheckCircle2, Route } from "lucide-react";
import SectionTop from "../SectionTop";

const steps = [
  {
    step: "01",
    title: "Choose a Roadmap",
    description:
      "Pick a technology track. Each roadmap spans 6 developer levels — from entry-level fundamentals to principal-level mastery — so you see the full scope upfront.",
    icon: BookOpen,
  },
  {
    step: "02",
    title: "Jump to Your Level",
    description:
      "Select the level that matches where you are today. Every level is scoped to the right depth — no more wondering if you should know a topic yet.",
    icon: Route,
  },
  {
    step: "03",
    title: "Track Every Checkpoint",
    description:
      "Check off topics and subtopics as you complete them. Progress is saved locally and always visible — across every roadmap and every level.",
    icon: CheckCircle2,
  },
] as const;

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="space-y-10 app-container  py-16 sm:py-20"
    >
      <SectionTop
        titleBottom="in three steps"
        titleTop="From confusion to clarity"
        description="Pick your roadmap, select your developer level, and follow
            a scoped path that tells you exactly what to learn — nothing more, nothing less."
        position="center"
      />

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
