import { Size } from "@/shared/types";
export interface IconProps {
  className?: string;
  strokeWidth?: number;
  size?: Size | "base" | "small" | "medium" | "large" | "extra-large";
}
export { default as CloseIcon } from "./CloseIcon";
