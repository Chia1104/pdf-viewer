import { useState, type FC } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface Props {
  file: File;
}

const PDFViewer: FC<Props> = (props) => {
  const { file } = props;
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-[663px] h-[339px] overflow-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-thumb-rounded-full">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
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
    </div>
  );
};

export default PDFViewer;
