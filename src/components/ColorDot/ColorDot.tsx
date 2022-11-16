import {
  type FC,
  type DetailedHTMLProps,
  type ButtonHTMLAttributes,
} from "react";
import cx from "classnames";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: string;
}

const ColorDot: FC<Props> = (props) => {
  const { color, className, ...rest } = props;
  return (
    <button
      className={cx(
        "w-[26px] h-[26px] rounded-full border-[2px] border-solid border-white",
        className
      )}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default ColorDot;
