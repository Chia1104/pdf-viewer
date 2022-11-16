import {
  type FC,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
} from "react";
import cx from "classnames";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

const Button: FC<Props> = (props) => {
  const { text, disabled, className, ...rest } = props;
  return (
    <button
      className={cx(
        "px-2 py-3 border-[1px] border-solid rounded-[40px] text-base font-semibold",
        disabled
          ? `border-[#c1c9cc] text-[#c1c9cc] cursor-not-allowed`
          : `border-[#7FABBE] text-[#7FABBE] hover:bg-[#7FABBE] hover:text-white`,
        className
      )}
      {...rest}>
      <span className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={cx(
            "mr-2 w-5 h-5 text-white rounded-full",
            disabled ? "bg-[#c1c9cc]" : "bg-[#7FABBE]"
          )}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        {text}
      </span>
    </button>
  );
};

export default Button;
