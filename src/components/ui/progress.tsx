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
        "relative h-5 w-full overflow-hidden rounded-sm bg-gray-300",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary relative flex h-full items-center justify-center p-1 transition-all"
        style={{
          width: `${currentProgress}%`,
        }}
      >
        <span className={"pl-7 text-center text-lg font-medium"}>
          {currentProgress}%
        </span>
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
}

export { Progress };
