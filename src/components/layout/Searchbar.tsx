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
        <div className="rounded-[28px] border border-border bg-popover text-popover-foreground shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-4 sm:px-6">
            <div>
              <p className="text-sm font-semibold text-popover-foreground">
                Search
              </p>
              <p className="text-xs text-faint">
                Search roadmaps, modules, topics
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-card-foreground transition-colors hover:bg-card-hover"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-faint" />
              <input
                autoFocus
                type="text"
                placeholder="Search roadmaps, topics, modules..."
                className="h-14 w-full rounded-2xl border border-input bg-background pl-12 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-border-strong"
              />
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-faint">
                Quick Links
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-card-hover"
                  >
                    <span className="text-sm font-medium text-card-foreground">
                      {item.label}
                    </span>
                    <ArrowRight className="h-4 w-4 text-faint transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-faint">
              <span>Press ESC to close</span>
              <span>Search experience coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
