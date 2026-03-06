import { Course } from "@/types";
import { javascriptCourse } from "./javascript";

// Register all courses here. To add a new course, create its data file
// and add it to this array.
export const courses: Course[] = [javascriptCourse];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}
