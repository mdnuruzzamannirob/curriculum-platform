"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  LayoutDashboard,
  Stars,
  Target,
  Zap,
} from "lucide-react";

import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import { countModules, countSubtopics, countTopics } from "@/utils/course";
import { buttonVariants } from "@/components/ui/button";
import AnimatedBadge from "../AnimatedBadge";

const Banner = () => {
  const totalModules = courses.reduce(
    (sum, course) => sum + countModules(course),
    0,
  );

  const totalTopics = courses.reduce(
    (sum, course) => sum + countTopics(course),
    0,
  );

  const totalCheckpoints = courses.reduce(
    (sum, course) => sum + countSubtopics(course),
    0,
  );

  const featuredCourse = courses[0];

  const stats = [
    { icon: BookOpen, value: courses.length, label: "Tracks" },
    { icon: Target, value: totalModules, label: "Modules" },
    { icon: Stars, value: totalTopics, label: "Topics" },
    { icon: Zap, value: totalCheckpoints, label: "Checkpoints" },
  ];

  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-background">
      {/* Base */}
      <div className="absolute inset-0 -z-30 bg-background" />

      {/* Visible grid background */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(0 0 0 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.12) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.18)_52%,rgba(255,255,255,0.92)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.10)_45%,rgba(0,0,0,0.78)_100%)]" />
      </div>

      <div className="app-container relative py-12 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <AnimatedBadge />

          {/* Title */}
          <h1 className="mt-6 sm:mt-8 max-w-3xl text-3xl font-black tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl">
            Learn with clarity.
            <br />
            <span className="text-muted-foreground">
              Track progress with purpose.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 sm:mt-8 max-w-190 text-sm text-subtle sm:text-lg">
            A focused learning platform built around structured roadmaps and
            visible progress. Follow level-based paths, complete modules step by
            step, and track every checkpoint as you grow from fundamentals to
            real mastery.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "default" }),
                "h-11 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90",
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              Start Learning
            </Link>

            {featuredCourse && (
              <Link
                href={`/course/${featuredCourse.id}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-card-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-card-hover"
              >
                Explore Roadmaps
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          {/* 4 cards */}
          <div className="mt-12 sm:mt-16 sticky bottom-0 grid w-full max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card/90 p-4 text-left backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-border-strong hover:bg-card-hover hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-primary text-primary-foreground transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                      <Icon className="size-4.5" />
                    </div>

                    <div>
                      <p className="text-xl font-black text-card-foreground">
                        {item.value}
                      </p>
                      <p className="text-xs text-faint">{item.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
