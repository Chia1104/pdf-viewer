"use client";

import type { FC, ReactNode } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useLockedBody } from "usehooks-ts";

interface Props extends MotionProps {
  isShowed: boolean;
  children?: ReactNode;
  activeModal: () => void;
  className?: string;
}

const Modal: FC<Props> = (props) => {
  const { isShowed, children, activeModal, className, ...rest } = props;
  const ov = {
    open: { opacity: 1 },
    closed: { opacity: 0, delay: 300 },
  };
  const iv = {
    open: { opacity: 1, y: 0, delay: 3000 },
    closed: { opacity: 0, y: -100 },
  };
  useLockedBody(isShowed);

  return (
    <AnimatePresence mode="wait">
      {isShowed && (
        <motion.div
          onClick={activeModal}
          initial={"closed"}
          animate={isShowed ? "open" : "closed"}
          exit={"closed"}
          variants={ov}
          className="modal">
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={"closed"}
            animate={isShowed ? "open" : "closed"}
            exit={"closed"}
            variants={iv}
            className={className}
            {...rest}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
