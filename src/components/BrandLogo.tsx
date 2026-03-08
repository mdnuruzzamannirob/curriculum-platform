import Link from "next/link";
import { BookOpen } from "lucide-react";
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
      className={cn("group flex shrink-0 items-center gap-3", className)}
    >
      <BookOpen className="mt-1 size-7 text-foreground" />

      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Classroom
        </span>
        <span className="text-[11px] text-faint">Learn with clarity</span>
      </div>
    </Link>
  );
}
