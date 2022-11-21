import { z } from "zod";

const MAX_FILE_SIZE = 10000000; // 10MB
const ACCEPTED_IMAGE_TYPES = [
  // "image/jpeg",
  // "image/jpg",
  // "image/png",
  // "image/webp",
  "application/pdf",
];
const MESSAGE = {
  INVALID_FILE_TYPE: "請放入有效的檔案(PDF)",
  INVALID_FILE_SIZE: "檔案大小不可超過10MB",
  SUCCESS: "檔案上傳成功",
};

const FileSchema = z.object({
  file: z
    .any()
    .refine((file) => file, MESSAGE.INVALID_FILE_TYPE)
    .refine((file) => file?.size <= MAX_FILE_SIZE, MESSAGE.INVALID_FILE_SIZE)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      MESSAGE.INVALID_FILE_TYPE
    ),
});

const validateFile = (file: File) => {
  return FileSchema.safeParse({ file: file });
};

export {
  FileSchema,
  validateFile,
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
  MESSAGE,
};
