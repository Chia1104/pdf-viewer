﻿import {
  type FC,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
} from "react";
import cx from "classnames";
import styles from "./style.module.scss";
import { ButtonType } from "./";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  customType?: ButtonType;
}

const Button: FC<Props> = (props) => {
  const {
    children,
    customType = "confirm",
    disabled,
    className,
    ...rest
  } = props;
  return (
    <button
      disabled={disabled}
      className={cx(
        "px-4 py-3 border-[1px] border-solid rounded-[30px] text-base font-semibold transition ease-in-out flex justify-center items-center",
        disabled && `text-[#c1c9cc] cursor-not-allowed ${styles.disabled}`,
        customType === "confirm" &&
          `border-[#C0C0C0] text-[#455A64] hover:bg-[#C0C0C0] ${styles.confirm}`,
        customType === "cancel" &&
          `border-[#CCB8B8] text-[#973232] hover:bg-[#CCB8B8] ${styles.cancel}`,
        customType === "secondary-confirm" &&
          "bg-white border-secondary text-secondary hover:bg-secondary hover:text-white",
        customType === "secondary-cancel" &&
          "bg-white border-[#BE7F7F] text-[#BE7F7F] hover:bg-[#BE7F7F] hover:text-white",
        customType === "primary" &&
          "bg-white border-primary text-primary hover:bg-primary hover:text-white",
        customType === "gray" &&
          "bg-white border-[#C0C0C0] text-[#C0C0C0] hover:bg-[#C0C0C0] hover:text-white",
        className
      )}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
