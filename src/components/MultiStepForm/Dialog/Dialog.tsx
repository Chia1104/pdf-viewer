import { type FC, forwardRef, ReactNode } from "react";
import cx from "classnames";
import { Modal, Card, Button } from "@/components";
import { ButtonType, CUSTOMTYPE } from "@/components/Button";

interface Props {
  activeModal: () => void;
  isShowed: boolean;
  title: string;
  btnTitle: string;
  btnClass?: string;
  btn2Title?: string;
  btn2Type?: ButtonType;
  children: ReactNode;
}

const Dialog: FC<Props> = forwardRef((props: Props) => {
  const {
    children,
    activeModal,
    isShowed,
    title,
    btnTitle,
    btnClass,
    btn2Title,
    btn2Type = CUSTOMTYPE.PRIMARY,
  } = props;

  return (
    <Modal isShowed={isShowed} activeModal={activeModal}>
      <Card className="h-[262px]" onClose={activeModal}>
        <div className="w-full h-[48px] flex justify-center items-center">
          <h2 className="text-primary font-semibold leading-5 tracking-wider">
            {title}
          </h2>
        </div>
        <div className="relative w-[300px] h-[130px] border-y border-secondary bg-[#F5F5F5]">
          {children}
        </div>
        <div className="w-full pt-6 flex justify-center items-center">
          <Button
            customType="secondary-confirm"
            className={cx(" py-1 bg-white w-[70%]", btnClass)}>
            {btnTitle}
          </Button>
          <Button
            customType={btn2Type}
            className={cx(
              "ml-2 py-1 bg-white w-[70%]",
              btnClass,
              btn2Title ?? "hidden"
            )}>
            {btn2Title}
          </Button>
        </div>
      </Card>
    </Modal>
  );
});

Dialog.displayName = "Dialog";

export default Dialog;
