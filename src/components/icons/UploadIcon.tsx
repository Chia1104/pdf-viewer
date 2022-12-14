import type { FC } from "react";
import { IconProps } from ".";

const UploadIcon: FC<IconProps> = (props) => {
  const { className, strokeWidth = 1.5 } = props;
  return (
    <svg
      width="74"
      height="83"
      viewBox="0 0 74 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      className={className}>
      <path
        d="M2 9.49705C2 29.4769 2.83066 48.8401 5.44982 68.3126C6.04704 72.7526 6.87673 76.8047 9.90323 80.3205C11.7029 82.411 27.3284 79.0376 29.5986 78.7466C34.3203 78.1414 41.159 77.5165 45.6559 76.1235C51.1046 74.4357 57.3551 76.2858 62.9677 75.5406C69.1968 74.7137 70.871 70.6248 70.871 64.5819C70.871 58.7917 70.871 53.0015 70.871 47.2113C70.871 38.1765 72 29.2002 72 19.9894C72 16.1422 72 12.295 72 8.44782C72 2.27552 63.5081 2.1524 58.4516 2.1524C39.3308 2.1524 19.2192 0.446728 2 8.44782"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M11.7318 18.4362C20.5553 18.4362 29.6045 17.4902 38.2228 15.7666C40.2527 15.3606 42.2056 14.9966 44.2603 14.7398C45.9155 14.5329 47.6692 13.6309 49.2504 13.6309C52.0228 13.6309 54.7951 13.6309 57.5674 13.6309"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M13.5801 28.7858C17.9 28.7858 22.3654 29.1106 26.6818 28.7653C30.4424 28.4644 34.3055 27.2429 38.0175 26.568C40.7109 26.0783 43.0427 25.9759 45.6568 25.1715C46.8354 24.8089 48.2984 25.1596 49.5175 25.0073C51.6118 24.7455 53.721 24.6465 55.7192 23.9805"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12.1014 39.8762C22.0342 39.8762 32.0968 37.1953 42.0424 36.919C44.4569 36.852 46.5899 36.491 48.9013 35.8306C51.2231 35.1673 54.3266 35.7671 56.4584 34.7012"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12.1014 50.2247C12.4115 51.465 25.1388 50.5944 26.1068 50.5944C31.0741 50.5944 36.0154 50.7506 40.9335 50.2042C45.107 49.7405 50.1281 49.139 53.8709 47.2676"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M14.689 62.0538C19.3574 62.0538 24.0258 62.0538 28.6943 62.0538C32.878 62.0538 38.2599 62.0894 42.2478 60.7601C44.894 59.878 48.2959 59.2513 51.0781 59.0967C52.3179 59.0278 54.7054 59.0333 55.7192 58.3574"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UploadIcon;
