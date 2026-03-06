import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import Link from "next/link";
import { ProgressProvider } from "@/context/ProgressContext";
import { ThemeProvider } from "@/context/ThemeContext";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

const inter = Google_Sans({
  variable: "--font-app-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learning Platform",
  description: "Roadmap-based learning dashboard",
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
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider>
          <ProgressProvider>
            <header className="sticky top-0 z-40 border-b border-bd bg-bg/90 backdrop-blur-sm">
              <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-bold text-t0 hover:opacity-80 transition-opacity shrink-0"
                >
                  <span className="text-xl">🎓</span>
                  <span className="hidden sm:inline">Learning Platform</span>
                </Link>
                <div className="flex flex-1 items-center justify-end gap-2">
                  <SearchBar />
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
              {children}
            </main>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
