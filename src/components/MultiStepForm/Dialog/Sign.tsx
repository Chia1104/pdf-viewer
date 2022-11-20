import { type FC, forwardRef, useState } from "react";
import { Modal, Card, Button } from "@/components";
import { CUSTOMTYPE } from "@/components/Button";
import cx from "classnames";

interface Props {
  activeModal: () => void;
  isShowed: boolean;
}

const Sign: FC<Props> = forwardRef((props: Props, ref) => {
  const { activeModal, isShowed } = props;
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["簽名", "圖片"];

  return (
    <Modal isShowed={isShowed} activeModal={activeModal}>
      <Card
        className="w-[300px] h-[243px] box-content font-semibold"
        onClose={activeModal}>
        <div className="w-full h-[48px] flex justify-center items-center">
          <ul className="flex text-primary">
            {titles.map((item, index) => {
              return (
                <li
                  key={index}
                  className={cx(
                    "relative px-5 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-16px] after:w-[100%] after:h-[6px] after:bg-secondary",
                    currentTitle != index && "after:hidden"
                  )}
                  onClick={() => {
                    setCurrentTitle(index);
                  }}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-[300px] h-[100px] border-y border-secondary bg-[#F5F5F5]">
          <div className="ml-auto w-10 h-full bg-[#BE7F7F] hover:bg-[#d79594] text-white flex items-center justify-center cursor-pointer">
            {currentTitle == 0 ? "－" : "Ｘ"}
          </div>
        </div>
        <div className="w-full">
          <Button
            customType="secondary-confirm"
            className={"mx-auto mt-2 py-1 w-3/4"}>
            使用簽名
          </Button>
          <Button
            customType={CUSTOMTYPE.GRAY}
            className={"mx-auto mt-2 py-1 w-3/4"}>
            + 創建新簽名
          </Button>
        </div>
      </Card>
    </Modal>
  );
});

Sign.displayName = "Sign";

export default Sign;
