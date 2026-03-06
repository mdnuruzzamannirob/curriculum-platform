export type SubtopicStatus = "not-started" | "in-progress" | "completed";

export type AppIconName =
  | "binary"
  | "bookOpen"
  | "braces"
  | "circleHelp"
  | "compass"
  | "graduationCap"
  | "layers"
  | "library"
  | "route"
  | "search"
  | "sparkles"
  | "workflow";

export interface Subtopic {
  id: string;
  title: string;
  description?: string;
}

export interface Topic {
  id: string;
  title: string;
  description?: string;
  subtopics: Subtopic[];
}

export interface Module {
  id: string;
  title: string;
  description?: string;
  icon?: AppIconName;
  color?: string;
  topics: Topic[];
}

export interface Level {
  id: string;
  title: string;
  description?: string;
  color?: string;
  modules: Module[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: AppIconName;
  color: string;
  levels: Level[];
}

// Nested progress map: courseId -> levelId -> moduleId -> topicId -> subtopicId -> status
export type ProgressState = Record<
  string,
  Record<string, Record<string, Record<string, Record<string, SubtopicStatus>>>>
>;

export interface ProgressStats {
  completed: number;
  inProgress: number;
  total: number;
  percentage: number;
}

export interface SearchItem {
  type: "course" | "level" | "module" | "topic" | "subtopic";
  title: string;
  breadcrumb: string;
  href: string;
}
