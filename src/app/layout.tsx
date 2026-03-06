import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Compass, Layers3, LibraryBig } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { ProgressProvider } from "@/context/ProgressContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { courses } from "@/data/courses";
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
                  <div className="flex flex-1 items-center justify-end gap-2">
                    <SearchBar />
                    <ThemeToggle />
                  </div>
                </div>
              </header>
              <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
                {children}
              </main>
              <footer className="border-t border-border-default bg-page/92">
                <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.3fr,1fr]">
                  <div className="space-y-3">
                    <BrandLogo />
                    <p className="max-w-xl text-sm text-text-subtle">
                      Structured learning paths for people who want a cleaner
                      way to progress from fundamentals to mastery.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="app-panel rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <LibraryBig className="h-4 w-4 text-text-muted" />
                        <span className="text-xs uppercase tracking-[0.24em] text-text-faint">
                          Library
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-black text-text-primary">
                        {totalCourses}
                      </p>
                      <p className="text-sm text-text-subtle">
                        Tracks available now
                      </p>
                    </div>
                    <div className="app-panel rounded-2xl p-4">
                      <div className="flex items-center gap-3">
                        <Layers3 className="h-4 w-4 text-text-muted" />
                        <span className="text-xs uppercase tracking-[0.24em] text-text-faint">
                          Depth
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-black text-text-primary">
                        {totalModules}
                      </p>
                      <p className="text-sm text-text-subtle">
                        Modules across {totalTopics} topics
                      </p>
                    </div>
                    <div className="app-panel rounded-2xl p-4 sm:col-span-2">
                      <div className="flex items-center gap-3">
                        <Compass className="h-4 w-4 text-text-muted" />
                        <span className="text-xs uppercase tracking-[0.24em] text-text-faint">
                          Practice Surface
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-black text-text-primary">
                        {totalSubtopics}
                      </p>
                      <p className="text-sm text-text-subtle">
                        Granular learning checkpoints designed for steady
                        progress.
                      </p>
                    </div>
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
