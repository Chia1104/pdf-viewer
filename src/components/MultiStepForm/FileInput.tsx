import { type FC, type ChangeEvent, useContext, useRef } from "react";
import { useToasts } from "@geist-ui/core";
import { Card, Button } from "@/components";
import { useId } from "react";
import {
  MultiStepFormContext,
  ActionType,
} from "@/components/MultiStepForm/MultiStepForm";
import { validateFile } from "@/utils/file-validator.util";

interface Props {
  nextStep?: () => void;
  isLastStep?: boolean;
  prevStep?: () => void;
  isFirstStep?: boolean;
}

const FileInput: FC<Props> = (props) => {
  const { nextStep, prevStep, isFirstStep, isLastStep } = props;
  const { setToast } = useToasts();
  const id = useId();
  const { dispatch } = useContext(MultiStepFormContext);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionType.STEP1_FILEISLOADING,
    });
    // @ts-ignore
    const file = e.target.files[0];
    if (!file) {
      dispatch({
        type: ActionType.STEP1_FILEISERROR,
      });
      return;
    }
    const validation = validateFile(file);
    if (!validation.success) {
      setToast({
        text: validation.error.errors[0].message,
        type: "error",
      });
      dispatch({
        type: ActionType.STEP1_FILEISERROR,
      });
      return;
    }
    dispatch({
      type: ActionType.STEP1_FILEISLOADED,
      payload: {
        file,
      },
    });
    nextStep && nextStep();
  };

  return (
    <>
      <Card
        className="w-full max-w-[395px] h-full sm:h-[281px] flex flex-col justify-center items-center relative"
        style={{
          border: "1px dashed rgba(69, 90, 100, 0.4)",
        }}>
        <Button
          className="z-20"
          // @ts-ignore
          onClick={() => fileInputRef.current.click()}>
          選擇檔案
        </Button>
        <p
          className="text-primary mt-3"
          style={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "17px",
            letterSpacing: "0.05em",
          }}>
          或拖曳檔案到此處
        </p>
        <p
          className="text-primary absolute bottom-0 mb-[18px]"
          style={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "17px",
            letterSpacing: "0.05em",
          }}>
          僅供 10MB 以內之 PDF 檔
        </p>
        <input
          ref={fileInputRef}
          id={id}
          onChange={onFileChange}
          type="file"
          accept="application/pdf"
          className="opacity-0 h-full w-full absolute top-0 left-0"
        />
      </Card>
    </>
  );
};

export default FileInput;
