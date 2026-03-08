"use client";

import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

const quickLinks = [
  { label: "Frontend Roadmap", href: "/roadmaps/frontend" },
  { label: "Backend Roadmap", href: "/roadmaps/backend" },
  { label: "AI / ML Roadmap", href: "/roadmaps/ai-ml" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Searchbar({ open, onClose }: SearchOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-90 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col px-4 pt-16 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-black">
          <div className="flex items-center justify-between border-b border-black/10 px-4 py-4 dark:border-white/10 sm:px-6">
            <div>
              <p className="text-sm font-semibold text-black dark:text-white">
                Search
              </p>
              <p className="text-xs text-black/50 dark:text-white/45">
                Search roadmaps, modules, topics
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black transition-colors hover:bg-black/3 dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/5"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/40 dark:text-white/35" />
              <input
                autoFocus
                type="text"
                placeholder="Search roadmaps, topics, modules..."
                className="h-14 w-full rounded-2xl border border-black/10 bg-black/3 pl-12 pr-4 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-black/20 focus:bg-white dark:border-white/10 dark:bg-white/4 dark:text-white dark:placeholder:text-white/35 dark:focus:border-white/20 dark:focus:bg-white/6"
              />
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/45 dark:text-white/40">
                Quick Links
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/3 dark:border-white/10 dark:bg-white/3 dark:hover:bg-white/5"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">
                      {item.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-black/45 transition-transform duration-300 group-hover:translate-x-0.5 dark:text-white/45" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-black/45 dark:text-white/40">
              <span>Press ESC to close</span>
              <span>Search experience coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
