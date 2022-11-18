import SignatureCanvas from "react-signature-canvas";
import { type FC, forwardRef, Ref, useRef, useState } from "react";
import { Modal, Card, Button, ColorDot, ColorDotWrapper } from "@/components";

interface Props {
  onSign?: (data: string) => void;
  activeModal: () => void;
  isShowed: boolean;
  ref?: Ref<SignatureCanvas>;
}

const Sign: FC<Props> = forwardRef((props: Props, ref) => {
  const { onSign, activeModal, isShowed } = props;
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [penColor, setPenColor] = useState("#000000");

  return (
    <Modal isShowed={isShowed} activeModal={activeModal}>
      <Card className="h-[305px]" onClose={activeModal}>
        <div className="w-full h-[57px] flex justify-center items-center">
          <h2
            className="text-primary"
            style={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "20px",
              letterSpacing: "0.05em",
            }}>
            新建我的簽名
          </h2>
        </div>
        <div className="relative">
          <SignatureCanvas
            ref={sigCanvas}
            penColor={penColor}
            canvasProps={{
              width: 486,
              height: 188,
              className: "bg-[#F5F5F5] border-y border-secondary",
            }}
          />
          <div className="flex flex-col absolute top-0 right-0 mt-[45px] mr-[13px] gap-[4px]">
            <ColorDotWrapper className="flex flex-col absolute top-0 right-0 mt-[45px] mr-[13px] gap-[4px]>
              <ColorDot
                color="#E93C3C"
                onClick={() => setPenColor("#E93C3C")}
              />
              <ColorDot
                color="#3C6CE9"
                onClick={() => setPenColor("#3C6CE9")}
              />
              <ColorDot
                color="#000000"
                onClick={() => setPenColor("#000000")}
              />
            </ColorDotWrapper>
          </div>
        </div>
        <div className="w-full h-[60px] flex justify-center items-center gap-[7px]">
          <Button
            customType="secondary-cancel"
            className="bg-white w-[86px] h-[33px]"
            // @ts-ignore
            onClick={() => sigCanvas.current.clear()}>
            清除
          </Button>
          <Button
            customType="secondary-confirm"
            className="bg-white w-[86px] h-[33px]">
            儲存
          </Button>
        </div>
      </Card>
    </Modal>
  );
});

Sign.displayName = "Sign";

export default Sign;
