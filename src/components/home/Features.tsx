import {
  BarChart3,
  BookMarked,
  CheckCircle2,
  Layers3,
  Route,
  Zap,
} from "lucide-react";
import SectionTop from "../SectionTop";

const features = [
  {
    icon: Route,
    label: "Structured Roadmaps",
    desc: "Every track is methodically split into levels and modules for clear, level-by-level progression across a technology.",
  },
  {
    icon: Layers3,
    label: "Level-scoped Curriculum",
    desc: "Each level is scoped to a specific developer stage — junior, mid, senior, staff, lead. Know exactly which topics belong at your level.",
  },
  {
    icon: CheckCircle2,
    label: "Granular Checkpoints",
    desc: "Break each module into bite-sized subtopics. Check them off as you complete them and watch your progress in real time.",
  },
  {
    icon: BarChart3,
    label: "Visual Progress Tracking",
    desc: "Progress bars and completion stats let you see exactly how far you’ve come — across every roadmap, level, and module.",
  },
  {
    icon: BookMarked,
    label: "Interview & DSA Paths",
    desc: "Every roadmap ships with additional topic tracks — DSA and interview prep — organized by developer level, so you prep for the right stage.",
  },
  {
    icon: Zap,
    label: "Instant Navigation",
    desc: "Jump directly to any level, module, or topic in seconds. No sign-up needed to browse — your progress is saved locally.",
  },
] as const;

export default function Features() {
  return (
    <section className="space-y-10 app-container  py-16 sm:py-20" id="features">
      <SectionTop
        titleTop="Everything you need"
        titleBottom="to own your level"
        description="Built for developers who want a clear scope, not an infinite syllabus. Every feature helps you focus on what actually matters at your current stage."
        position="center"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.label}
              className="group rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-card-hover hover:border-border-strong"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-sm font-bold text-card-foreground sm:text-base">
                {feature.label}
              </h3>

              <p className="mt-2 text-sm text-subtle">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
