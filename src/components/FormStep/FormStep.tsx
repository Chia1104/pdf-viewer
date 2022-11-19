﻿import { type FC, type HTMLAttributes, type DetailedHTMLProps } from "react";
import cx from "classnames";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

const FormStep: FC<Props> = (props) => {
  const { className, ...rest } = props;
  const steps = ["上傳簽署檔案", "進行簽署", "簽署完成"];
  return (
    <ol className={cx("flex justify-between px-20 ", className)} {...rest}>
      {steps.map((item, index) => {
        return (
          <li
            className="relative before:content-[''] before:absolute before:top-[26px] before:right-[calc(100%-8px)] before:h-px before:bg-[#d9d9d9] before:first:hidden before:w-[24vw] md:before:w-[30vw] md:before:max-w-[210px]"
            key={index}>
            <div className="mx-auto mb-2 text-2xl w-[50px] h-[50px] text-primary bg-[#c0c0c0] flex justify-center items-center rounded-full relative z-10">
              {index + 1}
            </div>
            <p>{item}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default FormStep;
