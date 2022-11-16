import type { FC } from "react";
import cx from "classnames";
import { IconProps } from ".";
import { Size } from "@/shared/types";

const LogoIcon: FC<IconProps> = (props) => {
  const { className, strokeWidth = 1.5, size = Size.Base } = props;
  return (
    <svg
      width="80"
      height="70"
      viewBox="0 0 80 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      className={className}>
      <path
        d="M2 62.8298C19.8241 67.9709 59.1325 72.0839 73.7731 47.4062"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M75.6843 67.6937C69.9656 69.136 63.3606 58.9642 63.3606 58.9642C63.3606 58.9642 67.0235 56.1361 69.0139 53.9613C70.932 51.8656 73.3571 48.1254 73.3571 48.1254C73.3571 48.1254 83.1464 65.8117 75.6843 67.6937Z"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.447 6C25.487 17.9367 21.6469 37.6782 26.447 45.3912C28.8364 49.2304 35.0872 52.0023 43.4074 48.6967"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M62.0972 8.45441C62.0972 10.125 62.8148 7.09066 62.5455 6.44227C61.8321 4.72431 59.5012 3.77384 58.0618 2.71245C55.0973 0.52647 51 3.82448 51 6.49135C51 9.76481 52.22 11.8419 53.41 14.7362C54.1455 16.5253 56.0306 19.5755 57.8096 20.8217C58.8981 21.5842 61.2819 19.6937 62.0972 19.0549C63.3678 18.0594 65.9405 18.3817 67.1413 17.0673C67.9137 16.2219 69.0979 16.0884 69.7755 15.0797C70.2587 14.3605 70.9704 14.506 71.2887 13.5584C71.5498 12.7811 71.9257 11.8372 72.2976 11.1045C73.619 8.50117 73.2966 6.24597 69.4112 6.24597C66.3587 6.24597 64.7579 6.84781 62.0972 8.01272"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default LogoIcon;
