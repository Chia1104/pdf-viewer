import { useState, type FC, type ChangeEvent } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PDFViewer: FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [file, setFile] = useState<File | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div>
      <input onChange={onFileChange} type="file" />
      {file && (
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
      )}
    </div>
  );
};

export default PDFViewer;
