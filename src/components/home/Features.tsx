import {
  BarChart3,
  CheckCircle2,
  Layers3,
  Palette,
  Route,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Route,
    label: "Structured Curriculum",
    desc: "Every course is methodically organized into levels and modules for clear, logical progression.",
  },
  {
    icon: Layers3,
    label: "Level-by-level Learning",
    desc: "Progress through beginner, intermediate, and advanced concepts in the right order.",
  },
  {
    icon: CheckCircle2,
    label: "Granular Checkpoints",
    desc: "Break each module into bite-sized subtopics and check them off as you go.",
  },
  {
    icon: BarChart3,
    label: "Visual Progress Tracking",
    desc: "Progress bars and completion stats let you see exactly how far you've come.",
  },
  {
    icon: Palette,
    label: "Dark & Light Modes",
    desc: "Switch between clean light and elegant dark themes to suit your learning environment.",
  },
  {
    icon: Zap,
    label: "Fast Navigation",
    desc: "Jump directly to any level, module, or topic instantly using intuitive navigation.",
  },
] as const;

export default function Features() {
  return (
    <section className="space-y-10 app-container  py-16 sm:py-20" id="features">
      <div className="flex flex-col items-end text-end">
        <div className=" mb-4 w-fit rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Features
        </div>

        <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Everything you need
          <br />
          <span className="text-muted-foreground">to stay on track</span>
        </h2>

        <p className="text-end mt-4 max-w-xl text-sm text-subtle sm:text-base">
          Designed for depth and clarity — not distraction. Every piece of the
          interface helps learners focus on real progress.
        </p>
      </div>

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
