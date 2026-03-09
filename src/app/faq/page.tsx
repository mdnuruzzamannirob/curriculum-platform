import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "FAQ — DevPath",
  description:
    "Frequently asked questions about DevPath — how it works, who it's for, how progress is saved, and more.",
};

const faqs: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "General",
    items: [
      {
        q: "What is DevPath?",
        a: "DevPath is a structured learning platform that organises technology topics into career levels. Instead of a flat list of tutorials, you get a clear roadmap that tells you exactly what to learn at each stage of your career — nothing missing, nothing wasted.",
      },
      {
        q: "Who is DevPath for?",
        a: "DevPath is for anyone who wants to learn technical skills with structure: software developers, frontend and backend engineers, full-stack developers, UX/UI designers expanding into technical territory, career switchers, bootcamp graduates, and self-taught learners.",
      },
      {
        q: "Is DevPath free?",
        a: "Yes. All roadmaps and content are completely free. Creating an account is optional and only needed to save your progress.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. You can browse all roadmaps and explore every level without signing up. An account only adds the ability to track and save your progress across sessions.",
      },
    ],
  },
  {
    category: "Roadmaps & Levels",
    items: [
      {
        q: "How are the roadmaps structured?",
        a: "Each roadmap covers a single technology or subject area. It's divided into 6 career levels — Entry, Core, Intermediate, Advanced, Runtime, and Mastery — each containing focused modules and subtopics.",
      },
      {
        q: "What do the 6 levels mean?",
        a: "Level 0 (Entry) covers the absolute basics. Level 1 (Core) covers what every working professional must know. Levels 2–3 (Intermediate/Advanced) cover patterns, architecture, and depth. Level 4 (Runtime) covers performance and internals. Level 5 (Mastery) covers expert-level knowledge.",
      },
      {
        q: "How do I know which level to start at?",
        a: "Read the description of each level honestly. If you can confidently explain 80% of the topics in a level, move to the next one. If you're unsure, start at Entry — it's better to confirm your foundations than to skip them.",
      },
      {
        q: "Can I jump between levels or roadmaps?",
        a: "Absolutely. DevPath doesn't lock you to a linear path. You can open any roadmap, navigate to any level, and mark progress independently across all of them.",
      },
      {
        q: "Will new roadmaps be added?",
        a: "Yes. The platform is actively developed and new roadmaps are added as the content is ready. Watch the GitHub repository or check the roadmaps page for updates.",
      },
    ],
  },
  {
    category: "Progress & Account",
    items: [
      {
        q: "Where is my progress stored?",
        a: "Progress data is stored locally in your browser's localStorage. This means your progress is private to your device and browser — no server stores it. It also means progress will be lost if you clear your browser data or switch to a different browser or device.",
      },
      {
        q: "Can I access my progress from another device?",
        a: "Not currently. Since data is stored locally, it's tied to the browser and device you used. Cross-device sync may be added in a future version.",
      },
      {
        q: "How do I reset my progress for a roadmap?",
        a: "You can reset individual topic checkboxes by unchecking them. A full reset option is available in your Account settings page.",
      },
      {
        q: "What data does creating an account store?",
        a: "Your account (name, email, password) is stored in your browser's localStorage. No data is sent to an external server. DevPath currently has no backend — it's entirely client-side.",
      },
    ],
  },
  {
    category: "Open Source",
    items: [
      {
        q: "Is DevPath open source?",
        a: "Yes. The full source code is available on GitHub. You're encouraged to explore it, report issues, or contribute improvements.",
      },
      {
        q: "How can I contribute?",
        a: "Open the GitHub repository, read the README, and submit a pull request. Contributions to roadmap content, new topics, bug fixes, and design improvements are all welcome.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background py-16 sm:py-24">
        <div className="app-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              FAQ
            </p>
            <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Frequently asked
              <br />
              <span className="text-muted-foreground">questions</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-subtle">
              Can&apos;t find what you&apos;re looking for? Read the{" "}
              <Link
                href="/how-it-works"
                className="font-medium text-foreground underline underline-offset-4"
              >
                How it works
              </Link>{" "}
              page or{" "}
              <a
                href="https://github.com/mdnuruzzamannirob/curriculum-platform/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-4"
              >
                open an issue on GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-20 sm:pb-28">
        <div className="app-container">
          <div className="mx-auto max-w-3xl space-y-14">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-faint">
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <details
                      key={item.q}
                      className="group rounded-xl border border-border bg-card"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                        <span className="text-sm sm:text-base">{item.q}</span>
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground text-lg leading-none group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <div className="border-t border-border px-5 py-4">
                        <p className="text-sm leading-relaxed text-subtle">
                          {item.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card/40 py-14 sm:py-20">
        <div className="app-container text-center">
          <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-subtle">
            Browse the roadmaps, or check out the How it works page for a
            detailed walkthrough of the platform.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/how-it-works"
              className={cn(
                buttonVariants({ size: "default" }),
                "h-10 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90",
              )}
            >
              How it works
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/course"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-medium text-foreground hover:bg-card-hover"
            >
              Browse roadmaps
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
