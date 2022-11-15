import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useState, type FC, type ChangeEvent } from "react";
import { PDFJS_VERSION } from "@/shared/constants";

const PDFViewer: FC = () => {
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setFileUrl(fileUrl);
  };

  return (
    <div className="w-full flex flex-col items-center gap-10">
      <input type="file" onChange={handleFileChange} />
      {fileUrl && (
        <Worker
          workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`}>
          <div className="w-[800px] h-[800px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full">
            <Viewer fileUrl={fileUrl} />
          </div>
        </Worker>
      )}
    </div>
  );
};

export default PDFViewer;
