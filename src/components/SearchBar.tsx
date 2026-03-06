"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Binary,
  BookOpen,
  Braces,
  GraduationCap,
  Layers3,
  Search,
  X,
} from "lucide-react";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { buildSearchIndex, searchItems } from "@/utils/search";
import { SearchItem } from "@/types";

const TYPE_META: Record<
  SearchItem["type"],
  { icon: React.ComponentType<{ className?: string }>; label: string }
> = {
  course: { icon: GraduationCap, label: "Course" },
  level: { icon: Layers3, label: "Level" },
  module: { icon: Binary, label: "Module" },
  topic: { icon: BookOpen, label: "Topic" },
  subtopic: { icon: Braces, label: "Subtopic" },
};

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => buildSearchIndex(courses), []);
  const results = useMemo(() => searchItems(index, query), [index, query]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  function clearSearch() {
    setQuery("");
    setOpen(false);
    // Remove search-related params from URL
    router.replace(pathname);
    inputRef.current?.focus();
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-faint" />

        <Input
          ref={inputRef}
          type="text"
          placeholder="Search all topics..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query && setOpen(true)}
          className="w-full pl-9 pr-8"
        />

        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full text-text-faint hover:text-text-primary hover:bg-surface-hover"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <ul className="absolute z-50 mt-1 max-h-80 w-full overflow-auto rounded-xl border border-border-default bg-surface shadow-2xl">
          {results.map((item, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => navigate(item.href)}
                className="flex w-full items-start gap-2 px-4 py-2.5 text-left hover:bg-surface-hover"
              >
                {(() => {
                  const meta = TYPE_META[item.type];
                  const Icon = meta.icon;

                  return (
                    <Badge
                      variant="muted"
                      className="mt-0.5 shrink-0 gap-1 rounded-md px-2 py-1 normal-case tracking-normal"
                    >
                      <Icon className="h-3 w-3" />
                      {meta.label}
                    </Badge>
                  );
                })()}
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-text-primary">
                    {item.title}
                  </p>
                  <p className="truncate text-xs text-text-faint">
                    {item.breadcrumb}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && query && results.length === 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-border-default bg-surface p-4 text-center text-sm text-text-faint shadow-2xl">
          No results found
        </div>
      )}
    </div>
  );
}
