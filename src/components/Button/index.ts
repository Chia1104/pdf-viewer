export enum CUSTOMTYPE {
  CONFIRM = "confirm",
  CANCEL = "cancel",
  SECONDARY_CONFIRM = "secondary-confirm",
  SECONDARY_CANCEL = "secondary-cancel",
  PRIMARY = "primary",
}

export type ButtonType =
  | "confirm"
  | "cancel"
  | "secondary-confirm"
  | "secondary-cancel"
  | "primary"
  | CUSTOMTYPE;

export { default } from "./Button";
