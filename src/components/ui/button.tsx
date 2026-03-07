import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium outline-none transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        default:
          "border border-border-default bg-surface text-text-primary hover:border-border-strong hover:bg-surface-hover",
        brand:
          "border border-primary/80 bg-primary text-primary-foreground shadow-[0_10px_24px_rgb(var(--brand-rgb)/0.28)] hover:bg-primary/92",
        ghost: "text-text-muted hover:bg-surface-hover hover:text-text-primary",
        subtle:
          "border border-border-default/80 bg-surface-emphasis text-text-secondary hover:border-border-strong hover:text-text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        icon: "size-9.5 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
