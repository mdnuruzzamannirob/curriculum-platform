interface ProgressBarProps {
  percentage: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export default function ProgressBar({
  percentage,
  size = "md",
  showLabel = true,
}: ProgressBarProps) {
  const height = { sm: "h-1.5", md: "h-2.5", lg: "h-4" }[size];
  const clamped = Math.min(100, Math.max(0, percentage));

  const barColor =
    clamped === 100
      ? "bg-emerald-500"
      : clamped > 0
        ? "bg-blue-500"
        : "bg-gray-300";

  return (
    <div className="flex items-center gap-2">
      <div className={`flex-1 rounded-full bg-gray-200 ${height}`}>
        <div
          className={`${height} rounded-full transition-all duration-300 ${barColor}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="min-w-[3ch] text-right text-xs font-medium text-gray-500">
          {clamped}%
        </span>
      )}
    </div>
  );
}
