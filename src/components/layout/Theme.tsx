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
      className=" h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/3 inline-flex dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/5"
      title={title}
      aria-label={title}
    >
      <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
    </button>
  );
}
