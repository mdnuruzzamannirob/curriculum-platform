import * as courseData from "../src/data/courses/index";
import type { Course } from "../src/types";

type AuditMatch = {
  courseId: string;
  levelId: string;
  moduleId: string;
  topicId: string;
  subtopicId?: string;
  title: string;
  keyword: string;
  type: "topic" | "subtopic";
};

const coursesSource =
  (courseData as { courses?: unknown }).courses ??
  (courseData as { default?: { courses?: unknown } }).default?.courses;

if (!Array.isArray(coursesSource)) {
  throw new Error("Unable to load course list from src/data/courses/index");
}

const courses = coursesSource as Course[];

const keywordRules: Array<{ keyword: string; pattern: RegExp }> = [
  { keyword: "deprecated", pattern: /\bdeprecated\b/i },
  { keyword: "legacy", pattern: /\blegacy\b/i },
  { keyword: "experimental", pattern: /\bexperimental\b/i },
  { keyword: "obsolete", pattern: /\bobsolete\b/i },
  { keyword: "avoid", pattern: /\bavoid\b/i },
  { keyword: "server push", pattern: /\bserver push\b/i },
  { keyword: "cluster module", pattern: /\bcluster module\b/i },
  { keyword: "nexttick", pattern: /\bnexttick\b/i },
  { keyword: "forwardref", pattern: /\bforwardref\b/i },
];

function findKeywords(text: string): string[] {
  const matches: string[] = [];
  for (const rule of keywordRules) {
    if (rule.pattern.test(text)) {
      matches.push(rule.keyword);
    }
  }
  return matches;
}

const matches: AuditMatch[] = [];

for (const course of courses) {
  for (const level of course.levels) {
    for (const courseModule of level.modules) {
      for (const topic of courseModule.topics) {
        for (const keyword of findKeywords(topic.title)) {
          matches.push({
            courseId: course.id,
            levelId: level.id,
            moduleId: courseModule.id,
            topicId: topic.id,
            title: topic.title,
            keyword,
            type: "topic",
          });
        }

        for (const subtopic of topic.subtopics) {
          for (const keyword of findKeywords(subtopic.title)) {
            matches.push({
              courseId: course.id,
              levelId: level.id,
              moduleId: courseModule.id,
              topicId: topic.id,
              subtopicId: subtopic.id,
              title: subtopic.title,
              keyword,
              type: "subtopic",
            });
          }
        }
      }
    }
  }
}

const courseKeywordSummary = new Map<string, Map<string, number>>();

for (const match of matches) {
  const byKeyword = courseKeywordSummary.get(match.courseId) ?? new Map();
  byKeyword.set(match.keyword, (byKeyword.get(match.keyword) ?? 0) + 1);
  courseKeywordSummary.set(match.courseId, byKeyword);
}

console.log("High-Risk Keyword Audit");
console.log("=======================");
console.log(`Courses scanned: ${courses.length}`);
console.log(`Matched entries: ${matches.length}`);

for (const course of courses) {
  const byKeyword = courseKeywordSummary.get(course.id) ?? new Map();
  const keywords = [...byKeyword.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([keyword, count]) => `${keyword}:${count}`);
  console.log(`- ${course.id}: ${keywords.length ? keywords.join(", ") : "none"}`);
}

console.log("");
console.log("Sample Matches (first 60)");
for (const match of matches.slice(0, 60)) {
  const path = `${match.courseId}/${match.levelId}/${match.moduleId}/${match.topicId}${match.subtopicId ? `/${match.subtopicId}` : ""}`;
  console.log(
    `- [${match.keyword}] ${match.type.toUpperCase()} ${path} :: ${match.title}`,
  );
}

if (matches.length > 60) {
  console.log(`...and ${matches.length - 60} more matches.`);
}
