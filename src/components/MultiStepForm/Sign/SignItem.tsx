import { type FC, useId } from "react";
import { Image } from "@/components";
import { CloseIcon } from "@/components/icons";

interface Props {
  signData: string;
  onDelete: () => void;
}

const SignItem: FC<Props> = (props) => {
  const { signData, onDelete } = props;
  const id = useId();
  return (
    <div className="w-[300px] h-[100px] border-b border-secondary bg-[#F5F5F5] overflow-hidden relative group">
      {signData && <Image src={signData} alt={id} width={300} height={100} />}
      <button
        onClick={onDelete}
        className="opacity-0 group-hover:opacity-100 absolute top-0 right-0 mr-2 mt-2 transition ease-in-out">
        <CloseIcon className="text-white bg-error rounded-full p-1" />
      </button>
    </div>
  );
};

export default SignItem;
