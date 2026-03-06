"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-default bg-surface text-base text-text-muted transition-all hover:border-border-strong hover:text-text-primary shrink-0"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? "☀" : "🌙"}
    </button>
  );
}

