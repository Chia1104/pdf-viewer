import { useState, type FC, useContext } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../../pdf-worker";
import { MultiStepFormContext } from "@/components/MultiStepForm/MultiStepForm";
import { Button, IButton } from "@/components";
import { TextDialog, DateDialog, SignDialog } from "./Dialog";
import Sign from "./Sign";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface Props {
  nextStep?: () => void;
  isLastStep?: boolean;
  prevStep?: () => void;
  isFirstStep?: boolean;
}

const SignPDF: FC<Props> = (props) => {
  const { nextStep, prevStep, isFirstStep, isLastStep } = props;
  const [numPages, setNumPages] = useState<number | null>(null);
  const [signMode, setSignMode] = useState<boolean>(false);
  const [dateMode, setDateMode] = useState<boolean>(false);
  const [textMode, setTextMode] = useState<boolean>(false);
  const { state } = useContext(MultiStepFormContext);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="relative">
      <div className="w-full max-w-[663px] h-[339px] overflow-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-full">
        {state.step1.isFileValid && (
          <Document
            file={state.step1.file}
            onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                scale={2}
              />
            ))}
          </Document>
        )}
      </div>
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
      <div className="absolute top-0 right-0 mr-[-130px] flex flex-col gap-[6px]">
        <IButton text="簽名" onClick={() => setSignMode(!signMode)} />
        <IButton text="日期" onClick={() => setDateMode(!dateMode)} />
        <IButton text="文字" onClick={() => setTextMode(!textMode)} />
      </div>
      <Sign activeModal={() => setSignMode(!signMode)} isShowed={signMode} />
      <DateDialog
        activeModal={() => setDateMode(!dateMode)}
        isShowed={dateMode}
      />
      <TextDialog
        activeModal={() => setTextMode(!textMode)}
        isShowed={textMode}
      />
    </div>
  );
};

export default SignPDF;
