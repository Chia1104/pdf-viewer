import { type FC } from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

interface Props {
  text: string;
  type?: "confirm" | "cancel";
  disabled: boolean;
}

const Button: FC<Props> = (props) => {
  const { text, type = "confirm", disabled } = props;
  return (
    <button
      className={cx(
        "relative px-10 py-4 border-[1px] border-solid rounded-[30px] text-base font-semibold",
        disabled
          ? `text-[#c1c9cc] cursor-not-allowed ${styles.disabled}`
          : type == "confirm"
          ? `border-[#C0C0C0] text-[#455A64] hover:bg-[#C0C0C0] ${styles.confirm}`
          : `border-[#CCB8B8] text-[#973232] hover:bg-[#CCB8B8] ${styles.cancel}`
      )}>
      {text}
    </button>
  );
};

export default Button;
