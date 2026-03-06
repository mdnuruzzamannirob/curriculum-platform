"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { courses } from "@/data/courses";
import { buildSearchIndex, searchItems } from "@/utils/search";
import { SearchItem } from "@/types";

const TYPE_BADGE: Record<SearchItem["type"], string> = {
  course: "bg-purple-500/20 text-purple-400",
  level: "bg-blue-500/20 text-blue-400",
  module: "bg-teal-500/20 text-teal-400",
  topic: "bg-amber-500/20 text-amber-500",
  subtopic: "bg-gray-500/15 text-gray-400",
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
        <svg
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-faint"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search all topics..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query && setOpen(true)}
          className="w-full rounded-lg border border-border-strong bg-surface-emphasis pl-9 pr-8 py-2 text-sm text-text-primary placeholder:text-text-subtle outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/60"
        />

        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full text-text-faint hover:text-text-primary hover:bg-surface-hover"
            aria-label="Clear search"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
                <span
                  className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase ${TYPE_BADGE[item.type]}`}
                >
                  {item.type}
                </span>
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
