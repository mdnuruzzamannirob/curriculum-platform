import Link from "next/link";
import { ArrowRight, Home, LayoutDashboard } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Container from "./Container";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-default bg-page/90 backdrop-blur-md">
      <Container className="flex items-center gap-4 py-3">
        <BrandLogo compact className="shrink-0" />
        <nav className="hidden items-center gap-1 rounded-full border border-border-default bg-surface/70 p-1 md:flex">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-text-muted hover:bg-surface-hover hover:text-text-primary"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-text-muted hover:bg-surface-hover hover:text-text-primary"
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            Dashboard
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <SearchBar />
          <Link
            href="/dashboard"
            className={cn(
              buttonVariants({ variant: "subtle", size: "sm" }),
              "hidden rounded-full sm:inline-flex",
            )}
          >
            Open Dashboard
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
