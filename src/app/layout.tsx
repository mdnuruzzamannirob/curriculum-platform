import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Home,
  Layers3,
  LayoutDashboard,
  LibraryBig,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { buttonVariants } from "@/components/ui/button";
import { ProgressProvider } from "@/context/ProgressContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import { countModules, countSubtopics, countTopics } from "@/utils/course";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-app-sans",
  subsets: ["latin"],
  display: "swap",
});

const totalCourses = courses.length;
const totalModules = courses.reduce(
  (sum, course) => sum + countModules(course),
  0,
);
const totalTopics = courses.reduce(
  (sum, course) => sum + countTopics(course),
  0,
);
const totalSubtopics = courses.reduce(
  (sum, course) => sum + countSubtopics(course),
  0,
);

export const metadata: Metadata = {
  title: "Pathshala",
  description: "Roadmap-based learning dashboard for structured mastery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flicker: apply saved theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('lp-theme')||'dark';if(t==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${jakarta.className} page-shell antialiased`}
      >
        <ThemeProvider>
          <ProgressProvider>
            <div className="relative flex min-h-screen flex-col">
              <header className="sticky top-0 z-40 border-b border-border-default bg-page/88 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
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
                </div>
              </header>
              <main>{children}</main>
              <footer className="border-t border-border-default bg-page/92">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-3">
                      <BrandLogo />
                      <p className="max-w-xl text-sm text-text-subtle">
                        Structured learning paths for people who want a cleaner
                        way to progress from fundamentals to mastery.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <Link
                        href="/"
                        className="rounded-full border border-border-default px-3 py-1.5 text-text-muted hover:border-border-strong hover:text-text-primary"
                      >
                        Home
                      </Link>
                      <Link
                        href="/dashboard"
                        className="rounded-full border border-border-default px-3 py-1.5 text-text-muted hover:border-border-strong hover:text-text-primary"
                      >
                        Dashboard
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 border-t border-border-default pt-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border-default px-3 py-1.5 text-sm text-text-muted">
                      <LibraryBig className="h-3.5 w-3.5" />
                      {totalCourses} track{totalCourses === 1 ? "" : "s"}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border-default px-3 py-1.5 text-sm text-text-muted">
                      <Layers3 className="h-3.5 w-3.5" />
                      {totalModules} modules across {totalTopics} topics
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border-default px-3 py-1.5 text-sm text-text-muted">
                      <Compass className="h-3.5 w-3.5" />
                      {totalSubtopics} checkpoints
                    </span>
                  </div>
                </div>
              </footer>
            </div>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
