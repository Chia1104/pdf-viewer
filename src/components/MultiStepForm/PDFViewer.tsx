import { useState, type FC, useContext } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../../pdf-worker";
import { MultiStepFormContext } from "@/components/MultiStepForm/MultiStepForm";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PDFViewer: FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const { state } = useContext(MultiStepFormContext);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full max-w-[663px] h-[339px] overflow-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-full">
      {state.step1.isFileValid && (
        <Document file={state.step1.file} onLoadSuccess={onDocumentLoadSuccess}>
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
  );
};

export default PDFViewer;
