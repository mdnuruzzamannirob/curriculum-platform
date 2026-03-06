import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-border-strong bg-surface-emphasis px-3 py-2 text-sm text-text-primary outline-none placeholder:text-text-subtle focus-visible:border-[var(--accent)] focus-visible:ring-4 focus-visible:ring-[rgba(var(--accent-rgb)/0.16)]",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
