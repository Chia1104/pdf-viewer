import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getUserSigns, createSign } from "@/server/sign/services";
import { CreateSignDto } from "@/shared/dto/sign";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  switch (req.method) {
    case "GET":
      try {
        // @ts-ignore
        const signs = await getUserSigns(session.user.id);
        if (!signs || signs.length === 0) {
          return res.status(404).json({ message: "Not Found" });
        }
        return res.status(200).json({
          message: "success",
          data: signs,
        });
      } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
    case "POST":
      try {
        const dto = req.body as CreateSignDto;
        const result = await createSign(
          {
            size: dto.size,
            base64: dto.base64,
          },
          // @ts-ignore
          session.user.id
        );
        return res.status(200).json(result);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Bad Request" });
      }
  }
}
