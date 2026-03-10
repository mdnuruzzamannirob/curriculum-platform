import * as courseData from "../src/data/courses/index";
import type { Course } from "../src/types";

const coursesSource =
  (courseData as { courses?: unknown }).courses ??
  (courseData as { default?: { courses?: unknown } }).default?.courses;

if (!Array.isArray(coursesSource)) {
  throw new Error("Unable to load course list from src/data/courses/index.ts");
}

const courses = coursesSource as Course[];

const HEX_COLOR = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
const SAFE_ID = /^[A-Za-z0-9][A-Za-z0-9-]*$/;

type Summary = {
  levels: number;
  modules: number;
  topics: number;
  subtopics: number;
};

const errors: string[] = [];
const warnings: string[] = [];
const summary: Summary = {
  levels: 0,
  modules: 0,
  topics: 0,
  subtopics: 0,
};

function hasText(value: string | undefined): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

function assertUnique(scope: string, ids: string[]) {
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) {
      errors.push(`${scope}: duplicate id "${id}"`);
    }
    seen.add(id);
  }
}

for (const course of courses) {
  if (!hasText(course.title)) errors.push(`${course.id}: empty course title`);
  if (!hasText(course.description))
    errors.push(`${course.id}: empty course description`);
  if (!HEX_COLOR.test(course.color))
    warnings.push(`${course.id}: non-hex course color "${course.color}"`);
  if (!SAFE_ID.test(course.id))
    warnings.push(`${course.id}: course id contains non URL-safe characters`);
  if (course.levels.length !== 6) {
    warnings.push(`${course.id}: expected 6 levels but got ${course.levels.length}`);
  }

  summary.levels += course.levels.length;
  assertUnique(`${course.id} levels`, course.levels.map((level) => level.id));

  for (const level of course.levels) {
    if (!hasText(level.title))
      errors.push(`${course.id}/${level.id}: empty level title`);
    if (!HEX_COLOR.test(level.color ?? ""))
      warnings.push(
        `${course.id}/${level.id}: non-hex level color "${level.color ?? ""}"`,
      );
    if (!SAFE_ID.test(level.id))
      warnings.push(
        `${course.id}/${level.id}: level id contains non URL-safe characters`,
      );
    if (!level.modules.length)
      errors.push(`${course.id}/${level.id}: level has no modules`);

    summary.modules += level.modules.length;
    assertUnique(
      `${course.id}/${level.id} modules`,
      level.modules.map((mod) => mod.id),
    );

    for (const mod of level.modules) {
      if (!hasText(mod.title))
        errors.push(`${course.id}/${level.id}/${mod.id}: empty module title`);
      if (mod.color && !HEX_COLOR.test(mod.color))
        warnings.push(
          `${course.id}/${level.id}/${mod.id}: non-hex module color "${mod.color}"`,
        );
      if (!SAFE_ID.test(mod.id))
        warnings.push(
          `${course.id}/${level.id}/${mod.id}: module id contains non URL-safe characters`,
        );
      if (!mod.topics.length)
        errors.push(`${course.id}/${level.id}/${mod.id}: module has no topics`);

      summary.topics += mod.topics.length;
      assertUnique(
        `${course.id}/${level.id}/${mod.id} topics`,
        mod.topics.map((topic) => topic.id),
      );

      for (const topic of mod.topics) {
        if (!hasText(topic.title))
          errors.push(
            `${course.id}/${level.id}/${mod.id}/${topic.id}: empty topic title`,
          );
        if (!SAFE_ID.test(topic.id))
          warnings.push(
            `${course.id}/${level.id}/${mod.id}/${topic.id}: topic id contains non URL-safe characters`,
          );
        if (!topic.subtopics.length)
          errors.push(
            `${course.id}/${level.id}/${mod.id}/${topic.id}: topic has no subtopics`,
          );

        summary.subtopics += topic.subtopics.length;
        assertUnique(
          `${course.id}/${level.id}/${mod.id}/${topic.id} subtopics`,
          topic.subtopics.map((subtopic) => subtopic.id),
        );

        for (const subtopic of topic.subtopics) {
          if (!hasText(subtopic.title))
            errors.push(
              `${course.id}/${level.id}/${mod.id}/${topic.id}/${subtopic.id}: empty subtopic title`,
            );
          if (!SAFE_ID.test(subtopic.id))
            warnings.push(
              `${course.id}/${level.id}/${mod.id}/${topic.id}/${subtopic.id}: subtopic id contains non URL-safe characters`,
            );
        }
      }
    }
  }
}

console.log(
  `Courses: ${courses.length}, Levels: ${summary.levels}, Modules: ${summary.modules}, Topics: ${summary.topics}, Subtopics: ${summary.subtopics}`,
);
console.log(`Warnings: ${warnings.length}`);
if (warnings.length) {
  for (const warning of warnings.slice(0, 25)) {
    console.log(`WARN  ${warning}`);
  }
  if (warnings.length > 25) {
    console.log(`...and ${warnings.length - 25} more warnings`);
  }
}

if (errors.length) {
  console.log(`Errors: ${errors.length}`);
  for (const error of errors) {
    console.log(`ERROR ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log("Errors: 0");
}
