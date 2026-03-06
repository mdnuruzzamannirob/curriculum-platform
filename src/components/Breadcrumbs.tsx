import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-[#555]">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="select-none">›</span>}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-[#ccc] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-medium text-[#ccc]" : ""}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
