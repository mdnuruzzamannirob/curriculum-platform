"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const activeTheme = resolvedTheme ?? theme ?? "dark";
  const isDark = activeTheme === "dark";
  const title = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
  const Icon = isDark ? Sun : Moon;

  function onToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "shrink-0 inline-flex size-10 items-center justify-center rounded-xl border",
        "border-border-default bg-surface/90 text-text-muted",
        "transition-colors hover:border-border-strong hover:bg-surface-hover hover:text-text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
      )}
      title={title}
      aria-label={title}
    >
      <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
    </button>
  );
}
