"use client";

import { cn } from "@/lib/utils";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import React from "react";

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  initialValue?: number;
  animate?: boolean;
}

function Progress({
  className,
  value: controlledValue,
  initialValue = 13,
  animate = false,
  ...props
}: ProgressProps) {
  const [progress, setProgress] = React.useState(initialValue);

  React.useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const currentProgress = controlledValue ?? progress;

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-3 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary relative flex h-full items-center justify-center transition-all"
        style={{
          width: `${currentProgress}%`,
        }}
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-white">
          {currentProgress}%
        </span>
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
