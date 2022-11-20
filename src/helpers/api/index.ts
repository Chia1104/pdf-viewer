import { getBaseUrlUtil } from "@/utils/get-base-url.util";
import { ApiResponse } from "@/shared/types";
import { CreateSignDto } from "@/shared/dto/sign";

const getUserSigns = async (): Promise<
  ApiResponse<
    {
      id: string;
      base64: string;
    }[]
  >
> => {
  const res = await fetch(`${getBaseUrlUtil()}/api/sign`, {
    method: "GET",
    credentials: "include",
  });
  return await res.json();
};

const createSign = async (dto: CreateSignDto): Promise<ApiResponse> => {
  const res = await fetch(`${getBaseUrlUtil()}/api/sign`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(dto),
  });
  return await res.json();
};

export { getUserSigns, createSign };
