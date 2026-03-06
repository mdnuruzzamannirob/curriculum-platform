import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ProgressProvider } from "@/context/ProgressContext";
import SearchBar from "@/components/SearchBar";
import "./globals.css";

const inter = Inter({
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
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        <ProgressProvider>
          <header className="sticky top-0 z-40 border-b border-[#1e1e1e] bg-[#0a0a0a]/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold text-[#e5e5e5] hover:text-white transition-colors shrink-0"
              >
                <span className="text-xl">🎓</span>
                <span className="hidden sm:inline">Learning Platform</span>
              </Link>
              <SearchBar />
            </div>
          </header>
          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            {children}
          </main>
        </ProgressProvider>
      </body>
    </html>
  );
}
