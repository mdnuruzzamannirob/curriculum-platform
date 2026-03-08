import Link from "next/link";
import { Route } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  compact?: boolean;
  className?: string;
  href?: string;
}

export default function BrandLogo({ className, href = "/" }: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex shrink-0 transition-all duration-300 hover:-translate-y-0.5 items-center gap-3",
        className,
      )}
    >
      <Route className="mt-1 size-7 text-foreground" />

      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-foreground">
          DevPath
        </span>
        <span className="text-[11px] text-faint">Level-based roadmaps</span>
      </div>
    </Link>
  );
}
