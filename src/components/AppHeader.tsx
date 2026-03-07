"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Home, LayoutDashboard, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Container from "./Container";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export default function AppHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-default bg-page/86 backdrop-blur-xl">
      <nav className="app-container  flex items-center justify-between gap-3 py-3">
        <div className="flex items-center gap-4">
          <BrandLogo compact className="shrink-0" />

          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ variant: "brand", size: "default" }),
              "group hidden rounded-xl px-4 sm:inline-flex",
            )}
          >
            Explore Courses
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-default bg-surface/70 text-text-muted transition-colors hover:bg-surface-hover hover:text-text-primary sm:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-border-default bg-page/95 backdrop-blur-md md:hidden">
          <Container className="py-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      active
                        ? "accent-bg-soft accent-text"
                        : "text-text-muted hover:bg-surface-hover hover:text-text-primary",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-3 border-t border-border-default pt-3">
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "w-full rounded-xl",
                )}
              >
                Open Dashboard
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
