import { z } from "zod";

const MAX_FILE_SIZE = 10000000; // 10MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
];
const MESSAGE = {
  INVALID_FILE_TYPE: "請放入有效的檔案(PDF / Image)",
  INVALID_FILE_SIZE: "檔案大小不可超過10MB",
  SUCCESS: "檔案上傳成功",
};

const FileSchema = z.object({
  file: z
    .any()
    .refine((files) => files?.length == 1 || !files, MESSAGE.INVALID_FILE_TYPE)
    .refine((files) => files[0].size > MAX_FILE_SIZE, MESSAGE.INVALID_FILE_SIZE)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files[0].type),
      MESSAGE.SUCCESS
    ),
});

const validateFile = (files: File) => {
  return FileSchema.safeParse({ file: files });
};

export {
  FileSchema,
  validateFile,
  MAX_FILE_SIZE,
  ACCEPTED_IMAGE_TYPES,
  MESSAGE,
};
