"use client";

import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { ProgressState, SubtopicStatus } from "@/types";
import { loadProgress, saveProgress } from "@/utils/progress";

const PROGRESS_CHANGE_EVENT = "learning-platform-progress-change";
const EMPTY_PROGRESS: ProgressState = {};
const SERVER_SNAPSHOT: ProgressSnapshot = {
  progress: EMPTY_PROGRESS,
  isLoaded: false,
};

let cachedProgressRaw: string | null | undefined;
let cachedClientSnapshot: ProgressSnapshot = SERVER_SNAPSHOT;

interface ProgressSnapshot {
  progress: ProgressState;
  isLoaded: boolean;
}

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
  progress: EMPTY_PROGRESS,
  isLoaded: false,
  updateSubtopicStatus: () => {},
});

function getProgressSnapshot(): ProgressSnapshot {
  if (typeof window === "undefined") {
    return SERVER_SNAPSHOT;
  }

  const raw = window.localStorage.getItem("learning-platform-progress");

  if (raw === cachedProgressRaw) {
    return cachedClientSnapshot;
  }

  cachedProgressRaw = raw;
  cachedClientSnapshot = {
    progress: loadProgress(),
    isLoaded: true,
  };

  return cachedClientSnapshot;
}

function getProgressServerSnapshot(): ProgressSnapshot {
  return SERVER_SNAPSHOT;
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const handleChange = () => {
    callback();
  };

  window.addEventListener("storage", handleChange);
  window.addEventListener(PROGRESS_CHANGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(PROGRESS_CHANGE_EVENT, handleChange);
  };
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribe,
    getProgressSnapshot,
    getProgressServerSnapshot,
  );

  const updateSubtopicStatus = useCallback(
    (
      courseId: string,
      levelId: string,
      moduleId: string,
      topicId: string,
      subtopicId: string,
      status: SubtopicStatus,
    ) => {
      const next = structuredClone(loadProgress());
      ((((next[courseId] ??= {})[levelId] ??= {})[moduleId] ??= {})[topicId] ??=
        {})[subtopicId] = status;
      saveProgress(next);
      cachedProgressRaw = JSON.stringify(next);
      cachedClientSnapshot = {
        progress: next,
        isLoaded: true,
      };
      window.dispatchEvent(new Event(PROGRESS_CHANGE_EVENT));
    },
    [],
  );

  return (
    <ProgressContext
      value={{
        progress: snapshot.progress,
        isLoaded: snapshot.isLoaded,
        updateSubtopicStatus,
      }}
    >
      {children}
    </ProgressContext>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
