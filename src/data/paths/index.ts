import type { Path } from "@/types";
import { backendPath } from "./backend";
import { expressTrackPath } from "./express-track";
import { nestjsTrackPath } from "./nestjs-track";

export const paths: Path[] = [backendPath, expressTrackPath, nestjsTrackPath];

export function getPathById(id: string): Path | undefined {
  return paths.find((p) => p.id === id);
}
