import { type FC, useState } from "react";
import { useMultistep } from "@/hooks";
import SignList from "./SignList";
import SignPod from "./SignPod";
import { Modal } from "@/components";

interface Props {
  isShowed: boolean;
  activeModal: () => void;
}

const Sign: FC<Props> = (props) => {
  const { isShowed, activeModal } = props;
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistep([
      <SignList
        activeModal={activeModal}
        isShowed={isShowed}
        next={() => next()}
      />,
      <SignPod activeModal={activeModal} onSave={() => back()} />,
    ]);

  return (
    <Modal isShowed={isShowed} activeModal={activeModal}>
      {step}
    </Modal>
  );
};

export default Sign;
