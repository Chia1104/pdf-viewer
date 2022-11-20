import { type FC, forwardRef } from "react";
import { Dialog } from "./index";

interface Props {
  activeModal: () => void;
  isShowed: boolean;
}

const Confirm: FC<Props> = forwardRef((props: Props, ref) => {
  const { activeModal, isShowed } = props;

  return (
    <Dialog
      isShowed={isShowed}
      activeModal={activeModal}
      title="確認簽署"
      btnTitle="確定"
      btnClass="w-1/3">
      <p className="absolute top-1/2 translate-y-[-50%] w-full text-center text-primary font-semibold">
        確認完成後將無法更改！
      </p>
    </Dialog>
  );
});

Confirm.displayName = "Confirm";

export default Confirm;
