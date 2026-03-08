"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Github,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Theme from "@/components/layout/Theme";
import Searchbar from "./Searchbar";
import BrandLogo from "../BrandLogo";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { label: "Roadmaps", href: "/course" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/mdnuruzzamannirob/curriculum-platform")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d?.stargazers_count === "number") {
          setStars(d.stargazers_count);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <a
      href="https://github.com/mdnuruzzamannirob/curriculum-platform"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden h-10 items-center gap-2 rounded-xl border border-border bg-card px-3 text-xs font-medium text-card-foreground hover:bg-card-hover sm:inline-flex"
      aria-label="GitHub repository"
    >
      <Github className="h-4 w-4 shrink-0" />
      {stars !== null && (
        <span>{stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars}</span>
      )}
      <span className="hidden lg:inline">Star</span>
    </a>
  );
}

function UserMenu() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!user) return null;

  const initials = user.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  function handleLogout() {
    logout();
    setOpen(false);
    router.push("/");
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-card-foreground hover:bg-card-hover"
        aria-expanded={open}
        aria-label="User menu"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-black text-primary-foreground">
          {initials}
        </span>
        <span className="hidden max-w-24 truncate text-xs font-medium sm:block">
          {user.name}
        </span>
        <ChevronRight
          className={cn(
            "h-3.5 w-3.5 text-muted-foreground",
            open && "rotate-90",
          )}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 min-w-48 rounded-2xl border border-border bg-popover p-1 shadow-xl">
          <div className="border-b border-border px-3 py-2.5">
            <p className="text-xs font-semibold text-popover-foreground">
              {user.name}
            </p>
            <p className="truncate text-xs text-faint">{user.email}</p>
          </div>
          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-popover-foreground hover:bg-card-hover"
          >
            <User className="h-3.5 w-3.5" />
            Dashboard
          </Link>
          <Link
            href="/account"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-popover-foreground hover:bg-card-hover"
          >
            <Settings className="h-3.5 w-3.5" />
            Account settings
          </Link>
          <div className="my-1 border-t border-border" />
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { user, isLoaded, logout } = useAuth();
  const router = useRouter();
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

  function handleMobileLogout() {
    logout();
    setMenuOpen(false);
    router.push("/");
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="app-container flex h-18 items-center justify-between gap-3">
          <div className="flex items-center gap-3 lg:gap-10">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-card-foreground lg:hidden"
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
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop search pill */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden h-10 w-52 items-center gap-2 rounded-xl border border-border bg-card px-3 text-sm text-muted-foreground hover:bg-card-hover lg:inline-flex"
              aria-label="Open search"
            >
              <Search className="h-4 w-4 shrink-0" />
              Search roadmaps...
            </button>
            {/* Mobile search icon */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-card-foreground hover:bg-card-hover lg:hidden"
              aria-label="Open search"
              title="Search"
            >
              <Search className="size-4" />
            </button>

            <GitHubStars />

            <Theme />

            {isLoaded && (
              <>
                {user ? (
                  <UserMenu />
                ) : (
                  <div className="flex items-center gap-2">
                    <Link
                      href="/auth/login"
                      className="hidden h-9 items-center px-3 transition-all duration-300 hover:-translate-y-0.5 text-sm hover:bg-card-hover font-medium rounded-full text-muted-foreground hover:text-foreground sm:inline-flex"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/auth/register"
                      className={cn(
                        buttonVariants({ size: "default" }),
                        "h-9 rounded-full bg-primary px-5 text-sm transition-all duration-300 hover:-translate-y-0.5 font-medium text-primary-foreground hover:opacity-90",
                      )}
                    >
                      Sign up
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-70 lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/45 backdrop-blur-[3px]",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
        />

        <aside
          className={cn(
            "absolute left-0 top-0 flex h-full flex-col w-[86%] max-w-85 overflow-y-auto border-r border-border bg-background p-5 shadow-2xl",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <BrandLogo />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-card-foreground hover:bg-card-hover"
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
                className="flex h-11 items-center rounded-xl px-3 text-sm font-medium text-muted-foreground hover:bg-card-hover hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-border pt-4">
            {isLoaded && user ? (
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                    {user.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {user.name}
                    </p>
                    <p className="truncate text-xs text-faint">{user.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleMobileLogout}
                  className="flex h-11 w-full items-center gap-2 rounded-xl px-3 text-sm font-medium text-destructive hover:bg-destructive/10"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/auth/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 items-center justify-center rounded-full border border-border bg-card text-sm font-medium text-card-foreground hover:bg-card-hover"
                >
                  Log in
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "h-10 rounded-full bg-primary text-sm font-medium text-primary-foreground",
                  )}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </aside>
      </div>

      <Searchbar open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
