"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Theme() {
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card-hover"
      title={title}
      aria-label={title}
    >
      <Icon className="size-4.5" strokeWidth={2.2} />
    </button>
  );
}
