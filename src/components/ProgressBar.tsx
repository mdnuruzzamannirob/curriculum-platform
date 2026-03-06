interface ProgressBarProps {
  percentage: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  color?: string;
}

export default function ProgressBar({
  percentage,
  size = "md",
  showLabel = true,
  color,
}: ProgressBarProps) {
  const height = { sm: "h-1.5", md: "h-2.5", lg: "h-4" }[size];
  const clamped = Math.min(100, Math.max(0, percentage));
  const fillClass = color
    ? "progress-fill-accent"
    : clamped === 100
      ? "progress-fill-complete"
      : clamped > 0
        ? "progress-fill-active"
        : "progress-fill-empty";

  return (
    <div data-accent={color} className="flex items-center gap-2">
      <progress
        className={`progress-track ${height} ${fillClass} w-full flex-1 rounded-full`}
        value={clamped}
        max={100}
      />
      {showLabel && (
        <span className="min-w-[3ch] text-right text-xs font-medium text-text-subtle">
          {clamped}%
        </span>
      )}
    </div>
  );
}
