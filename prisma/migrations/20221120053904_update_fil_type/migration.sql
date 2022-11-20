/*
  Warnings:

  - The values [IMAGE,PDF] on the enum `FileType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FileType_new" AS ENUM ('IMAGE_JPEG', 'IMAGE_PNG', 'IMAGE_JPG', 'IMAGE_WEBP', 'APPLICATION_PDF');
ALTER TABLE "File" ALTER COLUMN "type" TYPE "FileType_new" USING ("type"::text::"FileType_new");
ALTER TYPE "FileType" RENAME TO "FileType_old";
ALTER TYPE "FileType_new" RENAME TO "FileType";
DROP TYPE "FileType_old";
COMMIT;
