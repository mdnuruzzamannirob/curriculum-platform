"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  LayoutDashboard,
  Sparkles,
  Stars,
  Target,
  Zap,
} from "lucide-react";

import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import { countModules, countSubtopics, countTopics } from "@/utils/course";
import { buttonVariants } from "@/components/ui/button";

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
    <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 -z-30 bg-white dark:bg-black" />

      {/* Visible grid background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 opacity-[0.3] dark:opacity-[0.6] bg-[linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[36px_36px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.18)_52%,rgba(255,255,255,0.92)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.10)_45%,rgba(0,0,0,0.78)_100%)]" />
      </div>

      <div className="app-container relative py-12 sm:py-16 lg:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <div className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-black/10 bg-black/3 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/75 backdrop-blur-sm dark:border-white/10 dark:bg-white/4 dark:text-white/80">
            <span className="badge-shine absolute inset-0 translate-x-[-130%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
            <Sparkles className="relative h-3.5 w-3.5 text-pink-500" />
            <span className="relative">Structured Learning Platform</span>
          </div>

          {/* Title unchanged */}
          <h1 className="mt-5 max-w-3xl text-3xl font-black leading-[1.02] tracking-[-0.055em] text-black sm:text-5xl lg:text-6xl dark:text-white">
            Learn with clarity.
            <br />
            <span className="text-black/55 dark:text-white/60">
              Track progress with purpose.
            </span>
          </h1>

          {/* Tighter description */}
          <p className="mt-4 max-w-190 text-sm leading-6 text-black/62 sm:text-[15px] sm:leading-7 dark:text-white/58">
            A focused learning platform built for level-based growth. Follow
            structured roadmaps, unlock topics step by step, and monitor your
            progress through a clean system designed to keep learning visible,
            motivating, and finishable.
          </p>

          {/* Buttons unchanged */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "default" }),
                "h-11 rounded-full bg-black px-5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/90 dark:bg-white dark:text-black dark:shadow-[0_10px_30px_rgba(255,255,255,0.10)] dark:hover:bg-white/92",
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              Start Learning
            </Link>

            {featuredCourse && (
              <Link
                href={`/course/${featuredCourse.id}`}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/3 dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/5"
              >
                Explore Roadmaps
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          {/* 4 cards */}
          <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/85 p-4 text-left backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-black/15 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/4 dark:hover:border-white/15 "
                  style={{
                    animation: `cardRise 0.7s ease-out ${i * 120}ms both`,
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/15 to-transparent dark:via-white/20" />
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-black/4 blur-2xl transition-all duration-500 group-hover:scale-125 dark:bg-white/5" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/8 bg-black text-white transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 dark:border-white/10 dark:bg-white dark:text-black">
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <div>
                      <p className="text-xl font-black text-black dark:text-white">
                        {item.value}
                      </p>
                      <p className="text-xs text-black/55 dark:text-white/50">
                        {item.label}
                      </p>
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
