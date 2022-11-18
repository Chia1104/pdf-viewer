import { type FC, useRef } from "react";
import { Card, PDFViewer, FileInput } from "@/components";

const MultiStepForm: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Card className="w-full max-w-[823px] h-[525px] flex flex-col justify-center items-center">
        <FileInput ref={fileInputRef} />
      </Card>
    </>
  );
};

export default MultiStepForm;
