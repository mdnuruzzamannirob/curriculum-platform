"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookOpen, ChevronRight, Github, Menu, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Theme from "@/components/layout/Theme";
import Searchbar from "./Searchbar";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Roadmaps", href: "#roadmaps" },
  { label: "Progress", href: "#progress" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    if (menuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/75">
        <div className="app-container flex h-18 items-center justify-between gap-3">
          {/* Left */}
          <div className="flex items-center gap-3 lg:gap-10">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black transition-colors hover:bg-black/3 lg:hidden dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/5"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link href="/" className="group flex shrink-0 items-center gap-3">
              <BookOpen className="size-7 mt-1 inline-flex items-center justify-center" />

              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight text-black dark:text-white">
                  Classroom
                </span>
                <span className="text-[11px] text-black/50 dark:text-white/45">
                  Learn with clarity
                </span>
              </div>
            </Link>

            {/* Center Nav */}
            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-black/65 hover:text-black dark:text-white/60 dark:hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/3 dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/5"
              aria-label="Open search"
              title="Search"
            >
              <Search className="h-4.5 w-4.5" />
            </button>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className=" h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/3 inline-flex dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/5"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="h-4.5 w-4.5" />
            </Link>

            {/* Same ThemeToggle component */}
            <Theme />

            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "default" }),
                "hidden h-10 rounded-full bg-black px-5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/90 sm:inline-flex dark:bg-white dark:text-black dark:shadow-[0_10px_30px_rgba(255,255,255,0.08)] dark:hover:bg-white/90",
              )}
            >
              Get Started
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-70 transition-all duration-300 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/45 backdrop-blur-[3px] transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
        />

        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[86%] max-w-85 border-r border-black/10 bg-white p-5 shadow-2xl transition-transform duration-300 dark:border-white/10 dark:bg-black",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-black text-white dark:border-white/10 dark:bg-white dark:text-black">
                <BookOpen className="h-4.5 w-4.5" />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight text-black dark:text-white">
                  Classroom
                </span>
                <span className="text-[11px] text-black/50 dark:text-white/45">
                  Learn with clarity
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-black transition-colors hover:bg-black/3 dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/5"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-8 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex h-11 items-center rounded-xl px-3 text-sm font-medium text-black/75 transition-colors hover:bg-black/4 hover:text-black dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6">
            <Link
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className={cn(
                buttonVariants({ size: "default" }),
                "h-11 w-full rounded-full bg-black text-sm font-medium text-white dark:bg-white dark:text-black",
              )}
            >
              Get Started
            </Link>
          </div>
        </aside>
      </div>

      <Searchbar open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
