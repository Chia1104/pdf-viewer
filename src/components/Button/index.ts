export enum CUSTOMTYPE {
  CONFIRM = "confirm",
  CANCEL = "cancel",
  SECONDARY_CONFIRM = "secondary-confirm",
  SECONDARY_CANCEL = "secondary-cancel",
  PRIMARY = "primary",
  GRAY = "gray",
}

export type ButtonType =
  | "confirm"
  | "cancel"
  | "secondary-confirm"
  | "secondary-cancel"
  | "primary"
  | "gray"
  | CUSTOMTYPE;

export { default } from "./Button";
