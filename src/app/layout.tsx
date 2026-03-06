import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import { ProgressProvider } from "@/context/ProgressContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-app-sans",
  subsets: ["latin"],
  display: "swap",
});

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
            <div className="flex min-h-screen flex-col">
              <AppHeader />
              <main className="flex-1">{children}</main>
              <AppFooter />
            </div>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
