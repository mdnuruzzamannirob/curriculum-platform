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
        "group flex shrink-0 items-center gap-2 lg:gap-3",
        className,
      )}
    >
      <Route className="mt-1 size-5 lg:size-6 text-foreground" />

      <div className="flex flex-col leading-none">
        <span className=" font-semibold tracking-tight text-foreground">
          DevPath
        </span>
        <span className="text-[11px] mt-1 tracking-tighter text-faint">
          Career Roadmap
        </span>
      </div>
    </Link>
  );
}
