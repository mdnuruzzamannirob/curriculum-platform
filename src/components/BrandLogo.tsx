import Link from "next/link";
import { LibraryBig, Route, Sparkles } from "lucide-react";
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
      className={cn("group inline-flex items-center gap-3.5", className)}
      aria-label="Pathshala home"
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] border border-border-default/90 bg-[linear-gradient(180deg,rgba(var(--accent-rgb)/0.18),rgba(255,255,255,0.02))] text-(--accent) shadow-[0_16px_40px_rgba(var(--accent-rgb)/0.2)]">
        <span className="absolute inset-px rounded-[1.2rem] bg-surface-emphasis" />
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--accent-rgb)/0.28),transparent_58%)]" />
        <LibraryBig
          className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-text-faint"
          strokeWidth={2.2}
        />
        <Route className="relative z-10 h-5 w-5" strokeWidth={2.4} />
        <Sparkles
          className="absolute bottom-2 right-2 h-3 w-3 text-text-primary"
          strokeWidth={2.2}
        />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "mt-1 truncate text-[1.1rem] font-bold tracking-widest text-text-primary",
            compact && "text-base",
          )}
        >
          Pathshala
        </span>

        <span className=" text-xs font-medium tracking-tight text-text-subtle">
          Learn. Build. Share.
        </span>
      </span>
    </Link>
  );
}
