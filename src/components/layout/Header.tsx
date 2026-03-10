"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Theme from "@/components/layout/Theme";
import Searchbar from "./Searchbar";
import BrandLogo from "../BrandLogo";
import { useAuth } from "@/context/AuthContext";
import GitHubStars from "./GitHubStars";
import UserMenu from "./UserMenu";

const navItems = [
  { label: "Roadmaps", href: "/course" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const { user, isLoaded, logout } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // ESC to close + Ctrl+K to open + body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = searchOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  function handleMobileLogout() {
    logout();
    setMenuOpen(false);
    router.push("/");
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="app-container flex h-18 items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-10">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex size-9 lg:size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-card-foreground lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-4 lg:size-4.5" />
            </button>

            <BrandLogo />

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition duration-100 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            {/* Desktop search pill */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="h-9 gap-2 rounded-xl items-center justify-center border border-border bg-card max-lg:w-9 lg:px-2 text-sm hover:text-card-foreground text-muted-foreground transition duration-100 hover:bg-card-hover inline-flex"
              aria-label="Open search"
            >
              <Search className="size-4 lg:size-4.5 shrink-0" />{" "}
              <span className="hidden lg:inline">
                Search
                <span className="ml-1 bg-card-hover font-mono text-subtle px-2 py-1 leading-none inline-flex items-center justify-center rounded-xl">
                  Ctrl + K
                </span>
              </span>
            </button>

            <GitHubStars />
            <Theme />

            {isLoaded && (
              <>
                {user ? (
                  <UserMenu />
                ) : (
                  <Link
                    href="/auth/login"
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "h-10 rounded-xl bg-primary px-5 text-sm transition duration-100 font-semibold text-primary-foreground hover:opacity-90",
                    )}
                  >
                    Login
                  </Link>
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
                className="flex h-11 items-center rounded-sm px-3 text-sm font-medium text-muted-foreground hover:bg-card-hover hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-border pt-4">
            {isLoaded && user ? (
              <div className="flex items-center gap-3 rounded-sm border border-border bg-card px-3 py-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                  {user.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {user.name}
                  </p>
                  <p className="truncate text-xs text-faint">{user.email}</p>
                </div>
                <button
                  onClick={handleMobileLogout}
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-sm font-black text-destructive"
                >
                  <LogOut className="size-4 shrink-0" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/auth/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 items-center justify-center rounded-xl border border-border bg-card text-sm font-medium text-card-foreground hover:bg-card-hover"
                >
                  Log in
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "h-10 rounded-xl bg-primary text-sm font-medium text-primary-foreground",
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
