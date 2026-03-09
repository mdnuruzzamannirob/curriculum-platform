"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Theme() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  function onToggle() {
    const activeTheme =
      resolvedTheme ??
      (theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme) ??
      "light";

    setTheme(activeTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex size-9 lg:size-10 items-center transition duration-100 justify-center rounded-xl border border-border bg-card text-muted-foreground  hover:text-card-foreground hover:bg-card-hover"
      title="Toggle color mode"
      aria-label="Toggle color mode"
    >
      <span className="relative block size-4 lg:size-4.5">
        <Sun
          className="absolute inset-0 m-auto size-4.5 rotate-0 scale-0 transition-transform duration-300 dark:-rotate-90 dark:scale-100"
          strokeWidth={2.2}
        />
        <Moon
          className="absolute inset-0 m-auto size-4.5 rotate-90 scale-100 transition-transform duration-300 dark:rotate-0 dark:scale-0"
          strokeWidth={2.2}
        />
      </span>
    </button>
  );
}
