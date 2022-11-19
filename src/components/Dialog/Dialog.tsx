import { type FC, forwardRef, ReactNode } from "react";
import { Modal, Card, Button } from "@/components";

interface Props {
  onSign?: (data: string) => void;
  activeModal: () => void;
  isShowed: boolean;
  title: string;
  btnTitle: string;
  children: ReactNode;
}

const Dialog: FC<Props> = forwardRef((props: Props) => {
  const { children, activeModal, isShowed, title, btnTitle } = props;

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
        <div className="w-full flex justify-center items-center">
          <Button
            customType="secondary-confirm"
            className="mt-6 py-1 bg-white w-[70%]">
            {btnTitle}
          </Button>
        </div>
      </Card>
    </Modal>
  );
});

Dialog.displayName = "Dialog";

export default Dialog;
