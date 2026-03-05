/*
  Warnings:

  - You are about to alter the column `employees` on the `EmissionRecord` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `userId` to the `EmissionRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmissionRecord" ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "electricity" DROP DEFAULT,
ALTER COLUMN "diesel" DROP DEFAULT,
ALTER COLUMN "gas" DROP DEFAULT,
ALTER COLUMN "water" DROP DEFAULT,
ALTER COLUMN "travel" DROP DEFAULT,
ALTER COLUMN "waste" DROP DEFAULT,
ALTER COLUMN "purchase" DROP DEFAULT,
ALTER COLUMN "employees" DROP DEFAULT,
ALTER COLUMN "employees" SET DATA TYPE INTEGER,
ALTER COLUMN "total" DROP DEFAULT;
