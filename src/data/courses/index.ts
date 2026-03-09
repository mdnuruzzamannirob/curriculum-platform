import { Course } from "@/types";
import { javascriptCourse } from "./javascript";
import { typescriptCourse } from "./typescript";
import { nodejsCourse } from "./nodejs";
import { expressCourse } from "./express";
import { nestjsCourse } from "./nestjs";
import { mongodbCourse } from "./mongodb";
import { postgresqlCourse } from "./postgresql";

// Register all courses here. To add a new course, create its data file
// and add it to this array.
export const courses: Course[] = [
  javascriptCourse,
  typescriptCourse,
  nodejsCourse,
  expressCourse,
  nestjsCourse,
  mongodbCourse,
  postgresqlCourse,
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}
