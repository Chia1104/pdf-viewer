-- CreateTable
CREATE TABLE "Sign" (
    "id" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "url" TEXT,
    "base64" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Sign_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sign" ADD CONSTRAINT "Sign_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
