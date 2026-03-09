"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { courses } from "@/data/courses";

const platformLinks = [
  { label: "Roadmaps", href: "/course" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="app-container">
        {/* Top section */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-5 lg:gap-16">
          {/* Brand column */}
          <div className="space-y-6 col-span-2">
            <BrandLogo />

            <p className="max-w-xs text-sm leading-relaxed text-subtle">
              Structured roadmaps scoped by career level — for developers,
              engineers, designers, and anyone who wants a clear learning path
              without the guesswork.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/mdnuruzzamannirob/curriculum-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:bg-card-hover hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/mdnuruzzamannirob4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:bg-card-hover hover:text-foreground"
                aria-label="Twitter"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:bg-card-hover hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="mailto:hello@devpath.dev"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:bg-card-hover hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Platform links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              Platform
            </h4>
            <ul className="space-y-1">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex h-9 items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              Courses
            </h4>
            <ul className="space-y-1">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/course/${course.id}`}
                    className="inline-flex h-9 items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              Company
            </h4>
            <ul className="space-y-1">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex h-9 items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            &copy; {year} DevPath. All rights reserved.
          </p>
          <p className="text-xs text-faint">
            Open source &mdash; built for focused learners everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
