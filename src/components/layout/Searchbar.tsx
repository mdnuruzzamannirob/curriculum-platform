"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { courses } from "@/data/courses";
import { buildSearchIndex, searchItems } from "@/utils/search";
import type { SearchItem } from "@/types";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

const TYPE_LABEL: Record<SearchItem["type"], string> = {
  course: "Course",
  level: "Level",
  module: "Module",
  topic: "Topic",
  subtopic: "Subtopic",
};

const TYPE_CLS: Record<SearchItem["type"], string> = {
  course: "bg-blue-500/10 text-blue-500",
  level: "bg-emerald-500/10 text-emerald-600",
  module: "bg-amber-500/10 text-amber-600",
  topic: "bg-violet-500/10 text-violet-500",
  subtopic: "bg-gray-500/10 text-subtle",
};

const searchIndex = buildSearchIndex(courses);

const quickLinks = [
  { label: "JavaScript Track", href: "/course/javascript" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Courses", href: "/course" },
];

export default function Searchbar({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchItems(searchIndex, query), [query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  function handleClose() {
    setQuery("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-90 backdrop-blur" onMouseDown={handleClose}>
      <div className="mx-auto flex h-full w-full max-w-2xl flex-col px-4 pt-10 sm:px-6">
        <div
          className="overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-2xl"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Input row */}
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Search className="h-5 w-5 shrink-0 text-faint" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, topics, subtopics…"
              className="h-14 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-faint"
            />
            <button
              type="button"
              onClick={handleClose}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-card-foreground hover:bg-card-hover"
              aria-label="Close search"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Results / empty state */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim() ? (
              results.length > 0 ? (
                <div className="p-2">
                  {results.map((item, i) => (
                    <Link
                      key={`${item.href}-${i}`}
                      href={item.href}
                      onClick={handleClose}
                      className="flex items-start gap-3 rounded-sm px-3 py-2.5 hover:bg-card-hover"
                    >
                      <div className="min-w-16">
                        <span
                          className={cn(
                            "mt-0.5 shrink-0 rounded-md px-1.5  py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                            TYPE_CLS[item.type],
                          )}
                        >
                          {TYPE_LABEL[item.type]}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {item.title}
                        </p>
                        <p className="truncate text-xs text-faint">
                          {item.breadcrumb}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-10 text-center text-sm text-faint">
                  No results for &ldquo;{query}&rdquo;
                </div>
              )
            ) : (
              <div className="p-2">
                <p className="mb-1 px-3 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-faint">
                  Quick links
                </p>
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleClose}
                    className="flex items-center gap-3 rounded-sm px-3 py-2.5 hover:bg-card-hover"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-border px-5 py-2.5">
            <span className="text-xs text-faint">
              Press{" "}
              <span className="bg-card-hover rounded px-1 py-0.5 font-bold">
                ESC
              </span>{" "}
              to close
            </span>
            {query.trim() && results.length > 0 && (
              <span className="text-xs text-faint">
                {results.length} results
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
