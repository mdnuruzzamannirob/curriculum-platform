"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const title =
    theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <Button
      onClick={toggle}
      variant="subtle"
      size="icon"
      className="shrink-0"
      title={title}
      aria-label={title}
    >
      <Icon className="h-4.5 w-4.5" strokeWidth={2.2} />
    </Button>
  );
}
