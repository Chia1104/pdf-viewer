import { type FC, type HTMLAttributes, type DetailedHTMLProps } from "react";
import styles from "./style.module.scss";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  descList: Array<string>;
}

const FlowDesc: FC<Props> = (props) => {
  const { descList } = props;
  return (
    <div className={styles.flowDesc}>
      <ol className="hidden md:flex justify-between px-4 w-full">
        {descList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>
    </div>
  );
};

export default FlowDesc;
