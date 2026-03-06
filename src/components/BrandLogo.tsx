import Link from "next/link";
import { Route, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
  href?: string;
}

export default function BrandLogo({
  compact = false,
  className,
  href = "/",
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Pathshala home"
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border-default bg-surface-emphasis text-[var(--accent)] shadow-[0_12px_30px_rgba(var(--accent-rgb)/0.14)]">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--accent-rgb)/0.24),transparent_55%)]" />
        <Route className="relative z-10 h-5 w-5" strokeWidth={2.2} />
        <Sparkles
          className="absolute right-1.5 top-1.5 h-3 w-3 text-text-primary"
          strokeWidth={2.2}
        />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-text-faint">
          Roadmap Learning
        </span>
        <span
          className={cn(
            "truncate text-lg font-black tracking-tight text-text-primary",
            compact && "text-base",
          )}
        >
          Pathshala
        </span>
      </span>
    </Link>
  );
}
