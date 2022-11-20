export enum Size {
  Base = "base",
  Small = "small",
  Medium = "medium",
  Large = "large",
  ExtraLarge = "extra-large",
}

export interface ApiResponseStatus {
  code: number;
  message: string;
}

export interface ApiResponse<T = any> {
  status?: ApiResponseStatus;
  message?: string;
  data: T;
}
