import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | DevPath",
  description:
    "Terms and conditions for using the DevPath learning platform.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing and using DevPath, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the platform.",
      "DevPath is a free, open-source educational platform. These terms govern your use of the application.",
    ],
  },
  {
    title: "Description of Service",
    content: [
      "DevPath is a structured learning platform that provides programming courses with a hierarchical curriculum. It operates entirely client-side — your account and progress data are stored locally in your browser.",
      "The platform offers course content, progress tracking, and a dashboard for visualizing your learning journey.",
    ],
  },
  {
    title: "User Accounts",
    content: [
      "You may create an account to track your learning progress. Account credentials are stored in your browser's localStorage and are not transmitted to any server.",
      "You are solely responsible for maintaining the confidentiality of your credentials and for all activity under your account.",
      "You must provide accurate information when creating your account. Providing false, misleading, or fraudulent information is a violation of these terms.",
    ],
  },
  {
    title: "Acceptable Use",
    content: [
      "You agree to use DevPath for lawful purposes only and in a manner that does not infringe the rights of others.",
      "You may not attempt to reverse-engineer, modify, distribute, or otherwise misuse the platform's source code in ways that violate the project's open-source license.",
      "You may not use the platform to distribute spam, malicious code, or any content that violates applicable laws.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "The course content, design, and code of DevPath are the intellectual property of the project contributors.",
      "You may use the platform for personal learning and may reference the curriculum for educational purposes, provided proper attribution is given.",
      "Wholesale reproduction of the course content for commercial purposes without permission is prohibited.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    content: [
      "DevPath is provided 'as is' without any warranties, express or implied. We make no guarantees about the completeness, accuracy, or reliability of the course content.",
      "We do not guarantee uninterrupted access to the platform, as it depends on your local browser environment.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, DevPath and its contributors shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.",
      "Our total liability to you for any claims related to these terms shall not exceed zero dollars, as the service is provided free of charge.",
    ],
  },
  {
    title: "Modifications to Terms",
    content: [
      "We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to this page. Continued use of the platform after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms shall be governed by and construed in accordance with applicable law, without regard to conflict of law principles.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="app-container py-16 sm:py-20">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </p>
          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="text-base text-muted-foreground">
            Effective date: January 1, 2025
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            Please read these terms carefully before using DevPath. By using
            the platform, you agree to these terms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 max-w-3xl">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                {i + 1}. {section.title}
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
            href="/privacy"
            className="text-sm font-medium text-primary hover:underline"
          >
            Privacy Policy &rarr;
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
