import SignatureCanvas from "react-signature-canvas";
import { type FC, useContext, useRef, useState } from "react";
import { Card, Button, ColorDot, ColorDotWrapper, Modal } from "@/components";
import { CUSTOMTYPE } from "@/components/Button";
import {
  MultiStepFormContext,
  ActionType,
} from "@/components/MultiStepForm/MultiStepForm";
import { useLocalStorage, useUpdateEffect } from "usehooks-ts";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { createSign } from "@/helpers/api";
import { useToasts } from "@geist-ui/core";

interface Props {
  activeModal: () => void;
  onSave?: () => void;
}

const SignPod: FC<Props> = (props) => {
  const { activeModal, onSave } = props;
  const { setToast } = useToasts();
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [penColor, setPenColor] = useState("#000000");
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useContext(MultiStepFormContext);
  const [signBase64, setSignBase64] = useLocalStorage<string>("signBase64", "");
  const { data: session } = useSession();
  const handleSaveDB = useMutation({
    mutationFn: async ({ size, base64 }: { size: number; base64: string }) => {
      return await createSign({ size, base64 });
    },
  });

  const handleSave = async () => {
    const saveLocal = (base64: string) => {
      setSignBase64(base64);
      setToast({
        text: "簽名儲存成功",
        type: "success",
      });
    };
    if (sigCanvas.current) {
      setIsLoading(true);
      setToast({ text: "儲存中...", type: "success" });
      const signBase64 = sigCanvas.current.toDataURL("image/png");
      session
        ? await handleSaveDB.mutateAsync({ size: 1, base64: signBase64 })
        : saveLocal(signBase64);
      dispatch({
        type: ActionType.STEP2_SETSIGN,
        payload: {
          sign: signBase64,
        },
      });
      setIsLoading(false);
      onSave && onSave();
    }
  };

  useUpdateEffect(() => {
    handleSaveDB.isSuccess &&
      setToast({
        text: "簽名儲存成功",
        type: "success",
      });
    handleSaveDB.isError &&
      setToast({
        text: "簽名儲存失敗",
        type: "error",
      });
  }, [handleSaveDB.isSuccess, handleSaveDB.isError]);

  return (
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
      <div className="relative w-full">
        <SignatureCanvas
          ref={sigCanvas}
          penColor={penColor}
          canvasProps={{
            className:
              "bg-[#F5F5F5] border-y border-secondary w-[336px] sm:w-[486px] h-[188px]",
          }}
        />
        <ColorDotWrapper className="flex flex-col absolute top-0 right-0 mt-[45px] mr-[13px] gap-[4px]">
          <ColorDot color="#E93C3C" onClick={() => setPenColor("#E93C3C")} />
          <ColorDot color="#3C6CE9" onClick={() => setPenColor("#3C6CE9")} />
          <ColorDot color="#000000" onClick={() => setPenColor("#000000")} />
        </ColorDotWrapper>
      </div>
      <div className="w-full h-[60px] flex justify-center items-center gap-[7px]">
        <Button
          disabled={isLoading}
          customType={CUSTOMTYPE.SECONDARY_CANCEL}
          className="bg-white w-[86px] h-[33px] justify-self-start"
          onClick={onSave}>
          返回
        </Button>
        <Button
          disabled={isLoading}
          customType={CUSTOMTYPE.SECONDARY_CANCEL}
          className="bg-white w-[86px] h-[33px]"
          // @ts-ignore
          onClick={() => sigCanvas.current.clear()}>
          清除
        </Button>
        <Button
          disabled={isLoading}
          onClick={handleSave}
          customType={CUSTOMTYPE.SECONDARY_CONFIRM}
          className="bg-white w-[86px] h-[33px]">
          儲存
        </Button>
        <Modal isShowed={isLoading} activeModal={() => null} />
      </div>
    </Card>
  );
};

export default SignPod;
