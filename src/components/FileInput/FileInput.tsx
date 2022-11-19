import {
  type FC,
  type ChangeEvent,
  forwardRef,
  type Ref,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useToasts } from "@geist-ui/core";
import { Card, Button } from "@/components";
import { useId } from "react";

interface Props {
  ref?: Ref<any>;
}

const FileInput: FC<Props> = forwardRef((props: Props, ref) => {
  const { setToast } = useToasts();
  const id = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  useImperativeHandle(ref, () => {
    return {
      getFiles: () => {
        return file ? [file] : [];
      },
    };
  });

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 10000000) {
      setToast({
        text: "檔案大小超過 10 MB",
        type: "error",
      });
      return;
    }
    setFile(file);
  };

  return (
    <>
      <Card
        className="w-[395px] h-[281px] flex flex-col justify-center items-center relative"
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
          僅供10MB以內之PDF、IMG檔
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
});

FileInput.displayName = "FileInput";

export default FileInput;
