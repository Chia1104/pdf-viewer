import { type FC } from "react";
import Dialog from "./Dialog";

interface Props {
  activeModal: () => void;
  isShowed: boolean;
}

const Download: FC<Props> = (props) => {
  const { activeModal, isShowed } = props;

  return (
    <Dialog
      isShowed={isShowed}
      activeModal={activeModal}
      title="下載"
      btnTitle="簽署紀錄"
      btnClass="w-[104px]"
      btn2Title="回首頁">
      <p className="absolute top-1/2 translate-y-[-50%] w-full text-center text-primary font-semibold">
        檔案下載完成
        <br />
        可至
        <a
          className="text-secondary"
          href="@/components/MultiStepForm/Dialog/Download#">
          簽署紀錄
        </a>
        查看嘍！
      </p>
    </Dialog>
  );
};

export default Download;
