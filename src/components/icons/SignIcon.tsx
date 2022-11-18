import type { FC } from "react";
import cx from "classnames";
import { IconProps } from ".";
import { Size } from "@/shared/types";

const SignIcon: FC<IconProps> = (props) => {
  const { className, strokeWidth = 1.5, size = Size.Base } = props;
  return (
    <svg
      width="99"
      height="66"
      viewBox="0 0 99 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      className={className}>
      <path
        d="M58.5807 43.4051C58.314 44.9384 57.0344 45.9589 56.8734 47.2465C59.3518 48.0726 60.27 48.9538 63.0386 48.9538C65.6215 48.9538 67.4418 49.0032 69.6781 49.9971C72.9715 51.4608 76.3991 45.051 77.7877 42.5514C80.0751 38.4342 82.2633 34.8368 84.6169 30.6004C86.5659 27.0921 92.2443 23.1749 92.7265 19.0761C92.9463 17.2078 95.8764 14.3366 96.8051 12.247C97.8128 9.97953 97.1926 6.08987 95.4772 4.37447C92.9146 1.81189 90.2403 2.00323 86.751 2.00323C83.4351 2.00323 82.8549 3.10493 80.3012 4.56417C75.4297 7.34792 69.8652 15.9534 67.9708 21.1628C66.1485 26.1742 62.9185 30.7742 60.7622 35.6748C59.6813 38.1314 59.0397 40.7658 58.5807 43.4051Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M56.0198 48.9531C55.5974 53.1772 53.7037 57.273 52.5578 61.2836C52.4009 61.8327 50.4724 64.0142 51.3722 64.2713C52.9411 64.7196 55.6722 64.5329 56.8735 63.4651C61.6787 59.1938 67.5839 53.4149 73.0928 50.6604"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M95.1893 16.25C97.0818 16.4866 97.3996 19.2995 96.7045 20.6897C95.8662 22.3663 95.2069 23.9997 93.9208 25.4465C92.7907 26.7179 87.1939 34.758 85.6757 30.2034"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M81.236 9.5918C81.1624 10.1805 78.9568 11.7991 78.3819 12.4459C77.6103 13.3139 76.2911 15.1542 76.162 16.2514C76.0895 16.8675 74.7635 19.0593 74.3298 19.4931C73.5294 20.2934 72.5606 21.8686 72.0394 22.9109"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M70.4538 27.3516C69.9568 27.4137 69.3895 28.2118 69.1853 28.6201"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2 51.8696C9.39375 51.8696 16.9319 50.3422 23.6179 47.0757C26.7189 45.5607 28.0198 42.5916 28.4345 39.2743C28.5666 38.2174 27.58 38.4104 26.7837 38.4602C24.1068 38.6275 22.0034 40.2879 20.2712 42.2366C17.7089 45.1191 15.3083 49.4483 14.0074 53.0907C13.6354 54.1325 12.9899 55.6653 12.9899 56.754C12.9899 58.2451 24.0937 56.2831 24.7259 56.1435C27.2201 55.5924 29.792 55.1873 32.256 54.5153C33.4907 54.1786 35.2242 54.1275 36.3263 53.4978C37.7095 52.7074 37.5287 54.7127 37.3891 55.759C37.0425 58.3588 34.2787 59.0362 32.1882 60.1686C32.0067 60.2669 29.0979 61.9727 30.9897 62.0454C34.8761 62.1949 35.9164 58.7892 39.854 58.7892C42.9151 58.7892 41.4597 62.4525 44.9192 62.4525C46.116 62.4525 50.2391 61.65 50.8438 62.8595"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SignIcon;
