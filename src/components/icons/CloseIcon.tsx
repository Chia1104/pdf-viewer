import type { FC } from "react";
import cx from "classnames";
import { IconProps } from "./";
import { Size } from "@/shared/types";

const CloseIcon: FC<IconProps> = (props) => {
  const { className, strokeWidth = 1.5, size = Size.Base } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={cx(
        size === Size.Base && "w-6 h-6",
        size === Size.Small && "w-4 h-4",
        size === Size.Medium && "w-8 h-8",
        size === Size.Large && "w-10 h-10",
        size === Size.ExtraLarge && "w-14 h-14",
        className
      )}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export default CloseIcon;
