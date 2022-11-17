import { type FC, type HTMLAttributes, type DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const FlowDot: FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <span
      className={
        "mx-[50px] border-[10px] border-solid border-[#D9D9D9] inline-block w-[154px] h-[154px] rounded-full bg-primary text-white flex items-center justify-center"
      }
      {...rest}>
      {children}
    </span>
  );
};

export default FlowDot;
