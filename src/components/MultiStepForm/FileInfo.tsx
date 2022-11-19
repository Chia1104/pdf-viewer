import { type FC, useContext } from "react";
import {
  MultiStepFormContext,
  ActionType,
} from "@/components/MultiStepForm/MultiStepForm";
import { z } from "zod";
import { useToasts } from "@geist-ui/core";
import { Card, Input, Button } from "@/components";

const schema = z.string().min(0).max(20);

interface Props {
  nextStep?: () => void;
  isLastStep?: boolean;
  prevStep?: () => void;
  isFirstStep?: boolean;
}

const FileInfo: FC<Props> = (props) => {
  const { nextStep, prevStep, isFirstStep, isLastStep } = props;
  const { state, dispatch } = useContext(MultiStepFormContext);
  const { setToast } = useToasts();

  return (
    <>
      <Card
        className="w-full max-w-[395px] h-[281px] flex flex-col justify-center items-center relative p-[26px] justify-between"
        style={{
          border: "1px dashed rgba(69, 90, 100, 0.4)",
        }}>
        <div className="flex flex-col w-full">
          <p
            style={{
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.05em",
            }}
            className="text-primary">
            檔案名稱
          </p>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "19px",
              letterSpacing: "0.05em",
            }}
            className="text-primary mt-[11px]">
            {state.step1.fileNames ?? ""}
          </p>
        </div>
        <div className="w-full mb-[50px]">
          <Input
            title="任務名稱"
            error="請輸入任務名稱"
            schema={schema}
            titleClassName="self-start"
            placeholder={state.step1.fileNames ?? ""}
          />
        </div>
      </Card>
      <div className="flex justify-center items-center mt-[26px] gap-[24px]">
        <Button
          customType="cancel"
          onClick={prevStep}
          disabled={isFirstStep}
          className="w-[117px]">
          取消
        </Button>
        <Button
          customType="confirm"
          onClick={nextStep}
          disabled={isLastStep}
          className="w-[117px]">
          確認
        </Button>
      </div>
    </>
  );
};

export default FileInfo;
