import {
  type FC,
  forwardRef,
  useId,
  useState,
  type ChangeEvent,
  type Ref,
  type DetailedHTMLProps,
  type InputHTMLAttributes,
} from "react";
import { ZodType } from "zod";
import cx from "classnames";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
  error?: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
  titleClassName?: string | undefined;
  inputClassName?: string | undefined;
  schema: ZodType<any>;
}

const Input: FC<Props> = forwardRef((props: Props, ref) => {
  const {
    title,
    error,
    placeholder,
    titleClassName,
    inputClassName,
    schema,
    type,
    ...rest
  } = props;
  const [isError, setIsError] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const id = useId();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isValid = schema.safeParse(value).success;
    setIsError(!isValid);
  };

  return (
    <>
      <label
        style={{
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "19px",
          letterSpacing: "0.05em",
        }}
        className={cx("text-primary", titleClassName)}
        htmlFor={`${id}-input`}>
        {title ?? ""}
      </label>
      <input
        ref={ref}
        id={`${id}-input`}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        required
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={cx(
          "border-[#CBD2D7] w-full rounded-lg p-2 px-2 border-2 my-3 transition ease-in-out focus:outline-none bg-white",
          isError && "border-error",
          isFocus && !isError && "border-primary",
          inputClassName
        )}
        {...rest}
      />
      {isError && <div className="text-error">{error ?? ""}</div>}
    </>
  );
});

Input.displayName = "Input";

export default Input;
