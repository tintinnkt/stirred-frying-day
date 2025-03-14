import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronLeft,
  LucideIcon,
  LucideProps,
  Plus,
} from "lucide-react";

interface ButtonConfig {
  label?: string | { sm: string; md: string };
  icon?: LucideIcon;
  placeAt?: "start" | "end";
  iconProps?: LucideProps;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

const buttonConfig: Record<string, ButtonConfig> = {
  select: {
    label: "select",
    variant: "default",
    icon: Plus,
  },
  selected: {
    label: "selected",
    variant: "outline",
    icon: Check,
  },
  back: {
    label: "back",
    variant: "secondary",
    icon: ChevronLeft,
  },
};

interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  useFor: keyof typeof buttonConfig;
  hideTextOnMobile?: boolean;
  iconProps?: LucideProps;
}

export const CustomButton = ({
  useFor,
  hideTextOnMobile,
  className,
  ...props
}: CustomButtonProps) => {
  const config = buttonConfig[useFor];
  const Icon = config.icon;

  return (
    <Button
      className={cn(
        "flex items-center gap-2 rounded-full",
        config.className,
        hideTextOnMobile && "max-md:size-10 max-md:p-0",
        !config.label && "size-10 p-0",
        className,
      )}
      variant={config.variant || "default"}
      {...props}
    >
      {config.placeAt !== "end" && Icon && (
        <Icon className="size-5" {...config.iconProps} />
      )}
      {!hideTextOnMobile && config.label && (
        <span className="hidden md:block">
          {typeof config.label === "string" ? config.label : config.label.md}
        </span>
      )}
    </Button>
  );
};
