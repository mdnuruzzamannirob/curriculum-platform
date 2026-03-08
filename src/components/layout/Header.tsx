"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Theme from "@/components/layout/Theme";
import Searchbar from "./Searchbar";
import BrandLogo from "../BrandLogo";

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
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="app-container flex h-18 items-center justify-between gap-3">
          <div className="flex items-center gap-3 lg:gap-10">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card-hover lg:hidden "
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <BrandLogo />

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card-hover"
              aria-label="Open search"
              title="Search"
            >
              <Search className="size-4" />
            </button>

            {/* <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card-hover"
              aria-label="GitHub"
              title="GitHub"
            >
              <Linkedin className="size-4" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 px-3 items-center justify-center rounded-xl border border-border bg-card text-card-foreground transition-all gap-1.5 text-xs duration-300 hover:-translate-y-0.5 hover:bg-card-hover"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="size-4" /> 12k
            </Link> */}

            <Theme />

            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "default" }),
                "hidden h-10 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:inline-flex",
              )}
            >
              Get Started
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

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
            "absolute left-0 top-0 h-full w-[86%] max-w-85 border-r border-border bg-background p-5 shadow-2xl transition-transform duration-300",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <BrandLogo />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card-hover"
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
                className="flex h-11 items-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-card-hover hover:text-foreground"
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
                "h-11 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground",
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
