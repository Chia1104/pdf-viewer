import { useState, type FC, useContext } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../../pdf-worker";
import { MultiStepFormContext } from "@/components/MultiStepForm/MultiStepForm";
import { Button } from "@/components";
import Sign from "@/components/MultiStepForm/Sign";
import { CUSTOMTYPE } from "@/components/Button";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface Props {
  nextStep?: () => void;
  isLastStep?: boolean;
  prevStep?: () => void;
  isFirstStep?: boolean;
}

const PDFViewer: FC<Props> = (props) => {
  const { nextStep, prevStep, isFirstStep, isLastStep } = props;
  const [numPages, setNumPages] = useState<number | null>(null);
  const { state } = useContext(MultiStepFormContext);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <>
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
          customType={CUSTOMTYPE.CANCEL}
          onClick={prevStep}
          disabled={isFirstStep}
          className="w-[117px]">
          取消
        </Button>
        <Button
          customType={CUSTOMTYPE.CONFIRM}
          onClick={nextStep}
          disabled={isLastStep}
          className="w-[117px]">
          確認
        </Button>
      </div>
    </>
  );
};

export default PDFViewer;
