/*
  Warnings:

  - You are about to drop the column `companyId` on the `EmissionRecord` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmissionRecord" DROP CONSTRAINT "EmissionRecord_companyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyId_fkey";

-- AlterTable
ALTER TABLE "EmissionRecord" DROP COLUMN "companyId";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "User";
