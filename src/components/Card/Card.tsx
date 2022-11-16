import { type FC, type DetailedHTMLProps, type HTMLAttributes } from "react";
import cx from "classnames";
import { CloseIcon } from "@/components/icons";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClose?: () => void;
}

const Card: FC<Props> = (props) => {
  const { children, onClose, className, ...rest } = props;
  return (
    <div
      className={cx(
        "border border-secondary rounded-[20px] bg-white relative",
        className
      )}
      {...rest}>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-0 right-0 w-[30px] h-[30px] mr-3 ml-3 mt-3 flex justify-center items-center">
          <CloseIcon className="bg-secondary p-1 rounded-full text-white" />
        </button>
      )}
      {children}
    </div>
  );
};

export default Card;
