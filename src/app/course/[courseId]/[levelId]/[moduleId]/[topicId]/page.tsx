"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getCourseById } from "@/data/courses";
import { findLevel, findModule, findTopic } from "@/utils/course";
import { useProgress } from "@/context/ProgressContext";
import { calcTopicProgress } from "@/utils/progress";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProgressBar from "@/components/ProgressBar";
import SubtopicChecklist from "@/components/SubtopicChecklist";

export default function TopicPage({
  params,
}: {
  params: Promise<{
    courseId: string;
    levelId: string;
    moduleId: string;
    topicId: string;
  }>;
}) {
  const { courseId, levelId, moduleId, topicId } = use(params);

  const course = getCourseById(courseId);
  if (!course) notFound();

  const level = findLevel(course, levelId);
  if (!level) notFound();

  const mod = findModule(level, moduleId);
  if (!mod) notFound();

  const topic = findTopic(mod, topicId);
  if (!topic) notFound();

  const { progress, isLoaded } = useProgress();
  const tp = calcTopicProgress(progress, courseId, levelId, moduleId, topic);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Dashboard", href: "/" },
          { label: course.title, href: `/course/${course.id}` },
          {
            label: level.title,
            href: `/course/${course.id}?level=${level.id}`,
          },
          {
            label: mod.title,
            href: `/course/${course.id}?level=${level.id}&module=${mod.id}`,
          },
          { label: topic.title },
        ]}
      />

      {/* Topic header */}
      <div className="mt-4 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">{topic.title}</h1>
        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <span className="rounded-full bg-blue-50 px-2.5 py-0.5 font-medium text-blue-600">
            {level.title}
          </span>
          <span className="rounded-full bg-teal-50 px-2.5 py-0.5 font-medium text-teal-600">
            {mod.title}
          </span>
          <span className="rounded-full bg-purple-50 px-2.5 py-0.5 font-medium text-purple-600">
            {course.title}
          </span>
        </div>
        {topic.description && (
          <p className="mt-3 text-sm text-gray-500">{topic.description}</p>
        )}
        {isLoaded && (
          <div className="mt-4 max-w-sm">
            <ProgressBar percentage={tp.percentage} size="md" />
            <p className="mt-1 text-xs text-gray-400">
              {tp.completed}/{tp.total} subtopics completed
            </p>
          </div>
        )}
      </div>

      {/* Subtopics */}
      <div>
        <h2 className="mb-3 text-sm font-semibold text-gray-700">Subtopics</h2>
        <SubtopicChecklist
          subtopics={topic.subtopics}
          courseId={courseId}
          levelId={levelId}
          moduleId={moduleId}
          topicId={topicId}
        />
      </div>
    </div>
  );
}
