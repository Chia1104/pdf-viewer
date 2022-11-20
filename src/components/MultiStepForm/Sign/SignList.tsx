import { type FC, useState, useEffect } from "react";
import { Card, Button } from "@/components";
import { CUSTOMTYPE } from "@/components/Button";
import cx from "classnames";
import SignItem from "./SignItem";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getUserSigns } from "@/helpers/api";
import { useReadLocalStorage } from "usehooks-ts";
import { ApiResponse } from "@/shared/types";
import { Spinner, useToasts } from "@geist-ui/core";

interface Props {
  isShowed: boolean;
  activeModal: () => void;
  next: () => void;
}

const Sign: FC<Props> = (props) => {
  const { activeModal, isShowed, next } = props;
  const { setToast } = useToasts();
  const titles = ["簽名", "圖片"];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [signs, setSigns] = useState<
    | ApiResponse<
        {
          id: string;
          base64: string;
        }[]
      >
    | null
    | string
  >(null);
  const { data: session } = useSession();
  const getSigns = useMutation({
    mutationFn: async () => await getUserSigns(),
  });
  const localSign = useReadLocalStorage<string>("signBase64");

  const getSignsData = async () => {
    const data = session ? await getSigns.mutateAsync() : localSign;
    setSigns(data);
  };

  const handleDelete = () =>
    setToast({ text: "Some feature is not available yet" });

  useEffect(() => {
    getSignsData();
  }, [session, isShowed]);

  return (
    <Card
      className="w-[300px] box-content font-semibold pb-3"
      onClose={activeModal}>
      <div className="w-full h-[48px] flex justify-center items-center">
        <ul className="flex text-primary">
          {titles.map((item, index) => {
            return (
              <li
                key={index}
                className={cx(
                  "relative px-5 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-16px] after:w-[100%] after:h-[6px] after:bg-secondary",
                  currentTitle !== index && "after:hidden"
                )}
                onClick={() => {
                  setCurrentTitle(index);
                }}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      {session ? (
        <>
          {(signs as ApiResponse<{ id: string; base64: string }[]>)?.message ===
            "success" &&
            getSigns.isSuccess &&
            (signs as ApiResponse<{ id: string; base64: string }[]>).data.map(
              (sign) => {
                return (
                  <SignItem
                    key={sign.id}
                    signData={sign.base64}
                    onDelete={handleDelete}
                  />
                );
              }
            )}
        </>
      ) : (
        signs && <SignItem signData={signs as string} onDelete={handleDelete} />
      )}
      {getSigns.isLoading && (
        <div className="w-[300px] h-[100px] border-b border-secondary bg-[#F5F5F5] overflow-hidden flex justify-center items-center">
          <Spinner />
        </div>
      )}
      <div className="w-full">
        <Button
          customType="secondary-confirm"
          className={"mx-auto mt-2 py-1 w-3/4"}>
          使用簽名
        </Button>
        <Button
          onClick={next}
          customType={CUSTOMTYPE.GRAY}
          className={"mx-auto mt-2 py-1 w-3/4"}>
          + 創建新簽名
        </Button>
      </div>
    </Card>
  );
};

export default Sign;
