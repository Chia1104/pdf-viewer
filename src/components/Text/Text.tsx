import { type FC, forwardRef } from "react";
import { Modal, Card, Button } from "@/components";

interface Props {
  onSign?: (data: string) => void;
  activeModal: () => void;
  isShowed: boolean;
}

const Text: FC<Props> = forwardRef((props: Props) => {
  const { activeModal, isShowed } = props;

  return (
    <Modal isShowed={isShowed} activeModal={activeModal}>
      <Card className="h-[244px]" onClose={activeModal}>
        <div className="w-full h-[57px] flex justify-center items-center">
          <h2 className="text-primary font-semibold leading-5 tracking-wider">
            文字
          </h2>
        </div>
        <div className="relative w-[300px] h-[130px] border-y border-secondary">
          <textarea
            className="p-6 w-full h-full resize-none bg-[#F5F5F5] outline-none"
            placeholder="輸入文字"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <Button
            customType="secondary-confirm"
            className="mt-3 py-1 bg-white w-[70%]">
            使用
          </Button>
        </div>
      </Card>
    </Modal>
  );
});

Text.displayName = "Text";

export default Text;
