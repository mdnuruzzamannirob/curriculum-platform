"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--c-bd)] bg-[var(--c-s0)] text-base text-[var(--c-t1)] transition-all hover:border-[var(--c-bd3)] hover:text-[var(--c-t0)] shrink-0"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? "☀" : "🌙"}
    </button>
  );
}
