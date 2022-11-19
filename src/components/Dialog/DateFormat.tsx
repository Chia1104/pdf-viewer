import { type FC, forwardRef } from "react";
import { Dialog } from "./index";
import dayjs from "dayjs";

interface Props {
  activeModal: () => void;
  isShowed: boolean;
}

const DateFormat: FC<Props> = forwardRef((props: Props) => {
  const { activeModal, isShowed } = props;
  const formats = ["YYYY/MM/DD", "DD/MM/YYYY", "YYYY-MM-DD", "DD-MM-YYYY"];
  return (
    <Dialog
      isShowed={isShowed}
      activeModal={activeModal}
      title="日期"
      btnTitle="使用">
      <div className="absolute top-1/2 translate-y-[-50%]">
        {formats.map((item, index) => {
          return (
            <div
              key={index}
              className="inline-block my-2 w-1/2 text-secondary text-center cursor-pointer">
              {dayjs().format(item)}
            </div>
          );
        })}
      </div>
    </Dialog>
  );
});

DateFormat.displayName = "DateFormat";

export default DateFormat;
