import Breadcrumbs from "@/components/Breadcrumbs";
import DashboardClient from "./DashboardClient";

export default function DashboardPage() {
  return (
    <div className="app-container space-y-6 py-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Dashboard" }]}
      />

      <div>
        <h1 className="text-2xl font-black text-foreground sm:text-3xl">
          Your Progress
        </h1>
        <p className="mt-1 text-sm text-subtle">
          Track your learning journey across all courses and levels.
        </p>
      </div>

      <DashboardClient />
    </div>
  );
}
