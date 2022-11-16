import {
  type FC,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
} from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  customType?: "confirm" | "cancel";
}

const Button: FC<Props> = (props) => {
  const { children, customType = "confirm", disabled, ...rest } = props;
  return (
    <button
      className={cx(
        "px-8 py-3 border-[1px] border-solid rounded-[30px] text-base font-semibold",
        disabled
          ? `text-[#c1c9cc] cursor-not-allowed ${styles.disabled}`
          : customType == "confirm"
          ? `border-[#C0C0C0] text-[#455A64] hover:bg-[#C0C0C0] ${styles.confirm}`
          : `border-[#CCB8B8] text-[#973232] hover:bg-[#CCB8B8] ${styles.cancel}`
      )}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
