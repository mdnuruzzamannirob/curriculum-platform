import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";
import Link from "next/link";
import { ProgressProvider } from "@/context/ProgressContext";
import SearchBar from "@/components/SearchBar";
import "./globals.css";

const geistSans = Google_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
        className={`${geistSans.className}  antialiased`}
      >
        <ProgressProvider>
          <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors shrink-0"
              >
                <span className="text-xl">🎓</span>
                <span className="hidden sm:inline">Learning Platform</span>
              </Link>
              <SearchBar />
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            {children}
          </main>
        </ProgressProvider>
      </body>
    </html>
  );
}
