import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DevPath",
  description: "How DevPath handles your data and privacy.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "DevPath is a client-side learning platform. All data — including your account credentials and progress — is stored exclusively in your browser's localStorage.",
      "We do not transmit any personal information to external servers. There is no backend database, analytics tracking, or third-party data sharing.",
    ],
  },
  {
    title: "How Your Data Is Used",
    content: [
      "Your account information (name, email, hashed password) is used solely to authenticate you within this application.",
      "Your learning progress data is used to display your course completion status and personalize the dashboard experience.",
      "Neither your account data nor your progress data ever leaves your device.",
    ],
  },
  {
    title: "Data Storage & Retention",
    content: [
      "All data is stored in your browser's localStorage under the following keys: lp-auth-user (active session), lp-users (user registry), and learning-platform-progress (course progress).",
      "You can clear all data at any time by clearing your browser's site data or by signing out and deleting your account from the Account settings page.",
      "Clearing your browser storage will permanently delete all your progress and account information.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "DevPath does not use cookies for tracking or advertising purposes. The application may use browser session storage for temporary UI state only.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "DevPath does not integrate with any third-party analytics, advertising, or data collection services.",
      "The 'Sign in with Google' and 'Sign in with GitHub' buttons on the auth pages are demonstration features only and do not connect to real OAuth providers. No data is sent to Google or GitHub.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "DevPath is not directed to children under the age of 13. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. Continued use of the platform constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact",
    content: [
      "If you have questions about this Privacy Policy, you can reach us through the About page or by opening an issue in the project repository.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="app-container py-16 sm:py-20">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </p>
          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-base text-muted-foreground">
            Effective date: January 1, 2025
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Your privacy matters. This policy explains what data DevPath
            collects, how it is used, and how you can control it.
          </p>
        </div>

        {/* Notice banner */}
        <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4">
          <p className="text-sm font-medium text-foreground">
            Quick summary:{" "}
            <span className="font-normal text-muted-foreground">
              All your data stays in your browser. We collect nothing, store
              nothing on servers, and share nothing with third parties.
            </span>
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 max-w-3xl">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                {section.title}
              </h2>
              <div className="space-y-2.5">
                {section.content.map((para, j) => (
                  <p
                    key={j}
                    className="text-sm leading-relaxed text-muted-foreground"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-border pt-8">
          <Link
            href="/terms"
            className="text-sm font-medium text-primary hover:underline"
          >
            Terms of Service &rarr;
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            About DevPath
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
