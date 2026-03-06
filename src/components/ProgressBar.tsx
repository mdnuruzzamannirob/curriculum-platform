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

  return (
    <div className="flex items-center gap-2">
      <div className={`flex-1 rounded-full bg-[#222] ${height}`}>
        <div
          className={`${height} rounded-full transition-all duration-300`}
          style={{
            width: `${clamped}%`,
            backgroundColor: color
              ? color
              : clamped === 100
                ? "#10b981"
                : clamped > 0
                  ? "#3b82f6"
                  : "#333",
          }}
        />
      </div>
      {showLabel && (
        <span className="min-w-[3ch] text-right text-xs font-medium text-[#666]">
          {clamped}%
        </span>
      )}
    </div>
  );
}
