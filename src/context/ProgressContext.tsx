"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { ProgressState, SubtopicStatus } from "@/types";
import { loadProgress, saveProgress } from "@/utils/progress";

interface ProgressContextValue {
  progress: ProgressState;
  isLoaded: boolean;
  updateSubtopicStatus: (
    courseId: string,
    levelId: string,
    moduleId: string,
    topicId: string,
    subtopicId: string,
    status: SubtopicStatus,
  ) => void;
}

const ProgressContext = createContext<ProgressContextValue>({
  progress: {},
  isLoaded: false,
  updateSubtopicStatus: () => {},
});

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setIsLoaded(true);
  }, []);

  const updateSubtopicStatus = useCallback(
    (
      courseId: string,
      levelId: string,
      moduleId: string,
      topicId: string,
      subtopicId: string,
      status: SubtopicStatus,
    ) => {
      setProgress((prev) => {
        const next = structuredClone(prev);
        ((((next[courseId] ??= {})[levelId] ??= {})[moduleId] ??= {})[
          topicId
        ] ??= {})[subtopicId] = status;
        saveProgress(next);
        return next;
      });
    },
    [],
  );

  return (
    <ProgressContext value={{ progress, isLoaded, updateSubtopicStatus }}>
      {children}
    </ProgressContext>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
