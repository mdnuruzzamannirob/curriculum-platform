import type { LucideIcon, LucideProps } from "lucide-react";
import {
  Binary,
  BookOpen,
  Braces,
  CircleHelp,
  Compass,
  GraduationCap,
  Layers3,
  LibraryBig,
  Route,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { AppIconName } from "@/types";

export const appIcons: Record<AppIconName, LucideIcon> = {
  binary: Binary,
  bookOpen: BookOpen,
  braces: Braces,
  circleHelp: CircleHelp,
  compass: Compass,
  graduationCap: GraduationCap,
  layers: Layers3,
  library: LibraryBig,
  route: Route,
  search: Search,
  sparkles: Sparkles,
  workflow: Workflow,
};

export function getAppIcon(name: AppIconName): LucideIcon {
  return appIcons[name] ?? Braces;
}

interface AppIconProps extends LucideProps {
  name: AppIconName;
}

export function AppIcon({ name, ...props }: AppIconProps) {
  const Icon = appIcons[name] ?? Braces;
  return <Icon {...props} />;
}
