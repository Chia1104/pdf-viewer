import { type FC, type HTMLAttributes, type DetailedHTMLProps } from "react";
import cx from "classnames";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  count: number;
}

const FlowDot: FC<Props> = (props) => {
  const { children, count, ...rest } = props;
  return (
    <span
      className={cx(
        "relative inline-block mx-auto sm:mx-[20px] md:mx-[50px] border-[10px] border-solid border-[#D9D9D9] w-[154px] h-[154px] rounded-full bg-primary text-white flex items-center justify-center",
        count < 3
          ? "sm:after:block md:after:hidden after:content-[''] after:absolute after:bottom-[-64%] sm:after:bottom-auto sm:after:right-[-32%] after:w-[2px] sm:after:w-[28px] after:h-[38px] sm:after:h-0.5 after:bg-primary after:last:hidden"
          : ""
      )}
      {...rest}>
      <span className="md:hidden absolute text-base font-semibold text-primary text-center rounded-full left-0 bottom-0 w-7 h-7 bg-[#C0C0C0]">
        {count}
      </span>
      {children}
    </span>
  );
};

export default FlowDot;
