import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { deleteSign, getSign } from "@/server/sign/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  switch (req.method) {
    case "delete":
      try {
        const result = await deleteSign(req.query.signId as string);
        return res.status(204).json(result);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Bad Request" });
      }
    case "get":
      try {
        const result = await getSign(req.query.signId as string);
        return res.status(200).json(result);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Bad Request" });
      }
  }
}
