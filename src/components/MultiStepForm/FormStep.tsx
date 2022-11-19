import {
  type FC,
  type HTMLAttributes,
  type DetailedHTMLProps,
  Fragment,
} from "react";
import cx from "classnames";
import { STEPS } from "@/components/MultiStepForm/steps";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLOListElement>,
    HTMLOListElement
  > {
  currentStep: number;
}

const FormStep: FC<Props> = (props) => {
  const { currentStep, className, ...rest } = props;
  return (
    <ol className={cx("flex justify-between px-20 ", className)} {...rest}>
      {STEPS.map((item, i) => {
        return (
          <Fragment key={item.id}>
            {item.isShow && (
              <li className="relative before:content-[''] before:absolute before:top-[26px] before:right-[calc(100%-8px)] before:h-px before:bg-[#d9d9d9] before:first:hidden before:w-[24vw] md:before:w-[30vw] md:before:max-w-[210px]">
                <div
                  className={cx(
                    "mx-auto mb-2 text-2xl w-[50px] h-[50px] text-primary bg-[#c0c0c0] flex justify-center items-center rounded-full relative z-10",
                    currentStep === i && "bg-[#455A64] text-white"
                  )}>
                  {item.step}
                </div>
                <p className="text-primary">{item.title}</p>
              </li>
            )}
          </Fragment>
        );
      })}
    </ol>
  );
};

export default FormStep;
