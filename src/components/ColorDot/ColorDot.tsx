import type {
  FC,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  HTMLAttributes,
} from "react";
import cx from "classnames";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: string;
}

const ColorDotWrapper: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const ColorDot: FC<Props> = (props) => {
  const { color, className, ...rest } = props;
  return (
    <button
      className={cx(
        "w-[26px] h-[26px] rounded-full border-[2px] border-solid border-white focus:border-secondary",
        className
      )}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export { ColorDotWrapper };

export default ColorDot;
