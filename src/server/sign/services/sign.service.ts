import { prisma } from "@/lib/prisma";
import { CreateSignDto } from "@/shared/dto/sign";
import { z } from "zod";

const createSignSchema = z.object({
  url: z.string().optional(),
  base64: z.string().optional(),
  size: z.number(),
});

const getUserSigns = async (userId: string) => {
  return await prisma.sign.findMany({
    select: {
      id: true,
      base64: true,
    },
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });
};

const createSign = async (dto: CreateSignDto, userId: string) => {
  const data = createSignSchema.parse(dto);
  return await prisma.sign.create({
    data: {
      userId,
      ...data,
    },
    select: {
      id: true,
      base64: true,
    },
  });
};

const deleteSign = async (signId: string) => {
  return await prisma.sign.delete({
    where: {
      id: signId,
    },
  });
};

const getSign = async (signId: string) => {
  return await prisma.sign.findUnique({
    where: {
      id: signId,
    },
    select: {
      id: true,
      base64: true,
    },
  });
};

export { getUserSigns, createSign, deleteSign, getSign };
