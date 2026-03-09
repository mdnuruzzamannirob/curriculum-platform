import { Star } from "lucide-react";

import SectionTop from "@/components/SectionTop";

const reviews = [
  {
    name: "Arjun Sharma",
    role: "Frontend Developer",
    company: "Startup",
    quote:
      "DevPath gave me a clear map of what to learn at each stage. I stopped jumping between random tutorials and finally felt in control of my growth.",
  },
  {
    name: "Priya Nair",
    role: "UX Designer",
    company: "Agency",
    quote:
      "I always struggled to figure out which technical concepts a designer actually needs to know. DevPath's level-based structure made it so obvious.",
  },
  {
    name: "Marcus Chen",
    role: "Backend Engineer",
    company: "Mid-size company",
    quote:
      "The roadmap structure is brilliant. Instead of a flat list of topics, I can see exactly what builds on what — it changed how I approach learning.",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Full-Stack Developer",
    company: "Freelancer",
    quote:
      "I've recommended DevPath to every junior I've mentored. It's the clearest answer to 'what should I learn next?' that I've ever seen.",
  },
  {
    name: "Diego Torres",
    role: "Systems Engineer",
    company: "Enterprise",
    quote:
      "Coming from a systems background, I needed structure to move into web development. DevPath's levels matched exactly where I was and where I needed to go.",
  },
  {
    name: "Sophie Lambert",
    role: "Career Switcher → Developer",
    company: "Bootcamp grad",
    quote:
      "Switching careers is overwhelming. DevPath cut through the noise and told me: here's your level, here's your curriculum. That clarity is priceless.",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-card/40 py-16 sm:py-24">
      <div className="app-container">
        <SectionTop
          titleTop="Trusted by engineers, designers"
          titleBottom="& developers worldwide"
          description="Hear from people who used DevPath to cut through the noise and learn with direction."
          position="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-background p-6"
            >
              <div className="space-y-3">
                <StarRow />
                <p className="text-sm leading-relaxed text-subtle">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {r.name}
                </p>
                <p className="text-xs text-faint">
                  {r.role} &middot; {r.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
