import { type FC, forwardRef } from "react";
import { Dialog } from "./index";

interface Props {
  activeModal: () => void;
  isShowed: boolean;
}

const Text: FC<Props> = forwardRef((props: Props, ref) => {
  const { activeModal, isShowed } = props;

  return (
    <Dialog
      isShowed={isShowed}
      activeModal={activeModal}
      title="文字"
      btnTitle="使用">
      <textarea
        className="p-6 w-full h-full resize-none bg-[#F5F5F5] outline-none"
        placeholder="輸入文字"
      />
    </Dialog>
  );
});

Text.displayName = "Text";

export default Text;
