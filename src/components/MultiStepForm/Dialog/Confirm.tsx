import { type FC } from "react";
import Dialog from "./Dialog";

interface Props {
  activeModal: () => void;
  isShowed: boolean;
}

const Confirm: FC<Props> = (props) => {
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
};

export default Confirm;
