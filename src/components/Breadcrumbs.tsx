import Link from "next/link";
import { ChevronRight, House } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-text-faint">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const isRoot = i === 0;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight className="h-3.5 w-3.5 text-text-disabled" />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 hover:text-text-secondary"
              >
                {isRoot && <House className="h-3.5 w-3.5" />}
                {item.label}
              </Link>
            ) : (
              <span
                className={`inline-flex items-center gap-1.5 ${isLast ? "font-medium text-text-secondary" : ""}`}
              >
                {isRoot && <House className="h-3.5 w-3.5" />}
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
