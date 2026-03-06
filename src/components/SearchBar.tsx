"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { courses } from "@/data/courses";
import { buildSearchIndex, searchItems } from "@/utils/search";
import { SearchItem } from "@/types";

const TYPE_BADGE: Record<SearchItem["type"], string> = {
  course: "bg-purple-500/20 text-purple-300",
  level: "bg-blue-500/20 text-blue-300",
  module: "bg-teal-500/20 text-teal-300",
  topic: "bg-amber-500/20 text-amber-300",
  subtopic: "bg-gray-500/20 text-gray-300",
};

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
    setQuery("");
    setOpen(false);
    router.push(href);
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search all topics..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => query && setOpen(true)}
        className="w-full rounded-lg border border-[#333] bg-[#1a1a1a] px-4 py-2 text-sm text-[#e5e5e5] placeholder-[#555] outline-none focus:border-[#555] transition"
      />

      {open && results.length > 0 && (
        <ul className="absolute z-50 mt-1 max-h-80 w-full overflow-auto rounded-lg border border-[#2a2a2a] bg-[#141414] shadow-2xl">
          {results.map((item, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => navigate(item.href)}
                className="flex w-full items-start gap-2 px-4 py-2.5 text-left hover:bg-[#1e1e1e] transition-colors"
              >
                <span
                  className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase ${TYPE_BADGE[item.type]}`}
                >
                  {item.type}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[#e5e5e5]">
                    {item.title}
                  </p>
                  <p className="truncate text-xs text-[#555]">
                    {item.breadcrumb}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && query && results.length === 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-[#2a2a2a] bg-[#141414] p-4 text-center text-sm text-[#555] shadow-2xl">
          No results found
        </div>
      )}
    </div>
  );
}
